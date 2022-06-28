<template>
  <Head title="Registrar Contacto" />

  <header class="bg-white shadow mb-4">
    <div class="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 text-purple text-center font-semibold">
      Registrar Nuevo Producto
    </div>
  </header>

  <div class="lg:grid lg:grid-cols-12 lg:gap-x-5 pb-20">
    <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-2">
      <nav class="space-y-1">
        <Link
          :href="route('soporte.products.index')"
          class="text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm"
          aria-current="page"
        >
          <ClipboardListIcon class="h-6 w-6 mr-2" />
          <span class="truncate">
            Productos
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
            <p class="text-gray-600 text-sm"></p>
          </div>
          <!-- title section generales -->
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 lg:col-span-2">
              <label for="name" class="block text-sm text-gray-700">
                Nombre del producto: <span class="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                v-model="form.name"
                @focus="form.errors.name == null"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
              >
              <div class="text-red-600 text-sm" v-if="form.errors.name">{{ form.errors.name[0] }}</div>
            </div>
            <div class="col-span-6 lg:col-span-2">
              <label for="code" class="block text-sm text-gray-700">Código:</label>
              <input
                type="text"
                name="code"
                id="code"
                v-model="form.code"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
              >
            </div>
            <div class="col-span-6 lg:col-span-2">
              <label for="category_uuid" class="block text-sm text-gray-700">
                Categoría: <span class="text-red-600">*</span>
              </label>
              <input
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
                type="text"
                name="category_uuid"
                id="category_uuid"
                autocomplete="off"
                v-model="form.category"
                v-if="!changeCategory"
                @click="changeCategory = true"
              >
              <SearchCategoryComponent
                :show="changeCategory"
                @set-change="setCategory"
                :url="route('api.search-categories')"
                label="name"
                @close-it="changeCategory = false"
              />
              <div class="text-red-600 text-sm" v-if="form.errors.category_uuid">{{ form.errors.category_uuid[0] }}</div>
            </div><!-- category_uuid -->
          </div>
          <!-- name, code & category -->
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-3 lg:col-span-1">
              <label for="type" class="block text-sm text-gray-700">Tipo de Producto:</label>
              <select
                id="type"
                name="type"
                v-model="form.type"
                class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm capitalize"
              >
                <option
                  :value="type.value"
                  v-for="(type, i) in productTypes"
                  :key="i"
                  v-text="type.translate"
                ></option>
              </select>
            </div><!-- type -->
            <div class="col-span-3 lg:col-span-1">
              <label for="currency" class="block text-sm text-gray-700">Moneda:</label>
              <select
                id="currency"
                name="currency"
                v-model="form.currency"
                class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm uppercase"
              >
                <option
                  :value="type.name"
                  v-for="(type, i) in currencies"
                  :key="i"
                  v-text="type.name"
                ></option>
              </select>
            </div><!-- moneda -->
            <div class="col-span-6 lg:col-span-2">
              <label for="cost" class="block text-sm text-gray-700">
                Precio Costo: <span class="text-red-600">*</span>
              </label>
              <input
                type="number"
                min="0"
                name="cost"
                id="cost"
                v-model="form.cost"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
              >
              <div class="text-red-600 text-sm" v-if="form.errors.cost">{{ form.errors.cost[0] }}</div>
            </div><!-- cost -->
            <div class="col-span-6 lg:col-span-2">
              <label for="price" class="block text-sm text-gray-700">
                Precio Regular: <span class="text-red-600">*</span>
              </label>
              <input
                type="number"
                min="0"
                name="price"
                id="price"
                v-model="form.price"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
              >
              <div class="text-red-600 text-sm" v-if="form.errors.price">{{ form.errors.price[0] }}</div>
            </div><!-- price -->
          </div>
          <!-- moneda, cost & price -->
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 lg:col-span-3">
              <label for="description" class="block text-sm text-gray-700">Descripción Inglés:</label>
              <textarea
                name="description"
                id="description"
                v-model="form.description"
                rows="3"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
              ></textarea>
            </div><!-- description -->
            <div class="col-span-6 lg:col-span-3">
              <label for="description_es" class="block text-sm text-gray-700">Descripción Español:</label>
              <textarea
                name="description_es"
                id="description_es"
                v-model="form.description_es"
                rows="3"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
              ></textarea>
            </div><!-- description -->
          </div>
          <!-- description & description es -->
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 lg:col-span-2">
              <label for="supplier_uuid" class="block text-sm text-gray-700">
                Proveedor: <span class="text-red-600">*</span>
              </label>
              <input
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
                type="text"
                name="supplier_uuid"
                id="supplier_uuid"
                autocomplete="off"
                v-model="form.supplier"
                v-if="!changeSupplier"
                @click="changeSupplier = true"
              >
              <SearchCategoryComponent
                :show="changeSupplier"
                @set-change="setSupplier"
                :url="route('api.search-suppliers')"
                label="name"
                @close-it="changeSupplier = false"
              />
              <div class="text-red-600 text-sm" v-if="form.errors.supplier_uuid">{{ form.errors.supplier_uuid[0] }}</div>
            </div><!-- supplier -->
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
          <!-- proveedor, assigned -->

        </div>
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <jet-button
            type="button"
            :disabled="loading"
            @click.prevent="saveProduct"
          >
            Registrar
          </jet-button>
        </div>
        <!-- submit button -->
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
import { ref } from 'vue'
import { Inertia } from '@inertiajs/inertia'
import Loader from '@/Elements/Utilities/Loader';
import { ViewGridIcon,  ClipboardListIcon  } from '@heroicons/vue/outline'
import JetButton from '@/Jetstream/Button'
import useHelpers from '@/Scripts/helpers.js'
import Notification from '@/Elements/Modals/Notification'
import useProducts from '@/Scripts/composables/products'
import SearchComponent from '@/Elements/Search/SearchEmployee'
import SearchCategoryComponent from '@/Elements/Search/SearchCategories'

