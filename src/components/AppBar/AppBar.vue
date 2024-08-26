<template>
	<div>
		<Toolbar>
			<template #start>
				<div class="d-flex align-center app-header-title">
					<Button
						as="router-link"
						to="/">
						<Logo :size="36" />
						<span class="ml-2">PlexRipper Docs</span>
					</Button>
				</div>
			</template>

			<template #center>
				<FlexContainer>
					<Button
						v-for="(link, index) in store.getPageNavItems"
						:key="index"
						as="router-link"
						:to="link.path"
						outlined
						text>
						{{ link.label }}
					</Button>
				</FlexContainer>
			</template>

			<template #end>
				<!-- Theme Toggle -->
				<Button
					class="mx-2"
					:icon="themeIcon"
					@click="toggleTheme()" />

				<!-- Github Docs Link -->
				<Button
					icon="mdi-github"
					href="https://github.com/PlexRipper/Docs"
					target="_blank">
					Docs
				</Button>

				<!-- Github PlexRipper Link -->
				<Button
					icon="mdi-github"
					href="https://github.com/PlexRipper/PlexRipper"
					target="_blank">
					PlexRipper
				</Button>
			</template>
		</Toolbar>

		<!--    <v-app-bar -->
		<!--        color="primary" -->
		<!--        density="compact" -->
		<!--        app -->
		<!--        clipped -->
		<!--    > -->

		<!--      &lt;!&ndash; Menu Items &ndash;&gt; -->
		<!--      <div class="app-bar-menu-items"> -->

		<!--      </div> -->

		<!--      <template v-slot:append> -->
		<!-- Menu drawer toggle button -->

		<!--      </template> -->
		<!--    </v-app-bar> -->
		<!--    &lt;!&ndash; Mobile menu item drawer &ndash;&gt; -->
		<!--    <v-navigation-drawer -->
		<!--        v-model="drawer" -->
		<!--        temporary -->
		<!--        location="right" -->
		<!--    > -->

		<!--      <v-list-item -->
		<!--          v-for="(link, index) in store.getPageNavItems" -->
		<!--          :key="index" :to="link.path" -->
		<!--          :title="link.label" -->
		<!--      /> -->

		<!--      <v-divider/> -->

		<!--      <v-list density="compact" nav> -->
		<!--        <v-list-item -->
		<!--            prepend-icon="mdi-github" -->
		<!--            title="PlexRipper" -->
		<!--            href="https://github.com/PlexRipper/PlexRipper" -->
		<!--            target="_blank"/> -->
		<!--        <v-list-item -->
		<!--            prepend-icon="mdi-github" -->
		<!--            title="Docs" -->
		<!--            href="https://github.com/PlexRipper/Docs" -->
		<!--            target="_blank"/> -->
		<!--      </v-list> -->

		<!--      <v-divider/> -->

		<!--      <v-list-item -->
		<!--          :title="!isDark ? 'Dark Mode' : 'Light Mode'" -->
		<!--          :prepend-icon="themeIcon" -->
		<!--          @click.stop="toggleTheme" -->
		<!--      /> -->

		<!--      <v-divider/> -->

		<!--      <NavigationList :sidebar-key="store.getPageKey(route.fullPath)"/> -->
		<!--    </v-navigation-drawer> -->
	</div>
</template>

<script setup lang="ts">
import Log from 'consola';
import { useNavigationStore } from 'store';
import { computed, ref, useRoute } from '#imports';

const route = useRoute();

const store = useNavigationStore();

const drawer = ref(false);
Log.info('', route.fullPath);

function toggleTheme() {
	theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
}

function toggleSidebar() {
	drawer.value = !drawer.value;
}

const isDark = computed(() => {
	return theme.global.name.value === 'dark';
});

const themeIcon = computed(() => {
	return isDark.value ? 'mdi-white-balance-sunny' : 'mdi-moon-waxing-crescent';
});
</script>

<style lang="scss">

</style>
