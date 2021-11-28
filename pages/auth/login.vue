<template>
  <div class="relative">
    <div id="login" class="login">
      <div class="w-full h-full flex items-center justify-center">
        <div class="login-title flex flex-col z-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="250"
            viewBox="0 0 363.688 85.19"
          >
            <g
              id="グループ_86"
              data-name="グループ 86"
              transform="translate(-1127.313 2504.095)"
            >
              <g id="logo" transform="translate(1127.513 -2504.095)">
                <path
                  id="パス_523"
                  data-name="パス 523"
                  d="M603.357,253.269a3.029,3.029,0,0,0-.018-.316,5.945,5.945,0,0,0-.436-1.866c-.831-2.559-2.475-5.853-2.043-7.581a20.617,20.617,0,0,0-4.2-17.924,40.98,40.98,0,0,0-45.622-13.431c-4.123,1.425-13.165-8.58-34.852,11.5l14.174,3.378h0c-.125.1.043-.207,0,0-4.321,6.362-6.917,15.4-6.916,23.859,0,.427,0,.851.02,1.274l-.02-.025a42.91,42.91,0,0,0,42.91,42.91,74.709,74.709,0,0,0,11.919-.568c8.854-.908,9.406-2.838,13.282-2.838,4.087,0,6.13,1.362,6.811.454s-2.27-6.357-2.5-9.99.227-9.99-.454-9.763-4.768,4.768-7.492,7.038-4.541,2.952-4.768,3.633,0,2.043-.681,2.5a22.731,22.731,0,0,1-15.665,1.528,24.406,24.406,0,0,1-15.13-42,23.9,23.9,0,0,1,3.558,8.7c.681,4.541.681,8.328.795,8.818s.795.263,1.249-.191,7.038-3.86,8.627-9.309c1.569-5.383,2.252-8.332,2.043-14.757h.561a24.417,24.417,0,0,1,23.541,17.941,6.012,6.012,0,0,0,11.309-2.847v-.114Z"
                  transform="translate(-516.383 -209.9)"
                  fill="#fff"
                />
              </g>
              <text
                id="Reshelf_"
                data-name="Reshelf "
                transform="translate(1239 -2440)"
                fill="#fff"
                font-size="60"
                font-family="Montserrat-Bold, Montserrat"
                font-weight="700"
              >
                <tspan x="0" y="0">Reshelf</tspan>
              </text>
            </g>
          </svg>

          <h2>ログインまたはアカウントを作成</h2>
        </div>
        <div class="login-content">
          <div class="bg-white shadow w-full divide-y divide-gray-200">
            <div class="px-5 py-7 w-full mx-auto flex justify-center">
              <FacebookLogin class="w-full mx-auto" />
            </div>

            <div class="py-5">
              <div class="grid grid-cols-2 gap-1">
                <div class="text-center sm:text-left whitespace-nowrap">
                  <nuxt-link
                    class="
                      transition
                      duration-200
                      mx-5
                      px-5
                      py-4
                      cursor-pointer
                      font-normal
                      text-xs
                      rounded
                      text-gray-500
                      hover:bg-gray-100
                      focus:outline-none
                      focus:bg-gray-200
                      focus:ring-2
                      focus:ring-gray-400
                      focus:ring-opacity-50
                      ring-inset
                    "
                    to="/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="w-4 h-4 inline-block align-text-top"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                    <span class="inline-block ml-1">Back to your-app.com</span>
                  </nuxt-link>
                </div>
                <div class="text-center sm:text-right whitespace-nowrap">
                  <button
                    class="
                      transition
                      duration-200
                      mx-5
                      px-5
                      py-4
                      cursor-pointer
                      font-normal
                      text-xs
                      rounded
                      text-gray-500
                      hover:bg-gray-100
                      focus:outline-none
                      focus:bg-gray-200
                      focus:ring-2
                      focus:ring-gray-400
                      focus:ring-opacity-50
                      ring-inset
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="w-4 h-4 inline-block align-text-bottom"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <span class="inline-block ml-1">Help</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="bg"></div> -->
  </div>
</template>
<script>
import FacebookLogin from '@/components/atoms/auth/FacebookLogin.vue'
export default {
  components: {
    FacebookLogin,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.login {
  @apply h-screen w-screen overflow-hidden flex justify-center;
  // background-image: url('https://source.unsplash.com/1920x1080/?happy');
  // background-position: center !important;
  // background-repeat: no-repeat !important;
  background: #ee965a; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #ac9df5,
    #ee965a
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #ac9df5,
    #ee965a
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  object-fit: cover !important;
  &-title {
    h2 {
      @apply text-2xl font-bold mt-4;
      color: var(--fff);
    }
  }
  &-content {
    @apply z-20 md:ml-28 rounded-lg;
  }
}
.bg {
  @apply absolute w-screen h-screen top-0 right-0 left-0 bottom-0 m-0 p-0 z-10;
  background: rgba(#000000, 0.4);
}
</style>
