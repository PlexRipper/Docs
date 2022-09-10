<template>
  <v-app>
    <app-bar/>
    <v-main class="mt-0">
      <NuxtPage/>
    </v-main>
  </v-app>
</template>
<script>
import AppBar from "./components/AppBar/AppBar";

export default {
  components: {AppBar}
}
</script>