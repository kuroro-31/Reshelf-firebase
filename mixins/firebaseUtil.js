import { getAuth, signOut, updateProfile } from 'firebase/auth'

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
    const auth = getAuth()
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

export const updateUser = {
  data() {
    return {
      fb_user: {
        name: '',
        img: '',
      },
    }
  },
  mounted() {},
  methods: {
    updateProfile() {
      const auth = getAuth()
      updateProfile(auth.currentUser, {
        displayName: this.fb_user.name,
        photoURL: this.fb_user.img,
      })
        .then(() => {
          // Profile updated!
          // ...
          console.log('Profile updated!')
        })
        .catch((error) => {
          // An error occurred
          // ...
          console.log(error)
        })
    },
  },
}

export const deleteUser = {
  methods: {
    deleteUser() {
      const auth = getAuth()
      const user = auth.currentUser

      deleteUser(user)
        .then(() => {
          this.$router.push({ path: '/' })
          console.log('User deleted.')
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
