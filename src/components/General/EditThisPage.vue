<script setup lang="ts">
import { computed } from "#imports";

const props = defineProps({
  path: {
    type: String,
    default: ""
  },
})
const link = computed(() => {
  return `https://github.com/PlexRipper/Docs/edit/master/src/content/${ props.path }`
})
</script>

<template>
  <div class="mt-8">
    <NuxtLink :href="link" target="_blank" rel="noopener">
      <v-icon>mdi-open-in-new</v-icon>
      <span class="vertical-middle">Edit this page on GitHub</span>
    </NuxtLink>
  </div>
</template>
