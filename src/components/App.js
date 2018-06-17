import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import '../styles/App.css';
import pokemon_logo from '../img/pokemon_logo.png';
import SearchBar from '../containers/SearchBar';
import PokemonView from '../containers/PokemonView';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { getFilteredPokemon } from '../actions/index';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/" onClick={() => this.props.getFilteredPokemon('')}><img className="logo" src={pokemon_logo} alt="pokemon logo" height="150" width="400"/></Link>
        </header>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getFilteredPokemon }, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(App));
