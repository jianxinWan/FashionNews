import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/index.vue'
import Login from '@/components/login/login.vue'
import Mydoc from '@/components/Mydoc/index.vue'
import SignUp from '@/components/Login/signUp.vue'
import Detail from '@/components/News/detail.vue'

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
