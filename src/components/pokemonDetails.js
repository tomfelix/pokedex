import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pokemon_logo from '../img/pokemon_logo.png';
import '../styles/pokemonDetails.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { getPokemonByName } from '../actions/index';


class PokemonDetails extends Component {
  componentDidMount() {
    this.props.getPokemonByName(this.props.match.params.name);
  }

  componentWillUnmount() {
    this.props.getPokemonByName('x');
  }

  render() {
    console.log('huj:', this.props.pokemon);
    const { pokemon } = this.props;
    return (
      <div className="pokemon-details">
        <img alt={pokemon.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}/>
        <div className="pokemon-info">
          <div>Name: {pokemon.name}</div>
          <div>Weight: {pokemon.weight}</div>
          <div>Height: {pokemon.height}</div>
          <div>Type: type</div>
          <div>Experience: {pokemon.base_experience}</div>

        </div>
      </div>
    )
  }
}


function mapStateToProps({ pokemon }) {
  return {
    pokemon
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPokemonByName }, dispatch);
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonDetails));
