import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Pokedex</h1>
      <div className={styles.content}>
        <PokemonList />
        <PokemonDetail />
      </div>
    </div>
  );
}

export default App;
