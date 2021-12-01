<template>
  <div>
    <template v-if="fb_user.img">
      <img
        :src="fb_user.img"
        alt=""
        class="rounded-full object-cover"
        style="width: 35px; height: 35px"
      />
    </template>
    <template v-else>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    </template>
  </div>
</template>
<script>
import { firebaseAuth } from '@/mixins/firebase/firebaseAuth.js'
export default {
  mixins: [firebaseAuth],
}
</script>
