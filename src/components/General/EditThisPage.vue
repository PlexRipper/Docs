<template>
  <div class="mt-8">
    <NuxtLink
      :href="link"
      class="no-underline"
      target="_blank"
      rel="noopener">
      <Icon name="mdi-open-in-new" />
      <span>Edit this page on GitHub</span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { computed } from '#imports';

const props = defineProps({
  path: {
    type: String,
    default: '',
  },
});
const link = computed(() => {
  return `https://github.com/PlexRipper/Docs/edit/master/src/content/${props.path}`;
});
</script>
