<template>
  <Head title="Listado de Empleados" />

  <div class="max-w-7xl mx-auto">
    <div class="flex justify-between py-2">
      <div class="relative">
        <input v-model="search" type="search" placeholder="Buscar..." class="border px-2 rounded-lg" />
      </div>
      <h1 class="text-purple font-semibold text-2xl tracking-widest uppercase">
        Usuarios CRM
      </h1>
      <Link
        class="flex items-center px-2 py-0 bg-purple border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-dark active:bg-purple-dark focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple-light disabled:opacity-25 transition"
        :href="route('empleados.create')"
        v-if="can.createUser"
      >
        <PlusIcon class="w-4 h-4 mr-1" /> Nuevo
      </Link>
    </div>

    <hr class="block w-11/12 mx-auto mt-2 border-purple border-opacity-40">

    <div class="flex flex-col mt-4">
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
                    Branch
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
                  v-for="employee in users.data"
                  :key="employee.id"
                >
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img class="h-10 w-10 rounded-full" :src="employee.profile_photo_url" alt="">
                      </div>
                      <Link :href="route('empleados.show', employee.uuid)" v-if="employee.userCanUpdate">
                        <div class="ml-4">
                          <div class="text-xs font-semibold text-purple hover:text-blue-600">
                              {{ employee.fullname }}
                          </div>
                          <div class="text-xs text-gray-500">
                            {{ getMainEmail(employee) }}
                          </div>
                        </div>
                      </Link>
                      <div v-else>
                        <div class="ml-4">
                          <div class="text-xs font-semibold">
                              {{ employee.fullname }}
                          </div>
                          <div class="text-xs text-gray-500">
                            {{ getMainEmail(employee) }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    {{ employee.branch?.name }}
                  </td>
                  <td class="px-6 py-4">
                    {{ employee.title }}
                  </td>
                  <td>
                    {{ employee.department }}
                  </td>
                  <td class="px-6 py-4">
                    {{ employee.phone_mobil }}
                  </td>
                  <td class="px-6 py-4">
                    {{ employee.phone_work }}
                  </td>
                  <td class="px-6 py-4">
                    <span
                      class="bg-gray-100 px-2 inline-flex text-xs leading-5 font-semibold rounded-md"
                      :class="statusClass(employee.status)"
                    >
                      {{ userStatus(employee.status) }}
                    </span>
                  </td>
                  <td class="px-6 py-4 text-right">
                    {{ getLongDate(employee.created_at) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- employees table -->
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { Inertia } from '@inertiajs/inertia'
import { PlusIcon  } from '@heroicons/vue/outline'
import useHelpers from '@/Scripts/helpers.js'
import debounce from 'lodash/debounce'

let props = defineProps({
  users: Object,
  filters: Object,
  can: Object
})
let search = ref(props.filters.search)
let { userStatus, statusClass, getLongDate } = useHelpers()
let getMainEmail = (empleado) => {
  let email = []
  if(empleado.emails.length > 0) {
    email = empleado.emails.filter( obj => obj.main == 1)
  }

  return email.length > 0 ? email[0].email : ''
}

watch(search, debounce(function (value) {
  Inertia.get(route('empleados.index'), { search: value }, { preserveState: true, replace: true });
}, 300));

</script>
