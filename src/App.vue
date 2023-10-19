<template>
  <div id="app">
    <rating :maxStars="5"/>
  </div>
</template>

<script>
import Rating from './components/Rating.vue'

export default {
  components: {
    Rating
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
