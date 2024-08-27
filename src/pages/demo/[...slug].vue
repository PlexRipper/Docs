<template>
	<Page>
		<ClientOnly>
			<Galleria
				:dt="styling"

				circular
				:num-visible="5"
				:responsive-options="responsiveOptions"
				:value="images"
				container-style="max-width: 1920px">
				<template #item="{ item }">
					<img
						:alt="item.text"
						:src="item.src"
						style="width: 100%; display: block">
				</template>
				<template #thumbnail="{ item }">
					<img
						:alt="item.text"
						:src="item.src"
						style="width: 100%; display: block">
				</template>
				<!--				<template #caption="{ item }"> -->
				<!--					<h4>{{ item.text }}</h4> -->
				<!--				</template> -->
			</Galleria>
		</ClientOnly>
	</Page>
</template>

<!-- Pages need a single root element to make page transition work -->
<script lang="ts" setup>
import { useNavigationStore } from '~/store/navigationStore';
import { definePageMeta, queryContent, useHead, useRoute } from '#imports';

useHead({
	title: 'Demo',
});

const store = useNavigationStore();
const route = useRoute();
const currentPage = await queryContent(route.path).findOne();

const images = [
	{
		text: 'Welcome screen and initial setup',
		src: '/img/demo/screenshot_1.png',
	},
	{
		text: 'Welcome screen and initial setup',
		src: '/img/demo/screenshot_2.png',
	},
	{
		text: 'Welcome screen and initial setup',
		src: '/img/demo/screenshot_3.png',
	},
	{
		text: 'Welcome screen and initial setup',
		src: '/img/demo/screenshot_4.png',
	},
	{
		text: 'Exploring a category in Poster Mode',
		src: '/img/demo/screenshot_5.png',
	},
	{
		text: 'Exploring a category in Table mode',
		src: '/img/demo/screenshot_6.png',
	},
	{
		text: 'Downloading a movie',
		src: '/img/demo/screenshot_7.png',
	},
	{
		text: 'Download progress',
		src: '/img/demo/screenshot_8.png',
	},
];

const responsiveOptions = ref([
	{
		breakpoint: '1300px',
		numVisible: 4,
	},
	{
		breakpoint: '575px',
		numVisible: 1,
	},
]);

const styling = ref({
	colorScheme: {
		light: {
			root: {
				thumbnailNavButtonColor: '{white}',
			},
		},
		dark: {
			root: {
				thumbnailNavButtonColor: '{surface.0}',
			},
		},
	},
});
</script>

<style lang="scss">
//.p-galleria {
// height: calc(100vh - 4rem);
// min-height: calc(100vh - 4rem);
//
//}
</style>
