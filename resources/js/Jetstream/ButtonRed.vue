<template>
  <button :type="type" class="inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-400 active:bg-red-400 focus:outline-none focus:border-red-500 focus:ring focus:ring-red-500 disabled:opacity-25 transition">
    <slot></slot>
  </button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'submit',
    },
  }
})
</script>
