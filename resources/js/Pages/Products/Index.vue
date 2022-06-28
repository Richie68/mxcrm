<template>
  <Head title="Listado de Contactos" />

  <div class="max-w-7xl mx-auto">
    <div class="flex justify-between py-2">
      <div class="relative" v-if="products.data.length > 0">
        <input
          v-model="search"
          type="search"
          placeholder="Buscar..."
          class="border-purple-light px-2 rounded-lg"
        />
      </div>
      <h1 class="text-purple font-semibold text-2xl tracking-widest uppercase">
        Productos
      </h1>
      <Link
        class="flex items-center px-2 py-0 bg-purple border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-dark active:bg-purple-dark focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple-light disabled:opacity-25 transition"
        :href="route('soporte.products.create')"
        v-if="can.createProduct"
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
                    Código
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    Proveedor
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    Costo
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    Precio
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    Categoría
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">
                    Registro
                  </th>
                  <th scope="col" class="px-6 py-3 text-right text-xs">
                    Modificación
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr
                  class="text-xs text-gray-700 whitespace-nowrap"
                  v-for="product in products.data"
                  :key="product.id"
                  v-if="products.data.length > 0"
                >
                  <td class="px-6 py-4 whitespace-nowrap">
                    <Link :href="route('soporte.products.show', product.uuid)">
                      <div class="text-xs font-semibold text-purple hover:text-blue-600">
                        {{ product.name }}
                      </div>
                    </Link>
                  </td>
                  <td class="px-6 py-4">
                    {{ product.code }}
                  </td>
                  <td>
                    {{ product.supplier?.name }}
                  </td>
                  <td class="px-6 py-4">
                    {{ product.cost }}
                  </td>
                  <td class="px-6 py-4">
                    {{ product.price }}
                  </td>
                  <td class="px-6 py-4 uppercase">
                    <Link
                      :href="route('catalogos.categories.show', product.category_uuid)"
                      v-if="product.category"
                    >
                      <div class="text-xs font-semibold text-purple hover:text-blue-600">
                        {{ product.category.name }}
                      </div>
                    </Link>
                  </td>
                  <td class="px-6 py-4">
                    {{ getLongDate(product.created_at) }}
                  </td>
                  <td class="px-6 py-4 text-right">
                    {{ getLongDate(product.updated_at) }}
                  </td>
                </tr>
                <tr class="text-xs text-gray-700 whitespace-nowrap" v-if="products.data.length == 0">
                  <td colspan="8" class="px-6 py-4 text-center whitespace-nowrap">No hay registros</td>
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
import { ref, watch } from 'vue'
import debounce from 'lodash/debounce'
import { Inertia } from '@inertiajs/inertia'
import useHelpers from '@/Scripts/helpers.js'
import { PlusIcon  } from '@heroicons/vue/outline'

let props = defineProps({
  products: Object,
  filters: Object,
  can: Object
})
const search = ref(props.filters.search)
const { getLongDate } = useHelpers()

watch(search, debounce(function (value) {
  Inertia.get(route('soporte.products.index'), { search: value }, { preserveState: true, replace: true });
}, 300));
</script>
