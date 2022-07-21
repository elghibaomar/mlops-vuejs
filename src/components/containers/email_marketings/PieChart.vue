<template>
  <div>
    <canvas id="PieData"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import PieData from '../../../data/PieData.js'

export default {
  name: 'PieChart',
  data() {
    return {
      PieData: PieData
    }
  },
  mounted() {
    const ctx2 = document.getElementById('PieData');
    new Chart(ctx2, this.PieData);
  }
}
</script>