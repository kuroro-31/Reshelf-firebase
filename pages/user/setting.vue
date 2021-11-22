<template>
  <div class="w-full h-screen mx-auto flex flex-col scroll-none">
    <HeaderNav />
    <div class="w-full flex max-w-screen-lg mx-auto container scroll-none">
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
            <h2 class="text-3xl font-bold mb-4">アカウント設定</h2>
            <!-- <all-item :items="items" /> -->
          </div>
        </div>
      </div>
    </div>
    <!-- <FooterNav /> -->
  </div>
</template>
<script>
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
  middleware: 'authenticated',
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
