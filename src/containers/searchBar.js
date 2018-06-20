import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import '../styles/searchBar.css';
import { getPokemonByName, getAllPokemons, getFilteredPokemon } from '../actions/index';
import PokemonView from './PokemonView';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      term: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.getFilteredPokemon(this.state.term.toLowerCase());
    this.setState({
      term: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="input-group text-center">
          <input
            className="form-control"
            value={this.state.term}
            onChange={this.handleChange}
            placeholder="Put Pokemon name here..."/>
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Search</button>
          </span>
        </form>
        <PokemonView />
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPokemonByName, getAllPokemons, getFilteredPokemon }, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(SearchBar));
