<template>
  <Head title="Actualizar Comisionista" />

  <header class="bg-white shadow mb-4">
    <div class="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 text-purple text-center font-semibold">
      Actualizar información del Comisionista
    </div>
  </header>

  <div class="lg:grid lg:grid-cols-12 lg:gap-x-5 pb-20">
    <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-2">
      <nav class="space-y-1">
        <Link
          :href="route('clientes.retailers.create')"
          class="text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm"
        >
          <PlusIcon class="w-6 h-6 mr-2" /> Nuevo
        </Link>
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

        <div
          @click="changeSection('generales')"
          class="text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm cursor-pointer"
          aria-current="page"
          :class="{'bg-gray-50 border-b border-purple' : section.generales }"
        >
          <ViewGridIcon class="h-6 w-6 mr-2" />
          <span class="truncate">
            Generales
          </span>
        </div>
        <div
          @click="changeSection('tareas')"
          class="text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm cursor-pointer"
          aria-current="page"
          :class="{'bg-gray-50 border-b border-purple' : section.tareas }"
        >
          <ClipboardIcon class="h-6 w-6 mr-2" />
          <span class="truncate">
            Seguimiento / Tareas
          </span>
          <span class="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-purple text-white ml-1" v-text="tasks.length"></span>
        </div><!-- tareas -->
        <Loader :show="loading" />
      </nav>
    </aside>
    <!-- navigation -->

    <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-10" v-if="form">
      <Errors :errors="errors" />
      <!-- display errors -->
      <div class="shadow sm:rounded-md bg-white py-6 px-4 sm:p-6" v-if="section.generales">
        <div class="flex justify-between mb-4 border-b border-purple pb-1">
          <div>
            <h3 class="flex text-lg font-semibold leading-6 text-purple">
              <ViewGridIcon class="h-6 w-6 mr-2" />
              Generales
            </h3>
            <p class="text-gray-600 text-sm">Aquí podrás modificar la información General del Contacto</p>
          </div>
          <div>
            <jet-button-small
              type="button"
              @click.prevent="editGenerales = !editGenerales"
              :classes="''"
            >
              <div class="flex" v-if="!editGenerales">
                <PencilIcon class="w-4 h-4 mr-2" />
                Editar
              </div>
              <div class="flex" v-if="editGenerales">
                <XIcon class="w-4 h-4 mr-2" />
                Cerrar
              </div>
            </jet-button-small>
          </div>
        </div>
        <!-- title section generales -->

        <div v-if="editGenerales">
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
            </div><!-- website -->
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

          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <jet-button
              type="button"
              :disabled="loading"
              @click.prevent="updateTheRetailer"
            >
              Actualizar
            </jet-button>
          </div>
          <!-- submit button -->
        </div>
        <div v-else>
          <GeneralesRetailer :contact="theretailer" v-if="theretailer" />
        </div>

      </div>

      <div class="shadow sm:rounded-md bg-white py-6 px-4 sm:p-6 mt-10" v-show="section.tareas">
        <div class="flex justify-between mb-4 border-b border-purple pb-1">
          <div>
            <h3 class="flex text-lg font-semibold leading-6 text-purple">
              <ClipboardIcon class="h-6 w-6 mr-2" />
              Seguimiento / Tareas
            </h3>
            <p class="text-gray-600 text-sm">En esta sección se podrán ver y registrar las Tareas que se asignen a este contacto. Se mostrará desde la más reciente a la última.</p>
          </div>
          <div>
            <jet-button-small
              type="button"
              @click.prevent="newTask = !newTask"
              :classes="''"
            >
              <div class="flex" v-if="!newTask">
                <PencilIcon class="w-4 h-4 mr-2" />
                Nueva
              </div>
              <div class="flex" v-if="newTask">
                <XIcon class="w-4 h-4 mr-2" />
                Cerrar
              </div>
            </jet-button-small>
          </div>
        </div>
        <!-- title section tasks -->
        <Tasks
          :user="user"
          :thetasks="tasks"
          :nueva="newTask"
          :loading="loadingTask"
          @add-a-task="addNewTask"
          @remove-task="removeTheTask"
        />
      </div>
    </div>

    <DeleteItem
      :showModal="showDeleteModal"
      @confirmed="confirmTaskRemoval"
      @closeModal="closeTheModal"
    />
  </div>

