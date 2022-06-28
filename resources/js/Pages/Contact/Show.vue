<template>
  <Head title="Editar Registro de Contacto" />

  <header class="bg-white shadow mb-4" v-if="thecontact">
    <div class="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 text-purple text-center">
      <span class="block font-bold uppercase">Contactos</span>
      <span class="font-semibold text-purple-light">"{{ thecontact.salutation }} {{ thecontact.fullname }}"</span>
    </div>
  </header>

  <div class="lg:grid lg:grid-cols-12 lg:gap-x-5 pb-20">
    <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-2 sticky top-0">
      <nav class="space-y-1">
        <Link
          :href="route('clientes.contacts.create')"
          class="text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm"
        >
          <PlusIcon class="w-6 h-6 mr-2" /> Nuevo
        </Link>
        <Link
          :href="route('clientes.contacts.index')"
          class="text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm"
          aria-current="page"
        >
          <ClipboardListIcon class="h-6 w-6 mr-2" />
          <span class="truncate">
            Listado Contactos
          </span>
        </Link>
        <div
          @click="changeSection('generales')"
          class="text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm cursor-pointer"
          aria-current="page"
          :class="{'bg-gray-50' : section.generales }"
        >
          <ViewGridIcon class="h-6 w-6 mr-2" />
          <span class="truncate">
            Generales
          </span>
        </div><!-- generales -->
        <div
          @click="changeSection('addresses')"
          class="text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm cursor-pointer"
          aria-current="page"
          :class="{'bg-gray-50' : section.addresses }"
        >
          <LocationMarkerIcon class="h-6 w-6 mr-2" />
          <span class="truncate">
            Direcciones
          </span>
          <span class="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-purple text-white ml-1" v-if="thecontact.addresses.length > 0" v-text="thecontact.addresses.length"></span>
        </div><!-- addresses -->
        <div
          @click="changeSection('tareas')"
          class="text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm cursor-pointer"
          aria-current="page"
          :class="{'bg-gray-50' : section.tareas }"
        >
          <ClipboardIcon class="h-6 w-6 mr-2" />
          <span class="truncate">
            Seguimiento / Tareas
          </span>
          <span class="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-purple text-white ml-1" v-if="tasks.length > 0" v-text="tasks.length"></span>
        </div><!-- tareas -->
        <Loader :show="loading" />
      </nav>
    </aside>

    <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-10" v-if="form">
      <div class="shadow sm:rounded-md bg-white py-6 px-4 sm:p-6" v-if="errors">
        <Errors :errors="errors" />
      </div>
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
          <div class="grid grid-cols-6 gap-6 mb-4">
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

          <div class="grid grid-cols-6 gap-6 mb-4">
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
            <!-- móvil, fax & work phone -->
          </div>
          <!-- mobil, work & fax phone -->

          <div class="grid grid-cols-6 gap-6 mb-4">
            <div class="col-span-6 lg:col-span-2">
              <label for="company" class="block text-sm text-gray-700">Empresa:</label>
              <input
                type="text"
                name="company"
                id="company"
                v-model="form.company"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
              >
            </div><!-- accoutn_name -->
            <div class="col-span-6 lg:col-span-2">
              <label for="title" class="block text-sm text-gray-700">Título:</label>
              <input
                type="text"
                name="title"
                id="title"
                v-model="form.title"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
              >
            </div><!-- title -->
            <div class="col-span-6 lg:col-span-2">
              <label for="department" class="block text-sm text-gray-700">Departamento:</label>
              <input
                type="text"
                name="department"
                id="department"
                v-model="form.department"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
              >
            </div><!-- department -->
          </div>
          <!-- company, title & department -->

          <div class="grid grid-cols-6 gap-6 mb-4">
            <div class="col-span-6 lg:col-span-2">
              <label for="email" class="block text-sm text-gray-700">Correo Electrónico: <span class="text-xs">(principal)</span></label>
              <EmailsComponent
                :theemails="form.emails"
                @new-email="addEmailToAccount"
                @delete-email="deleteEmailFromAccount"
              />
            </div><!-- email -->
            <div class="col-span-6 lg:col-span-2">
              <label for="assistant" class="block text-sm text-gray-700">Assistente:</label>
              <input
                type="text"
                name="assistant"
                id="assistant"
                v-model="form.assistant"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
              >
            </div><!-- assistant -->
            <div class="col-span-6 lg:col-span-2">
              <label for="assistant_phone" class="block text-sm text-gray-700">Tel. Assistente</label>
              <input
                type="text"
                name="assistant_phone"
                id="assistant_phone"
                v-model="form.assistant_phone"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
              >
            </div><!-- assistant phone -->
          </div>
          <!-- email, assistant, assistant phone -->

          <div class="grid grid-cols-6 gap-6 mb-4">
            <div class="col-span-6 lg:col-span-2">
              <label for="status" class="block text-sm text-gray-700">Estado del Contacto:</label>
              <select
                id="status"
                name="status"
                v-model="form.status"
                class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm capitalize"
              >
                <option
                  :value="estatcont.estatus"
                  v-for="(estatcont, i) in statusContacto"
                  :key="i"
                  v-text="estatcont.estatus"
                ></option>
              </select>
            </div><!-- status -->
            <div class="col-span-6 lg:col-span-2">
              <label
                for="assigned_to"
                class="block text-sm text-gray-700"
              >Asignado a:</label>
              <input
                type="text"
                name="assigned_to"
                id="assigned_to"
                v-model="assigned"
                readonly
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
                v-if="!changeAssigned"
                @click="changeAssigned = true"
              >
              <SearchComponent
                :show="changeAssigned"
                @set-change="setAssigned"
                label="fullname"
                @close-it="changeAssigned = false"
              />
            </div><!-- assigned -->
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
          <!-- status, assigned to & call -->

          <div class="grid grid-cols-6 gap-6 mb-4">
            <div class="col-span-6 lg:col-span-2">
              <label
                for="origin_uuid"
                class="block text-sm text-gray-700"
              >Orígen del Contacto:</label>
              <input
                type="text"
                name="origin_uuid"
                id="origin_uuid"
                v-model="origin"
                readonly
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
                v-if="!changeOrigin"
                @click="changeOrigin = true"
              >
              <SearchOriginComponent
                :show="changeOrigin"
                @set-origin-change="setOriginChange"
                label="name"
                @close-it="changeOrigin = false"
              />
            </div><!-- origin_uuid -->
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
          </div>
          <div class="grid grid-cols-6 gap-6 mb-4">
            <div class="col-span-8 lg:col-span-4">
              <label for="description" class="block text-sm text-gray-700">Descripción del Contacto:</label>
              <textarea
                type="text"
                name="description"
                id="description"
                autocomplete="description"
                v-model="form.description"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
              ></textarea>
            </div><!-- description -->
          </div>
          <!-- source, branch, origin & description -->

          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <jet-button
              type="button"
              :disabled="loading"
              @click.prevent="updateTheContact"
            >
              Actualizar
            </jet-button>
          </div>
          <!-- submit button -->
        </div>
        <div v-else>
          <GeneralesContacto :contact="thecontact" v-if="thecontact" />
          <div class="px-4 py-3 bg-gray-50 sm:px-6 text-center">
            <jet-button
              type="button"
              :disabled="loading"
              @click.prevent="convertToPotencialClient"
              class="mx-auto"
              v-if="!form.lead_uuid"
            >
              <UserAddIcon class="w-4 h-4 mr-2" />
              Convertir a Cliente Potencial
            </jet-button>
            <Link
              class="text-purple font-semibold"
              :href="route('ventas.leads.show', thecontact.lead_uuid)"
              v-if="thecontact.lead_uuid"
            >
              Ver cuenta de Cliente Potencial
            </Link>
          </div>
          <!-- convert to cliente potencial -->
        </div>
      </div>
      <!-- generales -->

      <div class="shadow sm:rounded-md bg-white py-6 px-4 sm:p-6 mt-10" v-show="section.addresses">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6">
            <div class="mb-4 border-b border-purple pb-1">
              <h3 class="flex text-lg font-semibold leading-6 text-purple">
                <LocationMarkerIcon class="h-6 w-6 mr-2" />
                Direcciones
              </h3>
              <p class="text-gray-600 text-sm">Modifcar la información de una dirección y añadir o eliminar direcciones asignadas al Contacto</p>
            </div>
            <AddressComponent
              :theaddress="thecontact.addresses"
              modelo="Contacto"
              :loading="loadingAddress"
              :errors="errorsAddress"
              @register-address="registerAddress"
              :newAddressRegistered="successAddress"
              @address-deleted="deleteAddress"
            />
          </div>
          <!-- title section generales -->
        </div>
      </div>
      <!-- addresses -->

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
        />
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
import { ref, onMounted, reactive } from 'vue'
import useHelpers from '@/Scripts/helpers.js'
import useContacts from '@/Scripts/composables/contacts'
import useOrigins from '@/Scripts/composables/origins'
import useBranchs from '@/Scripts/composables/branchs'
import Errors from '@/Elements/Utilities/Errors'
import EmailsComponent from '@/Elements/Utilities/Emails'
import AddressComponent from '@/Elements/Utilities/AddressComponent'
import SearchComponent from '@/Elements/Search/SearchEmployee'
import SearchBranchComponent from '@/Elements/Search/SearchBranch'
import SearchOriginComponent from '@/Elements/Search/SearchOrigin'
import { LocationMarkerIcon, UserAddIcon, PlusIcon, ViewGridIcon,  ClipboardListIcon, ClipboardIcon, PencilIcon, XIcon  } from '@heroicons/vue/outline'
import JetButton from '@/Jetstream/Button'
import JetButtonSmall from '@/Jetstream/ButtonSmall'
import Loader from '@/Elements/Utilities/Loader'
import Notification from '@/Elements/Modals/Notification'
import GeneralesContacto from './Generales'
import Tasks from '@/Elements/Tasks/Tasks'

