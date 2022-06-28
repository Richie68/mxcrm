<template>
  <Head title="Editar cuenta de Usuario CRM" />

  <header class="bg-white shadow mb-4">
    <div class="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 text-purple text-center font-semibold">
      Editar cuenta de Usuario CRM
    </div>
  </header>

  <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
    <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-2">
      <nav class="space-y-1">
        <Link
          class="text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm"
          :href="route('empleados.create')"
        >
          <PlusIcon class="w-4 h-4 mr-1" /> Nuevo
        </Link>
        <Link
          :href="route('empleados.index')"
          class="text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm"
          aria-current="page"
        >
          <ClipboardListIcon class="h-6 w-6 mr-2" />
          <span class="truncate">
            Lista de Empleados
          </span>
        </Link>
        <div
          @click="changeSection('generales')"
          class="text-purple hover:opacity-75 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm"
          aria-current="page"
          :class="{'bg-white' : generales }"
        >
          <UserCircleIcon class="h-6 w-6 mr-2" />
          <span class="truncate">
            Generales
          </span>
        </div>
        <div
          @click="changeSection('address')"
          class="text-purple hover:opacity-75 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm"
          aria-current="page"
          :class="{'bg-white' : address }"
        >
          <LocationMarkerIcon class="h-6 w-6 mr-2" />
          <span class="truncate">
            Dirección
          </span>
        </div>
        <div
          @click="changeSection('sistema')"
          class="text-purple hover:opacity-75 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm"
          aria-current="page"
          :class="{'bg-white' : sistema }"
        >
          <CogIcon class="h-6 w-6 mr-2" />
          <span class="truncate">
            Sistema
          </span>
        </div>
      </nav>
    </aside>
    <!-- left Menu options -->

    <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
      <div class="shadow sm:rounded-md sm:overflow-hidden">
        <div class="bg-white py-6 px-4 sm:p-6">
          <div v-show="generales">
            <div class="mb-4 border-b border-purple pb-1">
              <h3 class="flex text-lg font-semibold leading-6 text-purple">
                <UserCircleIcon class="h-6 w-6 mr-2" />
                Generales
              </h3>
            </div>
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 lg:col-span-2">
                <label for="firstname" class="block text-sm text-gray-700">Nombre:</label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  v-model="form.firstname"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
                >
                <div v-if="form.errors.firstname">{{ form.errors.firstname }}</div>
              </div>
              <div class="col-span-6 lg:col-span-2">
                <label for="lastname" class="block text-sm text-gray-700">Apellido:</label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  v-model="form.lastname"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
                >
                <div v-if="form.errors.lastname">{{ form.errors.lastname }}</div>
              </div>
              <div class="col-span-6 lg:col-span-2">
                <label for="email" class="block text-sm text-gray-700">Correo Electrónico:</label>
                <EmailsComponent
                  :theemails="form.emails"
                  @new-email="addEmailToAccount"
                  @delete-email="deleteEmailFromAccount"
                />
              </div>
              <!-- firstname, lastname & email -->

              <div class="col-span-6 lg:col-span-2">
                <label for="phone_mobil" class="block text-sm text-gray-700">Tel. Celular:</label>
                <input
                  type="text"
                  name="phone_mobil"
                  id="phone_mobil"
                  v-model="form.phone_mobil"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
                >
              </div>
              <div class="col-span-6 lg:col-span-2">
                <label for="phone_work" class="block text-sm text-gray-700">Tel. Trabajo:</label>
                <input
                  type="text"
                  name="phone_work"
                  id="phone_work"
                  v-model="form.phone_work"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
                >
              </div>
              <div class="col-span-6 lg:col-span-2">
                <label for="phone_home" class="block text-sm text-gray-700">Tel. Casa</label>
                <input
                  type="text"
                  name="phone_home"
                  id="phone_home"
                  v-model="form.phone_home"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
                >
              </div>
              <!-- móvil, home & work phone -->
            </div>
          </div>

          <div v-show="address">
            <div class="mb-4 border-b border-purple pb-1">
              <h3 class="flex text-lg font-semibold leading-6 text-purple">
                <LocationMarkerIcon class="h-6 w-6 mr-2" />
                Direcciones
              </h3>
              <p class="text-gray-600 text-sm">Modifcar la información de una dirección y añadir o eliminar direcciones asignadas al Usuario del CRM</p>
            </div>
            <AddressComponent
              :theaddress="form.addresses"
              modelo="El Usuario"
              :loading="loadingAddress"
              :errors="errorsAddress"
              @register-address="registerAddress"
              :newAddressRegistered="successAddress"
              @address-deleted="deleteAddress"
            />
          </div>

          <div v-show="sistema">
            <div class="mb-4 border-b border-purple pb-1">
              <h3 class="flex text-lg font-semibold leading-6 text-purple">
                <CogIcon class="h-6 w-6 mr-2" />
                Sistema
              </h3>
            </div>
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 lg:col-span-2">
                <label for="level" class="block text-sm text-gray-700">
                  Nivel:
                </label>
                <select
                  id="level"
                  name="level"
                  v-model="form.level"
                  class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
                >
                  <option value="0" v-if="$page.props.user.level == 0">Master</option>
                  <option value="1" v-if="$page.props.user.level < 2">Administrativo</option>
                  <option value="2">Gerente</option>
                  <option value="3">Ejecutivo</option>
                  <option value="4">Cliente</option>
                </select>
              </div>
              <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                <label for="newpassword" class="block text-sm text-gray-700">Contraseña:</label>
                <input
                  type="password"
                  name="newpassword"
                  id="newpassword"
                  v-model="form.newpassword"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
                >
              </div>
              <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                <label for="newpassword_confirmation" class="block text-sm text-gray-700">Confirmar Contraseña:</label>
                <input
                  type="password"
                  name="newpassword_confirmation"
                  id="newpassword_confirmation"
                  v-model="form.newpassword_confirmation"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
                >
              </div>
              <!-- level & passwords -->

              <div class="col-span-6 lg:col-span-2">
                <label for="branch_id" class="block text-sm text-gray-700">
                  Branch:
                </label>
                <select
                  id="branch_id"
                  name="branch_id"
                  v-model="form.branch_id"
                  class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
                >
                  <option
                    :value="branch.id"
                    v-for="branch in branches"
                    :key="branch.id"
                  >{{ branch.name }}</option>
                </select>
              </div>
              <div class="col-span-6 lg:col-span-2">
                <label for="title" class="block text-sm text-gray-700">Título:</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  v-model="form.title"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
                >
              </div>
              <div class="col-span-6 lg:col-span-2">
                <label for="department" class="block text-sm text-gray-700">Departamento:</label>
                <input
                  type="text"
                  name="department"
                  id="department"
                  v-model="form.department"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
                >
              </div>
              <!-- title & department -->

              <div class="col-span-6 lg:col-span-2">
                <label for="status" class="block text-sm text-gray-700">
                  Estatus Cuenta:
                </label>
                <select
                  id="status"
                  name="status"
                  v-model="form.status"
                  class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
                >
                  <option value="0">No Labora</option>
                  <option value="1">Activo</option>
                  <option value="2">Permiso de ausencia</option>
                </select>
              </div>
              <div class="col-span-2 lg:col-span-2">
                <div class="flex h-full items-center justify-start relative">
                  <div class="flex items-center h-5">
                    <input
                      id="receive_notifications"
                      name="receive_notifications"
                      type="checkbox"
                      v-model="form.receive_notifications"
                      class="focus:ring-purple h-4 w-4 text-purple border-gray-300 rounded"
                    >
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="receive_notifications" class="font-medium">Recibir Notificaciones:</label>
                  </div>
                </div>
              </div>
              <div class="col-span-8 lg:col-span-2">
                <label for="street-address" class="block text-sm text-gray-700">Notas:</label>
                <textarea type="text" name="street-address" id="street-address" autocomplete="street-address" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"></textarea>
              </div>
              <!-- estatus, notifications & notas -->

            </div>
          </div>
        </div>

        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6" v-if="!address">
          <jet-button
            type="button"
            :disabled="form.processing"
            @click.prevent="updateUser"
          >
            Actualizar
          </jet-button>
        </div>
        <!-- update button -->
      </div>
    </div>
    <!-- form -->
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { useForm } from '@inertiajs/inertia-vue3'
import { Inertia } from '@inertiajs/inertia'
import { CogIcon, PencilIcon, UserCircleIcon, ClipboardListIcon, LocationMarkerIcon, PlusIcon  } from '@heroicons/vue/outline'
import AddressComponent from '@/Elements/Utilities/AddressComponent'
import EmailsComponent from '@/Elements/Utilities/Emails'
import ListIcon from '@/Icons/List'
import JetButton from '@/Jetstream/Button'

