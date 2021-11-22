<template>
  <div class="w-full mx-auto flex flex-col scroll-none">
    <HeaderNav />
    <div class="w-full flex max-w-screen-lg mx-auto container scroll-none">
      <div class="lg:flex w-full">
        <div class="main-body min-h-(screen-16) scroll-none">
          <div class="profile-about">
            <div class="profile-about-name">
              <div class="flex items-center">
                <span class="text-grey font-bold mr-2">Instructor</span>
                <span class="grade">Grade7</span>
              </div>
              <h2>Elizabeth Skinn</h2>
              <h3>Udemyプレゼン講師・複業家・ビジネススキルコーチ</h3>
            </div>
            <div class="flex mt-8">
              <div class="flex flex-col">
                <span class="text-grey font-bold">受講者数</span>
                <span class="text-3xl font-bold">17108</span>
              </div>
              <div class="flex flex-col ml-12">
                <span class="text-grey font-bold">教材総合評価</span>
                <span class="text-3xl font-bold">4.5</span>
              </div>
            </div>

            <!-- プロフィール詳細 -->
            <div class="profile-about-detail">
              <h3 class="font-bold text-xl">プロフィール</h3>
              <div class="profile-about-detail-body scroll-none">
                京都大学大学院を卒業後、働き方改革企業サイボウズに入社。
                <br />
                週4日勤務で3つの複業をこなすなど新しい働き方に取り組む。
                <br />
                <br />
                大学院で複雑な研究内容をコンパクトに伝えることに苦戦した経験から、
                <br />
                プレゼン改善に関する研究を開始。
                <br />
                大学院の最終発表で最高評価を獲得し、
                <br />
                サイボウズ入社2年目で当時最小年次で
                <br />
                幕張メッセでの登壇に抜擢され、以後多数の登壇経験を持つ。
                <br />
                <br />
                その経験を元に、「できる」をやる をモットーにかかげ
                <br />
                最小の時間・労力で最大の印象を残すプレゼン術について伝えている。
                <br />
                その活動はAERAに掲載されるなど会社員としては異色の経歴を持つ。
              </div>
            </div>
          </div>
          <div class="">
            <h3 class="font-bold text-xl mb-4">公開中のコース</h3>
            <all-item :items="items" />
          </div>
        </div>
        <nav class="side-nav lg:max-h-(screen-22) pin-22 scroll-none">
          <div class="profile-person">
            <p class="grade">Grade 7</p>
            <img
              class="profile-person-img responsive"
              src="https://i.gyazo.com/8ce2054d8a950d6ea86cf962315a194b.png"
              alt="personal icon"
            />
            <div class="profile-person-link">
              <a href="" class="profile-person-link-website">Website</a>
              <a href="" class="profile-person-link-facebook">Facebook</a>
              <a href="" class="profile-person-link-twitter">Twitter</a>
              <a href="" class="profile-person-link-github">Github</a>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <FooterNav />
  </div>
</template>
<script>
// layout
import HeaderNav from '@/components/layout/header/HeaderNav'
import FooterNav from '@/components/layout/FooterNav'
// atoms
import AllItem from '@/components/atoms/item/AllItem'

