<template>
  <div>
    <input type="hidden" :value="tagsJson" @change="sendTags" />
    <vue-tags-input
      v-model="tag"
      :tags="tags"
      :add-on-key="[13, 32]"
      :all-tags="filteredItems"
      @tags-changed="(newTags) => (tags = newTags)"
    />
  </div>
</template>

<script>
import VueTagsInput from '@johmun/vue-tags-input'
export default {
  components: {
    VueTagsInput,
  },
  props: {
    autocompleteItems: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      tag: '',
      tags: [],
    }
  },
  computed: {
    filteredItems() {
      return this.autocompleteItems.filter((i) => {
        return i.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1
      })
    },
    tagsJson() {
      return JSON.stringify(this.tags)
    },
  },
  methods: {
    sendTags() {
      this.$emit('catchTags', this.filteredItems)
    },
  },
}
</script>
<style lang="scss"></style>
