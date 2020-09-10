import React from "react";
import { connect } from "react-redux";

/* Actions */
import { deleteMovie } from "../../redux/movie-lists/movie-lists.actions";

/* Styling */
import "./movie-details.styles.scss";

/* Assets */
import trashcan from "../../asset/trashcan.svg";

const MovieDetails = ({ displayData, removeMovie }) => {
  const { Title, Year, imdbID } = displayData;
  return (
    <tr>
      <td>{Title}</td>
      <td>{Year}</td>
      <td>{imdbID}</td>
      <td>
        <img
          src={trashcan}
          alt="Trash Can"
          onClick={() => removeMovie(displayData)}
        />
      </td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeMovie: (movie) => dispatch(deleteMovie(movie)),
  };
};

export default connect(null, mapDispatchToProps)(MovieDetails);
