<script setup lang="ts">
interface Props {
  src: string,
  size?: number,
  alt?: string,
  link?: string,
  showLinkText?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  size: 128,
  alt: '',
  src: '',
  link: '',
  showLinkText: false,
})

</script>

<template>
  <template v-if="link">
    <a :href="link" target="_blank">
      <img :height="size" :width="size" :src="src" :alt="alt"/>
    </a>
    <span v-if="showLinkText">{{ alt }}</span>
  </template>
  <template v-else>
    <img :height="size" :width="size" :src="src" :alt="alt"/>
  </template>
</template>

