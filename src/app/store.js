import { configureStore } from "@reduxjs/toolkit";
import { nbaDataApi } from "../services/nbaDataApi";
import { nbaNewsApi } from "../services/nbaNewsApi";

export default configureStore({
  reducer: {
    [nbaDataApi.reducerPath]: nbaDataApi.reducer,
    [nbaNewsApi.reducerPath]: nbaNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(nbaDataApi.middleware),
});
