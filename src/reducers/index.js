import { combineReducers } from 'redux';
import PokemonReducer from './pokemon_reducer';

const rootReducer = combineReducers({
  pokemon: PokemonReducer
});

export default rootReducer;
