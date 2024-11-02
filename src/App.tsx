import { useState } from 'react';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import './App.css';

function App() {
  const [selectedPokemonId, setSelectedPokemonId] = useState<string | null>(null);

  return (
    <div className="App">
      <div style={{ display: 'flex', gap: '2rem', padding: '2rem' }}>
        <PokemonList onSelectPokemon={setSelectedPokemonId} />
        {selectedPokemonId && (
          <PokemonDetail pokemonId={selectedPokemonId} />
        )}
      </div>
    </div>
  );
}

export default App;
