<template>
  <div class="w-full h-screen mx-auto flex flex-col scroll-none">
    <HeaderNav />
    <div class="w-full flex max-w-screen-lg mx-auto container scroll-none">
      <div class="lg:flex w-full mt-4">
        <nav
          class="card side-nav lg:max-h-(screen-22) pin-22 scroll-none mb-auto"
        >
          <div class="item">
            <span class="item-title">受講生</span>
            <nuxt-link class="item-link" to="/user/learning">
              >受講中のコース
            </nuxt-link>
            <nuxt-link class="item-link" to="/user/like">お気に入り</nuxt-link>
            <nuxt-link class="item-link" to="/user/bought">購入履歴</nuxt-link>

            <span class="item-title">受講生</span>
            <nuxt-link class="item-link" to="/user/learning">
              >受講中のコース
            </nuxt-link>
            <nuxt-link class="item-link" to="/user/like">お気に入り</nuxt-link>
            <nuxt-link class="item-link" to="/user/bought">購入履歴</nuxt-link>
          </div>
        </nav>
        <div class="main-body scroll-none">
          <div class="main-body-content">
            <p class="mb-4">{{ alert }}</p>
            <!-- <all-item :items="items" /> -->
            <form @submit.prevent="update">
              <!-- タイトル -->
              <label class="font-semibold text-xs text-gray-600 pb-1 block">
                タイトル
              </label>
              <input
                v-model.trim="post.title"
                type="text"
                autofocus
                class="border rounded px-3 py-2 mt-1 mb-5 text-xs w-full"
              />

              <!-- タグ -->
              <label class="font-semibold text-xs text-gray-600 pb-1 block">
                タグ
              </label>
              <article-tags-input
                :autocomplete-items="allTagNames"
                :all-tags="filteredItems"
                @catchTags="post.tags"
              ></article-tags-input>

              <!-- body -->
              <label class="font-semibold text-xs text-gray-600 pb-1 block">
                本文
              </label>
              <editor
                v-model.trim="post.body"
                selector="textarea"
                api-key="oxl1g4dleeqrpfmcnpvu7wqcnpsljq6nxbpenlhole2n0rmh"
                :init="init"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- <FooterNav /> -->
  </div>
</template>
<script>
import _ from 'lodash'
import { mapGetters, mapActions } from 'vuex'
import Editor from '@tinymce/tinymce-vue'

// layout
import HeaderNav from '@/components/layout/header/HeaderNav'
// atoms
// import AllItem from '@/components/atoms/item/AllItem'
import ArticleTagsInput from '@/components/atoms/ArticleTagsInput.vue'

