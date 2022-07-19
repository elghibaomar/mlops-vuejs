<template>
  <div class="example">
    <apexcharts  height="350" type="boxPlot" :options="apex.column.options" :series="apex.column.series" v-if="loaded"></apexcharts>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import axios from 'axios'




export default {
  name: 'Chart',
  components: {
    apexcharts: VueApexCharts,
  },
  data: function() {
    return {
      loaded : false,
      
      apex: {
    column: {
      series: [{
            data : [{
      x: "Age",
      y: []
    }]
      }],
      options: {
        chart: {
          height: 350,
          type: "boxPlot"
        },
        fill: {
            type: "gradient",
            gradient: {
              // gradientToColors: ["#F55555", "#6078ea", "#6094ea"]
            }
          },
        // colors: columnColors,
        plotOptions: {
          boxPlot: {
  }
        },
       
        // dataLabels: {
        //   enabled: false,
        // },
        // xaxis: {
        //   categories: ["Married", "Single", "Divorced", "unknown"],
        //   labels: {
        //     style: {
        //       colors: colors.chartTextColor,
        //       fontSize: '14px',
        //     }
        //   },
        //   axisBorder: {
        //     show: false
        //   },
        //   axisTicks: {
        //     show: false
        //   }
        // },
        // yaxis: {
        //   labels: {
        //     style: {
        //       colors: colors.chartTextColor,
        //     }
        //   }
        // },
        // tooltip: {
        //   theme: 'dark'
        // },
        // grid: {
        //   borderColor: colors.gridLineColor
        // },
        // legend: {
        //   labels: {
        //     colors: colors.chartTextColor
        //   }
        // }
      }
    }}}},
    async mounted(){
          // console.log('before')
          await axios
                    .get('http://127.0.0.1:3000/Age_Distribution')
                    .then(response => {
                        this.apex.column.series[0]['data'][0].y = response.data}
                    );
          this.loaded = true;
          // console.log('after')
        } 

   
}
</script>