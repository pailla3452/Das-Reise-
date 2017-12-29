import Vue from 'vue'
import Router from 'vue-router'

// COMPONENTS
import Home from '@/components/Home'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'
import World from '@/components/Maps/World'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/world',
      name: 'World',
      component: World
    }
  ]
})
