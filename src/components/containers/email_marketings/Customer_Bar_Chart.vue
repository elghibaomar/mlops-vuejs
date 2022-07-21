<template>
  <div>
    <canvas id="BarData1"></canvas>


  </div>
</template>

<script>
import axios from 'axios'
import Chart from 'chart.js'
// import BarData from '../../data/BarData.js'

export default {
  name: 'Customer_Bar_Chart',
  data() {
    return {
      // BarData: BarData,
      
      
      BarData1 : {
          email_list : [],
          type: "bar",
          data: {
            labels: ['January','February','March','April','May','June','July','August','September','October','November','December'],
            
                        
            datasets: [
              {
                label: "All Customer Purchase",
                data: [347,
        314,
        345,
        377,
        401,
        315,
        364,
        299,
        329,
        618,
        471,
        521],
                backgroundColor: "#FCCF31",
                borderColor: "#FCCF31",
                borderWidth: 3
              },
              {
                label: "Unique Customers Purchase",
                data: [343,
        714,
        662,
        471,
        423,
        413,
        464,
        398,
        529,
        717,
        866,
        716],
                backgroundColor: "#17ead9",
                borderColor: "#17ead9",
                borderWidth: 3
              },
            ]
          },
          options: {
            legend: {
              labels: {
                  fontColor: "white",
                  usePointStyle: true
              }
          },
        
            responsive: true,
            lineTension: 1,
            scales: {
              yAxes: [
                {
                  ticks: {
                    fontColor: "white",
                    beginAtZero: true,
                    padding: 25
                  }
                }
              ],
              xAxes: [
                {
                  ticks: {
                    fontColor: "white",
                  }
                }
              ]
            }
          }
  },
    }
  },
  mounted(){
    //  await axios
    //             .get('http://143.198.251.214/monthly_customer_purchase')
    //             .then(response => {
    //                 this.BarData1.data.datasets[0]['data'] = response.data[0];
    //                 this.BarData1.data.datasets[1]['data'] = response.data[1]}
    //             );
                const ctx2 = document.getElementById('BarData1');
                new Chart(ctx2, this.BarData1);
  },
  // mounted() {
   
  //   const ctx2 = document.getElementById('BarData');
  //   new Chart(ctx2, this.BarData);
  // },
  // methods: {
  //           email_lists() {
  //               await axios
  //               .get('http://127.0.0.1:8000/email_list')
  //               .then(response => {
  //                   this.BarData.data.datasets[0]['data'] = response.data}
  //               )
  //           }
  //       }
}
</script>