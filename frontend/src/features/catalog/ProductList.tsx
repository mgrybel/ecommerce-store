import { Grid } from '@mui/material';

import { Product } from '../../models/product';
import ProductCard from './ProductCard';

type Props = {
  products: Product[];
};

const ProductList = ({ products }: Props) => {
  return (
    <Grid container spacing={{ xs: 4, sm: 3, md: 2 }}>
      {products.map((product) => (
        <Grid
          key={product.id}
          size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
          display={{ xs: 'block', sm: 'flex' }}
        >
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
