import { useState } from 'react';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import styles from './App.module.css';

function App() {
  const [selectedPokemonId, setSelectedPokemonId] = useState<string | null>(null);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Pokedex</h1>
      <div className={styles.content}>
        <PokemonList 
          onSelectPokemon={setSelectedPokemonId} 
          selectedPokemonId={selectedPokemonId}
        />
        {selectedPokemonId && (
          <PokemonDetail pokemonId={selectedPokemonId} />
        )}
      </div>
    </div>
  );
}

export default App;
