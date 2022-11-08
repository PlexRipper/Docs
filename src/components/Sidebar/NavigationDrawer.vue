<script setup lang="ts">
import { useNavigationStore } from "store/navigationStore";

const store = useNavigationStore();

defineProps({
  sidebarKey: {
    type: String,
    default: '',
  },
});

</script>

<template>
  <v-navigation-drawer app clipped>
    <NavigationList :sidebar-key="sidebarKey"/>
  </v-navigation-drawer>
</template>
