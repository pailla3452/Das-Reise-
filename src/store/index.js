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
    travels: [
      {
        // TODO OCUPAR USARIOS QUE FUNCIONEN
        id: 'ysgdcjzhtgrfeyrgfhcfrygx',
        idUser: 'iuhaefiushgiuer325i2wurh',
        title: 'Cool ice creams',
        // Carousel
        imgLink: [
          'http://www.pointsnearmenow.com/wp-content/uploads/2017/02/image-12.jpg',
          'http://www.seriouseats.com/images/2014/06/20140627-best-ice-cream-chicago-margies-candies-matt-kirouac.jpg',
          'http://bluemonkbflo.com/wp-content/uploads/2017/04/ice-cream.jpg'
        ],
        comment: 'Meilleures glaces du monde :D',
        position: {lat: 0, lng: 0},
        commentSection: [
          {username: 'Paillita32', comment: 'lol u mad?', replies: []}
        ]
      },
      {
        id: 'agdfxbvweeafgbefw<syvd',
        idUser: 'clqui3hrbow57tge5',
        title: 'Place for 3D printing! Plain Palais',
        // Carousel
        imgLink: [
          'https://www.fablabs.io/media/W1siZiIsIjIwMTcvMDEvMjgvMTMvNDcvNDMvN2E3MTg3MTMtNTA0Yi00ZWQ5LWJlZDctMjI0ODdjODBhOGNlL0ZhYmxhYiBCcnVzc2Vscy5qcGciXSxbInAiLCJ0aHVtYiIsIjgwMHgiXV0/Fablab%20Brussels.jpg?sha=aa0dc0dd0796319f',
          'https://www.onefm.ch/wp-content/uploads/2017/12/geneva-lux-1000x600.jpg',
          'http://www.fablabni.com/sites/default/files/styles/mobilecustom_user_desktop_1x/public/field/image/DSC04835-itok=Q7M-l3ak.JPG'
        ],
        comment: 'Build Objects for FREE! Spaceships and stuff',
        position: {lat: 0, lng: 0},
        commentSection: [
          {username: 'DanielQliao_42', comment: '', replies: []}
        ]
      },
      {
        id: 'dyvxgrfesdyxbdefs',
        idUser: 'oiajfoijergksen',
        title: 'Cat invasion D: (Gare Cornavin)',
        // Carousel
        imgLink: [
          'https://cdn.theatlantic.com/assets/media/img/photo/2015/03/aoshima-japans-cat-island/c11_RTR4RUIQ/main_900.jpg?1425394297',
          'https://i.pinimg.com/736x/73/62/a0/7362a0857539769fed98af2001d37135--space-cat-original-version.jpg',
          'https://i.ytimg.com/vi/uwmeH6Rnj2E/hqdefault.jpg'
        ],
        comment: 'HELP! A group of cats have taken the west coast D:',
        position: {lat: 0, lng: 0},
        commentSection: [
          {username: 'LosMech@dD', comment: 'Bull***, u mad?', replies: []}
        ]
      }
    ],
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
    }
  },
  actions: {
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
        description: payload.description,
        position: payload.position,
        date: payload.date
      }
      let imageUrl
      let key
      firebase.database().ref('travels').push(travel)
        .then((data) => {
          key = data.key
          // commit('createTravel', {
            // travel,
            // id: key
          // })
          return key
        })
        .then(key => {
          const filename = payload.image.name
          const ext = filename.slice(filename.lastIndexOf('.'))
          return firebase.storage().ref('travels/' + key + '.' + ext).put(payload.image)
        })
        .then(fileData => {
          imageUrl = fileData.metadata.downloadURLs[0]
          return firebase.database().ref('travels').child(key).update({imageUrl: imageUrl})
        })
        .then(() => {
          commit('createTravel', {
            travel,
            imageUrl: imageUrl,
            id: key
          })
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
