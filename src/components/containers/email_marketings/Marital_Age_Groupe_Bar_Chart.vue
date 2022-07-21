<template>
  <div>
    <canvas id="BarData3"></canvas>
    


  </div>
</template>

<script>
import axios from 'axios'
import Chart from 'chart.js'
// import BarData from '../../data/BarData.js'

export default {
  name: 'Marital_Age_Groupe_Bar_Chart',
  data() {
    return {
      // BarData: BarData,
      
      
      BarData3 : {
          type: "bar",
          data: {
            labels: ['[18, 30)','[30, 40)','[40, 50)','[50, 60)','[60, 70)','70+'],
            
                        
            datasets: [
              {
                label: "Divorced",
                data: [0.0021167754454048332,
        0.0075569724878970365,
        0.011970359110773323,
        0.017341882832993295,
        0.03729281767955801,
        0.13646055437100213],
                backgroundColor: "#047bd7",
                borderColor: "#047bd7",
                borderWidth: 3
              },
              {
                label: "Married",
                data: [0.027870876697830307,
        0.052957846262840946,
        0.054626638799163976,
        0.07767414747886914,
        0.3011049723756906,
        0.32196162046908317],
                backgroundColor: "#0ac181",
                borderColor: "#0ac181",
                borderWidth: 3
              },
              {
                label: "Single",
                data: [0.1324748632915858,
        0.040382571732199786,
        0.012350370511115333,
        0.006412124744972311,
        0.006906077348066298,
        0.01279317697228145],
                backgroundColor: "#d8971c",
                borderColor: "#d8971c",
                borderWidth: 3
              },
              {
                label: "Unknown",
                data: [0.0001763979537837361,
        0.00035423308537017357,
        0.0002850085502565077,
        0.0001457301078402798,
        0.0013812154696132596,
        0.0],
                backgroundColor: "#fe4560",
                borderColor: "#fe4560",
                borderWidth: 3
              },
            ]
          },
          options: {
            legend: {
              labels: {
                  fontColor: "white",
                  usePointStyle: false
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
    //             .get('http://143.198.251.214/Conversion_Age_Marital')
    //             .then(response => {
    //                 this.BarData3.data.datasets[0]['data'] = response.data["divorced"];
    //                 this.BarData3.data.datasets[1]['data'] = response.data["married"];
    //                 this.BarData3.data.datasets[2]['data'] = response.data["single"];
    //                 this.BarData3.data.datasets[3]['data'] = response.data["unknown"];}
    //             );
                const ctx2 = document.getElementById('BarData3');
                new Chart(ctx2, this.BarData3);
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
