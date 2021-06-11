<template>
  <teleport v-if="modelOpen" to="#portal">
    <Model @closeModel="closeModel">
      <!-- Save Modal -->
      <div v-if="modelType === 'save'">
        <h1 class="text-3xl font-medium my-1 px-6 py-4">Program Saved!</h1>
        <hr />
        <p class="text-2xl p-6">The program has been saved :)</p>
      </div>
      <!-- Copy Model -->
      <div v-else-if="modelType === 'copy'">
        <h1 class="text-3xl font-medium my-1 px-6 py-4">Content Copied!</h1>
        <hr />
        <p class="text-2xl p-6">Copying to clipboard was successful :)</p>
      </div>
      <!-- Reset Model -->
      <div v-else>
        <h1 class="text-3xl font-medium my-1 px-6 py-4">Reset Program?</h1>
        <hr />
        <p class="text-2xl px-6 pt-6 pb-2">
          This action will reset the program!
        </p>
        <div class="flex justify-between text-xl px-6 pt-2 pb-4">
          <button
            title="Cancel"
            @click="closeModel"
            class="bg-coolGray-600 rounded px-4 py-2"
          >
            Cancel
          </button>
          <button
            title="Reset Program"
            @click="
              $emit('reset');
              modelOpen = false;
            "
            class="bg-red-600 rounded px-4 py-2"
          >
            Reset
          </button>
        </div>
      </div>
    </Model>
  </teleport>
  <div
    class="flex justify-between footer p-3 bg-gray-900 text-white"
    style="height: 54px;"
  >
    <div class="flex">
      <button
        @click="copy('code')"
        class="inline-flex p-0 border border-white rounded-sm mr-4 px-2 items-center"
      >
        <Icon name="copy" /> &nbsp;Copy Code
      </button>
      <button
        @click="saveProgram"
        class="inline-flex p-0 border border-white rounded-sm mr-4 px-2 items-center"
      >
        <Icon name="save" /> &nbsp;Save
      </button>
      <button
        @click="$emit('download')"
        class="inline-flex p-0 border border-white rounded-sm mr-4 px-2 items-center"
      >
        <Icon name="download" /> &nbsp;Download
      </button>
      <button
        @click="resetProgram"
        class="inline-flex p-0 border border-white rounded-sm mr-4 px-2 items-center"
      >
        <Icon name="reset" /> &nbsp;Reset
      </button>
    </div>
    <div v-if="result">
      <button
        @click="copy('result')"
        class="inline-flex p-0 border border-white rounded-sm mr-4 px-2 items-center"
      >
        <Icon name="save" /> &nbsp;Copy Result
      </button>
    </div>
  </div>
</template>

<script>
import Model from './Model.vue';
import Icon from './Icon.vue';

export default {
  name: 'Footer',
  data() {
    return {
      modelOpen: false,
      modelType: '',
    };
  },
  methods: {
    copy(type) {
      this.$emit('copy', type);
      this.modelOpen = true;
      this.modelType = 'copy';
    },
    closeModel() {
      this.modelOpen = false;
    },
    saveProgram() {
      this.$emit('save');
      this.modelOpen = true;
      this.modelType = 'save';
    },
    resetProgram() {
      this.modelOpen = true;
      this.modelType = 'reset';
    },
  },
  props: {
    result: String,
  },
  emits: ['copy', 'download', 'save', 'reset'],
  components: { Model, Icon },
};
</script>

<style scoped></style>
