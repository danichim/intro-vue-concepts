<template>
  <div class="event-handling">
    <h3>{{ titlu }}</h3>
    <v-btn outline color="indigo" v-on:click="say('hi')">Say hi</v-btn>
    <v-btn outline color="purple" @click="say('what')">Say what</v-btn>
    <p>Say: {{text}}</p>
  </div>
</template>

<script>
export default {
  name: 'EventHandling',
  data () {
    return {
      titlu: 'Event Handling and modifiers',
      clasaNoua: 'purple lighten-4',
      text: '?'
    }
  },
  methods: {
    say: function (message) {
      this.text = message
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
