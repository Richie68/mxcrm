<template>
  <Head title="Listado de Grupos" />

  <div class="max-w-7xl mx-auto">
    <div class="flex justify-between py-2">
      <div class="relative">
        <input v-model="search" type="search" placeholder="Buscar..." class="border-purple-light px-2 rounded-lg" />
      </div>
      <h1 class="text-purple font-semibold text-2xl tracking-widest uppercase">
        Grupos
      </h1>
      <Link
        class="flex items-center px-2 py-0 bg-purple border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-dark active:bg-purple-dark focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple-light disabled:opacity-25 transition"
        :href="route('ventas.groups.create')"
        v-if="can.createGroup"
      >
        <PlusIcon class="w-4 h-4 mr-1" /> Nuevo
      </Link>
    </div>
    <!-- title and search -->
  </div>
  <div class="max-w-100 pb-20">
    <div class="flex flex-col mx-10 overflow-hidden">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg" v-if="groups.data.length > 0">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50 font-medium text-gray-500 uppercase tracking-wider">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    F.Registro
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    F.Entrada
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    F.Salida
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    Folio
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    Departamento
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    Nombre
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    Hotel
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    Empresa
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    Contacto
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    Agencia
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    Tipo
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    Pax
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    Usuario
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    Estatus
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    $Act
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    $Trans
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    $Even
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    Gerente
                  </th>
                  <th scope="col" class="px-6 py-3 text-right text-xs">
                    Ejecutivo
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr
                  class="text-xs text-gray-700 whitespace-nowrap"
                  v-for="group in groups.data"
                  :key="group.id"
                >
                  <td class="px-6 py-4 whitespace-nowrap">
                    {{ getDate(group.created_at) }}
                  </td>
                  <td class="px-6 py-4">
                    {{ getDate(group.start_date) }}
                  </td>
                  <td class="px-6 py-4">
                    {{ getDate(group.end_date) }}
                  </td>
                  <td class="px-6 py-4">
                    {{ group.folio }}
                  </td>
                  <td class="px-6 py-4">
                    {{ group.department }}
                  </td>
                  <td class="px-6 py-4">
                    <Link class="text-xs font-semibold text-purple hover:text-blue-600" :href="route('ventas.groups.show', group.uuid)">
                      {{ group.name }}
                    </Link>
                  </td>
                  <td class="px-6 py-4">
                    {{ group.hotel }}
                  </td>
                  <td class="px-6 py-4">
                    {{ group.company?.name }}
                  </td>
                  <td class="px-6 py-4">
                    {{ group.lead?.name }}
                  </td>
                  <td class="px-6 py-4">
                    {{ group.agency?.name }}
                  </td>
                  <td class="px-6 py-4">
                    {{ group.type }}
                  </td>
                  <td class="px-6 py-4">
                    {{ group.pax }}
                  </td>
                  <td class="px-6 py-4">
                    {{ group.creator?.fullname }}
                  </td>
                  <td class="px-6 py-4">
                    {{ group.status }}
                  </td>
                  <td class="px-6 py-4">
                    {{ group.type }}
                  </td>
                  <td class="px-6 py-4">
                    {{ group.estimated_activities }}
                  </td>
                  <td class="px-6 py-4">
                    {{ group.estimated_transport }}
                  </td>
                  <td class="px-6 py-4">
                    {{ group.estimated_events }}
                  </td>
                  <td class="px-6 py-4">
                    {{ group.namanger?.fullname }}
                  </td>
                  <td class="px-6 py-4 text-right">
                    {{ group.executive?.fullname }}
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              class="flex justify-between items-center py-3 px-4 font-sm text-purple-light"
              v-if="needsPagination"
            >
              <Pagination :links="groups.links" />
              <div>
                Página {{ groups.current_page }} de {{ groups.last_page }} | Total Registros: {{ groups.total }}
              </div>
            </div>
            <!-- paginator -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { Inertia } from '@inertiajs/inertia'
import { PlusIcon } from '@heroicons/vue/outline'
import Pagination from '@/Elements/Utilities/Pagination'
import useHelpers from '@/Scripts/helpers.js'
import debounce from 'lodash/debounce'

let props = defineProps({
  groups: Object,
  filters: Object,
  can: Object
})
let search = ref(null)
let { getDate } = useHelpers()
let needsPagination = computed(() => props.groups.total > props.groups.per_page)
watch(search, debounce(function (value) {
  Inertia.get(route('ventas.groups.index'), { search: value }, { preserveState: true, replace: true });
}, 300));
</script>
