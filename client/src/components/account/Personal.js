import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateProfile } from "../../actions/profileActions";
import M from "materialize-css"
import classnames from "classnames";



class Personal extends Component {
   constructor(props){
      super(props);
      this.onUpdateProfile = this.onUpdateProfile.bind(this);
      this.onChangeLastName = this.onChangeLastName.bind(this);
      this.onChangeFirstName = this.onChangeFirstName.bind(this);
      this.onChangeCompany = this.onChangeCompany.bind(this);

      this.state = {
         fname: "",
         lname: "",
         email: "",
         company: "",
         errors: {}
      };
   }

   componentDidUpdate(prevProps) {
      if (prevProps.errors !== this.props.errors) {
         this.setState({
            errors: this.props.errors
         });
         if (this.props.errors.profileupdated === "") {
            M.toast({html: "Profile Updated", classes: "rounded"})
         }
      }
   }

   componentDidMount(){
      this.setState({
         fname: this.props.auth.user.fname,
         lname: this.props.auth.user.lname,
         email: this.props.auth.user.email,
         company: this.props.auth.user.company
      })
   }

   onChangeFirstName(e) {
      this.setState({
         fname: e.target.value
      });
   }
   onChangeLastName(e) {
      this.setState({
         lname: e.target.value
      });
   }
   onChangeCompany(e) {
      this.setState({
         company: e.target.value
      })
   }
   

   onUpdateProfile(e){
      e.preventDefault();
      const contactData = {
         email: localStorage.getItem("userEmail"),
         tokenhash: localStorage.getItem("tokenHash"),
         lname: this.state.lname,
         fname: this.state.fname,
         company: this.state.company
      };
      this.props.updateProfile(contactData);
   }

   render() {
      const { errors } = this.state;
      
      return (
         <header>
            <div class="row">
               <div class="input-field col s6">
                  <input
                     value={this.state.fname}
                     onChange={this.onChangeFirstName}
                     error={errors.fname}
                     id="first_name"
                     type="text"
                     className={classnames("", {
                        invalid: errors.fname
                     })}
                  />
                  <label for="first_name">First Name</label>
                  <span className="red-text">{errors.fname}</span>
               </div>
               <div class="input-field col s6">
                  <input
                     defaultValue={this.state.lname}
                     onChange={this.onChangeLastName}
                     error={errors.lname}
                     id="last_name"
                     type="text"
                     className={classnames("", {
                        invalid: errors.lname
                     })}
                  />
                  <label for="last_name">Last Name</label>
                  <span className="red-text">{errors.lname}</span>
               </div>
            </div>
            <div class="row">
               <div class="input-field col s6">
                  <input
                     disabled
                     value={this.state.email}
                     id="email"
                     type="text"
                     class="validate"
                  />
                  <label for="email">E-mail</label>
               </div>
               <div class="input-field col s6">
                  <input 
                     value={this.state.company}
                     onChange={this.onChangeCompany}
                     id="company" 
                     type="text" 
                     class="validate" />
                  <label for="company">Company</label>
               </div>
            </div>
            <div class="modal-footer">
               <button
                  type="submit"
                  onClick={this.onUpdateProfile}
                  class="modal-close waves-effect waves-light btn"
               >
                  Update Profile
               </button>
            </div>
         </header>
      );
   }
}

Personal.propTypes = {
   updateProfile: PropTypes.func.isRequired,
   auth: PropTypes.object.isRequired,
   errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
   auth: state.auth,
   errors: state.errors
});

export default connect(
   mapStateToProps,
   { updateProfile }
)(Personal);
