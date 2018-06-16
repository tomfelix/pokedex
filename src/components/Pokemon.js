import React from 'react';
import pokemon from '../styles/pokemon.css';

const Pokemon = ({ name, image }) => {
  return (
    <button className="pokemon">
      <div>
        <img src={image} alt={name}/>
      </div>
      <div>{name.charAt(0).toUpperCase() + name.slice(1)}</div>
    </button>
  )
}

export default Pokemon;
