// -------------------------------------------------------------------
// EditContact.js
// --
// User edits a contact on the contact list page.
// -------------------------------------------------------------------

import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateContact } from "../../actions/contactActions";
import M from "materialize-css";
import * as Push from "../../actions/push.js" 

class EditContact extends Component {
   constructor(props) {
      super(props);
      this.onChangeLastName = this.onChangeLastName.bind(this);
      this.onChangeFirstName = this.onChangeFirstName.bind(this);
      this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
      this.onChangeEmailAddr = this.onChangeEmailAddr.bind(this);
      this.onChangeTemp = this.onChangeTemp.bind(this);
      this.onChangeContactType = this.onChangeContactType.bind(this);
      this.onChangePipelinePosition = this.onChangePipelinePosition.bind(this);
      this.onChangeLastReachOut = this.onChangeLastReachOut.bind(this);
      this.onChangeLastReachOutTime = this.onChangeLastReachOutTime.bind(this);
      this.onChangeNotes = this.onChangeNotes.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
         _id: "",
         lname: "",
         fname: "",
         phone: "",
         emailaddr: "",
         temp: "",
         contacttype: "",
         pipelineposition: "",
         lastreachout: "",
         lastreachouttime: "",
         date: "",
         notes: ""
      };
   }

   componentDidUpdate(prevProps) {
      if (prevProps.edit !== this.props.edit) {
         this.setState({
            _id: this.props.edit._id,
            lname: this.props.edit.lname,
            fname: this.props.edit.fname,
            phone: this.props.edit.phone,
            emailaddr: this.props.edit.emailaddr,
            temp: this.props.edit.temp,
            contacttype: this.props.edit.contacttype,
            pipelineposition: this.props.edit.pipelineposition,
            lastreachout: this.props.edit.lastreachout,
            lastreachouttime: this.props.edit.lastreachouttime,
            date: this.props.edit.date,
            notes: this.props.edit.notes
         });
         var elems = document.querySelectorAll("select");
         var instances = M.FormSelect.init(elems);
         instances[3].input.value = this.props.edit.temp;
         instances[4].input.value = this.props.edit.contacttype;
         instances[5].input.value = this.props.edit.pipelineposition;
         // instances[6].input.value = this.props.edit.lastreachouttime;
      }
   }

   onChangeLastName(e) {
      this.setState({
         lname: e.target.value
      });
   }
   onChangeFirstName(e) {
      this.setState({
         fname: e.target.value
      });
   }
   onChangePhoneNumber(e) {
      this.setState({
         phone: e.target.value
      });
   }
   onChangeEmailAddr(e) {
      this.setState({
         emailaddr: e.target.value
      });
   }
   onChangeTemp(e) {
      this.setState({
         temp: e.target.value
      });
   }

   onChangeContactType(e) {
      this.setState({
         contacttype: e.target.value
      });
   }

   onChangePipelinePosition(e) {
      this.setState({
         pipelineposition: e.target.value
      });
   }

   onChangeLastReachOut(e) {
      this.setState({
         lastreachout: e.target.value
      });
   }

   onChangeLastReachOutTime(e) {
      this.setState({
         lastreachouttime: e.target.value
      });
   }

   onChangeNotes(e) {
      this.setState({
         notes: e.target.value
      });
   }

   onSubmit(e) {
      e.preventDefault();
      const contactData = {
         email: localStorage.getItem("userEmail"),
         tokenhash: localStorage.getItem("tokenHash"),
         _id: this.state._id,
         lname: this.state.lname,
         fname: this.state.fname,
         phone: this.state.phone,
         emailaddr: this.state.emailaddr,
         temp: this.state.temp,
         contacttype: this.state.contacttype,
         pipelineposition: this.state.pipelineposition,
         lastreachout: this.state.lastreachout,
         lastreachouttime: this.state.lastreachouttime,
         date: this.state.date,
         notes: this.state.notes
      };
      this.props.updateContact(contactData);
      console.log(this.state.lastreachouttime)
      Push.create("Update", {
         body: this.state.fname+" has been updated.",
         icon: '/favicon.ico',
         timeout: 10000,
         onClick: function () {
             window.focus();
             this.close();
         }
      });
   }

   render() {
      return (
         <header>
            <div class="modal-content">
               <h5>
                  {this.state.fname} {this.state.lname}
               </h5>
               <div class="row"></div>


               <div class="row">
                  <form class="col s12" onSubmit={this.onSubmit}>
                     <div class="row">
                        <div class="input-field col s6">
                           <i class="material-icons prefix">account_circle</i>
                           <input
                              id="first_name"
                              type="text"
                              class="validate"
                              value={this.state.fname}
                              onChange={this.onChangeFirstName}
                           />
                           <span class="helper-text">First Name</span>
                        </div>

                        <div class="input-field col s6">
                           <i class="material-icons prefix">account_circle</i>
                           <input
                              id="last_name"
                              type="text"
                              class="validate"
                              value={this.state.lname}
                              onChange={this.onChangeLastName}
                           />
                           <span class="helper-text">Last Name</span>
                        </div>
                     </div>

                     <div class="row">
                        <div class="input-field col s6">
                           <i class="material-icons prefix">phone</i>
                           <input
                              id="phone_number"
                              type="text"
                              class="validate"
                              value={this.state.phone}
                              onChange={this.onChangePhoneNumber}
                           />
                           <span class="helper-text">Phone Number</span>
                        </div>

                        <div class="input-field col s6 active">
                           <i class="material-icons prefix">email</i>
                           <input
                              id="email_addr"
                              type="text"
                              class="validate"
                              value={this.state.emailaddr}
                              onChange={this.onChangeEmailAddr}
                           />
                           <span class="helper-text">E-mail</span>
                        </div>
                     </div>

                     <div class="row">
                        <div class="input-field col s6">
                           <i class="material-icons prefix">tonality</i>
                           <select
                              value={this.state.temp}
                              onChange={this.onChangeTemp}
                              class="validate"
                           >
                              <option value="" disabled selected></option>
                              <option value="Cold">Cold</option>
                              <option value="Warm">Warm</option>
                              <option value="Hot">Hot</option>
                           </select>
                           <label style={{ fontSize: "12px" }}></label>
                           <span class="helper-text">Temp</span>
                        </div>

                        <div class="input-field col s6 m6">
                           <i class="material-icons prefix">assignment_ind</i>
                           <input
                              id="last_reach_out_date"
                              type="date"
                              class="validate"
                              value={this.state.lastreachout}
                              onChange={this.onChangeLastReachOut}
                           />
                           <span class="helper-text">Last Reach Out</span>
                        </div>

                        <div class="input-field col s6 m6">
                           <i class="material-icons prefix">assignment_ind</i>
                           <input
                              id="last_reach_out_time"
                              type="time"
                              class="validate"
                              value={this.state.lastreachouttime}
                              onChange={this.onChangeLastReachOutTime}
                           />
                           <span class="helper-text">Last Reach Out Time</span>
                        </div>
                     </div>

                     <div class="row">
                        <div class="input-field col s6">
                           <i class="material-icons prefix">perm_identity</i>
                           <select
                              value={this.state.contacttype}
                              onChange={this.onChangeContactType}
                              class="validate"
                           >
                              <option value="" disabled selected></option>
                              <option value="Customer Prospect">
                                 Customer Prospect
                              </option>
                              <option value="Consultant Prospect">
                                 Consultant Prospect
                              </option>
                              <option value="Customer to Convert">
                                 Customer to Convert
                              </option>
                              <option value="Member Customer">
                                 Member Customer
                              </option>
                              <option value="Retail Customer">
                                 Retail Customer
                              </option>
                              <option value="Downline">Downline</option>
                              <option value="Sideline Team Member">
                                 Sideline Team Member
                              </option>
                              <option value="Upline">Upline</option>
                              <option value="Cancelled Customer">
                                 Cancelled Customer
                              </option>
                              <option value="Cancelled Team Member">
                                 Cancelled Team Member
                              </option>
                              <option value="Referral Source">
                                 Referral Source
                              </option>
                           </select>
                           <label style={{ fontSize: "12px" }}></label>
                           <span class="helper-text">Contact Type</span>
                        </div>

                        <div class="input-field col s6">
                           <i class="material-icons prefix">perm_identity</i>
                           <select
                              value={this.state.pipelineposition}
                              onChange={this.onChangePipelinePosition}
                              class="validate"
                           >
                              <option value="" disabled selected></option>
                              <option value="Not Contacted">
                                 Not Contacted
                              </option>
                              <option value="Contacted">Contacted</option>
                              <option value="Needs Follow Up">
                                 Needs Follow Up
                              </option>
                              <option value="All Info Sent">
                                 All Info Sent
                              </option>
                              <option value="Followed Up">Followed Up</option>
                              <option value="Closed/Signed">
                                 Closed/Signed
                              </option>
                              <option value="Not Right Now">
                                 Not Right Now
                              </option>
                           </select>
                           <label style={{ fontSize: "12px" }}></label>
                           <span class="helper-text">Pipeline Position</span>
                        </div>
                     </div>

                     <div class="row">
                        <div class="input-field col s12">
                           <i class="material-icons prefix">note</i>
                           <textarea
                              id="textarea2"
                              value={this.state.notes}
                              onChange={this.onChangeNotes}
                              class="materialize-textarea validate"
                              data-length="120"
                           ></textarea>
                           <label for="textarea2"></label>

                           <span class="helper-text">Notes</span>
                        </div>
                     </div>

                     <div class="modal-footer">
                        <button
                           type="submit"
                           className="modal-close waves-effect waves-light btn btn-primary"
                           style={{ margin: "4px" }}
                        >
                           Save Contact
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </header>
      );
   }
}

EditContact.propTypes = {
   edit: PropTypes.object,
   updateContact: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
   edit: state.contacts.edit
});

export default connect(mapStateToProps, { updateContact })(EditContact);
