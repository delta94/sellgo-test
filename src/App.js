import React from "react";

/* Child Components */
import SearchBox from "./components/searchbox/searchbox.component";
import MoviesList from "./components/movies-list/movies-list.component";

/* Styling */
import "./App.scss";

function App() {
  return (
    <div className="app">
      <div className="u-container">
        <SearchBox />
        <MoviesList />
      </div>
    </div>
  );
}

export default App;
