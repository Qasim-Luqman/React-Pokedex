import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import PokemonList from '../components/PokemonList/PokemonList';
import { store } from '../store/store';

test('Renders loading message', () => {
    render(
        <Provider store={store}>
            <PokemonList />
        </Provider>
    );
    expect(screen.getByText(/Loading Pokemon list.../i)).toBeInTheDocument();
});
