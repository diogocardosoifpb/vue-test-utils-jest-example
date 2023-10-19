<template>
  <div>
    <input v-model="currentRating" type="number" min="0" :max="maxStars" />
    <ul>
      <ol
        :key="star"
        v-for="star in maxStars"
        class="star"
        :class="{ 'active': star <= currentRating }"
        @click="setRating(star)"
      >
        <img v-if="star <= currentRating" src="./star-full.svg" alt="Star Icon" width="50px">
        <img v-else src="./star.svg" alt="Star Icon" width="50px">
      </ol>
    </ul>
    <div class="summary">{{ currentRating }} of {{ maxStars }}</div>
  </div>
</template>

<script>
export default {
  name: 'Rating',
  props: {
    maxStars: {
      type: Number,
      required: true
    },
    initialRating: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentRating: 2
    };
  },
  methods: {
    setRating(star) {
      this.currentRating = star;
    }
  },
  computed: {
    isRatingComplete() {
      return this.currentRating === this.maxStars;
    }
  }
};
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