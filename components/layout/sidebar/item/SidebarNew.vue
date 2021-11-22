<template>
  <div class="item">
    <span class="item-title">受講生</span>
    <nuxt-link class="item-link" to="/user/learning">受講中のコース</nuxt-link>
    <nuxt-link class="item-link" to="/user/like">お気に入り</nuxt-link>
    <nuxt-link class="item-link" to="/user/bought">購入履歴</nuxt-link>

    <span class="item-title">受講生</span>
    <nuxt-link class="item-link" to="/user/learning">受講中のコース</nuxt-link>
    <nuxt-link class="item-link" to="/user/like">お気に入り</nuxt-link>
    <nuxt-link class="item-link" to="/user/bought">購入履歴</nuxt-link>
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
  @apply duration-200 flex flex-col;
  &-title {
    @apply text-xs font-bold pt-4;
    color: var(--sub-color);
  }
  &-link {
    @apply duration-200 px-4 py-2 w-full h-full;
    color: var(--color);
    &:hover {
      @apply cursor-pointer;
      transform: translateX(5px);
      background: #f0f2f6;
      border-radius: 6px;
    }
  }
}
.title {
  color: var(--color);
}
</style>
