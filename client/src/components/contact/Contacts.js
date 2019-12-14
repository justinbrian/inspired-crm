// -------------------------------------------------------------------
// Contacts.js
// --
// The user's contact list.
// -------------------------------------------------------------------

import React, { Component } from "react";
import TableRow from "./TableRow";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getContacts, selectAll } from "../../actions/contactActions";

// Dashboard components.
import DashboardNavbar from "../dashboard/DashboardNavbar";
import DashboardFooter from "../dashboard/DashboardFooter";

class Contacts extends Component {
   constructor(props) {
      super(props)
      this.onChangeSelectAll = this.onChangeSelectAll.bind(this);

      this.state = {
         selectall: false
      }
   }

   componentDidMount() {
      const user = {
         email: localStorage.getItem("userEmail"),
         tokenhash: localStorage.getItem("tokenHash")
      };
      this.props.getContacts(user);
   }

   UNSAFE_componentWillReceiveProps(nextProps) {
      if (this.props.contact !== nextProps.contact) {
         this.props.contacts.push(nextProps.contact);
      }
      if (this.props.update !== nextProps.update) {
         var index = nextProps.contacts.findIndex(
            obj => obj._id === nextProps.update.id
         );
         // -1 means not found
         if (index !== -1) {
            this.props.contacts[index] = nextProps.update;
         }
      }
      if (this.props.delete !== nextProps.delete) {
         var index = nextProps.contacts.findIndex(
            obj => obj._id === nextProps.delete.id
         );
         // -1 means not found
         if (index !== -1) {
            this.props.contacts.splice(index, 1);
         }
      }
   }

   componentDidUpdate(prevProps){
      if(prevProps.selectall !== this.state.selectall){
         this.props.selectAll(this.state.selectall);
      }
   }

   onChangeSelectAll(e) {
      this.setState({
         selectall: e.target.checked
      });
   }

   tabRow() {
      return this.props.contacts.map(function(object, i) {
         return <TableRow obj={object} key={i} />;
      });
   }

