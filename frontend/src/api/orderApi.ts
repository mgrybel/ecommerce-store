import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithErrorHandling } from './baseApi';
import { CreateOrder, Order } from '../models/order';

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: baseQueryWithErrorHandling,
  tagTypes: ['Orders'],
  endpoints: (builder) => ({
    fetchOrders: builder.query<Order[], void>({
      query: () => 'orders',
      providesTags: ['Orders'],
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
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        await queryFulfilled;
        dispatch(orderApi.util.invalidateTags(['Orders']));
      },
    }),
  }),
});

export const {
  useFetchOrdersQuery,
  useFetchOrderDetailedQuery,
  useCreateOrderMutation,
} = orderApi;
