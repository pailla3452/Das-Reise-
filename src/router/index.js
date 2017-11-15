import Vue from 'vue'
import Router from 'vue-router'

// COMPONENTS
import Home from '@/components/Hello'
import Signin from '@/components/user/Signup.vue'
import Signup from '@/components/user/Signin.vue'

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
