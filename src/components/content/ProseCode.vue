<template>
  <slot />
</template>

<script lang="ts">
import { defineComponent } from '#imports';

export default defineComponent({
  props: {
    code: {
      type: String,
      default: '',
    },
    language: {
      type: String,
      default: null,
    },
    meta: {
      type: String,
      default: null,
    },
    filename: {
      type: String,
      default: null,
    },
    highlights: {
      type: Array as () => number[],
      default: () => [],
    },
  },
});
</script>

<style>
pre code .line {
  display: block;
  min-height: 1rem;
}
</style>
