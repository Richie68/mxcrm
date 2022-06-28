<template>
  <transition
    enter-active-class="transition ease-out duration-200"
    enter-from-class="opacity-0 -translate-y-1"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-in duration-150"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-1"
  >
    <div class="grid grid-cols-6 gap-6" v-if="errors">
      <div class="col-span-6 text-right">
        <span
          class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-600 text-white"
          @click="errors = null"
        >
          <XIcon class="w-4 h-4" />
        </span>
      </div>
      <div
        v-for="(v, k) in errors"
        :key="k"
        class="bg-red-600 text-white rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0"
        :class="[errors.length == 1 ? 'col-span-6' : '']"
      >
        <p
          v-for="error in v"
          :key="error"
          class="text-sm"
        >
          {{ error }}
        </p>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { XIcon  } from '@heroicons/vue/outline'

const props = defineProps({
  errors: Object
})
</script>
