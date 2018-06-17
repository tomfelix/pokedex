import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import '../styles/App.css';
import SearchBar from '../containers/SearchBar';
import PokemonView from '../containers/PokemonView';
import pokemon_logo from '../img/pokemon_logo.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="logo" src={pokemon_logo} alt="pokemon logo" height="150" width="400"/>
          <SearchBar />
        </header>
        <PokemonView />
      </div>
    );
  }
}

export default App;
