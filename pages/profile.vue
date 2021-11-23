<template>
  <div>
    <h1>User Profile</h1>
    <p v-if="User != null">Your e-mail is {{ User.email }}</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  layout: 'default',
  middleware: 'authe',
  data() {
    return {
      User: this.$store.state.authUser,
    }
  },
  methods: {
    async logout() {
      await this.$fire.auth.signOut()
    },
  },
}
</script>
