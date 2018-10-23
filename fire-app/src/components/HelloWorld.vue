<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>PREMIER FARMS</h1>
    <form @submit="addBin(bin)">
      <input v-model="bin" placeholder="Bin ID">
      <button type="submit">Add New Bin</button>
    </form>
    <div>
      <article v-for="(location, idx) in dryinglogs" :key="idx">
        <h1> Bin: {{ location.bin }}</h1>
        <h3>Start Time: {{ location.addedAt }}</h3>
        <button @click="removeBin(location.id)">Remove</button>
      </article>
    </div>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { db } from '../main'
export default {
  name: 'HelloWorld',
  data () {
    return {
      dryinglogs: [],
      bins: ''
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
