<template>
  <div>
    <slot/>
  </div>
</template>

<script setup lang="ts">
import Log from 'consola';
import { onActivated, onBeforeUnmount, onMounted } from "#imports";
import * as THREE from 'three';
import WAVES from 'vanta/dist/vanta.waves.min.js';

let vantaEffect: any = {};

onMounted(() => {
  Log.info('Wave effect created!');

  vantaEffect = WAVES({
    THREE,
    el: 'body',
    mouseControls: false,
    touchControls: false,
    gyroControls: false,
    minHeight: 800.0,
    minWidth: 800.0,
    scale: 1.0,
    scaleMobile: 0.5,
    color: 0x880000,
    shininess: 43.0,
    waveHeight: 4.0,
    waveSpeed: 0.5,
    zoom: 0.45,
  });
})

onActivated(() => {
  setTimeout(() => vantaEffect.resize(), 2000);
})

onBeforeUnmount(() => {
      if (vantaEffect) {
        Log.info('Wave effect destroyed!');
        vantaEffect.destroy();
      }
    }
);

</script>

<style lang="scss">
// Used to keep the vanta.js background in place and overwrite the built-in position: absolute;
.vanta-canvas {
  position: fixed !important;
}
</style>
