
<template>
  <div class="parent-component">
    <h3>{{ msg }}</h3>
    <v-text-field
      name="input-3"
      label="Mesaj pentru child component"
      value="Input text"
      v-model="parentMsg"
      required
    ></v-text-field>
    <child-component v-bind:my-message="parentMsg"></child-component>
    <child-component my-message="hello child!"></child-component>
    <child-component v-for="n in 3" v-bind:key="n" v-bind:my-message="randomize()"></child-component>
  </div>
</template>

<script>
import ChildComponent from './Child.vue'

export default {
  name: 'ParentComponent',
  data () {
    return {
      parentMsg: '',
      msg: 'Components and child components'
    }
  },
  methods: {
    randomize: function() {
      return Math.floor(Math.random() * 3) + 1
    }
  },
  components: { ChildComponent }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
