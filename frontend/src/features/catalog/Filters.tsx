import { Box, Button, Paper } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../store/store';
import {
  resetParams,
  setBrands,
  setOrderBy,
  setTypes,
} from '../../api/catalogSlice';
import CheckboxButtons from '../../components/CheckboxButtons';
import CustomRadioButtonGroup from '../../components/CustomRadioButtonGroup';
import Search from './Search';

const sortOptions = [
  { value: 'name', label: 'Alphabetical' },
  { value: 'priceDesc', label: 'Price: High to low' },
  { value: 'price', label: 'Price: Low to high' },
];

type Props = {
  filtersData: { brands: string[]; types: string[] };
};

const Filters = ({ filtersData: data }: Props) => {
  const { orderBy, types, brands } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  return (
    <Box display='flex' flexDirection='column' gap={3}>
      <Paper>
        <Search />
      </Paper>
      <Paper
        sx={{
          p: 3,
          display: { xl: 'flex', lg: 'none', md: 'none', xs: 'none' },
        }}
      >
        <CustomRadioButtonGroup
          selectedValue={orderBy}
          options={sortOptions}
          onChange={(e) => dispatch(setOrderBy(e.target.value))}
        />
      </Paper>
      <Paper
        sx={{
          p: 3,
          display: { xl: 'flex', lg: 'none', md: 'none', xs: 'none' },
        }}
      >
        <CheckboxButtons
          items={data.brands}
          checked={brands}
          onChange={(items: string[]) => dispatch(setBrands(items))}
        />
      </Paper>
      <Paper
        sx={{
          p: 3,
          display: { xl: 'flex', lg: 'none', md: 'none', xs: 'none' },
        }}
      >
        <CheckboxButtons
          items={data.types}
          checked={types}
          onChange={(items: string[]) => dispatch(setTypes(items))}
        />
      </Paper>
      <Button
        onClick={() => dispatch(resetParams())}
        sx={{ display: { xl: 'flex', lg: 'none', md: 'none', xs: 'none' } }}
        data-testid='reset'
      >
        Reset filters
      </Button>
    </Box>
  );
};

export default Filters;
