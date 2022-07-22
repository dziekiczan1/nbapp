import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://data.nba.net/10s/prod/v1/current";

const createRequest = (url) => ({ url });

export const nbaStandings = createApi({
  reducerPath: "nbaStandings",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Standings"],
  endpoints: (builder) => ({
    getStandings: builder.query({
      query: () => createRequest(`/standings_conference.json`),
      providesTags: ["Standings"],
    }),
  }),
});

export const { useGetStandingsQuery } = nbaStandings;
