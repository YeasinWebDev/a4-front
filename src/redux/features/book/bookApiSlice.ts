// redux/features/book/bookApiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApiSlice = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    books: builder.query({
      query: ({ page = 1}) => `/books?page=${page}`,
    }),
    createBook: builder.mutation({
      query: (book) => ({
        url: "/create-book",
        method: "POST",
        body: book,
      }),
    }),

    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    })
  }),
});

export const { useBooksQuery, useCreateBookMutation, useDeleteBookMutation } = bookApiSlice;
