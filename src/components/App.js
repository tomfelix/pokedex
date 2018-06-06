import React, { Component } from 'react';
import './App.css';
import SearchBar from '../containers/searchBar';
import PokemonView from '../containers/pokemonView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pokedex</h1>
          <SearchBar />
        </header>
        <PokemonView />
      </div>
    );
  }
}

export default App;
