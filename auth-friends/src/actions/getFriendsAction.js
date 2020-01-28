import {
  LOADING,
  GET_FRIENDS_SUCCESS,
  GET_FRIENDS_FAILURE
} from "../actions/types";

import { axiosWithAuth } from "../utils/axiosWithAuth";

export const getFriends = () => async dispatch => {
  dispatch({ type: LOADING });
  try {
    const res = await axiosWithAuth().get("friends");
    console.log(res);
    dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data });
  } catch (err) {
    console.error(err);
    dispatch({ type: GET_FRIENDS_FAILURE, payload: err });
  }
};
