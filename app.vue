<script setup>

import {useNavigationStore} from "~/store/navigationStore";
import AppBar from "~/components/AppBar/AppBar";

const store = useNavigationStore();
await store.setup()

</script>

<template>
  <v-app>
    <AppBar/>
    <v-main class="mt-0">
      <NuxtPage/>
    </v-main>
  </v-app>
</template>
