<template>
	<div id="layout-container">
		<AppBar />
		<SidebarDrawer v-if="hasSidebar" />
		<div id="page-container">
			<slot />
		</div>
	</div>
	<Background />
</template>

<script setup lang="ts">
import { useNavigationStore } from 'store/navigationStore';
import { useHead } from '#imports';

useHead({
	title: 'PlexRipper Docs',
	meta: [{ name: 'description', content: 'Documentation website for the PlexRipper project' }],
	link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
});

const store = useNavigationStore();
await store.setup();

const hasSidebar = computed(() => useAttrs().hasOwnProperty('sidebar') && useAttrs().sidebar === true);
</script>

<style lang="scss">
@use 'primeflex/primeflex.scss';

#layout-container {
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
</style>
