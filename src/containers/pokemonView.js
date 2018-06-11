import React, { Component } from 'react';
import { connect } from 'react-redux';

class PokemonView extends Component {

  renderPokemon(element) {
    return (
      <div key={element.name}>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Type</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src={element.sprites.front_default} className="image" alt={element.name} /></td>
              <td>{element.name}</td>
              <td>{element.types[0].type.name}</td>
              <td>{element.weight}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

  render() {
    if(this.props.pokemon[0] === 404) {
      return (
        <div>Nie ma takiego Pokemona!</div>
      )
    }
    return (
      <div>
        {this.props.pokemon.map(this.renderPokemon)}
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    pokemon: state.pokemon
  };
}

export default connect(mapStateToProps)(PokemonView);
