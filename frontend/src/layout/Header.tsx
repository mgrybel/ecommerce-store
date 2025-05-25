import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from '@mui/material';
import {
  Inventory2Outlined,
  ListAltOutlined,
  LogoutOutlined,
  Menu,
  PersonAddOutlined,
  PersonOutlineOutlined,
  ShoppingBagOutlined,
  ShoppingCartOutlined,
  SummarizeOutlined,
} from '@mui/icons-material';
import { alpha, useTheme } from '@mui/material/styles';

import CustomButton from '../components/CustomButton';
import { useLogoutMutation, useUserInfoQuery } from '../api/accountApi';
import { useFetchCartQuery } from '../api/cartApi';

interface HeaderProps {
  onSidebarOpen: () => void;
}

const Header = ({ onSidebarOpen }: HeaderProps) => {
  const theme = useTheme();
  const [logout] = useLogoutMutation();
  const { data: user } = useUserInfoQuery();

  const { data: cart } = useFetchCartQuery();

  const itemCount =
    cart?.items.reduce((sum, item) => sum + item.quantity, 0) || 0;

  return (
    <>
      <AppBar
        color='transparent'
        position='sticky'
        sx={{
          border: 0,
          padding: '10px 0',
          marginBottom: '5px',
          top: 'auto',
        }}
      >
        <Toolbar
          sx={{
            minHeight: 70,
          }}
        >
          <Link
            href='/'
            sx={{ textDecoration: 'none' }}
            id='logo'
            data-testid='logo'
          >
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
          </Link>

          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              alignItems: 'center',
              display: { lg: 'flex', md: 'none', xs: 'none' },
            }}
          >
            <CustomButton
              href='/catalog'
              icon={<Inventory2Outlined />}
              text='Products'
              testId='products'
            />
          </Box>

          <Box
            sx={{
              alignItems: 'center',
              display: { lg: 'flex', md: 'none', xs: 'none' },
            }}
          >
            {user ? (
              <>
                <CustomButton
                  href='/orders'
                  icon={<ListAltOutlined />}
                  text='My orders'
                  testId='orders'
                />
                {user.roles.includes('Admin') && (
                  <CustomButton
                    href='/Inventory'
                    icon={<SummarizeOutlined />}
                    text='Inventory'
                    testId='inventory'
                  />
                )}
                <Button
                  onClick={logout}
                  component='a'
                  color='primary'
                  variant='text'
                  startIcon={<LogoutOutlined />}
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
                  id='logout'
                  data-testid='logout'
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <CustomButton
                  href='/login'
                  icon={<PersonOutlineOutlined />}
                  text='Login'
                  testId='login'
                />
                <CustomButton
                  href='/register'
                  icon={<PersonAddOutlined />}
                  text='Register'
                  testId='register'
                />
              </>
            )}
            <Link
              href='/cart'
              sx={{ textDecoration: 'none' }}
              id='cart'
              data-testid='cart'
            >
              <IconButton size='large'>
                <Badge badgeContent={itemCount} color='primary'>
                  <ShoppingCartOutlined
                    sx={{
                      color: 'rgb(114, 123, 144)',
                      height: 30,
                      width: 30,
                    }}
                  />
                </Badge>
              </IconButton>
            </Link>
          </Box>
          <Box
            sx={{
              display: { md: 'block', lg: 'none' },
            }}
            alignItems='center'
          >
            <Button
              onClick={() => onSidebarOpen()}
              aria-label='Menu'
              variant='outlined'
              sx={{
                borderRadius: '4px',
                minWidth: 'auto',
                padding: 1,
                borderColor: alpha(theme.palette.divider, 0.2),
              }}
              id='menu'
              data-testid='menu'
            >
              <Menu />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
