import { combineReducers } from "redux";

/* Reducer for Movies */
import movieListReducer from "./movie-lists/movie-lists.reducer";

const rootReducer = combineReducers({
  movieListDetails: movieListReducer,
});

export default rootReducer;
