<template>
	<Page>
		<Galleria
			:circular="true"
			:num-visible="5"
			:responsive-options="responsiveOptions"
			:value="images">
			<template #item="slotProps">
				<img
					:alt="slotProps.item.alt"
					:src="slotProps.item.src"
					style="width: 100%; display: block">
			</template>
			<template #thumbnail="slotProps">
				<img
					:alt="slotProps.item.alt"
					:src="slotProps.item.src"
					style="width: 100%; display: block">
			</template>
		</Galleria>
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

const images = [{
	text: 'Welcome screen and initial setup',
	src: '/img/demo/37b43186-aa9d-4d59-b19b-70ad26a99407.png',
},
{
	text: 'Exploring a category in Poster Mode',
	src: '/img/demo/b63af874-fc26-471f-b4ad-8901d686379f.png',
},
{
	text: 'Exploring a category in Table mode',
	src: '/img/demo/a13891fa-1ece-4d41-99ce-857c313a01d5.png',
},
{
	text: 'Downloading a movie',
	src: '/img/demo/ffc01987-f02b-405e-9a7c-8976d69b5405.png',
},
{
	text: 'Download progress',
	src: '/img/demo/9e208810-69e6-421a-b4e6-940f939192cd.png',
},
{
	text: 'Language configuration',
	src: '/img/demo/5d02fc10-c886-4fdc-9d44-0c19a6489cad.png',
},
{
	text: 'Another image',
	src: '/img/demo/c36662aa-877b-4a5e-9d40-aab689555202.png',
}];

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
</script>
