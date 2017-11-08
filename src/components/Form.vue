<template>
  <div class="form">
    <h3>{{ titlu }}</h3>

    <v-form ref="form" lazy-validation>
        <v-text-field
                name="input-3"
                label="Pune o intrebare cu da sau nu"
                value="Input text"
                v-model="intrebare"
                required
                ></v-text-field>
    </v-form>
    <p>{{ raspuns }}</p>
    <img v-if="image" :src="image">

  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      titlu: 'Form Input Bindings',
      intrebare: '',
      raspuns: 'Nu pot raspunde daca nu imi adresezi o intrebare!',
      image: ''
    }
  },
  watch: {
    intrebare: function (newQuestion) {
      this.raspuns = 'Waiting for you to stop typing...'
      this.cautaRaspuns()
    }
  },
  methods: {
    cautaRaspuns: function () {
        if (this.intrebare.indexOf('?') === -1) {
            this.raspuns = 'Questions usually contain a question mark. ;-)'
            return
        }
        this.raspuns = 'Thinking...'
        var self = this
        this.axios.get('https://yesno.wtf/api')
        .then(function (response) {
            self.raspuns = _.capitalize(response.data.answer)
            self.image = response.data.image
        })
        .catch(function (error) {
            self.raspuns = 'Error! Could not reach the API. ' + error
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
