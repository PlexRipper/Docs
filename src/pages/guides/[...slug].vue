<script setup lang="ts">
import { useNavigationStore } from '~/store/navigationStore';
import { queryContent, useHead, useRoute } from '#imports';

const store = useNavigationStore();
const route = useRoute();
const currentPage = await queryContent(route.path).findOne();

useHead({
	title: `Guides - ${currentPage.title}`,
});
</script>

<!-- Pages need a single root element to make page transition work -->
<template>
	<PageRenderer
		:page="currentPage"
		:sidebar-key="store.getPageKey(route.fullPath)"
	/>
</template>
