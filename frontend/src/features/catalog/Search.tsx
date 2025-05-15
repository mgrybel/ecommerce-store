import { useEffect, useState } from 'react';
import { debounce, TextField } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../store/store';
import { setSearchTerm } from '../../api/catalogSlice';

const Search = () => {
  const { searchTerm } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();
  const [term, setTerm] = useState(searchTerm);

  useEffect(() => {
    setTerm(searchTerm);
  }, [searchTerm]);

  const debouncedSearch = debounce((event) => {
    dispatch(setSearchTerm(event.target.value));
  }, 500); // wait for 0.5 sec

  return (
    <>
      <TextField
        label='Search products'
        variant='outlined'
        fullWidth
        type='search'
        value={term}
        onChange={(e) => {
          setTerm(e.target.value);
          debouncedSearch(e);
        }}
        data-testid='search'
      />
    </>
  );
};

export default Search;
