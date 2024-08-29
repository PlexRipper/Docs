<template>
	<Page>
		<PageRenderer :page="currentPage" />
	</Page>
</template>

<script setup lang="ts">
import { queryContent, useHead, useRoute } from '#imports';

useHead({
	title: 'Roadmap',
});

const route = useRoute();

const currentPage = await queryContent(route.path).findOne();
</script>
