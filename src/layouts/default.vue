<template>
  <div id="layout-container">
    <AppBar />
    <SidebarDrawer />
    <div id="page-container">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useNavigationStore } from 'store/navigationStore';
import { get, set, useDark } from '@vueuse/core';
import { useHead } from '#imports';

useHead({
  title: 'PlexRipper Docs',
  meta: [{ name: 'description', content: 'Documentation website for the PlexRipper project' }],
  link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
});

const store = useNavigationStore();
await store.setup();

console.log(useAttrs());

// Always set the dark mode
const isDark = useDark();
set(isDark, get(isDark));
</script>

<style lang="scss">
@use 'primeflex/primeflex.scss';
@import '@/assets/scss/style.scss';

#layout-container {
  @extend .background-overlay;

  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-areas:
        "header header"
        "side main"
        "side footer";
  grid-template-columns: auto 1fr;
  grid-template-rows: 64px auto 48px;
  -webkit-transition: all .4s;
  transition: all .4s;
}

#page-container {
  overflow: auto;
  height: calc(100vh - 4rem);
  grid-area: main;
}

#footer {
  grid-area: footer;
  position: fixed;
  bottom: 2rem;
  display: flex;
  align-self: start;
}

// Used to keep the vanta.js background in place and overwrite the built-in position: absolute;
.vanta-canvas {
  position: fixed !important;
}
</style>
