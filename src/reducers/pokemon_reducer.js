import { POKEMON_NAME, FETCHING_DATA } from '../actions/index';

const initialState = {
  isLoading: false,
  pokemon: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        isLoading: true
      }
    case POKEMON_NAME:
      return {
        ...state,
        isLoading: false,
        pokemon: action.payload
      }
    default:
      return state;
  }
}
