import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  Alert,
  Box,
  Button,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
  useTheme,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import {
  AddressElement,
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import {
  ConfirmationToken,
  StripeAddressElementChangeEvent,
  StripePaymentElementChangeEvent,
} from '@stripe/stripe-js';

import Review from './Review';
import {
  useFetchAddressQuery,
  useUpdateUserAddressMutation,
} from '../../api/accountApi';

import { useCart } from '../../hooks/useCart';
import { currencyFormat } from '../../utils/utils';
import { useCreateOrderMutation } from '../../api/orderApi';

const steps = ['Address', 'Payment', 'Review'];

const CheckoutStepper = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [createOrder] = useCreateOrderMutation();
  //const { data: { name, ...restAddress } = {} as Address, isLoading } = useFetchAddressQuery();
  const { isLoading } = useFetchAddressQuery();
  const [updateAddress] = useUpdateUserAddressMutation();
  const [submitting, setSubmitting] = useState(false);
  const elements = useElements();
  const stripe = useStripe();
  const [addressComplete, setAddressComplete] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const { cart, clearCart, total } = useCart();
  const [confirmationToken, setConfirmationToken] =
    useState<ConfirmationToken | null>(null);
  const navigate = useNavigate();

  const handleNext = async () => {
    if (activeStep === 0 && elements) {
      const address = await getStripeAddress();
      if (address) await updateAddress(address);
    }
    if (activeStep === 1) {
      if (!elements || !stripe) return;
      const result = await elements.submit();
      if (result.error) return toast.error(result.error.message);

      const stripeResult = await stripe.createConfirmationToken({ elements });
      if (stripeResult.error) return toast.error(stripeResult.error.message);
      setConfirmationToken(stripeResult.confirmationToken);
    }
    if (activeStep === 2) {
      await confirmPayment();
    }
    if (activeStep < 2) setActiveStep((step) => step + 1);
  };

  const confirmPayment = async () => {
    setSubmitting(true);
    try {
      if (!confirmationToken || !cart?.clientSecret)
        throw new Error('Unable to process payment');

      const orderModel = await createOrderModel();
      const orderResult = await createOrder(orderModel);

      const paymentResult = await stripe?.confirmPayment({
        clientSecret: cart.clientSecret,
        redirect: 'if_required',
        confirmParams: {
          confirmation_token: confirmationToken.id,
        },
      });

      if (paymentResult?.paymentIntent?.status === 'succeeded') {
        navigate('/checkout/success', { state: orderResult });
        clearCart();
      } else if (paymentResult?.error) {
        throw new Error(paymentResult.error.message);
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
      setActiveStep((step) => step - 1);
    } finally {
      setSubmitting(false);
    }
  };

  const createOrderModel = async () => {
    const shippingAddress = await getStripeAddress();
    const paymentSummary = confirmationToken?.payment_method_preview.card;

    if (!shippingAddress || !paymentSummary) {
      throw new Error('Problem creating order');
    }

    return { shippingAddress, paymentSummary };
  };

  const getStripeAddress = async () => {
    const addressElement = elements?.getElement('address');
    if (!addressElement) return null;
    const {
      value: { name, address },
    } = await addressElement.getValue();

    if (name && address) return { ...address, name };

    return null;
  };

  const handleBack = () => {
    setActiveStep((step) => step - 1);
  };

  const handleAddressChange = (event: StripeAddressElementChangeEvent) => {
    setAddressComplete(event.complete);
  };

  const handlePaymentChange = (event: StripePaymentElementChangeEvent) => {
    setPaymentComplete(event.complete);
  };

  if (isLoading) {
    return (
      <Alert
        severity='info'
        sx={{
          color: theme.palette.info.main,
          '& .MuiAlert-icon': {
            fontSize: 35,
          },
        }}
      >
        <Typography variant='h6'>Loading checkout...</Typography>
      </Alert>
    );
  }

  return (
    <Paper sx={{ p: 3, borderRadius: '4px' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <Box sx={{ mt: 2 }}>
        <Box sx={{ display: activeStep === 0 ? 'block' : 'none' }}>
          <AddressElement
            options={{
              mode: 'shipping',
              defaultValues: {
                name: '',
                address: {
                  line1: '',
                  line2: '',
                  city: '',
                  state: '',
                  postal_code: '',
                  country: '',
                },
              },
            }}
            onChange={handleAddressChange}
          />
        </Box>
        <Box sx={{ display: activeStep === 1 ? 'block' : 'none' }}>
          <PaymentElement
            onChange={handlePaymentChange}
            options={{
              wallets: {
                applePay: 'never',
                googlePay: 'never',
              },
            }}
          />
        </Box>
        <Box sx={{ display: activeStep === 2 ? 'block' : 'none' }}>
          <Review confirmationToken={confirmationToken} />
        </Box>
      </Box>

      <Box display='flex' paddingTop={2} justifyContent='space-between'>
        <Button onClick={handleBack}>Back</Button>
        <LoadingButton
          onClick={handleNext}
          disabled={
            (activeStep === 0 && !addressComplete) ||
            (activeStep === 1 && !paymentComplete) ||
            submitting
          }
          loading={submitting}
        >
          {activeStep === steps.length - 1
            ? `Pay ${currencyFormat(total)}`
            : 'Next'}
        </LoadingButton>
      </Box>
    </Paper>
  );
};

export default CheckoutStepper;
