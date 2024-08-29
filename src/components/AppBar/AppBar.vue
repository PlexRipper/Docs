<template>
	<Toolbar id="app-bar">
		<template #start>
			<Button
				as="router-link"
				text
				to="/">
				<Logo :size="36" />
			</Button>
		</template>

		<template #center>
			<FlexContainer>
				<Button
					v-for="(link, index) in store.getPageNavItems"
					:key="index"
					:to="link.path"
					as="router-link"
					severity="contrast"
					size="large"
					text>
					{{ link.label }}
				</Button>
			</FlexContainer>
		</template>

		<template #end>
			<!-- Github Docs Link -->
			<Button
				as="a"

				class="mx-2"
				href="https://github.com/PlexRipper/Docs"
				icon=""
				outlined
				rel="noopener"
				target="_blank">
				<Icon name="mdi-github" />
				Docs
			</Button>

			<!-- Github PlexRipper Link -->
			<Button
				as="a"
				class="mx-2"
				href="https://github.com/PlexRipper/PlexRipper"
				icon=""
				rel="noopener"
				outlined
				target="_blank">
				<Icon name="mdi-github" />
				PlexRipper
			</Button>
		</template>
	</Toolbar>
</template>

<script lang="ts" setup>
import { useNavigationStore } from 'store';

const store = useNavigationStore();
</script>

<style lang="scss">
@use 'primeflex/primeflex.scss';

html {
  &.dark {
    #app-bar {
      color: white !important;
    }
  }

  #app-bar {
    @extend .m-0;
    @extend .py-0;
    @extend .w-full;
    @extend .h-4rem;
    @extend .border-noround;
    @extend .border-none;
    @extend .shadow-4;
    @extend .fixed;

    grid-area: header;

   a, a:visited, a:focus, a:active {
      color: white !important;
    }
  }
}
</style>
