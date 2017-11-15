// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'

import Vuetify from 'vuetify'
import './stylus/main.styl'

import App from './App'
import router from './router'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  created (){
    // Set the configuration for your app
// TODO: Replace with your project's config object
    var config = {
      apiKey: 'AIzaSyDowMD6PPZkm736WvsBn8ilEae-CisS_l8',
      authDomain: 'das-reise.firebaseapp.com',
      databaseURL: 'https://das-reise.firebaseio.com',
      projectId: 'das-reise'
      }
  firebase.initializeApp(config)
  }
})
