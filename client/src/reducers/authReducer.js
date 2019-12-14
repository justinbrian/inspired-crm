import { SET_CURRENT_USER, USER_LOADING, SET_CURRENT_PROFILE } from "../actions/types";

const isEmpty = require("is-empty");

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case SET_CURRENT_PROFILE:
      state.user.fname = action.payload.fname;
      state.user.lname = action.payload.lname;
      state.user.company = action.payload.company;

      return {
        ...state
      }
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
