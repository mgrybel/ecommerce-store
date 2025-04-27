import { Link, useLocation } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';

import { Order } from '../../models/order';
import {
  currencyFormat,
  formatAddressString,
  formatPaymentString,
} from '../../utils/utils';

const CheckoutSuccess = () => {
  const theme = useTheme();
  const { state } = useLocation();
  const order = state.data as Order;

  if (!order) return <Typography>Problem accessing the order</Typography>;

  return (
    <Box padding={3}>
      <Container maxWidth='lg'>
        <Typography variant='h4' gutterBottom fontWeight='bold'>
          Thanks for your order!
        </Typography>
        <Typography variant='body1' color='textSecondary' gutterBottom>
          Your order <strong>#{order.id}</strong> will never be processed as
          this is a demo shop.
        </Typography>

        <Paper
          elevation={1}
          sx={{
            p: 2,
            mb: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
          }}
        >
          <Box display='flex' justifyContent='space-between'>
            <Typography variant='body2' color={theme.palette.text.primary}>
              Order date
            </Typography>
            <Typography variant='body2' color={theme.palette.text.secondary}>
              {order.orderDate}
            </Typography>
          </Box>
          <Divider />
          <Box display='flex' justifyContent='space-between'>
            <Typography variant='body2' color={theme.palette.text.primary}>
              Payment method
            </Typography>
            <Typography variant='body2' color={theme.palette.text.secondary}>
              {formatPaymentString(order.paymentSummary)}
            </Typography>
          </Box>
          <Divider />
          <Box display='flex' justifyContent='space-between'>
            <Typography variant='body2' color={theme.palette.text.primary}>
              Shipping address
            </Typography>
            <Typography variant='body2' color={theme.palette.text.secondary}>
              {formatAddressString(order.shippingAddress)}
            </Typography>
          </Box>
          <Divider />
          <Box display='flex' justifyContent='space-between'>
            <Typography variant='body2' color={theme.palette.text.primary}>
              Amount
            </Typography>
            <Typography variant='body2' color={theme.palette.text.secondary}>
              {currencyFormat(order.total)}
            </Typography>
          </Box>
        </Paper>

        <Box display='flex' justifyContent='flex-start' gap={2}>
          <Button
            variant='contained'
            color='primary'
            component={Link}
            to={`/orders/${order.id}`}
          >
            View your order
          </Button>
          <Button
            component={Link}
            to='/catalog'
            variant='outlined'
            color='primary'
          >
            Continue shopping
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CheckoutSuccess;