export default {
  components: {
    HeaderNav,
    editor: Editor,
    ArticleTagsInput,
    // AllItem,
  },
  //
  async asyncData({ $axios, params }) {
    const { data } = await $axios.$get(`/api/posts/${params.id}`)
    return { post: data }
  },
  data() {
    return {
      post: {
        title: '無題のタイトル',
        body: '',
        tags: [],
      },
      errors: {},
      alert: '',
      content: [],
      allTagNames: [
        'プログラミング',
        'python',
        'javascript',
        'golong',
        'gaagaa',
      ],
      lang: 'ja', // 現在の言語
      init: {
        // 基本設定
        language: '',
        height: 500,
        menubar: false,
        spellcheck: true,
        body_class: 'reshelf-editor',
        selector: 'textarea',
        // toc
        toc_header: 'div',
        toc_class: 'reshelf-toc',
        toc_depth: 6,
        // plugins
        plugins: [
          'print preview paste importcss blockquote searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc tocupdate insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
        ],
        // toolbar
        toolbar:
          'formatselect | underline strikethrough forecolor backcolor | alignleft aligncenter alignright | bullist numlist | link | toc tocupdate | charmap emoticons | help',
        // insert_toolbar
        // insert_toolbar: 'quickimage quicktable emoticons',
        // quick_toolbar
        quickbars_insert_toolbar: 'quickimage quicktable codesample',
        // color_map
        color_map: [
          '#BFEDD2',
          'Light Green',
          '#FBEEB8',
          'Light Yellow',
          '#F8CAC6',
          'Light Red',
          '#ECCAFA',
          'Light Purple',
          '#C2E0F4',
          'Light Blue',

          '#2DC26B',
          'Green',
          '#F1C40F',
          'Yellow',
          '#E03E2D',
          'Red',
          '#B96AD9',
          'Purple',
          '#3598DB',
          'Blue',

          '#169179',
          'Dark Turquoise',
          '#E67E23',
          'Orange',
          '#BA372A',
          'Dark Red',
          '#843FA1',
          'Dark Purple',
          '#236FA1',
          'Dark Blue',

          '#ECF0F1',
          'Light Gray',
          '#CED4D9',
          'Medium Gray',
          '#95A5A6',
          'Gray',
          '#7E8C8D',
          'Dark Gray',
          '#34495E',
          'Navy Blue',

          '#000000',
          'Black',
          '#ffffff',
          'White',
        ],
        // markdown
        textpattern_patterns: [
          { start: '*', end: '*', format: 'italic' },
          { start: '**', end: '**', format: 'bold' },
          { start: '#', format: 'h1' },
          { start: '##', format: 'h2' },
          { start: '###', format: 'h3' },
          { start: '####', format: 'h4' },
          { start: '#####', format: 'h5' },
          { start: '######', format: 'h6' },
          // { start: '> ', format: 'blockquote' },
          { start: '1. ', cmd: 'InsertOrderedList' },
          { start: '* ', cmd: 'InsertUnorderedList' },
          { start: '- ', cmd: 'InsertUnorderedList' },
          // { start: '//brb', replacement: 'Be Right Back' },
        ],
        // codesample
        codesample_languages: [
          { text: 'HTML/XML', value: 'markup' },
          { text: 'JavaScript', value: 'javascript' },
          { text: 'CSS', value: 'css' },
          { text: 'PHP', value: 'php' },
          { text: 'Ruby', value: 'ruby' },
          { text: 'Python', value: 'python' },
          { text: 'Java', value: 'java' },
          { text: 'C', value: 'c' },
          { text: 'C#', value: 'csharp' },
          { text: 'C++', value: 'cpp' },
        ],
        // link
        default_link_target: '_blank',
        link_assume_external_targets: true,
        link_quicklink: true,
        // image upload
        images_upload_credentials: true,
        images_reuse_filename: true,
        // list
        advlist_bullet_styles: 'disc',
        advlist_number_styles: 'lower-alpha',
      },
    }
  },
  watch: {
    post: {
      handler: _.debounce(function () {
        this.update()
      }, 2000), // memosのデータの更新が終わった2秒後に実行される
      deep: true,
    },
  },
  mounted() {
    this.init.language = this.lang // 現在の言語を入れる
  },
  methods: {
    ...mapGetters({
      authenticated: 'authenticate/authenticated',
    }),
    async update() {
      this.alert = '保存中です...'
      await this.$axios
        .$patch(`/api/posts/${this.$route.params.id}`, this.post)
        .then(({ data }) => {
          this.alert = '保存しました。'
        })
        .catch(({ response: { data } }) => {
          alert(data.message)
        })
    },
  },
}
</script>
<style lang="scss" scoped>
.side-nav {
  @apply hidden w-full lg:block mt-6 lg:w-1/4 xl:w-1/5 z-10 lg:sticky overflow-y-auto;
}
.main-body {
  @apply w-full lg:w-3/4 xl:w-4/5 p-6 lg:pl-10;
}

.item {
  @apply duration-200 flex flex-col;
  &-title {
    @apply text-xs font-bold pt-4;
    color: var(--sub-color);
  }
  &-link {
    @apply duration-200 px-4 py-2 w-full h-full;
    color: var(--color);
    &:hover {
      @apply cursor-pointer;
      transform: translateX(5px);
      background: #f0f2f6;
      border-radius: 6px;
    }
  }
}
.title {
  color: var(--color);
}
.mce-content-body {
  pre[class*='language-'] {
    background-color: #282c34 !important;
    border-radius: 0.5rem !important;
    code {
      border-radius: 0.5rem !important;
    }
  }
}
</style>
