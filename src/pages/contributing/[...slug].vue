<script setup lang="ts">
import { queryContent, useRoute } from "#imports";
import { useNavigationStore } from "store";
import { useHead } from "#head";

const store = useNavigationStore();
const route = useRoute()
const currentPage = await queryContent(route.path).findOne()

useHead({
  title: `Contributing - ${ currentPage.title }`,
})
</script>

<!-- Pages need a single root element to make page transition work -->
<template>
  <PageRenderer :page="currentPage" :sidebar-key="store.getPageKey(route.fullPath)"/>
</template>


