<template>
	<PanelMenu
		:dt="styling"
		:expanded-keys="store.getSidebarState(sidebarKey)"
		:model="items"
		multiple
		@update:expanded-keys="store.setSidebarState(sidebarKey, $event)">
		<template #item="{ item, active }">
			<NuxtLink
				v-if="item.items?.length"
				class="block cursor-pointer">
				<FlexContainer
					justify="between"
					align-items="center">
					<span class="ml-2">{{ item.label }}</span>
					<Icon
						size="2rem"
						:name="active ? 'mdi-chevron-up' : 'mdi-chevron-down'" />
				</FlexContainer>
			</NuxtLink>
			<NuxtLink
				v-else
				:to="item.route"
				class="block cursor-pointer">
				<FlexContainer align-items="center">
					<span :class="item.icon" />
					<span class="ml-2">{{ item.label }}</span>
				</FlexContainer>
			</NuxtLink>
		</template>
	</PanelMenu>
</template>

<script lang="ts" setup>
import { useNavigationStore } from 'store';
import type { MenuItem } from 'primevue/menuitem';
import { get } from '@vueuse/core';
import { computed } from '#imports';

const store = useNavigationStore();

const props = withDefaults(defineProps<{ sidebarKey?: string }>(), {
	sidebarKey: '',
});

const items = computed((): MenuItem[] => {
	const navItems = store.getNavItems(props.sidebarKey);
	if (!navItems) {
		return [];
	}
	let index = 0;
	return navItems.map((x): MenuItem => ({
		label: x.title,
		key: 'key_' + index++,
		route: x._path,
		items: x.children?.map((x): MenuItem => ({
			key: 'key_' + index++,
			label: x.title,
			icon: x.icon,
			route: x._path,
			url: x.url,
			target: x.target,
			items: [],
		})) ?? undefined,
	}));
});

const styling = ref({
	colorScheme: {
		light: {
			root: {
				panelBackground: 'transparent',
				itemColor: 'black',
				gap: '0rem',
				panelBorderWidth: '0',
				panelBorderRadius: '0',
				panelFirstBorderWidth: '0',
				panelLastBorderWidth: '0',
				itemBorderRadius: '0',
			},
		},
		dark: {
			root: {
				panelBackground: 'transparent',
				itemColor: 'white',
				gap: '0rem',
				panelBorderWidth: '0',
				panelBorderRadius: '0',
				panelFirstBorderWidth: '0',
				panelLastBorderWidth: '0',
				itemBorderRadius: '0',
				itemFocusBackground: 'rgba(255,255,255,0.35)',
			},
		},
	},
});

onMounted(() => {
	// By default, expand all items
	store.setSidebarState(props.sidebarKey, get(items).reduce((acc, x) => {
		// @ts-expect-error key is always defined
		acc[x.key] = true;
		return acc;
	}, {}));
});
</script>

<style lang="scss">
@use 'primeflex/primeflex.scss';

.p-panelmenu-item {
  // @extend .h-3rem;
}

.p-panelmenu-header-content, .p-panelmenu-item-content {
  @extend .text-xl;
  @extend .line-height-4 ;

  a:visited, a:focus, a:active {
    color: inherit;
  }
}
</style>
