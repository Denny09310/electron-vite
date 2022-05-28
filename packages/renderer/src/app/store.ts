import { configureStore } from "@reduxjs/toolkit";
import { errorLogger } from "./errorLogger";

export const store = configureStore({
  reducer: {
    //TODO: Add reducers or else the app throws an error
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([errorLogger]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
