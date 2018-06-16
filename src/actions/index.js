import axios from 'axios';


const ROOT_URL = `http://pokeapi.salestock.net/api/v2/pokemon`;
export const POKEMON_NAME = 'POKEMON_NAME';
export const POKEMONS = 'POKEMONS';


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

export function getPokemonByName(name) {
  const url = `${ROOT_URL}${name}`;

  const request = axios.get(url)
    .then(response => {
      console.log(response.status);
      return response.data;
    })
    .catch(error => {
      console.log(error.response.status);
      return error.response.status;
    });

  return {
    type: POKEMON_NAME,
    payload: request
  }
}
