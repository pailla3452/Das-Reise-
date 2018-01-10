// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'

import Vuetify from 'vuetify'
import './stylus/main.styl'

import App from './App'
import router from './router'
import { store } from './store'

import firebase from 'firebase'

Vue.use(Vuetify)
Vue.config.productionTip = false

// GOOGLE MAPS API
// New in 0.4.0
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA7tiqTA0AoTOzCuZGd1lT26sDXGZulQwc'
    // libraries: 'places', //// If you need to use place input
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    // Set the configuration for your app
    // TODO: Replace with your project's config object
    var config = {
      apiKey: 'AIzaSyCtmVUKBiRVDgRrgP-DcNb7NcgRjasNHNg',
      authDomain: 'das-reise.firebaseapp.com',
      databaseURL: 'https://das-reise.firebaseio.com',
      projectId: 'das-reise',
      storageBucket: 'gs://das-reise.appspot.com'
    }
    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadData')
  }
})
