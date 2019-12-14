// import React, { Component } from "react";
// import axios from "axios";
// import TableRow from "./TableRow";
// import DashboardNavbar from "../dashboard/DashboardNavbar";
// import DashboardFooter from "../dashboard/DashboardFooter";

// import {
//     Calendar,
//     momentLocalizer,
//   } from 'react-big-calendar';
// import moment from "./moment";

// import "./Calendar.css";
// import "react-big-calendar/lib/css/react-big-calendar.css";

// const localizer = momentLocalizer(moment)

// METHOD 1
/********************************************************* */
// class UserCalendar extends Component {
//   state = {
//     events: [
//       {
//         start: new Date(),
//         end: new Date(moment().add(1, "days")),
//         title: "Sample Event"
//       },
//       {
//          start: new Date(moment().subtract(8, "days")),
//          end: new Date(moment().subtract(6, "days")),
//          title: "Some other Event"
//        }
//     ]
//   };
/********************************************************* */

// METHOD 2
/********************************************************* */
// class UserCalendar extends Component {
//   constructor(props) {
//      super(props);
//      this.state = { eventss: [] };
//   }

//   componentDidMount() {
//      const user = {
//         email: localStorage.getItem("userEmail"),
//         tokenhash: localStorage.getItem("tokenHash")
//      };
//      console.log(user);
//      axios
//         .post("/api/events/get", user)
//         .then(response => {
//            console.log(response);
//            this.setState({ eventss: response.data });
//         })
//         .catch(function(error) {
//            console.log(error);
//         });
//   }
// /********************************************************* */

//   render() {
//     return (
//        <div>
//          <DashboardNavbar />
//          <div className="UserCalendar">
//             <Calendar
//                localizer={localizer}
//                defaultDate={new Date()}
//                defaultView="month"
//                events={this.state.eventss}
//                style={{ height: "100vh" }}
//             />
//          </div>

//       </div>
//     );
//   }
// }
// export default UserCalendar;

//DRAG AND DROP PROTOTYPE You can try it, but  ***REQUIRES MORE EVENT SCHEMA WORK***
import React, { Component } from "react";
import axios from "axios";
import TableRow from "./TableRow";
import PropTypes from "prop-types";
import { updateContact } from "../../actions/calendarActions";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "./moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import DeleteEvent from "../event/DeleteEvent.js";

// Calendar styles.
import "./Calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Dashboard components.
import DashboardNavbar from "../dashboard/DashboardNavbar";
import DashboardFooter from "../dashboard/DashboardFooter";

// const localizer = Calendar.momentLocalizer(moment);
const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

class UserCalendar extends Component {
   constructor(props) {
      super(props);
      this.state = { eventsList: [] };
   }

   componentDidMount() {
      const user = {
         email: localStorage.getItem("userEmail"),
         tokenhash: localStorage.getItem("tokenHash")
      };
      console.log(user);
      axios
         .post("/api/events/get", user)
         .then(response => {
            console.log(response);
            this.setState({ eventsList: response.data });
         })
         .catch(function(error) {
            console.log(error);
         });
   }

   // onEventResize = (type, { event, start, end, allDay }) => {
   //    // axios
   //    //  .post("/api/events/update", this)
   //    //  .then(response => {
   //    //     console.log(response);
   //    //     this.setState({ eventsList: response.data });
   //    //  })
   //    //  .catch(function(error) {
   //    //     console.log(error);
   //    //  });

   //    var newEvent = {
   //       start: start,
   //       end: end,
   //       title: this.title
   //    };

   //    this.props.updateCalendar(newEvent);

   //    this.setState(state => {
   //       state.events[0].start = start;
   //       state.events[0].end = end;
   //       return { events: state.events };
   //    });
   // };

   // onEventResize {
   //   // axios
   //   //  .post("/api/events/update", this)
   //   //  .then(response => {
   //   //     console.log(response);
   //   //     this.setState({ eventsList: response.data });
   //   //  })
   //   //  .catch(function(error) {
   //   //     console.log(error);
   //   //  });

   //   this.setState(state => {
   //     state.events[0].start = start;
   //     state.events[0].end = end;
   //     return { events: state.events };
   //   });
   // };


   onSelectEvent = ({ event, start, end, allDay }) => {
      // this.setState(state => {
      //   state.events[0].start = start;
      //   state.events[0].end = end;
      //   return { events: state.events };
      // });
      
      console.log(start + end);
   };


   // onEventDrop = ({ event, start, end, allDay }) => {
   //    // this.setState(state => {
   //    //   state.events[0].start = start;
   //    //   state.events[0].end = end;
   //    //   return { events: state.events };
   //    // });
   //    console.log(start);
   // };

   render() {
      return (
         <div>
            <DashboardNavbar />
            
            <div className="UserCalendar">
               {/* <DnDCalendar */}
               {/* replace the line below this with the line above to resume work on d&d */}
               <Calendar
                  localizer={localizer}
                  defaultDate={new Date()}
                  defaultView="month"
                  events={this.state.eventsList}
                  selectable={true}
                  onSelectEvent={this.onSelectEvent}
                  // onEventDrop={this.onEventDrop}
                  // onEventResize={this.state.onEventResize}
                  // resizable
                  style={{ height: "75vh" }}
               />
            </div>

            {/* <div
               id="deleteevent"
               class="modal"
               style={{ width: "20%", padding: "0", left: "0", right: "0" }}
            >
               <DeleteEvent />
            </div> */}


            <DashboardFooter />
         </div>
      );
   }
}
export default UserCalendar;

/*
//DRAG AND DROP PROTOTYPE You can try it, but  ***REQUIRES MORE EVENT SCHEMA WORK*** 
import React, { Component } from "react";
import {
    Calendar,
    momentLocalizer,
  } from 'react-big-calendar';
import moment from "./moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "./Calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

// const localizer = Calendar.momentLocalizer(moment);
const localizer = momentLocalizer(moment)
const DnDCalendar = withDragAndDrop(Calendar);

class UserCalendar extends Component {
  state = {
    events: [
      {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        title: "Some title"
      },
      {
         start: new Date(moment().subtract(8, "days")),
         end: new Date(moment().subtract(6, "days")),
         title: "Some other Event"
      }
    ]
  };

  onEventResize = (type, { event, start, end, allDay }) => {
    this.setState(state => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.events };
    });
  };

  onEventDrop = ({ event, start, end, allDay }) => {
    console.log(start);
  };

  render() {
    return (
      <div className="UserCalendar">
        <DnDCalendar
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          localizer={localizer}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          resizable
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}
export default UserCalendar;
*/
