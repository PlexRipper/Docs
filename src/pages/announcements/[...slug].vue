<script setup lang="ts">
import { useNavigationStore } from "~/store/navigationStore";
import { definePageMeta, queryContent, ref, useRoute } from "#imports";
import PAGE from "const/page-name-constants";
import { ParsedContent } from "@nuxt/content/dist/runtime/types";

definePageMeta({
  page: PAGE.ANNOUNCEMENTS,
})

const store = useNavigationStore();
const route = useRoute()

const currentPage = ref<ParsedContent>();

currentPage.value = await queryContent(route.path).findOne()

</script>

<template>
  <ContentRenderer :value="currentPage">
    <template #empty>
      <h3>No content found.</h3>
    </template>
  </ContentRenderer>
</template>


