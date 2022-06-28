<template>
  <Head title="Crear registro de Empresa" />

  <header class="bg-white shadow mb-4">
    <div class="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 text-purple text-center font-semibold">
      Registrar Nueva Empresa
    </div>
  </header>

  <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
    <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-2">
      <nav class="space-y-1">
        <Link
          :href="route('marketing.company.index')"
          class="text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm"
          aria-current="page"
        >
          <ClipboardListIcon class="h-6 w-6 mr-2" />
          <span class="truncate">
            Empresas
          </span>
        </Link>
        <div
          class="text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm"
          aria-current="generales"
          :class="{'bg-gray-50' : generales }"
        >
          <ViewBoardsIcon class="h-6 w-6 mr-2" />
          <span class="truncate">
            Generales
          </span>
        </div>
        <Loader :show="loading" />
      </nav>
    </aside>

    <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-10">
      <div class="shadow sm:rounded-md">
        <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
          <div class="mb-4 border-b border-purple pb-1">
            <h3 class="text-lg font-semibold leading-6 text-purple flex">
              <ViewBoardsIcon class="h-6 w-6 mr-2" />
              Generales
            </h3>
            <p class="text-gray-600 text-sm">Después de registrar la Empresa, se podrá asignar una dirección y/o cuentas de correo.</p>
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
          <!-- name, phone work & fax -->

          <div class="grid grid-cols-6 gap-6">
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
          </div>
          <!-- website, type & industry -->

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
          </div>
          <!-- email, anual_revenue & amount_employees -->

          <div class="grid grid-cols-6 gap-6">
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
            </div>
          </div>
          <!-- assigned_to & description -->
        </div>

        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <jet-button
            :disabled="loading"
            type="button"
            @click.prevent="saveCompany"
          >
            Registrar
          </jet-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Inertia } from '@inertiajs/inertia'
import { ref } from 'vue'
import useHelpers from '@/Scripts/helpers.js'
import useCompany from '@/Scripts/composables/companies'
import Errors from '@/Elements/Utilities/Errors'
import { ViewBoardsIcon,  ClipboardListIcon  } from '@heroicons/vue/outline'
import JetButton from '@/Jetstream/Button'
import Loader from '@/Elements/Utilities/Loader'
import SearchComponent from '@/Elements/Search/SearchEmployee'

const props = defineProps({
  user: Object
})
const generales = ref(true)
const changeAssigned = ref(false)
const loading = ref(false)
const form = ref({
  name: null,
  phone_work: null,
  phone_fax: null,
  website: null,
  description: null,
  assigned: props.user.fullname,
  assigned_to: props.user.uuid,
  type: null,
  industry: null,
  anual_revenue: null,
  amount_employees: null
})
const { types, industries } = useHelpers()
const { storeCompany, errors } = useCompany()
const saveCompany = async () => {
  loading.value = true
  await storeCompany({...form.value});
  if(!errors.value) {
    Inertia.visit(route('marketing.company.index'), {
      method: 'get'
    })
    loading.value = false
  } else {
    loading.value = false
  }
}
const setAssigned = (e) => {
  changeAssigned.value = false
  form.value.assigned = e.fullname
  form.value.assigned_to = e.uuid
}
</script>
