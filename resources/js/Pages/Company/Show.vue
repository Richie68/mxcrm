<template>
  <Head title="Editar registro de Empresa" />

  <header class="bg-white shadow mb-4">
    <div class="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 text-purple text-center">
      Editar Registro de <span class="font-semibold text-purple-light">"{{ thecompany.name }}"</span>
    </div>
  </header>

  <div class="lg:grid lg:grid-cols-12 lg:gap-x-5 mr-2">
    <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-2">
      <nav class="space-y-1">
        <Link
          class="text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm"
          :href="route('marketing.company.create')"
        >
          <PlusIcon class="w-4 h-4 mr-1" /> Nuevo
        </Link>
        <Link
          :href="route('marketing.company.index')"
          class="text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm"
          aria-current="page"
        >
          <ClipboardListIcon class="h-6 w-6 mr-2" />
          <span class="truncate">
            Listado Empresas
          </span>
        </Link>

        <div
          @click="changeSection('generales')"
          class="text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm cursor-pointer"
          aria-current="page"
          :class="{'bg-gray-50' : section.generales }"
        >
          <ViewBoardsIcon class="h-6 w-6 mr-2" />
          <span class="truncate">
            Generales
          </span>
        </div>
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
        </div>
        <Loader :show="loading" />
      </nav>
    </aside>

    <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-10" v-if="form">
      <div class="shadow sm:rounded-md">
        <div class="bg-white py-6 px-4 sm:p-6">
          <div class="grid grid-cols-6 gap-6" v-if="errors">
            <div v-for="(v, k) in errors" :key="k" class="bg-red-500 text-white rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0">
              <p v-for="error in v" :key="error" class="text-sm">
                {{ error }}
              </p>
            </div>
          </div>
          <!-- display errors -->

          <div v-show="section.generales">
            <div class="flex justify-between mb-4 border-b border-purple pb-1">
              <div>
                <h3 class="flex text-lg font-semibold leading-6 text-purple">
                  <ViewBoardsIcon class="h-6 w-6 mr-2" />
                  Generales
                </h3>
                <p class="text-gray-600 text-sm">Aquí podrás modificar la información General de la Empresa</p>
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
                  <label for="phone_fax" class="block text-sm text-gray-700">Tel. Fax</label>
                  <input
                    type="text"
                    name="phone_fax"
                    id="phone_fax"
                    v-model="form.phone_fax"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
                  >
                </div><!-- phone fax -->
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
                <div class="col-span-6 lg:col-span-2">
                  <label for="type" class="block text-sm text-gray-700">Tipo:</label>
                  <select
                    id="type"
                    name="type"
                    v-model="form.type"
                    class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm capitalize"
                  >
                    <option
                      :value="type.name"
                      v-for="(type, i) in types"
                      :key="i"
                      v-text="type.name"
                    ></option>
                  </select>
                </div><!-- type -->
                <div class="col-span-6 lg:col-span-2">
                  <label for="industry" class="block text-sm text-gray-700">Industria:</label>
                  <select
                    id="industry"
                    name="industry"
                    v-model="form.industry"
                    class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm capitalize"
                  >
                    <option
                      :value="industry.name"
                      v-for="(industry, i) in industries"
                      :key="i"
                      v-text="industry.name"
                    ></option>
                  </select>
                </div><!-- industry -->
                <div class="col-span-6 lg:col-span-2">
                  <label for="email" class="block text-sm text-gray-700">Correo Electrónico: <span class="text-xs">(principal)</span></label>
                  <EmailsComponent
                    :theemails="form.emails"
                    @new-email="addEmailToAccount"
                    @delete-email="deleteEmailFromAccount"
                  />
                </div><!-- email -->
                <div class="col-span-6 lg:col-span-2">
                  <label for="anual_revenue" class="block text-sm text-gray-700">Ingresos anuales:</label>
                  <input
                    type="text"
                    name="anual_revenue"
                    id="anual_revenue"
                    v-model="form.anual_revenue"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
                  >
                </div><!-- anual_revenue -->
                <div class="col-span-6 lg:col-span-2">
                  <label for="amount_employees" class="block text-sm text-gray-700">Cantidad de empleados:</label>
                  <input
                    type="text"
                    name="amount_employees"
                    id="amount_employees"
                    v-model="form.amount_employees"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
                  >
                </div><!-- amount_employees -->
                <div class="col-span-6 lg:col-span-2">
                  <label for="assigned_to" class="block text-sm text-gray-700">Asignado a:</label>
                  <input
                    type="text"
                    name="assigned_to"
                    id="assigned_to"
                    v-model="form.assigned.fullname"
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
                </div><!-- assigned_to -->
                <div class="col-span-4">
                  <label for="description" class="block text-sm text-gray-700">Descripción:</label>
                  <textarea
                    name="description"
                    id="description"
                    v-model="form.description"
                    cols="2"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
                  ></textarea>
                </div><!-- description -->
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6" v-if="section.generales">
                <jet-button
                  type="button"
                  :disabled="loading"
                  @click.prevent="updateTheCompany"
                >
                  Actualizar
                </jet-button>
              </div>
              <!-- submit button -->
            </div>
            <div v-else>
              <GeneralesCompany :company="form" v-if="form" />
            </div>
          </div>
          <!-- general details -->

          <div v-show="section.addresses">
            <div class="mb-4 border-b border-purple pb-1">
              <h3 class="text-lg font-semibold leading-6 text-purple flex">
                <LocationMarkerIcon class="h-6 w-6 mr-2" />
                Direcciones
              </h3>
              <p class="text-gray-600 text-sm">Modifcar la información de una dirección y añadir o eliminar direcciones asignadas a la Empresa</p>
            </div>
            <!-- title section generales -->
            <AddressComponent
              :theaddress="form.addresses"
              modelo="La Empresa"
              :loading="loadingAddress"
              :errors="errorsAddress"
              @register-address="registerAddress"
              :newAddressRegistered="successAddress"
              @address-deleted="deleteAddress"
            />
          </div>
          <!-- addresses -->

          <div v-show="section.tareas">
            <div class="mb-4 border-b border-purple pb-1">
              <h3 class="text-lg font-semibold leading-6 text-purple flex">
                <ViewBoardsIcon class="h-6 w-6 mr-2" />
                Generales
              </h3>
              <p class="text-gray-600 text-sm">Aquí podrás modificar la información General de la Empresa</p>
            </div>
            <!-- title section generales -->
          </div>
        </div>
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
import { ref, reactive, onMounted } from 'vue'
import useHelpers from '@/Scripts/helpers.js'
import useCompany from '@/Scripts/composables/companies'
import EmailsComponent from '@/Elements/Utilities/Emails'
import AddressComponent from '@/Elements/Utilities/AddressComponent'
import SearchComponent from '@/Elements/Search/SearchEmployee'
import { ViewBoardsIcon,  ClipboardListIcon, LocationMarkerIcon, PlusIcon, PencilIcon, XIcon  } from '@heroicons/vue/outline'
import JetButton from '@/Jetstream/Button'
import JetButtonSmall from '@/Jetstream/ButtonSmall'
import Loader from '@/Elements/Utilities/Loader'
import GeneralesCompany from './Generales'
import Notification from '@/Elements/Modals/Notification'

