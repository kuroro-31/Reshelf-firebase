<template>
  <div @click="facebook">
    <re-button class="re-button">
      <button class="re-button-primary-filled bg-primary">
        Facebookで新規登録・ログイン
      </button>
    </re-button>
  </div>
</template>
<script>
import { getAuth, FacebookAuthProvider, signInWithPopup } from 'firebase/auth'
import ReButton from '@/components/atoms/ReButton'
export default {
  components: {
    ReButton,
  },
  methods: {
    facebookLogin() {
      const provider = new FacebookAuthProvider()

      const auth = getAuth()
      signInWithPopup(auth, provider)
        .then((result) => {
          this.$router.push({ path: '/' })
        })
        .catch((error) => {
          console.error(error)
        })
    },
  },
}
</script>
