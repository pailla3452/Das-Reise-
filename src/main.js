// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'

import Vuetify from 'vuetify'
import './stylus/main.styl'

import App from './App'
import router from './router'
import { store } from './store'

import firebase from 'firebase'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(Vuetify)

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBUaHV12RYyRbgDyyu1txn9ngqc2Ea4p0Q ',
    v: '3',
    libraries: 'places' // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
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
      projectId: 'das-reise'
    }
    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
  }
})
