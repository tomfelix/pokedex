import { combineReducers } from 'redux';
import PokemonReducer from './pokemon_reducer';
import PokemonsReducer from './pokemons_reducer';

const rootReducer = combineReducers({
  pokemon: PokemonReducer,
  pokemons: PokemonsReducer
});

export default rootReducer;
