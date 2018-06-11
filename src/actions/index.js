import axios from 'axios';

const ROOT_URL = `http://pokeapi.salestock.net/api/v2/`;
export const POKEMON_NAME = 'POKEMON_NAME';

export default function getPokemonByName(name) {
  const url = `${ROOT_URL}pokemon/${name}`;

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
