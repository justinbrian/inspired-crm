// -----------------------------------------------------------------------------------------
// ReachOutsRow.js
// --
// Lists the contacts who are reached out for the week.
// -----------------------------------------------------------------------------------------

import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editContact, deleteContact } from "../../actions/contactActions";
import ReactTooltip from "react-tooltip";

class ReachOutsRow extends Component {
   constructor(props) {
      super(props);
      this.delete = this.delete.bind(this);
      this.edit = this.edit.bind(this);
      this.remove = this.remove.bind(this);
   }

   delete() {
      const obj = {
         email: localStorage.getItem("userEmail"),
         tokenhash: localStorage.getItem("tokenHash"),
         id: this.props.obj._id
      };
      axios
         .post("/api/contacts/delete/", obj)
         .then(res => console.log(res))
         .catch(err => console.log(err));
      window.location.reload(false);
   }

   edit() {
      this.props.editContact(this.props.obj);
   }

   remove() {
      this.props.editContact(this.props.obj);
   }

   render() {
      return (
         <tr>
            <ReactTooltip />
            <td>
                <a class="modal-trigger" href="#editcontact" onClick={this.edit}>
                  {this.props.obj.fname} {this.props.obj.lname}
               </a>
            </td>

            <td>
               <a
                  class="modal-trigger waves-effect waves-light btn-small"
                  href="#completereachout"
               >
                  Complete
               </a>
            </td>

            <td>
               <a
                  class="modal-trigger"
                  href="#deletecontact"
                  onClick={this.remove}
                  data-tip="Remove Contact from New Reachouts"
               >
                  <i class="material-icons">delete</i>
               </a>
            </td>
         </tr>
      );
   }
}

ReachOutsRow.propTypes = {
   editContact: PropTypes.func.isRequired,
   edit: PropTypes.object
};

const mapStateToProps = state => ({
   edit: state.contacts.edit
});

export default connect(mapStateToProps, { editContact })(ReachOutsRow);
