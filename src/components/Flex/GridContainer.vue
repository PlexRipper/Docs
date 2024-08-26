<template>
	<div :class="classes">
		<slot />
	</div>
</template>
<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		noGutter?: boolean;
		fullWidth?: boolean;
		fullHeight?: boolean;
		grow?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
	}>(),
	{
		noGutter: false,
		fullWidth: false,
		fullHeight: false,
		grow: '0',
	},
);

const classes = computed(() => {
	const result = ['grid min-h-0'];

	if (props.noGutter) {
		result.push('grid-nogutter');
	}

	if (props.fullWidth) {
		result.push('w-full');
	}

	if (props.fullHeight) {
		result.push('h-full');
	}

	if (props.grow !== '0') {
		result.push(`flex-grow-${props.grow}`);
	}

	return result;
});
</script>
