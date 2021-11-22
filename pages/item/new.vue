<template>
  <div class="w-full h-screen mx-auto flex flex-col scroll-none">
    <HeaderNav />
    <div class="w-full flex max-w-screen-lg mx-auto container scroll-none">
      <div class="lg:flex w-full mt-4">
        <nav
          class="card side-nav lg:max-h-(screen-22) pin-22 scroll-none mb-auto"
        >
          <div class="item">
            <span class="item-title">受講生</span>
            <nuxt-link class="item-link" to="/user/learning">
              >受講中のコース
            </nuxt-link>
            <nuxt-link class="item-link" to="/user/like">お気に入り</nuxt-link>
            <nuxt-link class="item-link" to="/user/bought">購入履歴</nuxt-link>

            <span class="item-title">受講生</span>
            <nuxt-link class="item-link" to="/user/learning">
              >受講中のコース
            </nuxt-link>
            <nuxt-link class="item-link" to="/user/like">お気に入り</nuxt-link>
            <nuxt-link class="item-link" to="/user/bought">購入履歴</nuxt-link>
          </div>
        </nav>
        <div class="main-body scroll-none">
          <div
            v-if="$store.state.authenticate.authenticated"
            class="main-body-content"
          >
            <p class="mb-4">{{ alert }}</p>
            <!-- <all-item :items="items" /> -->
            <form @submit.prevent="create">
              <!-- タイトル -->
              <label class="font-semibold text-xs text-gray-600 pb-1 block">
                タイトル
              </label>
              <input
                v-model.trim="post.title"
                type="text"
                placeholder="タイトル"
                autofocus
                class="border rounded px-3 py-2 mt-1 mb-5 text-xs w-full"
              />

              <!-- 保存 -->
              <re-button class="re-button">
                <button
                  type="submit"
                  class="re-button-primary-filled bg-primary"
                >
                  保存
                </button>
              </re-button>
            </form>
          </div>
          <div v-else>ログインしてください</div>
        </div>
      </div>
    </div>
    <!-- <FooterNav /> -->
  </div>
</template>
<script>
import _ from 'lodash'
import { mapGetters, mapActions } from 'vuex'

// layout
import HeaderNav from '@/components/layout/header/HeaderNav'
// atoms
import ReButton from '@/components/atoms/ReButton.vue'

export default {
  components: {
    HeaderNav,
    ReButton,
  },
  middleware: 'authenticated',
  data() {
    return {
      post: {
        title: '',
      },
      errors: {},
      alert: '',
    }
  },
  methods: {
    ...mapGetters({
      authenticated: 'authenticate/authenticated',
    }),
    async create() {
      this.$axios.defaults.withCredentials = true

      if (!this.authenticated) {
        this.$nuxt.$router.push({ path: '/auth/login' })
      } else {
        // this.$nuxt.$loading.start()
        this.alert = '保存中です...'

        await this.$axios.get('/sanctum/csrf-cookie').then(async () => {
          await this.$axios
            .post('/api/posts', this.post)
            .then(({ data }) => {
              // this.$nuxt.$router.back()
              // this.$nuxt.$router.push({ path: '/' })
              this.alert = '保存しました。'
            })
            .catch(({ response: { data } }) => {
              // alert(data.message)
              console.log(data.message)

              alert(data.message)
              // this.$nuxt.$router.push({ path: '/auth/login' })
            })
        })
        // this.$nuxt.$loading.finish()
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.side-nav {
  @apply hidden w-full lg:block mt-6 lg:w-1/4 xl:w-1/5 z-10 lg:sticky overflow-y-auto;
}
.main-body {
  @apply w-full lg:w-3/4 xl:w-4/5 p-6 lg:pl-10;
}

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
.mce-content-body {
  pre[class*='language-'] {
    background-color: #282c34 !important;
    border-radius: 0.5rem !important;
    code {
      border-radius: 0.5rem !important;
    }
  }
}
</style>
