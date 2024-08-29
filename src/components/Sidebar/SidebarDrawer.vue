<template>
  <Transition>
    <aside
      v-if="store.hasSidebar(sidebarKey)"
      class="sidebar-drawer">
      <NavigationList :sidebar-key="sidebarKey" />
    </aside>
  </Transition>
</template>

<script setup lang="ts">
import { useNavigationStore } from 'store/navigationStore';
import { useRoute } from '#imports';

const store = useNavigationStore();
const route = useRoute();

const sidebarKey = computed(() => store.getPageKey(route.fullPath));
</script>

<style lang="scss">
.sidebar-drawer {
  background-color: var(--p-surface-400);
  overflow-x: hidden;
  grid-area: side;
  display: grid;
  grid-template-rows: 64px 92px 64px auto 48px;
  width: 280px;

  transition: all 0.2s;

}

.v-enter-active,
.v-leave-active {
  transition: all 0.4s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
