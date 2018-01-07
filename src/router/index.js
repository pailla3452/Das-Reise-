import Vue from 'vue'
import Router from 'vue-router'

// COMPONENTS
import Home from '@/components/Home'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'
import World from '@/components/Maps/World'
import Place from '@/components/Maps/Place'
import MyTravels from '@/components/Maps/MyTravels'

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
    },
    {
      path: '/place',
      name: 'Place',
      component: Place
    },
    {
      path: '/MyTravels',
      name: 'Meine Reisen',
      component: MyTravels
    }
  ]
})
