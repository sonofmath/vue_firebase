<template>
  <div id="app">
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


