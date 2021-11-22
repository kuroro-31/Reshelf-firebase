<template>
  <div @click="socialLogin('facebook')">
    <re-button class="re-button">
      <button class="re-button-primary-filled bg-primary">
        Facebookで新規登録・ログイン
      </button>
    </re-button>
  </div>
</template>
<script>
import ReButton from '@/components/atoms/ReButton'
export default {
  components: {
    ReButton,
  },
  methods: {
    socialLogin(service) {
      window.location.href = `${process.env.NGROK}auth/login/${service}`
    },
  },
}
</script>
