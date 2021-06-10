<template>
  <div
    class="flex items-center justify-between tab-heading text-xs text-white tracking-wider bg-coolGray-900 p-2"
  >
    <p>main.sql</p>
    <button
      :disabled="running"
      class="run-btn flex items-center bg-green-700 hover:bg-green-800 transition duration-200 ease-in-out py-1 px-4 font-bold rounded-sm"
      @click="$emit('runCode')"
    >
      <template v-if="!running"><Icon name="run" /> Run</template>
      <template v-else
        ><div id="loading"></div>
        Running</template
      >
    </button>
  </div>
</template>

<script>
import Icon from './Icon.vue';

export default {
  name: 'EditorHeader',
  props: {
    running: Boolean,
  },
  emits: ['runCode'],
  components: { Icon },
};
</script>

<style scoped></style>
