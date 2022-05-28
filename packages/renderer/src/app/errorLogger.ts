import {
  MiddlewareAPI,
  isRejectedWithValue,
  Middleware,
} from "@reduxjs/toolkit";
import toast from "react-hot-toast";

/**
 * Log a warning and show a toast!
 */
export const errorLogger: Middleware =
  (_api: MiddlewareAPI) => (next) => (action) => {
    // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
    if (isRejectedWithValue(action)) {
      toast.error("We got a rejected action!");
    }

    return next(action);
  };
