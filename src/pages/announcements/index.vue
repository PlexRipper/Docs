<script setup lang="ts">
import { definePageMeta, queryContent, ref } from "#imports";
import PAGE from "const/page-name-constants";
import { ParsedContent } from "@nuxt/content/dist/runtime/types";

definePageMeta({
  title: 'Announcements',
  page: PAGE.ANNOUNCEMENTS,
})

const currentPage = ref<ParsedContent[]>();
currentPage.value = await queryContent(PAGE.ANNOUNCEMENTS).find()


</script>

<template>
  <v-row justify="center">
    <v-col>
      <v-row justify="center" class="mb-6">
        <v-col cols="12">
          <h1>Announcements</h1>
        </v-col>
      </v-row>

      <v-row justify="left">
        <v-col cols="3" v-for="(item, index) in currentPage" :key="index">
          <v-card width="400" :to="item._path">
            <div class="logo-container">
              <Logo/>
            </div>
            <v-card-title> {{ item.title }}</v-card-title>
            <v-card-subtitle> {{ item.description }}</v-card-subtitle>
            <v-card-subtitle> {{ item.date }}</v-card-subtitle>
          </v-card>
          <pre>
            {{ currentPage }}
          </pre>

        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
