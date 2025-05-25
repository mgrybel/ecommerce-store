import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import {
  Alert,
  Box,
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';
import { VisibilityOutlined } from '@mui/icons-material';

import { useFetchOrdersQuery } from '../../api/orderApi';
import { currencyFormat } from '../../utils/utils';

const OrdersPage = () => {
  const theme = useTheme();
  const { data: orders, isLoading } = useFetchOrdersQuery();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <Alert
        severity='info'
        sx={{
          color: theme.palette.info.main,
          '& .MuiAlert-icon': {
            fontSize: 35,
          },
        }}
      >
        <Typography variant='h6'>Loading orders...</Typography>
      </Alert>
    );
  }

  if (!orders) {
    return (
      <Alert
        severity='info'
        sx={{
          color: theme.palette.info.main,
          '& .MuiAlert-icon': {
            fontSize: 35,
          },
        }}
      >
        <Typography variant='h6'>No orders availablec</Typography>
      </Alert>
    );
  }

  return (
    <Box padding={3}>
      <Container maxWidth='lg'>
        <Typography
          variant='h5'
          align='center'
          gutterBottom
          sx={{ textTransform: 'uppercase' }}
        >
          My orders
        </Typography>
        <Paper sx={{ borderRadius: '4px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align='center' sx={{ fontWeight: 'bold' }}>
                  Order
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Total</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow
                  key={order.id}
                  hover
                  onClick={() => navigate(`/orders/${order.id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <TableCell align='center'># {order.id}</TableCell>
                  <TableCell>
                    {format(order.orderDate, 'dd MMM yyyy')}
                  </TableCell>
                  <TableCell>{currencyFormat(order.total)}</TableCell>
                  <TableCell>{order.orderStatus}</TableCell>
                  <TableCell align='left'>
                    <Button
                      startIcon={<VisibilityOutlined />}
                      id='view'
                      data-testid='view'
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Container>
    </Box>
  );
};

export default OrdersPage;
