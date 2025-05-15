import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from '@mui/material';

import { currencyFormat } from '../utils/utils';

type Props = {
  price: number;
  name: string;
  image: string;
};

const CustomCard = ({ price, name, image }: Props) => {
  const theme = useTheme();
  return (
    <Card
      elevation={3}
      sx={{
        width: { sx: 400, sm: 350, md: 350, lg: 300 },
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        borderColor: theme.palette.text.secondary,
      }}
    >
      <CardMedia
        sx={{ height: 240, backgroundSize: 'cover' }}
        image={image}
        title={name}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant='subtitle2'
          sx={{ textTransform: 'uppercase' }}
        >
          {name}
        </Typography>
        <Typography variant='h6' sx={{ color: theme.palette.text.secondary }}>
          {currencyFormat(price)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
