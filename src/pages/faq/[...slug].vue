<script setup lang="ts">
import Log from 'consola';
import { useNavigationStore } from "~/store/navigationStore";
import { definePageMeta, queryContent, ref, useContent, useRoute } from "#imports";
import PAGE from "const/page-name-constants";
import { ParsedContent } from "@nuxt/content/dist/runtime/types";
import { Question } from "#components";

definePageMeta({
  title: 'My home page',
  page: PAGE.FAQ,
})
const { navigation, page, surround, globals } = useContent()

const store = useNavigationStore();
const route = useRoute()

const currentPage = ref<ParsedContent>();
currentPage.value = await queryContent(PAGE.FAQ).findOne()

Log.debug(page)
</script>

<template>
  <main>

    <v-list>
      <!--      <v-list-group v-for="parent in items" :value="parent.title">-->
      <!--        <template v-slot:activator="{ props }">-->
      <!--          <v-list-item-->
      <!--              v-bind="props"-->
      <!--              :title="parent.title"-->
      <!--          ></v-list-item>-->
      <!--        </template>-->

      <!--        <v-list-item-->
      <!--            v-for="child in parent.children"-->
      <!--            :key="child._id"-->
      <!--            :value="child._path"-->
      <!--            :title="child.title"-->
      <!--            @click="onClick(child._path);"-->
      <!--        />-->      <!--      </v-list-group>-->
    </v-list>
    <ContentRenderer :value="page"/>
  </main>
</template>
