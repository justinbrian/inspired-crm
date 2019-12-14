import React, { Component } from "react";
import { Link } from "react-router-dom";

class ContactsFooter extends Component {
   render() {
      return (
         <footer class="page-footer blue-grey">
            <div class="footer-copyright">
               <div class="container">
                  <span>
                     Copyright ©
                     <script type="text/javascript">
                        document.write(new Date().getFullYear());
                     </script>{" "}
                     <Link
                        to="/contacts"
                        onClick={this.forceUpdate}
                        class="grey-text text-lighten-2"
                     >
                        TSG
                     </Link>{" "}
                     All rights reserved.
                  </span>
                  <span class="right hide-on-small-only"></span>
               </div>
            </div>
         </footer>
      );
   }
}

export default ContactsFooter;
