<template>
	<Page
		no-max-width
		align-items="center">
		<Galleria
			:dt="styling"
			circular
			:num-visible="5"
			:responsive-options="responsiveOptions"
			:value="images"
			show-item-navigators>
			<template #item="{ item }">
				<NuxtImg
					:alt="item.text"
					:src="item.src"
					style="width: 100%; display: block" />
			</template>
			<template #thumbnail="{ item }">
				<NuxtImg
					:alt="item.text"
					:src="item.src"
					style="width: 100%; display: block" />
			</template>
			<template #caption="{ item }">
				<span class="text-2xl">{{ item.text }}</span>
			</template>
		</Galleria>
	</Page>
</template>

<!-- Pages need a single root element to make page transition work -->
<script lang="ts" setup>
import { useHead } from '#imports';

useHead({
	title: 'Demo',
});

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
		text: 'Poster view of movie library',
		src: '/img/demo/screenshot_4.png',
	},
	{
		text: 'Poster view of movie library',
		src: '/img/demo/screenshot_5.png',
	},
	{
		text: 'Folder path settings',
		src: '/img/demo/screenshot_6.png',
	},
	{
		text: 'Localization settings',
		src: '/img/demo/screenshot_7.png',
	},
	{
		text: 'Table view of movie library',
		src: '/img/demo/screenshot_8.png',
	},
	{
		text: 'Download confirmation',
		src: '/img/demo/screenshot_9.png',
	},
	{
		text: 'Downloads overview',
		src: '/img/demo/screenshot_10.png',
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
				captionColor: '{white}',
				navButtonColor: '{white}',
			},
		},
		dark: {
			root: {
				thumbnailNavButtonColor: '{surface.0}',
				captionColor: '{surface.0}',
				navButtonColor: '{surface.0}',
			},
		},
	},
});
</script>

<style lang="scss">
@use 'primeflex/primeflex.scss';

.p-galleria, .p-galleria-content {
// max-width: 1920px;
//  max-height: calc(100vh - 4rem)
}

.p-galleria-caption {
  @extend .text-center;
}
</style>
