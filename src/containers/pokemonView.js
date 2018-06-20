import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Pokemon from './Pokemon';
import '../styles/pokemonView.css';
import { bindActionCreators } from 'redux';
import { getAllPokemons, fetchingData } from '../actions/index';
import loader from '../img/loader.gif';


class PokemonView extends Component {
  componentWillMount() {
    this.props.fetchingData();
  }

  componentDidMount() {
    this.props.getAllPokemons();
  }

  render() {
    const { pokemons } = this.props.pokemons;
    const { filteredPokemon } = this.props;
    if(this.props.pokemons.isLoading) {
      return (
        <div className="loader">
          <img src={loader} alt="Loading"/>
        </div>
      )
    }

    if(filteredPokemon !== '') {
      let poks = pokemons.filter(function(pokemon) {
        return pokemon.name === filteredPokemon;
      });
      if(poks.length > 0) {
        return (
          <section className="pokemon-list">
            <Pokemon id={poks[0].id} key={poks[0].id} name={poks[0].name} image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poks[0].id}.png`}/>
          </section>
        )
      }
      return (
        <p className="pokemon-none">Choose another Pokemon or look for nothing to see all of them ;)</p>
      )
    }

    return (
      <section className="pokemon-list">
        {pokemons.map(pokemon => {
          return (
            <Pokemon id={pokemon.id} key={pokemon.id} name={pokemon.name} image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}/>
          )
        })}
      </section>

    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAllPokemons, fetchingData }, dispatch);
}

function mapStateToProps(state) {
  return {
    pokemons: state.pokemons,
    filteredPokemon: state.filteredPokemon
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonView));
