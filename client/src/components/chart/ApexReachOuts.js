// -------------------------------------------------------------------
// ApexReachOuts.js
// --
// ReachOuts progress graph.
// -------------------------------------------------------------------

import React, { Component } from "react";
import Chart from "react-apexcharts";

// Redux state management.
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ApexReachOuts extends Component {
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
            labels: ["Reach Outs", "Reach Outs Pending"],
            colors:['#ff1f1f', '#ff8080'],
         },

         series: [1, 14],
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

export default ApexReachOuts;
