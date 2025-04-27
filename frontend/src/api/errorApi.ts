import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithErrorHandling } from '../api/baseApi';

export const errorApi = createApi({
  reducerPath: 'errorApi',
  baseQuery: baseQueryWithErrorHandling,
  endpoints: (builder) => ({
    get400Error: builder.query<void, void>({
      query: () => ({ url: 'error/bad-request' }),
    }),
    get401Error: builder.query<void, void>({
      query: () => ({ url: 'error/unauthorized' }),
    }),
    get404Error: builder.query<void, void>({
      query: () => ({ url: 'error/not-found' }),
    }),
    get500Error: builder.query<void, void>({
      query: () => ({ url: 'error/server-error' }),
    }),
    getValidationError: builder.query<void, void>({
      query: () => ({ url: 'error/validation-error' }),
    }),
  }),
});

export const {
  useLazyGet400ErrorQuery,
  useLazyGet401ErrorQuery,
  useLazyGet404ErrorQuery,
  useLazyGet500ErrorQuery,
  useLazyGetValidationErrorQuery,
} = errorApi;
