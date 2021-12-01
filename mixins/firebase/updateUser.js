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
      }, 3000), // memosのデータの更新が終わった5秒後に実行される
      deep: true,
    },
  },
  methods: {
    updateProfile() {
      const auth = getAuth()
      updateProfile(auth.currentUser, {
        displayName: this.fb_user.name,
        photoURL: this.fb_user.img,
      })
      this.alert = '保存中です...'
        .then(() => {
          location.reload()
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
