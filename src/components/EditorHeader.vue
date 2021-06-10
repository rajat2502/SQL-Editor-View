<template>
  <div
    class="flex items-center justify-between tab-heading text-xs text-white tracking-wider bg-coolGray-900 p-2"
  >
    <p>main.sql</p>
    <button
      class="flex items-center bg-green-700 hover:bg-green-800 transition duration-200 ease-in-out py-1 px-4 font-bold rounded-sm"
    >
      <Icon name="run" /> Run
    </button>
  </div>
</template>

<script>
import Icon from './Icon.vue';

export default {
  name: 'EditorHeader',
  props: {},
  components: { Icon },
};
</script>

<style scoped></style>
