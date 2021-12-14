<template>
  <div
    class="note"
    :class="{ mouseover: chiledNote.mouseover }"
    @mouseover="onMouseOver"
    @mouseleave="onMouseLeave"
  >
    <div class="note-icon">
      <i class="fas fa-file-alt"></i>
    </div>
    <div class="note-name">{{ chiledNote.name }}</div>

    <div v-show="chiledNote.mouseover" class="buttons">
      <div class="button-icon">サイトマップ</div>
      <div class="button-icon">追加</div>
      <div class="button-icon">編集</div>
      <div class="button-icon" @click="onClickDelete(note)">削除</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    note: {
      type: Array,
      required: true,
    },
  },
  computed: {
    chiledNote: {
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
      this.chiledNote.mouseover = true
    },
    onMouseLeave() {
      this.chiledNote.mouseover = false
    },
    onClickDelete(note) {
      this.$emit('delete', note)
    },
  },
}
</script>

<style lang="scss" scoped>
.note {
  width: 100%;
  margin: 10px 0;
  display: flex;
  align-items: center;
  padding: 5px;
  color: rgba(25, 23, 17, 0.6);
  &.mouseover {
    background-color: rgb(232, 231, 228);
    cursor: pointer;
  }
  .note-icon {
    margin-left: 10px;
  }
  .note-name {
    width: 100%;
    padding: 3px 10px;
  }
  .buttons {
    display: flex;
    flex-direction: row;
    .button-icon {
      padding: 3px;
      margin-left: 3px;
      border-radius: 5px;
    }
  }
}
</style>
