/* Utility to remove a movie from list */
export const removeMovieFromList = (movieList, movie) => {
  return movieList.filter((movieItem) => {
    return movieItem.imdbID !== movie.imdbID;
  });
};

/* Utility to sort movies based on a property and order */
export const sortMoviesBy = (movieList, { property, order }) => {
  console.log(property, order);
  const result = movieList.sort((a, b) => {
    let first = String(a[property]).toLowerCase();
    let second = String(b[property]).toLowerCase();

    if (first > second) {
      return order;
    }
    if (first < second) {
      return -order;
    }
    return 0;
  });

  return [...result];
};