export default defineComponent ({
  name: "EmployeeShow",

  props: {
    empleado: {
      type: Object,
      required: true
    }
  },

  components: {
    CogIcon,
    ListIcon,
    PlusIcon,
    JetButton,
    PencilIcon,
    UserCircleIcon,
    EmailsComponent,
    AddressComponent,
    ClipboardListIcon,
    LocationMarkerIcon,
  },

  setup(props) {
    const generales = ref(true)
    const address = ref(false)
    const sistema = ref(false)
    const successAddress = ref(false)
    const loadingAddress = ref(false)
    const errorsAddress = ref(null)
    const branches = ref([])
    const form = useForm(props.empleado)
    form.newpassword = null
    form.newpassword_confirmation = null

    function getBranches() {
      axios.get(route('branchs.index')).then( ( { data } ) => branches.value = data)
    }
    onMounted(getBranches)

    const registerAddress = (e) => {
      loadingAddress.value = true
      successAddress.value = false
      errorsAddress.value = null

      axios
        .post(route('api.register-address-to-employee', props.empleado.uuid), e)
        .then( () => {
          successAddress.value = true

          setTimeout( () => {
            Inertia.visit(
                route('empleados.show', props.empleado.uuid),
                {
                  method: 'get',
                  preserveState: false,
                  preserveScroll: false,
                }
              )
          }, 1500)
        })
        .catch( error => {
          if(error.response) {
            errorsAddress.value = error.response.data
          } else {
            //
          }
        })
    }

    const deleteAddress = (uuid) => {
      axios
        .delete(route('address-destroy', uuid))
        .then( response => {
          if(response.status == 200) {
            Inertia.visit(
              route('empleados.show', props.empleado.uuid),
              {
                method: 'get',
                preserveState: false,
                preserveScroll: false,
              }
            )
          }
        })
        .catch( error => {
          if(error.response) {
            errorsAddress.value = error.response.data
          } else {
            //
          }
        })
    }

    return {
      form,
      address,
      sistema,
      branches,
      generales,
      deleteAddress,
      errorsAddress,
      successAddress,
      loadingAddress,
      registerAddress,
    }
  },

  methods: {
    updateUser() {
      axios
        .put(route('employees.update', this.empleado.id), this.form)
        .then( response => {
          if(response.status == 200) {
            Inertia.visit(route('empleados.index'), {
              method: 'get'
            })
            return
          }
        })
        .catch( error => {})
    },
    changeSection(section) {
      this.resetSections()
      this[section] = !this[section]
    },
    resetSections() {
      this.generales = false
      this.address = false
      this.sistema = false
    },
    addEmailToAccount(e) {
      axios
        .post(route('add-email-to-crm-user', this.empleado.uuid), e)
        .then( response => {
          this.form.emails = response.data.emails
        })
    },
    deleteEmailFromAccount(e) {
      axios
        .delete(route('remove-email-from-crm-user', [this.empleado.uuid, e]))
        .then( response => {
          this.form.emails = response.data.emails
        })
    }
  },
})
</script>
