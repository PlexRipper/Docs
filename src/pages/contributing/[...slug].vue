<script setup lang="ts">
import { definePageMeta, queryContent, useRoute } from "#imports";
import { useNavigationStore } from "store";

const store = useNavigationStore();

definePageMeta({
  title: 'Contributing',
})

const route = useRoute()
const currentPage = await queryContent(route.path).findOne()

</script>

<!-- Pages need a single root element to make page transition work -->
<template>
  <PageRenderer :page="currentPage" :sidebar-key="store.getPageKey(route.fullPath)"/>
</template>


