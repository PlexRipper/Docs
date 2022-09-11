<script setup lang="ts">
import { computed, ref } from "#imports";
import { NavItem } from "@nuxt/content/dist/runtime/types";


interface Props {
  items: NavItem[]
}

const tree = ref([])
const props = defineProps<Props>()

</script>

<template>
  <v-navigation-drawer>
    <v-list>
      <v-list-group v-for="parent in items" :value="parent.title">
        <template v-slot:activator="{ props }">
          <v-list-item
              v-bind="props"
              :title="parent.title"
          ></v-list-item>
        </template>

        <v-list-item
            v-for="child in parent.children"
            :key="child._id"
            :value="child._path"
            :title="child.title"
        ></v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>
