import React from 'react';
import pokemon from '../styles/pokemon.css';

const Pokemon = ({ name, image }) => {
  return (
    <button className="pokemon"><img src={image}/>{name}</button>
  )
}

export default Pokemon;
