import { LOADING, AUTH_SUCCESS, AUTH_FAILURE } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  loading: false,
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
        isAuthenticated: false
      };
    default:
      return state;
  }
};
