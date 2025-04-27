import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Alert, Typography, useTheme } from '@mui/material';

import { useUserInfoQuery } from '../api/accountApi';

const RequireAuth = () => {
  const theme = useTheme();
  const { data: user, isLoading } = useUserInfoQuery();
  const location = useLocation();

  if (isLoading) {
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

  if (!user) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  const adminRoutes = ['/Inventory', '/admin-dashboard'];

  if (
    adminRoutes.includes(location.pathname) &&
    !user.roles.includes('Admin')
  ) {
    return <Navigate to='/' replace />;
  }

  return <Outlet />;
};

export default RequireAuth;
