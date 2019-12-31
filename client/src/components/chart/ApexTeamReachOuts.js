// -------------------------------------------------------------------
// ApexTeamReachOuts.js
// --
// TeamReachOuts progress graph.
// -------------------------------------------------------------------

import React, { Component } from "react";
import Chart from "react-apexcharts";

// For redux state management.
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ApexTeamReachOuts extends Component {
   constructor(props) {
      super(props);

      this.state = {
         options: {
            chart: {
               height: 280,
               type: "donut"
            },
            legend: {
                show: false
              },
            // series: [67, 33],
            plotOptions: {
               radialBar: {
                  dataLabels: {
                     total: {
                        show: true,
                        label: "TOTAL"
                     }
                  }
               }
            },
            labels: ["Team Reach Outs", "Team Reach Outs Pending"],
            colors: ["#7882FF", "#0013FF"],
         },

         series: [1, 0],
         labels: ["Progress"]
      };

      // Updating React Chart data.
      /*
      const newSeries = [];
      this.state.series.map(s => {
         const data = s.data.map(() => {
            return Math.floor(Math.random() * (180 - min + 1)) + min;
         });
         newSeries.push({ data, name: s.name });
      });

      this.setState({
         series: newSeries
      });
      */
   }

   componentDidUpdate(prevProps){
      if (prevProps.tracker !== this.props.tracker || 
          prevProps.signal !== this.props.signal){
         this.setState({
            series: [this.props.tracker.trogdone, this.props.tracker.trog-this.props.tracker.trogdone]
         })
      }
   }

   render() {
      return (
         <div className="donut">
            <Chart
               options={this.state.options}
               series={this.state.series}
               type="donut"
               width="280"
               align="center"
            />
         </div>
      );
   }
}

ApexTeamReachOuts.propTypes = {
   tracker: PropTypes.object,
   signal: PropTypes.bool

};

const mapStateToProps = state => ({
   tracker: state.goaltracker.tracker,
   signal: state.goaltracker.signal
});

export default connect(mapStateToProps)(ApexTeamReachOuts);
