import { POKEMONS, FETCHING_DATA } from '../actions/index';

const initialState = {
  isLoading: false,
  pokemons: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        isLoading: true
      }
    case POKEMONS:
      return {
        ...state,
        isLoading: false,
        pokemons: action.payload.map((el, id, url) => {
          id++
          return {
            name: el.name,
            id: id,
            url: el.url
          }
        })
      }
    default:
      return state;
  }
}
