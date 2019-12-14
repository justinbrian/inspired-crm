import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import { 
    SET_CURRENT_USER, 
    GET_GOALTRACKER,
    SET_GOALTRACKER } from "./types";

// get goal tracker info
export const getGoals = user => dispatch => {
    axios
        .post("/api/users/getgoals", user)
        .then(res => {
            dispatch({
                type: GET_GOALTRACKER,
                payload: res.data
            })
        })
        .catch(err => {
            if (err.response.status === 401){
                logoutUser(dispatch);
            }
        });
}

// set goal tracker info
export const setGoals = data => dispatch => {
    axios
        .post("/api/users/setgoals", data)
        .then(res => {
            dispatch({
                type: SET_GOALTRACKER,
                payload: res.data
            })
        })
        .catch(err => {
            if (err.response.status === 401){
                logoutUser(dispatch);
            }
        });
}






const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};
// Log user out
const logoutUser = dispatch => {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("tokenHash");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("jwtTokenProfileUpdate");
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
    window.location.reload(false);
};