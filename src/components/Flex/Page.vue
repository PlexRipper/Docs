<template>
	<NuxtLayout :sidebar="sidebar">
		<FlexContainer
			id="page"
			:column="column && !row"
			:gap="gap"
			:layout="layout"
			:justify="justify"
			:align-items="alignItems"
			:row="row && !column"
			full-width
			grow="1">
			<slot />
		</FlexContainer>
	</NuxtLayout>
</template>

<script lang="ts" setup>
withDefaults(
	defineProps<{
		sidebar?: boolean;
		column?: boolean;
		row?: boolean;
		justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
		alignItems?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
		gap?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
		layout?: '1' | 'auto' | 'initial' | 'none';
	}>(),
	{
		sidebar: false,
		column: true,
		row: false,
		gap: '0',
		layout: 'initial',
		alignItems: 'center',
	},
);
</script>

<style lang="scss">
@use 'primeflex/primeflex.scss';
@import '@/assets/scss/style.scss';

#page {
  @extend .m-0;
  @extend .px-8;
  @extend .background-overlay;
  min-height: calc(100vh - 4rem);

  .page-content {
    max-width: 1200px;
  }
}
</style>
