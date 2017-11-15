import Vue from 'vue'
import Router from 'vue-router'

// COMPONENTS
import Home from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
