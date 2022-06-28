<template>
  <Head title="Registrar Proveedor" />

  <header class="bg-white shadow mb-4">
    <div class="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 text-purple text-center font-semibold">
      Registrar Nuevo Proveedor
    </div>
  </header>

  <div class="lg:grid lg:grid-cols-12 lg:gap-x-5 pb-20">
    <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-2">
      <nav class="space-y-1">
        <Link
          :href="route('catalogos.suppliers.index')"
          class="text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm"
          aria-current="page"
        >
          <ClipboardListIcon class="h-6 w-6 mr-2" />
          <span class="truncate">
            Listado Proveedores
          </span>
        </Link>

        <Link
          href="#"
          class="text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm bg-gray-50"
          aria-current="page"
        >
          <ViewBoardsIcon class="h-6 w-6 mr-2" />
          <span class="truncate">
            Generales
          </span>
        </Link>
        <div class="flex justify-center py-3 text-purple" v-if="loading">
          <svg class="animate-spin -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      </nav>
    </aside>

    <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-10">
      <div class="shadow sm:rounded-md">
        <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
          <div class="mb-4 border-b border-purple pb-1">
            <h3 class="flex text-lg font-semibold leading-6 text-purple">
              <ViewBoardsIcon class="h-6 w-6 mr-2" />
              Generales
            </h3>
            <p class="text-gray-600 text-sm">Después de registrar al Contacto, se podrá asignar una dirección y/o cuentas de correo adicionales</p>
          </div>
          <!-- title section generales -->

          <Errors :errors="errors" />
          <!-- display errors -->

          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 lg:col-span-2">
              <label for="name" class="block text-sm text-gray-700">Nombre:</label>
              <input
                type="text"
                name="name"
                id="name"
                v-model="form.name"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
              >
            </div><!-- name -->
            <div class="col-span-6 lg:col-span-2">
              <label for="phone_work" class="block text-sm text-gray-700">Tel. Trabajo:</label>
              <input
                type="text"
                name="phone_work"
                id="phone_work"
                v-model="form.phone_work"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
              >
            </div><!-- phone work -->
            <div class="col-span-6 lg:col-span-2">
              <label for="assigned_to" class="block text-sm text-gray-700">Asignado a:</label>
              <input
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
                type="text"
                name="assigned_to"
                id="assigned_to"
                autocomplete="off"
                v-model="form.assigned"
                v-if="!changeAssigned"
                @click="changeAssigned = true"
              >
              <SearchComponent
                :show="changeAssigned"
                @set-change="setAssigned"
                :url="route('api.search-employees')"
                label="fullname"
                @close-it="changeAssigned = false"
              />
            </div><!-- assigned_to -->
          </div>
          <!-- name, phone worl & assigned to -->

          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 lg:col-span-2">
              <label for="razon_social" class="block text-sm text-gray-700">Razón Social:</label>
              <input
                type="text"
                name="razon_social"
                id="razon_social"
                v-model="form.razon_social"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
              >
            </div><!-- razon social -->
            <div class="col-span-6 lg:col-span-2">
              <label for="rfc" class="block text-sm text-gray-700">RFC:</label>
              <input
                type="text"
                name="rfc"
                id="rfc"
                v-model="form.rfc"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
              >
            </div><!-- rfc -->
            <div class="col-span-6 lg:col-span-2">
              <label for="website" class="block text-sm text-gray-700">Página Web:</label>
              <input
                type="url"
                placeholder="https://example.com"
                pattern="https://.*"
                name="website"
                id="website"
                v-model="form.website"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
              >
            </div><!-- website -->
          </div>
          <!-- razon social, rfc & website -->

          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 lg:col-span-2">
              <label for="code" class="block text-sm text-gray-700">Código</label>
              <input
                type="text"
                name="code"
                id="code"
                v-model="form.code"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm uppercase"
              >
            </div>
            <div class="col-span-6 lg:col-span-4">
              <label for="description" class="block text-sm text-gray-700">Descripción del Contacto:</label>
              <textarea
                name="description"
                id="description"
                v-model="form.description"
                rows="3"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
              ></textarea>
            </div><!-- description -->
          </div>
          <!-- work phone & description -->
        </div>

        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <jet-button
            type="button"
            :disabled="loading"
            @click.prevent="saveSupplier"
          >
            Registrar
          </jet-button>
        </div>
        <!-- submit button -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { Inertia } from '@inertiajs/inertia'
import { ref } from 'vue'
import Errors from '@/Elements/Utilities/Errors'
import useSuppliers from '@/Scripts/composables/suppliers'
import { ViewBoardsIcon,  ClipboardListIcon  } from '@heroicons/vue/outline'
import JetButton from '@/Jetstream/Button'
import SearchComponent from '@/Elements/Search/SearchEmployee'

const props = defineProps({
  user: Object,
})

const loading = ref(false)
const changeAssigned = ref(false)

const form = ref({
  name: null,
  lastname: null,
  phone_work: null,
  assigned: props.user.fullname,
  assigned_to: props.user.uuid,
  description: null,
  code: null,
  razon_social: null,
  rfc: null,
  status: 1,
  website: null,
  created_by: props.user.uuid
})

const { storeSupplier, errors } = useSuppliers()

const saveSupplier = async () => {
  loading.value = true
  await storeSupplier({...form.value});
  loading.value = false
  if(!errors.value) {
    Inertia.visit(route('catalogos.suppliers.index'), {
      method: 'get'
    })
  }
}

const setAssigned = (e) => {
  changeAssigned.value = false
  form.value.assigned = e.fullname
  form.value.assigned_to = e.uuid
}

</script>
