<template>
  <button
    :type="type"
    class="inline-flex items-center px-3 py-2 bg-purple border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-wide hover:bg-purple-dark active:bg-purple-dark focus:outline-none focus:border-purple-light focus:ring focus:ring-purple-light disabled:opacity-25 transition"
    :class="classes"
  >
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
    classes: {
      type: String,
      default: ''
    }
  }
})
</script>
