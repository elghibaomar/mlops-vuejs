<template>
  <div class="example">
    <apexcharts  height="350" type="bar" :options="apex.column.options" :series="apex.column.series" v-if="loaded"></apexcharts>
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
        {
          name : "divorced",
          data : []},
        {
          name : "married",
          data : []},
        {
          name : "single",
          data : []},
        {
          name : "unknown",
          data : []},],
      options: {
        chart: {
          height: 450,
          type: 'bar',
        },
        colors: columnColors,
        plotOptions: {
          bar: {
            columnWidth: '45%',
            distributed: true,
            endingShape: "rounded"
            
          }
        },
        fill: {
        opacity: 1
      },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ['[18, 30)','[30, 40)','[40, 50)','[50, 60)','[60, 70)','70+'],
          labels: {
            style: {
              colors: '#fff',
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
              colors: '#fff',
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
          await axios
                    .get('http://127.0.0.1:3000/Conversion_Age_Marital')
                    .then(response => {
                        this.apex.column.series[0]['data'] = response.data["divorced"];
                        this.apex.column.series[1]['data'] = response.data["married"];
                        this.apex.column.series[2]['data'] = response.data["single"];
                        this.apex.column.series[3]['data'] = response.data["unknown"];}
                    );     
          this.loaded = true;
        } 

   
}
</script>