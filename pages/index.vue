<template>
  <div class="w-full mx-auto flex flex-col scroll-none">
    <HeaderNav />

    <div v-if="!is_fb_authed" class="hero">
      <div class="flex lg:w-1/2 justify-center h-full items-center">
        <div class="flex flex-col">
          <h2 class="title">
            最新で最高の
            <br />
            Learning Global Market
          </h2>
          <span class="describe">
            Reshelfは、プログラミング学習教材のグローバルマーケットプレイスです。
            高評価の教材を循環させるシステムで安全・安心なプラットホームを実現します。
          </span>
          <nuxt-link to="/auth/login">
            <re-button class="re-button">
              <button type="submit" class="re-button-primary-filled bg-primary">
                新規登録・ログイン
              </button>
            </re-button>
          </nuxt-link>
        </div>
      </div>
      <HeroImg />
    </div>

    <!-- 学習分野 -->
    <div>
      <div class="my-12 w-full">
        <div class="container w-full mx-auto flex justify-center">
          <div class="box box-aca primary-color">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              viewBox="0 0 33.414 42.414"
            >
              <g id="Icon" transform="translate(1 1)">
                <path
                  id="Icon-2"
                  data-name="Icon"
                  d="M0,0H31V33H24v7H0Z"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  id="Icon-3"
                  data-name="Icon"
                  d="M0,.5H21"
                  transform="translate(5 12.5)"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  id="Icon-4"
                  data-name="Icon"
                  d="M0,.5H21"
                  transform="translate(5 17.5)"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  id="Icon-5"
                  data-name="Icon"
                  d="M0,.5H21"
                  transform="translate(5 22)"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  id="Icon-6"
                  data-name="Icon"
                  d="M0,.5H5"
                  transform="translate(5 28)"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  id="Icon-7"
                  data-name="Icon"
                  d="M0,.5H13"
                  transform="translate(5 5.5)"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  id="Icon-8"
                  data-name="Icon"
                  d="M0,7,7,0"
                  transform="translate(24 33)"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
              </g>
            </svg>

            <span class="box-title">学問</span>
          </div>
          <div class="box box-tech primary-color">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              viewBox="0 0 52 52"
            >
              <g id="Icon" transform="translate(1 1)">
                <circle
                  id="Icon-2"
                  data-name="Icon"
                  cx="25"
                  cy="25"
                  r="25"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <ellipse
                  id="Icon-3"
                  data-name="Icon"
                  cx="12"
                  cy="25"
                  rx="12"
                  ry="25"
                  transform="translate(13)"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  id="Icon-4"
                  data-name="Icon"
                  d="M0,0C4.585,2.666,11.379,4.354,18.963,4.354,26.356,4.354,33,2.749,37.577.2"
                  transform="translate(6.037 8.646)"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  id="Icon-5"
                  data-name="Icon"
                  d="M36.786,4.027C32.218,1.551,25.674,0,18.405,0S4.569,1.557,0,4.041"
                  transform="translate(6.595 37)"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  id="Icon-6"
                  data-name="Icon"
                  d="M0,.5H48"
                  transform="translate(1 24.5)"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
              </g>
            </svg>

            <span class="box-title">テクノロジー</span>
          </div>
          <div class="box box-business primary-color">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              viewBox="0 0 48 48"
            >
              <g id="Icon" transform="translate(1 1)">
                <circle
                  id="Icon-2"
                  data-name="Icon"
                  cx="23"
                  cy="23"
                  r="23"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <circle
                  id="Icon-3"
                  data-name="Icon"
                  cx="3"
                  cy="3"
                  r="3"
                  transform="translate(15 15)"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <circle
                  id="Icon-4"
                  data-name="Icon"
                  cx="3"
                  cy="3"
                  r="3"
                  transform="translate(25 25)"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  id="Icon-5"
                  data-name="Icon"
                  d="M0,15,15,0"
                  transform="translate(16 15)"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
              </g>
            </svg>
            <span class="box-title">ビジネス</span>
          </div>
          <div class="box box-lifestyle primary-color">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              viewBox="0 0 46 42.5"
            >
              <path
                id="Icon"
                d="M32,0a12,12,0,0,1,8.969,19.973L22,40.5,3.044,19.987A12,12,0,1,1,22,5.365,11.985,11.985,0,0,1,32,0Z"
                transform="translate(1 1)"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
              />
            </svg>

            <span class="box-title">ライフスタイル</span>
          </div>
        </div>
      </div>
    </div>

    <template v-if="loading">
      <div>読み込み中です</div>
    </template>
    <template v-else>
      <all-item :items="items" />
    </template>

    <FooterNav />
  </div>
