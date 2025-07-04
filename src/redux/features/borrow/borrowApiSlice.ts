import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const borrowApiSlice = createApi({
  reducerPath: "borrowApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKENDURL}),
  tagTypes: ["Borrows"],
  endpoints: (builder) => ({
    createBorrow: builder.mutation({
      query: (borrow) => ({
        url: `/borrow/${borrow.bookId}`,
        method: "POST",
        body: borrow,
      }),
      invalidatesTags: ["Borrows"],
    }),
    bookBorrows: builder.query({
      query: () => `/borrow/summary`,
      providesTags: ["Borrows"],
    })
  }),
});


export const { useCreateBorrowMutation, useBookBorrowsQuery } = borrowApiSlice