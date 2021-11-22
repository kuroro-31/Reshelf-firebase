<template>
  <div class="w-full flex mx-auto">
    <div class="w-full">
      <div class="items">
        <div v-for="(item, index) in items" :key="index" class="card item">
          <nuxt-link
            :to="{ name: 'item-id', params: { id: item.id } }"
            class="relative flex flex-col items-start"
          >
            <button class="relative">
              <img
                v-if="item.src"
                :src="item.src"
                alt="text image"
                class="img"
                :value="item"
              />
              <img
                v-else
                src="@/assets/images/noimage.svg"
                alt="text image"
                class="img"
                :value="item"
              />

              <!-- タイトル -->
              <nuxt-link class="title" to="/item/detail">
                <span v-if="item.title">{{ item.title }}</span>
                <span v-else>無題のタイトル</span>
              </nuxt-link>
              <!-- 作者 -->
              <nuxt-link to="/user/top" class="name">
                {{ item.name }}
              </nuxt-link>
              <div v-if="item.rate" class="flex items-center">
                <!-- レート -->
                <p class="rate rate_two">
                  <!-- <p
                  class="rate"
                  :class="{
                    rate_one: item.rate >= 0,
                    rate_two: item.rate >= 3.0,
                    rate_three: item.rate >= 4.0,
                    rate_four: item.rate >= 4.6,
                  }"
                > -->
                  {{ item.rate | comma }}
                </p>
                <!-- レート画像 -->
                <div
                  class="rate_img"
                  :class="{
                    rate_img_zero: item.rate >= 0.0,
                    rate_img_one: item.rate >= 1.0,
                    rate_img_one_five: item.rate >= 1.5,
                    rate_img_two: item.rate >= 2.0,
                    rate_img_two_five: item.rate >= 2.5,
                    rate_img_three: item.rate >= 3.0,
                    rate_img_three_five: item.rate >= 3.5,
                    rate_img_four: item.rate >= 4.0,
                    rate_img_four_five: item.rate >= 4.5,
                    rate_img_four_seven: item.rate >= 4.7,
                    rate_img_five: item.rate >= 5.0,
                  }"
                ></div>
              </div>
              <!-- セール価格 -->
              <div v-if="item.sale_price" class="right-box-sale">
                {{ item.sale_price | moneyFormat }}
              </div>
              <div class="flex mt-2">
                <span v-if="item.level" class="level">
                  {{ item.level }}
                </span>
                <!-- デモ -->
                <a
                  v-if="item.demo"
                  :href="item.demo"
                  class="demo"
                  target="_blank"
                >
                  DEMO
                </a>
              </div>
            </button>
          </nuxt-link>
        </div>

        <div v-for="item in items" :key="item.id" class="card item">
          <nuxt-link :to="{ name: 'item-id', params: { id: item.id } }">
            <span v-if="item.title">{{ item.title }}</span>
            <span v-else>無題のタイトル</span>
            <div class="">{{ item.user_id }}</div>
          </nuxt-link>
          <!-- <template v-if="authenticated"> -->
          <!-- <template v-if="user.id === item.user.id"> -->
          <template>
            <span @click="delete_modal = !delete_modal">削除</span>
            <ReModal v-if="delete_modal" @close="delete_modal = !delete_modal">
              <template slot="header">コースの削除</template>
              <div class="w-full flex flex-col justify-center">
                <div
                  v-if="$store.state.authenticate.authenticated"
                  class="main-body-content py-0"
                >
                  <p class="mb-4">{{ alert }}</p>
                  <form @click="deletePost(item.id)">
                    <re-button class="re-button">
                      <button
                        type="submit"
                        class="re-button-primary bg-danger ml-auto"
                      >
                        削除
                      </button>
                    </re-button>
                  </form>
                </div>
                <div v-else>ログインしてください</div>
              </div>
            </ReModal>
            <nuxt-link :to="{ name: 'item-edit-id', params: { id: item.id } }">
              編集
            </nuxt-link>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

