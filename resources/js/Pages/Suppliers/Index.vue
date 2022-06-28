<template>
  <Head title="Listado de Proveedores" />

  <div class="max-w-7xl mx-auto">
    <h1 class="flex justify-around py-2 text-purple font-semibold text-2xl tracking-widest uppercase">
      Listado de Proveedores
      <Link
        class="inline-flex items-center px-2 py-0 bg-purple border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-dark active:bg-purple-dark focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple-light disabled:opacity-25 transition"
        :href="route('catalogos.suppliers.create')"
      >
        <PlusIcon class="w-4 h-4 mr-1" /> Nuevo
      </Link>
    </h1>
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200" v-if="suppliers.length > 0">
              <thead class="bg-gray-50 font-medium text-gray-500 uppercase tracking-wider">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    Nombre
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    RFC
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    Razón Social
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    Teléfono
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    Sitio web
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    Código
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    Estatus
                  </th>
                  <th scope="col" class="px-6 py-3 text-right text-xs">
                    Registro
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr
                  class="text-xs text-gray-700 whitespace-nowrap"
                  v-for="supplier in suppliers"
                  :key="supplier.id"
                >
                  <td class="px-6 py-4 whitespace-nowrap">
                    <Link :href="route('catalogos.suppliers.show', supplier.uuid)">
                      <div>
                        <div class="text-xs font-semibold text-purple hover:text-blue-600">
                            {{ supplier.name }}
                        </div>
                        <div class="text-xs text-gray-500">
                          {{ supplier.emails.length > 0 ? supplier.emails[0].email : '' }}
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td class="px-6 py-4">
                    {{ supplier.rfc }}
                  </td>
                  <td>
                    {{ supplier.razon_social }}
                  </td>
                  <td class="px-6 py-4">
                    {{ supplier.phone_work }}
                  </td>
                  <td class="px-6 py-4">
                    {{ supplier.website }}
                  </td>
                  <td class="px-6 py-4 uppercase">
                    {{ supplier.codigo }}
                  </td>
                  <td class="px-6 py-4">
                    <span
                      class="bg-gray-100 px-2 inline-flex text-xs leading-5 font-semibold rounded-md"
                      :class="statusClass(supplier.status)"
                    >
                      {{ userStatus(supplier.status) }}
                    </span>
                  </td>
                  <td class="px-6 py-4 text-right">
                    {{ getLongDate(supplier.created_at) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { PlusIcon  } from '@heroicons/vue/outline'
import useSuppliers from '@/Scripts/composables/suppliers'
import useHelpers from '@/Scripts/helpers.js'

const { userStatus, statusClass, getLongDate } = useHelpers()
const { suppliers, getSuppliers } = useSuppliers()

onMounted(getSuppliers())
</script>