   render() {
      return (
         <div>
            <DashboardNavbar />

            <div class="row" style={{ marginBottom: "-30px" }}>
               <div class="col s12">
                  <div class="card-panel center" style={{ padding: "0px" }}>
                     <div class="row">
                        <div class="input-field col s6">
                           <i class="material-icons prefix">search</i>
                           <input
                              type="text"
                              id="autocomplete-input"
                              class="autocomplete"
                           />
                           <label for="autocomplete-input">
                              Search contact...
                           </label>
                        </div>

                        <div class="col s6" style={{ paddingTop: "20px" }}>
                           <a
                              class="waves-effect waves-light btn-small tooltipped"
                              href="#"
                              data-position="bottom"
                              data-tooltip="Add contacts to the Goal <br> Tracker based on the Pipeline <br> Position or if the contact is a <br> Team Member"
                              style={{ margin: "4px" }}
                           >
                              Add To Goal Tracker
                           </a>
                           <a
                              class="waves-effect waves-light btn-small"
                              href="#"
                              style={{ margin: "4px" }}
                           >
                              Delete
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div class="section">
               <div class="section">
                  <div class="row">
                     <div class="col s12 m2">
                        <div
                           class="card-panel contact-list-col z-depth-1"
                           style={{ padding: "5px" }}
                        >
                           <h6 align="center">Filter Menu</h6>
                           <ul class="collapsible" data-collapsible="accordion">
                              <li>
                                 <div class="collapsible-header">
                                    <i class="material-icons expand">
                                       expand_more
                                    </i>
                                    Contact Type:
                                 </div>
                                 <div class="collapsible-body">
                                    <form action="#">
                                       <label>
                                          <input type="checkbox" />
                                          <span>Customer Prospect</span>
                                       </label>
                                       <br />

                                       <label>
                                          <input type="checkbox" />
                                          <span>Consultant Prospect</span>
                                       </label>
                                       <br />
                                       <label>
                                          <input type="checkbox" />
                                          <span>Customer to Convert</span>
                                       </label>
                                       <br />
                                       <label>
                                          <input type="checkbox" />
                                          <span>Member Customer</span>
                                       </label>
                                       <br />
                                       <label>
                                          <input type="checkbox" />
                                          <span>Downline</span>
                                       </label>
                                       <br />
                                       <label>
                                          <input type="checkbox" />
                                          <span>Sideline Team Member</span>
                                       </label>
                                       <br />
                                       <label>
                                          <input type="checkbox" />
                                          <span>Upline</span>
                                       </label>
                                       <br />
                                       <label>
                                          <input type="checkbox" />
                                          <span>Cancelled Customer</span>
                                       </label>
                                       <br />
                                       <label>
                                          <input type="checkbox" />
                                          <span>Cancelled Team Member</span>
                                       </label>
                                       <br />
                                       <label>
                                          <input type="checkbox" />
                                          <span>Referral Source</span>
                                       </label>
                                    </form>
                                 </div>
                              </li>
                              <li>
                                 <div class="collapsible-header">
                                    <i class="material-icons expand">
                                       expand_more
                                    </i>
                                    Pipeline Position:
                                 </div>
                                 <div class="collapsible-body">
                                    <form action="#">
                                       <label>
                                          <input type="checkbox" />
                                          <span>Not Contacted</span>
                                       </label>
                                       <br />
                                       <label>
                                          <input type="checkbox" />
                                          <span>Contacted</span>
                                       </label>
                                       <br />
                                       <label>
                                          <input type="checkbox" />
                                          <span>Needs Follow Up</span>
                                       </label>
                                       <br />
                                       <label>
                                          <input type="checkbox" />
                                          <span>All Info Sent</span>
                                       </label>
                                       <br />

                                       <label>
                                          <input type="checkbox" />
                                          <span>Followed Up</span>
                                       </label>
                                       <br />
                                       <label>
                                          <input type="checkbox" />
                                          <span>Closed/Signed</span>
                                       </label>
                                       <br />
                                       <label>
                                          <input type="checkbox" />
                                          <span>Not Right Now</span>
                                       </label>
                                    </form>
                                 </div>
                              </li>
                              <li>
                                 <div class="collapsible-header">
                                    <i class="material-icons expand">
                                       expand_more
                                    </i>
                                    Lead Temp:
                                 </div>
                                 <div class="collapsible-body">
                                    <form action="#">
                                       <label>
                                          <input type="checkbox" />
                                          <span>Cold</span>
                                       </label>
                                       <br />
                                       <label>
                                          <input type="checkbox" />
                                          <span>Warm</span>
                                       </label>
                                       <br />
                                       <label>
                                          <input type="checkbox" />
                                          <span>Hot</span>
                                       </label>
                                    </form>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </div>

                     <div class="col s12 m10">
                        <div
                           class="card-panel contact-list-col z-depth-1"
                           style={{ height: "80vh", padding: "0px" }}
                        >
                           <div class="row">
                              <div class="col s12">
                                 <table
                                    id="myTable"
                                    class="highlight"
                                    style={{ width: "1400px", margin: "auto" }}
                                 >
                                    <thead>
                                       <tr>
                                          <th>
                                             <label>
                                                <input 
                                                   type="checkbox"
                                                   checked={this.state.selectall}
                                                   onChange={this.onChangeSelectAll}
                                                />
                                                <span></span>
                                             </label>
                                          </th>

                                          <th>Name</th>

                                          <th>Phone Number</th>
                                          <th>E-mail</th>
                                          <th>Temp</th>
                                          <th>Contact Type</th>
                                          <th>Position</th>
                                          <th>Last Reach Out</th>
                                          <th>Date Created</th>
                                          <th colSpan="3">Action</th>
                                       </tr>
                                    </thead>

                                    <tbody>{this.tabRow()}</tbody>
                                 </table>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <br />
            <br />

            <DashboardFooter />
         </div>
      );
   }
}

Contacts.propTypes = {
   getContacts: PropTypes.func.isRequired,
   selectAll: PropTypes.func.isRequired,
   contacts: PropTypes.array.isRequired,
   contact: PropTypes.object,
   update: PropTypes.object,
   delete: PropTypes.object,
   selectall: PropTypes.bool,
   selected: PropTypes.object
};

const mapStateToProps = state => ({
   contacts: state.contacts.contacts,
   contact: state.contacts.contact,
   update: state.contacts.update,
   delete: state.contacts.delete,
   selectall: state.contacts.selectall,
   selected: state.contacts.selected
});

export default connect(mapStateToProps, { getContacts, selectAll })(Contacts);
