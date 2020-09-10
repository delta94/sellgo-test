import React from "react";
import { connect } from "react-redux";

/* Child Component */
import MovieDetails from "../movie-details/movie-details.component";

/* Selectors*/
import { selectMovieList } from "../../redux/movie-lists/movie-lists.selectors";

/* Styling */
import "./movies-list.styles.scss";

const MoviesList = ({ movieList }) => {
  return (
    <div className="movies__list">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>IMDB ID</th>
          </tr>
        </thead>

        <tbody>
          {movieList.length
            ? movieList.map((movie) => {
                return <MovieDetails key={movie.id} displayData={movie} />;
              })
            : null}
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
export default connect(mapStateToProps)(MoviesList);
