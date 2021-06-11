<template>
  <div
    class="modal absolute top-0 left-0 z-10 flex justify-center items-center w-full h-full"
    style="background: rgba(0, 0, 0, 0.3)"
  >
    <div class="modal-main relative bg-coolGray-800 text-white rounded">
      <button
        title="close"
        className="text-3xl absolute top-2 right-2 rounded h-10 w-10 flex items-center justify-center bg-coolGray-900"
        @click="$emit('closeModel')"
      >
        &times;
      </button>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Model',
  emits: ['closeModel'],
  mounted() {
    const closeModalEvent = (e) => {
      if (e.target === e.currentTarget) {
        this.$emit('closeModel');
      }
    };
    document.querySelector('.modal').addEventListener('click', closeModalEvent);
  },
};
</script>

<style scoped></style>
