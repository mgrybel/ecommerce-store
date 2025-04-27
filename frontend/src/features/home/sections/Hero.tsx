import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ArrowForward, MailOutline } from '@mui/icons-material';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div id='home'>
      <Box paddingX={{ xs: 2, lg: 10 }} paddingY={10} bgcolor='#f6f9fc'>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 2, md: 1 } }}>
            <Box>
              <Box marginBottom={2}>
                <Typography
                  color={theme.palette.text.primary}
                  variant='h4'
                  fontWeight={700}
                  align='center'
                >
                  Welcome to our store
                </Typography>
              </Box>
              <Box marginBottom={3}>
                <Typography
                  variant='h6'
                  component='p'
                  color={theme.palette.text.secondary}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  lectus quam, consequat sodales risus sit amet, fringilla
                  euismod neque. Vivamus nec mauris sit amet purus fermentum
                  suscipit. Sed vehicula risus ac ligula.
                </Typography>
              </Box>
              <Box
                display='flex'
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'stretched', sm: 'flex-start' }}
                justifyContent='center'
                marginTop={4}
              >
                <Button
                  component='a'
                  variant='contained'
                  size='large'
                  color='primary'
                  href='/catalog'
                  endIcon={<ArrowForward />}
                  fullWidth={isMd ? false : true}
                  disableElevation={true}
                  sx={{
                    marginRight: '15px',
                    border: '2px solid transparent',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: theme.palette.primary.main,
                      border: `2px solid ${theme.palette.primary.main}`,
                    },
                  }}
                >
                  Go to Store
                </Button>
                <Box
                  marginTop={{ xs: 2, sm: 0 }}
                  marginLeft={{ sm: 1 }}
                  width={{ xs: '100%', md: 'auto' }}
                >
                  <Button
                    component='a'
                    variant='outlined'
                    color='primary'
                    size='large'
                    href='#'
                    endIcon={<MailOutline />}
                    fullWidth={isMd ? false : true}
                    disableElevation={true}
                    sx={{
                      marginRight: '15px',
                      border: `2px solid ${theme.palette.primary.main}`,
                      '&:hover': {
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.common.white,
                        border: `2px solid ${theme.palette.primary.main}`,
                      },
                    }}
                  >
                    Contact us
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            alignItems='center'
            justifyContent='center'
            sx={{ order: { xs: 1, md: 2 } }}
          >
            <Box
              sx={{
                height: { xs: 'auto', md: 1 },
                '& img': {
                  objectFit: 'cover',
                },
                '& .lazy-load-image-loaded': {
                  height: 1,
                  width: 1,
                },
              }}
            >
              <Box
                component={LazyLoadImage}
                src='/images/hero.jpg'
                alt='Background Image'
                effect='blur'
                height={{ xs: 'auto', md: 1 }}
                maxHeight={{ xs: 300, md: 400 }}
                width={1}
                maxWidth={1}
                borderRadius='4px'
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Hero;
