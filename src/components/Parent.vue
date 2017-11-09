
<template>
  <div class="home">
    <h3>{{ msg }}</h3>
    <v-text-field
      name="input-3"
      label="Pune o intrebare cu da sau nu"
      value="Input text"
      v-model="parentMsg"
      required
    ></v-text-field>
    <child v-bind:my-message="parentMsg"></child>
    <child my-message="hello!"></child>
    <child v-for="n in 3" v-bind:key="n" v-bind:my-message="randomize()"></child>
  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  name: 'Home',
  data () {
    return {
      parentMsg: '',
      nr: 0,
      msg: 'Components and child components'
    }
  },
  methods: {
    randomize: function() {
      return Math.random()
    }
  },
  components: { Child }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
