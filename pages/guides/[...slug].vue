<script setup lang="ts">
import { useNavigationStore } from "~/store/navigationStore";

const store = useNavigationStore();

</script>

<template>
  <main>
    <NavigationDrawer :items="store.getGuidesNavItems"/>
  </main>
</template>


