import { defineStore, acceptHMRUpdate } from 'pinia'
import { fetchContentNavigation, queryContent, useAsyncData } from "#imports";
import PAGE from "const/page-name-constants";
import { NavItem } from "@nuxt/content/dist/runtime/types";

interface INavigationState {
    navItems: NavItem[]
}

export const useNavigationStore = defineStore('navigationStore', {
    state: (): INavigationState => {
        return {
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
        getGuidesNavItems: (state) => state.navItems.find(x => x._path.substring(1) === PAGE.GUIDES)?.children ?? [],
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useNavigationStore, import.meta.hot))
}