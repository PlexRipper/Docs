<script setup lang="ts">
import { ParsedContent } from "@nuxt/content/dist/runtime/types";
import { PropType } from "@vue/runtime-core";

const props = defineProps({
  page: {
    type: Object as PropType<ParsedContent>,
  },
  sidebarKey: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div>
    <NavigationDrawer v-if="sidebarKey" :sidebar-key="sidebarKey"/>
    <!-- Pages need a single root element to make page transition work -->
    <article>
      <ContentRenderer :value="page">
        <template #empty>
          <h3>No content found.</h3>
        </template>
      </ContentRenderer>
      <!-- Add some extra height to make reading near the end easier -->
      <div style="height: 100px"></div>
      <EditThisPage :path="page._file"/>
    </article>
  </div>
</template>

