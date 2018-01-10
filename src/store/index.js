import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    toolbarInfo: {
      icon: '',
      text: 'Reise!',
      color: 'orange darken-3',
      colorFluid: 'primary--text'
    },
    user: null,
    travels: [],
    center: {lat: 10.0, lng: 10.0},
    markers: [{
      position: {lat: 10.0, lng: 10.0}
    }, {
      position: {lat: 11.0, lng: 11.0}
    }]
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    createTravel (state, payload) {
      state.travels.push(payload)
    },
    setLoadedTravels (state, payload) {
      state.travels = payload
    }
  },
  actions: {
    loadData ({commit}, payload) {
      // FIREBASE
      firebase.database().ref('travels').once('value')
      .then((data) => {
        const travels = []
        const obj = data.val()
        for (let key in obj) {
          travels.push({
            id: key,
            idUser: obj[key].idUser,
            title: obj[key].title,
            country: obj[key].country,
            imageUrl: obj[key].imageUrl,
            description: obj[key].description,
            position: obj[key].position,
            date: obj[key].date,
            likes: obj[key].likes
          })
        }
        commit('setLoadedTravels', travels)
      })
    },
    signUserUp ({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          const newUser = {
            id: user.uid,
            userName: payload.userName
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
    },
    createTravel ({commit}, payload) {
      const travel = {
        idUser: this.state.user.id,
        title: payload.title,
        country: payload.country,
        imageUrl: payload.imageUrl,
        description: payload.description,
        position: payload.position,
        date: payload.date,
        likes: 0
      }
      console.log('TRAVEL from store: ' + travel)
      firebase.database().ref('travels').push(travel)
        .then((data) => {
          const key = data.key
          console.log(data)
          travel.id = key
          commit('createDevoir', travel)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  getters: {
    toolbarInfo (state) {
      return state.toolbarInfo
    },
    user (state) {
      return state.user
    },
    loadedTravels (state) {
      return state.travels
    },
    loadedTravel (state) {
      return (idTravel) => {
        return state.travels.find((travel) => {
          return travel.id === idTravel
        })
      }
    }
  }
})
