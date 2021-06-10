<template>
  <div
    class="border-l-8 border-gray-900 result text-center text-white bg-gray-800"
  >
    <p class="tracking-wider uppercase bg-trueGray-900 p-2">Query Result</p>
    <div class="flex justify-center p-4 flex-grow">
      <p v-if="result === ''" class="text-xs">
        Query results will appear here.
      </p>
      <pre class="p-2" v-else>{{ result }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QueryResult',
  props: {
    result: String,
  },
};
</script>

<style scoped>
.result {
  width: 400px;
}
</style>
