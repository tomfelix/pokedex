import React, { Component } from 'react';
import { connect } from 'react-redux';

class PokemonView extends Component {
  renderPokemon(element) {
    return (
      <tr>
        <td><img src={element.sprites.front_default} className="image" alt="{element.name}-image"/></td>
        <td>Name: {element.name}</td>
        <td>Type: {element.types[0].type.name}</td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Pokemon</th>
          </tr>
        </thead>
        <tbody>
          {this.props.pokemon.map(this.renderPokemon)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  return {
    pokemon: state.pokemon
  };
}

export default connect(mapStateToProps)(PokemonView);
