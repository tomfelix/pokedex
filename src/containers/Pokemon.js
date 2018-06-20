import React from 'react';
import '../styles/pokemon.css';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom'

const Pokemon = ({ name, image, id }) => {
  return (
    <Link to={`/${name}`} className="pokemon">
        <div>
          <img src={image} alt={name}/>
        </div>
        <div>{name.charAt(0).toUpperCase() + name.slice(1)}</div>
    </Link>
  )
}



export default withRouter(Pokemon);
