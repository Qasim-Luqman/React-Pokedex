import { useDispatch, useSelector } from 'react-redux';
import { useGetPokemonListQuery } from '../../services/pokemonApi';
import { setSelectedPokemon } from '../../store/pokemonSlice';
import { RootState } from '../../store/store';
import styles from './PokemonList.module.css';

const PokemonList = () => {
  const dispatch = useDispatch();
  const selectedPokemonId = useSelector((state: RootState) => state.pokemon.selectedPokemonId);
  const { data: pokemonList, isLoading } = useGetPokemonListQuery();

  if (isLoading) return <div className={styles.loading}>Loading Pokemon list...</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Pokemon List</h2>
      <ul className={styles.list}>
        {pokemonList?.results.map((pokemon, index) => (
          <li
            key={pokemon.name}
            onClick={() => dispatch(setSelectedPokemon((index + 1).toString()))}
            className={styles.listItem}
            style={{
              background: selectedPokemonId === (index + 1).toString() ? '#e3f2fd' : 'white',
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
