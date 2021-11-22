<template>
  <label class="re-radio">
    <slot name="input"></slot>
    <div class="re-radio--button mr-2"></div>
    <div class="text-for-radio flex flex-wrap items-center">
      <slot name="label"></slot>
    </div>
  </label>
</template>

<script></script>

<style lang="scss" scoped>
.re-radio {
  display: inline-flex;
  line-height: 20px;
  cursor: pointer;
  input[type='radio'] {
    position: absolute;
    opacity: 0;
  }
  input[type='radio'] + .re-radio--button {
    display: inline-block;
    height: 18px;
    width: 18px;
    margin: 1px 0;
    flex-shrink: 0;
    &:before,
    &:after {
      position: absolute;
      display: block;
      height: 18px;
      width: 18px;
      margin: 1px 0;
      border-radius: 100%;
      box-sizing: border-box;
      transition: all 0.2s ease;
      content: '';
    }
    &:before {
      border: 2px solid #ccc;
      opacity: 1;
      transform: scale(1);
    }
    &:after {
      border: 2px solid #00a4d8;
      background-color: #00a4d8;
      opacity: 0;
      transform: scale(0.1);
    }
  }
  input[type='radio']:checked + .re-radio--button {
    &:before {
      opacity: 0;
      transform: scale(0.1);
    }
    &:after {
      opacity: 1;
      transform: scale(1);
    }
  }
}
.text-for-radio {
  line-height: 20px;
}
</style>
