<template>
  <div class="w-full">
    <EditorHeader :running="running" @runCode="runCode" />
    <textarea :value="code" id="editor"></textarea>
  </div>
</template>

<script>
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/sql/sql';

import 'codemirror/lib/codemirror.css';

// themes
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/material-darker.css';
import 'codemirror/theme/monokai.css';

import EditorHeader from './EditorHeader.vue';

export default {
  name: 'CodeEditor',
  mounted() {
    this._editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
      lineNumbers: true,
      theme: 'dracula',
      tabSize: 2,
      mode: 'sql',
      value: this.code,
    });

    this._editor.on('changes', () => {
      this.$emit('updateCode', this._editor.getValue());
    });
  },
  methods: {
    runCode() {
      this.$emit('runSQLCode');
    },
  },
  props: {
    code: String,
    running: Boolean,
  },
  emits: ['updateCode', 'runSQLCode'],
  components: { EditorHeader },
};
</script>

<style></style>
