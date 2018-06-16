import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pokemon from '../components/Pokemon';
import '../styles/pokemonView.css';
import { bindActionCreators } from 'redux';
import { getAllPokemons } from '../actions/index';

class PokemonView extends Component {

  componentDidMount() {
    this.props.getAllPokemons();
  }

  render() {
    return (
      <section className="pokemon-list">
        {this.props.pokemons.map((pokemon, id) => {
          id++;
          return (
            <Pokemon key={id} name={pokemon.name} image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
          )
        })}
      </section>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAllPokemons }, dispatch);
}

function mapStateToProps({ pokemons, pokemon }) {
  return {
    pokemons,
    pokemon
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonView);
