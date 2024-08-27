<template>
	<Page>
		<FlexContainer justify="between">
			<FlexContainer column>
				<h1>{{ currentPage.title }}</h1>
				<span>{{ currentPage.description }}</span>
				<Authors
					:authors="currentPage.authors"
					:date="currentPage.date" />
				<Image
					:src="bannerPath"
					:alt="altDescription" />

				<PageRenderer :page="currentPage" />
			</FlexContainer>
			<TableOfContent
				root
				:links="currentPage.body.toc.links" />
		</FlexContainer>
	</Page>
</template>

<script setup lang="ts">
import { format } from 'date-fns';
import { useNavigationStore } from '~/store/navigationStore';
import { computed, queryContent, useHead, useRoute } from '#imports';

const store = useNavigationStore();
const route = useRoute();

const currentPage = await queryContent(route.path).findOne();
console.log(currentPage);
useHead({
	title: currentPage.title,
});

const bannerPath = computed(() => {
	const date = format(Date.parse(currentPage.date), 'yyyy-MM-dd');
	return `/img/announcements/${date}/banner.jpg`;
});

const altDescription = computed(() => {
	return `${currentPage.title} Banner`;
});
</script>
