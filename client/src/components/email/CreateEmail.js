import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";

class CreateEmail extends Component {
   state = {
      value: "",
      copied: false
   };

   render() {
      const { user } = this.props.auth;
      return (
         <header>
            <div class="modal-content">
               <ToastContainer />
               <h5>Create Email</h5>

               <div class="row">
                  <form class="col s12">
                     <div class="row">
                        <div class="input-field col s6">
                           <input id="to_email" type="email" class="validate" />
                           <label for="to_email">To</label>
                        </div>
                        <div class="input-field col s6">
                           <input
                              value={user.email}
                              id="from_email"
                              type="email"
                              class="validate"
                           />
                           <label for="from_email">From</label>
                        </div>
                     </div>
                     <div class="row">
                        <div class="input-field col s12">
                           <input id="subject" type="text" class="validate" />
                           <label for="subject">Subject</label>
                        </div>
                     </div>

                     <div class="row">
                     <a
                              class="modal-trigger waves-effect waves-light btn btn-primary"
                              data-position="bottom"
                              data-tooltip="Scripts"
                              href="#scripts"
                           >
                              Scripts
                           </a>
                     </div>


                     <div class="row">
                        <form class="col s12">
                           <div class="row">
                              <div class="input-field col s12">
                                 <textarea id="email_content" style={{height: '350px'}}>
                                    Hello [contact name], I need to follow up
                                    with you today. Thank you, [your name]
                                 </textarea>
                              </div>
                           </div>
                        </form>
                     </div>

                     <div class="modal-footer">
                        <button
                           type="submit"
                           className="modal-close waves-effect waves-light btn btn-primary"
                           style={{ marginRight: "10px" }}
                        >
                           Send
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </header>
      );
   }
}

CreateEmail.propTypes = {
   auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
   auth: state.auth
});

export default connect(mapStateToProps)(CreateEmail);
