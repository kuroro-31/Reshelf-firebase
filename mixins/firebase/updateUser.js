import { getAuth, updateProfile } from 'firebase/auth'
import _ from 'lodash'

export const updateUser = {
  data() {
    return {
      alert: '',
    }
  },
  watch: {
    fb_user: {
      handler: _.debounce(function () {
        this.updateProfile()
      }, 3000),
      deep: true,
    },
  },
  methods: {
    updateProfile() {
      this.alert = '保存中です...'
      const auth = getAuth()
      updateProfile(auth.currentUser, {
        displayName: this.fb_user.name,
        photoURL: this.fb_user.img,
      })
        .then(() => {
          this.alert = '保存しました'
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
