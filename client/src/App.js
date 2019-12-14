import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

// Landing home page components.
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import GoalTracker from "./components/goal/GoalTracker";

// Private Dashboard Component pages.
import Contacts from "./components/contact/Contacts";
import AddContact from "./components/contact/AddContact";
import AddEvent from "./components/event/AddEvent";
import EditContact from "./components/contact/EditContact";
import ModificationLog from "./components/log/ModificationLog";
import Calendar from "./components/calendar/Calendar";

import Pipeline from "./components/pipeline/Pipeline";
import Account from "./components/account/Profile";
import EmailScripts from "./components/scripts/EmailScripts";
import NotificationLog from "./components/log/NotificationLog";

// Help Modals.
import ReachOutsHelp from "./components/help/ReachOutsHelp";
import TeamReachOutsHelp from "./components/help/TeamReachOutsHelp";
import FollowUpsHelp from "./components/help/FollowUpsHelp";

// Import App.css.
import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
   // Set auth token header auth
   const token = localStorage.jwtToken;
   setAuthToken(token);
   // Decode token and get user info and exp
   const decoded = jwt_decode(token);
   // Set user and isAuthenticated
   // if/else statement for update profile redux state handling
   if(localStorage.jwtTokenProfileUpdate) {
      const updatedToken = localStorage.jwtTokenProfileUpdate;
      const updatedDecode = jwt_decode(updatedToken);
      store.dispatch(setCurrentUser(updatedDecode));
   }else {
      store.dispatch(setCurrentUser(decoded));
   }
   // Check for expired token
   const currentTime = Date.now() / 1000; // to get in milliseconds
   if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser());

      // Redirect to login
      window.location.href = "./login";
   }
}

class App extends Component {
   render() {
      return (
         <Provider store={store}>
            <Router>
               <div className="App">
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Switch>
                     <PrivateRoute exact path="/add" component={AddContact} />
                     <PrivateRoute path="/edit" component={EditContact} />
                     <PrivateRoute path="/contacts" component={Contacts} />
                     <PrivateRoute path="/calendar" component={Calendar} />
                     <PrivateRoute exact path="/event" component={AddEvent} />
                     <PrivateRoute path="/account" component={Account} />
                     <PrivateRoute path="/pipeline" component={Pipeline} />
                     <PrivateRoute
                        path="/emailscripts"
                        component={EmailScripts}
                     />
                      <PrivateRoute
                        path="/notifications"
                        component={NotificationLog}
                     />

                     <PrivateRoute
                        exact
                        path="/modificationlog"
                        component={ModificationLog}
                     />

                     <PrivateRoute
                        exact
                        path="/teamreachoutshelp"
                        component={TeamReachOutsHelp}
                     />
                     <PrivateRoute
                        exact
                        path="/followupsshelp"
                        component={FollowUpsHelp}
                     />
                     <PrivateRoute
                        exact
                        path="/reachoutshelp"
                        component={ReachOutsHelp}
                     />
                     <PrivateRoute
                        exact
                        path="/goaltracker"
                        component={GoalTracker}
                     />
                  </Switch>
               </div>
            </Router>
         </Provider>
      );
   }
}
export default App;
