<template>
  <Head title="Actualizar información Categoría" />

  <header class="bg-white shadow mb-4">
    <div class="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 text-purple text-center font-semibold">
      Actualizar información de Categoría
    </div>
  </header>

  <div class="lg:grid lg:grid-cols-12 lg:gap-x-5 pb-20">
    <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-2">
      <nav class="space-y-1">
        <Link
          :href="route('catalogos.categories.create')"
          class="text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm"
        >
          <PlusIcon class="w-6 h-6 mr-2" /> Nuevo
        </Link>
        <Link
          :href="route('catalogos.categories.index')"
          class="text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm"
          aria-current="page"
        >
          <ClipboardListIcon class="h-6 w-6 mr-2" />
          <span class="truncate">
            Categorías
          </span>
        </Link>

        <div
          @click="changeSection('generales')"
          class="text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm cursor-pointer"
          aria-current="page"
          :class="{'bg-gray-50' : section.generales }"
        >
          <ViewGridIcon class="h-6 w-6 mr-2" />
          <span class="truncate">Generales</span>
        </div><!-- generales -->
        <div
          @click="changeSection('productos')"
          class="text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm cursor-pointer"
          aria-current="page"
          :class="{'bg-gray-50' : section.products }"
        >
          <TruckIcon class="h-6 w-6 mr-2" />
          <span class="truncate">Productos</span>
        </div><!-- productos -->
        <Loader :show="loading" />
      </nav>
    </aside>

    <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-10" v-if="form">
      <div class="shadow sm:rounded-md">
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
                <p class="text-gray-600 text-sm">Aquí podrás modificar la información General de la Categoría</p>
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
              <!-- name & description -->
              <div class="grid grid-cols-6 gap-6 mb-4">
                <div class="col-span-6 lg:col-span-2">
                  <label for="parent" class="block text-sm text-gray-700">Categoría Padre:</label>
                  <input
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
                    type="text"
                    name="parent"
                    id="parent"
                    autocomplete="off"
                    v-model="form.padre"
                    v-if="!changeParent"
                    @click="changeParent = true"
                  >
                  <SearchComponent
                    :show="changeParent"
                    @set-change="setParent"
                    :url="route('api.search-categories')"
                    label="name"
                    @close-it="changeParent = false"
                    :parent="true"
                  />
                </div><!-- parent_uuid -->
                <div class="col-span-2 lg:col-span-2">
                  <div class="flex h-full items-center justify-start relative z-0">
                    <div class="flex items-center h-5">
                      <input
                        id="is_parent"
                        name="is_parent"
                        type="checkbox"
                        v-model="form.is_parent"
                        class="focus:ring-purple h-4 w-4 text-purple border-gray-300 rounded"
                      >
                    </div>
                    <div class="ml-3 text-sm relative z-0">
                      <label for="is_parent" class="font-medium">Es Categoría Padre?</label>
                    </div>
                  </div>
                </div><!-- is_parent -->
              </div>
              <!-- parent & is_parent -->

              <div class="grid grid-cols-6 gap-6 mb-4">
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

              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <jet-button
                  type="button"
                  :disabled="loading"
                  @click.prevent="updateTheCategory"
                >
                  Actualizar
                </jet-button>
              </div>
              <!-- submit button -->
            </div>
            <div v-else>
              <GeneralesCategory :contact="form" v-if="form" />
            </div>
          </div>

          <div v-if="section.productos">
            <div class="flex justify-between mb-4 border-b border-purple pb-1">
              <div>
                <h3 class="flex text-lg font-semibold leading-6 text-purple">
                  <TruckIcon class="h-6 w-6 mr-2" />
                  Productos
                </h3>
                <p class="text-gray-600 text-sm">Listado de los Productos asignados a esta Categoría</p>
              </div>
            </div>
            <dl class="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-4 text-sm" v-if="form.products.length > 0">
              <div
                class="sm:col-span-1 text-purple-light"
                v-for="(prod, index) in form.products"
                :key="index"
              >
                <span class="font-semibold mr-2" v-text="index + 1"></span>
                <Link :href="route('soporte.products.show', prod.uuid)" > {{ prod.name }} </Link>
              </div>
            </dl>
          </div>

        </div>

        <div class="bg-white py-6 px-4 space-y-6 sm:p-6" v-show="form.children.length > 0">
          <div class="mb-4 border-b border-purple pb-1">
            <h3 class="text-lg font-semibold leading-6 text-purple flex">
              <ViewGridIcon class="h-6 w-6 mr-2" />
              SubCategorias
            </h3>
            <p class="text-gray-600 text-sm">Para remover alguna de las categorías, de click en el bote de basura del lado derecho del registro que quiere remover</p>
          </div>
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50 font-medium text-gray-500 uppercase tracking-wider">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs">
                  Nombre
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs">
                  Modificación
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs">
                  Estatus
                </th>
                <th scope="col" class="px-6 py-3 text-right text-xs">
                  Acc.
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr
                class="text-xs text-gray-700 whitespace-nowrap"
                v-for="child in form.children"
                :key="child.uuid"
              >
                <td
                  class="px-6 py-4 whitespace-nowrap cursor-pointer font-semibold text-purple hover:text-blue-600"
                >
                  <Link class="inline-block text-purple font-semibold" :href="route('catalogos.categories.show', child.uuid)">
                    {{ child.name }}
                  </Link>
                </td>
                <td class="px-6 py-4">{{ getDate(child.updated_at) }}</td>
                <td class="px-6 py-4">{{ getStatus(child.status) }}</td>
                <td class="px-6 py-4 text-right">
                  <button
                    v-if="$page.props.user.level < 2"
                    @click.prevent="deleteTheChild(child.uuid)"
                  >
                    <TrashIcon class="w-4 h-4 text-red-500" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <DeleteItem
      :showModal="showDeleteModal"
      @confirmed="confirmDeletion"
      @closeModal="closeTheModal"
    />

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
import { onMounted, ref, reactive } from 'vue'
import Errors from '@/Elements/Utilities/Errors'
import { ViewGridIcon, TruckIcon, ClipboardListIcon, PlusIcon, PencilIcon } from '@heroicons/vue/outline'
import { TrashIcon, XIcon  } from '@heroicons/vue/solid'
import useCategories from '@/Scripts/composables/categories';
import JetButton from '@/Jetstream/Button'
import JetButtonSmall from '@/Jetstream/ButtonSmall'
import useHelpers from '@/Scripts/helpers.js'
import SearchComponent from '@/Elements/Search/SearchCategories'
import Notification from '@/Elements/Modals/Notification'
import DeleteItem from '@/Elements/Modals/DeleteItem'
import Loader from '@/Elements/Utilities/Loader'
import GeneralesCategory from './Generales'

