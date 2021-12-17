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
              受講中のコース
            </nuxt-link>
            <nuxt-link class="item-link" to="/user/like">お気に入り</nuxt-link>
            <nuxt-link class="item-link" to="/user/bought">購入履歴</nuxt-link>

            <span class="item-title">受講生</span>
            <nuxt-link class="item-link" to="/user/learning">
              受講中のコース
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
              <draggable :list="noteList" group="notes" :animation="200">
                <NoteItem
                  v-for="note in noteList"
                  :key="note.id"
                  :note="note"
                  :layer="1"
                  @delete="onDeleteNote"
                  @editStart="onEditNoteStart"
                  @editEnd="onEditNoteEnd"
                  @addChild="onAddChildNote"
                  @addNoteAfter="onAddNoteAfter"
                />
              </draggable>

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
import draggable from 'vuedraggable'

// layout
import HeaderNav from '@/components/layout/header/HeaderNav'
// atoms
import ReButton from '@/components/atoms/ReButton.vue'
import NoteItem from '@/components/atoms/item/new/NoteItem.vue'

export default {
  components: {
    draggable,
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
    onAddNoteCommon: function (targetList, layer, index) {
      layer = layer || 1
      const note = {
        id: new Date().getTime().toString(16),
        name: `新規ノート-${layer}-${targetList.length}`,
        mouseover: false,
        editing: false,
        children: [],
        layer: layer,
      }
      if (index == null) {
        targetList.push(note)
      } else {
        targetList.splice(index + 1, 0, note)
      }
    },
    onClickButtonAdd: function () {
      this.onAddNoteCommon(this.noteList)
    },
    onDeleteNote: function (parentNote, note) {
      const targetList =
        parentNote == null ? this.noteList : parentNote.children
      const index = targetList.indexOf(note)
      targetList.splice(index, 1)
    },
    onEditNoteStart: function (editNote, parentNote) {
      const targetList =
        parentNote == null ? this.noteList : parentNote.children
      for (let note of targetList) {
        note.editing = note.id === editNote.id
        this.onEditNoteStart(editNote, note)
      }
    },
    onEditNoteEnd: function (parentNote) {
      const targetList =
        parentNote == null ? this.noteList : parentNote.children
      for (let note of targetList) {
        note.editing = false
        this.onEditNoteEnd(note)
      }
    },
    onAddChildNote: function (note) {
      this.onAddNoteCommon(note.children, note.layer + 1)
    },
    onAddNoteAfter: function (parentNote, note) {
      const targetList =
        parentNote == null ? this.noteList : parentNote.children
      const layer = parentNote == null ? 1 : note.layer
      const index = targetList.indexOf(note)
      this.onAddNoteCommon(targetList, layer, index)
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
