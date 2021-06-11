<template>
  <div className="flex p-6">
    <div>
      <h3 className="text-2xl py-2 font-medium underline">Website Shortcuts</h3>
      <p className="mt-4 text-xl">
        <span className="bg-white text-coolGray-900 py-1 px-2 rounded">
          Ctrl/Cmd + S
        </span>
        &nbsp;- Save Program
      </p>
      <p className="mt-4 text-xl">
        <span className="bg-white text-coolGray-900 py-1 px-2 rounded">
          Ctrl/Cmd + B
        </span>
        &nbsp;- Copy Program
      </p>
      <p className="mt-4 text-xl">
        <span className="bg-white text-coolGray-900 py-1 px-2 rounded">
          Ctrl/Cmd + R
        </span>
        &nbsp;- Open Reset Modal
      </p>
      <p className="mt-4 text-xl">
        <span className="bg-white text-coolGray-900 py-1 px-2 rounded">
          Ctrl/Cmd + H
        </span>
        &nbsp;- Download SQL file
      </p>
      <p className="mt-4 text-xl">
        <span className="bg-white text-coolGray-900 py-1 px-2 rounded">
          Ctrl/Cmd + K
        </span>
        &nbsp;- Show Shortcuts Modal
      </p>
    </div>
    <div>
      <h3 className="text-2xl py-2 font-medium underline">Editor Shortcuts</h3>
      <p className="mt-4 text-xl">
        <span className="bg-white text-coolGray-900 py-1 px-2 rounded">
          Ctrl/Cmd + /
        </span>
        &nbsp; - Line comment
      </p>
      <p className="mt-4 text-xl">
        <span className="bg-white text-coolGray-900 py-1 px-2 rounded">
          Ctrl/Cmd + /
        </span>
        &nbsp; - Block comment
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shortcut',
};
</script>

<style scoped></style>
