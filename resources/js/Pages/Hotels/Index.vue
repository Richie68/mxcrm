<template>
  <Head title="Catálogo Hoteles" />
  <div class="flex flex-col px-10 md:px-4 lg:pl-0 max-w-6xl mx-auto pb-10">
    <div class="flex justify-between py-2">
      <div class="flex relative">
        <input v-model="search" type="search" placeholder="Buscar..." class="border-purple-light px-2 rounded-lg" />
        <Loader class="ml-4" :show="loading" />
      </div>
      <h1 class="text-purple font-semibold text-2xl tracking-widest uppercase">
        Hoteles
      </h1>
      <button
        class="inline-flex ml-6 items-center px-2 py-0 bg-purple border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-dark active:bg-purple-dark focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple-light disabled:opacity-25 transition"
        type="button"
        :class="[showForm ? 'bg-purple-light' : 'bg-purple']"
        @click.prevent="showForm = !showForm"
      >
        <span class="flex" v-if="!showForm"><PlusIcon class="w-4 h-4 mr-1" /> Nuevo</span>
        <span class="flex" v-if="showForm"><XIcon class="w-4 h-4 mr-1" /> Cerrar</span>
      </button>
    </div>
    <!-- title & add button -->

    <div class="w-full py-2 align-middle mx-auto">
      <Errors :errors="errors" />
      <!-- display errors -->

      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg" v-if="!showForm">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50 font-medium text-gray-500 uppercase tracking-wider">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs">
                Nombre
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs">
                Código
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs">
                Descripción
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs">
                Branch
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs">
                Estatus
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs">
                Registro
              </th>
              <th scope="col" class="px-6 py-3 text-right text-xs">
                Acc.
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr
              class="text-xs text-gray-700 whitespace-nowrap"
              v-for="hotel in thehotels.data"
              :key="hotel.uuid"
            >
              <td
                class="px-6 py-4 whitespace-normal font-semibold text-purple cursor-pointer"
                @click="startUpdate(hotel)"
              >
                {{ hotel.name }}
              </td>
              <td class="px-6 py-4 whitespace-normal text-gray-500">{{ hotel.code }}</td>
              <td class="px-6 py-4 whitespace-normal text-gray-500">{{ hotel.description }}</td>
              <td class="px-6 py-4 whitespace-normal text-gray-500">{{ hotel.branch?.name }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-gray-500">{{ getStatus(hotel.status) }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-gray-500">{{ getDate(hotel.created_at) }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-right">
                <div class="flex">
                  <button
                    v-if="$page.props.user.level < 2"
                    @click="startUpdate(hotel)"
                  >
                    <PencilIcon class="w-4 h-4 text-green-500" />
                  </button>
                  <button
                    v-if="$page.props.user.level < 2"
                    @click.prevent="deleteTheHotel(hotel.uuid)"
                  >
                    <TrashIcon class="w-4 h-4 ml-3 text-red-500" />
                  </button>
                </div>
              </td>
            </tr>
            <tr class="text-xs text-gray-700" v-if="thehotels.data.length == 0">
              <td colspan="6" class="px-6 py-4 text-center">No hay registros</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- hotels list -->

      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <div class="shadow bg-white p-6 align-middle mx-auto overflow-hidden border-b border-gray-200 sm:rounded-lg" v-if="showForm">
          <div class="w-full grid grid-cols-6 gap-4">
            <div class="col-span-6 lg:col-span-2">
              <div>
                <label for="name" class="block text-sm text-gray-700">
                  Nombre: <span class="text-red-700 text-xs">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  v-model="form.name"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
                >
                <div class="text-red-500 font-xs" v-if="errores?.name">{{ errores.name[0] }}</div>
              </div>
              <div>
                <label for="status" class="block text-sm text-gray-700">Estatus:</label>
                <select
                  id="status"
                  name="status"
                  v-model="form.status"
                  class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
                >
                  <option value="1">Activo</option>
                  <option value="0">Suspendido</option>
                </select>
                <div v-if="errores?.status">{{ errores.status[0] }}</div>
              </div>
              <div>
                <label for="branch" class="block text-sm text-gray-700">Branch:</label>
                <select
                  id="branch"
                  name="branch"
                  v-model="form.branch_uuid"
                  class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
                >
                  <option value="" selected>Seleccionar</option>
                  <option
                    :value="branch.uuid"
                    v-text="branch.name"
                    v-for="branch in branches"
                    :key="branch.id"
                  ></option>
                </select>
              </div>
            </div>
            <div class="col-span-6 lg:col-span-4">
              <label for="description" class="block text-sm text-gray-700">Descripción:</label>
              <textarea
                name="description"
                id="description"
                rows="8"
                v-model="form.description"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
              ></textarea>
              <div class="text-red-500 font-xs" v-if="errores?.description">{{ errores.description[0] }}</div>
            </div>
            <!-- name, description & status -->
            <div class="col-span-6 text-right">
              <jet-button
                type="button"
                class="w-full lg:w-1/2 mx-auto flex justify-center"
                :disabled="form.processing"
                @click.prevent="createUpdateHotel"
              >
                <span v-if="!update">Registrar</span>
                <span v-if="update">Actualizar</span>
              </jet-button>
            </div>
          </div>
        </div>
      </transition>
    <!-- form for new/update hotel -->
    </div>
    <!-- hotels table -->

    <DeleteItem
      :showModal="showDeleteModal"
      @confirmed="confirmDeletion"
      @closeModal="closeTheModal"
    />

  </div>

</template>

<script setup>
import { ref, watch } from 'vue'
import { Inertia } from '@inertiajs/inertia'
import { PlusIcon, XIcon,  TrashIcon, PencilIcon  } from '@heroicons/vue/outline'
import useHotels from '@/Scripts/composables/Hotels'
import useHelpers from '@/Scripts/helpers.js'
import JetButton from '@/Jetstream/Button'
import Errors from '@/Elements/Utilities/Errors'
import DeleteItem from '@/Elements/Modals/DeleteItem'
import debounce from 'lodash/debounce'
import Loader from '@/Elements/Utilities/Loader'

let props = defineProps({
  user: Object,
  thehotels: Object,
  filters: Object,
  can: Object,
  branches: Array,
})
const search = ref(props.filters.search)
const showForm = ref(false)
const loading = ref(false)
const update = ref(false)
const { updateHotel, destroyHotel, storeHotel, errors } = useHotels()
const { getStatus, getDate } = useHelpers()
const errores = ref([])
const idToDelete = ref(null)
const showDeleteModal = ref(false)
let form = ref({
  name: null,
  description: null,
  user_id: props.user.uuid,
  created_by: props.user.uuid,
  status: 1,
  branch_uuid: null,
})
const createUpdateHotel = async () => {
  loading.value = true
  if(update.value == true) {
    await updateHotel({...form.value})
    update.value = false
    loading.value = false
  } else {
    await storeHotel({...form.value});
    loading.value = false
  }
  if(!errors.value) {
    Inertia.visit(route('clientes.hotels.index'), { method: 'get'}, { preserveState: false })
  }
  resetForm()
}
const deleteTheHotel = (uuid) => {
  idToDelete.value = uuid
  showDeleteModal.value = true
}
const closeTheModal = () => {
  showDeleteModal.value = false
  idToDelete.value = null
}
const confirmDeletion = () => {
  loading.value = true
  destroyHotel(idToDelete.value)
  showDeleteModal.value = false
  if(!errors.value) {
    Inertia.visit(route('clientes.hotels.index'), { method: 'get' }, { preserveState: false })
  }
}
const startUpdate = (hotel) => {
  update.value = true
  form.value = hotel
  showForm.value = true
}
function resetForm() {
  form.value = {
    name: null,
    description: null,
    user_id: props.user.uuid,
    created_by: null,
    status: 1,
    branch_uuid: null,
  }
}
watch(
  () => showForm.value,
  (val) => {
    if(!val && update.value) {
      update.value = false
      resetForm()
    }
  }
)
watch(search, debounce(function (value) {
  Inertia.get(route('clientes.hotels.index'), { search: value }, { preserveState: true, replace: true });
}, 300));

</script>
