<template>
  <div>
    <canvas id="BarData"></canvas>


  </div>
</template>

<script>
import axios from 'axios'
import Chart from 'chart.js'
// import BarData from '../../data/BarData.js'

export default {
  name: 'Marital_Bar_Chart',
  data() {
    return {
      // BarData: BarData,
      
      
      BarData : {
          email_list : [],
          type: "bar",
          data: {
            labels: ["Married", "Single", "Divorced", "unknown"],
            
                        
            datasets: [
              {
                label: "Customers Marital",
                data: [],
                backgroundColor: "#D79922",
                borderColor: "#D6CE15",
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
                .get('http://143.198.251.214/Marital_Customer')
                .then(response => {
                    this.BarData.data.datasets[0]['data'] = response.data}
                );
                const ctx2 = document.getElementById('BarData');
                new Chart(ctx2, this.BarData);
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