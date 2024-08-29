import { acceptHMRUpdate, defineStore } from 'pinia';
import PAGE from 'const/page-name-constants';
import type { NavItem } from '@nuxt/content';
import type { IPageLink } from '~/common/types/IPageLink';
import { fetchContentNavigation, useAsyncData } from '#imports';

export const useNavigationStore = defineStore('navigationStore', () => {
	const state = reactive<{
		/**
		 * Page items that are displayed in the navigation
		 */
		pageItems: IPageLink[];
		sideBarState: Map<string, Record<string, boolean>>;
		navItems: NavItem[];
		drawerState: boolean;
	}> ({
		navItems: [],
		drawerState: true,
		sideBarState: new Map<string, Record<string, boolean>>(),
		pageItems: [
			{
				label: 'Announcements',
				path: `/${PAGE.ANNOUNCEMENTS}/`,
			},
			{
				label: 'Guides',
				path: `/${PAGE.GUIDES}/overview/what-is-plexripper`,
			},
			{
				label: 'Demo',
				path: `/${PAGE.DEMO}/`,
			},
			{
				label: 'FAQ',
				path: `/${PAGE.FAQ}/`,
			},
			// {
			//     label: 'Roadmap',
			//     path: `/${ PAGE.ROADMAP }/`,
			// },
			{
				label: 'Contributing',
				path: `/${PAGE.CONTRIBUTING}/overview/`,
			},
			{
				label: 'Acknowledgements',
				path: `/${PAGE.ACKNOWLEDGEMENTS}/`,
			},
		],

	});

	// Actions
	const actions = {
		async setup() {
			const { data } = await useAsyncData(() => fetchContentNavigation());
			state.navItems = data.value ?? [];
		},
		setSidebarState(key: string, selected: Record<string, boolean>) {
			state.sideBarState.set(key, selected);
		},
	};

	// Getters
	const getters = {
		getPageKey(fullPath: string) {
			if (fullPath === '/') {
				return 'home';
			}
			return fullPath.split('/')[1];
		},
		getPageNavItems: computed(() => state.pageItems),
		getSidebarState(key: string): Record<string, boolean> {
			return state.sideBarState.get(key) ?? {};
		},
		getNavItems(key: string) {
			if (!key) {
				return [];
			}
			return cleanNavItems(key, state.navItems);
		},
	};

	return {
		...toRefs(state),
		...actions,
		...getters,
	};
});

/**
 * Formats the navItems by removing duplicate navItems that can be the same for the parent and child
 * @param {string} pageKey
 * @param {NavItem[]} navItems
 */
function cleanNavItems(pageKey: string, navItems: NavItem[]): NavItem[] {
	const pageNavItems = navItems.find((x) => x._path.substring(1) === pageKey)?.children ?? [];
	return pageNavItems.map((navItem) => {
		if (!navItem.children || navItem.children.length === 0) {
			return navItem;
		}

		return {
			...navItem,
			children: navItem.children.filter((child) => navItem._path !== child._path && navItem.title !== child._path),
		};
	});
}

// Added to make hot module reloading work during development
if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useNavigationStore, import.meta.hot));
}
