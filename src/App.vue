<template>
  <div class="flex flex-col h-full">
    <Header />
    <div class="flex justify-between h-full">
      <CodeEditor
        :code="code"
        :running="running"
        @saveCode="saveCode"
        @updateCode="updateCode"
        @runSQLCode="runSQLCode"
      />
      <QueryResult :error="error" :result="result" />
    </div>
    <Footer
      :result="result"
      @copy="copy"
      @download="downloadFile"
      @save="saveCode"
      @reset="resetCode"
    />
  </div>
</template>

<script>
import { runCode } from './api';

import Header from './components/Header.vue';
import CodeEditor from './components/CodeEditor.vue';
import QueryResult from './components/QueryResult.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  data() {
    return {
      code: 'SELECT * FROM STUDENTS;',
      running: false,
      result: '',
      error: '',
    };
  },
  methods: {
    updateCode(newValue) {
      this.code = newValue;
    },
    downloadFile() {
      const link = document.createElement('a');
      const mimeType = 'text/sql || text/plain';
      link.setAttribute('download', 'main.sql');
      link.setAttribute(
        'href',
        'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(this.code)
      );
      link.click();
    },
    copy(x) {
      let copyContent;
      if (x === 'code') copyContent = this.code;
      else copyContent = this.result;
      navigator.clipboard.writeText(copyContent).then(
        () => {
          console.log('Async: Copying to clipboard was successful!');
        },
        (err) => {
          console.error('Async: Could not copy text: ', err);
        }
      );
    },
    saveCode() {
      localStorage.setItem('code', this.code);
    },
    resetCode() {
      localStorage.clear();
      location.reload();
    },
    async runSQLCode() {
      this.running = true;
      this.error = '';
      this.result = '';
      const data = await runCode(this.code);
      if (data.stderr) this.error = data.stderr;
      else this.result = data.stdout;
      this.running = false;
    },
  },
  created() {
    const savedCode = localStorage.getItem('code');
    if (savedCode) this.code = savedCode;
  },
  components: {
    Header,
    CodeEditor,
    QueryResult,
    Footer,
  },
};
</script>

<style>
#app {
  height: 100%;
}
</style>
