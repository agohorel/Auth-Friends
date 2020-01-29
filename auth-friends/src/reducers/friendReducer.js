import {
  LOADING,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  GET_FRIENDS_SUCCESS,
  GET_FRIENDS_FAILURE,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILURE,
  DELETE_FRIEND_SUCCESS,
  DELETE_FRIEND_FAILURE
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
    case GET_FRIENDS_SUCCESS:
    case ADD_FRIEND_SUCCESS:
    case DELETE_FRIEND_SUCCESS:
      return {
        ...state,
        loading: false,
        friends: payload
      };
    case AUTH_FAILURE:
    case GET_FRIENDS_FAILURE:
    case ADD_FRIEND_FAILURE:
    case DELETE_FRIEND_FAILURE:
      return {
        ...state,
        errors: payload,
        isAuthenticated: false
      };
    default:
      return state;
  }
};
