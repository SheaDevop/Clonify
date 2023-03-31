import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

	export const shazamCoreApi = createApi({
		reducerPath: 'shazamCoreApi',
		baseQuery: fetchBaseQuery({
			baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
			prepareHeaders: () => {
				headers.set('X-RapidAPI-Key', '86514f5462msh7db43b630371e98p192411jsn12df0668c830');
				return headers;
			},
		}),
		endpoints: (builder) => ({
			getTopCharts: builder.query({ query: () => '/charts/world' }),
			getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
			getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}` }),
			getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artists_id=${artistId}` }),
			getSongsByCountry: builder.query({ query: ({ country }) => `/charts/country?country_code=${countryCode}`}),
		}),
	});

	export const {
		useGetTopChartsQuery,
		useGetSongDetailsQuery,
		useGetSongRelatedQuery,
		useGetArtistDetailsQuery,
		useGetSongsByCountryQuery,
	} = shazamCoreApi;