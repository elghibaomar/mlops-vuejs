import axios from 'axios'



function axiosTest() {
  axios.get('http://127.0.0.1:8000/email_list')
      .then(response => response.data)
      .catch(error => error);
}

async function getResponse () {
      const response = await axiosTest();
      console.log(response);
}

getResponse()


// 'http://127.0.0.1:8000/email_list'




export const planetChartData = {
    type: "bar",
    data: {
      labels: ["Married", "Single", "Divorced", "unknown"],
                  
      datasets: [
        {
          label: "Customers Marital",
          data: [1,9,6,4],
          backgroundColor: "#D79922",
          borderColor: "#D6CE15",
          borderWidth: 3
        },
      ]
    },
    options: {
      legend: {
        labels: {
            fontColor: "white",
            usePointStyle: true
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