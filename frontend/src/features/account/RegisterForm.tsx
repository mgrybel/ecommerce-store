import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Container,
  Paper,
  Box,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';

import { useRegisterMutation } from '../../api/accountApi';
import { registerSchema, RegisterSchema } from '../../schemas/registerSchema';

const RegisterForm = () => {
  const [registerUser] = useRegisterMutation();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid, isLoading },
  } = useForm<RegisterSchema>({
    mode: 'onTouched',
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterSchema) => {
    try {
      await registerUser(data).unwrap();
    } catch (error) {
      const apiError = error as { message: string };
      if (apiError.message && typeof apiError.message === 'string') {
        const errorArray = apiError.message.split(',');

        errorArray.forEach((e) => {
          if (e.includes('Password')) {
            setError('password', { message: e });
          } else if (e.includes('Email')) {
            setError('email', { message: e });
          }
        });
      }
    }
  };

  return (
    <Box padding={3}>
      <Container
        component={Paper}
        maxWidth='sm'
        sx={{ borderRadius: '4px', marginTop: 5 }}
      >
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          marginTop='8'
        >
          <LockOutlined sx={{ mt: 3, color: 'primary.main', fontSize: 40 }} />
          <Typography variant='h5' sx={{ textTransform: 'uppercase', mt: 1 }}>
            Create an account
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmit(onSubmit)}
            width='100%'
            display='flex'
            flexDirection='column'
            gap={3}
            marginY={3}
          >
            <TextField
              fullWidth
              label='Email'
              autoFocus
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email?.message}
              id='email'
              data-testid='email'
            />
            <TextField
              fullWidth
              label='Password'
              type='password'
              {...register('password')}
              error={!!errors.password}
              helperText={errors.password?.message}
              id='password'
              data-testid='password'
            />
            <Button
              disabled={isLoading || !isValid}
              variant='contained'
              type='submit'
              id='createAccount'
              data-testid='createAccount'
            >
              Create an account
            </Button>
            <Typography sx={{ textAlign: 'center' }}>
              Already have an account?{' '}
              <Typography
                component={Link}
                to='/login'
                color='primary'
                sx={{ textDecoration: 'none' }}
                id='signIn'
                data-testid='signIn'
              >
                Sign in
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default RegisterForm;
