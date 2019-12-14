// -------------------------------------------------------------------
// DashboardNavbar.js
// --
// The fixed navbar for the dashboard.
// -------------------------------------------------------------------

import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import * as Push from "./push.js" 

// Modals.
import AddContact from "../contact/AddContact.js";
import DeleteContact from "../contact/DeleteContact.js";
import EmailScripts from "../scripts/EmailScripts.js";
import NotificationLog from "../log/NotificationLog.js";
import EditContact from "../contact/EditContact.js";
import CreateEmail from "../email/CreateEmail.js";
import AddEvent from "../event/AddEvent.js";

class DashboardNavbar extends Component {
   onLogoutClick = e => {
      e.preventDefault();
      this.props.logoutUser();
      window.location.reload(false);
      
      Push.create("You have signed out.", {
         body: "All changes have been saved.",
         icon: '/favicon.ico',
         timeout: 5000,
         onClick: function () {
             window.focus();
             this.close();
         }
      }); 

   };

   render() {
      const { user } = this.props.auth;

      return (
         <div>
            <div className="navbar-fixed">
               <nav className="z-depth-1"></nav>

               <nav class="blue-grey" role="navigation">
                  <div
                     class="nav-wrapper"
                     style={{ paddingLeft: "50px", paddingRight: "50px" }}
                  >
                     <ul class="left hide-on-med-and-down">
                        <li>
                           <a
                              class="dropdown-trigger"
                              data-target="main-dropdown1"
                           >
                              My Business
                           </a>
                        </li>
                        <li>
                           <a
                              class="dropdown-trigger"
                              data-target="main-dropdown2"
                           >
                              Contact Management
                           </a>
                        </li>
                     </ul>
                     <ul class="right hide-on-med-and-down">
                        <li>
                           <a
                              class="modal-trigger tooltipped"
                              data-position="bottom"
                              data-tooltip="Scripts"
                              href="#scripts"
                           >
                              <i class="large material-icons">library_books</i>
                           </a>
                        </li>

                        <li>
                           <a
                              class="modal-trigger tooltipped"
                              data-position="bottom"
                              data-tooltip="Add Event"
                              href="#addevent"
                           >
                              <i class="material-icons">event</i>
                           </a>
                        </li>

                        <li>
                           <a
                              class="modal-trigger tooltipped"
                              data-position="bottom"
                              data-tooltip="Add Contact"
                              href="#addcontact"
                           >
                              <i class="large material-icons">add_circle</i>
                           </a>
                        </li>

                        <li>
                           <a
                              class="tooltipped"
                              href="https://tomato-timer.com/"
                              target="_blank"
                              data-position="bottom"
                              data-tooltip="Tomato Timer"
                              rel="noopener noreferrer"
                           >
                              <i class="large material-icons">timer</i>
                           </a>
                        </li>
                        <li>
                           <a
                              class="modal-trigger tooltipped"
                              data-position="bottom"
                              data-tooltip="Notifications"
                              href="#notifications"
                           >
                              <i class="large material-icons">notifications</i>
                           </a>
                        </li>
                        <li>
                           <a
                              class="dropdown-trigger"
                              data-target="main-dropdown3"
                           >
                              <i class="large material-icons">account_circle</i>
                           </a>
                        </li>
                     </ul>

                     <a data-target="nav-mobile" class="sidenav-trigger">
                        <i class="material-icons" style={{ color: "white" }}>
                           menu
                        </i>
                     </a>
                  </div>
               </nav>
            </div>

            <ul id="main-dropdown1" class="dropdown-content">
               <li>
                  <Link to="/goaltracker" onClick={this.forceUpdate}>
                     <i class="material-icons" style={{ color: "#424242" }}>
                        check
                     </i>
                     <font color="#363636">Goal Tracker</font>
                  </Link>
               </li>
               <li>
                  <Link to="/calendar" onClick={this.forceUpdate}>
                     <i class="material-icons" style={{ color: "#424242" }}>
                        event
                     </i>
                     <font color="#363636">Calendar</font>
                  </Link>
               </li>
            </ul>

            <ul id="main-dropdown2" class="dropdown-content">
               <li>
                  <Link to="/contacts" onClick={this.forceUpdate}>
                     <i class="material-icons" style={{ color: "#424242" }}>
                        contacts
                     </i>
                     <font color="#363636">Contact List</font>
                  </Link>
               </li>
               <li>
                  <a class="modal-trigger" href="#addcontact">
                     <i class="material-icons" style={{ color: "#424242" }}>
                        add_box
                     </i>
                     <font color="#363636">Add Contact</font>
                  </a>
               </li>
               <li>
                  <Link to="/pipeline" onClick={this.forceUpdate}>
                     <i class="material-icons" style={{ color: "#424242" }}>
                        assessment
                     </i>
                     <font color="#363636">Pipeline</font>
                  </Link>
               </li>
            </ul>

            <ul id="main-dropdown3" class="dropdown-content">
               <li>
                  <center>
                     <p><b>Welcome</b>, {user.fname}
                     <br />
                     {user.email}</p>
                  </center>
               </li>

               <li>
                  <Link to="/account" onClick={this.forceUpdate}>
                     <i
                        class="large material-icons"
                        style={{ color: "#424242" }}
                     >
                        account_box
                     </i>
                     <font color="#363636">My Account</font>
                  </Link>
               </li>

               <li>
                  <a onClick={this.onLogoutClick}>
                     <i class="material-icons" style={{ color: "#424242" }}>
                        exit_to_app
                     </i>
                     <font color="#363636">Logout</font>
                  </a>
               </li>
            </ul>

            <ul id="nav-mobile" class="sidenav">
               <li>
                  <div class="user-view">
                     <div class="background">
                        <img src="./assets/img/gallary/22.png" />
                     </div>
                     <a href="#user">
                        <img class="circle" src="./assets/img/useravatar.png" />
                     </a>
                     <a href="#name">
                        <span class="white-text name" id="shadow">
                           {user.fname} {user.lname}
                        </span>
                     </a>
                     <a href="#email">
                        <span class="white-text email" id="shadow">
                           {user.email}
                        </span>
                     </a>
                  </div>
               </li>
               <li class="no-padding">
                  <ul class="collapsible collapsible-accordion">
                     <li>
                        <a class="collapsible-header waves-effect">
                           My Account
                           <i class="material-icons expand">expand_more</i>
                        </a>
                        <div class="collapsible-body">
                           <ul>
                              <li>
                                 <Link to="/account" onClick={this.forceUpdate}>
                                    <i class="material-icons">account_circle</i>
                                    My Profile
                                 </Link>
                              </li>
                              <li>
                                 <a onClick={this.onLogoutClick}>
                                    <i class="material-icons">exit_to_app</i>
                                    Logout
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </li>

                     <li>
                        <a class="collapsible-header waves-effect">
                           My Business
                           <i class="material-icons expand">expand_more</i>
                        </a>
                        <div class="collapsible-body">
                           <ul>
                              <li>
                                 <Link
                                    to="/goaltracker"
                                    onClick={this.forceUpdate}
                                 >
                                    <i class="material-icons">check</i>Goal
                                    Tracker
                                 </Link>
                              </li>
                              <li>
                                 <Link
                                    to="/calendar"
                                    onClick={this.forceUpdate}
                                 >
                                    <i class="material-icons">event</i>Calendar
                                 </Link>
                              </li>
                              <li>
                                 <a class="modal-trigger" href="#addevent">
                                    <i class="material-icons">add_box</i>Add
                                    Event
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </li>

                     <li>
                        <a class="collapsible-header waves-effect">
                           Contact Management
                           <i class="material-icons expand">expand_more</i>
                        </a>
                        <div class="collapsible-body">
                           <ul>
                              <li>
                                 <Link
                                    to="/contacts"
                                    onClick={this.forceUpdate}
                                 >
                                    <i class="material-icons">contacts</i>
                                    Contact List
                                 </Link>
                              </li>
                              <li>
                                 <a class="modal-trigger" href="#addcontact">
                                    <i class="material-icons">add_box</i>Add
                                    Contact
                                 </a>
                              </li>
                              <li>
                                 <Link
                                    to="/pipeline"
                                    onClick={this.forceUpdate}
                                 >
                                    <i class="material-icons">assessment</i>
                                    Pipeline
                                 </Link>
                              </li>
                           </ul>
                        </div>
                     </li>

                     <li>
                        <a class="collapsible-header waves-effect">
                           Team + Marketing
                           <i class="material-icons expand">expand_more</i>
                        </a>
                        <div class="collapsible-body">
                           <ul>
                              <li>
                                 <a class="modal-trigger" href="#scripts">
                                    <i class="material-icons">library_books</i>
                                    Scripts
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </li>
                  </ul>
               </li>
            </ul>

            <div id="addcontact" class="modal">
               <AddContact />
            </div>
            <div id="addevent" class="modal">
               <AddEvent />
            </div>
            <div id="editcontact" class="modal">
               <EditContact />
            </div>
            <div
               id="deletecontact"
               class="modal"
               style={{ width: "20%", padding: "0", left: "0", right: "0" }}
            >
               <DeleteContact />
            </div>
            <div id="scripts" class="modal modal-fixed-footer">
               <EmailScripts />
            </div>
            <div
               id="notifications"
               class="modal"
               style={{ width: "30%", padding: "0", left: "0", right: "0" }}
            >
               <NotificationLog />
            </div>
            <div id="createemail" class="modal">
               <CreateEmail />
            </div>
         </div>
      );
   }
}

DashboardNavbar.propTypes = {
   logoutUser: PropTypes.func.isRequired,
   auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
   auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(DashboardNavbar);
