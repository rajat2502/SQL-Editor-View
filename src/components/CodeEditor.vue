<template>
  <div class="w-full"><textarea v-model="code" id="editor"></textarea></div>
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

export default {
  name: 'CodeEditor',
  data() {
    return {
      code: 'select * from mytable;',
    };
  },
  components: {},
  mounted() {
    CodeMirror.fromTextArea(document.getElementById('editor'), {
      lineNumbers: true,
      theme: 'dracula',
      mode: 'sql',
    });
  },
};
</script>

<style></style>
