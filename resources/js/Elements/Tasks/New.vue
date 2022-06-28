<template>
<div class="grid grid-cols-6 gap-6">
  <div class="col-span-6 lg:col-span-2">
    <label for="name" class="block text-sm text-gray-700">Título:</label>
    <input
      type="text"
      name="title"
      id="title"
      v-model="form.title"
      class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
    >
  </div><!-- name -->
  <div class="col-span-6 lg:col-span-2">
    <label for="priority" class="block text-sm text-gray-700">Prioridad:</label>
    <select
      id="priority"
      name="priority"
      v-model.number="form.priority"
      class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
    >
      <option value="2">Alta !!!</option>
      <option value="1">Media !!</option>
      <option value="0">Baja !</option>
    </select>
  </div><!-- priority -->
  <div class="col-span-6 lg:col-span-2">
    <label for="source" class="block text-sm text-gray-700">Estado:</label>
    <select
      id="source"
      name="source"
      v-model="form.state"
      class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
    >
      <option
        :value="state.value"
        v-for="(state, i) in statesList"
        :key="i"
        v-text="state.name"
      ></option>
    </select>
  </div><!-- state -->
  <div class="col-span-6 lg:col-span-3">
    <div class="text-center border-b text-sm text-gray-700 border-purple mb-2">Fecha Inicio</div>
    <div class="flex w-full">
      <div class="flex flex-col w-2/4">
        <flat-pickr
          v-model="form.start_date"
          class="border-gray-300 rounded-md focus:border-purple focus:ring-transparent w-full"
          :config="arrivalDateOptions"
          placeholder="Fecha de inicio"
          :altInput="true"
        ></flat-pickr>
      </div><!-- f inicio -->
      <div class="flex w-1/4 flex-col px-2">
        <input
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
          type="number"
          min="0"
          max="23"
          placeholder="hora"
          name="start_hour"
          id="start_hour"
          autocomplete="off"
          v-model.number="start_hour"
        >
      </div><!-- horas -->
      <div class="flex w-1/4 flex-col px-2">
        <input
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
          type="number"
          min="0"
          max="59"
          placeholder="minutos"
          name="start_minute"
          id="start_minute"
          autocomplete="off"
          v-model.number="start_minute"
        >
      </div><!-- minutos -->
    </div>
  </div><!-- start date -->
  <div class="col-span-6 lg:col-span-3">
    <div class="text-center border-b text-sm text-gray-700 border-purple mb-2">Vencimiento</div>
    <div class="flex w-full">
      <div class="flex flex-col w-2/4">
        <flat-pickr
          v-model="form.end_date"
          class="border-gray-300 rounded-md focus:border-purple focus:ring-transparent w-full"
          :config="departureDateOptions"
          placeholder="Fecha Vencimiento"
          :altInput="true"
        ></flat-pickr>
      </div><!-- end date -->
      <div class="flex w-1/4 flex-col px-2">
        <input
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
          type="number"
          min="0"
          max="23"
          name="end_hour"
          id="end_hour"
          autocomplete="off"
          placeholder="hora"
          v-model.number="end_hour"
        >
      </div><!-- hours -->
      <div class="flex w-1/4 flex-col px-2">
        <input
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
          type="number"
          min="0"
          max="59"
          name="end_minute"
          id="end_minute"
          autocomplete="off"
          placeholder="minutos"
          v-model.number="end_minute"
        >
      </div><!-- minutes -->
    </div>
  </div><!-- end date -->
  <div class="col-span-2 lg:col-span-1">
    <div class="flex h-full items-center justify-start relative">
      <div class="flex items-center h-5">
        <input
          id="notify"
          name="notify"
          type="checkbox"
          v-model="form.notify"
          class="focus:ring-purple h-4 w-4 text-purple border-gray-300 rounded"
        >
      </div>
      <div class="ml-3 text-sm">
        <label for="notify" class="font-medium">Notificar:</label>
      </div>
    </div>
  </div><!-- notify -->
  <div class="col-span-2 lg:col-span-1" v-if="form.notify">
    <label for="minutes" class="block text-sm text-gray-700">Duración:</label>
    <select
      id="minutes"
      name="minutes"
      v-model.number="form.minutes"
      class="block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
    >
      <option value="0" selected>En la hora</option>
      <option value="5" selected>5 Minutos antes</option>
      <option value="10">10 Minutos antes</option>
      <option value="15">15 Minutos antes</option>
      <option value="30">30 Minutos antes</option>
      <option value="60">1 Hora antes</option>
      <option value="120">2 Horas antes</option>
    </select>
  </div><!-- minutes -->
  <div class="col-span-6 lg:col-span-2">
    <label for="assigned_to" class="block text-sm text-gray-700">Asignado a:</label>
    <div class="flex" v-if="!changeAssigned">
      <input
        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
        type="text"
        name="assigned_to"
        id="assigned_to"
        autocomplete="off"
        v-model="form.assigned"
        @click="changeAssigned = true"
      >
      <button
        class="ml-2 border bg-purple text-white rounded-md shadow-sm px-2 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
        @click="clearAssigned()"
      >x</button>
    </div>
    <SearchComponent
      :show="changeAssigned"
      @set-change="setAssigned"
      :url="route('api.search-employees')"
      label="fullname"
      @close-it="changeAssigned = false"
    />
  </div><!-- assigned_to -->
  <div class="col-span-6">
    <label for="body" class="block text-sm text-gray-700">Descripción de la Tarea:</label>
    <textarea
      name="body"
      id="body"
      v-model="form.body"
      rows="3"
      class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
    ></textarea>
  </div><!-- body -->
  <div class="col-span-6">
    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
      <jet-button
        type="button"
        :disabled="loading"
        @click.prevent="registerTask"
      >
        Registrar
      </jet-button>
    </div>
    <!-- submit button -->
  </div>
