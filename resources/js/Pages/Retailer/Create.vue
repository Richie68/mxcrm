<template>
  <Head title="Registrar Comisionista" />

  <header class="bg-white shadow mb-4">
    <div class="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 text-purple text-center font-semibold">
      Registrar Nuevo Comisionista
    </div>
  </header>

  <div class="lg:grid lg:grid-cols-12 lg:gap-x-5 pb-20">
    <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-2">
      <nav class="space-y-1">
        <Link
          :href="route('clientes.retailers.index')"
          class="text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm"
          aria-current="page"
        >
          <ClipboardListIcon class="h-6 w-6 mr-2" />
          <span class="truncate">
            Comisionistas
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
            </div>
          </div>
          <!-- name, website & assigned_to -->

          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 lg:col-span-2">
              <label
                for="branch_uuid"
                class="block text-sm text-gray-700"
              >Branch:</label>
              <input
                type="text"
                name="branch_uuid"
                id="branch_uuid"
                v-model="branch"
                readonly
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
                v-if="!changeBranch"
                @click="changeBranch = true"
              >
              <SearchBranchComponent
                :show="changeBranch"
                @set-branch-change="setBranch"
                label="name"
                @close-it="changeBranch = false"
              />
            </div><!-- branch_uuid -->
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
            @click.prevent="saveAgency"
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
import { ref, reactive, onMounted } from 'vue'
import { Inertia } from '@inertiajs/inertia'
import { ViewGridIcon,  ClipboardListIcon  } from '@heroicons/vue/outline'
import SearchBranchComponent from '@/Elements/Search/SearchBranch'
import SearchComponent from '@/Elements/Search/SearchCategories'
import useRetailers from '@/Scripts/composables/retailers';
import useBranchs from '@/Scripts/composables/branchs'
import Errors from '@/Elements/Utilities/Errors'
import JetButton from '@/Jetstream/Button'

const props = defineProps({
  user: Object,
})
const loading = ref(false)
const changeAssigned = ref(false)
const changeBranch = ref(false)
let branch = ref(null)
const { storeRetailer, errors } = useRetailers()
const { getBranchs } = useBranchs()

onMounted( getBranchs())

let form = reactive({
  name: null,
  created_by: props.user.uuid,
  description: null,
  assigned_to: null,
  website: null,
  branch_uuid: null,
  status: 1,
})
let saveAgency = async () => {
  loading.value = true
  await storeRetailer({...form});
  loading.value = false
  if(!errors.value) {
    Inertia.visit(route('clientes.retailers.index'), {
      method: 'get'
    })
  }
}
let setAssigned = (e) => {
  changeAssigned.value = false
  form.assigned = e.fullname
  form.assigned_to = e.uuid
}
let setBranch = (e) => {
  changeBranch.value = false
  branch.value = e.name
  form.branch_uuid = e.uuid
}
if(props.user.branch) {
  setBranch(props.user.branch)
}
</script>
