import { ShoppingBagOutlined } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const FooterHome = () => {
  const theme = useTheme();

  return (
    <>
      <Box marginTop='70px' padding='40px 0' bgcolor='#f6f9fc'>
        <Box
          width='80%'
          margin='auto'
          display='flex'
          justifyContent='space-between'
          flexWrap='wrap'
          rowGap='30px'
          columnGap='clamp(20px, 30px, 40px)'
        >
          <Box width='clamp(20%, 30%, 40%)'>
            <IconButton size='large' disabled>
              <ShoppingBagOutlined
                sx={{
                  color: theme.palette.primary.main,
                  height: 40,
                  width: 40,
                }}
              />
              <Box sx={{ display: { md: 'inline', xs: 'none' } }}>
                <Typography
                  variant='h6'
                  sx={{
                    flexGrow: 1,
                    color: theme.palette.text.primary,
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    marginLeft: '10px',
                  }}
                >
                  E-commerce Store
                </Typography>
              </Box>
            </IconButton>
            <Typography variant='body2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vulputate lorem erat, vel volutpat leo finibus non. Praesent
              interdum vel ante a fermentum. Vestibulum auctor massa sed velit
              luctus, sollicitudin luctus elit efficitur. Mauris consectetur
              lorem eget ante euismod aliquet vehicula non magna. Curabitur quis
              semper nulla. Donec ac vehicula lectus. Quisque accumsan porttitor
              turpis non tempus.
            </Typography>
          </Box>

          <Box>
            <Typography
              variant='h6'
              fontWeight='bold'
              mb='30px'
              sx={{ textTransform: 'uppercase' }}
            >
              About Us
            </Typography>
            <Typography variant='body2' mb='30px'>
              Careers
            </Typography>
            <Typography variant='body2' mb='30px'>
              Our Stores
            </Typography>
            <Typography variant='body2' mb='30px'>
              Terms & Conditions
            </Typography>
            <Typography variant='body2' mb='30px'>
              Privacy Policy
            </Typography>
          </Box>

          <Box>
            <Typography
              variant='h6'
              fontWeight='bold'
              mb='30px'
              sx={{ textTransform: 'uppercase' }}
            >
              Customer Care
            </Typography>
            <Typography variant='body2' mb='30px'>
              Help Center
            </Typography>
            <Typography variant='body2' mb='30px'>
              Track Your Order
            </Typography>
            <Typography variant='body2' mb='30px'>
              Corporate & Bulk Purchasing
            </Typography>
            <Typography variant='body2' mb='30px'>
              Returns & Refunds
            </Typography>
          </Box>

          <Box width='clamp(20%, 25%, 30%)'>
            <Typography
              variant='h6'
              fontWeight='bold'
              mb='30px'
              sx={{ textTransform: 'uppercase' }}
            >
              Contact
            </Typography>
            <Typography variant='body2' mb='30px'>
              5100 Kings Plaza, New York, NY 11234
            </Typography>
            <Typography
              variant='body2'
              mb='30px'
              sx={{ wordWrap: 'break-word' }}
            >
              ecommerce@test.com
            </Typography>
            <Typography variant='body2' mb='30px'>
              (212) 239-3206
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FooterHome;
