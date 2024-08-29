<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    layout?: '1' | 'auto' | 'initial' | 'none';
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
    align?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
    alignItems?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
    alignSelf?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
    gap?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
    grow?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
    row?: boolean;
    column?: boolean;
    wrap?: boolean;
    fullWidth?: boolean;
    fullHeight?: boolean;
  }>(),
  {
    layout: 'initial',
    direction: 'row',
    justify: 'start',
    align: 'start',
    alignItems: 'start',
    alignSelf: 'start',
    gap: '0',
    grow: '0',
    fullWidth: false,
    fullHeight: false,
  },
);
const classes = computed(() => {
  const result = ['flex'];
  if (props.layout !== 'initial') {
    result.push(`flex-${props.layout}`);
  }

  if (props.row) {
    result.push('flex-row');
  } else if (props.column) {
    result.push('flex-column');
  } else {
    result.push(`flex-${props.direction}`);
  }

  if (props.wrap) {
    result.push('flex-wrap');
  }

  if (props.justify !== 'start') {
    result.push(`justify-content-${props.justify}`);
  }

  if (props.align !== 'start') {
    result.push(`align-content-${props.align}`);
  }

  if (props.alignItems !== 'start') {
    result.push(`align-items-${props.alignItems}`);
  }

  if (props.alignSelf !== 'start') {
    result.push(`align-self-${props.alignSelf}`);
  }

  if (props.gap !== '0') {
    result.push(`gap-${props.gap}`);
  }

  if (props.grow !== '0') {
    result.push(`flex-grow-${props.grow}`);
  }

  if (props.fullWidth) {
    result.push('w-full');
  }

  if (props.fullHeight) {
    result.push('h-full');
  }
  return result;
});
</script>
