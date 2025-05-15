import { Box, Grid, IconButton, Paper, Typography } from '@mui/material';
import { Add, Close, Remove } from '@mui/icons-material';

import {
  useAddCartItemMutation,
  useRemoveCartItemMutation,
} from '../../api/cartApi';
import { Item } from '../../models/cart';
import { currencyFormat } from '../../utils/utils';

type Props = {
  item: Item;
};

const CartItem = ({ item }: Props) => {
  const [removeCartItem] = useRemoveCartItemMutation();
  const [addCartItem] = useAddCartItemMutation();

  return (
    <Paper
      sx={{
        height: 140,
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 2,
      }}
    >
      <Box display='flex' alignItems='center'>
        <Box
          component='img'
          src={item.pictureUrl}
          alt={item.name}
          sx={{
            width: 100,
            height: 100,
            objectFit: 'cover',
            borderRadius: '4px',
            marginRight: 8,
            ml: 4,
          }}
        />
        <Box display='flex' flexDirection='column' gap={1}>
          <Typography variant='h6'>{item.name}</Typography>
          <Box display='flex' alignItems='center' gap={3}>
            <Typography sx={{ fontSize: '1.1rem' }}>
              {currencyFormat(item.price)} x {item.quantity}
            </Typography>
            <Typography color='primary' sx={{ fontSize: '1.1rem' }}>
              {currencyFormat(item.price * item.quantity)}
            </Typography>
          </Box>

          <Grid
            container
            spacing={1}
            alignItems='center'
            sx={{ mb: { xs: 2, md: 1 } }}
          >
            <IconButton
              onClick={() =>
                removeCartItem({ productId: item.productId, quantity: 1 })
              }
              color='error'
              size='small'
              sx={{ border: 1, borderRadius: '4px', minWidth: 0 }}
              data-testid='decrease'
            >
              <Remove />
            </IconButton>
            <Typography variant='h6'>{item.quantity}</Typography>
            <IconButton
              onClick={() => addCartItem({ product: item, quantity: 1 })}
              color='success'
              size='small'
              sx={{ border: 1, borderRadius: '4px', minWidth: 0 }}
              data-testid='increase'
            >
              <Add />
            </IconButton>
          </Grid>
        </Box>
      </Box>
      <IconButton
        onClick={() =>
          removeCartItem({
            productId: item.productId,
            quantity: item.quantity,
          })
        }
        color='error'
        size='small'
        sx={{
          border: 1,
          borderRadius: '3px',
          minWidth: 0,
          alignSelf: 'start',
          mr: { xs: 2, md: 1 },
          mt: { xs: 2, md: 1 },
        }}
        data-testid='remove'
      >
        <Close />
      </IconButton>
    </Paper>
  );
};

export default CartItem;
