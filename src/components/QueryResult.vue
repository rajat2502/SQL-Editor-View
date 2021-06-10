<template>
  <div
    class="border-l-8 border-gray-900 result text-center text-white bg-gray-800"
  >
    <p class="tracking-wider uppercase bg-trueGray-900 p-2">Query Result</p>
    <div class="flex p-2 flex-grow">
      <p class="text-xs">Query results will appear here.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QueryResult',
  props: {},
};
</script>

<style scoped>
.result {
  width: 400px;
}
</style>
