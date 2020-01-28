import {
  LOADING,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  GET_FRIENDS_SUCCESS,
  GET_FRIENDS_FAILURE
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  loading: false,
  errors: false,
  friends: []
};

export const friendReducer = (state = initialState, action) => {
  const { type, payload } = action;

  console.log(type);

  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true
      };
    case AUTH_FAILURE:
      return {
        ...state,
        errors: payload,
        isAuthenticated: false
      };
    case GET_FRIENDS_SUCCESS:
      return {
        ...state,
        loading: false,
        friends: payload
      };
    case GET_FRIENDS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};
