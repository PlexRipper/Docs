<script setup lang="ts">
import { ParsedContent } from "@nuxt/content/dist/runtime/types";
import { PropType } from "@vue/runtime-core";

const props = defineProps({
  page: {
    type: Object as PropType<ParsedContent>,
  },
})
</script>

<template>
  <!-- Pages need a single root element to make page transition work -->
  <div>
    <ContentRenderer :value="page">
      <template #empty>
        <h3>No content found.</h3>
      </template>
    </ContentRenderer>
    <!-- Add some extra height to make reading near the end easier -->
    <div style="height: 100px"></div>
    <EditThisPage :path="page._file"/>
  </div>
</template>

