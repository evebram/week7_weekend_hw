<template>
  <div>
    <main-header title='Favourite Films'/>
    <film-select :films="films"/>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import FilmSelect from '@/components/FilmSelect.vue';

export default {
  components: {
    'main-header': MainHeader,
    'film-select': FilmSelect
  },
  props: ['films'],
  mounted(){
    eventBus.$on('favouriteFilm', film => this.films.push(films))
  }
}
</script>

<style scoped>
</style>
