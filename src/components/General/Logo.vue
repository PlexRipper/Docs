<template>
  <ClientOnly>
    <NuxtImg
      :height="size"
      :width="size"
      src="/img/logo/full-logo-256.png"
      alt="PlexRipper Docs Logo" />
  </ClientOnly>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  size?: number;
}>(), {
  size: 128,
});
</script>
