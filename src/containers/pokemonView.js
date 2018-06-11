import React, { Component } from 'react';
import { connect } from 'react-redux';

class PokemonView extends Component {

  renderPokemon(element) {
    return (
      <tr>
        <td><img src={element.sprites.front_default} className="image" alt="{element.name}-image"/></td>
        <td>{element.name}</td>
        <td>{element.types[0].type.name}</td>
        <td>{element.weight}</td>
      </tr>
    )
  }

  render() {
    return (
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
