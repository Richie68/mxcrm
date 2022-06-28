<template>
  <Head title="Actualizar Agencia" />

  <header class="bg-white shadow mb-4">
    <div class="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 text-purple text-center font-semibold">
      Actualizar información de Agencia
    </div>
  </header>

  <div class="lg:grid lg:grid-cols-12 lg:gap-x-5 pb-20">
    <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-2">
      <nav class="space-y-1">
        <Link
          :href="route('clientes.agencies.create')"
          class="text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm"
        >
          <PlusIcon class="w-6 h-6 mr-2" /> Nuevo
        </Link>
        <Link
          :href="route('clientes.agencies.index')"
          class="text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm"
          aria-current="page"
        >
          <ClipboardListIcon class="h-6 w-6 mr-2" />
          <span class="truncate">
            Agencias
          </span>
        </Link>

        <div
          class="text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm cursor-pointer bg-gray-50"
          aria-current="page"
        >
          <ViewGridIcon class="h-6 w-6 mr-2" />
          <span class="truncate">
            Generales
          </span>
        </div>
        <Loader :show="loading" />
      </nav>
    </aside>

    <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-10" v-if="form">
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
            <div class="col-span-6 lg:col-span-2 relative">
              <label for="assigned_to" class="block text-sm text-gray-700">Asignado a:</label>
              <input
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
                type="text"
                name="assigned_to"
                id="assigned_to"
                autocomplete="off"
                v-model="assigned"
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
          <!-- name & assigned_to -->

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
            <div class="col-span-6 lg:col-span-3">
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
            <div class="col-span-6 lg:col-span-1">
              <p class="mt-2 text-sm">
                Registrado por:
                <span class="block font-semibold mt-1">{{ form.creator.fullname }}</span>
              </p>
            </div>
          </div>
          <!-- description -->

        </div>

        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <jet-button
            type="button"
            :disabled="loading"
            @click.prevent="updateTheAgency"
          >
            Actualizar
          </jet-button>
        </div>
        <!-- submit button -->
      </div>
    </div>
  </div>

</template>

<script setup>
import { Inertia } from '@inertiajs/inertia'
import { onMounted, ref } from 'vue'
import { ViewGridIcon, ClipboardListIcon, PlusIcon } from '@heroicons/vue/outline'
import SearchBranchComponent from '@/Elements/Search/SearchBranch'
import SearchComponent from '@/Elements/Search/SearchCategories'
import useAgencies from '@/Scripts/composables/agencies'
import useBranchs from '@/Scripts/composables/branchs'
import Errors from '@/Elements/Utilities/Errors'
import Loader from '@/Elements/Utilities/Loader'
import JetButton from '@/Jetstream/Button'

const props = defineProps({
  user: Object,
  theagency: Object
})
const loading = ref(false)
const changeAssigned = ref(false)
const changeBranch = ref(false)
const form = ref(null)
let branch = ref(null)
let assigned = ref(null)
const { getAgency, updateAgency, errors } = useAgencies()
const { getBranchs } = useBranchs()

onMounted(
  getAgency(
    props.theagency.uuid)
    .then(response => {
      form.value = response.data.data
      if(form.value.assigned) {
        setAssigned(form.value.assigned)
      }
      if(form.value.branch) {
        setBranch(form.value.branch)
      }
    })
)
onMounted(getBranchs())

const updateTheAgency = async () => {
  loading.value = true
  await updateAgency({...form.value});
  loading.value = false
  if(!errors.value) {
    Inertia.visit(route('clientes.agencies.index'), {
      method: 'get'
    })
  }
}
const setAssigned = (e) => {
  changeAssigned.value = false
  assigned.value = e.fullname
  form.value.assigned_to = e.uuid
}
let setBranch = (e) => {
  changeBranch.value = false
  branch.value = e.name
  form.value.branch_uuid = e.uuid
}
</script>
