import { useState } from 'react';
import {
  Box,
  Grid,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import CustomCard from '../../../components/CustomCard';

const FeaturedProducts = () => {
  const [value, setValue] = useState('all');
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box width='80%' margin='80px auto'>
      <Box marginBottom={4}>
        <Typography
          variant='h4'
          align='center'
          color={theme.palette.text.primary}
          fontWeight={700}
          marginTop={theme.spacing(1)}
          gutterBottom
        >
          Our Featured Products
        </Typography>
      </Box>
      <Tabs
        textColor='primary'
        indicatorColor='primary'
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: isSm ? 'block' : 'none' } }}
        sx={{
          m: '25px',
          '& .MuiTabs-flexContainer': {
            flexWrap: 'wrap',
          },
        }}
      >
        <Tab label='ALL' value='all' />
        <Tab label='NEW ARRIVALS' value='newArrivals' />
        <Tab label='BESTSELLERS' value='bestsellers' />
        <Tab label='TOP RATED' value='topRated' />
      </Tabs>
      <Grid container spacing={{ xs: 4, sm: 3, md: 3, lg: 4 }}>
        {value === 'all' && (
          <>
            <Grid
              size={{ xs: 12, sm: 6, lg: 3 }}
              display={{ xs: 'block', sm: 'flex' }}
            >
              <CustomCard
                price={30000}
                name='Hyperlite Super Board'
                image='images/products/sb-core2.png'
              />
            </Grid>

            <Grid
              size={{ xs: 12, sm: 6, lg: 3 }}
              display={{ xs: 'block', sm: 'flex' }}
            >
              <CustomCard
                price={1500}
                name='Burton Snowboard Green Gloves'
                image='images/products/glove-code2.png'
              />
            </Grid>

            <Grid
              size={{ xs: 12, sm: 6, lg: 3 }}
              display={{ xs: 'block', sm: 'flex' }}
            >
              <CustomCard
                price={15000}
                name='Nidecker Snowboard Black Boots'
                image='images/products/boot-ang2.png'
              />
            </Grid>

            <Grid
              size={{ xs: 12, sm: 6, lg: 3 }}
              display={{ xs: 'block', sm: 'flex' }}
            >
              <CustomCard
                price={18000}
                name='Nidecker Snowboard Blue Boots'
                image='images/products/boot-ang1.png'
              />
            </Grid>
          </>
        )}
        {value === 'newArrivals' && (
          <>
            <Grid
              size={{ xs: 12, sm: 6, lg: 3 }}
              display={{ xs: 'block', sm: 'flex' }}
            >
              <CustomCard
                price={18999}
                name='Nidecker Snowboard Boots'
                image='images/products/boot-redis1.png'
              />
            </Grid>

            <Grid
              size={{ xs: 12, sm: 6, lg: 3 }}
              display={{ xs: 'block', sm: 'flex' }}
            >
              <CustomCard
                price={1600}
                name='Burton Snowboard Purple Gloves'
                image='images/products/glove-react1.png'
              />
            </Grid>

            <Grid
              size={{ xs: 12, sm: 6, lg: 3 }}
              display={{ xs: 'block', sm: 'flex' }}
            >
              <CustomCard
                price={1000}
                name='Patagonia Snowboard Blue Hat'
                image='images/products/hat-core1.png'
              />
            </Grid>

            <Grid
              size={{ xs: 12, sm: 6, lg: 3 }}
              display={{ xs: 'block', sm: 'flex' }}
            >
              <CustomCard
                price={18000}
                name='Hyperlite Board Speed Rush 3'
                image='images/products/sb-core1.png'
              />
            </Grid>
          </>
        )}
        {value === 'bestsellers' && (
          <>
            <Grid
              size={{ xs: 12, sm: 6, lg: 3 }}
              display={{ xs: 'block', sm: 'flex' }}
            >
              <CustomCard
                price={12000}
                name='Hyperlite Entry Board'
                image='images/products/sb-ts1.png'
              />
            </Grid>

            <Grid
              size={{ xs: 12, sm: 6, lg: 3 }}
              display={{ xs: 'block', sm: 'flex' }}
            >
              <CustomCard
                price={8000}
                name='Patagonia Snowboard Hat'
                image='images/products/hat-react1.png'
              />
            </Grid>

            <Grid
              size={{ xs: 12, sm: 6, lg: 3 }}
              display={{ xs: 'block', sm: 'flex' }}
            >
              <CustomCard
                price={18999}
                name='Nidecker Snowboard Boots'
                image='images/products/boot-redis1.png'
              />
            </Grid>

            <Grid
              size={{ xs: 12, sm: 6, lg: 3 }}
              display={{ xs: 'block', sm: 'flex' }}
            >
              <CustomCard
                price={25000}
                name='Hyperlite Board Super Whizzy Fast'
                image='images/products/sb-react1.png'
              />
            </Grid>
          </>
        )}
        {value === 'topRated' && (
          <>
            <Grid
              size={{ xs: 12, sm: 6, lg: 3 }}
              display={{ xs: 'block', sm: 'flex' }}
            >
              <CustomCard
                price={20000}
                name='Hyperlite Speedster Board'
                image='images/products/sb-ang1.png'
              />
            </Grid>

            <Grid
              size={{ xs: 12, sm: 6, lg: 3 }}
              display={{ xs: 'block', sm: 'flex' }}
            >
              <CustomCard
                price={1500}
                name='Patagonia Snowboard Hat'
                image='images/products/hat-react2.png'
              />
            </Grid>

            <Grid
              size={{ xs: 12, sm: 6, lg: 3 }}
              display={{ xs: 'block', sm: 'flex' }}
            >
              <CustomCard
                price={1400}
                name='Burton Snowboard Black Gloves'
                image='images/products/glove-react2.png'
              />
            </Grid>

            <Grid
              size={{ xs: 12, sm: 6, lg: 3 }}
              display={{ xs: 'block', sm: 'flex' }}
            >
              <CustomCard
                price={2500}
                name='Burton Snowboard Red Boots'
                image='images/products/boot-redis1.png'
              />
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};

export default FeaturedProducts;
