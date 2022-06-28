<template>
  <Head title="Registrar Contacto" />

  <header class="bg-white shadow mb-4">
    <div class="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 text-purple text-center font-semibold">
      Registrar Nuevo Contacto
    </div>
  </header>

  <div class="lg:grid lg:grid-cols-12 lg:gap-x-5 pb-20">
    <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-2">
      <nav class="space-y-1">
        <Link
          :href="route('clientes.contacts.index')"
          class="text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm"
          aria-current="page"
        >
          <ClipboardListIcon class="h-6 w-6 mr-2" />
          <span class="truncate">
            Contactos
          </span>
        </Link>

        <Link
          href="#"
          class="text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm bg-gray-50"
          aria-current="page"
        >
          <ViewGridIcon class="h-6 w-6 mr-2" />
          <span class="truncate">
            Generales
          </span>
        </Link>
        <Loader :show="loading" />
      </nav>
    </aside>

    <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-10">
      <div class="shadow sm:rounded-md">
        <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
          <div class="mb-4 border-b border-purple pb-1">
            <h3 class="text-lg font-semibold leading-6 text-purple flex">
              <ViewGridIcon class="h-6 w-6 mr-2" />
              Generales
            </h3>
            <p class="text-gray-600 text-sm">Después de registrar al Contacto, se podrá asignar una dirección y/o cuentas de correo adicionales</p>
          </div>
          <!-- title section generales -->

          <Errors :errors="errors" />
          <!-- display errors -->

          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 lg:col-span-2">
              <label for="salutation" class="block text-sm text-gray-700">Saludo:</label>
              <select
                id="salutation"
                name="salutation"
                v-model="form.salutation"
                class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
              >
                <option
                  :value="salutation.salute"
                  v-for="(salutation, i) in salutations"
                  :key="i"
                  v-text="salutation.salute"
                ></option>
              </select>
            </div>
            <div class="col-span-6 lg:col-span-2">
              <label for="firstname" class="block text-sm text-gray-700">Nombre:</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                v-model="form.firstname"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
              >
            </div>
            <div class="col-span-6 lg:col-span-2">
              <label for="lastname" class="block text-sm text-gray-700">Apellido:</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                v-model="form.lastname"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
              >
            </div>
          </div>
          <!-- firstname, lastname & salutation -->

          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 lg:col-span-2">
              <label for="phone_mobil" class="block text-sm text-gray-700">Tel. Celular:</label>
              <input
                type="text"
                name="phone_mobil"
                id="phone_mobil"
                v-model="form.phone_mobil"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
              >
            </div>
            <div class="col-span-6 lg:col-span-2">
              <label for="phone_work" class="block text-sm text-gray-700">Tel. Trabajo:</label>
              <input
                type="text"
                name="phone_work"
                id="phone_work"
                v-model="form.phone_work"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
              >
            </div>
            <div class="col-span-6 lg:col-span-2">
              <label for="phone_fax" class="block text-sm text-gray-700">Tel. Fax</label>
              <input
                type="text"
                name="phone_fax"
                id="phone_fax"
                v-model="form.phone_fax"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
              >
            </div>
          </div>
          <!-- móvil, fax & work phone -->

          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 lg:col-span-2">
              <label for="title" class="block text-sm text-gray-700">Puesto:</label>
              <input
                type="text"
                name="title"
                id="title"
                v-model="form.title"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
              >
            </div><!-- puesto -->
            <div class="col-span-6 lg:col-span-2">
              <label for="department" class="block text-sm text-gray-700">Área de Trabajo:</label>
              <input
                type="text"
                name="department"
                id="department"
                v-model="form.department"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
              >
            </div><!-- area de trabajo -->
            <div class="col-span-6 lg:col-span-2">
              <label for="company" class="block text-sm text-gray-700">Empresa:</label>
              <input
                type="text"
                name="company"
                id="company"
                v-model="form.company"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
              >
            </div><!-- company id -->
          </div>
          <!-- company, title & department -->

          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 lg:col-span-2">
              <label for="email" class="block text-sm text-gray-700">Correo Electrónico: <span class="text-xs">(principal)</span></label>
              <input
                type="email"
                name="email"
                id="email"
                v-model="form.email"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
              >
            </div><!-- email -->
            <div class="col-span-6 lg:col-span-2">
              <label for="assistant" class="block text-sm text-gray-700">Asistente:</label>
              <input
                type="text"
                name="assistant"
                id="assistant"
                v-model="form.assistant"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
              >
            </div><!-- assistant -->
            <div class="col-span-6 lg:col-span-2">
              <label for="assistant_phone" class="block text-sm text-gray-700">Tel. Asistente</label>
              <input
                type="text"
                name="assistant_phone"
                id="assistant_phone"
                v-model="form.assistant_phone"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
              >
            </div><!-- assistant phone -->
          </div>
          <!-- assistant, assistant phone -->
          <div class="flex flex-col w-full">
            <label for="description" class="block text-sm text-gray-700">Descripción del Contacto:</label>
            <textarea
              name="description"
              id="description"
              v-model="form.description"
              rows="3"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
            ></textarea>
          </div><!-- description -->

          <div class="grid grid-cols-6 gap-6">
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
            <div class="col-span-6 lg:col-span-2">
              <label for="source" class="block text-sm text-gray-700">Toma de Contacto:</label>
              <select
                id="source"
                name="source"
                v-model="form.source"
                class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
              >
                <option
                  :value="source.name"
                  v-for="(source, i) in sources"
                  :key="i"
                  v-text="source.name"
                ></option>
              </select>
            </div><!-- source -->
            <div class="col-span-2 lg:col-span-2">
              <div class="flex h-full items-center justify-start relative">
                <div class="flex items-center h-5">
                  <input
                    id="call"
                    name="call"
                    type="checkbox"
                    v-model="form.call"
                    class="focus:ring-purple h-4 w-4 text-purple border-gray-300 rounded"
                  >
                </div>
                <div class="ml-3 text-sm">
                  <label for="call" class="font-medium">Recibir llamadas:</label>
                </div>
              </div>
            </div><!-- call -->
          </div>
          <!-- assigned_to, source & call -->
        </div>

        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <jet-button
            type="button"
            :disabled="loading"
            @click.prevent="saveContact"
          >
            Registrar
          </jet-button>
        </div>
        <!-- submit button -->
      </div>
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
import { Inertia } from '@inertiajs/inertia'
import { ref } from 'vue'
import useHelpers from '@/Scripts/helpers.js'
import Errors from '@/Elements/Utilities/Errors'
import useContacts from '@/Scripts/composables/contacts'
import { ViewGridIcon,  ClipboardListIcon  } from '@heroicons/vue/outline'
import JetButton from '@/Jetstream/Button'
import SearchComponent from '@/Elements/Search/SearchEmployee'
import Notification from '@/Elements/Modals/Notification'
import Loader from '@/Elements/Utilities/Loader'

