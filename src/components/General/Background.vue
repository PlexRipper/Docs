<template>
  <div id="background">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { resizeBackgroundEffect } from '@/public/background-effect.js';

onActivated(() => setTimeout(() => resizeBackgroundEffect(), 2000));
</script>

<style lang="scss">
// Used to keep the vanta.js background in place and overwrite the built-in position: absolute;
.vanta-canvas {
  position: fixed !important;
}
</style>
