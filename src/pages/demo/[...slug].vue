<script lang="ts" setup>
import { useNavigationStore } from "~/store/navigationStore";
import { definePageMeta, queryContent, useHead, useRoute } from "#imports";

useHead({
  title: 'Demo',
})

definePageMeta({
  layout: 'empty',
  documentDriven: false
})

const store = useNavigationStore();
const route = useRoute()
const currentPage = await queryContent(route.path).findOne()

</script>

<!-- Pages need a single root element to make page transition work -->
<template>
  <div class="test">
    <PageRenderer :page="currentPage"/>
  </div>
</template>


