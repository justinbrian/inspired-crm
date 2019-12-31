// -------------------------------------------------------------------
// GoalTrackerMenu.js
// --
// User selects goals.
// -------------------------------------------------------------------

import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setGoals } from "../../actions/goalActions";

class GoalSettingMenu extends Component {
   constructor(props) {
      super(props);
      this.onChangeReach = this.onChangeReach.bind(this);
      this.onSubmitPlan1 = this.onSubmitPlan1.bind(this);
      this.onSubmitPlan2 = this.onSubmitPlan2.bind(this);
      this.onSubmitPlan3 = this.onSubmitPlan3.bind(this);

      this.state = {
         plan: "",
         reach: 0,
         follow: 0,
         team: 0
      };
   }

   componentDidUpdate(prevProps) {
      if (prevProps.tracker !== this.props.tracker ||
          prevProps.signal !== this.props.signal) {
         if (this.props.tracker.plan === 1){
            this.setState({
               plan: "Keep The Lights On"
            });
         }else if (this.props.tracker.plan === 2){
            this.setState({
               plan: "Positioned For Growth"
            });
         }else if (this.props.tracker.plan === 3){
            this.setState({
               plan: "Watch Out World"
            });
         }else{
            this.setState({
               plan: "Custom Plan"
            })
         }
      }
   }

   onChangeReach(e) {
      this.setState({
         reach: e.target.value
      });
   }

   onSubmitPlan1(e) {
      e.preventDefault();
      const data = {
         email: localStorage.getItem("userEmail"),
         tokenhash: localStorage.getItem("tokenHash"),
         plan: 1,
         startdate: Date.now(),
         nrog: 15,
         nrogdone: 0,
         fug: 10,
         fugdone: 0,
         trog: 5,
         trogdone: 0
      };
      this.props.setGoals(data);
   }

   onSubmitPlan2(e) {
      e.preventDefault();
      const data = {
         email: localStorage.getItem("userEmail"),
         tokenhash: localStorage.getItem("tokenHash"),
         plan: 2,
         startdate: Date.now(),
         nrog: 25,
         nrogdone: 0,
         fug: 15,
         fugdone: 0,
         trog: 10,
         trogdone: 0
      };
      this.props.setGoals(data);
   }

   onSubmitPlan3(e) {
      e.preventDefault();
      const data = {
         email: localStorage.getItem("userEmail"),
         tokenhash: localStorage.getItem("tokenHash"),
         plan: 3,
         startdate: Date.now(),
         nrog: 35,
         nrogdone: 0,
         fug: 25,
         fugdone: 0,
         trog: 15,
         trogdone: 0
      };
      this.props.setGoals(data);
   }

