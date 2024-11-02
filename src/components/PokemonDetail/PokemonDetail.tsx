import { FC } from 'react';
import { useGetPokemonByIdQuery } from '../../services/pokemonApi';
import { typeColors, PokemonType } from '../../types/pokemonTypes';
import styles from './PokemonDetail.module.css';

interface PokemonDetailProps {
  pokemonId: string;
}

const PokemonDetail: FC<PokemonDetailProps> = ({ pokemonId }) => {
  const { data: pokemonDetail, isLoading } = useGetPokemonByIdQuery(pokemonId);

  if (isLoading) return <div className={styles.loading}>Loading details...</div>;
  if (!pokemonDetail) return null;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Pokemon Detail</h2>
      <div className={styles.pokemonCard}>
        <h3 className={styles.pokemonName}>{pokemonDetail.name}</h3>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={pokemonDetail.sprites.front_default}
            alt={pokemonDetail.name}
          />
        </div>
        <div className={styles.stat}>Height: {pokemonDetail.height / 10}m</div>
        <div className={styles.stat}>Weight: {pokemonDetail.weight / 10}kg</div>
        <div className={styles.types}>
          {pokemonDetail.types.map((t) => (
            <span
              key={t.type.name}
              className={styles.type}
              style={{ backgroundColor: typeColors[t.type.name as PokemonType] }}
            >
              {t.type.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
