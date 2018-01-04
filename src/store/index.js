import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    toolbarInfo: {
      icon: '',
      text: 'Reise!',
      color: 'primary',
      colorFluid: 'primary--text'
    },
    user: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  getters: {
    toolbarInfo (state) {
      return state.toolbarInfo
    },
    user (state) {
      return state.user
    }
  },
  actions: {
    signUserUp ({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          const newUser = {
            id: user.uid
          }
          console.log(newUser)
          commit('setUser', {id: newUser.id})
        })
        .catch((error) => {
          console.log(error)
        })
    },
    signUserIn ({commit}, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          const newUser = {
            id: user.uid
          }
          console.log(newUser)
          commit('setUser', {id: newUser.id})
        })
        .catch((error) => {
          console.log(error)
        })
    },
    autoSignIn ({commit}, payload) {
      commit('setUser', {id: payload.uid})
    },
    logOut ({commit}, payload) {
      firebase.auth().signOut()
      commit('setUser', null)
    }
  }
})
