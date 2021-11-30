<template>
  <div v-if="!is_fb_authed" class="hero">
    <div class="flex lg:w-1/2 justify-center h-full items-center">
      <div class="flex flex-col">
        <h2 class="title">
          最新で最高の
          <br />
          Learning Global Market
        </h2>
        <span class="describe">
          Reshelfは、プログラミング学習教材のグローバルマーケットプレイスです。
          高評価の教材を循環させるシステムで安全・安心なプラットホームを実現します。
        </span>
        <nuxt-link to="/auth/login">
          <re-button class="re-button">
            <button type="submit" class="re-button-primary-filled bg-primary">
              新規登録・ログイン
            </button>
          </re-button>
        </nuxt-link>
      </div>
    </div>
    <HeroImg />
  </div>
</template>
<script>
import { firebaseAuth } from '@/mixins/firebaseUtil.js'
// atoms
import HeroImg from '@/components/atoms/images/top/HeroImg'
import ReButton from '@/components/atoms/ReButton.vue'
export default {
  components: {
    HeroImg,
    ReButton,
  },
  mixins: [firebaseAuth],
}
</script>
<style lang="scss" scoped>
.hero {
  @apply w-full flex items-center mx-auto;
  background: var(--bg-secondary);
  max-height: calc(100vh - 65px);
  padding: 6.7% 0 6.7% 6.7%;
}
.title {
  @apply mb-2 font-bold;
  color: var(--color);
  font-size: 60px;
  line-height: 63px;
  text-align: left;
}
.describe {
  @apply inline-block mb-8;
  color: var(--color);
  // height: 67px;
  line-height: 21px;
  text-align: left;
}
</style>
