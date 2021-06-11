<template>
  <div class="flex flex-col h-full">
    <Header />
    <div class="flex justify-between h-full">
      <CodeEditor
        :code="code"
        :running="running"
        @updateCode="updateCode"
        @runSQLCode="runSQLCode"
      />
      <QueryResult :result="result" />
    </div>
    <Footer @download="downloadFile" @save="saveCode" @reset="resetCode" />
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
      fileName: '',
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
    saveCode() {
      localStorage.setItem('code', this.code);
    },
    resetCode() {
      localStorage.clear();
      location.reload();
    },
    async runSQLCode() {
      this.running = true;
      const data = await runCode(this.code);
      this.result = data;
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
