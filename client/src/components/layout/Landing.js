import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Spinner from "./Spinner";

class Landing extends Component {
   render() {
      return (
         <div>
            <Spinner />
            <Navbar />

            <div id="index-banner" class="parallax-container">
               <div class="section no-pad-bot">
                  <div class="container">
                     <br />
                     <br />
                     <h1 class="header center white-text text-lighten-2" id="shadow">
                        <b>Boost Your Business</b>
                     </h1>
                     <div class="row center">
                        <h5 class="header col s12 light" id="shadow">
                           <b>Manage all your contacts, communications, activities
                           and sales in one single place.</b>
                        </h5>
                     </div>
                     <div class="row center">
                        <Link to="/register">
                           <a
                              href="#foo"
                              id="download-button"
                              class="btn-large waves-effect waves-light blue"
                           >
                              Get Started
                           </a>
                        </Link>
                     </div>
                     <br />
                     <br />
                  </div>
               </div>
               <div class="parallax">
                  <img src="./assets/img/landing/bg1.jpg" alt="Banner 1"></img>
               </div>
            </div>

            <div class="container">
               <div class="section">
                  <div class="row">
                     <div class="col s12 m4">
                        <div class="icon-block">
                           <h2 class="center blue-text">
                              <i class="material-icons">flash_on</i>
                           </h2>
                           <h5 class="center">Swift</h5>

                           <p>
                              <center>
                                 Jump start your activity. Visualize your plan
                                 for your goals and execute fast.
                              </center>
                           </p>
                        </div>
                     </div>

                     <div class="col s12 m4">
                        <div class="icon-block">
                           <h2 class="center blue-text">
                              <i class="material-icons">group</i>
                           </h2>
                           <h5 class="center">Network</h5>
                           <p>
                              <center>
                                 Start managing your contacts and leads. Reach
                                 out to more people, retain your customers, and
                                 make more of an impact in your community.
                              </center>
                           </p>
                        </div>
                     </div>

                     <div class="col s12 m4">
                        <div class="icon-block">
                           <h2 class="center blue-text">
                              <i class="material-icons">settings</i>
                           </h2>
                           <h5 class="center">Intuitive</h5>
                           <p>
                              <center>
                                 Developed with a modern design that is simple
                                 to understand and user friendly.
                              </center>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div class="parallax-container valign-wrapper">
               <div class="section no-pad-bot">
                  <div class="container">
                     <div class="row center">
                        <h5 class="header col s12 light" id="shadow">
                           <b>Reach out to prospects at the right moment and engage
                           them across every channel.</b>
                        </h5>
                     </div>
                  </div>
               </div>
               <div class="parallax">
                  <img src="./assets/img/landing/bg2.jpg" alt="Banner 2"></img>
               </div>
            </div>

            <div class="container">
               <div class="section">
                  <div class="row">
                     <div class="col s12 center">
                        <h3>
                           <i class="mdi-content-send brown-text"></i>
                        </h3>
                        <h4>Leads Are Important</h4>
                        <p class="left-align">
                           Every business, big or small, depends on leads. Leads
                           are potential customers who have shown interest in
                           your solution but who have not yet made a purchase.
                           For businesses to grow, you have to convert leads to
                           loyal customers. And to do that right, you need to
                           manage sales leads in an organized manner.
                        </p>
                     </div>
                  </div>
               </div>
            </div>

            <div class="parallax-container valign-wrapper">
               <div class="section no-pad-bot">
                  <div class="container">
                     <div class="row center">
                        <h5 class="header col s12 light" id="shadow">
                           <b>Application that helps you sell smarter, better,
                           faster.</b>
                        </h5>
                     </div>
                  </div>
               </div>
               <div class="parallax">
                  <img src="./assets/img/landing/bg3.jpg" alt="Banner 3"></img>
               </div>
            </div>

            <Footer />
         </div>
      );
   }
}

export default Landing;
