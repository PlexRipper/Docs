<script lang="ts">

import { ref } from "#imports";

const show = ref(false);
</script>

<template>
  <v-list>
    <v-list-group>
      <template v-slot:activator>
        <v-list-item-title>
          <slot></slot>
        </v-list-item-title>
      </template>

      <v-list-item>
        <slot name="answer"></slot>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>



