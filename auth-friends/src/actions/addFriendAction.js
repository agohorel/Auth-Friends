import {
  LOADING,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILURE
} from "../actions/types";

import { axiosWithAuth } from "../utils/axiosWithAuth";

export const addFriend = friendData => async dispatch => {
  dispatch({ type: LOADING });

  try {
    const res = await axiosWithAuth().post("/friends", friendData);
    console.log(res);
    dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data }); // send payload?
  } catch (err) {
    console.error(err);
    dispatch({ type: ADD_FRIEND_FAILURE, payload: err });
  }
};
