<script setup>
import {fetchContentNavigation, queryContent, useAsyncData} from "#imports";
import NavigationDrawer from "~/components/Sidebar/NavigationDrawer.vue";

const {data} = await useAsyncData('guides', () => fetchContentNavigation(queryContent('guides')))

</script>

<template>
  <main>
    <NavigationDrawer :items="data[0].children"/>
  </main>
</template>


