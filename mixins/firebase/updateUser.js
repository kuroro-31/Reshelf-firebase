import { getAuth, updateProfile } from 'firebase/auth'

export const updateUser = {
  // data() {
  //   return {
  //     fb_user: {
  //       name: '',
  //       img: '',
  //     },
  //   }
  // },
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
