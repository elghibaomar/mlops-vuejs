<template>
  <div>
    <canvas id="LineData"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import LineData from '../../data/LineData.js'

export default {
  name: 'LineChart',
  data() {
    return {
      LineData: LineData
    }
  },
  mounted() {
    const ctx1 = document.getElementById('LineData');
    new Chart(ctx1, this.LineData);
  }
}
</script>