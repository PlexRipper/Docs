<script setup lang="ts">
import { computed, ref, useRouter } from "#imports";
import { NavItem } from "@nuxt/content/dist/runtime/types";
import { useNavigationStore } from "store/navigationStore";
import { PropType } from "@vue/runtime-core";

defineProps({
  sidebarKey: {
    type: String,
  },
  items: {
    type: Array as PropType<NavItem[]>,
  }
});

const emit = defineEmits<{ (e: 'change', path: string): void }>()

const store = useNavigationStore();

function onClick(path: string) {
  useRouter().push(path).then(() => emit('change', path))
}

</script>

<template>
  <v-navigation-drawer app clipped>
    <v-list :opened="store.getSidebarState(sidebarKey)"
            @update:opened="store.setSidebarState(sidebarKey, $event)"
            open-strategy="list">

      <template v-for="item in items">
        <!-- Display as list-group when there are children -->
        <v-list-group v-if="item.children.length > 0" :value="item.title">
          <template v-slot:activator="{ props }">
            <v-list-item
                v-bind="props"
                :title="item.title"
            ></v-list-item>
          </template>

          <v-list-item
              v-for="child in item.children"
              :key="child._id"
              :value="child._path"
              :title="child.title"
              @click="onClick(child._path);"
          />
        </v-list-group>
        <!-- Display as normal list-item when there are no children -->
        <v-list-item
            v-else
            :value="item._path"
            :title="item.title"
            @click="onClick(item._path);"
        />
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
