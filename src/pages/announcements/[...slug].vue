<template>
  <Page>
    <FlexContainer
      column
      align-items="stretch">
      <!-- Meta -->
      <FlexContainer
        justify="between"
        align-items="center"
        class="my-4">
        <FlexContainer
          column>
          <span class="text-3xl font-bold mb-3">{{ currentPage.title }}</span>
          <span>{{ currentPage.description }}</span>
        </FlexContainer>
        <Authors
          :authors="currentPage.authors"
          :date="currentPage.date" />
      </FlexContainer>
      <!-- Banner -->
      <NuxtImg
        :src="bannerPath"
        :alt="altDescription" />

      <PageRenderer :page="currentPage" />
    </FlexContainer>
    <TableOfContent
      root
      :links="currentPage.body?.toc?.links" />
  </Page>
</template>

<script setup lang="ts">
import { format } from 'date-fns';
import { computed, queryContent, useHead, useRoute } from '#imports';

const route = useRoute();

const currentPage = await queryContent(route.path).findOne();

useHead({
  title: currentPage.title,
});

const bannerPath = computed(() => {
  const date = format(Date.parse(currentPage.date), 'yyyy-MM-dd');
  return `/img/announcements/${date}/banner.jpg`;
});

const altDescription = computed(() => {
  return `${currentPage.title} Banner`;
});
</script>
