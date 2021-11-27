import { auth } from '@/plugins/firebase.js'
import { getAuth, signOut } from 'firebase/auth'
// const auth = getAuth()

export default {
  computed: {},
  mounted() {},
}

export const myMixin = {
  mounted() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.isLogined = true
        this.user.name = user.displayName
      } else {
        this.isLogined = false
      }
    })
  },
  methods: {
    logout() {
      const auth = getAuth()
      signOut(auth)
        .then(() => {
          location.reload('/')
        })
        .catch((error) => {
          console.error(error)
        })
    },
  },
}
