import { configureStore } from "@reduxjs/toolkit";
import { bookApiSlice } from "./features/book/bookApiSlice";
import { borrowApiSlice } from "./features/borrow/borrowApiSlice";

export const store = configureStore({
  reducer: {
    [bookApiSlice.reducerPath]: bookApiSlice.reducer,
    [borrowApiSlice.reducerPath]: borrowApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      bookApiSlice.middleware,
      borrowApiSlice.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