const props = defineProps({
  user: Object,
  thecompany: Object
})
const section = reactive({
  generales: true,
  addresses: false,
  tareas: false
})
const modalOpen = ref(false)
const modalDetails = reactive({
  title: null,
  message: null,
  type: null,
})
const loading = ref(false)
const editGenerales = ref(false)
const loadingAddress = ref(false)
const successAddress = ref(false)
const changeAssigned = ref(false)
const errorsAddress = ref(null)
let form = reactive(props.thecompany)
const { types, industries } = useHelpers()
const { getCompany, updateCompany, errors } = useCompany()

onMounted(getCompany(props.thecompany.uuid).then(response => form = response.data))

const registerAddress = (e) => {
  loadingAddress.value = true
  successAddress.value = false
  errorsAddress.value = null

  axios
    .post(route('api.register-address-to-company', props.thecompany.uuid), e)
    .then( () => {
      successAddress.value = true
      setTimeout( () => {
        refreshPage()
        loadingAddress.value = false
      }, 1500)
    })
    .catch( error => {
      if(error.response) {
        errorsAddress.value = error.response.data
      } else {
        //
      }
    })
}
const deleteAddress = (uuid) => {
  loadingAddress.value = true
  axios
    .delete(route('address-destroy', uuid))
    .then( response => {
      if(response.status == 200) {
        refreshPage()
        loadingAddress.value = false
      }
    })
    .catch( error => {
      if(error.response) {
        errorsAddress.value = error.response.data
      }
    })
}
const setAssigned = (e) => {
  changeAssigned.value = false
  form.assigned = e
  form.assigned_to = e.uuid
}
const updateTheCompany = async () => {
  loading.value = true
  await updateCompany({...form});
  if(!errors.value) {
    modalDetails.title = 'Empresa actualizada'
    modalDetails.message = 'Se ha actualizado correctamente la Empresa'
    modalDetails.type = 'success'
    modalOpen.value = true
    setTimeout( () => {
      modalDetails.title = null
      modalDetails.message = null
      modalDetails.type = null
      modalOpen.value = false
      loading.value = false
      refreshPage()
      editGenerales.value = false
    }, 2000)
  } else {
    loading.value = false
  }
}
const addEmailToAccount = (e) => {
  loading.value = true
  axios
    .post(route('add-email-to-crm-company', props.thecompany.uuid), e)
    .then( () => {
      refreshPage()
    })
}
const deleteEmailFromAccount = (e) => {
  axios
    .delete(route('remove-email', e))
    .then( () => {
      refreshPage()
    })
}
const changeSection = (secc) => {
  section.generales = secc == 'generales' ? true : false,
  section.addresses = secc == 'addresses' ? true : false,
  section.tareas = secc == 'tareas' ? true : false
}
const refreshPage = () => {
  Inertia.visit(
    route('marketing.company.show',
    props.thecompany.uuid),
    {
      method: 'get',
      preserveScroll: true
    }
  )
}
</script>
