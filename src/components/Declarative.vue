<template>
  <div class="declarative">
    <h3>{{ titlu }}</h3>
    <div v-text="msgText"></div>
    <div v-bind:title="hoverText" v-bind:id="idDynamic">{{msg5}}</div>
    <div v-html="parseHTML"></div>
    <div v-bind:class="clasaNoua">{{msg5}}</div>
         
    <br/><hr>  <hr>
    <span style=color:red>&lt;h3&gt;</span>{{ titlu }}<span style=color:red>&lt;/h3&gt;</span><br/>
    <span>&lt;div v-text="msgText"&gt;</span><span>&lt;/div&gt;</span><br/>

    <span style=color:red>&lt;div v-bind:title="hoverText" v-bind:id="idDynamic"&gt;</span>{{msg5}}<span style=color:red>&lt;/div&gt;</span><br/>
    <span style=color:red>&lt;div v-html="parseHTML"&gt;</span><span style=color:red>&lt;/div&gt;</span><br/>
    <span style=color:red>&lt;div v-bind:class="clasaNoua"&gt;</span>{{msg5}}<span style=color:red>&lt;/div&gt;</span>
    
  </div>
</template>

<script>
export default {
  name: 'Declarative',
  data () {
    return {
      titlu: 'Template Syntax',
      msgText: 'Autor: Dan Ichim',
      hoverText: 'Acesta este un titlu',
      idDynamic: 'idUnic',
      parseHTML: '<b><em>Asa se face output la cod html</em></b>',
      clasaNoua: 'purple lighten-4',
      msg5: 'Asa se adauga atributele precum titlu sau id/class ori altele'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
