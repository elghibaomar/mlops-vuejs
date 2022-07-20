<template>
  <div class="example">
    <apexcharts  height="200" type="pie" :options="apex.column.options" :series="apex.column.series" v-if="loaded"></apexcharts>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import axios from 'axios'
import config from '../../../../config';
const colors = config.colors;
let columnColors = [colors.blue, colors.green, colors.orange, colors.red, colors.default, colors.gray, colors.teal, colors.pink];


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
            series: [
    3749,
    868
],
      options: {
        chart: {
          toolbar: {
          show: true,
          tools: {
            download: true,}
        },
          height: 200,
          type: 'pie'
        },
        
        colors:['#813772','#062f4f'],
        fill: {
            type: "gradient",
            gradient: {
              // gradientToColors: ["#F55555", "#6078ea", "#6094ea"]
            }
          },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 100
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        labels: ['Femal', 'Mal'],
        // colors: columnColors,
        // plotOptions: {
        //   pie: {
        //     columnWidth: '45%',
        //     distributed: true,
        //     horizontal: true,

        //   }
        // },
        dataLabels: {
          enabled: false,
        },
        // xaxis: {
        //   categories: ["Male", "Female"],
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
        tooltip: {
          theme: 'dark'
        },
        grid: {
          borderColor: colors.gridLineColor
        },
        legend: {
          position: 'bottom',
          labels: {
            colors: colors.chartTextColor
          }
        }
      }
    }}}},
    // async mounted(){
    //       console.log('before')
    //       await axios
    //                 .get('http://143.198.251.214/Gender_Conversion')
    //                 .then(response => {
    //                     this.apex.column.series = response.data}
    //                 );
    //       this.loaded = true;
    //       console.log('after')
    //     } 

   
}
</script>