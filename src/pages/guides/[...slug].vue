<template>
	<Page sidebar>
		<PageRenderer :page="currentPage" />
	</Page>
</template>

<!-- Pages need a single root element to make page transition work -->
<script setup lang="ts">
import { queryContent, useHead, useRoute } from '#imports';

const route = useRoute();
const currentPage = await queryContent(route.path).findOne();

useHead({
	title: `Guides - ${currentPage.title}`,
});
</script>
