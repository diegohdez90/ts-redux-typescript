import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi(({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://registry.npmjs.org/-/v1/search'
  }),
  endpoints: (build) => ({
    getRepos: build.query<unknown, string>({
      query: term => `?text=${term}`,
    })
  })
}));

export const { useLazyGetReposQuery } = api;
