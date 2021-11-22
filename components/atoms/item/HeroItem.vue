<template>
  <div>
    <transition appear>
      <div class="hero min-w-screen max-w-screen"></div>
    </transition>
  </div>
</template>
<style lang="scss" scoped>
.hero {
  @apply w-full;
  height: 420px;
  // background: #f0f2f6;
  background-color: var(--bg);
  // border-bottom: 1px solid #ddd;
}
</style>
