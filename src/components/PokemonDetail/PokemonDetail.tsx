import { FC } from 'react';
import { useGetPokemonByIdQuery } from '../../services/pokemonApi';

interface PokemonDetailProps {
  pokemonId: string;
}

const PokemonDetail: FC<PokemonDetailProps> = ({ pokemonId }) => {
  const { data: pokemonDetail, isLoading } = useGetPokemonByIdQuery(pokemonId);

  if (isLoading) return <div>Loading details...</div>;
  if (!pokemonDetail) return null;

  return (
    <div className="pokemon-detail">
      <h2>Pokemon Detail</h2>
      <div>
        <h3>{pokemonDetail.name}</h3>
        <img 
          src={pokemonDetail.sprites.front_default} 
          alt={pokemonDetail.name} 
        />
        <p>Height: {pokemonDetail.height}</p>
        <p>Weight: {pokemonDetail.weight}</p>
        <p>
          Types: {pokemonDetail.types.map(t => t.type.name).join(', ')}
        </p>
      </div>
    </div>
  );
};

export default PokemonDetail;
