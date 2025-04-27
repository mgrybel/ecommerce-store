import { Box, LinearProgress } from '@mui/material';

const LoadingScreen = () => {
  return (
    <Box width='100%' position='fixed' top={0} left={0} zIndex={2001}>
      <LinearProgress />
    </Box>
  );
};

export default LoadingScreen;
