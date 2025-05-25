import { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Alert,
  Box,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { Star, StarHalf } from '@mui/icons-material';
import { yellow } from '@mui/material/colors';

import { useFetchProductDetailsQuery } from '../../api/catalogApi';
import {
  useAddCartItemMutation,
  useFetchCartQuery,
  useRemoveCartItemMutation,
} from '../../api/cartApi';

const ProductDetails = () => {
  const theme = useTheme();
  const { id } = useParams();
  const [addCartItem] = useAddCartItemMutation();
  const [removeCartItem] = useRemoveCartItemMutation();
  const { data: cart } = useFetchCartQuery();
  const item = cart?.items.find((x) => x.productId === +id!);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (item) setQuantity(item.quantity);
  }, [item]);

  const { data: product, isLoading } = useFetchProductDetailsQuery(
    id ? +id : 0 // +id is the same as parseInt(id)
  );

  if (!product || isLoading) {
    return (
      <Alert severity='info' sx={{ color: theme.palette.info.main }}>
        Loading...
      </Alert>
    );
  }

  const handleUpdateCart = () => {
    const updatedQuantity = item
      ? Math.abs(quantity - item.quantity)
      : quantity;
    if (!item || quantity > item.quantity) {
      addCartItem({ product, quantity: updatedQuantity });
    } else {
      removeCartItem({ productId: product.id, quantity: updatedQuantity });
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = +event.currentTarget.value;

    if (value >= 0) setQuantity(value);
  };

  const productDetails = [
    { label: 'Type', value: product.type },
    { label: 'Brand', value: product.brand },
    { label: 'Quantity in stock', value: product.quantityInStock },
  ];

  return (
    <Box padding={3}>
      <Grid container spacing={6} maxWidth='lg' sx={{ mx: 'auto' }}>
        <Grid size={{ sm: 12, md: 6 }}>
          <img
            src={product?.pictureUrl}
            alt={product?.name}
            style={{ width: '100%', borderRadius: '10px' }}
          />
        </Grid>
        <Grid size={{ sm: 12, md: 6 }}>
          <Typography
            variant='h5'
            sx={{ fontWeight: 'bold', textTransform: 'uppercase', mb: 2 }}
          >
            {product.name}
          </Typography>
          <Typography
            variant='h5'
            color={theme.palette.text.secondary}
            sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}
          >
            ${(product?.price / 100).toFixed(2)}
          </Typography>
          <Grid container sx={{ mt: 3 }}>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Star fontSize='large' sx={{ color: yellow[700] }} />
              <Star fontSize='large' sx={{ color: yellow[700] }} />
              <Star fontSize='large' sx={{ color: yellow[700] }} />
              <StarHalf fontSize='large' sx={{ color: yellow[700] }} />
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Typography sx={{ fontWeight: 'bold', mt: 1 }}>
                4.5 out of 5
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Typography sx={{ fontWeight: 'bold', mt: 1 }}>
                1,818 ratings
              </Typography>
            </Grid>
          </Grid>
          <Typography variant='subtitle1' sx={{ mt: 3 }}>
            {product.description}
          </Typography>

          <TableContainer>
            <Table
              sx={{
                ['& .MuiTableCell-root']: {
                  borderBottom: 'none',
                },
                '& td': { fontSize: '1rem', paddingX: 0, paddingY: 2 },
              }}
            >
              <TableBody>
                {productDetails.map((detail, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <span style={{ fontWeight: 'bold' }}>
                        {detail.label}:{' '}
                      </span>
                      <span style={{ marginLeft: '10px' }}>{detail.value}</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Grid container spacing={2} marginTop={3}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                variant='outlined'
                type='number'
                label='Quantity in cart'
                fullWidth
                value={quantity}
                onChange={handleInputChange}
                id='quantity'
                data-testid='quantity'
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Button
                onClick={handleUpdateCart}
                disabled={
                  quantity === item?.quantity || (!item && quantity === 0)
                }
                color='primary'
                size='large'
                variant='contained'
                fullWidth
                sx={{ height: '55px' }}
                id={item ? 'update' : 'add'}
                data-testid={item ? 'update' : 'add'}
              >
                {item ? 'Update quantity' : 'Add to cart'}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetails;
