<template>
  <div class="relative" v-if="show">
    <div class="flex">
      <input
        type="search"
        name="search"
        v-model="search"
        autocomplete="off"
        autofocus
        placeholder="Buscar ..."
        class="mt-1 mr-2 block w-full border border-gray-300 rounded-md shadow-sm px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
      >
      <jet-button @click="$emit('close-it')">Close</jet-button>
    </div>
    <ul
      class="bg-white border mt-2 py-4 space-y-2 rounded-md max-h-[300px] overflow-y-scroll min-w-full absolute top-full"
      v-if="results"
    >
      <li
        class="text-sm text-purple hover:bg-gray-200 py-2 pl-4 pr-2"
        v-for="result in results"
        :key="result.uuid"
        v-text="result[label]"
        @click="setCategory(result)"
      ></li>
      <li class="text-center font-semibold text-xs" v-if="results.length == 0">
        Sin resultados
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import debounce from "lodash/debounce"
import JetButton from '@/Jetstream/Button'

let search = ref('');
let results = ref(null)

const props = defineProps({
  show: Boolean,
  label: String,
  url: String,
  parent: Boolean,
})

const emit = defineEmits(['set-change', 'close-it'])

watch(
  () => props.show,
  (val) => {
    if(val) {
      search.autofocus
    }
  }
)

watch(search, debounce(function (value) {
  if(search.value == '') {
    results.value = null
  } else {
    axios
      .post(props.url, { search: value, parent: props.parent })
      .then( response => {
        results.value = response.data
      })
  }
}, 300));

const setCategory = (event) => {
  emit("set-change", event)
  search.value = ''
}

</script>