   render() {
      return (
         <header>
            <div class="modal-content">
               <font class="col s12">
                  <h5>Goal Setting Menu</h5>
                  <p>
                     Choose how hard you would like to run. Pick a plan from
                     below and we will track your Goals according to your plan.
                     Don’t worry, you can always change the plan at another
                     time!
                  </p>

                  <p align="center">
                     <b>Selected Plan</b> :: {this.state.plan}
                  </p>

                  <div class="row">
                     <div class="col s12 m4">
                        <div class="card-panel blue lighten-2 hoverable z-depth-6">
                           <div class="card-content center">
                              <h6>
                                 <font color="white">
                                    <b>Keep the Lights On</b>
                                 </font>
                              </h6>
                           </div>

                           <div  class="card-content white" 
                                 style={{padding: '10px'}}>
                              
                              <h6 align="left">Weekly Targets</h6>

                              <h6 align="left">
                                 <i
                                    class="material-icons tiny"
                                    style={{ color: "#64b5f6" }}
                                 >
                                    check_circle
                                 </i>{" "}
                                 New Reach Outs: 15
                              </h6>
                              <h6 align="left">
                                 <i
                                    class="material-icons tiny"
                                    style={{ color: "#64b5f6" }}
                                 >
                                    check_circle
                                 </i>{" "}
                                 Follow Ups: 10
                              </h6>
                              <h6 align="left">
                                 <i
                                    class="material-icons tiny"
                                    style={{ color: "#64b5f6" }}
                                 >
                                    check_circle
                                 </i>{" "}
                                 Team Reach Outs: 5
                              </h6>
                           </div>
                           <div class="card-action center">
                              <a class="modal-close waves-effect waves-light btn-small blue" 
                                 style={{marginTop: '10px'}}
                                 onClick={this.onSubmitPlan1}
                              >
                                 Select
                              </a>
                           </div>
                        </div>
                     </div>

                     <div class="col s12 m4">
                        <div class="card-panel light-green darken-3 hoverable z-depth-6">
                           <div class="card-content center">
                              <h6>
                                 <font color="white">
                                    <b>Positioned for Growth</b>
                                 </font>
                              </h6>
                           </div>

                           <div class="card-content white" style={{padding: '10px'}}>
                              <h6 align="left">Weekly Targets</h6>

                              <h6 align="left">
                                 <i
                                    class="material-icons tiny"
                                    style={{ color: "#558b2f" }}
                                 >
                                    check_circle
                                 </i>{" "}
                                 New Reach Outs: 25
                              </h6>
                              <h6 align="left">
                                 <i
                                    class="material-icons tiny"
                                    style={{ color: "#558b2f" }}
                                 >
                                    check_circle
                                 </i>{" "}
                                 Follow Ups: 15
                              </h6>
                              <h6 align="left">
                                 <i
                                    class="material-icons tiny"
                                    style={{ color: "#558b2f" }}
                                 >
                                    check_circle
                                 </i>{" "}
                                 Team Reach Outs: 10
                              </h6>
                           </div>
                           <div class="card-action center">
                              <a class="modal-close waves-effect waves-light btn-small green darken-3" 
                                 style={{marginTop: '10px'}}
                                 onClick={this.onSubmitPlan2}
                              >
                                 Select
                              </a>
                           </div>
                        </div>
                     </div>

                     <div class="col s12 m4">
                        <div class="card-panel red lighten-2 hoverable z-depth-6">
                           <div class="card-content center">
                              <h6>
                                 <font color="white">
                                    <b>Watch Out World</b>
                                 </font>
                              </h6>
                           </div>

                           <div class="card-content white" style={{padding: '10px'}}>
                              <h6 align="left">Weekly Targets</h6>

                              <h6 align="left">
                                 <i
                                    class="material-icons tiny"
                                    style={{ color: "#e57373" }}
                                 >
                                    check_circle
                                 </i>{" "}
                                 New Reach Outs: 35
                              </h6>
                              <h6 align="left">
                                 <i
                                    class="material-icons tiny"
                                    style={{ color: "#e57373" }}
                                 >
                                    check_circle
                                 </i>{" "}
                                 Follow Ups: 25
                              </h6>
                              <h6 align="left">
                                 <i
                                    class="material-icons tiny"
                                    style={{ color: "#e57373" }}
                                 >
                                    check_circle
                                 </i>{" "}
                                 Team Reach Outs: 15
                              </h6>
                           </div>
                           <div class="card-action center">
                              <a class="modal-close waves-effect waves-light btn-small red" 
                                 style={{marginTop: '10px'}}
                                 onClick={this.onSubmitPlan3}
                              >
                                 Select
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div class="row">
                     <h6>
                        <font color="red">*</font> None of the plans above suit
                        your needs? Set your targets and create your own custom
                        plan below:
                     </h6>
                  </div>

                  <div class="row">
                     <div class="col s12">
                        <div class="card-panel yellow accent-4 hoverable z-depth-6">
                           <div class="card-content center">
                              <h6>
                                 <font color="white">
                                    <b>Custom Plan</b>
                                 </font>
                              </h6>
                           </div>

                           <div class="card-content white" style={{padding: '10px'}}>
                              <form>
                                 <div class="row">
                                    <div class="col s12">
                                       <i
                                          class="material-icons prefix"
                                          style={{
                                             color: "#ffd600",
                                             marginTop: "30px",
                                             paddingRight: "5px"
                                          }}
                                       >
                                          check_circle
                                       </i>
                                       Weekly New Reach Outs Goal:
                                       <div class="input-field inline">
                                          <input
                                             id="custom_goal1_inline"
                                             type="number"
                                             class="validate"
                                             min="1"
                                             max="99999"
                                             value="15"
                                          />
                                       </div>
                                    </div>
                                 </div>

                                 <div class="row">
                                    <div class="col s12">
                                       <i
                                          class="material-icons prefix"
                                          style={{
                                             color: "#ffd600",
                                             marginTop: "30px",
                                             paddingRight: "5px"
                                          }}
                                       >
                                          check_circle
                                       </i>
                                       Weekly Follow Ups Goal:
                                       <div class="input-field inline">
                                          <input
                                             id="custom_goal2_inline"
                                             type="number"
                                             class="validate"
                                             min="1"
                                             max="99999"
                                             value="10"
                                          />
                                       </div>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="col s12">
                                       <i
                                          class="material-icons prefix"
                                          style={{
                                             color: "#ffd600",
                                             marginTop: "30px",
                                             paddingRight: "5px"
                                          }}
                                       >
                                          check_circle
                                       </i>
                                       Weekly Team Reach Outs Goal:
                                       <div class="input-field inline">
                                          <input
                                             id="custom_goal3_inline"
                                             type="number"
                                             class="validate"
                                             min="1"
                                             max="99999"
                                             value="5"
                                          />
                                       </div>
                                    </div>
                                 </div>
                              </form>
                           </div>
                           <div class="card-action center">
                              <a class="modal-close waves-effect waves-light btn-small yellow darken-2" style={{marginTop: '10px'}}>
                                 Select
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </font>
            </div>
         </header>
      );
   }
}

GoalSettingMenu.propTypes = {
   getGoals: PropTypes.func.isRequired,
   tracker: PropTypes.object
};

const mapStateToProps = state => ({
   tracker: state.goaltracker.tracker,
   signal: state.goaltracker.signal
});

export default connect(mapStateToProps, { setGoals })(GoalSettingMenu);
