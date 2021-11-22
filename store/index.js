import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import authenticate from './authenticate'

const store = () => {
  return new Vuex.Store({
    plugins: [createPersistedState()],
    modules: {
      authenticate,
    },
  })
}

export default store
