import React, { Component } from "react";
import { Link } from "react-router-dom";

class DashboardFooter extends Component {
   render() {
      return (
         <footer class="page-footer blue-grey">
            <div class="footer-copyright">
               <div class="container">
                  <span>
                     © Copyright 2019,
                     <script type="text/javascript">
                        document.write(new Date().getFullYear());
                     </script>{" "}
                     <Link
                        to="/goaltracker"
                        onClick={this.forceUpdate}
                        class="grey-text text-lighten-2"
                     >
                        TSG
                     </Link>{" "}
                     All rights reserved.
                  </span>
               </div>
            </div>
         </footer>
      );
   }
}

export default DashboardFooter;
