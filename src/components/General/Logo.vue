<template>
  <img
    :height="size"
    :width="size"
    :src="img('/img/logo/full-logo-256.png', { width: size, height: size })"
    alt="PlexRipper Docs Logo">
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  size?: number;
}>(), {
  size: 128,
});

const img = useImage();
</script>
