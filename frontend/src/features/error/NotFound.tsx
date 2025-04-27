import { Box, Button, Container, Link, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ArrowBack, ErrorOutline } from '@mui/icons-material';

const NotFound = () => {
  const theme = useTheme();
  return (
    <Box
      component='main'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      minWidth='100%'
      minHeight='80vh'
    >
      <Container maxWidth='md'>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <ErrorOutline
            sx={{
              width: 100,
              height: 100,
              color: theme.palette.error.main,
              marginBottom: 5,
            }}
          />
          <Typography
            variant='h4'
            component='h4'
            role='heading'
            align='center'
            marginBottom={2}
            fontWeight={700}
          >
            Oops!
          </Typography>
          <Typography
            variant='h5'
            component='h5'
            role='heading'
            align='center'
            marginBottom={2}
            fontWeight={700}
          >
            The page you were looking for does not exist.
          </Typography>
          <Typography
            variant='subtitle1'
            component='p'
            color={theme.palette.text.secondary}
            align='center'
          >
            Check if you typed the address correctly, go back to your previous
            page, or click the Home button below to go to the Home page.
          </Typography>
          <Box marginTop={4} display='flex' justifyContent='center'>
            <Button
              component={Link}
              variant='contained'
              color='primary'
              size='large'
              href='/'
              startIcon={<ArrowBack fontSize='small' />}
              sx={{
                color: theme.palette.common.white,
              }}
            >
              Home
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFound;
