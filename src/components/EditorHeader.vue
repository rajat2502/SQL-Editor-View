<template>
  <div
    class="text-xl flex items-center justify-between tab-heading text-white tracking-wider bg-coolGray-900 px-4 py-8"
  >
    <div class="flex items-center">
      <h3>main.sql</h3>
      <a
        href="https://github.com/rajat2502/SQL-Editor-View/blob/main/sample.csv"
        target="_blank"
        class="text-sm m-4 underline"
        >(Sample Data used)</a
      >
    </div>
    <button
      :disabled="running"
      class="run-btn flex items-center bg-green-700 hover:bg-green-800 transition duration-200 ease-in-out py-1 px-6 font-bold rounded-sm"
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
