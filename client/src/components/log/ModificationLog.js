import React, { Component } from "react";
import axios from "axios";

class ModificationLog extends Component {
   render() {
      return (
         <header>
            <div class="row">
               <div class="col s12">
                  <table class="highlight">
                     <thead>
                        <tr>
                           <th>Username</th>
                           <th>Date Modified</th>
                           <th colSpan="2">Action Type</th>
                        </tr>
                     </thead>
                  </table>
               </div>
            </div>
         </header>
      );
   }
}

export default ModificationLog;
