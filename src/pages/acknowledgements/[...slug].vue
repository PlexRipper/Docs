<script setup lang="ts">
import { useNavigationStore } from "~/store/navigationStore";
import { definePageMeta, queryContent, useRoute } from "#imports";

definePageMeta({
  title: 'Acknowledgements',
})

const store = useNavigationStore();
const route = useRoute()

const currentPage = await queryContent(route.path).findOne()

</script>

<template>
  <page-renderer :page="currentPage"/>
</template>


