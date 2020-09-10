import React from "react";

/* Child Component */
import MovieDetails from "../movie-details/movie-details.component";

/* Styling */
import "./movies-list.styles.scss";

const MoviesList = () => {
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
          <MovieDetails />
          <MovieDetails />
        </tbody>
      </table>
    </div>
  );
};

export default MoviesList;
