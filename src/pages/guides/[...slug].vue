<script setup lang="ts">
import NavigationDrawer from "~/components/Sidebar/NavigationDrawer.vue";
import { useNavigationStore } from "~/store/navigationStore";
import { definePageMeta, queryContent, ref, useRoute } from "#imports";
import PAGE from "const/page-name-constants";
import { ParsedContent } from "@nuxt/content/dist/runtime/types";

definePageMeta({
  title: 'Guides',
  page: PAGE.GUIDES,
})

const store = useNavigationStore();
const route = useRoute()

const currentPage = ref<ParsedContent>();

currentPage.value = await queryContent(route.path).findOne()

</script>

<template>
  <div>
    <NavigationDrawer :sidebar-key="PAGE.GUIDES" :items="store.getGuidesNavItems"/>
    <v-main class="mt-0">
      <ContentRenderer :value="currentPage">
        <template #empty>
          <h3>No content found.</h3>
        </template>
      </ContentRenderer>
    </v-main>
  </div>
</template>


