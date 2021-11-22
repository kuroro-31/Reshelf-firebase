<template>
  <div class="item">
    <section class="tab">
      <input id="TAB-A01" type="radio" name="TAB-A" checked="checked" />
      <label class="tab-label" for="TAB-A01">概要</label>
      <div class="content">
        <div class="">コースの概要</div>
      </div>
      <input id="TAB-A02" type="radio" name="TAB-A" />
      <label class="tab-label" for="TAB-A02">Q＆A</label>
      <div class="content">
        <div class=""></div>
      </div>
      <input id="TAB-A03" type="radio" name="TAB-A" />
      <label class="tab-label" for="TAB-A03">メモ</label>
      <div class="content">
        <div class="text-xs text-gray flex items-center mb-2">
          <twitch-icon size="1x" class="mr-2"></twitch-icon>
          <span>チャプターにつき1つメモを作成することができます</span>
        </div>
        <textarea class="content-textarea"></textarea>
        <div class="content-btns">
          <button class="content-chancel-btn">キャンセル</button>
          <button class="content-save-btn">保存</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.item {
  @apply duration-200 flex flex-col;
  &-title {
    @apply font-bold pb-2;
    color: var(--sub-color);
  }
  &-link {
    @apply py-1;
    color: var(--color);
    &:hover {
      @apply text-primary;
    }
  }
}
.title {
  color: var(--color);
}

/*ベース*/
.tab {
  @apply flex flex-wrap;
  &::after {
    @apply w-full block;
    content: '';
    height: 1px;
    order: -1;
  }
  &-label {
    @apply cursor-pointer mb-2;
    border-bottom: 1px solid var(--gray);
    /* タブ */
    margin-right: 3px;
    padding: 3px 12px;
    flex: 1;
    order: -1;
    &:nth-last-of-type(1) {
      margin-right: 0;
    }
  }
  input {
    /* ラジオボタン非表示 */
    @apply hidden;

    /*アクティブ設定*/
    &:checked + .tab-label {
      border-bottom: 2px solid var(--color);
      // background: var(--fff);
      & + .content {
        @apply p-6 rounded;
        height: auto;
        overflow: auto;
        opacity: 1;
      }
    }
  }
  .content {
    /* 本文 */
    @apply w-full overflow-hidden opacity-0;
    height: 0;
    background: var(--bg-secondary);
    &-textarea {
      @apply w-full p-2 rounded;
      border: 1px solid var(--gray);
    }
    &-btns {
      @apply flex items-center justify-end;
    }
    &-chancel-btn {
      @apply mr-2 py-2 px-4;
    }
    &-save-btn {
      @apply py-2 px-4;
    }
  }
}
</style>
