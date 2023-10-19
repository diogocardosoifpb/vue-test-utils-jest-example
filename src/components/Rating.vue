<template>
  <div>
    <ul>
      <ol
        :key="star"
        v-for="star in maxStars"
        class="star"
        :class="{ 'active': star <= initialRating}"
      >
        <img v-if="star <= initialRating" src="./star-full.svg" alt="Star Icon" width="50px">
        <img v-else src="./star.svg" alt="Star Icon" width="50px">
      </ol>
    </ul>
    <div class="summary">{{ initialRating }} of {{ maxStars}}</div>
  </div>
</template>

<script>
export default {
  name: 'Rating',
  props: {
    maxStars: {
      type: Number,
      default: 5
    },
    initialRating: {
      type: Number,
      default: 2
    },
  }
}
</script>
<style scoped>
div, ul {
  display: flex;
  align-items: center;
}
.summary {
  margin-left: 20px;
}
</style>
