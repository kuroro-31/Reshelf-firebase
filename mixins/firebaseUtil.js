import { getAuth, signOut } from 'firebase/auth'

export const firebaseAuth = {
  data() {
    return {
      is_fb_authed: false,
      fb_user: {
        email: '',
        img: '',
      },
    }
  },
  mounted() {
    const auth = getAuth()
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.is_fb_authed = true
        this.fb_user.email = user.email
        this.fb_user.img = user.photoURL
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
          this.$router.push({ path: '/' })
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
