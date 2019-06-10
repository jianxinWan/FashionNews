import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home/index.vue'
import Login from '@/login/login.vue'
import Mydoc from '@/Mydoc/index.vue'
import SignUp from '@/Login/signUp.vue'
import Detail from '@/News/detail.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/mydoc',
      name: 'mydoc',
      component: Mydoc
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
})
