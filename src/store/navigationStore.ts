import { defineStore, acceptHMRUpdate } from 'pinia'
import { fetchContentNavigation, queryContent, useAsyncData } from "#imports";
import PAGE from "const/page-name-constants";
import { NavItem } from "@nuxt/content/dist/runtime/types";
import { IPageLink } from "~/common/types/IPageLink";

interface INavigationState {
    pageItems: IPageLink[],
    navItems: NavItem[]
}

export const useNavigationStore = defineStore('navigationStore', {
    state: (): INavigationState => {
        return {
            pageItems: [
                {
                    label: 'Guides',
                    path: `/${ PAGE.GUIDES }`,
                },
                {
                    label: 'Demo',
                    path: `/${ PAGE.DEMO }`,
                },
                {
                    label: 'FAQ',
                    path: `/${ PAGE.FAQ }`,
                },
                {
                    label: 'Contributing',
                    path: `/${ PAGE.CONTRIBUTING }`,
                },
                {
                    label: 'Acknowledgements',
                    path: `/${ PAGE.ACKNOWLEDGEMENTS }`,
                },
            ],
            navItems: [],
        }
    },
    actions: {
        async setup() {
            const { data } = await useAsyncData(() => fetchContentNavigation(queryContent(PAGE.GUIDES)));
            this.navItems = data.value ?? [];
        }
    },

    getters: {
        getPageNavItems: (state) => state.pageItems,
        getGuidesNavItems: (state) => state.navItems.find(x => x._path.substring(1) === PAGE.GUIDES)?.children ?? [],
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useNavigationStore, import.meta.hot))
}