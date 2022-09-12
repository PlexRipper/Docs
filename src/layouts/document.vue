<script setup lang="ts">
import AppBar from "~/components/AppBar/AppBar.vue";
import NavigationDrawer from "~/components/Sidebar/NavigationDrawer.vue";
import { ref, useRoute } from "#imports";
import { useNavigationStore } from "store/navigationStore";

const store = useNavigationStore();
const route = useRoute()

const pageKey = ref(route.meta.page as string);

</script>

<template>
  <v-app>
    <AppBar/>
    <NavigationDrawer :sidebar-key="pageKey" :items="store.getGuidesNavItems"/>
    <v-main class="mt-0">
      <v-container>
        <slot/>
      </v-container>
    </v-main>
  </v-app>
</template>