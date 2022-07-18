export const planetChartData = {
    type: "scatter",
    data: {
      labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
      datasets: [
        {
          label: "Number of Moons",
          data: [{x: 10,y: 20}, {x: 9,y: 14} ,{x: 6,y: 7}, {x: 15,y: 10} ,{x: 19,y: 3}, {x: 9,y: 10}],
          backgroundColor: "#D79922",
          borderColor: "#D6CE15",
          borderWidth: 3
        },
        {
          label: "Planetary Mass (relative to the Sun x 10^-6)",
          data: [{x: 12,y: 30}, {x: 4,y: 4} ,{x: 5,y: 4}, {x: 17,y: 8} ,{x: 16,y: 13}, {x: 3,y: 10}],
          backgroundColor: "#062f4f",
          borderColor: "#062f4f",
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
              fontColor: "white",
              beginAtZero: true,
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