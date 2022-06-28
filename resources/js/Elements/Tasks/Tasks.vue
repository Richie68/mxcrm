<template>
<div>
  <div v-if="nueva">
    <NewTask
      :user="user"
      :loading="loading"
      @add-task="addingTask"
      @dates-error="errorDate"
    />
  </div>
  <div v-if="thetasks.length > 0 && !nueva">
    <List :tasks="thetasks" @remove-task="askForRemoval" />
  </div>
  <div class="text-center py-2" v-if="thetasks.length == 0 && !nueva">
    No hay tareas asignadas
  </div>

  <teleport to="#modals">
    <Notification
      :modal-open="modalOpen"
      @dismissModal="modalOpen = false"
      :attributes="modalDetails"
    />
  </teleport>

</div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import List from './List'
import NewTask from './New'
import Notification from '@/Elements/Modals/Notification'

const props = defineProps({
  user: Object,
  thetasks: Array,
  nueva: Boolean,
  loading: Boolean
})
let emit = defineEmits(['add-a-task', 'remove-task'])
const modalOpen = ref(false)
const modalDetails = reactive({
  title: null,
  message: null,
  type: null,
})
let addingTask = payload => {
  emit('add-a-task', payload)
}
let errorDate = (payload) => {
  modalDetails.title = 'Aviso'
  modalDetails.message = payload
  modalDetails.type = 'error'
  modalOpen.value = true
  setTimeout( () => {
    modalDetails.title = null
    modalDetails.message = null
    modalDetails.type = null
    modalOpen.value = false
  }, 3000)
}
const askForRemoval = (e) => {
  emit('remove-task', e)
}
</script>
