import axios from 'axios';

const ROOT_URL = `http://pokeapi.salestock.net/api/v2/`;

export default function getPokemonByName(name) {
  const url = `${ROOT_URL}pokemon/${name}`;
  const request = axios.get(url);
  console.log('To jest request z akcji:', request);

  return {
    type: 'POKEMON_NAME',
    payload: name
  }
}
