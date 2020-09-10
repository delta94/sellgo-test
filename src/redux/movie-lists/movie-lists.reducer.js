import movieListTypes from "./movie-lists.types";

/* Utility Functions */
// import { getMovieDetails } from "./movie-lists.utils";

const INTIAL_STATE = {
  movieList: [],
  isFetching: false,
  error: null,
};

const movieListReducer = (state = INTIAL_STATE, action = {}) => {
  switch (action.type) {
    case movieListTypes.FETCH_MOVIES_REQUEST: {
      return {
        ...state,
        isFetching: true,
        movieList: [],
      };
    }
    case movieListTypes.FETCH_MOVIES_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        movieList: action.payload,
      };
    }
    case movieListTypes.FETCH_MOVIES_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default movieListReducer;
