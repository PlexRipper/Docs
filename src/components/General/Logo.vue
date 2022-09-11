<script setup lang="ts">
interface Props {
  size?: number
}

const props = withDefaults(defineProps<Props>(), {
  size: 128
})

</script>

<template>
  <nuxt-img :height="size" :width="size" src="/logo/full-logo-256.png"/>
</template>

