import { useDispatch } from 'react-redux';
import { Alert, Box, Grid, Typography, useTheme } from '@mui/material';

import {
  useFetchFiltersQuery,
  useFetchProductsQuery,
} from '../../api/catalogApi';
import { useAppSelector } from '../../store/store';
import { setPageNumber } from '../../api/catalogSlice';
import ProductList from './ProductList';
import Filters from './Filters';
import CustomPagination from '../../components/CustomPagination';

const Catalog = () => {
  const theme = useTheme();
  const productParams = useAppSelector((state) => state.catalog);
  const { data, isLoading } = useFetchProductsQuery(productParams);
  const { data: filtersData, isLoading: filtersLoading } =
    useFetchFiltersQuery();
  const dispatch = useDispatch();

  if (isLoading || !data || filtersLoading || !filtersData) {
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
        <Typography variant='h6'>Loading...</Typography>
      </Alert>
    );
  }

  return (
    <Box padding={3}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, xl: 2 }}>
          <Filters filtersData={filtersData} />
        </Grid>
        <Grid size={{ xs: 12, xl: 10 }}>
          {data.items && data.items.length > 0 ? (
            <>
              <ProductList products={data.items} />
              <CustomPagination
                metadata={data.pagination}
                onPageChange={(page: number) => {
                  dispatch(setPageNumber(page));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </>
          ) : (
            <Alert
              severity='info'
              sx={{
                color: theme.palette.info.main,
                '& .MuiAlert-icon': {
                  fontSize: 35,
                },
              }}
            >
              <Typography variant='h6'>
                There are no results for this filter
              </Typography>
            </Alert>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Catalog;
