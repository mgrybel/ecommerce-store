import { ComponentsOverrides } from '@mui/material';

export const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        fontWeight: 600,
        borderRadius: '4px',
        paddingTop: 10,
        paddingBottom: 10,
      },
    } as ComponentsOverrides['MuiButton'],
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        borderRadius: '4px',
      },
    } as ComponentsOverrides['MuiInputBase'],
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: '4px',
      },
      input: {
        borderRadius: '4px',
      },
    } as ComponentsOverrides['MuiOutlinedInput'],
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: '4px',
      },
    } as ComponentsOverrides['MuiCard'],
  },
};