</template>
<script>
import axios from 'axios'
import { getAuth } from 'firebase/auth'

// layout
import HeaderNav from '@/components/layout/header/HeaderNav'
import FooterNav from '@/components/layout/FooterNav'
// atoms
import AllItem from '@/components/atoms/item/AllItem'
import ReButton from '@/components/atoms/ReButton.vue'
import HeroImg from '@/components/atoms/images/top/HeroImg'

export default {
  components: {
    HeaderNav,
    FooterNav,
    AllItem,
    ReButton,
    HeroImg,
  },
  data() {
    return {
      items: [],
      loading: false,
      is_fb_authed: false,
    }
  },
  mounted() {
    this.getApi()

    const auth = getAuth()
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.is_fb_authed = true
        this.fb_user.name = user.displayName
      } else {
        this.is_fb_authed = false
      }
    })
  },
  methods: {
    async getApi() {
      axios.defaults.withCredentials = true
      // await axios.get('/sanctum/csrf-cookie').then(async () => {
      this.loading = true
      // })
      // this.$nuxt.$loading.start()
      return axios
        .get('/api/posts')
        .then((response) => {
          this.items = response.data.data
          // this.apiPopularTags = response.data.tags;
          this.loading = false
          // this.$nuxt.$loading.finish()
        })
        .catch((err) => {
          alert(err)
        })
    },
  },
}
</script>
<style lang="scss" scoped>
.hero {
  @apply w-full flex items-center mx-auto;
  background: var(--bg-secondary);
  max-height: calc(100vh - 65px);
  padding: 6.7% 0 6.7% 6.7%;
}
.title {
  @apply mb-2 font-bold;
  color: var(--color);
  font-size: 60px;
  line-height: 63px;
  text-align: left;
}
.describe {
  @apply inline-block mb-8;
  color: var(--color);
  // height: 67px;
  line-height: 21px;
  text-align: left;
}
.btn {
  @apply flex items-center justify-center font-bold duration-200 rounded-lg;
  width: 160px;
  height: 45px;
  color: var(--bg-secondary);
  background: rgba(var(--primary));
  &:hover {
    @apply shadow-lg;
  }
}
.box {
  @apply block flex flex-col items-center justify-center;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(38, 51, 77, 0.03);
  // border: 1px solidrgba(var(--primary));

  &:hover {
    @apply cursor-pointer;
  }
  &-business {
    @apply duration-200 mr-16;
    background: var(--bg-secondary);
    &:hover {
      transform: translateY(-5px);
    }
  }
  &-tech {
    @apply duration-200 mr-16;
    background: var(--bg-secondary);
    &:hover {
      transform: translateY(-5px);
    }
  }
  &-aca {
    @apply duration-200 mr-16;
    background: var(--bg-secondary);
    &:hover {
      transform: translateY(-5px);
    }
  }
  &-lifestyle {
    @apply duration-200;
    background: var(--bg-secondary);
    &:hover {
      transform: translateY(-5px);
    }
  }
  &-title {
    @apply text-left inline-block text-lg font-semibold;
    line-height: 20px;
    color: var(--color);
    margin-top: 20px;
  }
}
.field {
  @apply w-full;
  height: 150px;
  color: var(--bg-secondary);
  h3 {
    @apply text-4xl font-bold w-full h-full flex items-center justify-center;
    color: var(--bg-secondary);
  }
}
.side-nav {
  @apply hidden w-full lg:block lg:w-1/4 xl:w-1/5 z-10 lg:sticky overflow-y-auto;
  @screen lg {
    border-right: 1px #ddd solid;
  }
  // @screen lg {
  //   @apply overflow-y-auto;
  //   height: calc(100vh - 68px);
  // }
}
.main-body {
  // @apply w-full lg:w-3/4 xl:w-3/5 pt-10 px-6 lg:px-12;
  // @apply w-full lg:w-3/4 xl:w-3/5 p-6;
  @apply w-full lg:w-3/4 xl:w-4/5 p-6 lg:pl-10;
  // @screen lg {
  //   @apply overflow-y-auto;
  //   height: calc(100vh - 68px);
  // }
}
</style>
