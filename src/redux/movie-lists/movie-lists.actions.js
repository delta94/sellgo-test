import movieListTypes from "./movie-lists.types";
import axios from "axios";

const baseURL = "https://jsonmock.hackerrank.com/api/movies/search/";

/* Action creator for loading state*/
const fetchingMovies = () => {
  return {
    type: movieListTypes.FETCH_MOVIES_REQUEST,
  };
};

/* Action creator to store payload from reponse*/
const fetchMoviesSuccess = (moviesList) => {
  return {
    type: movieListTypes.FETCH_MOVIES_SUCCESS,
    payload: moviesList,
  };
};

/* Action creator for error while fetching Movies*/
const fetchMoviesFailure = (error) => {
  return {
    type: movieListTypes.FETCH_MOVIES_ERROR,
    payload: error,
  };
};

/* Action creator for fetching movies */
export const fetchMovies = (title = "") => {
  return (dispatch) => {
    dispatch(fetchingMovies);
    axios
      .get(baseURL, {
        params: {
          Title: title,
        },
      })
      .then((response) => {
        dispatch(fetchMoviesSuccess(response.data.data));
      })
      .catch((err) => {
        dispatch(fetchMoviesFailure(err));
      });
  };
};

/* Action to delete the movie from table list */
export const deleteMovie = (movie) => {
  return {
    type: movieListTypes.DELETE_MOVIE,
    payload: movie,
  };
};

/* Action to sort the view by property  and order*/
export const sortMovieList = (property, order) => {
  return {
    type: movieListTypes.SORT_MOVIES,
    payload: {
      property,
      order,
    },
  };
};
