<template>
  <div class="w-full flex mx-auto">
    <div class="w-full">
      <div class="items">
        <div v-for="item in items" :key="item.id" class="card item">
          <!-- 左サイド -->
          <div class="relative flex flex-col items-start">
            <nuxt-link
              to="/item/learning"
              @mouseover="visible = true"
              @mouseleave="visible = false"
            >
              <img :src="item.src" alt="text image" class="img" />
            </nuxt-link>
          </div>

          <!-- センター -->
          <div class="center">
            <nuxt-link class="title" to="/item/detail">
              {{ item.title }}
            </nuxt-link>

            <!-- 作者 -->
            <nuxt-link to="/user/top" class="name text-xs cursor-pointer">
              {{ item.name }}
            </nuxt-link>

            <span class="text-right w-full text-xs">評価する</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import ReButton from '@/components/atoms/ReButton'
// import { HeartIcon, ShoppingCartIcon } from 'vue-feather-icons'
export default {
  components: {},
  filters: {
    numberFormat: function (num) {
      return num.toLocaleString()
    },
    moneyFormat(num) {
      return (
        '¥' +
        (num || 0)
          .toString()
          .replace(/^-?\d+/g, (m) => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
      )
    },
    comma: function (num) {
      return num.toFixed(1)
    },
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      visible: false,
      isLiked: false,
      isDisabled: false,
      dropdown: false,
    }
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.dropdown {
  @apply py-2 px-4 relative rounded mr-4;
  // background: var(--bg-secondary);
  border: 1px solid var(--gray);
  &-icon {
    @apply flex-shrink-0 inline-block cursor-pointer;
  }
  &-img {
    @apply object-cover rounded-full shadow-lg cursor-pointer;
    width: 40px;
    height: 40px;
  }
  &-contents {
    @apply absolute top-0 right-0 z-50 rounded shadow-lg overflow-y-auto cursor-default;
    background-color: var(--bg-secondary);
    @screen lg {
      margin-top: 40px;
      width: 150px;
    }
  }
}
.menu {
  &-name {
    @apply flex items-center p-4;
    border-bottom: 1px solid #ccc;
    &-person {
      @apply ml-2;
      max-width: 140px;
    }
  }
  &-me {
    @apply flex flex-col items-start;
    border-bottom: 1px solid #ccc;
    &-title {
      @apply text-sm font-bold pt-2;
      color: var(--sub-color);
    }
    &-link {
      @apply py-3 w-full rounded text-left px-4 duration-200;
      &:hover {
        @apply cursor-pointer;
        background: #f0f2f6;
        border-radius: 6px;
      }
    }
  }
}
.filter {
  @apply flex items-center;
  &-icons {
    @apply flex items-center flex-shrink-0;
    &-grid {
      @apply cursor-pointer block flex-shrink-0 py-2 rounded-l;
      height: 38px;
      width: 50px;
      border-right: solid 1px var(--gray);
      border: solid 1px var(--gray);
      // background: var(--bg-secondary);
      border-right: none;
      &:hover {
        // @apply;
        color: rgba(var(--primary));
        background: var(--bg-secondary);
      }
    }
    &-list {
      @apply cursor-pointer block flex-shrink-0 py-2 rounded-r;
      height: 38px;
      width: 50px;
      border: solid 1px var(--gray);
      // background: var(--bg-secondary);
      &:hover {
        // @apply;
        color: rgba(var(--primary));
        background: var(--bg-secondary);
      }
    }
  }
}
.items {
  @apply flex relative flex-wrap;
}
.item {
  // @apply flex pb-8 mb-8 relative justify-between;
  // @apply flex pb-6 mb-6 relative;
  // border-bottom: 1px var(--thin-gray) solid;
  @apply flex flex-col mb-6 relative;
  @screen lg {
    @apply mr-auto;
    width: 31%;
  }
}
.center {
  @apply flex flex-col pt-4 items-start w-full;
  @screen lg {
    // min-width: 576px;
  }
}
.title {
  @apply text-lg w-full truncate font-bold cursor-pointer;
  color: var(--color);
}
// 商品画像
.img {
  @apply object-cover cursor-pointer;
  height: 140px;
  min-height: 140px;
  max-height: 140px;
  width: 260px;
  min-width: 260px;
  max-width: 260px;
  // height: 200px;
  // min-height: 200px;
  // max-height: 200px;
  // width: 150px;
  // min-width: 150px;
  // max-width: 150px;
}

.content {
  @apply flex flex-col items-center justify-center absolute hidden shadow-lg rounded p-6;
  background-color: var(--bg-secondary);
  top: 0px;
  left: 125px;
  max-height: 300px;
  width: 400px;
  z-index: 510;
}
.tag {
  @apply px-2 py-1 mr-2;
  border: 1px solid var(--ccc);
}
.right-box {
  @apply flex items-center justify-center flex-col px-8 lg:pr-0;
  // min-width: 100px;
  min-width: 275px;
  width: 275px;
  border-left: 1px var(--thin-gray) solid;
  &-sale {
    @apply text-3xl;
    // color: var(--red);
  }
  &-normal {
    @apply line-through ml-2;
    color: var(--sub-color);
  }
}
.visible {
  display: flex;
}

.name {
  color: var(--sub-color);
}
// いいね
.like {
  @apply p-2.5 ml-4 rounded-full cursor-pointer;
  color: var(--aaa);
  border: 1px solid var(--ccc);
  &-yes {
    color: var(--fff);
    background: var(--red);
    border: 1px solid var(--red);
    &:hover {
      @apply duration-200;
      -webkit-box-shadow: 0 8px 25px -8px var(--red);
      box-shadow: 0 8px 25px -8px var(--red);
    }
  }
}
// 教材レベル
.level {
  @apply flex justify-end mt-2 px-2 py-1 mr-2 text-xs cursor-pointer;
  max-width: 50px;
  border: 1px solid var(--sub-color);
  color: var(--sub-color);
  &_one {
    border: 1px solid $green;
    color: $green;
  }
  &_two {
    border: 1px solid $yellow;
    color: $yellow;
  }
  &_three {
    border: 1px solid $red;
    color: $red;
  }
  &_four {
    border: 1px solid $purple;
    color: $purple;
  }
}
// 教材評価
.rate {
  @apply text-2xl font-bold cursor-default;
  &_one {
    color: $green;
  }
  &_two {
    color: $yellow;
  }
  &_three {
    color: $red;
  }
  &_four {
    color: $purple;
  }
}
// 教材評価画像
.rate_img {
  @apply flex items-center ml-2;
  &_zero {
    height: 17px;
    width: 100px;
    background-image: url('~@/assets/images/rate/zero.svg');
  }
  &_one {
    height: 17px;
    width: 100px;
    background-image: url('~@/assets/images/rate/one.svg');
  }
  &_one_five {
    height: 17px;
    width: 100px;
    background-image: url('~@/assets/images/rate/one-five.svg');
  }
  &_two {
    height: 17px;
    width: 100px;
    background-image: url('~@/assets/images/rate/two.svg');
  }
  &_two_five {
    height: 17px;
    width: 100px;
    background-image: url('~@/assets/images/rate/two-five.svg');
  }
  &_three {
    height: 17px;
    width: 100px;
    background-image: url('~@/assets/images/rate/three.svg');
  }
  &_three_five {
    height: 17px;
    width: 100px;
    background-image: url('~@/assets/images/rate/three-five.svg');
  }
  &_four {
    height: 17px;
    width: 100px;
    background-image: url('~@/assets/images/rate/four.svg');
  }
  &_four_five {
    height: 17px;
    width: 100px;
    background-image: url('~@/assets/images/rate/four-five.svg');
  }
  &_four_seven {
    height: 17px;
    width: 100px;
    background-image: url('~@/assets/images/rate/four-seven.svg');
  }
  &_five {
    height: 17px;
    width: 100px;
    background-image: url('~@/assets/images/rate/five.svg');
  }
}
.demo {
  @apply inline-flex justify-center items-center mt-2 px-4 py-1 text-xs cursor-pointer;
  max-width: 50px;
  border: 1px solid var(--sub-color);
  color: var(--sub-color);
}
</style>
