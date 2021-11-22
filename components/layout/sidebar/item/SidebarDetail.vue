<template>
  <div>
    <div v-for="item in items" :key="item.id">
      <!-- 右サイド -->
      <div class="sidebar-detail">
        <div class="flex items-center mb-4">
          <!-- セール価格 -->
          <span class="sidebar-detail-sale">
            {{ item.sale_price | moneyFormat }}
          </span>

          <!-- 定価 -->
          <span class="sidebar-detail-normal">
            {{ item.normal_price | moneyFormat }}
          </span>
        </div>

        <!-- ボタン -->
        <div class="flex flex-col w-full">
          <re-button
            class="re-button h-full no-shadow"
            :class="isLiked ? 'no-shadow' : ''"
          >
            <button
              type="submit"
              class="re-button-primary-border"
              @click="isLiked = !isLiked"
            >
              <heart-icon
                size="1x"
                class="mr-2"
                :class="isLiked ? 'text-red' : ''"
              ></heart-icon>
              <span :class="!isLiked ? 'block' : 'hidden'">
                お気に入りに追加
              </span>
              <span :class="isLiked ? 'block' : 'hidden'">お気に入り</span>
            </button>
          </re-button>
          <re-button
            class="re-button h-full mt-2"
            :class="isDisabled ? 'no-shadow' : ''"
          >
            <button
              type="submit"
              class="re-button-primary-filled"
              @click="$router.push('/item/cart')"
            >
              <shopping-cart-icon size="1x" class="mr-2"></shopping-cart-icon>
              カートに入れる
            </button>
          </re-button>
        </div>
      </div>
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
.sidebar-detail {
  @apply flex items-center justify-center flex-col w-full h-full;
  // min-width: 100px;
  // border-left: 1px var(--thin-gray) solid;
  // background-color: var(--bg);
  &-sale {
    @apply text-3xl;
    // color: var(--red);
  }
  &-normal {
    @apply line-through ml-2;
    color: var(--sub-color);
  }
}
</style>
