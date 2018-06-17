import { FILTERED_POKEMON } from '../actions/index';

export default function(state = '', action) {
  switch(action.type) {
    case FILTERED_POKEMON:
      return action.payload;
    default:
      return state;
  }
}
