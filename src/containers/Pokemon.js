import React from 'react';
import '../styles/pokemon.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { getPokemonByName } from '../actions/index';

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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPokemonByName }, dispatch);
}


export default withRouter(connect(null, mapDispatchToProps)(Pokemon));
