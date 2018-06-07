import React, { Component } from 'react';
import { connect } from 'react-redux';

class PokemonView extends Component {
  render() {
    return (
      <div>
        {console.log(this.props.pokemon)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    pokemon: state.pokemon
  }
}

export default connect(mapStateToProps)(PokemonView);
