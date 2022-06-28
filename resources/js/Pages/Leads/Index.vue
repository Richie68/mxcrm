<template>
  <Head title="Listado de Clientes Potenciales" />

  <div class="max-w-7xl mx-auto">
    <div class="flex justify-between py-2">
      <div class="relative">
        <input v-model="search" type="search" placeholder="Buscar..." class="border-purple focus:ring-purple-light focus:border-purple px-2 rounded-lg" />
      </div>
      <h1 class="text-purple font-semibold text-2xl tracking-widest uppercase">
        Clientes Potenciales
      </h1>
      <Link
        class="flex items-center px-2 py-0 bg-purple border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-dark active:bg-purple-dark focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple-light disabled:opacity-25 transition"
        :href="route('ventas.leads.create')"
        v-if="can.createLead"
      >
        <PlusIcon class="w-4 h-4 mr-1" /> Nuevo
      </Link>
    </div>
    <!-- title -->

    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200" v-if="leads.data.length > 0">
              <thead class="bg-gray-50 font-medium text-gray-500 uppercase tracking-wider">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs">Nombre</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">Estado</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">Empresa</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">Teléfono</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">Usuario</th>
                  <th scope="col" class="px-6 py-3 text-right text-xs">Registro</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr
                  class="text-xs text-gray-700 whitespace-nowrap"
                  v-for="lead in leads.data"
                  :key="lead.id"
                >
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <Link :href="route('ventas.leads.show', lead.uuid)">
                        <div class="ml-4">
                          <div class="text-xs font-semibold text-purple hover:text-blue-600">
                              {{ lead.firstname }} {{ lead.lastname }}
                          </div>
                          <div class="text-xs text-gray-500">
                            {{ getMainEmail(lead) }}
                          </div>
                        </div>
                      </Link>
                    </div>
                  </td>
                  <td class="px-6 py-4 capitalize">
                    {{ lead.status }}
                  </td>
                  <td class="px-6 py-4">
                    {{ lead.empresa ? lead.empresa.name : lead.company }}
                  </td>
                  <td class="px-6 py-4">
                    {{ lead.phone_mobil }}
                  </td>
                  <td class="px-6 py-4">
                    {{ lead.assigned ? lead.assigned.fullname : 'NA' }}
                  </td>
                  <td class="px-6 py-4 text-right">
                    {{ getLongDate(lead.created_at) }}
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              class="flex justify-between items-center py-3 px-4 font-sm text-purple-light"
              v-if="needsPagination"
            >
              <Pagination :links="leads.links" />
              <div>
                Página {{ leads.current_page }} de {{ leads.last_page }} | Total Registros: {{ leads.total }}
              </div>
            </div>
            <div class="flex justify-center py-4" v-if="leads.data.length == 0">
              <EmojiSadIcon class="w-6 h-6 mr-2" />Sin registros
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- leads table -->
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import Pagination from '@/Elements/Utilities/Pagination'
import debounce from 'lodash/debounce'
import { Inertia } from '@inertiajs/inertia'
import useHelpers from '@/Scripts/helpers.js'
import { PlusIcon, EmojiSadIcon } from '@heroicons/vue/outline'

let props = defineProps({
  leads: Object,
  filters: Object,
  can: Object
})
let search = ref(props.filters.search)
const { getLongDate } = useHelpers()
let getMainEmail = (thelead) => {
  if(thelead.emails.length > 0) {
    return thelead.emails[0].email
  }
  return ''
}

watch(search, debounce(function (value) {
  Inertia.get(route('ventas.leads.index'), { search: value }, { preserveState: true, replace: true });
}, 300));

let needsPagination = computed(() => props.leads.total > props.leads.per_page)
</script>
