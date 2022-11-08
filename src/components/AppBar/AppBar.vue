<script setup lang="ts">
import Log from 'consola';
import { computed, ref, useRoute } from "#imports";
import { useNavigationStore } from "store";
import { useTheme } from "vuetify";

const theme = useTheme();
const route = useRoute();

const store = useNavigationStore();

const drawer = ref(false);
Log.info('', route.fullPath);

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
}

function toggleSidebar() {
  drawer.value = !drawer.value;
}

const isDark = computed(() => {
  return theme.global.name.value === 'dark';
});

const themeIcon = computed(() => {
  return isDark.value ? 'mdi-white-balance-sunny' : 'mdi-moon-waxing-crescent';
});

</script>

<template>
  <div>
    <v-app-bar
        color="primary"
        density="compact"
        app
        clipped
    >
      <template v-slot:prepend>
        <v-app-bar-nav-icon class="app-bar-drawer-button" @click.stop="toggleSidebar"/>
        <v-btn to="/" outlined :ripple="false">
          <div class="d-flex align-center app-header-title">
            <logo :size="36"/>
            <span class="ml-2">PlexRipper Docs</span>
          </div>
        </v-btn>
      </template>


      <!-- Menu Items -->
      <div class="app-bar-menu-items">
        <v-row class="flex-nowrap" no-gutters justify="center">
          <v-col v-for="(link, index) in store.getPageNavItems" :key="index">
            <v-btn :to="link.path" outlined nuxt>
              {{ link.label }}
            </v-btn>
          </v-col>
        </v-row>

      </div>

      <template v-slot:append>
        <div class="app-bar-links-items">
          <!-- Theme Toggle -->
          <v-btn class="mx-2" :icon="themeIcon" @click="toggleTheme()"/>

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
        </div>
        <v-app-bar-nav-icon class="app-bar-drawer-button" @click.stop="toggleSidebar"/>
      </template>
    </v-app-bar>
    <!-- Mobile menu item drawer -->
    <v-navigation-drawer
        v-model="drawer"
        temporary
        location="right"
    >

      <v-list-item
          v-for="(link, index) in store.getPageNavItems"
          :key="index" :to="link.path"
          :title="link.label"
      />

      <v-divider></v-divider>
      <v-list density="compact" nav>
        <v-list-item
            prepend-icon="mdi-github"
            title="PlexRipper"
            href="https://github.com/PlexRipper/PlexRipper"
            target="_blank"/>
        <v-list-item
            prepend-icon="mdi-github"
            title="Docs"
            href="https://github.com/PlexRipper/Docs"
            target="_blank"/>
      </v-list>
      <v-divider></v-divider>
      <v-list-item
          :title="!isDark ? 'Dark Mode' : 'Light Mode'"
          :prepend-icon="themeIcon"
          @click.stop="toggleTheme"
      ></v-list-item>
      <pre>{{ store.getPageKey(route.fullPath) }}</pre>
      <NavigationList :sidebar-key="store.getPageKey(route.fullPath)"/>
    </v-navigation-drawer>
  </div>
</template>

<style lang="scss">
@import 'vuetify/lib/styles/settings/_variables.scss';

@mixin media($breakpoint) {
  @media #{map-get($display-breakpoints, $breakpoint)} {
    @content;
  }
}

.app-header-title {
  span {
    @include media('md-and-down') {
      display: none;
    }
  }
}

.app-bar-menu-items {
  a {
    @include media('lg-and-up') {
      font-size: 1rem;
    }

    @include media('md') {
      font-size: 0.75rem;
    }
  }

  @include media('sm-and-down') {
    display: none;
  }
}

.app-bar-links-items {
  @include media('lg-and-down') {
    display: none;
  }

  a {
    @include media('lg-and-up') {
      font-size: 1rem;
    }

    @include media('md') {
      font-size: 0.85rem;
    }
  }
}

.app-bar-drawer-button {
  @include media('xl-and-up') {
    display: none;
  }
}

</style>
