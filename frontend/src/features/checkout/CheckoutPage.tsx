import { useEffect, useMemo, useRef } from 'react';
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Alert, Box, Grid, Typography, useTheme } from '@mui/material';

import OrderSummary from '../../components/OrderSummary';
import CheckoutStepper from './CheckoutStepper';
import { useFetchCartQuery } from '../../api/cartApi';
import { useCreatePaymentIntentMutation } from '../../api/checkoutApi';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const CheckoutPage = () => {
  const theme = useTheme();
  const { data: cart } = useFetchCartQuery();
  const [createPaymentIntent, { isLoading }] = useCreatePaymentIntentMutation();
  const created = useRef(false);

  useEffect(() => {
    if (!created.current) createPaymentIntent();
    created.current = true;
  }, [createPaymentIntent]);

  const options: StripeElementsOptions | undefined = useMemo(() => {
    if (!cart?.clientSecret) return undefined;
    return {
      clientSecret: cart.clientSecret,
      appearance: {
        labels: 'floating',
        theme: 'stripe',
      },
    };
  }, [cart?.clientSecret]);

  return (
    <Box padding={3}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 8 }}>
          {!stripePromise || !options || isLoading ? (
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
          ) : (
            <Elements stripe={stripePromise} options={options}>
              <CheckoutStepper />
            </Elements>
          )}
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <OrderSummary />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CheckoutPage;
