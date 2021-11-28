import { getAuth, signOut } from 'firebase/auth'

// 認証
export const firebaseAuth = {
  data() {
    return {
      isLogined: false,
    }
  },
  mounted() {
    const auth = getAuth()
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
          // this.$router.push({ path: '/' })
          location.reload('/')
        })
        .catch((error) => {
          // An error happened.
          console.error(error)
        })
    },
  },
  computed: {},
  created() {},
}

export const firebase = {
  data() {},
  mounted() {},
  methods: {},
  computed: {},
  created() {},
}
