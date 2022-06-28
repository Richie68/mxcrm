<template>
  <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
    <div class="relative bg-green-600 mb-4" v-if="open">
      <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div class="pr-16 sm:text-center sm:px-16">
          <p class="font-medium text-white">
            Bien!, se ha registrado la Dirección de {{ modelo }}
          </p>
        </div>
        <div class="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
          <button type="button" class="flex p-2 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-white" @click="open = false">
            <span class="sr-only">Dismiss</span>
            <XIcon class="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { XIcon  } from '@heroicons/vue/outline'

const props = defineProps({
  modelo: String,
  open: Boolean
})
</script>
