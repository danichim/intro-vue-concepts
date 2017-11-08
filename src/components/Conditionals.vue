<template>
  <div class="conditionals">
    <h3>{{ titlu }}</h3>

    <div v-if="vezi">Acum poti afisa!</div>
    <h3 v-else>Nu este afisat</h3>
    <hr/>

    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'">C</div>
    <div v-else>Not A/B/C</div>
    <hr/>

    <h2 v-show="hideShow">Hello!<hr/></h2>

    <ul v-if="todos.length">
      <li v-for="(todo, index) in todos" v-if="!todo.isComplete" v-bind:title="todo.text" :key="todo.id">
        {{mesajParinte}} {{index+1}}. {{ todo.text }}
      </li>
    </ul>
    <p v-else>No todos left!</p>
    <hr/>

    <div v-for="(value, key, index) in object">
      {{ index }}. {{ key }}: {{ value }}
    </div><hr/>

    <div>
      <span v-for="n in 10">{{ n }} </span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Conditionals',
  data () {
    return {
      titlu: 'Conditionals & loops',
      vezi: true,
      type: 'A',
      hideShow: false,
      mesajParinte: 'TODO',
      todos: [
        { id: 1, text: 'Learn JavaScript', isComplete: false  },
        { id: 2, text: 'Learn Vue', isComplete: false },
        { id: 3, text: 'Build something awesome', isComplete: true },
        { id: 4, text: 'Learn ExpressJs', isComplete: false }
      ],
      object: {
        firstName: 'John',
        lastName: 'Doe',
        age: 30
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
