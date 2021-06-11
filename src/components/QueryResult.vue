<template>
  <div
    class="border-l-8 border-gray-900 result text-center text-white bg-gray-800"
  >
    <p class="font-bold text-2xl tracking-wider uppercase bg-trueGray-900 p-4">
      Query Result
    </p>
    <div class="flex justify-center p-4 flex-grow result-panel">
      <p class="text-xl" v-if="result === ''">
        Query results will appear here.
      </p>
      <pre class="p-2 text-2xl" v-else>{{ result }}</pre>
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
  width: 600px;
}
</style>
