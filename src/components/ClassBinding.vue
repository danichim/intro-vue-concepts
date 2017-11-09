<template>
  <div class="class-binding">
    <h3>{{ titlu }}</h3>
    <div v-bind:class="clasaNoua">{{msg5}}</div>
  </div>
</template>

<script>
export default {
  name: 'ClassBinding',
  data () {
    return {
      titlu: 'Class and Style Bindings',
      clasaNoua: 'purple lighten-4',
      msg5: 'Atribuirea unei clase'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
