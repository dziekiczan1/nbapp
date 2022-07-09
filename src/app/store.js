import { configureStore } from "@reduxjs/toolkit";
import { nbaDataApi } from "../services/nbaDataApi";

export default configureStore({
  reducer: {
    [nbaDataApi.reducerPath]: nbaDataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(nbaDataApi.middleware),
});
