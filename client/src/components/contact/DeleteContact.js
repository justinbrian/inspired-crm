import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteContact } from "../../actions/contactActions";
import * as Push from "./push.js"

class DeleteContact extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const selected = {
      email: localStorage.getItem("userEmail"),
      tokenhash: localStorage.getItem("tokenHash"),
      id: this.props.edit._id
    };
    Push.create("Update", {
      body: " Contact Removed.",
      icon: '/favicon.ico',
      timeout: 10000,
      onClick: function () {
          window.focus();
          this.close();
      }
   });
    this.props.deleteContact(selected);
  }

  render() {
    return (
      <header>
        <div class="modal-content">
          <h5>Delete Contact</h5>
          <div class="row"></div>
          <p>Are you sure you want to delete this contact?</p>
        </div>
        <div class="modal-footer">
          <button
            class="modal-close waves-effect btn"
            style={{ marginRight: "10px" }}
          >
            Cancel
          </button>
          <button
            onClick={this.onSubmit}
            onKeyPress={this.onSubmit}
            type="submit"
            value="delete"
            class="modal-close waves-effect waves-light btn red darken-2"
            style={{ marginRight: "10px" }}
          >
            Delete
          </button>
        </div>
      </header>
    );
  }
}

DeleteContact.propTypes = {
  contacts: PropTypes.object,
  deleteContact: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  edit: state.contacts.edit
});

export default connect(mapStateToProps, { deleteContact })(DeleteContact);
