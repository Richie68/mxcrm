<template>
  <Head title="Registrar Grupo" />

  <header class="bg-white shadow mb-4">
    <div class="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 text-purple text-center font-semibold">
      Registrar Nuevo Grupo
    </div>
  </header>
  <div class="lg:grid lg:grid-cols-12 lg:gap-x-5 pb-20">
    <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-2">
      <nav class="space-y-1">
        <Link
          :href="route('ventas.groups.index')"
          class="text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm"
          aria-current="page"
        >
          <UserGroupIcon class="h-6 w-6 mr-2" />
          <span class="truncate">
            Grupos
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
            <p class="text-gray-600 text-sm">Registrar la información General para el Grupo. Una vez registrado, se le podrá asignar uno o más hoteles.</p>
          </div>
          <!-- title section generales -->

          <Errors :errors="errors" />
          <!-- display errors -->

          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 lg:col-span-2">
              <label for="name" class="block text-sm text-gray-700">Nombre del Grupo:</label>
              <input
                type="text"
                name="name"
                id="name"
                v-model="form.name"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
              >
            </div><!-- name -->
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
            <div class="col-span-6 lg:col-span-2">
              <label for="type" class="block text-sm text-gray-700">Tipo de Grupo:</label>
              <input
                type="text"
                name="type"
                id="type"
                v-model="form.type"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
              >
            </div><!-- type -->
            <div class="col-span-6 lg:col-span-2">
              <label for="pax" class="block text-sm text-gray-700">Aproximado personas:</label>
              <input
                type="number"
                min="0"
                name="pax"
                id="pax"
                v-model="form.pax"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
              >
            </div><!-- pax -->
            <div class="col-span-6 lg:col-span-2">
              <label for="hotel" class="block text-sm text-gray-700">Hotel Principal:</label>
              <input
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
                type="text"
                name="hotel"
                id="hotel"
                autocomplete="off"
                v-model="form.hotel"
                v-if="!changeHotel"
                @click="changeHotel = true"
              >
              <SearchHotelComponent
                :show="changeHotel"
                @set-change="setHotel"
                :url="route('api.search-hotel')"
                label="name"
                @close-it="changeHotel = false"
              />
            </div><!-- empresa -->
            <div class="col-span-6 lg:col-span-2">
              <label for="status" class="block text-sm text-gray-700">Estatus:</label>
              <input
                type="text"
                name="status"
                id="status"
                v-model="form.status"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
              >
            </div><!-- status -->
            <div class="col-span-6 lg:col-span-2">
              <label for="start_date" class="block text-sm text-gray-700">Fecha Inicio:</label>
              <flat-pickr
                v-model="form.start_date"
                class="border-gray-300 rounded-md focus:border-purple focus:ring-transparent w-full"
                :config="arrivalDateOptions"
                placeholder="Fecha de inicio"
                :altInput="true"
              ></flat-pickr>
            </div><!-- start_date -->
            <div class="col-span-6 lg:col-span-2">
              <label for="end_date" class="block text-sm text-gray-700">Fecha Final:</label>
              <flat-pickr
                v-model="form.end_date"
                class="border-gray-300 rounded-md focus:border-purple focus:ring-transparent w-full"
                :config="departureDateOptions"
                placeholder="Fecha de inicio"
                :altInput="true"
              ></flat-pickr>
            </div><!-- end_date -->
            <div class="col-span-6 lg:col-span-2">
              <label for="source" class="block text-sm text-gray-700">Fuente del Grupo:</label>
              <input
                type="text"
                name="source"
                id="source"
                v-model="form.source"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
              >
            </div><!-- source -->
            <div class="col-span-6 lg:col-span-2">
              <label for="source_location" class="block text-sm text-gray-700">Lugar de Trabajo de Fuente:</label>
              <input
                type="text"
                name="source_location"
                id="source_location"
                v-model="form.source_location"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
              >
            </div><!-- source_location -->
            <div class="col-span-6 lg:col-span-2">
              <label for="company_uuid" class="block text-sm text-gray-700">Empresa:</label>
              <input
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
                type="text"
                name="company_uuid"
                id="company_uuid"
                autocomplete="off"
                v-model="form.company"
                v-if="!changeCompany"
                @click="changeCompany = true"
              >
              <SearchCompanyComponent
                :show="changeCompany"
                @set-change="setCompany"
                :url="route('api.search-company')"
                label="name"
                @close-it="changeCompany = false"
              />
            </div><!-- empresa -->
            <div class="col-span-6 lg:col-span-2">
              <label for="agency_uuid" class="block text-sm text-gray-700">Agencia:</label>
              <input
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
                type="text"
                name="agency_uuid"
                id="agency_uuid"
                autocomplete="off"
                v-model="form.agency"
                v-if="!changeAgency"
                @click="changeAgency = true"
              >
              <SearchAgencyComponent
                :show="changeAgency"
                @set-change="setAgency"
                :url="route('api.search-agency')"
                label="name"
                @close-it="changeAgency = false"
              />
            </div><!-- agency uuid -->
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
            <div class="col-span-6 lg:col-span-2">
              <label for="manager_uuid" class="block text-sm text-gray-700">Gerente:</label>
              <input
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
                type="text"
                name="manager_uuid"
                id="manager_uuid"
                autocomplete="off"
                v-model="form.manager"
                v-if="!changeManager"
                @click="changeManager = true"
              >
              <SearchComponent
                :show="changeManager"
                @set-change="setManager"
                :url="route('api.search-employees')"
                label="fullname"
                :level="2"
                @close-it="changeManager = false"
              />
            </div><!-- manager -->
            <div class="col-span-6 lg:col-span-2">
              <label for="executive_uuid" class="block text-sm text-gray-700">Ejecutivo:</label>
              <input
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
                type="text"
                name="executive_uuid"
                id="executive_uuid"
                autocomplete="off"
                v-model="form.executive"
                v-if="!changeExecutive"
                @click="changeExecutive = true"
              >
              <SearchComponent
                :show="changeExecutive"
                @set-change="setExecutive"
                :url="route('api.search-employees')"
                label="fullname"
                :level="3"
                @close-it="changeExecutive = false"
              />
            </div><!-- executive -->
            <div class="col-span-6 lg:col-span-2">
              <label for="executive_aditional" class="block text-sm text-gray-700">Ejecutivo Adicional:</label>
              <input
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
                type="text"
                name="executive_aditional"
                id="executive_aditional"
                autocomplete="off"
                v-model="form.executiveAdd"
                v-if="!changeExecutiveAdd"
                @click="changeExecutiveAdd = true"
              >
              <SearchComponent
                :show="changeExecutiveAdd"
                @set-change="setExecutiveAdd"
                :url="route('api.search-employees')"
                label="fullname"
                :level="3"
                @close-it="changeExecutiveAdd = false"
              />
            </div><!-- executive_aditional -->
            <div class="col-span-6 lg:col-span-2">
              <label for="lead_uuid" class="block text-sm text-gray-700">Lead (contacto potencial):</label>
              <input
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
                type="text"
                name="lead_uuid"
                id="lead_uuid"
                autocomplete="off"
                v-model="form.lead"
                v-if="!changeLead"
                @click="changeLead = true"
              >
              <SearchLeadComponent
                :show="changeLead"
                @set-change="setLead"
                :url="route('api.search-leads')"
                label="fullname"
                :level="3"
                @close-it="changeLead = false"
              />
            </div><!-- lead uuid -->
            <div class="col-span-6 lg:col-span-2">
              <label for="contact_uuid" class="block text-sm text-gray-700">Contacto:</label>
              <input
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
                type="text"
                name="contact_uuid"
                id="contact_uuid"
                autocomplete="off"
                v-model="form.contact"
                v-if="!changeContact"
                @click="changeContact = true"
              >
              <SearchContactComponent
                :show="changeContact"
                @set-change="setContact"
                :url="route('api.search-contacts')"
                label="fullname"
                :level="3"
                @close-it="changeContact = false"
              />
            </div><!-- contact uuid -->
            <div class="col-span-6 lg:col-span-2">
              <label for="estimated_transportation" class="block text-sm font-medium text-gray-700">Transportación:</label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span class="text-gray-500 sm:text-sm"> $ </span>
                </div>
                <input
                  type="number"
                  min="0"
                  name="estimated_transportation"
                  id="estimated_transportation"
                  v-model="form.estimated_transportation"
                  class="focus:ring-purple focus:border-purple block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                  placeholder="0.00"
                />
                <div class="absolute inset-y-0 right-0 flex items-center">
                  <label for="currency" class="sr-only">Currency</label>
                  <select
                    id="currency"
                    name="currency"
                    v-model="form.currency"
                    class="focus:ring-purple focus:border-purple h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                  >
                    <option value="usd">USD</option>
                  </select>
                </div>
              </div>
            </div><!-- estimated transportation -->
            <div class="col-span-6 lg:col-span-2">
              <label for="estimated_activities" class="block text-sm font-medium text-gray-700">Actividades:</label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span class="text-gray-500 sm:text-sm"> $ </span>
                </div>
                <input
                  type="number"
                  min="0"
                  name="estimated_activities"
                  id="estimated_activities"
                  v-model="form.estimated_activities"
                  class="focus:ring-purple focus:border-purple block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                  placeholder="0.00"
                />
                <div class="absolute inset-y-0 right-0 flex items-center">
                  <label for="currency" class="sr-only">Currency</label>
                  <select
                    id="currency_activities"
                    name="currency"
                    v-model="form.currency"
                    class="focus:ring-purple focus:border-purple h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                  >
                    <option value="usd">USD</option>
                  </select>
                </div>
              </div>
            </div><!-- estimated activities -->
            <div class="col-span-6 lg:col-span-2">
              <label for="estimated_events" class="block text-sm font-medium text-gray-700">Eventos:</label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span class="text-gray-500 sm:text-sm"> $ </span>
                </div>
                <input
                  type="number"
                  min="0"
                  name="estimated_events"
                  id="estimated_events"
                  v-model="form.estimated_events"
                  class="focus:ring-purple focus:border-purple block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                  placeholder="0.00"
                />
                <div class="absolute inset-y-0 right-0 flex items-center">
                  <label for="currency" class="sr-only">Currency</label>
                  <select
                    id="currency"
                    name="currency"
                    v-model="form.currency"
                    class="focus:ring-purple focus:border-purple h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                  >
                    <option value="usd">USD</option>
                  </select>
                </div>
              </div>
            </div><!-- estimated events -->
          </div>
          <div class="flex flex-col w-full">
            <label for="notes" class="block text-sm text-gray-700">Notas:</label>
            <textarea
              name="notes"
              id="notes"
              v-model="form.notes"
              rows="3"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
            ></textarea>
          </div><!-- notes -->

          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <jet-button
              type="button"
              :disabled="loading"
              @click.prevent="saveGroup"
            >
              Registrar
            </jet-button>
          </div>
          <!-- submit button -->
        </div>
      </div>
    </div>
  </div>
