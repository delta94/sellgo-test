import React from "react";
import { connect } from "react-redux";

/* Child Component */
import MovieDetails from "../movie-details/movie-details.component";

/* Aactions */
import { sortMovieList } from "../../redux/movie-lists/movie-lists.actions";

/* Selectors*/
import { selectMovieList } from "../../redux/movie-lists/movie-lists.selectors";

/* Styling */
import "./movies-list.styles.scss";

const MoviesList = ({ movieList, sortMovies }) => {
  return (
    <div className="movies__list">
      <table>
        <thead>
          <tr>
            <th>
              Title
              <div className="sort__arrows">
                <span onClick={() => sortMovies("Title", 1)}>&#8657;</span>
                <span onClick={() => sortMovies("Title", -1)}>&#8659;</span>
              </div>
            </th>
            <th>
              Year
              <div className="sort__arrows">
                <span onClick={() => sortMovies("Year", 1)}>&#8657;</span>
                <span onClick={() => sortMovies("Year", -1)}>&#8659;</span>
              </div>
            </th>
            <th>
              IMDB ID
              <div className="sort__arrows">
                <span onClick={() => sortMovies("imdbID", 1)}>&#8657;</span>
                <span onClick={() => sortMovies("imdbID", -1)}>&#8659;</span>
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          {movieList.length ? (
            movieList.map((movie) => {
              return <MovieDetails key={movie.imdbID} displayData={movie} />;
            })
          ) : (
            <p className="empty__message">Oops! Empty list</p>
          )}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movieList: selectMovieList(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sortMovies: (property, order) => dispatch(sortMovieList(property, order)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