const props = defineProps({
  user: Object,
})
const loading = ref(false)
const changeAssigned = ref(false)
const modalOpen = ref(false)
const modalDetails = ref({
  title: null,
  message: null,
  type: null,
})
const { salutations, sources } = useHelpers()
const { storeContact, errors } = useContacts()
const form = ref({
  salutation: null,
  firstname: null,
  lastname: null,
  phone_work: null,
  phone_mobil: null,
  phone_fax: null,
  title: null,
  department: null,
  company_id: null,
  assigned: props.user.fullname,
  assigned_to: props.user.uuid,
  description: null,
  call: true,
  assistant: null,
  assistant_phone: null,
  status: 'nuevo',
  source: null,
  created_by: props.user.uuid
})
const saveContact = async () => {
  loading.value = true
  await storeContact({...form.value});
  if(!errors.value) {
    modalDetails.value.title = 'Contacto registrado'
    modalDetails.value.message = 'Se ha registrado correctamente el Contacto.'
    modalDetails.value.type = 'success'
    modalOpen.value = true
    setTimeout( () => {
      modalDetails.value.title = null
      modalDetails.value.message = null
      modalDetails.value.type = null
      modalOpen.value = false
      loading.value = false
      Inertia.visit(route('clientes.contacts.index'), {
        method: 'get'
      })
    }, 2000)
  } else {
    loading.value = false
  }
}
const clearAssigned = (e) => {
  form.value.assigned = null
  form.value.assigned_to = null
}
const setAssigned = (e) => {
  changeAssigned.value = false
  form.value.assigned = e.fullname
  form.value.assigned_to = e.uuid
}
</script>
