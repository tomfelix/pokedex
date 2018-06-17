import React from 'react';
import '../styles/pokemon.css';
import {Link} from 'react-router-dom';

const Pokemon = ({ name, image }) => {
  return (
    <Link to="/pokemon" className="pokemon">
      <div>
        <img src={image} alt={name}/>
      </div>
      <div className="pokemon-name">{name.charAt(0).toUpperCase() + name.slice(1)}</div>
    </Link>
  )
}

export default Pokemon;
