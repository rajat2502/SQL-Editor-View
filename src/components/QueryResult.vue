<template>
  <div
    class="border-l-8 border-gray-900 result text-center text-white bg-gray-800"
  >
    <h2 class="font-bold text-2xl tracking-wider uppercase bg-trueGray-900 p-4">
      Query Result
    </h2>
    <div class="flex justify-center p-6 flex-grow result-panel">
      <p class="text-xl text-red-600 font-medium" v-if="error">{{ error }}</p>
      <p class="text-xl" v-else-if="result === ''">
        Query results will appear here.
      </p>
      <pre class="leading-loose	p-2 text-2xl" v-else>{{ result }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QueryResult',
  props: {
    error: String,
    result: String,
  },
};
</script>
