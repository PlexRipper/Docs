<script setup lang="ts">
import NavigationDrawer from "~/components/Sidebar/NavigationDrawer.vue";
import { queryContent, fetchContentNavigation, useAsyncData } from "#imports";


const { data } = await useAsyncData('guides', () => fetchContentNavigation(queryContent('guides')))

</script>

<template>
  <main>
    <NavigationDrawer :items="data[0].children"/>
  </main>
</template>


