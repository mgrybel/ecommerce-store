import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithErrorHandling } from './baseApi';
import { CreateOrder, Order } from '../models/order';

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: baseQueryWithErrorHandling,
  endpoints: (builder) => ({
    fetchOrders: builder.query<Order[], void>({
      query: () => 'orders',
    }),
    fetchOrderDetailed: builder.query<Order, number>({
      query: (id) => ({
        url: `orders/${id}`,
      }),
    }),
    createOrder: builder.mutation<Order, CreateOrder>({
      query: (order) => ({
        url: 'orders',
        method: 'POST',
        body: order,
      }),
    }),
  }),
});

export const {
  useFetchOrdersQuery,
  useFetchOrderDetailedQuery,
  useCreateOrderMutation,
} = orderApi;
