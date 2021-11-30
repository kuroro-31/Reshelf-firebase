<template>
  <div class="w-full h-screen mx-auto flex flex-col scroll-none">
    <hero-item />
    <div class="main scroll-none">
      <div class="lg:flex w-full">
        <div class="main-body min-h-(screen-16) scroll-none">
          <DetailItem :items="items" />
          <!-- <FooterNav /> -->
        </div>
        <nav class="side-nav lg:max-h-(screen-22) pin-22 scroll-none">
          <SidebarDetail :items="items" />
        </nav>
      </div>
    </div>
    <!-- <FooterNav /> -->
  </div>
</template>
<script>
// layout
// import FooterNav from '@/components/layout/FooterNav'
import SidebarDetail from '@/components/layout/sidebar/item/SidebarDetail'
// atoms
import HeroItem from '@/components/atoms/item/HeroItem'
import DetailItem from '@/components/atoms/item/DetailItem'

export default {
  auth: false,
  components: {
    // FooterNav,
    HeroItem,
    SidebarDetail,
    DetailItem,
  },

  data() {
    return {
      items: [
        {
          // キー
          id: 1,
          // レベル
          level: '初級',
          // 画像
          src: 'https://i.gyazo.com/3361b22275519a99133abe27ea99f34c.png',
          // タイトル
          title: 'ゼロからはじめる Dockerによるアプリケーション実行環境構築',
          // 概要
          describe:
            'コンテナの実行方法を学び、Ruby on RailsやDjangoといったWebアプリケーションフレームワークを使用した環境構築について学びます。Docker MachineやSwarmといったDocker関連技術についても学びます。',
          // セール価格
          rate: 4.7,
          all_rate: 4.7,
          sale_price: '3500',
          normal_price: '5000',
          // 作者
          name: 'クラピカ',
          // タグ
          tags: ['phase1', 'btn', 'rakuten'],
          // 日付
          add_time: '2021/06/23',
          edit_time: '2021/06/23',
          // でもページ
          demo: '#',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.main {
  @apply w-full flex max-w-screen-xl mx-auto container;
  margin-top: -420px;
}
.side-nav {
  @apply hidden w-full lg:block lg:w-1/4 pl-6 z-10 lg:sticky overflow-y-auto;
  // @screen lg {
  //   border-right: 1px var(--thin-gray) solid;
  // }
  @screen lg {
    @apply overflow-y-auto;
    height: calc(100vh - 68px);
  }
}
.main-body {
  // @apply w-full lg:w-3/4 xl:w-3/5 pt-10 px-6 lg:px-12;
  // @apply w-full lg:w-3/4 xl:w-3/5 p-6;
  @apply w-full lg:w-3/4 px-6 lg:pl-0;
  @screen lg {
    @apply overflow-y-auto;
    height: calc(100vh - 68px);
  }
}
</style>
