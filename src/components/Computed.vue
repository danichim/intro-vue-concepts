<template>
  <div class="computed">
    <h3>{{ titlu }}</h3>

    <p>Computed title: "{{ reversedMessage }}"</p>

    <ul><li v-for="n in evenNumbers">{{ n }}</li></ul><hr/>
    <ul><li v-for="n in odd(numbers)">{{ n }}</li></ul><hr/>

  </div>
</template>

<script>
export default {
  name: 'Conditionals',
  data () {
    return {
      titlu: 'Computed Properties and Watchers',
      numbers: [ 1, 2, 3, 4 ]
    }
  },
  methods: {
    reverseMessage: function () {
      return this.titlu.split('').reverse().join('')
    },
    odd: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 !== 0
      })
    }
  },
  computed: {
    //proprietatile computate nu sunt fezabile
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.titlu.split('').reverse().join('')
    },
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
