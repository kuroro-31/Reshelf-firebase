import { getAuth, signOut } from 'firebase/auth'

// 認証
export const firebaseAuth = {
  data() {
    return {
      is_fb_authed: false,
      fb_user: {
        id: null,
        name: '',
      },
    }
  },
  mounted() {
    const auth = getAuth()
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.is_fb_authed = true
        this.fb_user.name = user.displayName
      } else {
        this.is_fb_authed = false
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
