import { getAuth, signOut } from 'firebase/auth'
const auth = getAuth()

export const firebaseAuth = {
  data() {
    return {
      is_fb_authed: false,
      fb_user: {
        name: '',
        email: '',
        img: '',
      },
    }
  },
  mounted() {
    auth.onAuthStateChanged((user) => {
      if (user !== null) {
        this.is_fb_authed = true
        this.fb_user.name = user.displayName
        this.fb_user.email = user.email
        this.fb_user.img = user.photoURL
      } else {
        this.is_fb_authed = false
      }
    })
  },
  methods: {
    logout() {
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

export const updateUser = {
  data() {},
  mounted() {},
  methods: {},
  computed: {},
  created() {},
}
