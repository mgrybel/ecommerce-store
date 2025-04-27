import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import {
  HeadsetMicOutlined,
  LocalAtmOutlined,
  LocalShippingOutlined,
  SavingsOutlined,
} from '@mui/icons-material';

const Services = () => {
  const theme = useTheme();

  return (
    <Container
      maxWidth='xl'
      sx={{
        marginY: '6em',
      }}
    >
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 3 }}>
          <Box
            flexGrow={1}
            gap={2}
            display='flex'
            justifyContent='flex-start'
            alignItems='flex-start'
            borderRight={`1px solid ${theme.palette.text.secondary}`}
          >
            <LocalShippingOutlined
              sx={{ fontSize: 50, color: theme.palette.text.primary }}
            />
            <Box>
              <Box lineHeight={1.3}>
                <Typography variant='h6'>Fast Delivery</Typography>
              </Box>
              <Box>
                <Typography
                  variant='h6'
                  sx={{ color: theme.palette.text.secondary }}
                >
                  Starting from $10
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Box
            flexGrow={1}
            gap={2}
            display='flex'
            justifyContent='flex-start'
            alignItems='flex-start'
            borderRight={`1px solid ${theme.palette.text.secondary}`}
          >
            <LocalAtmOutlined
              sx={{ fontSize: 50, color: theme.palette.text.primary }}
            />
            <Box>
              <Box lineHeight={1.3}>
                <Typography variant='h6'>Payment</Typography>
              </Box>
              <Box>
                <Typography
                  variant='h6'
                  sx={{ color: theme.palette.text.secondary }}
                >
                  Secure system
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Box
            flexGrow={1}
            gap={2}
            display='flex'
            justifyContent='flex-start'
            alignItems='flex-start'
            borderRight={`1px solid ${theme.palette.text.secondary}`}
          >
            <SavingsOutlined
              sx={{ fontSize: 50, color: theme.palette.text.primary }}
            />
            <Box>
              <Box lineHeight={1.3}>
                <Typography variant='h6'>Money-back Guarantee</Typography>
              </Box>
              <Box>
                <Typography
                  variant='h6'
                  sx={{ color: theme.palette.text.secondary }}
                >
                  7-day money back
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Box
            flexGrow={1}
            gap={2}
            display='flex'
            justifyContent='flex-start'
            alignItems='flex-start'
            borderRight={`1px solid ${theme.palette.text.secondary}`}
            sx={{
              ':last-child': {
                borderRight: 0,
              },
            }}
          >
            <HeadsetMicOutlined
              sx={{ fontSize: 50, color: theme.palette.text.primary }}
            />
            <Box>
              <Box lineHeight={1.3}>
                <Typography variant='h6'>Online Support</Typography>
              </Box>
              <Box>
                <Typography
                  variant='h6'
                  sx={{ color: theme.palette.text.secondary }}
                >
                  24/7 support
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Services;
