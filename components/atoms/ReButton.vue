<template>
  <div>
    <!-- ボタンの中身が入る -->
    <slot></slot>
  </div>
</template>

<script></script>
<style lang="scss">
.re-button {
  @apply inline-block w-full relative font-bold duration-200;
  button,
  label,
  .re-button-inner {
    @apply flex items-center justify-center border-none cursor-pointer box-border bg-transparent duration-200 rounded-lg;
    min-width: 100px; // 2文字などの短いボタンのケースで必要
    // height: 100%; // 高さが崩れるので一時コメントアウト
    // padding: 1rem;
    min-height: 40px;
    color: var(--fff);
    line-height: 1.2;
    padding: 13px 25px;
    // border-radius: 17px;
    // text-align: center; // justify-content: center;しているのでカット
    box-shadow: 0 10px 20px -10px rgba(var(--primary), 0.1);
  }
  &:disabled {
    .label {
      @apply opacity-50;
      transform: translateY(1px);
    }
  }
  &:hover {
    .label {
      transform: translateY(1px);
    }
  }
  .label {
    @apply block duration-200;
    pointer-events: none;
    color: white;
    transform: translateY(0);
  }
  .ripple {
    @apply block absolute top-0 left-0 duration-500 ease-in-out;
    z-index: 1000;
    width: 200px;
    height: 200px;
    border-radius: 9999px;
    pointer-events: none;
    background-color: rgba(#fff, 0.5);
    opacity: 0;
    transform: translate(-50%, -50%) scale(10);
    &-enter {
      opacity: 1;
      transform: translate(-50%, -50%) scale(0);
    }
  }

  &-primary {
    &-filled {
      @apply h-full;
      // background: var(--color) !important;
      // color: var(--fff) !important;
      // background: rgba(var(--primary)) !important;
      color: var(--fff) !important;
      &:hover {
        // background: rgba($primary, 0.8) !important;
        // background: #475269 !important;
      }
    }
    &-border {
      @apply h-full;
      // background: #f1f1f1 !important;
      color: var(--color) !important;
      // border: 1px solidrgba(var(--primary)) !important;
      // color: rgba(var(--primary)) !important;
      // background: rgba(var(--primary), 0.1) !important;
      // &:hover {
      //   // background: #e4e6e9 !important;
      // }
    }
  }
  &-secondry {
    &-filled {
      @apply h-full;
      background: rgba(#18202b, 1);
      &:hover {
        box-shadow: 0 8px 25px -8px rgba(#18202b, 1);
      }
    }
    &-border {
      @apply h-full;
      border: 1px solid var(--fff) !important;
      color: var(--fff) !important;
      &:hover {
        // background: rgba(var(--primary), 0.1);
        color: #fff;
      }
    }
  }
  &-close {
    @apply h-full;
    color: #626262 !important;
    &:hover {
      background: rgba(var(--vs-dark), 0.08) !important;
    }
  }
  &-extra-large {
    @apply h-full;
    height: 60px !important;
    height: 60px !important;
    // font-size: 1.429rem !important;
  }
  &-large {
    @apply h-full;
    height: 50px !important;
    // font-weight: 600;
  }
  &-small {
    min-height: 38px !important;
  }
  &-extra-small {
    @apply font-normal;
    height: 30px !important;
    padding: 0 5px !important;
  }
  &-disabled {
    @apply h-full opacity-50;
    background: var(--ccc) !important;
    cursor: not-allowed !important;
  }
  &-border-disabled {
    @apply h-full;
    border: 1px solid var(--ccc) !important;
    color: var(--ccc) !important;
    cursor: not-allowed !important;
  }
}
</style>
