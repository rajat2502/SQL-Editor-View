<template>
  <teleport v-if="modelOpen" to="#portal">
    <Model @closeModel="closeModel">
      <!-- Save Modal -->
      <div v-if="modelType === 'save'">
        <h1 class="font-bold my-1 px-6 py-2">Program Saved!</h1>
        <hr />
        <p class="text-sm px-6 py-4">The program has been saved :)</p>
      </div>
      <!-- Reset Model -->
      <div v-else>
        <h1 class="font-bold my-1 px-6 py-2">Reset Program?</h1>
        <hr />
        <p class="text-sm px-6 pt-4">This action will reset the program!</p>
        <div class="flex justify-between text-xs px-6 py-2">
          <button
            title="Cancel"
            @click="closeModel"
            class="bg-coolGray-600 rounded px-2 py-1"
          >
            Cancel
          </button>
          <button
            title="Reset Program"
            @click="
              $emit('reset');
              modelOpen = false;
            "
            class="bg-red-600 rounded px-2 py-1"
          >
            Reset
          </button>
        </div>
      </div>
    </Model>
  </teleport>
  <div class="z-10 footer p-3 bg-gray-900 text-white" style="height: 54px;">
    <div class="flex">
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
    <!-- <div></div> -->
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
  emits: ['download', 'save', 'reset'],
  components: { Model, Icon },
};
</script>

<style scoped></style>