const modalOpen = ref(false)
const changeAssigned = ref(false)
const changeCategory = ref(false)
const changeSupplier = ref(false)
let loading = ref(false)
let props = defineProps({
  user: Object,
})
const modalDetails = ref({
  title: null,
  message: null,
  type: null,
})
let form = ref({
  name: null,
  code: null,
  type: 'Good',
  currency: 'usd',
  cost: 0,
  price: 0,
  description: null,
  description_es: null,
  assigned: props.user.fullname,
  assigned_to: props.user.uuid,
  created_by: props.user.uuid,
  supplier: null,
  supplier_uuid: null,
  category: null,
  category_uuid: null,
  status: 1,
  errors: {}
})
let { productTypes, currencies } = useHelpers()
let { storeProduct, errors } = useProducts()
const saveProduct = async () => {
  loading.value = true
  form.value.price = form.value.price * 100
  form.value.cost = form.value.cost * 100
  await storeProduct({...form.value});
  if(!errors.value) {
    modalDetails.value.title = 'Producto registrado'
    modalDetails.value.message = 'Se ha registrado correctamente el Producto.'
    modalDetails.value.type = 'success'
    modalOpen.value = true
    setTimeout( () => {
      modalDetails.value.title = null
      modalDetails.value.message = null
      modalDetails.value.type = null
      modalOpen.value = false
      loading.value = false
      Inertia.visit(route('soporte.products.index'), {
        method: 'get',
      })
    }, 2000)
  } else {
    form.value.errors = errors
    loading.value = false
  }
}
const setAssigned = (e) => {
  form.value.assigned = e.fullname
  form.value.assigned_to = e.uuid
  changeAssigned.value = false
}
const setCategory = (e) => {
  form.value.category = e.name
  form.value.category_uuid = e.uuid
  changeCategory.value = false
}
const setSupplier = (e) => {
  form.value.supplier = e.name
  form.value.supplier_uuid = e.uuid
  changeSupplier.value = false
}
</script>
