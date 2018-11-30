<template>
  <div id="app">
    <canvas id="planet-chart"></canvas>
  </div>
</template>

<script>
import { db } from '../config/db';

export default {
  name: 'HelloWorld',
  firebase: {
    coins: db.ref('coins')
  }
}
</script>


