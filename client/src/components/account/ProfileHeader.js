import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

// Dashboard components.
import DashboardNavbar from "../dashboard/DashboardNavbar";
import DashboardFooter from "../dashboard/DashboardFooter";

// ProfileHeader components.
import Personal from "./Personal";
import ChangePassword from "./ChangePassword";
import ModificationLog from "../log/ModificationLog";

class ProfileHeader extends Component {
   onLogoutClick = e => {
      e.preventDefault();
      this.props.logoutUser();
      window.location.reload(false);
   };

   render() {
      const { user } = this.props.auth;

      return (
         <header>
            <header class="hero center px3 py4 white">
               <h1 class="h1 h0-responsive mt4 mb0 regular">
                  <img
                     class="responsive-img circle z-depth-3"
                     width="150"
                     src="./assets/img/useravatar.png"
                     alt=""
                  />
               </h1>
               <p class="h3"></p>
            </header>
         </header>
      );
   }
}

ProfileHeader.propTypes = {
   logoutUser: PropTypes.func.isRequired,
   auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
   auth: state.auth
});

export default connect(
   mapStateToProps,
   { logoutUser }
)(ProfileHeader);
