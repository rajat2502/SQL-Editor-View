<template>
  <teleport v-if="modelOpen" to="#portal">
    <Model @closeModel="closeModel">
      <!-- Save Modal -->
      <div v-if="modelType === 'save'">
        <h1 class="text-3xl font-medium my-1 px-6 py-4">Program Saved!</h1>
        <hr />
        <h3 class="text-2xl p-6">The program has been saved :)</h3>
      </div>
      <!-- Copy Model -->
      <div v-else-if="modelType === 'copy'">
        <h1 class="text-3xl font-medium my-1 px-6 py-4">Content Copied!</h1>
        <hr />
        <h3 class="text-2xl p-6">Copying to clipboard was successful :)</h3>
      </div>
      <!-- Shortcut Model -->
      <div v-else-if="modelType === 'shortcuts'">
        <Shortcut />
      </div>
      <!-- Reset Model -->
      <div v-else>
        <h1 class="text-3xl font-medium my-1 px-6 py-4">Reset Program?</h1>
        <hr />
        <h3 class="text-2xl px-6 pt-6 pb-2">
          This action will reset the program!
        </h3>
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
      <button
        @click="showShortcutModel"
        class="inline-flex p-0 border border-white rounded-sm mr-4 px-2 items-center"
      >
        <Icon name="shortcut" /> &nbsp;Shortcuts
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
import Shortcut from './Shortcut.vue';

export default {
  name: 'Footer',
  data() {
    return {
      modelOpen: false,
      modelType: '',
    };
  },
  methods: {
    // copy code/result to the clipboard
    copy(type) {
      this.$emit('copy', type);
      this.modelOpen = true;
      this.modelType = 'copy';
    },
    // close modal
    closeModel() {
      this.modelOpen = false;
    },
    // Save program to local storage
    saveProgram() {
      this.$emit('save');
      this.modelOpen = true;
      this.modelType = 'save';
    },
    // Show reset Modal
    resetProgram() {
      this.modelOpen = true;
      this.modelType = 'reset';
    },
    // Show shortcut modal
    showShortcutModel() {
      this.modelOpen = true;
      this.modelType = 'shortcuts';
    },
    // keyhandler for handling the shortcuts
    keyDownHandler(e) {
      const cmdKey = window.navigator.platform.match('Mac')
        ? e.metaKey
        : e.ctrlKey;
      const modalsLength = document.querySelectorAll('.modal').length;
      if (cmdKey && !modalsLength && !e.shiftKey) {
        switch (e.keyCode) {
          case 66:
            e.preventDefault();
            this.copy('code');
            break;
          case 72:
            e.preventDefault();
            this.$emit('download');
            break;
          case 75:
            e.preventDefault();
            this.showShortcutModel();
            break;
          case 82:
            e.preventDefault();
            this.resetProgram();
            break;
          case 83:
            e.preventDefault();
            this.saveProgram();
            break;
          default:
            return;
        }
      }
    },
  },
  // add eventlistener for the shortcuts on keydown
  mounted() {
    document.addEventListener('keydown', this.keyDownHandler);
  },
  props: {
    result: String,
  },
  emits: ['copy', 'download', 'save', 'reset'],
  components: { Model, Icon, Shortcut },
};
</script>
