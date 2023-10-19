<template>
  <div id="app">
    <rating :maxStars="5"/>
    <meme />
  </div>
</template>

<script>
import Rating from './components/Rating.vue'
import Meme from './components/Random.vue'

export default {
  components: {
    Rating,
    Meme
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
