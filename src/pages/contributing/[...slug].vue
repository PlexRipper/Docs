<template>
	<Page sidebar>
		<PageRenderer
			:page="currentPage"
			:sidebar-key="store.getPageKey(route.fullPath)" />
	</Page>
</template>

<!-- Pages need a single root element to make page transition work -->
<script setup lang="ts">
import { useNavigationStore } from 'store';
import { queryContent, useRoute, useHead } from '#imports';

const store = useNavigationStore();
const route = useRoute();
const currentPage = await queryContent(route.path).findOne();

useHead({
	title: `Contributing - ${currentPage.title}`,
});
</script>
