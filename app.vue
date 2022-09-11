<script setup>

import {useNavigationStore} from "store/navigationStore";

const store = useNavigationStore();
await store.setup()

</script>

<template>
  <v-app>
    <app-bar/>
    <v-main class="mt-0">
      <NuxtPage/>
    </v-main>
  </v-app>
</template>
