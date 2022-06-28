<template>
  <Head title="Catálogo Hoteles" />
  <div class="flex flex-col px-10 md:px-4 lg:pl-0 max-w-6xl mx-auto pb-10">
    <div class="flex justify-between py-2">
      <div class="flex relative">
        <input v-model="search" type="search" placeholder="Buscar..." class="border-purple-light px-2 rounded-lg" />
        <Loader class="ml-4" :show="loading" />
      </div>
      <h1 class="text-purple font-semibold text-2xl tracking-widest uppercase">
        Orígenes de Contactos
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
                Notas
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
              v-for="origin in origins.data"
              :key="origin.uuid"
            >
              <td
                class="px-6 py-4 whitespace-normal font-semibold text-purple cursor-pointer"
                @click="startOriginUpdate(origin)"
              >
                {{ origin.name }}
              </td>
              <td class="px-6 py-4 whitespace-normal text-gray-500">{{ origin.note }}</td>
              <td class="px-6 py-4 whitespace-normal text-gray-500">{{ origin.branch?.name }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-gray-500">{{ getStatus(origin.status) }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-gray-500">{{ getDate(origin.created_at) }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-right">
                <div class="flex">
                  <button
                    v-if="$page.props.user.level < 2"
                    @click="startOriginUpdate(origin)"
                  >
                    <PencilIcon class="w-4 h-4 text-green-500" />
                  </button>
                  <button
                    v-if="$page.props.user.level < 2"
                    @click.prevent="deleteTheOrigin(origin.uuid)"
                  >
                    <TrashIcon class="w-4 h-4 ml-3 text-red-500" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div
          class="flex justify-between items-center py-3 px-4 font-sm text-purple-light"
          v-if="showPaginator"
        >
          <Pagination :links="origins.links" />
          <div>
            Página {{ origins.current_page }} de {{ origins.last_page }} | Total Registros: {{ origins.total }}
          </div>
        </div>
        <div class="flex justify-center py-4" v-if="origins.data.length == 0">
          <EmojiSadIcon class="w-6 h-6 mr-2" />Sin registros
        </div>
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
              <div class="mt-4">
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
              <div class="mt-4">
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
              <label for="note" class="block text-sm text-gray-700">Notas:</label>
              <textarea
                name="note"
                id="note"
                rows="9"
                v-model="form.note"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
              ></textarea>
              <div class="text-red-500 font-xs" v-if="errores?.note">{{ errores.note[0] }}</div>
            </div>
            <!-- name, description & status -->
            <div class="col-span-6 text-right">
              <jet-button
                type="button"
                class="w-full lg:w-1/2 mx-auto flex justify-center"
                :disabled="form.processing"
                @click.prevent="createUpdateOrigin"
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
import { PlusIcon, XIcon,  TrashIcon, PencilIcon, EmojiSadIcon  } from '@heroicons/vue/outline'
import useOrigins from '@/Scripts/composables/origins'
import useHelpers from '@/Scripts/helpers.js'
import JetButton from '@/Jetstream/Button'
import Errors from '@/Elements/Utilities/Errors'
import DeleteItem from '@/Elements/Modals/DeleteItem'
import debounce from 'lodash/debounce'
import Loader from '@/Elements/Utilities/Loader'
import Pagination from '@/Elements/Utilities/Pagination'

let props = defineProps({
  user: Object,
  branches: Object,
  filters: Object,
  can: Object,
  origins: Object,
})
const search = ref(props.filters.search)
const showForm = ref(false)
const loading = ref(false)
const update = ref(false)
const { updateOrigin, destroyOrigin, storeOrigin, errors } = useOrigins()
const { getStatus, getDate } = useHelpers()
const errores = ref([])
const idToDelete = ref(null)
const showDeleteModal = ref(false)
let form = ref({
  name: null,
  note: null,
  created_by: props.user.uuid,
  status: 1,
  branch_uuid: null,
})
const createUpdateOrigin = async () => {
  loading.value = true
  if(update.value == true) {
    await updateOrigin({...form.value})
    update.value = false
    loading.value = false
  } else {
    await storeOrigin({...form.value});
    loading.value = false
  }
  if(!errors.value) {
    Inertia.visit(route('soporte.origins.index'), { method: 'get'}, { preserveState: false })
  } else {
    loading.value = false
  }
  resetForm()
}
const deleteTheOrigin = (uuid) => {
  idToDelete.value = uuid
  showDeleteModal.value = true
}
const closeTheModal = () => {
  showDeleteModal.value = false
  idToDelete.value = null
}
const confirmDeletion = () => {
  loading.value = true
  destroyOrigin(idToDelete.value)
  showDeleteModal.value = false
  if(!errors.value) {
    Inertia.visit(route('soporte.origins.index'), { method: 'get' }, { preserveState: false })
  }
}
const startOriginUpdate = (hotel) => {
  update.value = true
  form.value = hotel
  showForm.value = true
}
function resetForm() {
  form.value = {
    name: null,
    note: null,
    created_by: props.user.uuid,
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
  Inertia.get(route('soporte.origins.index'), { search: value }, { preserveState: true, replace: true });
}, 300));

let showPaginator = ref(false)
if(props.origins.data.length > 0 && props.origins.total > props.origins.data.length) {
  showPaginator.value = true
}

</script>
