<template>
  <Head title="Registrar Categoría" />

  <header class="bg-white shadow mb-4">
    <div class="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 text-purple text-center font-semibold">
      Registrar Nueva Categoría
    </div>
  </header>

  <div class="lg:grid lg:grid-cols-12 lg:gap-x-5 pb-20">
    <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-2">
      <nav class="space-y-1">
        <Link
          :href="route('catalogos.categories.index')"
          class="text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm"
          aria-current="page"
        >
          <ClipboardListIcon class="h-6 w-6 mr-2" />
          <span class="truncate">
            Categorías
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
            <h3 class="text-lg font-semibold leading-6 text-purple flex">
              <ViewGridIcon class="h-6 w-6 mr-2" />
              Generales
            </h3>
            <p class="text-gray-600 text-sm">Para asignar una categoría padre a este registro, verifique primero que ya se encuentre registrada la Categoría Padre.</p>
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
            </div>
            <div class="col-span-6 lg:col-span-2 relative z-50">
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
          <!-- name & description -->
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 lg:col-span-2">
              <label for="parent" class="block text-sm text-gray-700">Categoría Padre:</label>
              <input
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
                type="text"
                name="parent"
                id="parent"
                autocomplete="off"
                v-model="form.parent"
                v-if="!changeParent"
                @click="changeParent = true"
              >
              <SearchComponent
                :show="changeParent"
                @set-change="setParent"
                :url="route('api.search-categories')"
                label="name"
                @close-it="changeParent = false"
                :parent="form.is_parent"
              />
            </div><!-- parent_uuid -->
            <div class="col-span-2 lg:col-span-2">
              <div class="flex h-full items-center justify-start relative z-0">
                <div class="flex items-center h-5">
                  <input
                    id="is_parent"
                    name="is_parent"
                    type="checkbox"
                    v-model="form.is_parent"
                    class="focus:ring-purple h-4 w-4 text-purple border-gray-300 rounded"
                  >
                </div>
                <div class="ml-3 text-sm relative z-0">
                  <label for="is_parent" class="font-medium">Es Categoría Padre?:</label>
                </div>
              </div>
            </div><!-- is_parent -->
          </div>

          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 lg:col-span-4">
              <div class="flex flex-col w-full">
                <label for="description" class="block text-sm text-gray-700">Descripción:</label>
                <textarea
                  name="description"
                  id="description"
                  v-model="form.description"
                  rows="3"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
                ></textarea>
              </div>
            </div>
          </div>
          <!-- description -->

        </div>

        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <jet-button
            type="button"
            :disabled="loading"
            @click.prevent="saveCategory"
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
import { ViewGridIcon,  ClipboardListIcon  } from '@heroicons/vue/outline'
import useCategories from '@/Scripts/composables/categories';
import JetButton from '@/Jetstream/Button'
import SearchComponent from '@/Elements/Search/SearchCategories'

const props = defineProps({
  user: Object,
})
const loading = ref(false)
const changeAssigned = ref(false)
const changeParent = ref(false)
const form = ref({
  name: null,
  created_by: props.user.uuid,
  description: null,
  assigned: props.user.fullname,
  assigned_to: props.user.uuid,
  is_parent: false,
  parent_uuid: null,
  status: 1,
})
const { storeCategory, errors } = useCategories()

const saveCategory = async () => {
  loading.value = true
  await storeCategory({...form.value});
  loading.value = false
  if(!errors.value) {
    Inertia.visit(route('catalogos.categories.index'), {
      method: 'get'
    })
  }
}

const setAssigned = (e) => {
  changeAssigned.value = false
  form.value.assigned = e.fullname
  form.value.assigned_to = e.uuid
}

const setParent = (e) => {
  changeParent.value = false
  form.value.parent_uuid = e.uuid
  form.value.parent = e.name
}

</script>
