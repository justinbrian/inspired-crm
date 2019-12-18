import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteEvent } from "../../actions/eventActions";
import * as Push from "../../actions/push.js"

class DeleteEvent extends Component {
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
      body: "Event Removed.",
      icon: '/favicon.ico',
      timeout: 10000,
      onClick: function () {
          window.focus();
          this.close();
      }
   });
    this.props.deleteEvent(selected);
  }

  render() {
    return (
      <header>
        <div class="modal-content">
          <h5>Delete Event</h5>
          <div class="row"></div>
          <p>Are you sure you want to delete this event?</p>
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

DeleteEvent.propTypes = {
  events: PropTypes.object,
  deleteEvent: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  // edit: state.events.edit
});

export default connect(mapStateToProps, { deleteEvent })(DeleteEvent);
