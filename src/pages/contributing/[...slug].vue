<script setup lang="ts">
import NavigationDrawer from "~/components/Sidebar/NavigationDrawer.vue";
import { useNavigationStore } from "~/store/navigationStore";
import { definePageMeta, queryContent, useRoute } from "#imports";

definePageMeta({
  title: 'Contributing',
})

const store = useNavigationStore();
const route = useRoute()
const currentPage = await queryContent(route.path).findOne()

</script>

<!-- Pages need a single root element to make page transition work -->
<template>
  <div>
    <NavigationDrawer sidebar-key="contributing" :items="store.getContributingNavItems"/>
    <PageRenderer :page="currentPage"/>
  </div>
</template>


