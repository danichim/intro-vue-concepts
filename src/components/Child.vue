<template>
  <div class="child-component">
    <p>{{ myMessage }}</p>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  props: ['myMessage']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
