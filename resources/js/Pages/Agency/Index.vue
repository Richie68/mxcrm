<template>
  <Head title="Listado de Agencias" />

  <div class="flex max-w-6xl mx-auto">
    <h1 class="flex justify-around w-full py-2 text-purple font-semibold text-2xl tracking-widest uppercase">
      <span>Agencias</span>
      <Link
        class="inline-flex items-center px-2 py-0 bg-purple border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-dark active:bg-purple-dark focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple-light disabled:opacity-25 transition"
        :href="route('clientes.agencies.create')"
      >
        <PlusIcon class="w-4 h-4 mr-1" /> Nueva
      </Link>
    </h1>
  </div>
  <!-- title & add button -->
  <div class="flex flex-col md:flex-row px-10 md:px-4 lg:pl-0 max-w-6xl mx-auto">
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
                  Registrado por:
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs">
                  Branch
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
                v-for="agency in agencies"
                :key="agency.uuid"
              >
                <td
                  class="px-6 py-4 whitespace-nowrap cursor-pointer font-semibold text-purple hover:text-blue-600"
                >
                  <Link :href="route('clientes.agencies.show', agency.uuid)">
                    {{ agency.name }}
                  </Link>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">{{ agency.description }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex">
                  {{ agency.website }}
                  <a :href="agency.website" target="_blank">
                    <ExternalLinkIcon class="w-4 h-4 ml-2 text-gray-400" />
                  </a>
                </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">{{ agency.creator?.fullname }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ agency.branch?.name }}</td>
                <td class="px-6 py-4">{{ getStatus(agency.status) }}</td>
                <td class="px-6 py-4 text-right">
                  <button
                    v-if="$page.props.user.level < 2"
                    @click.prevent="deleteTheAgency(agency.uuid)"
                  >
                    <TrashIcon class="w-4 h-4 text-red-500" />
                  </button>
                </td>
              </tr>
              <tr class="text-xs text-gray-700 whitespace-nowrap" v-if="agencies.length == 0">
                <td colspan="7" class="px-6 py-4 text-center whitespace-nowrap">
                  <div class="flex">
                    <div class="flex items-center mx-auto">
                      <EmojiSadIcon class="w-6 h-6 text-purple mr-2" />
                      No hay registros
                    </div>
                  </div>
                </td>
              </tr><!-- no results -->
            </tbody>
          </table>
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
import { ref, onMounted } from 'vue'
import { Inertia } from '@inertiajs/inertia'
import { PlusIcon, TrashIcon, EmojiSadIcon, ExternalLinkIcon } from '@heroicons/vue/outline'
import useAgencies from '@/Scripts/composables/agencies'
import useHelpers from '@/Scripts/helpers.js'
import Errors from '@/Elements/Utilities/Errors'
import DeleteItem from '@/Elements/Modals/DeleteItem'

const props = defineProps({
  user: Object
})
const { agencies, getAgencies, destroyAgency, errors } = useAgencies()
const { getStatus } = useHelpers()
const idToDelete = ref(null)
const showDeleteModal = ref(false)

onMounted(getAgencies())

const deleteTheAgency = (id) => {
  idToDelete.value = id
  showDeleteModal.value = true
}

const closeTheModal = () => {
  showDeleteModal.value = false
}

const confirmDeletion = () => {
  destroyAgency(idToDelete.value)
  showDeleteModal.value = false
  if(!errors.value) {
    Inertia.visit(route('clientes.agencies.index'), {
      method: 'get'
    })
  }
}

</script>
