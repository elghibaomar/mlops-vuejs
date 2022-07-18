export const planetChartData = {
    type: "line",
    data: {
      labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
      datasets: [
        {
          label: "Number of Moons",
          data: [0, 0, 1, 2, 79, 82, 27, 14],
          backgroundColor: "#062f4f",
          borderColor: "#062f4f",
          borderWidth: 3
        },
        {
          label: "Planetary Mass (relative to the Sun x 10^-6)",
          data: [0.166, 2.081, 3.003, 0.323, 954.792, 285.886, 43.662, 51.514],
          backgroundColor: "#D79922",
          borderColor: "#D6CE15",
          borderWidth: 3
        }
      ]
    },
    options: {
      legend: {
        labels: {
            fontColor: "white",
        }
    },
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              fontColor: "white",
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
  };
  
  export default planetChartData;