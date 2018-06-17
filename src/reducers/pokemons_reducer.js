import { POKEMONS } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case POKEMONS:
      return action.payload.map((el, id, url) => {
        id++
        return {
          name: el.name,
          id: id,
          url: el.url
        }
      });
    default:
      return state;
  }
}