</template>

<script setup>
import { Inertia } from '@inertiajs/inertia'
import { onMounted, ref, reactive } from 'vue'
import { PlusIcon, ViewGridIcon,  ClipboardListIcon, ClipboardIcon, PencilIcon, XIcon  } from '@heroicons/vue/outline'
import SearchBranchComponent from '@/Elements/Search/SearchBranch'
import SearchComponent from '@/Elements/Search/SearchCategories'
import useRetailers from '@/Scripts/composables/retailers'
import useBranchs from '@/Scripts/composables/branchs'
import DeleteItem from '@/Elements/Modals/DeleteItem'
import JetButtonSmall from '@/Jetstream/ButtonSmall'
import Loader from '@/Elements/Utilities/Loader'
import Errors from '@/Elements/Utilities/Errors'
import GeneralesRetailer from './Generales'
import JetButton from '@/Jetstream/Button'
import Tasks from '@/Elements/Tasks/Tasks'

const props = defineProps({
  user: Object,
  theretailer: Object
})
let section = reactive({
  tareas: false,
  generales: true,
  addresses: false,
})
let modalDetails = reactive({
  title: null,
  message: null,
  type: null,
})
let closeTheModal = () => {
  showDeleteModal.value = false
  idToDelete.value = null
}
let tasks = ref(props.theretailer.tasks)
let newTask = ref(false)
let modalOpen = ref(false)
let editGenerales = ref(false)
let loading = ref(false)
let loadingTask = ref(false)
let changeAssigned = ref(false)
let changeBranch = ref(false)
let form = ref(null)
let assigned = ref(null)
let branch = ref(null)
let showDeleteModal = ref(false)
let idToDelete = ref(null)
let { getRetailer, updateRetailer, errors } = useRetailers()
let { getBranchs } = useBranchs()

onMounted(
  getRetailer(props.theretailer.uuid)
    .then(response => {
      form.value = response.data.data
      if(response.data.data.branch) {
        setBranch(response.data.data.branch)
      }
      if(props.theretailer.assigned) {
        setAssigned(props.theretailer.assigned)
      }
    })
)
onMounted(getBranchs())

let updateTheRetailer = async () => {
  loading.value = true
  await updateRetailer({...form.value})
  loading.value = false
  if(!errors.value) {
    Inertia.visit(route('clientes.retailers.index'), {
      method: 'get',
      preserveScroll: true
    })
  }
}
let changeSection = (secc) => {
  section.generales = secc == 'generales' ? true : false,
  section.addresses = secc == 'addresses' ? true : false,
  section.tareas = secc == 'tareas' ? true : false
}
let setAssigned = (e) => {
  changeAssigned.value = false
  assigned.value = e.fullname
  form.value.assigned_to = e.uuid
}
let setBranch = (e) => {
  changeBranch.value = false
  branch.value = e.name
  form.value.branch_uuid = e.uuid
}
let addNewTask = payload => {
  payload.created_by = props.user.uuid
  loadingTask.value = true
  axios
    .post(route('tasks.store'), payload)
    .then( response => {
      if(response.status == 201) {
        registerTaskToRetailer(response.data.uuid)
      }
    })
}
let removeTheTask = (uuid) => {
  idToDelete.value = null
  showDeleteModal.value = true
  idToDelete.value = uuid
}
let confirmTaskRemoval = () => {
  loading.value = true
  axios
    .delete(route('api.retailer.task-destroy', [props.theretailer.uuid, idToDelete.value]))
    .then(response => {
      idToDelete.value = null
      showDeleteModal.value = false
      tasks.value = []
      tasks.value = response.data
      setTimeout( () => {
        loading.value = false
      }, 1000)
    })
}
let registerTaskToRetailer = (value) => {
  axios
    .post(route('api.retailer.add-task', { retailer: props.theretailer.uuid, task: value }))
    .then(response => {
      tasks.value = []
      tasks.value = response.data
      newTask.value = false
      loadingTask.value = false
      modalDetails.title = 'Bien!'
      modalDetails.message = 'Se ha registrado la tarea'
      modalDetails.type = 'success'
      modalOpen.value = true
      setTimeout( () => {
        modalDetails.title = null
        modalDetails.message = null
        modalDetails.type = null
        modalOpen.value = false
      }, 1500)
    })
}
</script>
