import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Favourites from '@/views/Favourites';

Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home,
      props: true
    },
    {
      path: '/favourites',
      name: 'favourites',
      component: Favourites,
      props: true
    }
  ]
});

export default router;
