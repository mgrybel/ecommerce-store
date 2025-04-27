import Cookies from 'js-cookie';
import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithErrorHandling } from './baseApi';
import { Cart, Item } from '../models/cart';
import { Product } from '../models/product';

function isCartItem(product: Product | Item): product is Item {
  return (product as Item).quantity !== undefined;
}

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: baseQueryWithErrorHandling,
  tagTypes: ['Cart'],
  endpoints: (builder) => ({
    fetchCart: builder.query<Cart, void>({
      query: () => 'cart',
      providesTags: ['Cart'],
    }),
    addCartItem: builder.mutation<
      Cart,
      { product: Product | Item; quantity: number }
    >({
      query: ({ product, quantity }) => {
        const productId = isCartItem(product) ? product.productId : product.id;
        return {
          url: `cart?productId=${productId}&quantity=${quantity}`,
          method: 'POST',
        };
      },
      onQueryStarted: async (
        { product, quantity },
        { dispatch, queryFulfilled }
      ) => {
        let isNewCart = false;
        const patchResult = dispatch(
          cartApi.util.updateQueryData('fetchCart', undefined, (draft) => {
            const productId = isCartItem(product)
              ? product.productId
              : product.id;

            if (!draft?.cartId) isNewCart = true;

            if (!isNewCart) {
              const existingItem = draft.items.find(
                (item) => item.productId === productId
              );
              if (existingItem) {
                existingItem.quantity += quantity;
              } else {
                draft.items.push(
                  isCartItem(product)
                    ? product
                    : { ...product, productId: product.id, quantity }
                );
              }
            }
          })
        );

        try {
          await queryFulfilled;
          if (isNewCart) dispatch(cartApi.util.invalidateTags(['Cart']));
        } catch (error) {
          console.log(error);
          patchResult.undo();
        }
      },
    }),
    removeCartItem: builder.mutation<
      void,
      { productId: number; quantity: number }
    >({
      query: ({ productId, quantity }) => ({
        url: `cart?productId=${productId}&quantity=${quantity}`,
        method: 'DELETE',
      }),
      onQueryStarted: async (
        { productId, quantity },
        { dispatch, queryFulfilled }
      ) => {
        const patchResult = dispatch(
          cartApi.util.updateQueryData('fetchCart', undefined, (draft) => {
            const itemIndex = draft.items.findIndex(
              (item) => item.productId === productId
            );
            if (itemIndex >= 0) {
              draft.items[itemIndex].quantity -= quantity;
              if (draft.items[itemIndex].quantity <= 0) {
                draft.items.splice(itemIndex, 1);
              }
            }
          })
        );
        try {
          await queryFulfilled;
        } catch (error) {
          console.log(error);
          patchResult.undo();
        }
      },
    }),
    clearCart: builder.mutation<void, void>({
      queryFn: () => ({ data: undefined }),
      onQueryStarted: async (_, { dispatch }) => {
        dispatch(
          cartApi.util.updateQueryData('fetchCart', undefined, (draft) => {
            draft.items = [];
            draft.cartId = '';
          })
        );
        Cookies.remove('cartId');
      },
    }),
    addCoupon: builder.mutation<Cart, string>({
      query: (code: string) => ({
        url: `cart/${code}`,
        method: 'POST',
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const { data: updatedCart } = await queryFulfilled;

        dispatch(
          cartApi.util.updateQueryData('fetchCart', undefined, (draft) => {
            Object.assign(draft, updatedCart);
          })
        );
      },
    }),
    removeCoupon: builder.mutation<Cart, void>({
      query: () => ({
        url: 'cart/remove-coupon',
        method: 'DELETE',
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        await queryFulfilled;

        dispatch(
          cartApi.util.updateQueryData('fetchCart', undefined, (draft) => {
            draft.coupon = null;
          })
        );
      },
    }),
  }),
});

export const {
  useFetchCartQuery,
  useAddCartItemMutation,
  useRemoveCartItemMutation,
  useClearCartMutation,
  useAddCouponMutation,
  useRemoveCouponMutation,
} = cartApi;
