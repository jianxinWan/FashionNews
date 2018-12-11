import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home/index.vue';
import Login from '@/components/login/login.vue';
import Mydoc from '@/components/Mydoc/index.vue';

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path:'/mydoc',
      name:'mydoc',
      component:Mydoc
    },
    {
      path:'/login',
      name:'login',
      component:Login
    }
  ]
})