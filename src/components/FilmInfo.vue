<template lang="html">
  <ul v-if="film !== null">
    <h2>{{film.title}}</h2>
    <li><span>Description: </span>{{film.description}}</li>
    <li><span>Director: </span>{{film.director}}</li>
    <li><span>RT Score: </span>{{film.rt_score}}</li>
    <button @click="handleClick">Add to Favourites</button>
  </ul>
</template>

<script>
export default {
  name: 'film-info',
  props: ['film', 'isfave'],
  methods: {
    handleClick() {
      this.isfavourite = true;
      eventBus.$emit('favouriteFilm', this.film);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
