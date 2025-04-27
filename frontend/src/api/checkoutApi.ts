import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithErrorHandling } from './baseApi';
import { Cart } from '../models/cart';
import { cartApi } from './cartApi';

export const checkoutApi = createApi({
  reducerPath: 'checkoutApi',
  baseQuery: baseQueryWithErrorHandling,
  endpoints: (builder) => ({
    createPaymentIntent: builder.mutation<Cart, void>({
      query: () => {
        return {
          url: 'payments',
          method: 'POST',
        };
      },
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            cartApi.util.updateQueryData('fetchCart', undefined, (draft) => {
              draft.clientSecret = data.clientSecret;
            })
          );
        } catch (error) {
          console.log('Payment intent creation failed: ', error);
        }
      },
    }),
  }),
});

export const { useCreatePaymentIntentMutation } = checkoutApi;
