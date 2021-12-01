// =============
// 退会処理
// =============
import { deleteUser, getAuth } from 'firebase/auth'

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
