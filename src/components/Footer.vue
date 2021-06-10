<template>
  <div class="footer p-1 bg-gray-900 text-xs text-white">
    <div class="flex">
      <button
        @click="$emit('save')"
        class="inline-flex p-0 border border-white rounded-sm mr-2 px-1 items-center"
      >
        <Icon name="save" /> &nbsp;Save
      </button>
      <button
        @click="$emit('download')"
        class="inline-flex p-0 border border-white rounded-sm mr-2 px-1 items-center"
      >
        <Icon name="download" /> &nbsp;Download
      </button>
      <button
        @click="$emit('reset')"
        class="inline-flex p-0 border border-white rounded-sm mr-2 px-1 items-center"
      >
        <Icon name="reset" /> &nbsp;Reset
      </button>
    </div>
    <div></div>
  </div>
</template>

<script>
import Icon from './Icon.vue';

export default {
  name: 'Footer',
  emits: ['download', 'save', 'reset'],
  components: { Icon },
};
</script>

<style scoped></style>
