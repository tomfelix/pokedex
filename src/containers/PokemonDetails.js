import React, { Component } from 'react';
import '../styles/pokemonDetails.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { getPokemonByName, fetchingData } from '../actions/index';
import loader from '../img/loader.gif';

class PokemonDetails extends Component {
  componentWillMount() {
    this.props.fetchingData();
  }

  componentDidMount() {
    this.props.getPokemonByName(this.props.match.params.name);
  }


  render() {
    const { pokemon } = this.props.pokemon;

    if(this.props.pokemon.isLoading) {
      return (
        <div className="loader">
          <img src={loader} alt="Loading"/>
        </div>
      )
    }

    return (
      <div className="pokemon-details">
        <img alt={pokemon.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}/>
        <div className="pokemon-info">
          <div>Name: {pokemon.name}</div>
          <div>Weight: {pokemon.weight} g</div>
          <div>Height: {pokemon.height} cm</div>
          <div>Experience: {pokemon.base_experience} XP</div>
        </div>
      </div>
    )
  }

}


const mapStateToProps = state => {
  return {
    pokemon: state.pokemon
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPokemonByName, fetchingData }, dispatch);
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonDetails));
