import { POKEMONS } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case POKEMONS:
      return action.payload;
    default:
      return state;
  }
}
