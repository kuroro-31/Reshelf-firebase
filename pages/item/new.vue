<template>
  <div
    class="w-full h-screen mx-auto flex flex-col scroll-none"
    @click.self="onEditNoteEnd()"
  >
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
            <div @click.self="onEditNoteEnd()">
              <!-- ノートリスト -->
              <NoteItem
                v-for="note in noteList"
                :key="note.id"
                :note="note"
                @childNote="getChildNote"
                @delete="onDeleteNote"
                @editStart="onEditNoteStart"
                @editEnd="onEditNoteEnd"
              />

              <!-- ノート追加ボタン -->
              <re-button class="re-button">
                <button
                  class="re-button-primary-filled bg-primary"
                  @click="onClickButtonAdd"
                >
                  追加
                </button>
              </re-button>
            </div>
          </div>
          <!-- <div v-else>ログインしてください</div> -->
        </div>
      </div>
    </div>
    <!-- <FooterNav /> -->
  </div>
</template>
<script>
import _ from 'lodash'
// import { mapGetters, mapActions } from 'vuex'

// layout
import HeaderNav from '@/components/layout/header/HeaderNav'
// atoms
import ReButton from '@/components/atoms/ReButton.vue'
import NoteItem from '@/components/atoms/item/new/NoteItem.vue'

export default {
  components: {
    HeaderNav,
    ReButton,
    NoteItem,
  },

  data() {
    return {
      post: {
        title: '',
      },
      // errors: {},
      alert: '',
      noteList: [],
    }
  },
  methods: {
    // ...mapGetters({
    //   authenticated: 'authenticate/authenticated',
    // }),
    onClickButtonAdd() {
      this.noteList.push({
        id: new Date().getTime().toString(16),
        name: `新規ノート`,
        mouseover: false,
        editing: false,
      })
    },
    getChildNote(newVal) {
      this.noteList = newVal
    },
    onDeleteNote(deleteNote) {
      const index = this.noteList.indexOf(deleteNote)
      this.noteList.splice(index, 1)
    },
    onEditNoteStart(editNote) {
      for (let note of this.noteList) {
        note.editing = note.id === editNote.id
      }
    },
    onEditNoteEnd() {
      for (let note of this.noteList) {
        note.editing = false
      }
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
