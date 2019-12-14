import React, { Component } from "react";

class NotificationLog extends Component {
   render() {
      return (
         <div class="modal-content">
            
            <div class="row">
               <div class="col s12">
                  <ul class="tabs tabs-fixed-width">
                     <li class="tab col s3">
                        <a href="#email" class="active">
                           E-mail (0)
                        </a>
                     </li>
                     <li class="tab col s3">
                        <a href="#alerts">Alerts (0)</a>
                     </li>
                  </ul>
               </div>

               <div id="email" class="col s12">
                  <p align="center"><i class="material-icons small" style={{color: '#e63f3b'}}>error_outline</i> No E-Mail
                  Notifications</p>
               </div>

               <div id="alerts" class="col s12">
               <p align="center"><i class="material-icons small" style={{color: '#e63f3b'}}>error_outline</i> No Alert Notifications</p>
               </div>
            </div>
         </div>
      );
   }
}

export default NotificationLog;
