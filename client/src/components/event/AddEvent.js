// -------------------------------------------------------------------
// AddEvent.js
// --
// User adds an event to the event list.
// -------------------------------------------------------------------

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addEvent } from "../../actions/eventActions";
import M from "materialize-css";
import Push from "../../actions/push.js"

class AddEvent extends Component {
   constructor(props) {
      super(props);
      // this.onChangeLastName = this.onChangeLastName.bind(this);
      this.onChangeEventName = this.onChangeEventName.bind(this);
      // this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
      // this.onChangeEmailAddr = this.onChangeEmailAddr.bind(this);
      // this.onChangeTemp = this.onChangeTemp.bind(this);

      //
      // this.onChangeContactType = this.onChangeContactType.bind(this);
      // this.onChangePipelinePosition = this.onChangePipelinePosition.bind(this);

      //

      this.onChangeEventStart = this.onChangeEventStart.bind(this);
      this.onChangeEventEnd = this.onChangeEventEnd.bind(this);
      // this.onChangeNotes = this.onChangeNotes.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
         // lname: "",
         eventName: "",
         // phone: "",
         // emailaddr: "",
         // temp: "",
         // contacttype: "",
         // pipelineposition: "",
         eventStart: "",
         eventEnd: ""
         // notes: ""
      };
   }

   // onChangeLastName(e) {
   //    this.setState({
   //       lname: e.target.value
   //    });
   // }
   onChangeEventName(e) {
      this.setState({
         eventName: e.target.value
      });
   }
   // onChangePhoneNumber(e) {
   //    this.setState({
   //       phone: e.target.value
   //    });
   // }
   // onChangeEmailAddr(e) {
   //    this.setState({
   //       emailaddr: e.target.value
   //    });
   // }
   // onChangeTemp(e) {
   //    this.setState({
   //       temp: e.target.value
   //    });
   // }

   // onChangeContactType(e) {
   //    this.setState({
   //       contacttype: e.target.value
   //    });
   // }

   // onChangePipelinePosition(e) {
   //    this.setState({
   //       pipelineposition: e.target.value
   //    });
   // }

   onChangeEventStart(e) {
      this.setState({
         eventStart: e.target.value
      });
   }

   onChangeEventEnd(e) {
      this.setState({
         eventEnd: e.target.value
      });
   }

   // onChangeNotes(e) {
   //    this.setState({
   //       notes: e.target.value
   //    });
   // }

   onSubmit(e) {
      e.preventDefault();
      const eventData = {
         email: localStorage.getItem("userEmail"),
         tokenhash: localStorage.getItem("tokenHash"),
         // lname: this.state.lname,
         eventName: this.state.eventName,
         // phone: this.state.phone,
         // emailaddr: this.state.emailaddr,
         // temp: this.state.temp,
         // contacttype: this.state.contacttype,
         // pipelineposition: this.state.pipelineposition,
         eventStart: this.state.eventStart,
         eventEnd: this.state.eventEnd
         // notes: this.state.notes
      };
      this.props.addEvent(eventData);
      this.setState({
         // lname: "",
         eventName: "",
         // phone: "",
         // emailaddr: "",
         // temp: "",
         // contacttype: "",
         // pipelineposition: "",
         eventStart: "",
         eventEnd: ""
         // notes: ""
      });
      var elems = document.querySelectorAll("select");
      var instances = M.FormSelect.init(elems);
      // temp select field
      instances[0].input.value = "";
      // contact type select field
      instances[1].input.value = "";
      // pipline select field
      instances[2].input.value = "";

      Push.create("Update", {
         body: this.state.eventName+" will be added to the calendar.",
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
               <h5>Add Event</h5>
               <div class="row"></div>

               <div class="row">
                  <form class="col s12" onSubmit={this.onSubmit}>
                     <div class="row">
                        <div class="input-field col s6">
                        <i class="material-icons prefix">note</i>
                           <input
                              id="first_name"
                              type="text"
                              class="validate"
                              value={this.state.eventName}
                              onChange={this.onChangeEventName}
                           />
                           <span class="helper-text">Event Name</span>
                        </div>
{/* 
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
                        </div> */}
                     </div>

                     {/* <div class="row">
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

                        <div class="input-field col s6">
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
                     </div> */}

                     <div class="row">
                        {/* <div class="input-field col s6">
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
                           <span class="helper-text">Temp</span>
                        </div> */}

                        <div class="input-field col s6">
                           {/* <i class="material-icons prefix">assignment_ind</i> */}
                           <i class="material-icons prefix">event</i>
                           <input
                              id="event_start_date"
                              type="date"
                              class="validate"
                              value={this.state.eventStart}
                              onChange={this.onChangeEventStart}
                           />
                           <span class="helper-text">Event Start Date</span>
                        </div>

                        <div class="input-field col s6">
                           {/* <i class="material-icons prefix">assignment_ind</i> */}
                           <i class="material-icons prefix">event</i>
                           <input
                              id="event_end_date"
                              type="date"
                              class="validate"
                              value={this.state.eventEnd}
                              onChange={this.onChangeEventEnd}
                           />
                           <span class="helper-text">Event End Date</span>
                        </div>

                        {/* <div class="input-field col s6">
                           <i class="large material-icons prefix">timer</i>
                           <input
                              id="last_reach_out_time"
                              type="time"
                              class="validate"
                              value={this.state.lastreachouttime}
                              onChange={this.onChangeLastReachOutTime}
                           />
                           <span class="helper-text">Event End Date</span>
                        </div> */}
                     </div>

                     {/* <div class="row">
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
                              <option value="Upline<">Upline</option>
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
                              <option value="Follow Up">Followed Up</option>
                              <option value="Closed/Signed">
                                 Closed/Signed
                              </option>
                              <option value="Not Right Now">
                                 Not Right Now
                              </option>
                           </select>
                           <span class="helper-text">Pipeline Position</span>
                        </div>
                     </div> */}

                     {/* <div class="row">
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
                     </div> */}

                     <div class="modal-footer">
                        <button
                           type="submit"
                           className="modal-close waves-effect waves-light btn btn-primary"
                           style={{ margin: "4px" }}
                        >
                           Add Event
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </header>
      );
   }
}

// AddContact.propTypes = {
//    addContact: PropTypes.func.isRequired,
//    contact: PropTypes.object
// };

// const mapStateToProps = state => ({
//    contact: state.contacts.contact
// });

// export default connect(mapStateToProps, { addContact })(AddContact);





AddEvent.propTypes = {
   addEvent: PropTypes.func.isRequired,
   event: PropTypes.object
};

const mapStateToProps = state => ({
   // event: state.events.event
});

export default connect(mapStateToProps, { addEvent })(AddEvent);
