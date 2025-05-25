import { Link, useLocation } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';
import {
  Box,
  Typography,
  Divider,
  Button,
  TextField,
  Paper,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Delete } from '@mui/icons-material';

import { useCart } from '../hooks/useCart';
import { useAddCouponMutation, useRemoveCouponMutation } from '../api/cartApi';
import { currencyFormat } from '../utils/utils';

const OrderSummary = () => {
  const { subtotal, deliveryFee, discount, cart, total } = useCart();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const [addCoupon] = useAddCouponMutation();
  const [removeCoupon, { isLoading }] = useRemoveCouponMutation();

  const onSubmit = async (data: FieldValues) => {
    await addCoupon(data.code);
  };

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      maxWidth='lg'
      mx='auto'
    >
      <Paper sx={{ mb: 2, p: 3, width: '100%', borderRadius: '4px' }}>
        <Typography variant='h6' component='p' fontWeight='bold'>
          Order summary
        </Typography>
        <Typography variant='body2' sx={{ fontStyle: 'italic' }}>
          Orders over $100 qualify for free delivery!
        </Typography>
        <Box mt={2}>
          <Box display='flex' justifyContent='space-between' mb={1}>
            <Typography color='textSecondary'>Subtotal</Typography>
            <Typography>{currencyFormat(subtotal)}</Typography>
          </Box>
          <Box display='flex' justifyContent='space-between' mb={1}>
            <Typography color='textSecondary'>Discount</Typography>
            <Typography color='success'>-{currencyFormat(discount)}</Typography>
          </Box>
          <Box display='flex' justifyContent='space-between' mb={1}>
            <Typography color='textSecondary'>Delivery fee</Typography>
            <Typography>{currencyFormat(deliveryFee)}</Typography>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Box display='flex' justifyContent='space-between' mb={1}>
            <Typography color='textSecondary'>Total</Typography>
            <Typography>{currencyFormat(total)}</Typography>
          </Box>
        </Box>

        <Box mt={2}>
          {!location.pathname.includes('checkout') && (
            <Button
              component={Link}
              to='/checkout'
              variant='contained'
              color='primary'
              fullWidth
              sx={{ mb: 1 }}
              id='checkout'
              data-testid='checkout'
            >
              Checkout
            </Button>
          )}
          <Button
            component={Link}
            to='/catalog'
            fullWidth
            id='continue'
            data-testid='continue'
          >
            Continue Shopping
          </Button>
        </Box>
      </Paper>

      {/* Coupon Code Section */}
      {location.pathname.includes('checkout') && (
        <Paper sx={{ width: '100%', borderRadius: '4px', p: 3 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant='subtitle1' component='label'>
              Do you have a voucher code?
            </Typography>

            {cart?.coupon && (
              <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
              >
                <Typography fontWeight='bold' variant='body2'>
                  {cart.coupon.name} applied
                </Typography>
                <LoadingButton
                  loading={isLoading}
                  onClick={() => removeCoupon()}
                >
                  <Delete color='error' />
                </LoadingButton>
              </Box>
            )}

            <TextField
              label='Voucher code'
              variant='outlined'
              fullWidth
              disabled={!!cart?.coupon}
              {...register('code', { required: 'Voucher code missing' })}
              sx={{ my: 2 }}
              id='voucher'
              data-testid='voucher'
            />

            <LoadingButton
              loading={isSubmitting}
              type='submit'
              variant='contained'
              color='primary'
              fullWidth
              disabled={!!cart?.coupon}
              id='apply'
              data-testid='apply'
            >
              Apply code
            </LoadingButton>
          </form>
        </Paper>
      )}
    </Box>
  );
};

export default OrderSummary;
