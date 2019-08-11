<template>
  <div>
    <main-header title='Studio Ghibli Films'/>
    <film-select :films="films"/>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import FilmSelect from '@/components/FilmSelect.vue';
import FilmInfo from '@/components/FilmInfo.vue';

export default {
  components: {
    'main-header': MainHeader,
    'film-select': FilmSelect,
    'film-info': FilmInfo
  },
  props: ['films'],
  mounted(){
    eventBus.$on('FilmsSelect', films => this.films = films)
  }
}
</script>

<style scoped>
</style>
