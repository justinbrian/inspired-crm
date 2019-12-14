import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import { SET_CURRENT_PROFILE, GET_ERRORS, SET_CURRENT_USER } from "./types";

export const updateProfile = userData => dispatch => {
  axios
    .post("/api/users/updateprofile", userData)
    .then(res => {
      localStorage.setItem("jwtTokenProfileUpdate", res.data.token);
      dispatch({
          type: SET_CURRENT_PROFILE,
          payload: res.data.payload
      })
      dispatch({
          type: GET_ERRORS,
          payload: {profileupdated: ""}
      })
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    });
  };

export const updatePassword = userData => dispatch => {
  axios
  .post("/api/users/updatepassword", userData)
  .then(res => {
    dispatch({
        type: GET_ERRORS,
        payload: res.data
    })
  })
  .catch(err => {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  });
};

