import { POKEMON_NAME } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case POKEMON_NAME:
      return [ action.payload, ...state];
    default:
      return state;
  }
}
