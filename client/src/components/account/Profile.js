import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

// Dashboard components.
import DashboardNavbar from "../dashboard/DashboardNavbar";
import DashboardFooter from "../dashboard/DashboardFooter";

// Profile components.
import ProfileHeader from "./ProfileHeader";
import Personal from "./Personal";
import ChangePassword from "./ChangePassword";
import ModificationLog from "../log/ModificationLog";



class Profile extends Component {
   onLogoutClick = e => {
      e.preventDefault();
      this.props.logoutUser();
      window.location.reload(false);
   };

   render() {
      const { user } = this.props.auth;

      return (
         <div>
         
            <DashboardNavbar />

            <div class="container">
               <div class="section">
                  <ProfileHeader />
               </div>{" "}
               <div class="row">
                  <div class="col s12">
                     <ul class="tabs">
                        <li class="tab col s3">
                           <a href="#personal" class="active">
                              Personal
                           </a>
                        </li>
                        <li class="tab col s3">
                           <a href="#mod-log">Modification Log</a>
                        </li>
                     </ul>
                  </div>

                  <div id="personal" class="col s12">
                     <h6>Profile Info</h6>
                     <div class="section">
                        <Personal />
                     </div>
                     <div class="divider"></div>
                     <h6>Change Password</h6>
                     <div class="section">
                        <ChangePassword />
                     </div>
                  </div>

                  <div id="mod-log" class="col s12">
                     <ModificationLog />
                  </div>
               </div>
            </div>
            <br />
            <br />
            <br />
            <DashboardFooter />
         </div>
      );
   }
}

Profile.propTypes = {
   logoutUser: PropTypes.func.isRequired,
   auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
   auth: state.auth
});

export default connect(
   mapStateToProps,
   { logoutUser }
)(Profile);
