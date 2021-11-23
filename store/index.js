import { auth } from '~/plugins/firebase.js'

export const strict = false

export const state = {
  user: null,
}

export const mutations = {
  setUser(state, payload) {
    state.user = payload
  },
}

export const actions = {
  signInWithFacebook({ commit }) {
    return auth().signInWithPopup(new auth.FacebookAuthProvider())
  },

  signOut() {
    return auth().signOut()
  },
}

export const getters = {
  user(state) {
    return state.user
  },
  isAuthenticated(state) {
    return !!state.user
  },
}
