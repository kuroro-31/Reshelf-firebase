<template>
  <header class="nav">
    <div class="nav-content">
      <NuxtLink to="/" class="nav-left py-2.5">
        <h1><Logo /></h1>
        <input type="text" class="search ml-4" placeholder="Search..." />
      </NuxtLink>

      <div class="nav-center flex items-center py-2.5">
        <!-- 検索 -->
      </div>

      <div class="nav-right">
        <form v-if="is_fb_authed" @submit.prevent="create">
          <re-button class="re-button re-button-small no-shadow">
            <button class="re-button-primary-border bg-secondary">
              コースを作成
            </button>
          </re-button>
        </form>
        <!-- <ReModal v-if="create_modal" @close="create_modal = !create_modal">
            <template slot="header">新規コースの作成</template>
            <div class="w-full flex flex-col justify-center">
              <div

                class="main-body-content py-0"
              >
                <p class="mb-4">{{ alert }}</p>
                <form @submit.prevent="create">
                  <re-button class="re-button">
                    <button
                      type="submit"
                      class="re-button-primary-filled bg-primary ml-auto"
                    >
                      作成
                    </button>
                  </re-button>
                </form>
              </div>
              <div v-else>ログインしてください</div>
            </div>
          </ReModal> -->

        <!-- お気に入り -->
        <button
          class="dropdown"
          @mouseover="like = true"
          @mouseleave="like = false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <transition>
            <div v-if="like">
              <div
                class="dropdown-contents"
                @mouseover="like = true"
                @mouseleave="like = false"
              >
                <div class="p-8">お気に入りの中身は空です</div>
              </div>
            </div>
          </transition>
        </button>

        <!-- カート -->
        <button
          class="dropdown"
          @mouseover="cart = true"
          @mouseleave="cart = false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <transition>
            <div v-if="cart">
              <div
                class="dropdown-contents"
                @mouseover="cart = true"
                @mouseleave="cart = false"
              >
                <div class="cart-content">
                  <p class="cart-content-name">My Cart</p>
                  <p class="divider"></p>

                  <div class="cart-content-products scroll-none">
                    <!-- 商品１ -->
                    <div class="w-full flex py-4">
                      <img
                        class="cart-content-img"
                        src="https://i.gyazo.com/3361b22275519a99133abe27ea99f34c.png"
                        alt=""
                      />
                      <div class="cart-content-box">
                        <div class="w-full flex flex-col items-start">
                          <p class="cart-content-title">
                            ゼロからはじめる
                            Dockerによるアプリケーション実行環境構築
                          </p>
                          <p class="cart-content-author">
                            クラピカクラピカクラピカ
                          </p>
                        </div>
                        <div class="cart-content-price">¥ 3,500</div>
                      </div>
                    </div>
                    <p class="divider"></p>
                    <!-- 商品２ -->
                    <div class="w-full flex py-4">
                      <img
                        class="cart-content-img"
                        src="https://i.gyazo.com/3361b22275519a99133abe27ea99f34c.png"
                        alt=""
                      />
                      <div class="cart-content-box">
                        <div class="w-full flex flex-col items-start">
                          <p class="cart-content-title">
                            ゼロからはじめる
                            Dockerによるアプリケーション実行環境構築
                          </p>
                          <p class="cart-content-author">
                            クラピカクラピカクラピカ
                          </p>
                        </div>
                        <div class="cart-content-price">¥ 3,500</div>
                      </div>
                    </div>
                    <p class="divider"></p>
                    <!-- 商品１ -->
                    <div class="w-full flex py-4">
                      <img
                        class="cart-content-img"
                        src="https://i.gyazo.com/3361b22275519a99133abe27ea99f34c.png"
                        alt=""
                      />
                      <div class="cart-content-box">
                        <div class="w-full flex flex-col items-start">
                          <p class="cart-content-title">
                            ゼロからはじめる
                            Dockerによるアプリケーション実行環境構築
                          </p>
                          <p class="cart-content-author">
                            クラピカクラピカクラピカ
                          </p>
                        </div>
                        <div class="cart-content-price">¥ 3,500</div>
                      </div>
                    </div>
                    <p class="divider"></p>
                    <!-- 商品２ -->
                    <div class="w-full flex py-4">
                      <img
                        class="cart-content-img"
                        src="https://i.gyazo.com/3361b22275519a99133abe27ea99f34c.png"
                        alt=""
                      />
                      <div class="cart-content-box">
                        <div class="w-full flex flex-col items-start">
                          <p class="cart-content-title">
                            ゼロからはじめる
                            Dockerによるアプリケーション実行環境構築
                          </p>
                          <p class="cart-content-author">
                            クラピカクラピカクラピカ
                          </p>
                        </div>
                        <div class="cart-content-price">¥ 3,500</div>
                      </div>
                    </div>
                    <p class="divider"></p>
                    <!-- 商品１ -->
                    <div class="w-full flex py-4">
                      <img
                        class="cart-content-img"
                        src="https://i.gyazo.com/3361b22275519a99133abe27ea99f34c.png"
                        alt=""
                      />
                      <div class="cart-content-box">
                        <div class="w-full flex flex-col items-start">
                          <p class="cart-content-title">
                            ゼロからはじめる
                            Dockerによるアプリケーション実行環境構築
                          </p>
                          <p class="cart-content-author">
                            クラピカクラピカクラピカ
                          </p>
                        </div>
                        <div class="cart-content-price">¥ 3,500</div>
                      </div>
                    </div>
                    <p class="divider"></p>
                    <!-- 商品２ -->
                    <div class="w-full flex py-4">
                      <img
                        class="cart-content-img"
                        src="https://i.gyazo.com/3361b22275519a99133abe27ea99f34c.png"
                        alt=""
                      />
                      <div class="cart-content-box">
                        <div class="w-full flex flex-col items-start">
                          <p class="cart-content-title">
                            ゼロからはじめる
                            Dockerによるアプリケーション実行環境構築
                          </p>
                          <p class="cart-content-author">
                            クラピカクラピカクラピカ
                          </p>
                        </div>
                        <div class="cart-content-price">¥ 3,500</div>
                      </div>
                    </div>
                    <p class="divider"></p>
                  </div>

                  <re-button class="pt-4 re-button re-button-small">
                    <button
                      class="re-button-primary-filled bg-primary ml-auto duration-500"
                      @click="modal = !modal"
                    >
                      Checkout
                    </button>
                  </re-button>
                </div>
              </div>
            </div>
          </transition>
        </button>

        <!-- ユーザードロップダウン -->
        <button
          v-if="is_fb_authed"
          class="dropdown"
          @mouseover="dropdown = true"
          @mouseleave="dropdown = false"
        >
          <UserIcon />
          <transition>
            <div
              v-if="dropdown"
              class="dropdown-contents scroll-none"
              @mouseover="dropdown = true"
              @mouseleave="dropdown = false"
            >
              <div class="menu">
                <div class="menu-name">
                  <div class="flex items-center">
                    <span
                      :class="is_fb_authed == true ? 'onrain' : 'offline'"
                      class="rounded-full w-3 h-3 mr-2"
                    ></span>
                    <span>{{ fb_user.name }}</span>
                  </div>
                </div>
                <div class="menu-me">
                  <nuxt-link class="menu-me-link" to="/teacher/course">
                    マイページ
                  </nuxt-link>
                  <nuxt-link class="menu-me-link" to="/user/learning">
                    学習中のコース
                  </nuxt-link>
                  <nuxt-link class="menu-me-link" to="/user/setting">
                    アカウント設定
                  </nuxt-link>
                  <span class="menu-me-link" @click="deleteAccount">
                    退会する
                  </span>
                </div>
                <!-- <div class="menu-me">
                  <nuxt-link class="menu-me-link" to="/user/top">
                    通知・お知らせ
                  </nuxt-link>
                  <nuxt-link class="menu-me-link" to="/user/top">
                    メッセージ
                  </nuxt-link>
                </div> -->
                <div class="menu-me">
                  <button class="menu-me-link" @click="logout">
                    ログアウト
                  </button>
                </div>
              </div>
            </div>
          </transition>
        </button>

        <div class="py-2.5 flex items-center">
          <div v-if="!is_fb_authed" class="cursor-pointer">
            <FacebookLogin />
          </div>
          <!-- <span @click="modal = !modal">aaa</span>
          <ReModal v-if="modal" @close="modal = !modal">
            <template slot="header">Welcome To Reshelf！</template>
            <div class="w-full flex flex-col justify-center">
              <FacebookLogin />
            </div>
            <template slot="footer">
              ※
              Reshelfでは、多重アカウントを防止するため、Facebookでのアカウント作成をお願いしています。
            </template>
          </ReModal> -->
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { firebaseAuth } from '@/mixins/firebase/firebaseAuth.js'
import { deleteAccount } from '@/mixins/firebase/deleteUser.js'
import ReButton from '@/components/atoms/ReButton'
import Logo from '@/components/atoms/Logo.vue'
// import ReModal from '@/components/atoms/ReModal'
import FacebookLogin from '@/components/atoms/auth/FacebookLogin'
import UserIcon from '@/components/atoms/user/UserIcon'

