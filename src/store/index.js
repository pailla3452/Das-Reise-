import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    toolbarInfo: {
      icon: '',
      text: 'Reise!',
      color: 'primary',
      colorFluid: 'primary--text' 
    }
  },
  mutations: {},
  getters: {},
  actions: {}
})
