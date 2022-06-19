import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { env } from 'process';

const cryptoApiHeaders = {
  "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`)
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`)
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`)
    }),
    getExchanges: builder.query({
      query: () => createRequest('/exchange/-zdvbieRdZ/coins')
    }),
  })
});

//using the redux toolkit to make all the queries needed for the endpoints
export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery,
} = cryptoApi;