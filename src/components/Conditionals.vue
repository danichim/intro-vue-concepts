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

    <div v-for="(value, key, index) in object" v-bind:key="key">
      {{ index }}. {{ key }}: {{ value }}
    </div><hr/>

    <div>
      <span v-for="n in 10" v-bind:key="n">{{ n }} </span>
    </div>

    <br/><hr>  <hr>
    <span style=color:red>&lt;div v-if="vezi"&gt;</span>Acum poti afisa!<span style=color:red>&lt;/div&gt;</span><br/>
    <span style=color:red>&lt;h3 v-else&gt;</span>Nu este afisat<span style=color:red>&lt;/h3&gt;</span><br/>
    <span style=color:red>&lt;hr/&gt;</span><br/><br/>

    <span style=color:red>&lt;div v-if="type === 'A'"&gt;</span>A<span style=color:red>&lt;/div&gt;</span><br/>
    <span style=color:red>&lt;div v-else-if="type === 'B'"&gt;</span>B<span style=color:red>&lt;/div&gt;</span><br/>
    <span style=color:red>&lt;div v-else-if="type === 'C'"&gt;</span>C<span style=color:red>&lt;/div&gt;</span><br/>
    <span style=color:red>&lt;div v-else&gt;</span>Not A/B/C<span style=color:red>&lt;/div&gt;</span><br/>
    <span style=color:red>&lt;hr/&gt;</span><br/><br/>

    <span style=color:red>&lt;h2 v-show="hideShow"&gt;</span>Hello!<span style=color:red>&lt;hr/&gt;</span><span style=color:red>&lt;/h2&gt;</span><br/><br/>

    <span style=color:red>&lt;ul v-if="todos.length"&gt;</span><br/>
      <span style=color:red>&lt;li v-for="(todo, index) in todos" v-if="!todo.isComplete" v-bind:title="todo.text" :key="todo.id"&gt;</span><br/>
        { { mesajParinte } } { { index+1 } } . { { todo.text } }<br/>
      <span style=color:red>&lt;/li&gt;</span><br/>
    <span style=color:red>&lt;/ul&gt;</span><br/>
    <span style=color:red>&lt;p v-else&gt;</span>No todos left!<span style=color:red>&lt;/p&gt;</span><br/>
    <span style=color:red>&lt;hr/&gt;</span><br/><br/>

    <span style=color:red>&lt;div v-for="(value, key, index) in object" v-bind:key="key"&gt;</span><br/>
      { { index } } . { { key } } : { { value } }<br/>
    <span style=color:red>&lt;/div&gt;</span><span style=color:red>&lt;hr/&gt;</span><br/><br/>

    <span style=color:red>&lt;div&gt;</span><br/>
      <span style=color:red>&lt;span v-for="n in 10" v-bind:key="n"&gt;</span>{{ n }} <span style=color:red>&lt;/span&gt;</span><br/>
    <span style=color:red>&lt;/div&gt;</span><br/>

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
