import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import PokemonDetail from '../components/PokemonDetail/PokemonDetail';
import { store } from '../store/store';

test('Renders Nothing if no pokemon is selected', () => {
    render(
        <Provider store={store}>
            <PokemonDetail />
        </Provider>
    );
});
