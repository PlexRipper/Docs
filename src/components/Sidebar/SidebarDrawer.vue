<template>
  <aside class="sidebar-drawer">
    <NavigationList :sidebar-key="store.getPageKey(route.fullPath)" />
  </aside>
</template>

<script setup lang="ts">
import { useNavigationStore } from 'store/navigationStore';
import { useRoute } from '#imports';

const store = useNavigationStore();
const route = useRoute();
</script>

<style lang="scss">
.sidebar-drawer {
  background-color: var(--p-surface-400);
  overflow-x: hidden;
  grid-area: side;
  display: grid;
  grid-template-rows: 64px 92px 64px auto 48px;
  font-size: 14px;
  width: 280px;
  -webkit-transition: width .4s;
  transition: width .4s;
}
</style>
