<script setup lang="ts">
import { computed } from "#imports";

const props = defineProps({
  href: {
    type: String,
    default: ''
  },
  blank: {
    type: Boolean,
    default: false
  }
})

const isRelative = computed(() => {
  return props.href.startsWith('/');
})
</script>

<template>
  <NuxtLink :href="href" :target="isRelative ? '_self' : '_blank' ">
    <slot/>
  </NuxtLink>
</template>
