import { FC } from 'react';
import { useGetPokemonListQuery } from '../../services/pokemonApi';
import styles from './PokemonList.module.css';

interface PokemonListProps {
  onSelectPokemon: (id: string) => void;
  selectedPokemonId: string | null;
}

const PokemonList: FC<PokemonListProps> = ({ onSelectPokemon, selectedPokemonId }) => {
  const { data: pokemonList, isLoading } = useGetPokemonListQuery();

  if (isLoading) return <div className={styles.loading}>Loading Pokemon list...</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Pokemon List</h2>
      <ul className={styles.list}>
        {pokemonList?.results.map((pokemon, index) => (
          <li
            key={pokemon.name}
            onClick={() => onSelectPokemon((index + 1).toString())}
            className={styles.listItem}
            style={{
              background: selectedPokemonId === (index + 1).toString() ? '#cc0000' : 'white',
              color: selectedPokemonId === (index + 1).toString() ? 'white' : 'black',
            }}
          >
            {pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
