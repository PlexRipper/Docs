<script setup lang="ts">
// This will overwrite the default ProseH2: https://github.com/nuxt/content/blob/main/src/runtime/components/Prose/ProseH2.vue

defineProps<{ id: string }>()
</script>

<template>
  <h2 :id="id">
    <slot/>
  </h2>
</template>

