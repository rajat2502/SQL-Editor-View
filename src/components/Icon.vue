<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="currentSVG.width"
    :height="currentSVG.height"
    :viewBox="currentSVG.viewBox"
    style="fill: '#fff', stroke: '#fff', strokeWidth: '0.4px'"
    title="title"
    fill="#fff"
  >
    <path :d="currentSVG.path" />
  </svg>
</template>

<script>
import { getIcons } from '../utils';

export default {
  name: 'Icon',
  data() {
    return {
      currentSVG: '',
    };
  },
  props: {
    name: String,
  },
  // Get the icon from the utils
  mounted() {
    this.currentSVG = getIcons().find((icon) => icon.name === this.name);
  },
};
</script>

<style scoped></style>
