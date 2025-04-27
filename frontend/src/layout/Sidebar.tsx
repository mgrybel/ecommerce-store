import {
  Badge,
  Box,
  Button,
  Drawer,
  IconButton,
  Link,
  Typography,
} from '@mui/material';
import {
  Inventory2Outlined,
  ListAltOutlined,
  LogoutOutlined,
  PersonAddOutlined,
  PersonOutlineOutlined,
  ShoppingBagOutlined,
  ShoppingCartOutlined,
  SummarizeOutlined,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

import { useLogoutMutation, useUserInfoQuery } from '../api/accountApi';
import { useFetchCartQuery } from '../api/cartApi';
import CustomButton from '../components/CustomButton';

interface SidebarProps {
  onClose: () => void;
  open: boolean;
}

const Sidebar = ({ open, onClose }: SidebarProps) => {
  const theme = useTheme();
  const [logout] = useLogoutMutation();
  const { data: user } = useUserInfoQuery();
  const { data: cart } = useFetchCartQuery();

  const itemCount =
    cart?.items.reduce((sum, item) => sum + item.quantity, 0) || 0;

  return (
    <>
      <Drawer
        anchor='left'
        onClose={() => onClose()}
        open={open}
        variant='temporary'
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.background.default,
            width: 256,
          },
        }}
      >
        <Box height='100%'>
          <Box width={1}>
            <Link href='/' style={{ textDecoration: 'none' }}>
              <IconButton size='large' disabled>
                <ShoppingBagOutlined
                  sx={{
                    color: theme.palette.primary.main,
                    height: 40,
                    width: 40,
                  }}
                />
                <Typography
                  variant='h6'
                  sx={{
                    flexGrow: 1,
                    color: theme.palette.text.primary,
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    marginTop: 1,
                    marginLeft: 1,
                  }}
                >
                  E-commerce Store
                </Typography>
              </IconButton>
            </Link>
          </Box>
          <Box paddingY={2}>
            <Box paddingY={2}>
              <CustomButton
                href='/catalog'
                icon={<Inventory2Outlined />}
                text='Products'
              />

              {user ? (
                <>
                  <Box paddingY={1}>
                    <CustomButton
                      href='/orders'
                      icon={<ListAltOutlined />}
                      text='My orders'
                    />
                  </Box>
                  {user.roles.includes('Admin') && (
                    <Box paddingY={1}>
                      <CustomButton
                        href='/Inventory'
                        icon={<SummarizeOutlined />}
                        text='Inventory'
                      />
                    </Box>
                  )}
                  <Box paddingY={1}>
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
                    >
                      Logout
                    </Button>
                  </Box>
                </>
              ) : (
                <>
                  <Box paddingY={1}>
                    <CustomButton
                      href='/login'
                      icon={<PersonOutlineOutlined />}
                      text='Login'
                    />
                  </Box>
                  <Box paddingY={1}>
                    <CustomButton
                      href='/register'
                      icon={<PersonAddOutlined />}
                      text='Register'
                    />
                  </Box>
                </>
              )}

              <Box paddingY={1} paddingX={1}>
                <Link href='/cart' sx={{ textDecoration: 'none' }}>
                  <IconButton size='large'>
                    <Badge
                      badgeContent={itemCount}
                      color='primary'
                      sx={{
                        '& .MuiBadge-badge': {
                          color: theme.palette.common.white,
                        },
                      }}
                    >
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
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
