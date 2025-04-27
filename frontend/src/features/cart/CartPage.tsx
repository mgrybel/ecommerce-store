import { Alert, Box, Grid, Typography, useTheme } from '@mui/material';

import { useFetchCartQuery } from '../../api/cartApi';
import CartItem from './CartItem';
import OrderSummary from '../../components/OrderSummary';

const CartPage = () => {
  const theme = useTheme();
  const { data, isLoading } = useFetchCartQuery();

  if (isLoading) return <Typography>Loading cart...</Typography>;

  if (!data || data.items.length === 0) {
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
        <Typography variant='h6'>Your cart is empty</Typography>
      </Alert>
    );
  }

  return (
    <Box padding={3}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 8 }}>
          {data.items.map((item) => (
            <CartItem item={item} key={item.productId} />
          ))}
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <OrderSummary />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartPage;
