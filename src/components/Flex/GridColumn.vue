<template>
	<div :class="classes">
		<slot />
	</div>
</template>

<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		col?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'fixed' | 'auto';
		justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
		align?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
		fullWidth?: boolean;
		fullHeight?: boolean;
	}>(),
	{
		col: '0',
		justify: 'start',
		align: 'start',
		fullWidth: false,
		fullHeight: false,
	},
);

const classes = computed(() => {
	const result = ['flex'];
	if (props.col !== '0') {
		result.push(`col-${props.col}`);
	} else {
		result.push('col');
	}
	if (props.justify !== 'start') {
		result.push(`justify-content-${props.justify}`);
	}

	if (props.align !== 'start') {
		result.push(`align-content-${props.align}`);
	}

	if (props.fullWidth) {
		result.push('w-full');
	}

	if (props.fullHeight) {
		result.push('h-full');
	}
	return result;
});
</script>

<style lang="scss">
.col-auto {
	flex: 0 0 auto;
}
</style>
