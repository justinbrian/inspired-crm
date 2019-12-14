import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updatePassword } from "../../actions/profileActions";
import M from "materialize-css"
import classnames from "classnames";


class ChangePassword extends Component {
   constructor(props){
      super(props);
      this.onUpdatePassword = this.onUpdatePassword.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      this.onChangeNewPassword = this.onChangeNewPassword.bind(this);
      this.onChangeNewPassword2 = this.onChangeNewPassword2.bind(this);

      this.state = {
         password: "",
         newpassword: "",
         newpassword2: "",
         errors: {}
      };
   }

   componentDidUpdate(prevProps) {
      if (prevProps.errors !== this.props.errors) {
         this.setState({
            errors: this.props.errors
         });
         if (this.props.errors.passwordchange === "success") {
            M.toast({html: "Password Updated", classes: "rounded"})
            this.setState({
               password: "",
               newpassword: "",
               newpassword2: ""
            });
         }
      }
   }

   onChangePassword(e) {
      this.setState({
         password: e.target.value
      });
   }
   onChangeNewPassword(e) {
      this.setState({
         newpassword: e.target.value
      });
   }
   onChangeNewPassword2(e) {
      this.setState({
         newpassword2: e.target.value
      });
   }

   onUpdatePassword(e){
      e.preventDefault();
      const contactData = {
         email: localStorage.getItem("userEmail"),
         tokenhash: localStorage.getItem("tokenHash"),
         password: this.state.password,
         newpassword: this.state.newpassword,
         newpassword2: this.state.newpassword2
      };
      this.props.updatePassword(contactData)
   }

   render() {
      const { errors } = this.state;

      return (
         <header>
            <div class="row">
               <div class="input-field col s6">
                  <input
                     value={this.state.password}
                     onChange={this.onChangePassword}
                     error={errors.passwordincorrect}
                     id="current_password"
                     type="password"
                     className={classnames("", {
                        invalid: errors.password
                     })}
                  />
                  <label for="current_password">Current Password</label>
                  <span className="red-text">{errors.passwordincorrect}</span>
               </div>
            </div>
            <div class="row">
               <div class="input-field col s6">
                  <input 
                     value={this.state.newpassword}
                     onChange={this.onChangeNewPassword}
                     error={errors.newpassword}
                     id="new_password" 
                     type="password" 
                     className={classnames("", {
                        invalid: errors.newpassword
                     })}
                  />
                  <label for="new_password">New Password</label>
                  <span className="red-text">{errors.newpassword}</span>
               </div>
               <div class="input-field col s6">
                  <input
                     value={this.state.newpassword2}
                     onChange={this.onChangeNewPassword2}
                     error={errors.newpassword2}
                     id="confirm_password"
                     type="password"
                     className={classnames("", {
                        invalid: errors.newpassword2
                     })}
                  />
                  <label for="confirm_password">Confirm Password</label>
                  <span className="red-text">{errors.newpassword2}</span>
               </div>
            </div>

            <div class="modal-footer">
               <button
                  onClick={this.onUpdatePassword}
                  type="submit"
                  class="modal-close waves-effect waves-light btn"
               >
                  Update Password
               </button>
               <br />
               <br />
            </div>
         </header>
      );
   }
}

ChangePassword.propTypes = {
   updatePassword: PropTypes.func.isRequired,
   errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
   errors: state.errors
});

export default connect(
   mapStateToProps,
   { updatePassword }
)(ChangePassword);
