import { getAuth, signOut } from 'firebase/auth'

export const firebaseAuth = {
  data() {
    return {
      is_fb_authed: false,
      fb_user: {
        email: '',
      },
    }
  },
  mounted() {
    const auth = getAuth()
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.is_fb_authed = true
        this.fb_user.email = user.email
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
          location.reload('/') // spaだと変更が反映されないのでリロード
        })
        .catch((error) => {
          console.error(error)
        })
    },
  },
}

export const firebase = {
  data() {},
  mounted() {},
  methods: {},
  computed: {},
  created() {},
}
