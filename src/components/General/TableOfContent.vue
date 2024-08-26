<script setup lang="ts">
import type { TocLink } from '@nuxt/content/dist/runtime/types';
import type { PropType } from 'vue';
import { computed } from '#imports';

const props = defineProps({
	links: {
		type: Array as PropType<TocLink[]>,
		default: () => [],
	},
	root: {
		type: Boolean,
		default: false,
	},
});

const rootClasses = computed(() => {
	return {
		'table-of-content': true,
		fixed: props.root,
	};
});
</script>

<template>
	<div :class="rootClasses">
		<span
			v-if="root"
			style="font-weight: bold"
		>Table of Contents</span>
		<ul
			v-if="links"
			:class="[props.root ? 'ml-0' : '']"
			style="list-style-type: none"
		>
			<li
				v-for="link in links"
				:key="link.text"
			>
				<a
					:href="`#${link.id}`"
					class="no-underline"
				>
					{{ link.text }}
				</a>
				<TableOfContent
					v-if="link.children"
					:links="link.children"
				/>
			</li>
		</ul>
	</div>
</template>
