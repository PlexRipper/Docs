<template>
	<FlexContainer
		id="page"
		class="background-overlay"
		:column="column && !row"
		:row="row && !column"
		grow="1"
		:gap="gap"
		:layout="layout"
		full-width
		full-height>
		<slot />
	</FlexContainer>
</template>

<script setup lang="ts">
withDefaults(
	defineProps<{
		column?: boolean;
		row?: boolean;
		gap?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
		layout?: '1' | 'auto' | 'initial' | 'none';
	}>(),
	{
		column: true,
		row: false,
		gap: '0',
		layout: 'initial',
	},
);
</script>

<style lang="scss">
@use 'primeflex/primeflex.scss';
@import '@/assets/scss/variables.scss';

#page {
  @extend .m-0;
  @extend .p-1;
}
</style>
