import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import {
  searchMovie,
  fetchMovies,
  setLoading
} from '../../actions/SearchAction';

export class SearchForm extends Component {
  onChange = e => {
    this.props.searchMovie(e.target.value);
  };

  submit=e=>{
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  };

  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center   text-white ">
        <Helmet>
        <title>Search For a Movie,Tv Series </title>
         <meta name='description' content='Search Movies and Tv Series'/>
        </Helmet>
       
        <div className="container">
          <h1 className="display-7 mb-3 ">
            <i className="fa fa-search" /> Search for a movie,Tv series ...
          </h1>
          <form id="searchForm" onSubmit={this.submit} >
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search Movies...."
              onChange={this.onChange}
            />
            <button type="submit" className="btn btn-nmchp  mt-4 text-white " >
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.movies.text
});

export default connect(
  mapStateToProps,
  { searchMovie, fetchMovies,setLoading }
)(SearchForm);
