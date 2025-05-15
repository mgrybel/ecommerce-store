import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';

import { loginSchema, LoginSchema } from '../../schemas/loginSchema';
import { useLazyUserInfoQuery, useLoginMutation } from '../../api/accountApi';

const LoginForm = () => {
  const [login, { isLoading }] = useLoginMutation();
  const [fetchUserInfo] = useLazyUserInfoQuery();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    mode: 'onTouched',
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    await login(data);
    await fetchUserInfo();
    navigate(location.state?.from || '/catalog');
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
            Sign in
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
              data-testid='email'
            />
            <TextField
              fullWidth
              label='Password'
              type='password'
              {...register('password')}
              error={!!errors.password}
              helperText={errors.password?.message}
              data-testid='password'
            />
            <Button
              type='submit'
              variant='contained'
              disabled={isLoading}
              data-testid='signIn'
            >
              Sign in
            </Button>
            <Typography sx={{ textAlign: 'center' }}>
              Don't have an account?{' '}
              <Typography
                component={Link}
                to='/register'
                color='primary'
                sx={{ textDecoration: 'none' }}
                data-testid='signUp'
              >
                Sign up
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginForm;
