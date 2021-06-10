<template>
  <div class="flex flex-col h-full">
    <Header />
    <div class="flex justify-between h-full">
      <CodeEditor />
      <QueryResult />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import CodeEditor from './components/CodeEditor.vue';
import QueryResult from './components/QueryResult.vue';

export default {
  name: 'App',
  components: {
    Header,
    CodeEditor,
    QueryResult,
  },
};
</script>

<style>
#app {
  height: 100%;
}
</style>
