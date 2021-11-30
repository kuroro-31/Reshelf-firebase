<template>
  <div class="w-full mx-auto flex flex-col scroll-none">
    <HeaderNav />
    <div class="w-full flex max-w-screen-xl mx-auto container">
      <div class="lg:flex w-full">
        <nav class="side-nav lg:max-h-(screen-22) pin-22">
          <SidebarSearch />
        </nav>
        <div class="main-body min-h-(screen-16)">
          <!-- <hero-item /> -->
          <all-item :items="items" />
          <!-- <FooterNav /> -->
        </div>
      </div>
    </div>
    <FooterNav />
  </div>
</template>
<script>
import axios from 'axios'

// layout
import HeaderNav from '@/components/layout/header/HeaderNav'
import FooterNav from '@/components/layout/FooterNav'
import SidebarSearch from '@/components/layout/sidebar/SidebarSearch'
// atoms
// import HeroItem from '@/components/pages/top/HeroItem'
import AllItem from '@/components/atoms/item/AllItem'

export default {
  components: {
    HeaderNav,
    FooterNav,
    SidebarSearch,
    // HeroItem,
    AllItem,
  },
  data() {
    return {
      // items: [
      //   {
      //     // キー
      //     id: 1,
      //     // レベル
      //     level: '初級',
      //     // 画像
      //     src: 'https://i.gyazo.com/3361b22275519a99133abe27ea99f34c.png',
      //     // タイトル
      //     title: 'ゼロからはじめる Dockerによるアプリケーション実行環境構築',
      //     // 概要
      //     describe:
      //       'コンテナの実行方法を学び、Ruby on RailsやDjangoといったWebアプリケーションフレームワークを使用した環境構築について学びます。Docker MachineやSwarmといったDocker関連技術についても学びます。',
      //     // セール価格
      //     rate: 4.7,
      //     all_rate: 4.7,
      //     sale_price: '3500',
      //     normal_price: '5000',
      //     // 作者
      //     name: 'クラピカ',
      //     // タグ
      //     tags: ['phase1', 'btn', 'rakuten'],
      //     // 日付
      //     add_time: '2021/06/23',
      //     edit_time: '2021/06/23',
      //     // でもページ
      //     demo: '#',
      //   },
      //   {
      //     // キー
      //     id: 2,
      //     // レベル
      //     level: '中級',
      //     // 画像
      //     src: 'https://i.gyazo.com/2426266562352e572dccf61b6903cf74.png',
      //     // タイトル
      //     title:
      //       'AWS：ゼロから実践するAmazon Web Services。手を動かしながらインフラの基礎を習得',
      //     // 概要
      //     describe:
      //       'インフラがあまり詳しくない方ももう大丈夫。実際にやってみることで、AWSのエッセンスが身に付き、自分でネットワークやサーバーを構築できるようになります。',
      //     // セール価格
      //     rate: 3.8,
      //     all_rate: 4.0,
      //     sale_price: '5250',
      //     normal_price: '7500',
      //     // 作者
      //     name: 'クロロ・ルシルフル',
      //     // タグ
      //     tags: ['phase1', 'btn', 'rakuten'],
      //     // 日付
      //     add_time: '2021/06/23',
      //     edit_time: '2021/06/23',
      //     // でもページ
      //     demo: '#',
      //   },
      //   {
      //     // キー
      //     id: 3,
      //     // レベル
      //     level: '上級',
      //     // 画像
      //     src: 'https://i.gyazo.com/752ac2b7f73248d4a65cbcf720542510.png',
      //     // タイトル
      //     title:
      //       '【JavaScript＆CSS】ガチで学びたい人のためのWEB開発徹底実践（フロントエンド編）',
      //     // 概要
      //     describe:
      //       '基礎を終えた方に最適！基礎レベルから一気にプロレベルへ！JavaScript、CSSの基礎～実践までを最短で学習。世界が変わる１９時間。',
      //     // セール価格
      //     rate: 3.2,
      //     all_rate: 3.3,
      //     sale_price: '7000',
      //     normal_price: '10000',
      //     // 作者
      //     name: 'フェイタン',
      //     // タグ
      //     tags: ['phase1', 'btn', 'rakuten'],
      //     // 日付
      //     add_time: '2021/06/23',
      //     edit_time: '2021/06/23',
      //     // でもページ
      //     demo: '#',
      //   },
      //   {
      //     // キー
      //     id: 4,
      //     // レベル
      //     level: '特級',
      //     // 画像
      //     src: 'https://i.gyazo.com/7634abee15be2ce3313521bdc58aaf74.png',
      //     // タイトル
      //     title:
      //       '「世界で7万人が受講！未経験からWebプログラマーになるための全て」2018年最新版',
      //     // 概要
      //     describe:
      //       'Masaaki Hatano 監修、2018年の最新版へupdate済み（初心者向け・日本語吹き替え版）',
      //     // セール価格
      //     rate: 3.6,
      //     all_rate: 4.7,
      //     sale_price: '1750',
      //     normal_price: '2500',
      //     // 作者
      //     name: 'ヒソカ',
      //     // タグ
      //     tags: ['phase1', 'btn', 'rakuten'],
      //     // 日付
      //     add_time: '2021/06/23',
      //     edit_time: '2021/06/23',
      //     // でもページ
      //     demo: '#',
      //   },
      //   {
      //     // キー
      //     id: 5,
      //     // レベル
      //     level: '中級',
      //     // 画像
      //     src: 'https://i.gyazo.com/d7b583e673842f2d6f1f0fef1f66f3a7.png',
      //     // タイトル
      //     title: 'Node.js + Express で作る Webアプリケーション 実践講座',
      //     // 概要
      //     describe:
      //       'Node.js , Express, MongoDB を用いた Webアプリケーション開発 をするために必要な基礎知識を学習し、現場で実践できるようになることを目指します。',
      //     c: '0',
      //     // 作者
      //     name: 'マチ',
      //     // セール価格
      //     rate: 4.0,
      //     all_rate: 4.7,
      //     sale_price: '0',
      //     normal_price: '0',
      //     // タグ
      //     tags: ['phase1', 'btn', 'rakuten'],
      //     // 日付
      //     add_time: '2021/06/23',
      //     edit_time: '2021/06/23',
      //     // でもページ
      //     demo: '#',
      //   },
      //   {
      //     // キー
      //     id: 6,
      //     // レベル
      //     level: '初級',
      //     // 画像
      //     src: 'https://i.gyazo.com/3361b22275519a99133abe27ea99f34c.png',
      //     // タイトル
      //     title: 'ゼロからはじめる Dockerによるアプリケーション実行環境構築',
      //     // 概要
      //     describe:
      //       'コンテナの実行方法を学び、Ruby on RailsやDjangoといったWebアプリケーションフレームワークを使用した環境構築について学びます。Docker MachineやSwarmといったDocker関連技術についても学びます。',
      //     // セール価格
      //     rate: 2.6,
      //     all_rate: 4.7,
      //     sale_price: '3500',
      //     normal_price: '5000',
      //     // 作者
      //     name: 'クラピカ',
      //     // タグ
      //     tags: ['phase1', 'btn', 'rakuten'],
      //     // 日付
      //     add_time: '2021/06/23',
      //     edit_time: '2021/06/23',
      //     // でもページ
      //     demo: '#',
      //   },
      //   {
      //     // キー
      //     id: 7,
      //     // レベル
      //     level: '上級',
      //     // 画像
      //     src: 'https://i.gyazo.com/2426266562352e572dccf61b6903cf74.png',
      //     // タイトル
      //     title:
      //       'AWS：ゼロから実践するAmazon Web Services。手を動かしながらインフラの基礎を習得',
      //     // 概要
      //     describe:
      //       'インフラがあまり詳しくない方ももう大丈夫。実際にやってみることで、AWSのエッセンスが身に付き、自分でネットワークやサーバーを構築できるようになります。',
      //     // セール価格
      //     rate: 3.7,
      //     all_rate: 4.7,
      //     sale_price: '5250',
      //     normal_price: '7500',
      //     // 作者
      //     name: 'クロロ・ルシルフル',
      //     // タグ
      //     tags: ['phase1', 'btn', 'rakuten'],
      //     // 日付
      //     add_time: '2021/06/23',
      //     edit_time: '2021/06/23',
      //     // でもページ
      //     demo: '#',
      //   },
      //   {
      //     // キー
      //     id: 8,
      //     // レベル
      //     level: '特級',
      //     // 画像
      //     src: 'https://i.gyazo.com/752ac2b7f73248d4a65cbcf720542510.png',
      //     // タイトル
      //     title:
      //       '【JavaScript＆CSS】ガチで学びたい人のためのWEB開発徹底実践（フロントエンド編）',
      //     // 概要
      //     describe:
      //       '基礎を終えた方に最適！基礎レベルから一気にプロレベルへ！JavaScript、CSSの基礎～実践までを最短で学習。世界が変わる１９時間。',
      //     // セール価格
      //     rate: 4.8,
      //     all_rate: 4.7,
      //     sale_price: '7000',
      //     normal_price: '10000',
      //     // 作者
      //     name: 'フェイタン',
      //     // タグ
      //     tags: ['phase1', 'btn', 'rakuten'],
      //     // 日付
      //     add_time: '2021/06/23',
      //     edit_time: '2021/06/23',
      //     // でもページ
      //     demo: '#',
      //   },
      //   {
      //     // キー
      //     id: 9,
      //     // レベル
      //     level: '初級',
      //     // 画像
      //     src: 'https://i.gyazo.com/7634abee15be2ce3313521bdc58aaf74.png',
      //     // タイトル
      //     title:
      //       '「世界で7万人が受講！未経験からWebプログラマーになるための全て」2018年最新版',
      //     // 概要
      //     describe:
      //       'Masaaki Hatano 監修、2018年の最新版へupdate済み（初心者向け・日本語吹き替え版）',
      //     // セール価格
      //     rate: 4.3,
      //     all_rate: 4.7,
      //     sale_price: '1750',
      //     normal_price: '2500',
      //     // 作者
      //     name: 'ヒソカ',
      //     // タグ
      //     tags: ['phase1', 'btn', 'rakuten'],
      //     // 日付
      //     add_time: '2021/06/23',
      //     edit_time: '2021/06/23',
      //     // でもページ
      //     demo: '#',
      //   },
      //   {
      //     // キー
      //     id: 10,
      //     // レベル
      //     level: '中級',
      //     // 画像
      //     src: 'https://i.gyazo.com/d7b583e673842f2d6f1f0fef1f66f3a7.png',
      //     // タイトル
      //     title: 'Node.js + Express で作る Webアプリケーション 実践講座',
      //     // 概要
      //     describe:
      //       'Node.js , Express, MongoDB を用いた Webアプリケーション開発 をするために必要な基礎知識を学習し、現場で実践できるようになることを目指します。',
      //     // 作者
      //     name: 'マチ',
      //     // セール価格
      //     rate: 4.2,
      //     all_rate: 4.7,
      //     sale_price: '0',
      //     normal_price: '0',
      //     // タグ
      //     tags: ['phase1', 'btn', 'rakuten'],
      //     // 日付
      //     add_time: '2021/06/23',
      //     edit_time: '2021/06/23',
      //     // でもページ
      //     demo: '#',
      //   },
      // ],
      items: [],
    }
  },
  mounted() {
    this.getApi()
  },
  methods: {
    async getApi() {
      axios.defaults.withCredentials = true
      // await axios.get('/sanctum/csrf-cookie').then(async () => {

      // })
      // this.$nuxt.$loading.start()

      return axios
        .get('/api/posts')
        .then((response) => {
          this.items = response.data.data
          // this.apiPopularTags = response.data.tags;
        })
        .catch((err) => {
          alert(err)
        })

      // this.$nuxt.$loading.finish()
    },
  },
}
</script>
<style lang="scss" scoped>
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
