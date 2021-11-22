<template>
  <div class="item">
    <!-- 目次 -->
    <div class="flex flex-col">
      <span class="item-title">目次</span>
      <nuxt-link class="item-link" to="/user/setting">
        はじめてのTerraform
      </nuxt-link>
      <nuxt-link class="item-link" to="/user/profile">Terraformとは</nuxt-link>
      <nuxt-link class="item-link" to="/user/profile">環境を準備する</nuxt-link>
      <nuxt-link class="item-link" to="/user/profile">
        とりあえず触ってみる
      </nuxt-link>
      <nuxt-link class="item-link" to="/user/profile">
        シンタックスの活用
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.item {
  @apply duration-200 flex flex-col pr-8;
  @screen lg {
    @apply overflow-y-auto;
    height: calc(100vh - 68px);
  }
  &-title {
    @apply font-bold pb-2 text-right;
    color: var(--sub-color);
  }
  &-link {
    @apply py-1 text-right;
    color: var(--color);
    &:hover {
      @apply text-primary;
    }
  }
}
.title {
  color: var(--color);
}
</style>
