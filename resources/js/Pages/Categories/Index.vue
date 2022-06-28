<template>
  <Head title="Catálogo Categorías de Productos" />

  <div class="flex max-w-6xl mx-auto">
    <h1 class="flex justify-around w-full py-2 text-purple font-semibold text-2xl tracking-widest uppercase">
      <span class="flex items-center">
        <Loader :show="loading" />
        Categorías de Productos
      </span>
      <Link
        class="inline-flex items-center px-2 py-0 bg-purple border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-dark active:bg-purple-dark focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple-light disabled:opacity-25 transition"
        :href="route('catalogos.categories.create')"
      >
        <PlusIcon class="w-4 h-4 mr-1" /> Nuevo
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
                  Cat. Padre
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs">
                  Categoría padre?
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs">
                  Registrado por:
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs">
                  #Productos
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
                v-for="category in categories"
                :key="category.uuid"
              >
                <td
                  class="px-6 py-4 whitespace-nowrap cursor-pointer font-semibold text-purple hover:text-blue-600"
                >
                  <Link :href="route('catalogos.categories.show', category.uuid)">
                    {{ category.name }}
                  </Link>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">{{ category.description }}</td>
                <td class="px-6 py-4">{{ category.parent?.name }}</td>
                <td class="px-6 py-4">
                  <CheckCircleIcon class="w-6 h-6 text-green-500 mx-auto" v-if="category.is_parent" />
                </td>
                <td class="px-6 py-4 whitespace-nowrap">{{ category.creator?.fullname }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-center">{{ category.products?.length }}</td>
                <td class="px-6 py-4">{{ getStatus(category.status) }}</td>
                <td class="px-6 py-4 text-right">
                  <button
                    v-if="$page.props.user.level < 2"
                    @click.prevent="deleteTheCategory(category.uuid)"
                  >
                    <TrashIcon class="w-4 h-4 text-red-500" />
                  </button>
                </td>
              </tr>
              <tr class="text-xs text-gray-700 whitespace-nowrap" v-if="categories.length == 0 && !loading">
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
import { PlusIcon, TrashIcon, EmojiSadIcon  } from '@heroicons/vue/outline'
import { CheckCircleIcon  } from '@heroicons/vue/solid'
import useCategories from '@/Scripts/composables/categories'
import useHelpers from '@/Scripts/helpers.js'
import Errors from '@/Elements/Utilities/Errors'
import DeleteItem from '@/Elements/Modals/DeleteItem'
import Loader from '@/Elements/Utilities/Loader';

const props = defineProps({
  user: Object
})
let loading = ref(true)
const { categories, getCategories, destroyCategory, errors } = useCategories()
const { getStatus } = useHelpers()
const idToDelete = ref(null)
const showDeleteModal = ref(false)

onMounted(
  async () => {
    await getCategories()
    loading.value = false
  }
)
const deleteTheCategory = (id) => {
  idToDelete.value = id
  showDeleteModal.value = true
}
const closeTheModal = () => {
  showDeleteModal.value = false
}
const confirmDeletion = async () => {
  loading.value = true
  await destroyCategory(idToDelete.value)
  showDeleteModal.value = false
  if(!errors.value) {
    Inertia.visit(route('catalogos.categories.index'), {
      method: 'get'
    })
  }
}

</script>
