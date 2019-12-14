import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import { 
    SET_CURRENT_USER, 
    // GET_CONTACTS, 
    ADD_EVENT,
    DELETE_EVENT
    // EDIT_CONTACT,
    // UPDATE_CONTACT,
    // DELETE_CONTACT,
    // SELECTALL_CONTACT 

    } from "./types";

// get all contacts
// export const getContacts = user => dispatch => {
//     axios
//         .post("/api/contacts/get", user)
//         .then(res => {
//             dispatch({
//                 type: GET_CONTACTS,
//                 payload: res.data
//             })
//         })
//         .catch(err => {
//             if (err.response.status === 401){
//                 logoutUser(dispatch);
//             }
//         });
// }

// add one contact
export const addEvent = data => dispatch => {
    axios
        .post("/api/events/add", data)
        .then(res => {
            dispatch({
                type: ADD_EVENT,
                payload: res.data
            })
        })
        .catch(err => {
            if (err.response.status === 401){
                logoutUser(dispatch);
            }
        });
}

// edit one contact
// export const editContact = contact => dispatch => {
//     dispatch({
//         type: EDIT_CONTACT,
//         payload: contact
//     })
// }

// update one contact
// export const updateContact = edit => dispatch => {
//     axios
//         .post("/api/contacts/update", edit)
//         .then(res => {
//             delete edit.tokenhash
//             delete edit.email
//             if(res.data._id === edit.id) {
//                 dispatch({
//                     type: UPDATE_CONTACT,
//                     payload: edit
//                 })
//             }
//         })
//         .catch(err => {
//             if (err.response.status === 401){
//                 logoutUser(dispatch);
//             }
//         });
// }

// delete one event
export const deleteEvent = event => dispatch => {
    axios
        .post("/api/events/delete", event)
        .then(res => {
            console.log(res)
            delete event.tokenhash
            delete event.email
            if (res.data === "DELETED") {
                dispatch({
                    type: DELETE_EVENT,
                    payload: event
                })
            }
        })
        .catch(err => {
            if (err.response.status === 401){
                logoutUser(dispatch);
            }
        });
}

// select all contacts
// export const selectAll = selected => dispatch => {
//     dispatch({
//         type: SELECTALL_CONTACT,
//         payload: selected
//     })
// }







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