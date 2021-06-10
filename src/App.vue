<template>
  <div class="flex flex-col h-full">
    <Header />
    <div class="flex justify-between h-full">
      <CodeEditor :code="code" @updateCode="updateCode" />
      <QueryResult />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import CodeEditor from './components/CodeEditor.vue';
import QueryResult from './components/QueryResult.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  data() {
    return {
      code: 'SELECT * FROM MYTABLES;',
    };
  },
  methods: {
    updateCode(newValue) {
      // console.log(newValue);
      this.code = newValue;
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
