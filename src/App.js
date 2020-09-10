import React, { useEffect } from "react";
import { connect } from "react-redux";

/* Child Components */
import SearchBox from "./components/searchbox/searchbox.component";
import MoviesList from "./components/movies-list/movies-list.component";

/* Actions */
import { fetchMovies } from "./redux/movie-lists/movie-lists.actions";

/* Styling */
import "./App.scss";

const App = ({ fetchMovieList }) => {
  /* Fetch the movies list for initial default render*/
  useEffect(() => {
    fetchMovieList();
  }, [fetchMovieList]);

  return (
    <div className="app">
      <div className="u-container">
        <SearchBox />
        <MoviesList />
        <p>
          Submitted by
          <a
            href="https://github.com/abhu-A-J"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Abhushan A. Joshi
          </a>
        </p>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieList: (movieTitle) => dispatch(fetchMovies(movieTitle)),
  };
};

export default connect(null, mapDispatchToProps)(App);
