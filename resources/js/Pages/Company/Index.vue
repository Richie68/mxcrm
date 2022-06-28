<template>
  <Head title="Listado de Empresas" />

  <div class="max-w-7xl mx-auto">
    <h1 class="flex justify-around py-2 text-purple font-semibold text-2xl tracking-widest uppercase">
      Empresas
      <Link
        class="inline-flex items-center px-2 py-0 bg-purple border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-dark active:bg-purple-dark focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple-light disabled:opacity-25 transition"
        :href="route('marketing.company.create')"
      >
        <PlusIcon class="w-4 h-4 mr-1" /> Nueva
      </Link>
    </h1>
    <!-- title -->
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200" v-if="companies.length > 0">
              <thead class="bg-gray-50 font-medium text-gray-500 uppercase tracking-wider">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs">Nombre</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">Ciudad</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">País Facturación</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">Teléfono</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs">Usuario</th>
                  <th scope="col" class="px-6 py-3 text-right text-xs">Registro</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr
                  class="text-xs text-gray-700 whitespace-nowrap"
                  v-for="company in companies"
                  :key="company.id"
                >
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <Link :href="route('marketing.company.show', company.uuid)">
                        <div class="ml-4">
                          <div class="text-xs font-semibold text-purple hover:text-blue-600">
                              {{ company.name }}
                          </div>
                          <div class="text-xs text-gray-500">
                            {{ getMainEmail(company) }}
                          </div>
                        </div>
                      </Link>
                    </div>
                  </td>
                  <td class="px-6 py-4 capitalize">
                    {{ company.principal.length > 0 ? company.principal[0].city : '' }}
                  </td>
                  <td class="px-6 py-4">
                    {{ company.facturacion.length > 0 ? company.facturacion[0].country : '' }}
                  </td>
                  <td class="px-6 py-4">
                    {{ company.phone_work }}
                  </td>
                  <td class="px-6 py-4">
                    {{ company.assigned ? company.assigned.fullname : 'NA' }}
                  </td>
                  <td class="px-6 py-4 text-right">
                    {{ getLongDate(company.created_at) }}
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="flex justify-center py-4" v-else>
              <EmojiSadIcon class="w-6 h-6 mr-2" />Sin registros
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import { PlusIcon, EmojiSadIcon  } from '@heroicons/vue/outline'
import useCompanies from '@/Scripts/composables/companies'
import useHelpers from '@/Scripts/helpers.js'

export default defineComponent({
  name: 'CompanyIndex',

  components: {
    PlusIcon,
    EmojiSadIcon,
  },

  setup() {
    const { getLongDate } = useHelpers()
    const { companies, getCompanies } = useCompanies()

    onMounted(getCompanies)

    function getMainEmail(empresa) {
      if(empresa.emails.length > 0) {
        return empresa.emails[0].email
      }

      return ''
    }

    return {
      companies,
      getLongDate,
      getCompanies,
      getMainEmail,
    }
  },
})
</script>
