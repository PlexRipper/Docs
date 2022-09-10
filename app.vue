<template>
  <v-app>
    <app-bar/>
    <div>
      <NuxtPage/>
    </div>
  </v-app>
</template>
<script>
import AppBar from "./components/AppBar/AppBar";

export default {
  components: {AppBar}
}
</script>