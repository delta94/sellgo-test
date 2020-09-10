/* Utility to remove a movie from list */

export const removeMovieFromList = (movieList, movie) => {
  return movieList.filter((movieItem) => {
    return movieItem.imdbID !== movie.imdbID;
  });
};
