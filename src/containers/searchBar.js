import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../styles/searchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      term: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="input-group">
        <input
          className="form-control"
          value={this.state.term}
          onChange={this.handleChange}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    )
  }
}

//function mapDispatchToProps(dispatch) {
//  return bindActionCreators({ fetchVideos }, dispatch);
//}

//export default connect(null, mapDispatchToProps)(SearchBar);
export default SearchBar;
