import { createSelector } from "reselect";

/* Selector for movie List Details from store*/
const selectMovieListDetails = (state) => {
  return state.movieListDetails;
};

/* Selector for movie list */
export const selectMovieList = createSelector(
  [selectMovieListDetails],
  (movieDetails) => {
    return movieDetails.movieList;
  }
);

/* Selector for watching fetch state */
export const selectIsMovieFetching = createSelector(
  [selectMovieListDetails],
  (movieDetails) => {
    return movieDetails.isFetching;
  }
);

/* Selector for watching error state */
export const selectIsError = createSelector(
  [selectMovieListDetails],
  (movieDetails) => {
    return movieDetails.error;
  }
);
