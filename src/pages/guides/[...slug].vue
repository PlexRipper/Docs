<script setup lang="ts">
import { useNavigationStore } from "~/store/navigationStore";
import { onMounted, queryContent, reactive, ref, useAsyncData, useRoute, useRouter } from "#imports";
import NavigationDrawer from "~/components/Sidebar/NavigationDrawer.vue";
import PAGE from "const/page-name-constants";
import { ParsedContent } from "@nuxt/content/dist/runtime/types";

const store = useNavigationStore();

const currentPage = ref<ParsedContent>();
const currentPath = ref(`/${ PAGE.GUIDES }`);

currentPage.value = await queryContent(useRoute().path).findOne()

async function requestPage(path: string) {
  currentPath.value = path;
  await useRouter().push(path)
}

</script>

<template>
  <main>
    <NavigationDrawer :sidebar-key="PAGE.GUIDES" :items="store.getGuidesNavItems" @change="requestPage($event)"/>
    <ContentRenderer :value="currentPage">
      <template #empty>
        <h3>No content found.</h3>
      </template>
    </ContentRenderer>
  </main>
</template>


