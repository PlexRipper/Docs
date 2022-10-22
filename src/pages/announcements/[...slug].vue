<script setup lang="ts">
import Log from "consola";
import { format } from 'date-fns';
import { useNavigationStore } from "~/store/navigationStore";
import { computed, definePageMeta, queryContent, ref, useContent, useRoute } from "#imports";
import PAGE from "const/page-name-constants";
import { IAnnouncement } from "~/common/types/IAnnouncement";

definePageMeta({
  page: PAGE.ANNOUNCEMENTS,
  layout: 'text-layout',
})

const { toc } = useContent()
const store = useNavigationStore();
const route = useRoute()

const currentPage = ref<IAnnouncement>();
currentPage.value = await queryContent(route.path).findOne() as IAnnouncement;

const bannerPath = computed(() => {
  const date = format(Date.parse(currentPage.value.date), 'yyyy-MM-dd');
  return `/img/announcements/${ date }/banner.jpg`
})

const altDescription = computed(() => {
  return `${ currentPage.value.title } Banner`
})
</script>

<template>
  <v-row justify="center" v-if="currentPage">
    <v-col>
      <h1>{{ currentPage.title }}</h1>
      <span>{{ currentPage.description }}</span>
      <Authors :authors="currentPage.authors" :date="currentPage.date"/>
      <v-img :src="bannerPath" :alt="altDescription"/>

      <ContentRenderer :value="currentPage">
        <template #empty>
          <h3>No content found.</h3>
        </template>
      </ContentRenderer>
      <!-- Add some extra height to make reading near the end easier -->
      <div style="height: 300px"></div>
    </v-col>
    <v-col cols="auto">
      <TableOfContent root :links="toc.links"/>
    </v-col>
  </v-row>
</template>
