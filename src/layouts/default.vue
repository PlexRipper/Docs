<script setup>
import AppBar from "~/components/AppBar/AppBar.vue";

</script>

<template>
  <v-app>
    <AppBar/>
    <v-main class="mt-10">
      <v-container>
        <slot/>
      </v-container>
    </v-main>
  </v-app>
</template>