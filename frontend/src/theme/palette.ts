import { PaletteMode } from '@mui/material';
import { green } from '@mui/material/colors';

export const light = {
  mode: 'light' as PaletteMode,
  primary: {
    main: 'rgb(205, 56, 79)',
    contrastText: 'rgb(255, 255, 255)',
  },
  success: {
    main: green[700],
    light: 'rgb(131, 231, 168)',
    dark: green[600],
  },
  text: {
    primary: 'rgb(43, 52, 69)',
    secondary: 'rgb(125, 135, 156)',
  },
  background: {
    paper: 'rgb(242, 243, 245)',
    default: 'rgb(255, 255, 255)',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
};
