import { combineReducers } from 'redux';
import PokemonReducer from './pokemon_reducer';
import PokemonsReducer from './pokemons_reducer';
import filteredPokemonReducer from './filtered_pokemon_reducer';


const rootReducer = combineReducers({
  pokemon: PokemonReducer,
  pokemons: PokemonsReducer,
  filteredPokemon: filteredPokemonReducer
});

export default rootReducer;
