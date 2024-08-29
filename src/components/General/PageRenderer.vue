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
	</article>
	<div id="footer">
		<EditThisPage :path="page._file" />
	</div>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content';

defineProps<{ page: ParsedContent }>();
</script>
