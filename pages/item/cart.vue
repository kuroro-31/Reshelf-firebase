<template>
  <div class="w-full h-screen mx-auto flex flex-col scroll-none">
    <HeaderNav />
    <div class="main scroll-none">
      <span class="title">ショッピングカート</span>

      <div class="lg:flex w-full">
        <div class="main-body min-h-(screen-16) scroll-none">
          <CartItem :items="items" />
          <!-- <FooterNav /> -->
        </div>
        <nav class="side-nav lg:max-h-(screen-22) pin-22 scroll-none">
          <SidebarCart :items="items" />
        </nav>
      </div>
    </div>
    <!-- <FooterNav /> -->
  </div>
</template>
<script>
// layout
import HeaderNav from '@/components/layout/header/HeaderNav'
// import FooterNav from '@/components/layout/FooterNav'
import SidebarCart from '@/components/layout/sidebar/item/SidebarCart'
// atoms
import CartItem from '@/components/atoms/item/CartItem'

export default {
  auth: false,
  components: {
    // FooterNav,
    SidebarCart,
    CartItem,
    HeaderNav,
  },
  middleware: 'authenticated',
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
        {
          // キー
          id: 2,
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
  @apply w-full flex flex-col max-w-screen-lg mx-auto container mt-10;
}
.title {
  @apply font-bold cursor-pointer text-3xl mb-4 pb-2;
  border-bottom: 1px var(--thin-gray) solid;
}
.side-nav {
  @apply hidden w-full lg:block lg:w-1/4 pl-6 z-10 lg:sticky overflow-y-auto;
  // @screen lg {
  //   border-right: 1px var(--thin-gray) solid;
  // }
}
.main-body {
  // @apply w-full lg:w-3/4 xl:w-3/5 pt-10 px-6 lg:px-12;
  // @apply w-full lg:w-3/4 xl:w-3/5 p-6;
  @apply w-full lg:w-3/4 px-6 lg:pl-0;
}
</style>