</template>

// TODO Falta el componente para las campañas

<script setup>
import { ref } from 'vue'
import { Inertia } from '@inertiajs/inertia'
import { UserGroupIcon, ViewGridIcon } from '@heroicons/vue/outline'
import SearchCompanyComponent from '@/Elements/Search/SearchCompany'
import SearchHotelComponent from '@/Elements/Search/SearchHotel'
import SearchContactComponent from '@/Elements/Search/SearchContacts'
import SearchLeadComponent from '@/Elements/Search/SearchLeads'
import SearchAgencyComponent from '@/Elements/Search/SearchAgency'
import SearchComponent from '@/Elements/Search/SearchEmployee'
import useGroups from '@/Scripts/composables/groups'
import Errors from '@/Elements/Utilities/Errors'
import useHelpers from '@/Scripts/helpers.js'
import Loader from '@/Elements/Utilities/Loader'
import JetButton from '@/Jetstream/Button'
import flatPickr from 'vue-flatpickr-component'
import { Spanish } from "flatpickr/dist/l10n/es.js"
import 'flatpickr/dist/flatpickr.css'

let props = defineProps({
  user: Object
})
let { storeGroup, errors } = useGroups()
let { dayjs } = useHelpers()
let loading = ref(false)
const changeAssigned = ref(false)
const changeManager = ref(false)
const changeExecutive = ref(false)
const changeExecutiveAdd = ref(false)
const changeCompany = ref(false)
const changeHotel = ref(false)
const changeContact = ref(false)
const changeLead = ref(false)
const changeAgency = ref(false)
let form = ref({
  name: null,
  folio: null,
  department: null,
  notes: null,
  type: null,
  pax: null,
  status: null,
  source: null,
  start_date: null,
  end_date: null,
  source_location: null,
  estimated_activities: null,
  estimated_transportation: null,
  estimated_events: null,
  currency: 'usd',
  company: null,
  company_uuid: null,
  agency: null,
  agency_uuid: null,
  hotel: null,
  created_by: props.user.uuid,
  assigned: props.user.fullname,
  assigned_to: props.user.uuid,
  manager: null,
  manager_uuid: null,
  executive: null,
  executive_uuid: null,
  executiveAdd: null,
  executive_aditional: null,
  lead: null,
  lead_uuid: null,
  contact: null,
  contact_uuid: null,
  campaign: null,
  campaign_uuid: null
})
let arrivalDateOptions = {
  'disable': [ (date) => (dayjs(date) <= dayjs().subtract(1, 'd')) ],
  'locale': Spanish,
  onChange: (selectedDates, dateStr) => {
      form.end_date = selectedDates
  },
}
let departureDateOptions = {
  'disable': [ (date) => (dayjs(date) <= dayjs().subtract(1, 'd')) ],
  'locale': Spanish,
}
const saveGroup = async () => {
  loading.value = true
  await storeGroup({...form.value});
  loading.value = false
  if(!errors.value) {
    Inertia.visit(route('ventas.groups.index'), {
      method: 'get',
      preserveScroll: true,
    })
  }
}
const setAssigned = (e) => {
  changeAssigned.value = false
  form.value.assigned = e.fullname
  form.value.assigned_to = e.uuid
}
const setManager = (e) => {
  changeManager.value = false
  form.value.manager = e.fullname
  form.value.manager_uuid = e.uuid
}
const setExecutive = (e) => {
  changeExecutive.value = false
  form.value.executive = e.fullname
  form.value.executive_uuid = e.uuid
}
const setExecutiveAdd = (e) => {
  changeExecutiveAdd.value = false
  form.value.executiveAdd = e.fullname
  form.value.executive_aditional = e.uuid
}
const setContact = (e) => {
  changeContact.value = false
  form.value.contact = e.fullname
  form.value.contact_uuid = e.uuid
}
const setLead = (e) => {
  changeLead.value = false
  form.value.lead = e.fullname
  form.value.lead_uuid = e.uuid
}
const setHotel = (e) => {
  changeHotel.value = false
  form.value.hotel = e.name
}
const setCompany = (e) => {
  changeCompany.value = false
  form.value.company = e.name
  form.value.company_uuid = e.uuid
}
const setAgency = (e) => {
  changeAgency.value = false
  form.value.agency = e.name
  form.value.agency_uuid = e.uuid
}

</script>
