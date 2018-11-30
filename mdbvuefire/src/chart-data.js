import {db} from './config/db'

var tempArray = []
var humidityArray = []
var timeArray = []

var ref = db.ref().child('templogs').orderByChild('timestamp')
ref.on('value', function(snap) {
    snap.forEach(function(item) {
        var tempVal = item.child('temp').val()
        var humidVal = item.child('humid').val()
        var timeVal = item.child('timestamp').val()
        tempArray.push(tempVal)
        humidityArray.push(humidVal)
        timeArray.push(timeVal)
    })
})



export const ChartData = {
    type: 'line',
    data: {
      labels: timeArray,
      datasets: [
        { // one line graph
          label: 'Humidity %',
          data: humidityArray,
          backgroundColor: [
            'rgba(54,73,93,.5)'
          ],
          borderColor: [
            '#36495d'
          ],
          borderWidth: 3
        },
        { // another line graph
          label: 'Temperature Farenheit',
          data: tempArray,
          backgroundColor: [
            'rgba(71, 183,132,.5)' // Green
          ],
          borderColor: [
            '#47b784'
          ],
          borderWidth: 3
        }
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            padding: 25,
          }
        }]
      }
    }
  }
  
  export default ChartData