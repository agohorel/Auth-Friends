import {
  LOADING,
  EDIT_SELECT,
  EDIT_SUCCESS,
  EDIT_FAILURE
} from "../actions/types";

import { axiosWithAuth } from "../utils/axiosWithAuth";

export const editFriend = (id, data) => async dispatch => {
  dispatch({ type: LOADING });

  try {
    const res = await axiosWithAuth().put(`friends/${id}`, data);
    dispatch({ type: EDIT_SUCCESS, payload: res.data });
  } catch (err) {
    console.error(err);
    dispatch({ type: EDIT_FAILURE, payload: err });
  }
};

export const selectFriendToEdit = friend => async dispatch => {
  dispatch({ type: EDIT_SELECT, payload: friend });
};
