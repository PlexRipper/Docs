<template>
  <Page sidebar>
    <PageRenderer :page="currentPage" />
  </Page>
</template>

<!-- Pages need a single root element to make page transition work -->
<script setup lang="ts">
import { queryContent, useRoute, useHead } from '#imports';

const route = useRoute();
const currentPage = await queryContent(route.path).findOne();

useHead({
  title: `Contributing - ${currentPage.title}`,
});
</script>
