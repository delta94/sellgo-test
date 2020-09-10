import React, { useState } from "react";

/* Styling */
import "./searchbox.styles.scss";

const SearchBox = () => {
  const [searchField, setSearchField] = useState("");

  const handleSubmit = () => {
    console.log("Making API Request to" + searchField);
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

export default SearchBox;
