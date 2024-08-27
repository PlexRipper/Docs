<template>
	<!-- Pages need a single root element to make page transition work -->
	<article>
		<ContentRenderer :value="page">
			<template #empty>
				<h3>No content found.</h3>
			</template>
		</ContentRenderer>
		<!-- Add some extra height to make reading near the end easier -->
		<div style="height: 100px" />
		<EditThisPage :path="page._file" />
	</article>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { ParsedContent } from '@nuxt/content';

defineProps({
	page: {
		type: Object as PropType<ParsedContent>,
	},
});
</script>
