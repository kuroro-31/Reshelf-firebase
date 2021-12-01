<template>
  <div
    v-if="is_fb_authed"
    class="w-full h-screen mx-auto flex flex-col scroll-none"
  >
    <HeaderNav />
    <div class="w-full flex max-w-screen-xl mx-auto container scroll-none">
      <div class="lg:flex w-full">
        <nav
          class="card side-nav lg:max-h-(screen-22) pin-22 scroll-none mb-auto"
        >
          <SidebarSetting class="divider" />
          <SidebarStudent class="divider" />
          <SidebarTeacher />
        </nav>
        <div class="main-body scroll-none">
          <div class="main-body-content">
            <h2 class="text-3xl font-bold mb-4">プロフィール編集</h2>
            <div class="w-full">
              <div class="max-w-5xl mx-auto mb-12">
                <div class="bg-white w-full rounded p-8 sm:p-12">
                  <form action="" method="post">
                    <div v-if="fb_user.name" class="md:flex items-center">
                      <div class="w-full flex flex-col">
                        <label class="font-semibold leading-none">Name</label>
                        <input
                          type="text"
                          class="
                            leading-none
                            text-gray-900
                            p-3
                            focus:outline-none focus:border-blue-700
                            mt-4
                            bg-gray-100
                            border
                            rounded
                            border-gray-200
                          "
                          :value="fb_user.name"
                        />
                      </div>
                    </div>
                    <div v-if="fb_user.email" class="md:flex items-center mt-8">
                      <div class="w-full flex flex-col">
                        <label class="font-semibold leading-none">Email</label>
                        <input
                          type="text"
                          class="
                            leading-none
                            text-gray-900
                            p-3
                            focus:outline-none focus:border-blue-700
                            mt-4
                            bg-gray-200
                            border
                            rounded
                            border-gray-200
                          "
                          :value="fb_user.email"
                          disabled
                        />
                      </div>
                    </div>
                    <div class="flex items-center justify-center w-full">
                      <button
                        class="
                          mt-9
                          font-semibold
                          leading-none
                          text-white
                          py-4
                          px-10
                          bg-blue-700
                          rounded
                          hover:bg-blue-600
                          focus:ring-2
                          focus:ring-offset-2
                          focus:ring-blue-700
                          focus:outline-none
                        "
                        @click="updateProfile"
                      >
                        更新する
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <FooterNav /> -->
  </div>
</template>
<script>
import { firebaseAuth, updateUser } from '@/mixins/firebaseUtil.js'
// layout
import HeaderNav from '@/components/layout/header/HeaderNav'
// import FooterNav from '@/components/layout/FooterNav'
import SidebarSetting from '@/components/layout/sidebar/SidebarSetting'
import SidebarTeacher from '@/components/layout/sidebar/SidebarTeacher'
import SidebarStudent from '@/components/layout/sidebar/SidebarStudent'
// atoms
// import AllItem from '@/components/atoms/item/AllItem'

export default {
  components: {
    HeaderNav,
    // FooterNav,
    SidebarSetting,
    SidebarTeacher,
    SidebarStudent,
    // AllItem,
  },
  mixins: [firebaseAuth, updateUser],
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.side-nav {
  @apply hidden w-full lg:block my-6 lg:w-1/4 xl:w-1/5 z-10 lg:sticky overflow-y-auto;
  // @screen lg {
  //   border-right: 1px #ddd solid;
  // }
  // @screen lg {
  //   @apply overflow-y-auto;
  //   max-height: calc(100vh - 68px - 48px);
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
