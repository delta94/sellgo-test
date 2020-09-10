import React, { useState } from "react";
import { connect } from "react-redux";

/* Actions */
import { fetchMovies } from "../../redux/movie-lists/movie-lists.actions";

/* Styling */
import "./searchbox.styles.scss";

const SearchBox = ({ fetchMovies }) => {
  const [searchField, setSearchField] = useState("");

  const handleSubmit = () => {
    console.log("Making API Request to" + searchField);
    fetchMovies(searchField);
    setSearchField("");
  };

  return (
    <div className="searchbox">
      <input
        type="text"
        className="searchbox__input"
        name="searchField"
        placeholder="Search by Movie Title"
        value={searchField}
        onChange={(e) => setSearchField(e.target.value)}
      />
      <button className="searchbox__submit" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: (title) => dispatch(fetchMovies(title)),
  };
};

export default connect(null, mapDispatchToProps)(SearchBox);
