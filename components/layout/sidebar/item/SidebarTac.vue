<template>
  <div class="item">
    <!-- <div class="empty"></div> -->
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
  @apply duration-200 flex flex-col pb-8 mb-8 border-b justify-end;
  &-title {
    @apply font-bold pb-2 text-right cursor-default;
    color: var(--sub-color);
    // @screen lg {
    //   margin-top: 50px;
    // }
  }
  &-link {
    @apply py-1 text-right;
    color: var(--color);
    &:hover {
      @apply text-primary;
    }
  }
}
.empty {
  @screen lg {
    height: 100px;
  }
}
.title {
  color: var(--color);
}
</style>
