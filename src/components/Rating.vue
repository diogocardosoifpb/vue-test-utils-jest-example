<template>
  <div>
    <ul>
      <li
        :key="star"
        v-for="star in maxStars"
        class="star"
        :class="{ 'active': star <= initialRating}"
      >
      </li>
    </ul>
    <div class="summary">{{ initialRating }} of {{ maxStars}}</div>
  </div>
</template>

<script>
export default {
  name: 'Rating',
  props: {
    maxStars: {
      type: Number
    },
    initialRating: {
      type: Number

    },
  }
}
</script>
