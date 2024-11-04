import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonState {
    selectedPokemonId: string | null;
}

const initialState: PokemonState = {
    selectedPokemonId: null,
};

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setSelectedPokemon: (state, action: PayloadAction<string | null>) => {
            state.selectedPokemonId = action.payload;
        },
    },
});

export const { setSelectedPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
