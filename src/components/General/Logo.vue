<script setup lang="ts">
interface Props {
	size?: number;
}

const props = withDefaults(defineProps<Props>(), {
	size: 128,
});
</script>

<template>
	<img
		:height="size"
		:width="size"
		src="/img/logo/full-logo-256.png"
		alt="PlexRipper Docs Logo"
	>
</template>
