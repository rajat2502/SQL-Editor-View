<template>
  <div
    class="w-full border-r-4 border-gray-900"
    style="height: calc(100vh - 122px);"
  >
    <EditorHeader :running="running" @runCode="runCode" />
    <textarea :value="code" id="editor"></textarea>
  </div>
</template>

<script>
import * as CodeMirror from 'codemirror';

// Language Mode
import 'codemirror/mode/sql/sql';

// Addon imports
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closebrackets';

// CSS Imports
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
      scrollbarStyle: 'null',
      lineWrapping: true,
      matchBrackets: true,
      autoCloseBrackets: true,
      extraKeys: {
        'Ctrl-/': 'toggleComment',
        'Cmd-/': 'toggleComment',
      },
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
