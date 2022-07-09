import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": process.env.REACT_APP_KEY,
"X-RapidAPI-Host": "free-nba.p.rapidapi.com",
};

const baseUrl = "https://free-nba.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const nbaDataApi = createApi({
  reducerPath: "nbaDataApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Teams"],
  endpoints: (builder) => ({
    getTeams: builder.query({
      query: () => createRequest(`/teams`),
      providesTags: ["Teams"],
    }),
    getTeam: builder.query({
      query: (id) => createRequest(`/teams/${id}`),
      providesTags: ["Teams"],
    }),
  }),
});

export const { useGetTeamsQuery, useGetTeamQuery } = nbaDataApi;
