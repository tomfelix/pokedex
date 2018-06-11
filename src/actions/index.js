import axios from 'axios';

const ROOT_URL = `http://pokeapi.salestock.net/api/v2/`;
export const POKEMON_NAME = 'POKEMON_NAME';

export default function getPokemonByName(name) {
  const url = `${ROOT_URL}pokemon/${name}`;

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
