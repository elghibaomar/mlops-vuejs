<template>
  <div>
    <canvas id="PieData"></canvas>


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
      
      
      PieData : {
        type: "pie",
        data: {
          labels: ["Femal","Mal"],
          datasets: [
            {
              label: ["Femal","Mal"],
              data: [],
              backgroundColor: ["#813772","#062f4f"],
              borderColor: ["#813772","#062f4f"],
              borderWidth: [3,3,3],
            },
          ]
        },
        options: {
          responsive: true,
          lineTension: 1,
          
        }
  },
    }
  },
  async created(){
     await axios
                .get('http://127.0.0.1:3000/Gender_Conversion')
                .then(response => {
                    this.PieData.data.datasets[0]['data'] = response.data}
                );
                const ctx2 = document.getElementById('PieData');
                new Chart(ctx2, this.PieData);
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