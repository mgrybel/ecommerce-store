import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import LoadingScreen from '../components/LoadingScreen';
import App from '../App';
import RequireAuth from './RequireAuth';

// Pages
const HomePage = lazy(async () => await import('../features/home/HomePage'));
const Catalog = lazy(async () => await import('../features/catalog/Catalog'));
const ProductDetails = lazy(
  async () => await import('../features/catalog/ProductDetails')
);
const CartPage = lazy(async () => await import('../features/cart/CartPage'));
const CheckoutPage = lazy(
  async () => await import('../features/checkout/CheckoutPage')
);
const CheckoutSuccess = lazy(
  async () => await import('../features/checkout/CheckoutSuccess')
);
const OrdersPage = lazy(
  async () => await import('../features/orders/OrdersPage')
);
const OrderDetailsPage = lazy(
  async () => await import('../features/orders/OrderDetailsPage')
);
const InventoryPage = lazy(
  async () => await import('../features/admin/InventoryPage')
);
const LoginForm = lazy(
  async () => await import('../features/account/LoginForm')
);
const RegisterForm = lazy(
  async () => await import('../features/account/RegisterForm')
);
const ServerError = lazy(
  async () => await import('../features/error/ServerError')
);
const NotFound = lazy(async () => await import('../features/error/NotFound'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <RequireAuth />,
        children: [
          {
            path: 'checkout',
            element: (
              <Suspense fallback={<LoadingScreen />}>
                <CheckoutPage />
              </Suspense>
            ),
          },
          {
            path: 'checkout/success',
            element: (
              <Suspense fallback={<LoadingScreen />}>
                <CheckoutSuccess />
              </Suspense>
            ),
          },
          {
            path: 'orders',
            element: (
              <Suspense fallback={<LoadingScreen />}>
                <OrdersPage />
              </Suspense>
            ),
          },
          {
            path: 'orders/:id',
            element: (
              <Suspense fallback={<LoadingScreen />}>
                <OrderDetailsPage />
              </Suspense>
            ),
          },
          {
            path: 'Inventory',
            element: (
              <Suspense fallback={<LoadingScreen />}>
                <InventoryPage />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: '',
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: 'login',
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <LoginForm />
          </Suspense>
        ),
      },
      {
        path: 'register',
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <RegisterForm />
          </Suspense>
        ),
      },
      {
        path: 'catalog',
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Catalog />
          </Suspense>
        ),
      },
      {
        path: 'catalog/:id',
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <ProductDetails />
          </Suspense>
        ),
      },
      {
        path: 'cart',
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <CartPage />
          </Suspense>
        ),
      },
      {
        path: 'server-error',
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <ServerError />
          </Suspense>
        ),
      },
      {
        path: 'not-found',
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <NotFound />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Navigate replace to='/not-found' />
          </Suspense>
        ),
      },
    ],
  },
]);
