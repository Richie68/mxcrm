<template>
  <Head title="Branches | Destinos" />

  <div class="flex max-w-6xl mx-auto">
    <h1 class="flex py-2 text-purple font-semibold text-2xl tracking-widest uppercase">
      <span>Branches / Destinos</span>
      <button
        class="inline-flex ml-6 items-center px-2 py-0 bg-purple border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-dark active:bg-purple-dark focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple-light disabled:opacity-25 transition"
        type="button"
        :class="[showForm ? 'bg-purple-light' : 'bg-purple']"
        @click.prevent="showForm = !showForm"
      >
        <span class="flex" v-if="!showForm"><PlusIcon class="w-4 h-4 mr-1" /> Nuevo</span>
        <span class="flex" v-if="showForm"><XIcon class="w-4 h-4 mr-1" /> Cerrar</span>
      </button>
    </h1>
  </div>
  <!-- title & add button -->
  <div class="flex flex-col md:flex-row px-10 md:px-4 lg:pl-0 max-w-6xl mx-auto">
    <div class="w-full md:w-1/2 order-last md:order-first">
      <div class="w-full py-2 align-middle mx-auto">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50 font-medium text-gray-500 uppercase tracking-wider">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs">
                  Nombre
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
                v-for="branch in branches"
                :key="branch.id"
              >
                <td class="px-6 py-4 whitespace-nowrap font-semibold text-purple">{{ branch.name }}</td>
                <td class="px-6 py-4">{{ userStatus(branch.status) }}</td>
                <td class="px-6 py-4 text-right">
                  <button
                    v-if="$page.props.user.level < 2"
                    @click.prevent="deleteBranch(branch.id)"
                  >
                    <TrashIcon class="w-4 h-4 text-red-500" />
                  </button>
                </td>
              </tr>
              <tr class="text-xs text-gray-700 whitespace-nowrap" v-if="branches.length == 0">
                <td colspan="3" class="px-6 py-4 text-center whitespace-nowrap">No hay registros</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- branches table -->

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div class="w-full md:w-1/2 order-first md:order-last md:pl-10" v-if="showForm">
        <form
          action="#"
          method="POST"
          @submit.prevent="submit"
        >
          <div class="w-full grid grid-cols-6 gap-4">
            <div class="col-span-6 lg:col-span-2">
              <label for="name" class="block text-sm text-gray-700">Nombre:</label>
              <input
                type="text"
                name="name"
                id="name"
                v-model="form.name"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
              >
              <div class="text-red-500 font-xs" v-if="errores?.name">{{ errores.name[0] }}</div>
            </div>
            <div class="col-span-6 lg:col-span-2">
              <label for="status" class="block text-sm text-gray-700">Estatus:</label>
              <select
                id="status"
                name="status"
                v-model="form.status"
                class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
              >
                <option value="1">Activo</option>
                <option value="0">Suspendido</option>
              </select>
              <div v-if="errores?.status">{{ errores.status[0] }}</div>
            </div>
            <!-- name & status -->
            <div class="col-span-6 md:col-span-4">
              <jet-button class="w-full justify-center" :disabled="form.processing">
                Registrar
              </jet-button>
            </div>
          </div>
        </form>
      </div>
    </transition>
    <!-- form for new/update branch -->
  </div>

  <DeleteItem
    :showModal="showDeleteModal"
    @confirmed="confirmDeletion"
    @closeModal="closeTheModal"
  />

</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { useForm } from '@inertiajs/inertia-vue3'
import useHelpers from '@/Scripts/helpers.js'
import { TrashIcon, XIcon,  PlusIcon  } from '@heroicons/vue/outline'
import JetButton from '@/Jetstream/Button'
import DeleteItem from '@/Elements/Modals/DeleteItem'

export default defineComponent({
  name: 'BranchesIndex',

  components: {
    XIcon,
    PlusIcon,
    TrashIcon,
    JetButton,
    DeleteItem,
  },


  setup() {
    const showForm = ref(false)
    const showDeleteModal = ref(false)
    const branches = ref([])
    const errores = ref([])
    const idToDelete = ref(null)
    const form = useForm({
      name: null,
      status: 1,
    })

    const { userStatus } = useHelpers()

    function getBranches() {
      axios.get(route('branchs.index')).then( ( { data } ) => branches.value = data)
    }
    onMounted(getBranches)

    return {
      form,
      errores,
      branches,
      showForm,
      idToDelete,
      userStatus,
      getBranches,
      showDeleteModal,
    }
  },

  methods: {
    submit() {
      this.errores = []
      axios.post(route('branchs.store'), this.form)
      .then( response => {
        if(response.status == 200) {
          this.branches = []
          this.getBranches()
          this.showForm = false
        }
      })
      .catch( error => {
        this.errores = error.response.data.errors
      })
    },
    deleteBranch(id) {
      this.idToDelete = id
      this.showDeleteModal = true
    },
    closeTheModal() {
      this.showDeleteModal = false
    },
    confirmDeletion() {
      this.errores = []
      axios.delete(route('branchs.destroy', this.idToDelete))
      .then( response => {
        if(response.status == 200) {
          this.branches = []
          this.getBranches()
          this.showDeleteModal = false
        }
      })
      .catch( error => {
        this.errores = error.response.data.errors
      })
    }
  }
})
</script>
