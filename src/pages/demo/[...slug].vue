<script setup lang="ts">
import { useNavigationStore } from "~/store/navigationStore";
import { queryContent, useHead, useRoute } from "#imports";

useHead({
  title: 'Demo',
})

const store = useNavigationStore();
const route = useRoute()
const currentPage = await queryContent(route.path).findOne()

</script>

<!-- Pages need a single root element to make page transition work -->
<template>
  <PageRenderer :page="currentPage"/>
</template>


