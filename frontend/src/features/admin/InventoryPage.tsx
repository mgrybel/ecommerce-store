import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

import { useAppDispatch, useAppSelector } from '../../store/store';
import { useFetchProductsQuery } from '../../api/catalogApi';
import { useDeleteProductMutation } from '../../api/adminApi';
import { setPageNumber } from '../../api/catalogSlice';
import { currencyFormat } from '../../utils/utils';
import { Product } from '../../models/product';
import CustomPagination from '../../components/CustomPagination';
import ProductForm from './ProductForm';
import Search from '../catalog/Search';

const InventoryPage = () => {
  const productParams = useAppSelector((state) => state.catalog);
  const { data, refetch } = useFetchProductsQuery(productParams);
  const dispatch = useAppDispatch();
  const [editMode, setEditMode] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [deleteProduct] = useDeleteProductMutation();

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setEditMode(true);
  };

  const handleDeleteProduct = async (id: number) => {
    try {
      await deleteProduct(id);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  if (editMode)
    return (
      <ProductForm
        setEditMode={setEditMode}
        product={selectedProduct}
        refetch={refetch}
        setSelectedProduct={setSelectedProduct}
      />
    );

  return (
    <Box padding={3}>
      <Box display='flex' justifyContent='space-between'>
        <Typography sx={{ p: 2, textTransform: 'uppercase' }} variant='h5'>
          Inventory
        </Typography>
        <Button
          onClick={() => setEditMode(true)}
          sx={{ m: 2 }}
          size='large'
          variant='contained'
          id='create'
          data-testid='create'
        >
          Create
        </Button>
      </Box>
      <Box sx={{ marginY: 3 }}>
        <Card>
          <CardContent>
            <Grid container spacing={{ xs: 4, sm: 3, md: 2 }}>
              <Grid size={12} sx={{ margin: 2 }}>
                <Search />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>#</TableCell>
              <TableCell align='left' sx={{ fontWeight: 'bold' }}>
                Product
              </TableCell>
              <TableCell align='right' sx={{ fontWeight: 'bold' }}>
                Price
              </TableCell>
              <TableCell align='center' sx={{ fontWeight: 'bold' }}>
                Type
              </TableCell>
              <TableCell align='center' sx={{ fontWeight: 'bold' }}>
                Brand
              </TableCell>
              <TableCell align='center' sx={{ fontWeight: 'bold' }}>
                Quantity
              </TableCell>
              <TableCell align='right' sx={{ fontWeight: 'bold' }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.items.map((product) => (
                <TableRow
                  key={product.id}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                  }}
                >
                  <TableCell component='th' scope='row'>
                    {product.id}
                  </TableCell>
                  <TableCell align='left'>
                    <Box display='flex' alignItems='center'>
                      <img
                        src={product.pictureUrl}
                        alt={product.name}
                        style={{ height: 50, marginRight: 20 }}
                      />
                      <span>{product.name}</span>
                    </Box>
                  </TableCell>
                  <TableCell align='right'>
                    {currencyFormat(product.price)}
                  </TableCell>
                  <TableCell align='center'>{product.type}</TableCell>
                  <TableCell align='center'>{product.brand}</TableCell>
                  <TableCell align='center'>
                    {product.quantityInStock}
                  </TableCell>
                  <TableCell align='right'>
                    <Button
                      onClick={() => handleSelectProduct(product)}
                      startIcon={<Edit />}
                      id={`edit${product.id}`}
                      data-testid={`edit${product.id}`}
                    />
                    <Button
                      onClick={() => handleDeleteProduct(product.id)}
                      startIcon={<Delete />}
                      color='error'
                      id={`delete${product.id}`}
                      data-testid={`delete${product.id}`}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <Box sx={{ p: 3 }}>
          {data?.pagination && data.items.length > 0 && (
            <CustomPagination
              metadata={data.pagination}
              onPageChange={(page: number) => dispatch(setPageNumber(page))}
            />
          )}
        </Box>
      </TableContainer>
    </Box>
  );
};

export default InventoryPage;
