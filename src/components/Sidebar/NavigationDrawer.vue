<script setup lang="ts">
import { computed, ref } from "#imports";
import { NavItem } from "@nuxt/content/dist/runtime/types";
import { useNavigationStore } from "store/navigationStore";


interface Props {
  items: NavItem[]
  sidebarKey: string;
}

const tree = ref([])
const props = defineProps<Props>()
const emit = defineEmits<{ (e: 'change', path: string): void }>()
const store = useNavigationStore();


</script>

<template>
  <v-navigation-drawer>
    <v-list :opened="store.getSidebarState(sidebarKey)" @update:opened="store.setSidebarState(sidebarKey, $event)"
            open-strategy="list">
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
            @click="emit('change', child._path);"
        ></v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>
