import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import { catalogApi } from '../api/catalogApi';
import { cartApi } from '../api/cartApi';
import { errorApi } from '../api/errorApi';
import { uiSlice } from '../api/uiSlice';
import { catalogSlice } from '../api/catalogSlice';
import { accountApi } from '../api/accountApi';
import { checkoutApi } from '../api/checkoutApi';
import { orderApi } from '../api/orderApi';
import { adminApi } from '../api/adminApi';

export const store = configureStore({
  reducer: {
    [catalogApi.reducerPath]: catalogApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [checkoutApi.reducerPath]: checkoutApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [accountApi.reducerPath]: accountApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [errorApi.reducerPath]: errorApi.reducer,
    catalog: catalogSlice.reducer,
    ui: uiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      catalogApi.middleware,
      cartApi.middleware,
      checkoutApi.middleware,
      orderApi.middleware,
      accountApi.middleware,
      adminApi.middleware,
      errorApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
