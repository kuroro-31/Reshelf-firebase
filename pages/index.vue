<template>
  <div class="w-full mx-auto flex flex-col scroll-none">
    <HeaderNav />

    <div v-if="!isLogined" class="hero">
      <div class="flex lg:w-1/2 justify-center h-full items-center">
        <div class="flex flex-col">
          <h2 class="title">
            あなたの学習が
            <br />
            たったの3分から。
          </h2>
          <span class="describe">
            Reshelfは、プログラミング学習教材のマーケットプレイスです。
            受講者による教材評価から教材を循環し、専門知識のある講師と受講者をつなぐプラットホームを体験できます。
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
      <div class="main-img">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="691"
          height="721"
          viewBox="0 0 691 721"
        >
          <defs>
            <clipPath id="clip-path">
              <rect
                id="長方形_2235"
                data-name="長方形 2235"
                width="691"
                height="721"
                transform="translate(779 9022)"
                fill="#fff"
              />
            </clipPath>
          </defs>
          <g
            id="Device_screen"
            data-name="Device &amp; screen"
            transform="translate(-779 -9022)"
            clip-path="url(#clip-path)"
          >
            <g
              id="グループ_1281"
              data-name="グループ 1281"
              transform="translate(22 -3271)"
            >
              <g
                id="グループ_1276"
                data-name="グループ 1276"
                transform="translate(874 12301)"
              >
                <rect
                  id="長方形_942"
                  data-name="長方形 942"
                  width="811.778"
                  height="577.7"
                  transform="translate(0 0)"
                  fill="none"
                  stroke="#5a80fb"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <rect
                  id="長方形_943"
                  data-name="長方形 943"
                  width="811.778"
                  height="537.342"
                  transform="translate(0 40.358)"
                  fill="#edf1fe"
                  stroke="#5a80fb"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <g
                  id="グループ_1275"
                  data-name="グループ 1275"
                  transform="translate(17.066 16.259)"
                >
                  <ellipse
                    id="楕円形_58"
                    data-name="楕円形 58"
                    cx="4.151"
                    cy="4.151"
                    rx="4.151"
                    ry="4.151"
                    transform="translate(0 0)"
                    fill="#5a80fb"
                  />
                  <ellipse
                    id="楕円形_59"
                    data-name="楕円形 59"
                    cx="4.151"
                    cy="4.151"
                    rx="4.151"
                    ry="4.151"
                    transform="translate(16.316 0)"
                    fill="#5a80fb"
                  />
                  <ellipse
                    id="楕円形_60"
                    data-name="楕円形 60"
                    cx="4.151"
                    cy="4.151"
                    rx="4.151"
                    ry="4.151"
                    transform="translate(32.69 0)"
                    fill="#5a80fb"
                  />
                </g>
              </g>
              <g
                id="グループ_1277"
                data-name="グループ 1277"
                transform="translate(1260.214 12562.524)"
              >
                <path
                  id="パス_12"
                  data-name="パス 12"
                  d="M0,952.4v68.408H98.336V952.4H0Zm6.413,6.413h85.51v43.076L75.035,983.4a3.315,3.315,0,0,0-2.565-1.069,3.924,3.924,0,0,0-2.138.962L55.8,998.682,34.418,974.846a2.992,2.992,0,0,0-2.565-1.069,3.074,3.074,0,0,0-2.138.962l-23.3,25.012Zm50.237,2.138a9.62,9.62,0,1,0,9.62,9.62A9.718,9.718,0,0,0,56.65,960.951Zm0,6.413a3.207,3.207,0,1,1-3.207,3.207A3.149,3.149,0,0,1,56.65,967.364ZM31.959,981.687l29.18,32.707H6.413v-5.13Zm40.724,8.551,19.24,21.057v2.993H69.8l-9.727-10.9Z"
                  transform="translate(0 -952.4)"
                  fill="#fff"
                />
              </g>
              <g
                id="グループ_1279"
                data-name="グループ 1279"
                transform="translate(810 12445.2)"
              >
                <path
                  id="パス_2582"
                  data-name="パス 2582"
                  d="M41.1,544.1A32.146,32.146,0,0,1,9,512V33.1A32.1,32.1,0,0,1,41.1,1H241.318a32.146,32.146,0,0,1,32.1,32.1V512a32.146,32.146,0,0,1-32.1,32.1Z"
                  transform="translate(-2.537)"
                  fill="#fff"
                  stroke="#5a80fb"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  id="パス_2583"
                  data-name="パス 2583"
                  d="M244.421,540.442H44.267A25.3,25.3,0,0,1,19,515.175V36.267A25.3,25.3,0,0,1,44.267,11H244.489a25.3,25.3,0,0,1,25.267,25.267V515.175A25.355,25.355,0,0,1,244.421,540.442Z"
                  transform="translate(-5.708 -3.171)"
                  fill="rgba(255,255,255,0)"
                  stroke="#5a80fb"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <rect
                  id="長方形_941"
                  data-name="長方形 941"
                  width="223.304"
                  height="430.219"
                  transform="translate(26.95 55.289)"
                  fill="#edf1fe"
                  stroke="#5a80fb"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <circle
                  id="楕円形_55"
                  data-name="楕円形 55"
                  cx="4.097"
                  cy="4.097"
                  r="4.097"
                  transform="translate(92.917 31.798)"
                  fill="none"
                  stroke="#5a80fb"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  id="パス_2584"
                  data-name="パス 2584"
                  d="M211.578,53.846H173.132a2.74,2.74,0,0,1-2.732-2.732v-.683a2.74,2.74,0,0,1,2.732-2.732h38.447a2.74,2.74,0,0,1,2.732,2.732v.683A2.74,2.74,0,0,1,211.578,53.846Z"
                  transform="translate(-53.719 -14.809)"
                  fill="none"
                  stroke="#5a80fb"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <circle
                  id="楕円形_56"
                  data-name="楕円形 56"
                  cx="3.278"
                  cy="3.278"
                  r="3.278"
                  transform="translate(135.324 18.755)"
                  fill="#5a80fb"
                />
                <circle
                  id="楕円形_57"
                  data-name="楕円形 57"
                  cx="18.096"
                  cy="18.096"
                  r="18.096"
                  transform="translate(120.505 493.635)"
                  fill="none"
                  stroke="#5a80fb"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  id="パス_2585"
                  data-name="パス 2585"
                  d="M6.463,100.782H5.1a4.109,4.109,0,0,1-4.1-4.1V84.6a4.109,4.109,0,0,1,4.1-4.1H6.463Z"
                  transform="translate(0 -25.211)"
                  fill="none"
                  stroke="#5a80fb"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  id="パス_2586"
                  data-name="パス 2586"
                  d="M6.463,164.824H5.1a4.109,4.109,0,0,1-4.1-4.1V124.4a4.109,4.109,0,0,1,4.1-4.1H6.463Z"
                  transform="translate(0 -37.832)"
                  fill="none"
                  stroke="#5a80fb"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  id="パス_2587"
                  data-name="パス 2587"
                  d="M6.463,239.724H5.1a4.109,4.109,0,0,1-4.1-4.1V199.3a4.109,4.109,0,0,1,4.1-4.1H6.463Z"
                  transform="translate(0 -61.583)"
                  fill="none"
                  stroke="#5a80fb"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  id="パス_2588"
                  data-name="パス 2588"
                  d="M396.1,120.3h1.366a4.109,4.109,0,0,1,4.1,4.1v36.33a4.109,4.109,0,0,1-4.1,4.1H396.1Z"
                  transform="translate(-125.291 -37.832)"
                  fill="none"
                  stroke="#5a80fb"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
              </g>
              <g
                id="グループ_1280"
                data-name="グループ 1280"
                transform="translate(899.214 12683.524)"
              >
                <path
                  id="パス_12-2"
                  data-name="パス 12"
                  d="M0,952.4v68.408H98.336V952.4H0Zm6.413,6.413h85.51v43.076L75.035,983.4a3.315,3.315,0,0,0-2.565-1.069,3.924,3.924,0,0,0-2.138.962L55.8,998.682,34.418,974.846a2.992,2.992,0,0,0-2.565-1.069,3.074,3.074,0,0,0-2.138.962l-23.3,25.012Zm50.237,2.138a9.62,9.62,0,1,0,9.62,9.62A9.718,9.718,0,0,0,56.65,960.951Zm0,6.413a3.207,3.207,0,1,1-3.207,3.207A3.149,3.149,0,0,1,56.65,967.364ZM31.959,981.687l29.18,32.707H6.413v-5.13Zm40.724,8.551,19.24,21.057v2.993H69.8l-9.727-10.9Z"
                  transform="translate(0 -952.4)"
                  fill="#fff"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>

    <!-- 学習分野 -->
    <div>
      <div class="field bg-primary">
        <h3>学習分野</h3>
      </div>
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
import ReButton from '../components/atoms/ReButton.vue'

export default {
  components: {
    HeaderNav,
    FooterNav,
    AllItem,
    ReButton,
  },
  data() {
    return {
      items: [],
      loading: false,
      isLogined: false,
    }
  },
  mounted() {
    this.getApi()

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
.main-img {
  @apply w-1/2 h-full flex items-center;
  svg {
    @apply w-full h-full;
  }
  // svg g path,
  // svg g circle,
  // svg g ellipse,
  // svg path {
  //   stroke: rgba(var(--primary));
  // }
}
.title {
  @apply mb-2;
  color: var(--color);
  font-size: 60px;
  line-height: 74px;
  text-align: left;
}
.describe {
  @apply inline-block text-xl font-semibold mb-8;
  color: var(--sub-color);
  height: 67px;
  line-height: 24px;
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
