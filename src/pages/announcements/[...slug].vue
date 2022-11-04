<script setup lang="ts">
import { format } from 'date-fns';
import { useNavigationStore } from "~/store/navigationStore";
import { computed, definePageMeta, queryContent, useContent, useRoute } from "#imports";
import { IAnnouncement } from "~/common/types/IAnnouncement";

definePageMeta({
  layout: 'text-layout',
})

const { toc } = useContent()
const store = useNavigationStore();
const route = useRoute()

const currentPage = await queryContent(route.path).findOne() as IAnnouncement;

const bannerPath = computed(() => {
  const date = format(Date.parse(currentPage.date), 'yyyy-MM-dd');
  return `/img/announcements/${ date }/banner.jpg`
})

const altDescription = computed(() => {
  return `${ currentPage.title } Banner`
})
</script>

<template>
  <v-row justify="center">
    <v-col>
      <h1>{{ currentPage.title }}</h1>
      <span>{{ currentPage.description }}</span>
      <Authors :authors="currentPage.authors" :date="currentPage.date"/>
      <v-img :src="bannerPath" :alt="altDescription"/>

      <PageRenderer :page="currentPage"/>
    </v-col>
    <v-col cols="auto">
      <TableOfContent root :links="toc.links"/>
    </v-col>
  </v-row>
</template>
