<template>
  <div class="flex flex-col">
    <div class="sidebar-search scroll-none">
      <span class="text-xs">合計</span>
      <span class="text-4xl font-bold mb-4 text-black">¥7,000</span>
    </div>

    <div class="sidebar-search-btn">
      <re-button class="re-button re-button-extra-large no-shadow">
        <button
          type="submit"
          class="re-button-primary bg-primary"
          @click="$router.push('/user/learning')"
        >
          <!-- Search -->
          ご注文を確定する
        </button>
      </re-button>
    </div>
  </div>
</template>

<script>
//Icons
// import { ChevronRightIcon } from 'vue-feather-icons'
// atoms
import ReButton from '@/components/atoms/ReButton'

export default {
  components: {
    // ChevronRightIcon,
    ReButton,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isDisabled: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.sidebar-search {
  @apply flex flex-col;
  color: var(--sub-color);
}
</style>
