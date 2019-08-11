<template lang="html">
  <div>
    <nav>
      <router-link :to="{name:'home'}">Studio Ghibli Films</router-link>
      <router-link :to="{name:'favourites'}">Favourite Films</router-link>
    </nav>
    <router-view id="view"></router-view>

    <film-select :films="films"/>
    <film-info :film="selectedFilm"/>
  </div>
</template>

<script>
import {eventBus} from '@/main.js';
import FilmSelect from '@/components/FilmSelect.vue';
import FilmInfo from '@/components/FilmInfo.vue';

export default {
  name: 'app',
  components: {
    'film-select': FilmSelect,
    'film-info': FilmInfo
  },
  data() {
    return {
      films: [],
      selectedFilm: null
    };
  },
  mounted() {
    eventBus.$on('film-selected', (selectedIndex) => {
      this.selectedFilm = this.films[selectedIndex];
    }),
    fetch('https://ghibliapi.herokuapp.com/films/')
    .then(res => res.json())
    //.then(films => console.log(films));
    .then(films => this.films = films);
    eventBus.$on('favouriteFilm', (film) => {
    this.favouritesList.push(film);
  }),
  // methods: {
  //   favouriteFilm(e) {
  //     const selectedIndex = e.target.value;
  //     eventBus.$emit('favourite-film', selectedIndex);
  //   }
  // }
  }
}

</script>

<style lang="css" scoped>
</style>
