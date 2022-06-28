<template>
  <Head title="Editar Registro de Proveedor" />

  <header class="bg-white shadow mb-4">
    <div class="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 text-purple text-center font-semibold">
      Editar Registro de Proveedor
    </div>
  </header>

  <div class="lg:grid lg:grid-cols-12 lg:gap-x-5 pb-20">
    <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-2">
      <nav class="space-y-1">
        <Link
          :href="route('catalogos.suppliers.create')"
          class="text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm"
        >
          <PlusIcon class="w-6 h-6 mr-2" /> Nuevo
        </Link>
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
        <div
          @click="changeSection('generales')"
          class="text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm cursor-pointer"
          aria-current="page"
          :class="{'bg-gray-50' : generales }"
        >
          <OfficeBuildingIcon class="h-6 w-6 mr-2" />
          <span class="truncate">
            Generales
          </span>
        </div>
        <div
          @click="changeSection('addresses')"
          class="text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm cursor-pointer"
          aria-current="page"
          :class="{'bg-gray-50' : addresses }"
        >
          <LocationMarkerIcon class="h-6 w-6 mr-2" />
          <span class="truncate">
            Direcciones
          </span>
        </div>
        <Loader :show="loading" />
      </nav>
    </aside>

    <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-10">
      <div class="shadow sm:rounded-md sm:overflow-hidden" v-if="form">
        <div class="bg-white py-6 px-4 sm:p-6">

          <Errors :errors="errors" />
          <!-- display errors -->

          <div v-if="generales">
            <div class="mb-4 border-b border-purple pb-1">
              <h3 class="flex text-lg font-semibold leading-6 text-purple">
                <OfficeBuildingIcon class="h-6 w-6 mr-2" />
                Generales
              </h3>
              <p class="text-gray-600 text-sm">Aquí podrás modificar la información General del Proveedor, así como una o más cuentas de correo electrónico.</p>
            </div>
            <!-- title section generales -->
            <div class="grid grid-cols-6 gap-6 mb-4">
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

            <div class="grid grid-cols-6 gap-6 mb-4">
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

            <div class="grid grid-cols-6 gap-6 mb-4">
              <div class="col-span-6 lg:col-span-2">
                <label for="email" class="block text-sm text-gray-700">Correo Electrónico: <span class="text-xs">(principal)</span></label>
                <EmailsComponent
                  :theemails="form.emails"
                  @new-email="addEmailToAccount"
                  @delete-email="deleteEmailFromAccount"
                />
              </div><!-- email -->
              <div class="col-span-6 lg:col-span-1">
                <label for="code" class="block text-sm text-gray-700">Código</label>
                <input
                  type="text"
                  name="code"
                  id="code"
                  v-model="form.code"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm uppercase"
                >
              </div><!-- code -->
              <div class="col-span-6 lg:col-span-3">
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

            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <jet-button
                type="button"
                :disabled="loading"
                @click.prevent="updateTheSupplier"
              >
                Actualizar
              </jet-button>
            </div>
            <!-- submit button -->
          </div>
          <!-- generales -->

          <div v-show="addresses">
            <div class="mb-4 border-b border-purple pb-1">
              <h3 class="flex text-lg font-semibold leading-6 text-purple">
                <LocationMarkerIcon class="h-6 w-6 mr-2" />
                Direcciones
              </h3>
              <p class="text-gray-600 text-sm">Modifcar la información de una dirección y añadir o eliminar direcciones asignadas al Proveedor.</p>
            </div>
            <AddressComponent
              :theaddress="thesupplier.addresses"
              modelo="Contacto"
              :loading="loadingAddress"
              :errors="errorsAddress"
              @register-address="registerAddress"
              :newAddressRegistered="successAddress"
              @address-deleted="deleteAddress"
            />
          </div>
          <!-- addresses -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Inertia } from '@inertiajs/inertia'
import { ref, onMounted } from 'vue'
import useSupplier from '@/Scripts/composables/suppliers'
import Errors from '@/Elements/Utilities/Errors'
import EmailsComponent from '@/Elements/Utilities/Emails'
import AddressComponent from '@/Elements/Utilities/AddressComponent'
import SearchComponent from '@/Elements/Search/SearchEmployee'
import { LocationMarkerIcon, PlusIcon, OfficeBuildingIcon,  ClipboardListIcon  } from '@heroicons/vue/outline'
import JetButton from '@/Jetstream/Button'
import Loader from '@/Elements/Utilities/Loader'

const props = defineProps({
  user: Object,
  thesupplier: Object
})

const generales = ref(true)
const addresses = ref(false)
const loading = ref(false)
const successAddress = ref(false)
const errorsAddress = ref(null)
const loadingAddress = ref(false)
const changeAssigned = ref(false)
const { getSupplier, updateSupplier, errors } = useSupplier()
let form = ref(null)
onMounted(getSupplier(props.thesupplier.uuid).then(response => form.value = response.data.data))
const updateTheSupplier = async () => {
  loading.value = true
  await updateSupplier({...form.value});
  loading.value = false
  if(!errors.value) {
    Inertia.visit(route('catalogos.suppliers.index'), {
      method: 'get'
    })
  }
}
const registerAddress = (e) => {
  loading.value = true
  loadingAddress.value = true
  successAddress.value = false
  errorsAddress.value = null

  axios
    .post(route('api.register-address-to-supplier', props.thesupplier.uuid), e)
    .then( () => {
      successAddress.value = true

      setTimeout( () => {
        Inertia.visit(
            route('catalogos.suppliers.show', props.thesupplier.uuid),
            {
              method: 'get',
              preserveState: false,
              preserveScroll: false,
            }
          )
      }, 1500)
    })
    .catch( e => {
      if (e.response.status === 422) {
        errors.value = e.response.data.errors
      } else {
        errors.value = []
        errors.value = [ { errors: e.response.data.message } ]
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
          route('catalogos.suppliers.show', props.thesupplier.uuid),
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

const changeSection = (section) => {
  resetSections()
  if(section == 'addresses') {
    addresses.value = true
  }
  if(section == 'generales') {
    generales.value = true
  }
}

const resetSections = () => {
  addresses.value = false
  generales.value = false
}

const addEmailToAccount = (e) => {
  axios
    .post(route('api.register-email-to-supplier', form.value.uuid), e)
    .then( response => {
      form.value.emails = response.data
    })
    .catch( errors => {
      errors.value = errors.response.data.errors
    })
}
const deleteEmailFromAccount = (e) => {
  axios
    .delete(route('remove-email', e))
    .then( () => {
      Inertia.visit(route('clientes.contacts.show', form.value.uuid))
    })
}
const setAssigned = (e) => {
  changeAssigned.value = false
  form.value.assigned = e
  form.value.assigned_to = e.uuid
}
</script>
