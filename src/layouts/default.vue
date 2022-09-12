<script setup>
import AppBar from "~/components/AppBar/AppBar.vue";

</script>

<template>
  <v-app>
    <AppBar/>
    <v-main class="mt-2">
      <slot/>
    </v-main>
  </v-app>
</template>