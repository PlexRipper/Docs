import { acceptHMRUpdate, defineStore } from 'pinia'
import { fetchContentNavigation, useAsyncData, useRoute } from "#imports";
import PAGE from "const/page-name-constants";
import { NavItem } from "@nuxt/content/dist/runtime/types";
import { IPageLink } from "~/common/types/IPageLink";
import Log from "consola";

interface INavigationState {
    pageItems: IPageLink[],
    sideBarState: Map<string, string[]>,
    navItems: NavItem[]
}

export const useNavigationStore = defineStore('navigationStore', {
    state: (): INavigationState => {
        return {
            pageItems: [
                {
                    label: 'Announcements',
                    path: `/${ PAGE.ANNOUNCEMENTS }/`,
                },
                {
                    label: 'Guides',
                    path: `/${ PAGE.GUIDES }/overview/what-is-plexripper`,
                },
                {
                    label: 'Demo',
                    path: `/${ PAGE.DEMO }/`,
                },
                {
                    label: 'FAQ',
                    path: `/${ PAGE.FAQ }/`,
                },
                // {
                //     label: 'Roadmap',
                //     path: `/${ PAGE.ROADMAP }/`,
                // },
                {
                    label: 'Contributing',
                    path: `/${ PAGE.CONTRIBUTING }/overview/`,
                },
                {
                    label: 'Acknowledgements',
                    path: `/${ PAGE.ACKNOWLEDGEMENTS }/`,
                },
            ],
            navItems: [],
            sideBarState: new Map<string, string[]>(),
        }
    },
    actions: {
        async setup() {
            const { data } = await useAsyncData(() => fetchContentNavigation());
            this.navItems = data.value ?? [];

        },
        setSidebarState(key: string, selected: string[]) {
            this.sideBarState.set(key, selected)
        }
    },

    getters: {
        getPageKey: () => {
            return (fullPath: string) => {
                if (fullPath === '/') {
                    return 'home';
                }
                return fullPath.split('/')[1]
            }
        },
        getPageNavItems: (state) => state.pageItems,
        getSidebarState: (state) => {
            return (key: string) => state.sideBarState.get(key)
        },
        getNavItems: (state) => {
            return (key: string) => {
                if (!key) {
                    return [];
                }
                return cleanNavItems(key, state.navItems);
            }
        },
    }
})

/**
 * Formats the navItems by removing duplicate navItems that can be the same for the parent and child
 * @param {string} pageKey
 * @param {NavItem[]} navItems
 */
function cleanNavItems(pageKey: string, navItems: NavItem[]): NavItem[] {
    const pageNavItems = navItems.find(x => x._path.substring(1) === pageKey)?.children ?? [];
    return pageNavItems.map(navItem => {
        if (!navItem.children || navItem.children.length === 0) {
            return navItem;
        }

        return {
            ...navItem,
            children: navItem.children.filter(child => navItem._path !== child._path && navItem.title !== child._path),
        }
    })
}

// Added to make hot module reloading work during development
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useNavigationStore, import.meta.hot))
}
