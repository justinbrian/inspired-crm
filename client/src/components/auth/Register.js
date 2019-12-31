import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
// import "./auth.css";

class Register extends Component {
   constructor() {
      super();
      this.state = {
         fname: "",
         lname: "",
         email: "",
         password: "",
         password2: "",
         errors: {}
      };
   }

   componentDidMount() {
      // If logged in and user navigates to Register page, should redirect them to dashboard
      if (this.props.auth.isAuthenticated) {
         this.props.history.push("/dashboard");
         window.location.reload(false);
      }
   }

   componentWillReceiveProps(nextProps) {
      if (nextProps.errors) {
         this.setState({
            errors: nextProps.errors
         });
      }
   }

   onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
   };

   onSubmit = e => {
      e.preventDefault();

      const newUser = {
         fname: this.state.fname,
         lname: this.state.lname,
         email: this.state.email,
         password: this.state.password,
         password2: this.state.password2
      };

      this.props.registerUser(newUser, this.props.history);
      console.log(newUser);
   };

   render() {
      const { errors } = this.state;

      return (
         <div id="register-page" class="row">
            <div class="col s12 card-panel">
               <div className="row">
                  <div className="col s8 offset-s2">
                     <div align="center" className="col s12">
                        <h4>
                           <b>Inspired</b> CRM
                        </h4>
                        <i class="material-icons">account_circle</i> User Sign Up
                     </div>
                     <form noValidate onSubmit={this.onSubmit}>
                        <div className="input-field col s12">
                          
                           <input
                              onChange={this.onChange}
                              value={this.state.fname}
                              error={errors.fname}
                              id="fname"
                              type="text"
                              className={classnames("", {
                                 invalid: errors.fname
                              })}
                           />
                           <label htmlFor="fname">First Name</label>
                           <span className="red-text">{errors.fname}</span>
                        </div>
                        <div className="input-field col s12">
                       
                           <input
                              onChange={this.onChange}
                              value={this.state.lname}
                              error={errors.lname}
                              id="lname"
                              type="text"
                              className={classnames("", {
                                 invalid: errors.lname
                              })}
                           />
                           <label htmlFor="lname">Last Name</label>
                           <span className="red-text">{errors.lname}</span>
                        </div>
                        <div className="input-field col s12">
                     
                           <input
                              onChange={this.onChange}
                              value={this.state.email}
                              error={errors.email}
                              id="email"
                              type="email"
                              className={classnames("", {
                                 invalid: errors.email
                              })}
                           />
                           <label htmlFor="email">Email</label>
                           <span className="red-text">{errors.email}</span>
                        </div>
                        <div className="input-field col s12">
              
                           <input
                              onChange={this.onChange}
                              value={this.state.password}
                              error={errors.password}
                              id="password"
                              type="password"
                              className={classnames("", {
                                 invalid: errors.password
                              })}
                           />
                           <label htmlFor="password">Password</label>
                           <span className="red-text">{errors.password}</span>
                        </div>
                        <div className="input-field col s12">
                
                           <input
                              onChange={this.onChange}
                              value={this.state.password2}
                              error={errors.password2}
                              id="password2"
                              type="password"
                              className={classnames("", {
                                 invalid: errors.password2
                              })}
                           />
                           <label htmlFor="password2">Confirm Password</label>
                           <span className="red-text">{errors.password2}</span>
                        </div>
                        <div
                           className="col s12"
                           style={{ paddingLeft: "11.250px" }}
                        >
                           <button
                              style={{
                                 width: "290px",
                                 borderRadius: "3px",
                                 letterSpacing: "1.5px",
                                 marginTop: "1rem"
                              }}
                              type="submit"
                              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                           >
                              Sign up
                           </button>
                        </div>
                        <p align="center" className="grey-text text-darken-1">
                           Already have an account?{" "}
                           <Link to="/login">Login</Link>
                        </p>
                        <Link
                           to="/"
                           onClick={this.forceUpdate}
                           className="btn-flat waves-effect"
                        >
                           <i className="material-icons left">
                              keyboard_backspace
                           </i>{" "}
                           Back to home
                        </Link>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

Register.propTypes = {
   registerUser: PropTypes.func.isRequired,
   auth: PropTypes.object.isRequired,
   errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
   auth: state.auth,
   errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
