import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import contactReducer from "./contactReducer";
import goalReducer from "./goalReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  contacts: contactReducer,
  goaltracker: goalReducer
});
