import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12 }}>
        <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
          <Typography
            align='center'
            variant='subtitle2'
            color={theme.palette.text.secondary}
            gutterBottom
            sx={{ marginTop: '25px' }}
          >
            Copyright &copy; {new Date().getFullYear()} mgrybel. For
            non-commercial use only.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
