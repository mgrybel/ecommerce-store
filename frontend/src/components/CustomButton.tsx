import { JSX } from 'react';
import { Button } from '@mui/material';

import { useTheme } from '@mui/material/styles';

interface Props {
  href: string;
  icon: JSX.Element;
  text: string;
  testId?: string;
}

const CustomButton = ({ href, icon, text, testId }: Props) => {
  const theme = useTheme();

  return (
    <Button
      component='a'
      color='primary'
      href={href}
      variant='text'
      startIcon={icon}
      sx={{
        color: theme.palette.text.primary,
        textTransform: 'uppercase',
        marginX: 1.5,
        marginLeft: '15px',
        '&:active': {
          color: theme.palette.primary.main,
        },
        '&:hover': {
          color: theme.palette.primary.main,
        },
      }}
      id={testId}
      data-testid={testId}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
