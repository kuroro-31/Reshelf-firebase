<template>
  <div class="w-full h-screen mx-auto flex flex-col scroll-none">
    <div class="body">
      <nav class="side-nav lg:max-h-(screen-22) pin-22 scroll-none">
        <NuxtLink to="/" class="title-link">
          <h1>
            <img
              src="https://res.cloudinary.com/reshelf/image/upload/v1619871156/Logo_pfuaao.svg"
              alt="Reshelf Logo"
              width="112"
              height="24"
              class="responsive"
            />
          </h1>
        </NuxtLink>

        <div class="w-full ml-auto mt-8">
          <SidebarTac />
        </div>
      </nav>
      <div class="card-lg main-body scroll-none">
        <!-- ジャンル -->
        <div
          class="chapter"
          @mouseover="chapter = true"
          @mouseleave="chapter = false"
        >
          <div class="chapter-title">
            Chapter
            <chevron-down-icon
              size="1x"
              class="chapter-icon"
            ></chevron-down-icon>
          </div>
          <transition>
            <div v-if="chapter">
              <div
                class="chapter-contents"
                @mouseover="chapter = true"
                @mouseleave="chapter = false"
              >
                <div class="p-8">チャプター一覧</div>
              </div>
            </div>
          </transition>
        </div>

        <div class="main-body-content">
          <!-- <span class="text-xl text-gray inline-block mb-2">Tutorial</span> -->
          <h2 class="text-3xl font-bold mb-4 flex items-center">
            Laravel(+Vue.js)でSNS風Webサービスを作ろう
          </h2>
          <!-- <all-item :items="items" /> -->
        </div>

        <div class="chapter">
          <a class="chapter-prev">
            <chevron-left-icon
              size="1.5x"
              class="chapter-prev-icon"
            ></chevron-left-icon>
            <div class="chapter-prev-body">
              <span class="chapter-prev-title">PREV</span>
              <span class="chapter-next-content">
                はじめに。。。。。。。。。。。。。
              </span>
            </div>
          </a>
          <a class="chapter-next">
            <div class="chapter-next-body">
              <span class="chapter-next-title">NEXT</span>
              <span class="chapter-next-content">
                次になんとかするゾゾゾゾゾゾゾゾゾゾゾゾゾゾゾゾゾゾゾゾゾゾゾゾゾゾゾ
              </span>
            </div>
            <chevron-right-icon
              size="1.5x"
              class="chapter-next-icon"
            ></chevron-right-icon>
          </a>
        </div>
      </div>
      <div class="right-side">
        <SidebarQa />
      </div>
    </div>
    <!-- <FooterNav /> -->
  </div>
</template>
<script>
// import FooterNav from '@/components/layout/FooterNav'
import SidebarTac from '@/components/layout/sidebar/item/SidebarTac'
import SidebarQa from '@/components/layout/sidebar/item/SidebarQa'
// atoms
export default {
  components: {
    // FooterNav,
    SidebarTac,
    SidebarQa,
  },
  middleware: 'authenticated',
  data() {
    return {
      chapter: false,
    }
  },
}
</script>
<style lang="scss" scoped>
.body {
  @apply lg:flex w-full relative justify-between;
}
.side-nav {
  @apply hidden overflow-y-auto p-10;
  @screen lg {
    @apply fixed block left-0 top-0 bottom-0;
    width: 20%;
  }
}
.main-body {
  @apply relative;
  @screen lg {
    margin-left: 20%;
    width: 50%;
  }
  height: 2000px;
}
.right-side {
  @apply hidden overflow-y-auto p-10;
  @screen lg {
    @apply fixed block right-0 top-0 bottom-0;
    width: 30%;
  }
}
.chapter {
  @apply flex items-center justify-between text-xs mb-4;
  color: var(--sub-color);
  &-title {
    @apply flex items-center font-bold cursor-pointer rounded py-2 px-4;
    border: 2px solid var(--eee);
  }
  &-icon {
    @apply flex-shrink-0 inline-block cursor-pointer ml-4;
  }
  &-contents {
    @apply absolute top-0 left-0 ml-10 z-50 rounded shadow-lg overflow-y-auto cursor-default;
    background-color: var(--bg-secondary);
    @screen lg {
      margin-top: 70px;
      width: 400px;
      max-height: 500px;
    }
  }
  &-prev {
    @apply inline-flex justify-start items-center rounded p-4 cursor-pointer;
    width: 300px;
    height: 100px;
    border: 2px solid var(--gray);
    &:hover {
      border: 2px solidrgba(var(--primary));
    }
    &-icon {
      @apply text-primary inline-block;
    }
    &-body {
      @apply flex flex-col w-full ml-8;
      max-width: 212px;
    }
    &-title {
      @apply w-full h-1/2 pb-2 font-bold text-left;
      color: var(--sub-color);
    }
    &-content {
      @apply h-1/2 text-left truncate;
    }
  }
  &-next {
    @apply inline-flex justify-end items-center rounded p-4 cursor-pointer;
    width: 300px;
    height: 100px;
    border: 2px solid var(--gray);
    &:hover {
      border: 2px solidrgba(var(--primary));
    }
    &-icon {
      @apply text-primary inline-block;
    }
    &-body {
      @apply flex flex-col w-full mr-8;
      max-width: 212px;
    }
    &-title {
      @apply w-full h-1/2 pb-2 font-bold text-right;
      color: var(--sub-color);
    }
    &-content {
      @apply h-1/2 text-left truncate;
    }
  }
}
</style>
