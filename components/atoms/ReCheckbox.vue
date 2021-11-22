<template>
  <label class="re-checkbox" @click="isChecked = !isChecked">
    <slot name="input"></slot>
    <div
      class="re-checkbox--check"
      :class="isChecked == true ? 're-checkbox--checked' : ''"
    >
      <i class="bx bx-check re-checkbox--icon text-white"></i>
    </div>
    <slot name="label"></slot>
  </label>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isChecked: false,
    }
  },
}
</script>
<style lang="scss" scoped>
.re-checkbox {
  @apply inline-flex relative w-full h-full items-center duration-200 text-sm;
  line-height: 20px;
  padding: 7px 10px;
  > input[type='checkbox'] {
    @apply absolute w-full h-full opacity-0 cursor-pointer;
    & + .re-checkbox--check {
      @apply duration-200 flex items-center justify-center mr-2;
      height: 20px;
      width: 20px;
      border: 2px solid #ccc;
      border-radius: 2px;
      transform: rotate(-90deg);
      .re-checkbox--icon {
        @apply hidden;
        animation: slide-in 0.25s;
      }
    }
    &:checked {
      & + .re-checkbox--checked {
        @apply duration-200;
        background: rgba(var(--primary));
        border: 2px solidrgba(var(--primary));
        transform: rotate(0deg);

        .re-checkbox--icon {
          @apply block;
          animation: slide-in 0.25s;
        }
      }
    }
    &:disabled {
      cursor: default;
      & + .re-checkbox--check {
        @apply opacity-50;
      }
    }
  }
}
@keyframes slide-in {
  0% {
    @apply opacity-0;
    transform: translateX(30px);
  }
  100% {
    @apply opacity-100;
    transform: translateX(0px);
  }
}
</style>
