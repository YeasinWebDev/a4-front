// redux/features/book/bookApiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApiSlice = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/book" }),
  endpoints: (builder) => ({
    books: builder.query({
      query: ({ page = 1}) => `/all?page=${page}`,
    }),
  }),
});

export const { useBooksQuery } = bookApiSlice;
