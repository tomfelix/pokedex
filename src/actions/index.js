import axios from 'axios';


const ROOT_URL = `http://pokeapi.salestock.net/api/v2/pokemon`;
export const POKEMON_NAME = 'POKEMON_NAME';
export const POKEMONS = 'POKEMONS';
export const FILTERED_POKEMON = 'FILTERED_POKEMON';


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


export function getPokemonByName(id) {
  const url = `${ROOT_URL}/${id}`;
  const request = axios.get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error.response.status);
      return [];
    });
  return {
    type: POKEMON_NAME,
    payload: request
  }
}


export function getFilteredPokemon(name) {
  return {
    type: FILTERED_POKEMON,
    payload: name
  }
}
