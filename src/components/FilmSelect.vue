<template lang="html">
  <select @change="filmSelected">
    <option selected disabled>-</option>
    <option v-for="(film, index) in films" :value="index">{{ film.title }}</option>
  </select>

</template>

<script>
import {eventBus} from '@/main.js';

export default {
  name: 'film-select',
  props: ['films'],
  methods: {
    filmSelected(e) {
      //console.log(e.target.value);
      const selectedIndex = e.target.value;
      eventBus.$emit('film-selected', selectedIndex);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
