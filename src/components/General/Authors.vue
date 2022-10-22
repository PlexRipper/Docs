<script setup lang="ts">
import { format } from "date-fns"
import { IAuthor } from "~/common/types/IAnnouncement";

interface Props {
  authors: IAuthor[];
  date: string;
}

const props = withDefaults(defineProps<Props>(), {
  authors: () => [],
  date: '',
})

function openAvatarLink(path: string) {
  window.open(path, '_blank');
}
</script>

<template>
  <v-row class="ma-0">
    <v-col cols="auto">
      <v-btn class="avatar-button" v-for="(avatar, j) in authors" :key='j' icon
             @click.prevent="openAvatarLink(avatar.link)">
        <v-avatar :image="avatar.avatarUrl"/>
      </v-btn>
    </v-col>
    <v-col cols="auto" align-self="center">
      <span>{{ authors[0].name }}</span><br/>
      <span class="subtitle">{{ format(Date.parse(date), 'PPP') }}</span>
    </v-col>
  </v-row>
</template>

