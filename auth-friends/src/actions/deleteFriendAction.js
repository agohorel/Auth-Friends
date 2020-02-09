import {
  LOADING,
  DELETE_FRIEND_SUCCESS,
  DELETE_FRIEND_FAILURE
} from "../actions/types";

import { axiosWithAuth } from "../utils/axiosWithAuth";

export const deleteFriend = id => async dispatch => {
  dispatch({ type: LOADING });
  try {
    const res = await axiosWithAuth().delete(`friends/${id}`);
    console.log(res);
    dispatch({ type: DELETE_FRIEND_SUCCESS, payload: res.data });
  } catch (err) {
    console.error(err);
    dispatch({ type: DELETE_FRIEND_FAILURE });
  }
};
