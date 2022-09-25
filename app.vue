<script setup lang="ts">
import { useNavigationStore } from "store/navigationStore";
import Background from '~/components/General/Background.vue'
import AppBar from "~/components/AppBar/AppBar.vue";

const store = useNavigationStore();
await store.setup()

</script>

<template>
  <v-app class="glass-background">
    <AppBar/>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
    <Background/>
  </v-app>
</template>
