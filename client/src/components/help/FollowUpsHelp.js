import React, { Component } from "react";
import axios from "axios";

class FollowUpsHelp extends Component {
   render() {
      return (
         <header>
            <div class="modal-content">
               <h5>
               <i class="material-icons small" style={{color: '#e5e600'}}>help</i> Follow Ups Help
               </h5>
               <p>
                  You’ve heard it a million times, but it’s never enough –
                  Fortune is in the follow up!! Select the people you need to
                  follow up with and enter them here when planning your weekly
                  or daily activity. Never let anyone fall through the cracks
                  again!
               </p>
            </div>
            <div class="modal-footer">
               <a href="#!" class="modal-close waves-effect waves-light btn">
                  Ok
               </a>
            </div>
         </header>
      );
   }
}

export default FollowUpsHelp;
