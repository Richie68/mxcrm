<template>
  <Head title="Listado de Contactos" />

  <div class="max-w-7xl mx-auto pb-20">
    <div class="flex justify-between py-2">
      <div class="relative">
        <input v-model="search" type="search" placeholder="Buscar..." class="border-purple-light px-2 rounded-lg" />
      </div>
      <h1 class="text-purple font-semibold text-2xl tracking-widest uppercase">
        Contactos
      </h1>
      <Link
        class="flex items-center px-2 py-0 bg-purple border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-dark active:bg-purple-dark focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple-light disabled:opacity-25 transition"
        :href="route('clientes.contacts.create')"
        v-if="can.createContact"
      >
        <PlusIcon class="w-4 h-4 mr-1" /> Nuevo
      </Link>
    </div>
    <!-- title, search & new button -->
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50 font-medium text-gray-500 uppercase tracking-wider">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    Nombre
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    Título
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    Departamento
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    Celular
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    Tel. Trabajo
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    Tareas
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    Branch
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    Estado
                  </th>
                  <th scope="col" class="px-6 py-3 text-right text-xs">
                    Registro
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr
                  class="text-xs text-gray-700 whitespace-nowrap"
                  v-for="contacto in contacts.data"
                  :key="contacto.id"
                >
                  <td class="px-6 py-4 whitespace-nowrap">
                    <Link :href="route('clientes.contacts.show', contacto.uuid)">
                      <div>
                        <div class="text-xs font-semibold text-purple hover:text-blue-600">
                            {{ contacto.firstname }} {{ contacto.lastname }}
                        </div>
                        <div class="text-xs text-gray-500">
                          {{ getMainEmail(contacto) }}
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td class="px-6 py-4">
                    {{ contacto.title }}
                  </td>
                  <td>
                    {{ contacto.department }}
                  </td>
                  <td class="px-6 py-4">
                    {{ contacto.phone_mobil }}
                  </td>
                  <td class="px-6 py-4">
                    {{ contacto.phone_work }}
                  </td>
                  <td class="px-6 py-4">
                    {{ contacto.tasks.length > 0 ? contacto.tasks.length : '' }}
                  </td>
                  <td class="px-6 py-4">
                    {{ contacto.branch ? contacto.branch.name : '' }}
                  </td>
                  <td class="px-6 py-4">
                    <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-md capitalize"
                      :class="convertidoClass(contacto.status)"
                    >
                      {{ contacto.status }}
                    </span>
                  </td>
                  <td class="px-6 py-4 text-right">
                    {{ getLongDate(contacto.created_at) }}
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              class="flex justify-between items-center py-3 px-4 font-sm text-purple-light"
              v-if="needsPagination"
            >
              <Pagination :links="contacts.links" />
              <div>
                Página {{ contacts.current_page }} de {{ contacts.last_page }} | Total Registros: {{ contacts.total }}
              </div>
            </div>
            <!-- paginator -->
          </div>
        </div>
      </div>
    </div>
    <!-- contacts table -->
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import Pagination from '@/Elements/Utilities/Pagination'
import debounce from 'lodash/debounce'
import { Inertia } from '@inertiajs/inertia'
import useHelpers from '@/Scripts/helpers.js'
import { PlusIcon  } from '@heroicons/vue/outline'

let props = defineProps({
  contacts: Object,
  filters: Object,
  can: Object
})
const search = ref(props.filters.search)
const { convertidoClass, getLongDate } = useHelpers()
const getMainEmail = (contacto) => {
  let email = []
  if(contacto.emails.length > 0) {
    email = contacto.emails.filter( obj => obj.main == 1)
  }

  return email.length > 0 ? email[0].email : ''
}
watch(search, debounce(function (value) {
  Inertia.get(route('clientes.contacts.index'), { search: value }, { preserveState: true, replace: true });
}, 300));

let needsPagination = computed(() => props.contacts.total > props.contacts.per_page)
</script>
