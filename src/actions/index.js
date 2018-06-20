import axios from 'axios';


const ROOT_URL = `http://pokeapi.salestock.net/api/v2/pokemon`;
export const POKEMON_NAME = 'POKEMON_NAME';
export const POKEMONS = 'POKEMONS';
export const FILTERED_POKEMON = 'FILTERED_POKEMON';
export const FETCHING_DATA = 'FETCHING_DATA';


export function getAllPokemons() {
  const url = `${ROOT_URL}?limit=151`;
  const request = axios.get(url)
    .then(response => {
      return response.data.results;
    })
    .catch(error => {
      console.log(error.response.status);
      return error.response.status;
    });

  return {
    type: POKEMONS,
    payload: request
  }
}

export function fetchingData() {
  return {
    type: FETCHING_DATA
  }
}

export function getPokemonByName(name) {
  const url = `${ROOT_URL}/${name}/`;
  const request = axios.get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });
  return {
    type: POKEMON_NAME,
    payload: request
  }
}


export function getFilteredPokemon(filteredName) {
  return {
    type: FILTERED_POKEMON,
    payload: filteredName
  }
}
