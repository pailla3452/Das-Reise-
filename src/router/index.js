import Vue from 'vue'
import Router from 'vue-router'

// COMPONENTS
import Home from '@/components/Home'
import Signin from '../components/user/Signup'
import Signup from '../components/user/Signin'

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
    }
  ]
})
