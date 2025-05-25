import {
  Box,
  Button,
  FormControl,
  OutlinedInput,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const CallToAction = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box bgcolor='#f6f9fc'>
      <Box
        maxWidth={{ sm: 720, md: 1236 }}
        width={1}
        margin='0 auto'
        paddingX={2}
        paddingY={{ xs: 4, sm: 6, md: 8 }}
      >
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Box marginBottom={4}>
            <Typography
              variant='h4'
              align='center'
              fontWeight={700}
              color={theme.palette.text.primary}
              gutterBottom
            >
              Email Newsletter
            </Typography>
            <Typography
              variant='h6'
              align='center'
              color={theme.palette.text.secondary}
            >
              Sign up for our newsletter to get updates and special offers
            </Typography>
          </Box>
          <Box
            width={1}
            display='flex'
            justifyContent='center'
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          >
            <FormControl
              fullWidth
              variant='outlined'
              sx={{
                maxWidth: { sm: 400 },
                width: 1,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: theme.palette.primary.main,
                  },
                  '&:hover fieldset': {
                    borderColor: theme.palette.primary.main,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: theme.palette.primary.main,
                  },
                },
                '& .MuiInputBase-root': {
                  color: theme.palette.primary.main,
                },
                '& .MuiInputAdornment-root svg': {
                  color: theme.palette.primary.main,
                },
              }}
            >
              <OutlinedInput
                placeholder='Enter your email'
                id='email'
                data-testid='email'
              />
            </FormControl>
            <Box
              component={Button}
              variant='contained'
              color='primary'
              size='large'
              fullWidth={isMd ? false : true}
              height={54}
              marginTop={{ xs: 2, sm: 0 }}
              marginLeft={{ sm: 2 }}
              sx={{
                marginRight: '15px',
                border: '2px solid transparent',
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: theme.palette.primary.main,
                  border: `2px solid ${theme.palette.primary.main}`,
                },
              }}
              id='subscribe'
              data-testid='subscribe'
            >
              Subscribe
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CallToAction;
