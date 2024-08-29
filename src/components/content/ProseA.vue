<template>
  <NuxtLink
    :href="href"
    :target="isRelative ? '_self' : '_blank' ">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from '#imports';

const props = defineProps({
  href: {
    type: String,
    default: '',
  },
  blank: {
    type: Boolean,
    default: false,
  },
});
const regExp = new RegExp('^(?:[a-z+]+:)?//', 'i');
const isRelative = computed(() => !regExp.test(props.href));
</script>
