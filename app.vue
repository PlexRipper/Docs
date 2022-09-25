<script setup lang="ts">
import { useNavigationStore } from "store/navigationStore";
import Background from '~/components/General/Background.vue'
import AppBar from "~/components/AppBar/AppBar.vue";
import { useHead } from "#imports";

const store = useNavigationStore();
await store.setup()

useHead({
  title: 'PlexRipper Docs',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [{ name: 'description', content: 'Documentation website for the PlexRipper project' }],
  link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
})

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
