import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsApiHeaders = {
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Key': 'd24d05c3b6msh87b686b1d9848c7p1716e9jsn38c834640f1c',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsApiHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
    })
  })
});

//using the redux toolkit to make all the queries needed for the endpoints
export const {
  useGetCryptoNewsQuery,
} = cryptoNewsApi;
