<template>
  <div class="note-family">
    <div
      class="note"
      :class="{
        mouseover: propsNote.mouseover && !propsNote.editing,
        selected: propsNote.selected,
      }"
      @mouseover="onMouseOver"
      @mouseleave="onMouseLeave"
      @click="onSelect(propsNote)"
    >
      <template v-if="propsNote.editing">
        <input
          :id="'editting-' + propsNote.id"
          v-model="propsNote.name"
          class="note-name transparent"
          autofocus="autofocus"
          @keypress.enter="onEditEnd"
        />
      </template>
      <template v-else>
        <div class="note-icon">
          <i class="fas fa-file-alt"></i>
        </div>
        <div class="note-name" @click="onClickEdit(propsNote)">
          {{ propsNote.name }}
        </div>

        <div v-show="propsNote.mouseover" class="buttons">
          <div class="button-icon" @click="onClickChildNote(propsNote)">
            サイトマップ
          </div>
          <div
            class="button-icon"
            @click="onClickAddNoteAfter(parentNote, note)"
          >
            追加
          </div>
          <div class="button-icon" @click="onClickEdit(note)">編集</div>
          <div class="button-icon" @click="onClickDelete(parentNote, note)">
            削除
          </div>
        </div>
      </template>
    </div>
    <div class="child-note">
      <draggable :list="note.children" group="notes" :animation="200">
        <NoteItem
          v-for="childNote in note.children"
          :key="childNote.id"
          :note="childNote"
          :parent-note="note"
          :layer="layer + 1"
          @delete="onClickDelete"
          @select="onSelect"
          @editStart="onClickEdit"
          @editEnd="onEditEnd"
          @addChild="onClickChildNote"
          @addNoteAfter="onClickAddNoteAfter"
        />
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'NoteItem',
  components: {
    draggable,
  },
  props: {
    note: {
      type: Object,
      default: () => {},
    },
    parentNote: {
      type: Object,
      default: () => {},
    },
    layer: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    propsNote: {
      get() {
        return this.note
      },
      set(newVal) {
        this.$emit('childNote', newVal)
      },
    },
  },
  methods: {
    onMouseOver() {
      this.propsNote.mouseover = true
    },
    onMouseLeave() {
      this.propsNote.mouseover = false
    },
    onSelect(propsNote) {
      this.$emit('select', propsNote)
    },
    onClickDelete(parentNote, note) {
      this.$emit('delete', parentNote, note)
    },
    onClickEdit(note) {
      this.$emit('editStart', note)
      this.$nextTick(() =>
        document.getElementById('editting-' + note.id).focus()
      )
    },
    onEditEnd(childNote) {
      this.$emit('editEnd', childNote)
      this.$nextTick(() =>
        document.getElementById('editting-' + childNote.id).focus()
      )
    },
    onClickChildNote(note) {
      this.$emit('addChild', note)
    },
    onClickAddNoteAfter(parentNote, note) {
      this.$emit('addNoteAfter', parentNote, note)
    },
  },
}
</script>

<style lang="scss" scoped>
.note {
  @apply w-full flex items-center;
  height: 70px;
  margin: 10px 0;
  padding: 5px;
}
.note-icon {
  margin-left: 10px;
}
.note-name {
  @apply w-full h-full flex items-center;
  padding: 3px 10px;
}
.buttons {
  @apply flex flex-row;
  .button-icon {
    padding: 3px;
    margin-left: 3px;
    border-radius: 5px;
  }
}
.mouseover {
  @apply cursor-pointer;
  background-color: #ebebeb;
}
.selected {
  color: black;
  background-color: rgb(232, 231, 228);
  font-weight: 600;
}
.child-note {
  padding-left: 10px;
}
</style>
