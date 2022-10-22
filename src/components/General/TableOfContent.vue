<script setup lang="ts">
import { TocLink } from "@nuxt/content/dist/runtime/types";
import { PropType } from "@vue/runtime-core";
import { computed } from "#imports";

const props = defineProps({
  links: {
    type: Array as PropType<TocLink[]>,
    default: () => []
  },
  root: {
    type: Boolean,
    default: false,
  }
})

const rootClasses = computed(() => {
  return {
    fixed: props.root,
  }
})

const listClasses = computed(() => {
  return {
    "table-of-contents-list": true,
    "ml-0": props.root,
  }
})
</script>

<template>
  <div :class="rootClasses">
    <span v-if="root" style="font-weight: bold">Table of Contents</span>
    <ul v-if="links" :class="listClasses">
      <li v-for="link in links" :key="link.text">
        <a :href="`#${link.id}`">
          {{ link.text }}
        </a>

        <TableOfContent v-if="link.children" :links="link.children"/>
      </li>
    </ul>
  </div>
</template>

<style type="text/css">

.table-of-contents-list {
  list-style-type: none;
}
</style>