</div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import useHelpers from '@/Scripts/helpers.js'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import SearchComponent from '@/Elements/Search/SearchEmployee'
import JetButton from '@/Jetstream/Button'

const changeAssigned = ref(false)
const { statesList, dayjs } = useHelpers()
const props = defineProps({
  user: Object,
  loading: Boolean
})
const emit = defineEmits(['add-task', 'dates-error'])
let start_hour = ref(null)
let start_minute = ref(null)
let end_hour = ref(null)
let end_minute = ref(null)
let form = reactive({
  title: null,
  body: null,
  start_date: null,
  start_time: null,
  end_date: null,
  end_time: null,
  priority: 1,
  created_by: props.user.uuid,
  assigned: props.user.fullname,
  assigned_to: props.user.uuid,
  created_by: props.user.uuid,
  contact_uuid: null,
  state: 0,
  minutes: 0,
  notify: true,
})
let arrivalDateOptions = {
  'disable': [ (date) => (dayjs(date) <= dayjs().subtract(1, 'd')) ],
  onChange: (selectedDates, dateStr) => {
      form.end_date = selectedDates
  },
}
let departureDateOptions = {
  'disable': [ (date) => (dayjs(date) <= dayjs().subtract(1, 'd')) ]
}
let registerTask = () => {
  let ahour = start_hour.value < 10 ? '0' + start_hour.value : start_hour.value
  let aminute = start_minute.value < 10 ? '0' + start_minute.value : start_minute.value
  let dhour = end_hour.value < 10 ? '0' + end_hour.value : end_hour.value
  let dminute = end_minute.value < 10 ? '0' + end_minute.value : end_minute.value

  form.start_time = ahour + ':' + aminute
  form.end_time = dhour + ':' + dminute

  if(dayjs(form.end_date + ' ' + form.end_time).isBefore(dayjs(form.start_date + ' ' + form.start_time))) {
    emit('dates-error', 'La fecha/hora final no puede ser anterior a la fecha/hora de inicio')
    return
  }
  emit('add-task', form)
}
const clearAssigned = (e) => {
  form.assigned = null
  form.assigned_to = null
}
const setAssigned = (e) => {
  changeAssigned.value = false
  form.assigned = e.fullname
  form.assigned_to = e.uuid
}
</script>
