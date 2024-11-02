import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PokemonListResponse, PokemonDetail } from '../types/pokemon';
import { config } from '../config/env';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: config.apiBaseUrl }),
  endpoints: (builder) => ({
    getPokemonList: builder.query<PokemonListResponse, void>({
      query: () => 'pokemon',
    }),
    getPokemonById: builder.query<PokemonDetail, string>({
      query: (id) => `pokemon/${id}`,
    }),
  }),
});

export const { useGetPokemonListQuery, useGetPokemonByIdQuery } = pokemonApi;
