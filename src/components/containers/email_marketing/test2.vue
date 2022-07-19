<template>
  <div class="example">
    <apexcharts  height="350" type="line" :options="apex.column.options" :series="apex.column.series" v-if="loaded"></apexcharts>
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
      series: [{
            data : []
      }],
      options: {
        chart: {
          height: 350,
          type: 'line'
        },
        colors: ['#0965dd'],
        plotOptions: {
          line: {
            columnWidth: '45%',
            distributed: true,
            horizontal: true,

          }
        },
        fill: {
            type: "gradient",
            gradient: {
              // gradientToColors: ["#F55555", "#6078ea", "#6094ea"]
            }
          },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [1,2,3,4,5,6,7,8,9,10,11,12],
          labels: {
            style: {
              colors: colors.chartTextColor,
              fontSize: '14px',
            }
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: colors.chartTextColor,
            }
          }
        },
        tooltip: {
          theme: 'dark'
        },
        grid: {
          borderColor: colors.gridLineColor
        },
        legend: {
          labels: {
            colors: colors.chartTextColor
          }
        }
      }
    }}}},
    async mounted(){
          // console.log('before')
          await axios
                    .get('http://143.198.251.214/monthly_customer_purchase')
                    .then(response => {
                        this.apex.column.series[0]['data'] = response.data[2]}
                    );
          this.loaded = true;
          // console.log('after')
        } 

   
}
</script>