import { Theme, responsiveFontSizes } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { light } from './palette';
import { components } from './components';

const getTheme = (): Theme =>
  responsiveFontSizes(
    createTheme({
      palette: light,
      typography: {
        fontFamily: '"Open Sans", sans-serif',
      },
      components: components,
    })
  );

export default getTheme;
