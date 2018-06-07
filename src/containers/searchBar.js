import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../styles/searchBar.css';
import getPokemonByName from '../actions/index';

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
    this.props.getPokemonByName('pikachu');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="input-group text-center">
        <input
          className="form-control"
          value={this.state.term}
          onChange={this.handleChange}
          placeholder="Put Pokemon name..."/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPokemonByName }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
