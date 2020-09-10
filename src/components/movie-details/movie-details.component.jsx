import React from "react";

/* Styling */
import "./movie-details.styles.scss";

/* Assets */
import trashcan from "../../asset/trashcan.svg";

const MovieDetails = ({ displayData }) => {
  const { Title, Year, imdbID } = displayData;
  return (
    <tr>
      <td>{Title}</td>
      <td>{Year}</td>
      <td>{imdbID}</td>
      <td>
        <img src={trashcan} alt="Trash Can" />
      </td>
    </tr>
  );
};

export default MovieDetails;
