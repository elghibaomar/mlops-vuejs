<template>
  <div>
    <canvas id="BarData2"></canvas>


  </div>
</template>

<script>
import axios from 'axios'
import Chart from 'chart.js'
// import BarData from '../../data/BarData.js'

export default {
  name: 'Repeat_Customer_Line_Chart',
  data() {
    return {
      // BarData: BarData,
      
      
      BarData2 : {
          type: "line",
          data: {
            labels: [1,2,3,4,5,6,7,8,9,10,11,12],
            
                        
            datasets: [
              {
                label: "Repeat Customers Rate %",
                data: [1.1527377521613833,
        0.0,
        0.27548209366391185,
        1.0666666666666667,
        0.30864197530864196,
        0.6349206349206349,
        0.0,
        0.33444816053511706,
        0.0,
        0.3144654088050315,
        0.7451564828614009,
        0.8051529790660225],
                backgroundColor: "#062f4f",
                borderColor: "#062f4f",
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
    //                 this.BarData2.data.datasets[0]['data'] = response.data[2]}
    //             );
                const ctx2 = document.getElementById('BarData2');
                new Chart(ctx2, this.BarData2);
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