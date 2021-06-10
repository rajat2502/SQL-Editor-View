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
    <Footer />
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
    };
  },
  methods: {
    updateCode(newValue) {
      this.code = newValue;
    },
    async runSQLCode() {
      this.running = true;
      const data = await runCode(this.code);
      this.result = data;
      this.running = false;
    },
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
