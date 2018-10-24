<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>PREMIER FARMS</h1>
    <form @submit="addBin(bin)">
      <input v-model="bin" placeholder="Bin ID">
      <h2 style="font-size: 40"><b>Shelf #</b>
            <select id="shelf" v-model="bin">
                <option value="1"> 1</option>
                <option value="2"> 2</option>
                <option value="3"> 3</option>
            </select>
      <b>Row</b>
            <select class="dropbox" id="row" v-model="bin">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
            </select>
      </h2>
      <button type="submit">Add New Bin</button>
    </form>
    <div>
      <article v-for="(location, idx) in dryinglogs" :key="idx">
        <h2> Bin: {{ location.bin }}</h2>
        <h3>Start Time: {{ location.addedAt.toLocaleString() }}</h3>
        <button @click="removeBin(location.id)">Remove</button>
      </article>
    </div>
    
  </div>
</template>

<script>
import { db } from '../main'
export default {
  name: 'HelloWorld',
  data () {
    return {
      dryinglogs: [],
      bin: ""
    }
  },
  firestore () {
    return {
      dryinglogs: db.collection('dryinglogs').orderBy('addedAt')
    }
  },
  methods: {
    addBin (bin) {
      const addedAt = new Date()
      db.collection('dryinglogs').add({ bin, addedAt })
    },
    removeBin (id) {
      db.collection('dryinglogs').doc(id).delete()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
