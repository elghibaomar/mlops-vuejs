export const planetChartData = {
  type: "pie",
  data: {
    labels: ["Juin","Mars","October"],
    datasets: [
      {
        label: ["Juin","Mars","October"],
        data: [14,5,9],
        backgroundColor: ["#813772","#062f4f","rgb(41, 51, 66)"],
        borderColor: ["#813772","#062f4f","#3477eb"],
        borderWidth: [3,3,3],
      },
    ]
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            padding: 25
          }
        }
      ]
    }
  }
};

export default planetChartData;