import { useLocation } from 'react-router-dom';
import { Box, Container, Divider, Paper, Typography } from '@mui/material';

const ServerError = () => {
  const { state } = useLocation();
  return (
    <Box padding={3}>
      <Container component={Paper}>
        {state.error ? (
          <>
            <Typography
              gutterBottom
              variant='h3'
              sx={{ px: 4, pt: 2 }}
              color='secondary'
            >
              {state.error.title}
            </Typography>
            <Divider />
            <Typography variant='body1' sx={{ p: 4 }}>
              {state.error.detail}
            </Typography>
          </>
        ) : (
          <Typography variant='h5' gutterBottom>
            Server error
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default ServerError;
