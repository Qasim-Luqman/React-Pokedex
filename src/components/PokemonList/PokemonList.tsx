import { FC } from 'react';
import { useGetPokemonListQuery } from '../../services/pokemonApi';

interface PokemonListProps {
  onSelectPokemon: (id: string) => void;
}

const PokemonList: FC<PokemonListProps> = ({ onSelectPokemon }) => {
  const { data: pokemonList, isLoading } = useGetPokemonListQuery();

  if (isLoading) return <div>Loading Pokemon list...</div>;

  return (
    <div className="pokemon-list">
      <h2>Pokemon List</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {pokemonList?.results.map((pokemon, index) => (
          <li
            key={pokemon.name}
            onClick={() => onSelectPokemon((index + 1).toString())}
            style={{ cursor: 'pointer', padding: '0.5rem' }}
          >
            {pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
