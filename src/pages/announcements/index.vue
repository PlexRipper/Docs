<script setup lang="ts">
import { definePageMeta, queryContent, ref, useRouter } from "#imports";
import PAGE from "const/page-name-constants";
import { IAnnouncement } from "~/common/types/IAnnouncement";
import { format } from "date-fns"

definePageMeta({
  title: 'Announcements',
  page: PAGE.ANNOUNCEMENTS,
})
const router = useRouter();

const currentPage = ref<IAnnouncement[]>();
currentPage.value = await queryContent(PAGE.ANNOUNCEMENTS).find() as IAnnouncement[]

function openAvatarLink(path: string) {
  window.open(path, '_blank');
}

</script>

<template>
  <v-row justify="center">
    <v-col>
      <v-row justify="center" class="mb-6">
        <v-col cols="12">
          <h1>Announcements</h1>
        </v-col>
      </v-row>

      <v-row justify="start">
        <v-col cols="3" v-for="(item, i) in currentPage" :key="i">
          <v-card width="400" :to="item._path">
            <div class="logo-container">
              <Logo/>
            </div>
            <v-card-title> {{ item.title }}</v-card-title>
            <v-card-subtitle> {{ item.description }}</v-card-subtitle>
            <v-card-actions v-if="item.authors">
              <v-row class="ma-0">
                <v-col cols="auto">
                  <v-btn v-for="(avatar, j) in item.authors" :key='j' icon @click.prevent="openAvatarLink(avatar.link)">
                    <v-avatar :image="avatar.avatarUrl"/>
                  </v-btn>
                </v-col>
                <v-col cols="auto" align-self="center">
                  <span>{{ item.authors[0].name }}</span><br/>
                  <span class="subtitle">{{ format(Date.parse(item.date), 'PPP') }}</span>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
