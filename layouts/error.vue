<template>
  <div class="w-full h-full mx-auto flex flex-col">
    <HeaderNav />
    <div class="main">
      <ul class="w-full flex flex-col">
        <li v-for="(value, key, index) in error" :key="index" class="message">
          <p class="text-3xl font-bold">{{ key }}</p>
          <p class="text-2xl">{{ value }}</p>
        </li>
        <span @click="top">
          <re-button class="re-button w-32 mt-8">
            <button class="re-button-primary-filled bg-primary">HOME</button>
          </re-button>
        </span>
      </ul>
    </div>
  </div>
</template>
<script>
import HeaderNav from '@/components/layout/header/HeaderNav'
import ReButton from '@/components/atoms/ReButton'

export default {
  components: {
    HeaderNav,
    ReButton,
  },
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {}
  },
  head() {
    return {
      title: this.error.message,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.error.message,
        },
      ],
    }
  },
  methods: {
    top() {},
  },
}
</script>
<style lang="scss" scoped>
.main {
  @apply flex items-center justify-center mx-auto overflow-scroll;
  height: calc(100vh - 64px);
  width: 100vw;
}
.message {
  @apply font-bold flex flex-col mb-4;
}
</style>
