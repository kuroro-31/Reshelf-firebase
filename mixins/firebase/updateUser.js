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
      }, 2000), // memosのデータの更新が終わった2秒後に実行される
      deep: true,
    },
  },
  methods: {
    updateProfile() {
      this.alert = '保存中です...'
      const auth = getAuth()
      updateProfile(auth.currentUser, {
        displayName: this.fb_user.name,
        // photoURL: this.fb_user.img,
      })
        .then(() => {
          this.alert = 'アップデートしました'
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
