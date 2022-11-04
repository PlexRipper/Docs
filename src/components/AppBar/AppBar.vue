<script setup lang="ts">
import { computed, useRoute } from "#imports";
import { useNavigationStore } from "store";
import { useTheme } from "vuetify";

const theme = useTheme()

const store = useNavigationStore();

function isActive(path) {
  // eslint-disable-next-line no-unused-vars
  const [_empty, section, ..._rest] = path.split('/');
  const [_currentEmpty, currentSection, ..._currentRest] = useRoute().path.split('/');
  return section === currentSection;
}

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
}

const isDark = computed(() => {
  return theme.global.name.value === 'dark';
});

const icon = computed(() => {
  return isDark.value ? 'mdi-white-balance-sunny' : 'mdi-moon-waxing-crescent';
});

</script>

<template>
  <v-app-bar
      color="primary"
      density="compact"
      app
      clipped-left
  >
    <v-app-bar-title>
      <v-btn to="/" outlined nuxt>
        <div class="d-flex align-center">
          <logo :size="36"/>
          <span class="app-header-title ml-2">PlexRipper Docs</span>
        </div>
      </v-btn>
    </v-app-bar-title>
    <div>
      <v-btn v-for="(link, index) in store.getPageNavItems"
             :key="index" :to="link.path" outlined nuxt>
        {{ link.label }}
      </v-btn>
    </div>
    <v-spacer></v-spacer>
    <!-- Theme Toggle -->
    <v-btn class="mx-2" :icon="icon" @click="toggleTheme()"/>

    <!-- Github Docs Link -->
    <v-btn href="https://github.com/PlexRipper/Docs" target="_blank">
      <v-icon icon="mdi-github"/>
      Docs
    </v-btn>

    <!-- Github PlexRipper Link -->
    <v-btn href="https://github.com/PlexRipper/PlexRipper" target="_blank">
      <v-icon icon="mdi-github"/>
      PlexRipper
    </v-btn>

  </v-app-bar>
</template>
