<template>
  <Head title="Editar detalles de un Producto" />

  <header class="bg-white shadow mb-4" v-if="theproduct">
    <div class="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 text-purple text-center">
      Editar Registro de <span class="font-semibold text-purple-light">"{{ theproduct.name }}"</span>
    </div>
  </header>

  <div class="lg:grid lg:grid-cols-12 lg:gap-x-5 pb-20">
    <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-2">
      <nav class="space-y-1">
        <Link
          :href="route('soporte.products.create')"
          class="text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm"
        >
          <PlusIcon class="w-6 h-6 mr-2" /> Nuevo
        </Link>
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
        </div>
        <Loader :show="loading" />
      </nav>
    </aside>

    <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-10">
      <div class="shadow sm:rounded-md sm:overflow-hidden" v-if="form">
        <div class="bg-white py-6 px-4 sm:p-6">

          <Errors :errors="errors" />
          <!-- display errors -->

          <div v-if="section.generales">
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
              <!-- title section generales -->
            </div>
            <!-- title section generales -->

            <div v-if="editGenerales">
              <div class="grid grid-cols-6 gap-6 mb-4">
                <div class="col-span-6 lg:col-span-2">
                  <label for="name" class="block text-sm text-gray-700">
                    Nombre del producto: <span class="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    v-model="form.name"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
                  >
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
                    v-model="form.lacategoria"
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
                  <!-- <div class="text-red-600 text-sm" v-if="form.errors.category_uuid">{{ form.errors.category_uuid[0] }}</div> -->
                </div><!-- category_uuid -->
              </div>
              <!-- name, code & category -->
              <div class="grid grid-cols-6 gap-6 mb-4">
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
                  <!-- <div class="text-red-600 text-sm" v-if="form.errors.cost">{{ form.errors.cost[0] }}</div> -->
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
                  <!-- <div class="text-red-600 text-sm" v-if="form.errors.price">{{ form.errors.price[0] }}</div> -->
                </div><!-- price -->
              </div>
              <!-- moneda, cost & price -->
              <div class="grid grid-cols-6 gap-6 mb-4">
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
              <div class="grid grid-cols-6 gap-6 mb-4">
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
                    v-model="form.supplier.name"
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
                  <!-- <div class="text-red-600 text-sm" v-if="form.errors.supplier_uuid">{{ form.errors.supplier_uuid[0] }}</div> -->
                </div><!-- supplier -->
                <div class="col-span-6 lg:col-span-2">
                  <label for="assigned_to" class="block text-sm text-gray-700">Asignado a:</label>
                  <input
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
                    type="text"
                    name="assigned_to"
                    id="assigned_to"
                    autocomplete="off"
                    v-model="form.assigned.fullname"
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

              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <jet-button
                  type="button"
                  :disabled="loading"
                  @click.prevent="updateTheProduct"
                >
                  Actualizar
                </jet-button>
              </div>
              <!-- submit button -->
            </div>
            <div v-else>
              <GeneralesProducto :contact="form" v-if="form" />
            </div>
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
  // TODO Arreglar el registro de productos a la categoría.
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'
import { Inertia } from '@inertiajs/inertia'
import Loader from '@/Elements/Utilities/Loader';
import { ViewGridIcon,  ClipboardListIcon, XIcon, PlusIcon, PencilIcon  } from '@heroicons/vue/outline'
import Errors from '@/Elements/Utilities/Errors'
import JetButton from '@/Jetstream/Button'
import JetButtonSmall from '@/Jetstream/ButtonSmall'
import useHelpers from '@/Scripts/helpers.js'
import GeneralesProducto from './Generales'
import Notification from '@/Elements/Modals/Notification'
import useProducts from '@/Scripts/composables/products'
import SearchComponent from '@/Elements/Search/SearchEmployee'
import SearchCategoryComponent from '@/Elements/Search/SearchCategories'

const changeAssigned = ref(false)
const changeCategory = ref(false)
const changeSupplier = ref(false)
const editGenerales = ref(false)
let loading = ref(false)
const modalOpen = ref(false)
let { productTypes, currencies } = useHelpers()
let { getProduct, updateProduct, errors } = useProducts()
let form = ref(null)
let section = reactive({
  generales: true,
})
let props = defineProps({
  user: Object,
  theproduct: Object,
})
let modalDetails = reactive({
  title: null,
  message: null,
  type: null,
})

onMounted(
  getProduct(props.theproduct.uuid)
  .then(response => {
    form.value = response.data.data
    form.value.lacategoria = response.data.data.category ? response.data.data.category.name : ''
  })
)
const updateTheProduct = async () => {
  loading.value = true
  await updateProduct({...form.value});
  loading.value = false
  if(!errors.value) {
    modalDetails.title = 'Producto actualizado'
    modalDetails.message = `Se ha actualizado correctamente la información del Producto <br> ${props.theproduct.name}`
    modalDetails.type = 'success'
    modalOpen.value = true
    setTimeout( () => {
      modalDetails.title = null
      modalDetails.message = null
      modalDetails.type = null
      modalOpen.value = false
      loading.value = false
      Inertia.visit(route('soporte.products.show', props.theproduct.uuid), {
        method: 'get',
        preserveState: true
      })
      editGenerales.value = false
    }, 2000)
  } else {
    loading.value = false
  }
}
const setAssigned = (e) => {
  form.value.assigned = e
  form.value.assigned_to = e.uuid
  changeAssigned.value = false
}
const setCategory = (e) => {
  form.value.category = e
  form.value.category_uuid = e.uuid
  form.value.lacategoria = e.name
  changeCategory.value = false
}
const setSupplier = (e) => {
  form.value.supplier = e
  form.value.supplier_uuid = e.uuid
  changeSupplier.value = false
}
const changeSection = (secc) => {
  section.generales = secc == 'generales' ? true : false
}
</script>
