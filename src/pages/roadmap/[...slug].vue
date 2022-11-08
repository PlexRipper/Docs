<script setup lang="ts">
import { useNavigationStore } from "~/store/navigationStore";
import { queryContent, useHead, useRoute } from "#imports";

useHead({
  title: 'Roadmap',
})

const store = useNavigationStore();
const route = useRoute()

const currentPage = await queryContent(route.path).findOne()

</script>

<template>
  <PageRenderer :page="currentPage"/>
</template>