import ReButton from '@/components/atoms/ReButton'
import ReModal from '@/components/atoms/ReModal'
export default {
  components: {
    ReButton,
    ReModal,
  },
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
      isLiked: false,
      isDisabled: false,
      dropdown: false,
      delete_modal: false,
      post_user: this.user,
    }
  },
  methods: {
    ...mapGetters({
      user: 'authenticate/user',
    }),
    async deletePost(id) {
      try {
        await this.$axios.$delete(`/api/posts/${id}`)
        location.reload('/')
      } catch (error) {
        alert(error.message)
      }
    },
  },
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
  @apply flex mb-6 relative mr-auto;
  &:nth-child(3) {
    @apply mr-0;
  }
}
.center {
  @apply flex flex-col px-6 items-start w-full;
  @screen lg {
    // min-width: 576px;
  }
}
.title {
  @apply block w-full truncate font-bold cursor-pointer mt-2 block;
  color: var(--color);
  max-width: 260px;
}
// 商品画像
.img {
  @apply object-cover cursor-pointer;
  // height: 140px;
  // min-height: 140px;
  // max-height: 140px;
  // width: 260px;
  // min-width: 260px;
  // max-width: 260px;

  height: 100px;
  min-height: 100px;
  max-height: 100px;

  // height: 200px;
  // min-height: 200px;
  // max-height: 200px;
  // width: 150px;
  // min-width: 150px;
  // max-width: 150px;
}

.content {
  @apply flex flex-col items-center justify-center absolute shadow-lg rounded p-6;
  background-color: var(--bg-secondary);
  top: 0px;
  right: -400px;
  width: 400px;
  z-index: 510;
  &:nth-child(3) {
    left: -400px;
  }
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
    @apply block w-full text-left font-bold text-lg mt-1;
    // color: var(--red);
  }
}
.display {
  display: flex !important;
}
.name {
  @apply inline-block text-xs cursor-pointer text-left w-full;
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
  @apply flex justify-end px-2 py-1 mr-2 text-xs cursor-pointer;
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
  @apply text-base leading-4 font-bold cursor-default;
  &_one {
    color: $green;
  }
  &_two {
    color: $gold;
  }
  &_three {
    color: $red;
  }
  &_four {
    color: $purple;
  }
  &_img {
    @apply flex items-center ml-2;
    &_zero {
      @apply bg-contain;
      height: 14px;
      width: 100px;
      background-image: url('~@/assets/images/rate/zero.svg');
    }
    &_one {
      @apply bg-contain;
      height: 14px;
      width: 100px;
      background-image: url('~@/assets/images/rate/one.svg');
    }
    &_one_five {
      @apply bg-contain;
      height: 14px;
      width: 100px;
      background-image: url('~@/assets/images/rate/one-five.svg');
    }
    &_two {
      @apply bg-contain;
      height: 14px;
      width: 100px;
      background-image: url('~@/assets/images/rate/two.svg');
    }
    &_two_five {
      @apply bg-contain;
      height: 14px;
      width: 100px;
      background-image: url('~@/assets/images/rate/two-five.svg');
    }
    &_three {
      @apply bg-contain;
      height: 14px;
      width: 100px;
      background-image: url('~@/assets/images/rate/three.svg');
    }
    &_three_five {
      @apply bg-contain;
      height: 14px;
      width: 100px;
      background-image: url('~@/assets/images/rate/three-five.svg');
    }
    &_four {
      @apply bg-contain;
      height: 14px;
      width: 100px;
      background-image: url('~@/assets/images/rate/four.svg');
    }
    &_four_five {
      @apply bg-contain;
      height: 14px;
      width: 100px;
      background-image: url('~@/assets/images/rate/four-five.svg');
    }
    &_four_seven {
      @apply bg-contain;
      height: 14px;
      width: 100px;
      background-image: url('~@/assets/images/rate/four-seven.svg');
    }
    &_five {
      @apply bg-contain;
      height: 14px;
      width: 100px;
      background-image: url('~@/assets/images/rate/five.svg');
    }
  }
}
// 教材評価画像
.demo {
  @apply inline-flex justify-center items-center px-4 py-1 text-xs cursor-pointer;
  max-width: 50px;
  border: 1px solid var(--sub-color);
  color: var(--sub-color);
}
.cart-content {
  @apply overflow-auto flex flex-col p-4 items-start;
}
</style>
