$(function() {
   //get the doughnut chart canvas
   var ctx1 = $("#doughnut-chartcanvas-1");
   var ctx2 = $("#doughnut-chartcanvas-2");
   var ctx3 = $("#doughnut-chartcanvas-3");

   Chart.defaults.global.legend.display = false;

  

   //doughnut chart data
   var data1 = {
      labels: ["Reach Outs", "Reach Outs Pending"],
      datasets: [
         {
            label: ["Reach Outs"],
            data: [1, 14],
            backgroundColor: ["#ff9372"],
            borderColor: ["#fff"],
            borderWidth: [0, 0]
            
         }
      ]
   };

   //doughnut chart data
   var data2 = {
      labels: ["Follow Ups", "Follow Ups Pending"],
      datasets: [
         {
            label: "Follow Ups",
            data: [1, 9],
            backgroundColor: ["#88d1c7"],
            borderColor: ["#fff"],
            borderWidth: [0, 0]
         }
      ]
   };

   var data3 = {
      labels: ["Team Reach Outs", "Team Reach Outs Pending"],
      datasets: [
         {
            label: "Team Reach Outs",
            data: [1, 4],
            backgroundColor: ["#614f70"],
            borderColor: ["#fff"],
            borderWidth: [0, 0]
         }
      ]
   };

   //options
   var options = {
      responsive: true,
      showTooltips: true,
      cutoutPercentage: 70,
      

      title: {
         display: true,
         position: "top",
         // text: "Doughnut Chart",
         fontSize: 18,
         fontColor: "#111"
      }

      /*
    legend: {
      display: true,
      position: "bottom",
      labels: {
        fontColor: "#333",
        fontSize: 16
      }
      
    }*/
   };

   //create Chart class object
   var chart1 = new Chart(ctx1, {
      type: "doughnut",
      data: data1,
      options: options
   });

   //create Chart class object
   var chart2 = new Chart(ctx2, {
      type: "doughnut",
      data: data2,
      options: options
   });

   var chart3 = new Chart(ctx3, {
      type: "doughnut",
      data: data3,
      options: options
   });
});
