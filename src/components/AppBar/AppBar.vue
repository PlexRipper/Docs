<script setup lang="ts">
import { useRoute } from "#imports";
import { useNavigationStore } from "~/store/navigationStore";

const store = useNavigationStore();

function isActive(path) {
  // eslint-disable-next-line no-unused-vars
  const [_empty, section, ..._rest] = path.split('/');
  const [_currentEmpty, currentSection, ..._currentRest] = useRoute().path.split('/');
  return section === currentSection;
}
</script>

<template>
  <v-app-bar
      color="primary"
      density="compact"
      app
      clipped-left
  >
    <template #prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

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
             :key="`header-nav-link-${index}`" :to="link.path" outlined nuxt :class="
                    isActive(link.path)
                      ? 'bg-gray-700 text-white'
                      : 'hover:bg-gray-700 hover:text-white text-gray-300'
                  "
             class="app-bar-link"> {{ link.label }}
      </v-btn>

    </div>
    <v-spacer></v-spacer>

    <v-btn icon="mdi-magnify">
    </v-btn>

    <v-btn icon="mdi-heart">
    </v-btn>

  </v-app-bar>
</template>


<style lang="scss">
.app-header-title {

}

.app-bar-link {
  color: red;
}
</style>