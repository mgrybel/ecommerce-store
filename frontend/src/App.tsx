import { CssBaseline, ThemeProvider } from '@mui/material';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import getTheme from './theme/theme';
import Layout from './layout/Layout';

const App = () => {
  return (
    <ThemeProvider theme={getTheme()}>
      <ScrollRestoration />
      <CssBaseline />
      <Layout>
        <Outlet />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
