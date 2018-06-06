import React, { Component } from 'react';
import '../styles/App.css';
import SearchBar from '../containers/searchBar';
import PokemonView from '../containers/pokemonView';
import pokemon_logo from '../img/pokemon_logo.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="logo" src={pokemon_logo} alt="pokemon logo" height="100" width="300"/>
          <SearchBar />
        </header>
        <PokemonView />
      </div>
    );
  }
}

export default App;
