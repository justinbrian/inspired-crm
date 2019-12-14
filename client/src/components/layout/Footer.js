import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
   render() {
      return (
         <footer class="page-footer white">
            <div class="footer-copyright">
               <div class="container">
                  <span>
                     <font color="black">
                        © Copyright 2019,
                        <script type="text/javascript">
                           document.write(new Date().getFullYear());
                        </script>{" "}
                        <Link
                           to="/"
                           onClick={this.forceUpdate}
                           class="black-text text-lighten-2"
                        >
                           TSG
                        </Link>{" "}
                        All rights reserved.
                     </font>
                  </span>
               </div>
            </div>
         </footer>
      );
   }
}

export default Footer;
