import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from '@mui/material';

import { Product } from '../../models/product';
import { useAddCartItemMutation } from '../../api/cartApi';
import { currencyFormat } from '../../utils/utils';

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const theme = useTheme();
  const [addCartItem, { isLoading }] = useAddCartItemMutation();

  return (
    <Card
      elevation={3}
      sx={{
        //width: 300,
        width: { sx: 400, sm: 350, md: 350, lg: 300 },
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardMedia
        sx={{ height: 240, backgroundSize: 'cover' }}
        image={product.pictureUrl}
        title={product.name}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant='subtitle2'
          sx={{ textTransform: 'uppercase' }}
        >
          {product.name}
        </Typography>
        <Typography variant='h6' sx={{ color: theme.palette.text.secondary }}>
          {currencyFormat(product.price)}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Button
          disabled={isLoading}
          onClick={() => addCartItem({ product: product, quantity: 1 })}
          id='addToCart'
          data-testid='addToCart'
        >
          Add to cart
        </Button>
        <Button
          component={Link}
          to={`/catalog/${product.id}`}
          id={`view${product.id}`}
          data-testid={`view${product.id}`}
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
