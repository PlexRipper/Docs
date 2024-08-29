<template>
  <img
    :height="size"
    :width="size"
    src="/img/logo/full-logo-256.png"
    alt="PlexRipper Docs Logo">
</template>

<script setup lang="ts">
interface Props {
  size?: number;
}

withDefaults(defineProps<Props>(), {
  size: 128,
});
</script>
