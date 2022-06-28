<template>
  <Head title="Listado de Comisionistas" />

  <div class="max-w-7xl mx-auto pb-20">
    <div class="flex justify-between py-2">
      <div class="relative">
        <input v-model="search" type="search" placeholder="Buscar..." class="border-purple-light px-2 rounded-lg" />
      </div>
      <h1 class="text-purple font-semibold text-2xl tracking-widest uppercase">
        Comisionistas
      </h1>
      <Link
        class="flex items-center px-2 py-0 bg-purple border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-dark active:bg-purple-dark focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple-light disabled:opacity-25 transition"
        :href="route('clientes.retailers.create')"
        v-if="can.createRetailer"
      >
        <PlusIcon class="w-4 h-4 mr-1" /> Nuevo
      </Link>
    </div>
    <!-- title -->
    <div class="w-full order-last md:order-first">
      <div class="py-2 align-middle mx-auto">
        <Errors :errors="errors" />
        <!-- display errors -->

        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50 font-medium text-gray-500 uppercase tracking-wider">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs">
                  Nombre
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs">
                  Descripción
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs">
                  Website
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs">
                  Asignado a:
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs">
                  Branch
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs">
                  Tareas
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
                v-for="retailer in retailers.data"
                :key="retailer.uuid"
              >
                <td
                  class="px-6 py-4 whitespace-nowrap cursor-pointer font-semibold text-purple hover:text-blue-600"
                >
                  <Link :href="route('clientes.retailers.show', retailer.uuid)">
                    {{ retailer.name }}
                  </Link>
                </td>
                <td class="px-6 py-4 whitespace-normal">{{ retailer.description }}</td>
                <td class="px-6 py-4 whitespace-normal">
                  <div class="flex">
                    {{ retailer.website }}
                    <a :href="retailer.website" target="_blank">
                      <ExternalLinkIcon class="w-4 h-4 ml-2 text-gray-400" />
                    </a>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-normal">{{ retailer.assigned?.fullname }}</td>
                <td class="px-6 py-4 whitespace-normal">{{ retailer.branch?.name }}</td>
                <td class="px-6 py-4 whitespace-normal text-center">
                  {{ retailer.tasks.length > 0 ? retailer.tasks.length : '' }}
                </td>
                <td class="px-6 py-4">{{ getStatus(retailer.status) }}</td>
                <td class="px-6 py-4 text-right">
                  <button
                    v-if="$page.props.user.level < 2"
                    @click.prevent="deleteTheRetailer(retailer.uuid)"
                  >
                    <TrashIcon class="w-4 h-4 text-red-500" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            class="flex justify-between items-center py-3 px-4 font-sm text-purple-light"
            v-if="needsPagination"
          >
            <Pagination :links="retailers.links" />
            <div>
              Página {{ retailers.current_page }} de {{ retailers.last_page }} | Total Registros: {{ retailers.total }}
            </div>
          </div>
          <!-- paginator -->
        </div>
        <!-- categories list -->
      </div>
    </div>
    <!-- categories table -->

    <DeleteItem
      :showModal="showDeleteModal"
      @confirmed="confirmDeletion"
      @closeModal="closeTheModal"
    />

  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { Inertia } from '@inertiajs/inertia'
import { PlusIcon, TrashIcon, ExternalLinkIcon } from '@heroicons/vue/outline'
import useRetailers from '@/Scripts/composables/retailers'
import Pagination from '@/Elements/Utilities/Pagination'
import DeleteItem from '@/Elements/Modals/DeleteItem'
import Errors from '@/Elements/Utilities/Errors'
import useHelpers from '@/Scripts/helpers.js'
import { debounce } from 'lodash'

let props = defineProps({
  retailers: Object,
  filters: Object,
  can: Object
})
const search = ref(props.filters.search)
const { destroyRetailer, errors } = useRetailers()
const { getStatus } = useHelpers()
const idToDelete = ref(null)
const showDeleteModal = ref(false)
const deleteTheRetailer = (id) => {
  idToDelete.value = id
  showDeleteModal.value = true
}
const closeTheModal = () => {
  showDeleteModal.value = false
}
const confirmDeletion = () => {
  destroyRetailer(idToDelete.value)
  showDeleteModal.value = false
  if(!errors.value) {
    Inertia.visit(route('clientes.retailers.index'), {
      method: 'get',
      preserveScroll: true,
      preserveState: false,
    })
  }
}
watch(search, debounce(function (value) {
  Inertia.get(route('clientes.retailers.index'), { search: value }, { preserveState: true, replace: true });
}, 300));
let needsPagination = computed(() => props.retailers.total > props.retailers.per_page)
</script>
