<template>
  <header class="nav">
    <div class="nav-content">
      <div class="nav-left py-2.5">
        <!-- <input id="side" type="checkbox" name="" value="" /> -->
        <!-- <label for="side" class="toggle">
          <menu-icon size="1.5x"></menu-icon>
        </label> -->

        <NuxtLink to="/" class="title-link">
          <h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="40"
              viewBox="0 0 366.768 88.263"
            >
              <g
                id="グループ_85"
                data-name="グループ 85"
                transform="translate(-1124.232 2505.643)"
              >
                <g id="logo" transform="translate(1127.513 -2504.095)">
                  <path
                    id="パス_523"
                    data-name="パス 523"
                    d="M603.357,253.269a3.029,3.029,0,0,0-.018-.316,5.945,5.945,0,0,0-.436-1.866c-.831-2.559-2.475-5.853-2.043-7.581a20.617,20.617,0,0,0-4.2-17.924,40.98,40.98,0,0,0-45.622-13.431c-4.123,1.425-13.165-8.58-34.852,11.5l14.174,3.378h0c-.125.1.043-.207,0,0-4.321,6.362-6.917,15.4-6.916,23.859,0,.427,0,.851.02,1.274l-.02-.025a42.91,42.91,0,0,0,42.91,42.91,74.709,74.709,0,0,0,11.919-.568c8.854-.908,9.406-2.838,13.282-2.838,4.087,0,6.13,1.362,6.811.454s-2.27-6.357-2.5-9.99.227-9.99-.454-9.763-4.768,4.768-7.492,7.038-4.541,2.952-4.768,3.633,0,2.043-.681,2.5a22.731,22.731,0,0,1-15.665,1.528,24.406,24.406,0,0,1-15.13-42,23.9,23.9,0,0,1,3.558,8.7c.681,4.541.681,8.328.795,8.818s.795.263,1.249-.191,7.038-3.86,8.627-9.309c1.569-5.383,2.252-8.332,2.043-14.757h.561a24.417,24.417,0,0,1,23.541,17.941,6.012,6.012,0,0,0,11.309-2.847v-.114Z"
                    transform="translate(-516.383 -209.9)"
                    fill="none"
                    stroke-width="3"
                  />
                </g>
                <text
                  id="Reshelf_"
                  data-name="Reshelf "
                  transform="translate(1239 -2440)"
                  font-size="60"
                  font-family="Montserrat-Bold, Montserrat"
                  font-weight="700"
                >
                  <tspan x="0" y="0">Reshelf</tspan>
                </text>
              </g>
            </svg>
          </h1>
        </NuxtLink>
      </div>

      <div class="nav-center flex items-center py-2.5">
        <!-- 検索 -->
      </div>

      <div class="nav-right">
        <input type="text" class="search" placeholder="Search..." />

        <form v-if="isLogined" @submit.prevent="create">
          <re-button class="re-button re-button-small no-shadow">
            <button
              class="re-button-primary-border bg-secondary"
              @click="create_modal = !create_modal"
            >
              コースの作成
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
          <!-- <heart-icon size="1.5x" class="dropdown-icon"></heart-icon> -->
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
            viewBox="0 0 24 24"
            class="svg-icon"
          >
            <path
              d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"
            ></path>
            <circle cx="10.5" cy="19.5" r="1.5"></circle>
            <circle cx="17.5" cy="19.5" r="1.5"></circle>
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
                      class="
                        re-button-primary-filled
                        bg-primary
                        ml-auto
                        duration-500
                      "
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
          v-if="isLogined"
          class="dropdown"
          @mouseover="dropdown = true"
          @mouseleave="dropdown = false"
        >
          <transition>
            <div
              v-if="dropdown"
              class="dropdown-contents scroll-none"
              @mouseover="dropdown = true"
              @mouseleave="dropdown = false"
            >
              <div class="menu">
                <div class="menu-name">
                  <div
                    v-if="user.name"
                    class="menu-name-person flex items-center"
                  >
                    <span
                      :class="onrain ? isLogined : offline"
                      class="rounded-full w-3 h-3 mr-2"
                    ></span>
                    <span>{{ user.name }}</span>
                  </div>
                </div>
                <div class="menu-me">
                  <span class="menu-me-title">受講生</span>
                  <nuxt-link class="menu-me-link" to="/user/learning">
                    受講中のコース
                  </nuxt-link>
                  <nuxt-link class="menu-me-link" to="/user/like">
                    お気に入り
                  </nuxt-link>
                </div>
                <div class="menu-me">
                  <span class="menu-me-title">講師</span>
                  <nuxt-link class="menu-me-link" to="/teacher/course">
                    ダッシュボード
                  </nuxt-link>
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
                  <div class="">
                    <select v-model="$colorMode.preference">
                      <option value="system">System</option>
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                    </select>
                  </div>
                  <span class="menu-me-title">共通</span>
                  <nuxt-link class="menu-me-link" to="/user/setting">
                    アカウント設定
                  </nuxt-link>
                  <button class="menu-me-link" @click="logout">
                    ログアウト
                  </button>
                </div>
              </div>
            </div>
          </transition>
        </button>

        <div class="py-2.5">
          <div v-if="user.name" class="flex items-center">
            <span
              :class="onrain ? isLogined : offline"
              class="rounded-full w-3 h-3 mr-2"
            ></span>
            <span>{{ user.name }}</span>
          </div>
          <span v-if="isLogined" class="cursor-pointer" @click="logout">
            ログアウト
          </span>
          <div v-if="!isLogined" class="cursor-pointer">
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
import { getAuth, signOut } from 'firebase/auth'

import ReButton from '@/components/atoms/ReButton'
// import ReModal from '@/components/atoms/ReModal'
import FacebookLogin from '../../atoms/auth/FacebookLogin.vue'

export default {
  components: {
    ReButton,
    // ReModal,
    FacebookLogin,
  },
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

      isLogined: false,
      user: {
        id: null,
        name: '',
      },
    }
  },
  mounted() {
    const auth = getAuth()
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.isLogined = true
        this.user.name = user.displayName
      } else {
        this.isLogined = false
      }
    })
  },
  methods: {
    logout() {
      const auth = getAuth()
      signOut(auth)
        .then(() => {
          // this.$router.push({ path: '/' })
          location.reload('/')
        })
        .catch((error) => {
          // An error happened.
          console.error(error)
        })
    },
  },
}
</script>
<style lang="scss" scoped>
text {
  fill: var(--color);
}
path {
  stroke: rgba(var(--primary));
}
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
.fb-btn {
  @apply py-2 px-4 text-white rounded-lg text-lg  duration-200;
  background: #1976f2;
  border: 1px solid #1976f2;

  &:hover {
    -webkit-box-shadow: 0 8px 25px -8px #1976f2;
    box-shadow: 0 8px 25px -8px #1976f2;
  }
}
.fb-btn-posted {
  @apply py-3 px-4 text-white rounded-lg text-xl font-bold;
  color: #1976f2;
  border: 1px solid #1976f2;
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
    &-person {
      @apply ml-2;
      max-width: 140px;
    }
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
  @apply px-4 py-2 rounded-lg;
  background-color: var(--bg-secondary);
  background-clip: padding-box;
  border: 1px solid var(--gray);
}

.purple {
  width: 30px;
  height: 30px;
  background: $purple;
}
</style>
