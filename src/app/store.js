import { configureStore } from "@reduxjs/toolkit";
import { nbaDataApi } from "../services/nbaDataApi";
import { nbaNewsApi } from "../services/nbaNewsApi";
import { nbaStandings } from "../services/nbaStandings";

export default configureStore({
  reducer: {
    [nbaDataApi.reducerPath]: nbaDataApi.reducer,
    [nbaNewsApi.reducerPath]: nbaNewsApi.reducer,
    [nbaStandings.reducerPath]: nbaStandings.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(nbaDataApi.middleware),
});
