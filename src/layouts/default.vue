<template>
	<FlexContainer full-height>
		<v-app class="glass-background">
			<AppBar />
			<slot />
			<Background />
		</v-app>
	</FlexContainer>
</template>

<script setup lang="ts">
import { useNavigationStore } from 'store/navigationStore';
import { useHead } from '#imports';

const store = useNavigationStore();
await store.setup();

useHead({
	title: 'PlexRipper Docs',
	meta: [{ name: 'description', content: 'Documentation website for the PlexRipper project' }],
	link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
});
</script>
