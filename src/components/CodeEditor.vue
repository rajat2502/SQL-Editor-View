<template>
  <div class="w-full">
    <!-- Editor's Header -->
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

    <!-- CodeMirror's TextArea -->
    <textarea v-model="code" id="editor"></textarea>
  </div>
</template>

<script>
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/sql/sql';

// Icon component for using SVGs
import Icon from './Icon.vue';

import 'codemirror/lib/codemirror.css';

// themes
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/material-darker.css';
import 'codemirror/theme/monokai.css';

export default {
  name: 'CodeEditor',
  data() {
    return {
      code: 'select * as mytable;',
    };
  },
  mounted() {
    this._editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
      lineNumbers: true,
      theme: 'dracula',
      tabSize: 2,
      mode: 'sql',
      value: this.code,
    });

    this._editor.on('changes', () => {
      this.code = this._editor.getValue();
    });
  },
  watch: {
    code: {
      handler(newVal) {
        console.log(newVal);
      },
    },
  },
  components: { Icon },
};
</script>

<style></style>
