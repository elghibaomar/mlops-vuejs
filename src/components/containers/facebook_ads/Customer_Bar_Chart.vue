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
                data: [],
                backgroundColor: "#057bd6",
                borderColor: "#057bd6",
                borderWidth: 3
              },
              {
                label: "Unique Customers Purchase",
                data: [],
                backgroundColor: "#0ec281",
                borderColor: "#0ec281",
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
  async created(){
     await axios
                .get('http://143.198.251.214/monthly_customer_purchase')
                .then(response => {
                    this.BarData1.data.datasets[0]['data'] = response.data[0];
                    this.BarData1.data.datasets[1]['data'] = response.data[1]}
                );
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