const props = defineProps({
  user: Object,
  thecontact: Object
})

let tasks = ref(props.thecontact.tasks)
let editGenerales = ref(false)
let newTask = ref(false)
let modalOpen = ref(false)
let loading = ref(false)
let loadingTask = ref(false)
let successAddress = ref(false)
let errorsAddress = ref(null)
let loadingAddress = ref(false)
let changeAssigned = ref(false)
let changeOrigin = ref(false)
let changeBranch = ref(false)
let origin = ref(null)
let assigned = ref(null)
let branch = ref(null)
const { salutations, sources, statusContacto } = useHelpers()
const { updateContact, errors } = useContacts()
const { getOrigins } = useOrigins()
const { getBranchs } = useBranchs()
let section = reactive({
  tareas: false,
  generales: true,
  addresses: false,
})
const modalDetails = reactive({
  title: null,
  message: null,
  type: null,
})
let form = reactive(props.thecontact)
if(form.assigned) {
  assigned.value = form.assigned.name
}
if(form.branch) {
  branch.value = form.branch.name
}

onMounted( getOrigins())
onMounted( getBranchs())

let addNewTask = payload => {
  payload.created_by = props.user.uuid
  loadingTask.value = true
  axios
    .post(route('tasks.store'), payload)
    .then( response => {
      if(response.status == 201) {
        registerTaskToContact(response.data.uuid)
      }
    })
}
let registerTaskToContact = (value) => {
  axios
    .post(route('api.contact.add-task', { contact: props.thecontact.uuid, task: value }))
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
let convertToPotencialClient = () => {
  loading.value = true
  form.value.created_by = props.user.uuid
  axios
    .post(route('api.contacts.convert-to-lead', props.thecontact.uuid), form.value)
    .then( response => {
      if(response.status == 201) {
        Inertia.visit(route('clientes.contacts.show', props.thecontact.uuid), {
          preserveScroll: true,
          method: 'get'
        })
      }
    })
    .catch( e => {
      errors.value = [ { errors: e.response.data.message } ]
      loading.value = false
    })
}
const updateTheContact = async () => {
  loading.value = true
  await updateContact({...form});
  if(!errors.value) {
    modalDetails.title = 'Contacto actualizado'
    modalDetails.message = `Se ha actualizado correctamente el Contacto: <br> <strong>${props.thecontact.fullname}</strong>`
    modalDetails.type = 'success'
    modalOpen.value = true
    setTimeout( () => {
      modalDetails.title = null
      modalDetails.message = null
      modalDetails.type = null
      modalOpen.value = false
      loading.value = false
      Inertia.visit(route('clientes.contacts.show', props.thecontact.uuid), {
        method: 'get',
        preserveState: true
      })
      editGenerales.value = false
    }, 2000)
  } else {
    loading.value = false
  }
}
const registerAddress = (e) => {
  loading.value = true
  loadingAddress.value = true
  successAddress.value = false
  errorsAddress.value = null

  axios
    .post(route('api.register-address-to-contact', props.thecontact.uuid), e)
    .then( () => {
      successAddress.value = true

      setTimeout( () => {
        Inertia.visit(
            route('clientes.contacts.show', props.thecontact.uuid),
            {
              method: 'get',
              preserveState: false,
              preserveScroll: false,
            }
          )
      }, 1500)
    })
    .catch( error => {
      if(error.response) {
        errorsAddress.value = error.response.data
      }
      loading.value = false
    })
}
const deleteAddress = (uuid) => {
  loading.value = true
  axios
    .delete(route('address-destroy', uuid))
    .then( response => {
      if(response.status == 200) {
        Inertia.visit(
          route('clientes.contacts.show', props.thecontact.uuid),
          {
            method: 'get',
            preserveState: false,
            preserveScroll: false,
          }
        )
      }
      loading.value = false
    })
    .catch( error => {
      if(error.response) {
        errorsAddress.value = error.response.data
      }
      loading.value = false
    })
}
const changeSection = (secc) => {
  section.generales = secc == 'generales' ? true : false,
  section.addresses = secc == 'addresses' ? true : false,
  section.tareas = secc == 'tareas' ? true : false
}
const addEmailToAccount = (e) => {
  axios
    .post(route('api.register-email-to-contact', form.uuid), e)
    .then( response => {
      form.emails = response.data
    })
    .catch( errors => {
      errors.value = errors.response.data.errors
    })
}
const deleteEmailFromAccount = (e) => {
  axios
    .delete(route('remove-email', e))
    .then( () => {
      Inertia.visit(route('clientes.contacts.show', form.uuid))
    })
}
const setOriginChange = (e) => {
  changeOrigin.value = false
  origin.value = e.name
  form.origin_uuid = e.uuid
}
const setAssigned = (e) => {
  changeAssigned.value = false
  form.assigned = e
  form.assigned_to = e.uuid
}
const setBranch = (e) => {
  changeBranch.value = false
  branch.value = e.name
  form.branch_uuid = e.uuid
}
</script>