export default {
  components: {
    HeaderNav,
    FooterNav,
    AllItem,
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
        },
        {
          // キー
          id: 2,
          // レベル
          level: '中級',
          // 画像
          src: 'https://i.gyazo.com/2426266562352e572dccf61b6903cf74.png',
          // タイトル
          title:
            'AWS：ゼロから実践するAmazon Web Services。手を動かしながらインフラの基礎を習得',
          // 概要
          describe:
            'インフラがあまり詳しくない方ももう大丈夫。実際にやってみることで、AWSのエッセンスが身に付き、自分でネットワークやサーバーを構築できるようになります。',
          // セール価格
          rate: 3.8,
          all_rate: 4.0,
          sale_price: '5250',
          normal_price: '7500',
          // 作者
          name: 'クロロ・ルシルフル',
          // タグ
          tags: ['phase1', 'btn', 'rakuten'],
          // 日付
          add_time: '2021/06/23',
          edit_time: '2021/06/23',
        },
        {
          // キー
          id: 3,
          // レベル
          level: '上級',
          // 画像
          src: 'https://i.gyazo.com/752ac2b7f73248d4a65cbcf720542510.png',
          // タイトル
          title:
            '【JavaScript＆CSS】ガチで学びたい人のためのWEB開発徹底実践（フロントエンド編）',
          // 概要
          describe:
            '基礎を終えた方に最適！基礎レベルから一気にプロレベルへ！JavaScript、CSSの基礎～実践までを最短で学習。世界が変わる１９時間。',
          // セール価格
          rate: 3.2,
          all_rate: 3.3,
          sale_price: '7000',
          normal_price: '10000',
          // 作者
          name: 'フェイタン',
          // タグ
          tags: ['phase1', 'btn', 'rakuten'],
          // 日付
          add_time: '2021/06/23',
          edit_time: '2021/06/23',
        },
        {
          // キー
          id: 4,
          // レベル
          level: '特級',
          // 画像
          src: 'https://i.gyazo.com/7634abee15be2ce3313521bdc58aaf74.png',
          // タイトル
          title:
            '「世界で7万人が受講！未経験からWebプログラマーになるための全て」2018年最新版',
          // 概要
          describe:
            'Masaaki Hatano 監修、2018年の最新版へupdate済み（初心者向け・日本語吹き替え版）',
          // セール価格
          rate: 3.6,
          all_rate: 4.7,
          sale_price: '1750',
          normal_price: '2500',
          // 作者
          name: 'ヒソカ',
          // タグ
          tags: ['phase1', 'btn', 'rakuten'],
          // 日付
          add_time: '2021/06/23',
          edit_time: '2021/06/23',
        },
        {
          // キー
          id: 5,
          // レベル
          level: '中級',
          // 画像
          src: 'https://i.gyazo.com/d7b583e673842f2d6f1f0fef1f66f3a7.png',
          // タイトル
          title: 'Node.js + Express で作る Webアプリケーション 実践講座',
          // 概要
          describe:
            'Node.js , Express, MongoDB を用いた Webアプリケーション開発 をするために必要な基礎知識を学習し、現場で実践できるようになることを目指します。',
          c: '0',
          // 作者
          name: 'マチ',
          // セール価格
          rate: 4.0,
          all_rate: 4.7,
          sale_price: '0',
          normal_price: '0',
          // タグ
          tags: ['phase1', 'btn', 'rakuten'],
          // 日付
          add_time: '2021/06/23',
          edit_time: '2021/06/23',
        },
        {
          // キー
          id: 6,
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
          rate: 2.6,
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
        },
        {
          // キー
          id: 7,
          // レベル
          level: '上級',
          // 画像
          src: 'https://i.gyazo.com/2426266562352e572dccf61b6903cf74.png',
          // タイトル
          title:
            'AWS：ゼロから実践するAmazon Web Services。手を動かしながらインフラの基礎を習得',
          // 概要
          describe:
            'インフラがあまり詳しくない方ももう大丈夫。実際にやってみることで、AWSのエッセンスが身に付き、自分でネットワークやサーバーを構築できるようになります。',
          // セール価格
          rate: 3.7,
          all_rate: 4.7,
          sale_price: '5250',
          normal_price: '7500',
          // 作者
          name: 'クロロ・ルシルフル',
          // タグ
          tags: ['phase1', 'btn', 'rakuten'],
          // 日付
          add_time: '2021/06/23',
          edit_time: '2021/06/23',
        },
        {
          // キー
          id: 8,
          // レベル
          level: '特級',
          // 画像
          src: 'https://i.gyazo.com/752ac2b7f73248d4a65cbcf720542510.png',
          // タイトル
          title:
            '【JavaScript＆CSS】ガチで学びたい人のためのWEB開発徹底実践（フロントエンド編）',
          // 概要
          describe:
            '基礎を終えた方に最適！基礎レベルから一気にプロレベルへ！JavaScript、CSSの基礎～実践までを最短で学習。世界が変わる１９時間。',
          // セール価格
          rate: 4.8,
          all_rate: 4.7,
          sale_price: '7000',
          normal_price: '10000',
          // 作者
          name: 'フェイタン',
          // タグ
          tags: ['phase1', 'btn', 'rakuten'],
          // 日付
          add_time: '2021/06/23',
          edit_time: '2021/06/23',
        },
        {
          // キー
          id: 9,
          // レベル
          level: '初級',
          // 画像
          src: 'https://i.gyazo.com/7634abee15be2ce3313521bdc58aaf74.png',
          // タイトル
          title:
            '「世界で7万人が受講！未経験からWebプログラマーになるための全て」2018年最新版',
          // 概要
          describe:
            'Masaaki Hatano 監修、2018年の最新版へupdate済み（初心者向け・日本語吹き替え版）',
          // セール価格
          rate: 4.3,
          all_rate: 4.7,
          sale_price: '1750',
          normal_price: '2500',
          // 作者
          name: 'ヒソカ',
          // タグ
          tags: ['phase1', 'btn', 'rakuten'],
          // 日付
          add_time: '2021/06/23',
          edit_time: '2021/06/23',
        },
        {
          // キー
          id: 10,
          // レベル
          level: '中級',
          // 画像
          src: 'https://i.gyazo.com/d7b583e673842f2d6f1f0fef1f66f3a7.png',
          // タイトル
          title: 'Node.js + Express で作る Webアプリケーション 実践講座',
          // 概要
          describe:
            'Node.js , Express, MongoDB を用いた Webアプリケーション開発 をするために必要な基礎知識を学習し、現場で実践できるようになることを目指します。',
          // 作者
          name: 'マチ',
          // セール価格
          rate: 4.2,
          all_rate: 4.7,
          sale_price: '0',
          normal_price: '0',
          // タグ
          tags: ['phase1', 'btn', 'rakuten'],
          // 日付
          add_time: '2021/06/23',
          edit_time: '2021/06/23',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.side-nav {
  @apply hidden w-full lg:block lg:w-1/4 p-6 lg:px-0 lg:pt-12 z-10;
}
.main-body {
  @apply w-full lg:w-3/4 p-6 lg:pl-0 lg:pt-12 lg:pr-16;
}
.profile {
  &-about {
    @apply flex flex-col pb-4 mb-4;
    border-bottom: 1px var(--thin-gray) solid;
    &-name {
      h2 {
        @apply font-bold text-5xl mt-2;
      }
      h3 {
        @apply font-bold text-xl;
      }
    }
    &-detail {
      @apply mt-12 mb-4;
      &-body {
        @apply text-lg mt-4;
        // max-height: 200px;
      }
    }
  }
  &-person {
    @apply flex flex-col relative;
    &-img {
      @apply object-cover rounded-full shadow-lg;
      height: 250px;
      width: 250px;
    }
    &-link {
      @apply mt-8;
      &-website {
        @apply w-full rounded text-xl px-4 py-2 flex justify-center items-center;
        border: 1px solid var(--color);
        &:hover {
          color: rgba(var(--primary));
          border: 1px solidrgba(var(--primary));
        }
      }
      &-facebook {
        @apply w-full mt-2 rounded text-xl px-4 py-2 flex justify-center items-center;
        border: 1px solid var(--color);
        &:hover {
          color: #1976f2;
          border: 1px solid #1976f2;
        }
      }
      &-twitter {
        @apply w-full mt-2 rounded text-xl px-4 py-2 flex justify-center items-center;
        border: 1px solid var(--color);
        &:hover {
          color: #1ea2f1;
          border: 1px solid #1ea2f1;
        }
      }
      &-github {
        @apply w-full mt-2 rounded text-xl px-4 py-2 flex justify-center items-center;
        border: 1px solid var(--color);
        &:hover {
          color: #242a2f;
          border: 1px solid #242a2f;
        }
      }
    }
  }
}
.grade {
  @apply absolute rounded-full top-0 right-0 inline-flex px-4 py-2 font-bold items-center justify-center shadow-lg;
  // color: $purple;
  color: var(--fff);
  // background-color: var(--bg);
  background: $purple;
  // top: 250px;
}
</style>
