<script setup lang="ts">
import { transform } from "~/common/lib/shields-parser";

const shields = transform([
  {
    label: 'Docker Pulls',
    src: 'https://img.shields.io/docker/pulls/plexripper/plexripper'
  },
  {
    label: 'Lines of code',
    src: 'https://img.shields.io/tokei/lines/github/plexripper/plexripper'
  },
  {
    label: 'GitHub issues',
    src: 'https://img.shields.io/github/issues/plexripper/plexripper'
  },
  {
    label: 'License',
    src: 'https://img.shields.io/github/license/plexripper/plexripper'
  },
  {
    label: 'Github Followers',
    src: 'https://img.shields.io/github/followers/plexripper'
  },
  {
    label: 'Github Watchers',
    src: 'https://img.shields.io/github/watchers/PlexRipper/PlexRipper'
  },
  {
    label: 'Github Forks',
    src: 'https://img.shields.io/github/forks/PlexRipper/PlexRipper'
  },
  {
    label: 'Github Stars',
    src: 'https://img.shields.io/github/stars/PlexRipper'
  },
  {
    label: 'Docker Stars',
    src: 'https://img.shields.io/docker/stars/plexripper/plexripper'
  },
]);

const devShields = transform([
  {
    label: 'Development Version',
    fileName: 'src/WebAPI/ClientApp/package.json',
    src: 'https://img.shields.io/github/package-json/v/PlexRipper/PlexRipper/dev'
  },
  {
    label: 'PlexRipper Dev Image Size',
    src: 'https://img.shields.io/docker/image-size/plexripper/plexripper/dev'
  },
  {
    label: 'Last Commit on Dev Branch',
    src: 'https://img.shields.io/github/last-commit/PlexRipper/PlexRipper/dev'
  },
  {
    label: 'Unit Tests Development',
    src: 'https://img.shields.io/github/workflow/status/plexripper/plexripper/Execute%20Unit%20Tests/dev'
  },
]);

const stableShields = transform([
  {
    label: 'Stable Version',
    fileName: 'src/WebAPI/ClientApp/package.json',
    src: 'https://img.shields.io/github/package-json/v/PlexRipper/PlexRipper'
  },
  {
    label: 'PlexRipper Latest Image Size',
    src: 'https://img.shields.io/docker/image-size/plexripper/plexripper/latest'
  },
  {
    label: 'Last Commit on Master Branch',
    src: 'https://img.shields.io/github/last-commit/PlexRipper/PlexRipper/master'
  },
  {
    label: 'Unit Tests Stable',
    src: 'https://img.shields.io/github/workflow/status/plexripper/plexripper/Execute%20Unit%20Tests/master'
  },
])
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-row justify="center">
        <v-col cols="auto" v-for="(link, index) in shields" :key="index">
          <img :src="link.src" :alt="link.label">
        </v-col>
      </v-row>
    </v-col>

    <v-col>
      <v-table>
        <thead>
        <tr>
          <th class="text-left">
            <h3>
              Development
            </h3>
          </th>
          <th class="text-left">
            <h3>
              Stable
            </h3>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(_, index) in Math.min(devShields.length, stableShields.length)" :key="index">
          <td>
            <img class="mt-1" :src="devShields[index].src" :alt="devShields[index].label">
          </td>
          <td>
            <img class="mt-1" :src="stableShields[index].src" :alt="stableShields[index].label">
          </td>
        </tr>
        </tbody>
      </v-table>
    </v-col>
  </v-row>
</template>

