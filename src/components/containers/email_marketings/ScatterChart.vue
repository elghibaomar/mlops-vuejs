<template>
  <div>
    <canvas id="ScatterData"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import ScatterData from '../../../data/ScatterData.js'

export default {
  name: 'ScatterChart',
  data() {
    return {
      ScatterData: ScatterData
    }
  },
  mounted() {
    const ctx2 = document.getElementById('ScatterData');
    new Chart(ctx2, this.ScatterData);
  }
}
</script>