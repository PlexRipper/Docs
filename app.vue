<script setup>

import {useNavigationStore} from "store/navigationStore";

const store = useNavigationStore();
await store.setup()

</script>

<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