const props = defineProps({
  user: Object,
  thecategory: Object
})
let section = reactive({
  generales: true,
  productos: false
})
const modalOpen = ref(false)
const modalDetails = reactive({
  title: null,
  message: null,
  type: null,
})
let editGenerales = ref(false)
const loading = ref(true)
const changeAssigned = ref(false)
const changeParent = ref(false)
const uuidToDelete = ref(null)
const form = ref(null)
const showDeleteModal = ref(false)
const { getCategory, updateCategory, errors } = useCategories()
const { getStatus, getDate } = useHelpers()

onMounted(
  getCategory(props.thecategory.uuid)
    .then(response => {
      form.value = response.data.data
      form.value.padre = form.value.parent ? form.value.parent.name : null
      loading.value = false
    })
)
const updateTheCategory = async () => {
  loading.value = true
  await updateCategory({...form.value});
  loading.value = false
  if(!errors.value) {
    modalDetails.title = 'Categoría actualizada'
    modalDetails.message = `Se ha actualizado correctamente la información de la Categoría <br> ${props.thecategory.name}`
    modalDetails.type = 'success'
    modalOpen.value = true
    setTimeout( () => {
      modalDetails.title = null
      modalDetails.message = null
      modalDetails.type = null
      modalOpen.value = false
      loading.value = false
      Inertia.visit(route('catalogos.categories.show', props.thecategory.uuid), {
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
  changeAssigned.value = false
  form.value.assigned = e.fullname
  form.value.assigned_to = e.uuid
}
const setParent = (e) => {
  changeParent.value = false
  form.value.parent_uuid = e.uuid
  form.value.padre = e.name
}
const closeTheModal = () => {
  showDeleteModal.value = false
}
const deleteTheChild = (id) => {
  uuidToDelete.value = id
  showDeleteModal.value = true
}
const confirmDeletion = () => {
  loading.value = true
  axios
    .post(route('api.categories.remove-child', uuidToDelete.value))
    .then( response => {
      loading.value = false
      Inertia.visit(route('catalogos.categories.show', props.thecategory.uuid), {
        method: 'get'
      })
    })
  showDeleteModal.value = false
}
const changeSection = (secc) => {
  section.generales = secc == 'generales' ? true : false,
  section.productos = secc == 'productos' ? true : false
}
</script>