export default {
  components: {
    ReButton,
    Logo,
    // ReModal,
    FacebookLogin,
    UserIcon,
  },
  mixins: [firebaseAuth, deleteAccount],
  data() {
    return {
      visible: false,
      modal: false,
      create_modal: false,
      message: '',
      cart: false,
      dropdown: false,
      post: false,
      like: false,
      auth: {
        email: '',
        password: '',
      },
      item: {
        title: '',
      },
      errors: {},
      alert: '',
    }
  },
  methods: {
    async create() {
      await this.$axios
        .post('/api/posts', this.item)
        .then(({ data }) => {
          this.create_modal = false
          this.$nuxt.$router.push({
            name: 'item-edit-id',
            params: { id: data.data.id },
          })
        })
        .catch(({ response: { data } }) => {
          // alert(data.message)
          // console.log(data.message)

          alert(data.message)
          // this.$nuxt.$router.push({ path: '/auth/login' })
        })
    },
  },
}
</script>
<style lang="scss" scoped>
.toggle {
  @apply mr-4 cursor-pointer p-2 flex-shrink-0;
  height: 40px;
  width: 40px;
  &:hover {
    @apply rounded-lg;
    background: var(--eee);
  }
}
.nav {
  @apply sticky top-0 z-20 flex items-center justify-center h-16;
  background-color: var(--bg-secondary);
  padding: 0 6.7%;
  // background-color:rgba(var(--primary));
  // border-bottom-width: 1px;
  // border-style: solid;
  // border-color: var(--gray);
  &-content {
    @apply w-full mx-auto flex flex-wrap items-center justify-between mt-0;
  }
  &-left {
    @apply flex items-center lg:w-1/4 xl:w-1/5 mr-12;
    height: 45px;
    width: 240px;
  }
  &-center {
    @apply mr-auto;
  }
  &-right {
    @apply justify-end;
  }
  &-left,
  &-right {
    @apply flex h-full items-center;
  }
}
.dropdown {
  @apply px-3 relative;
  height: 60px;
  &-icon {
    // @apply flex-shrink-0 inline-block cursor-pointer;
  }
  &-img {
    @apply object-cover rounded-full shadow-lg cursor-pointer;
    width: 40px;
    height: 40px;
  }
  &-contents {
    @apply absolute top-0 right-0 z-50 rounded-lg shadow-lg overflow-y-auto cursor-default;
    background-color: var(--bg-secondary);
    @screen lg {
      margin-top: 60px;
      width: 300px;
      max-height: calc(100vh - 120px);
    }
  }
}
.cart-content {
  @apply overflow-auto flex flex-col p-4 items-start;
  &-name {
    @apply pb-2 text-lg font-bold;
  }
  &-img {
    @apply object-cover shadow-lg cursor-pointer;
    height: 50px;
    width: 40px;
  }
  &-box {
    @apply w-full flex items-start pl-4;
    width: 228px;
  }
  &-products {
    @apply overflow-y-auto;
    max-height: 300px;
  }
  &-title {
    @apply w-full font-bold break-words text-left;
  }
  &-author {
    @apply w-full truncate text-sm text-grey text-left pt-2;
  }
  &-price {
    @apply pl-2 whitespace-nowrap;
  }
}
.show {
  @apply block;
}
.dropdown-bg {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
}
.menu {
  &-name {
    @apply flex items-center p-4;
    border-bottom: 1px solid #ccc;
  }
  &-me {
    @apply flex flex-col items-start p-3;
    border-bottom: 1px solid #ccc;
    &-title {
      @apply text-sm font-bold pt-2;
      color: var(--sub-color);
    }
    &-link {
      @apply py-3 w-full rounded-lg text-left px-4 duration-200;
      &:hover {
        @apply cursor-pointer;
        transform: translateX(5px);
        background: #f0f2f6;
        border-radius: 6px;
      }
    }
  }
}

@keyframes slide-in {
  0% {
    transform: translateX(-15px);
    opacitx: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
// .divider {
//   @apply w-full z-50;
//   border-bottom: 1px var(--thin-gray) solid;
//   padding: 0 -9999px;
// }

.search {
  @apply px-3 py-2 rounded;
  background-color: var(--bg-secondary);
  background-clip: padding-box;
  border: 1px solid var(--gray);
  min-width: 200px;
}

.purple {
  width: 30px;
  height: 30px;
  background: $purple;
}
</style>
