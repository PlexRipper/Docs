<script setup lang="ts">
import { useNavigationStore } from "~/store/navigationStore";
import { definePageMeta, queryContent, useRoute } from "#imports";

definePageMeta({
  title: 'Roadmap',
})

const store = useNavigationStore();
const route = useRoute()

const currentPage = await queryContent(route.path).findOne()

</script>

<template>
  <PageRenderer :page="currentPage"/>
</template>


