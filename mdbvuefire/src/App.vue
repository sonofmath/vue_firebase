<template>
  <div>
    <div class="container">
      <h1 align="center">Temperature and Humidity Tracker</h1>
      <br>
      <div class="card text-center">
        <div class="card-header text-white bg-primary">
          <h2 id="test">Current Conditions</h2>
        </div>
        <div class="card-body ">
          <div class="row">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title text-white bg-info" >Temperature</h4>
                    <h1> {{ Info.temperature }} °</h1>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title text-white bg-info">Humidity</h4>
                    <h1> {{ Info.humidity }} %</h1>
                </div>
              </div>
            </div>
          </div>  
          <br>
          <div class="card">
            <h4 class="card-header">Moisture Status <span id="badge" class="badge badge-success"></span></h4>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
              </blockquote>
            </div>
            <h5 id='alarm'></h5>
            <div id='buttonAppear'>
              <button type="button" class="btn btn-warning" @click="dismissAlert()">Dismiss</button>
            </div>
            <table class="table table-striped">
                <thead>
                </thead>
                <tbody>
                    <tr v-for="items of waterSensor" :key="items['.key']">
                      <td> {{ items.time }} </td>
                      <td>
                          <router-link :to="{ name: 'Edit', params: {id: items['.key']} }" class="btn btn-warning">
                            Dismiss
                          </router-link>
                      </td>
                    </tr>
                </tbody>
              </table>
            <div class="card-footer text-muted">
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <canvas id="temp-chart"></canvas>
    </div>
  </div>
</template>

<script>
import ChartData from './chart-data.js'
import Chart from 'chart.js'
import Info from './monitor.js'
import Result from './water.js'
import { db } from './config/db'

var ref = db.ref('templogs')
var ref2 = db.ref('currenttemp')
var ref3 = db.ref('wateralerts')

var alertStatus = "?"



export default {
  name: 'app',
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId)
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      });
    }
  },
  computed: {
    checkStatus() {
      db.ref('wateralerts').orderByChild('dismissed').equalTo(0).on('value', function(snapshot) {
        if(snapshot.exists()) {
          document.getElementById('badge').innerHTML = "Water Detected"
          document.getElementById('badge').classList.add('badge-danger')
          document.getElementById('badge').classList.remove('badge-success')
          document.getElementById('alarm').innerHTML = "Water Detected"
          document.getElementById('buttonAppear').style.display = "block"
          

          //document.getElementById("buttonAppear").innerHTML = '<button type="button" class="btn btn-warning" @click="dismissAlert()">Dismiss</button>'
        }
        else {
          document.getElementById("badge").innerHTML = "In The Clear"
          document.getElementById('badge').classList.add('badge-success')
          document.getElementById('badge').classList.remove('badge-danger')
          document.getElementById('alarm').innerHTML = ""
          document.getElementById('buttonAppear').style.display = "none"
        }
        this.$forceUpdate()
      });
    },
    dismissAlert() {
      var ref = db.ref().child('wateralerts')
      ref.orderByChild('dismissed').equalTo(0).once('value', function(snap) {
          snap.forEach(function(item) {
            var key = item.key
            ref.child(key).update({ "dismissed" : 1 })
          })
      })
      this.$forceUpdate()
    }
  },
  data() {
    return {
      ChartData: ChartData,
      Info: Info,
      Result: Result,
      Alert: alertStatus,
      TheGoods: ref3
    }
  },
  mounted() {
    this.createChart('temp-chart', this.ChartData),
    this.checkStatus()
  },
  firebase: {
    tempData: ref,
    currentTemp: ref2,
    waterSensor: ref3
  }
}
</script>

<style lang="css">
  @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
</style>
