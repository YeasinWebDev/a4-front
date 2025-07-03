// redux/features/book/bookApiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApiSlice = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    tagTypes: ["Books"],
  endpoints: (builder) => ({
    books: builder.query({
      query: ({ page = 1}) => `/books?page=${page}`,
      providesTags: ["Books"],
    }),
    createBook: builder.mutation({
      query: (book) => ({
        url: "/create-book",
        method: "POST",
        body: book,
      }),
      invalidatesTags: ["Books"],
    }),

    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),

    singleBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ["Books"],
    }),

    updateBook: builder.mutation({
      query: (book) => ({
        url: `/edit-book/${book._id}`,
        method: "PUT",
        body: book,
      }),
      invalidatesTags: ["Books"],
    })
  }),
});

export const { useBooksQuery, useCreateBookMutation, useDeleteBookMutation, useSingleBookQuery, useUpdateBookMutation } = bookApiSlice;
