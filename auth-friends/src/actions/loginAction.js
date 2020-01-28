import axios from "axios";
import { LOADING, AUTH_SUCCESS, AUTH_FAILURE } from "./types";

export const login = creds => async dispatch => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.post("http://localhost:5000/api/login", creds);
    localStorage.setItem("token", res.data.payload);
    dispatch({ type: AUTH_SUCCESS });
  } catch (err) {
    console.error(err);
    dispatch({ type: AUTH_FAILURE, payload: err });
  }
};
