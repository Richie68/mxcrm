<template>
  <Head title="Crear registro de Usuario de CRM" />

  <header class="bg-white shadow mb-4">
    <div class="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 text-purple text-center font-semibold">
      Registrar Nuevo usuario al CRM
    </div>
  </header>

  <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
    <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-2">
      <nav class="space-y-1">
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

        <Link
          as="button"
          class="text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm w-full"
          aria-current="page"
          :class="{'bg-gray-50' : generales }"
        >
          <UserCircleIcon class="h-6 w-6 mr-2" />
          <span class="truncate">
            Generales
          </span>
        </Link>
        <Loader :show="loading" />
      </nav>
    </aside>

    <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-10">
      <form
        action="#"
        method="POST"
        v-if="generales"
        @submit.prevent="submit"
      >
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
            <div class="mb-4 border-b border-purple pb-1">
              <h3 class="text-lg font-semibold leading-6 text-purple flex">
                <UserCircleIcon class="h-6 w-6 mr-2" />
                Generales
              </h3>
              <p class="text-gray-600 text-sm">Al registrar al usuario, se podrá asignar una dirección y/o cuentas de correo adicionales</p>
            </div>
            <!-- title section generales -->

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
                <div class="text-red-600 text-sm" v-if="form.errors.firstname">{{ form.errors.firstname[0] }}</div>
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
                <div class="text-red-600 text-sm" v-if="form.errors.lastname">{{ form.errors.lastname[0] }}</div>
              </div>
              <div class="col-span-6 lg:col-span-2">
                <label for="email" class="block text-sm text-gray-700">Correo Electrónico: <span class="text-xs">(principal)</span></label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  v-model="form.email"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
                >
                <div class="text-red-600 text-sm" v-if="form.errors.email">{{ form.errors.email[0] }}</div>
              </div>
              <!-- firstname, lastname & email -->

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
              <!-- status, title & department -->

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
                <label for="password" class="block text-sm text-gray-700">Contraseña:</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  v-model="form.password"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
                >
                <div class="text-red-600 text-sm" v-if="form.errors.password">{{ form.errors.password[0] }}</div>
              </div>
              <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                <label for="password_confirmation" class="block text-sm text-gray-700">Confirmar Contraseña:</label>
                <input
                  type="password"
                  name="password_confirmation"
                  id="password_confirmation"
                  v-model="form.password_confirmation"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
                >
              </div>
              <!-- level & passwords -->

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
              <!-- notifications & notas -->

            </div>
          </div>

          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <jet-button :disabled="loading">
              Registrar
            </jet-button>
          </div>
          <!-- submit form button -->
        </div>
      </form>
    </div>

    <teleport to="#modals">
      <Notification
        :modal-open="modalOpen"
        @dismissModal="modalOpen = false"
        :attributes="modalDetails"
      />
    </teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import JetButton from '@/Jetstream/Button'
import { Inertia } from '@inertiajs/inertia'
import Loader from '@/Elements/Utilities/Loader'
import Notification from '@/Elements/Modals/Notification'
import useEmployees from '@/Scripts/composables/employees'
import { UserCircleIcon, ClipboardListIcon  } from '@heroicons/vue/outline'

const generales = ref(true)
const form = ref({
  firstname: null,
  lastname: null,
  email: null,
  title: null,
  department: null,
  phone_mobil: null,
  phone_work: null,
  phone_home: null,
  address: null,
  city: null,
  state: null,
  country: null,
  zip: null,
  status: 1,
  level: 3,
  password: null,
  password_confirmation: null,
  errors: {},
})
const loading = ref(false)
const { storeEmployee, errors } = useEmployees()
const modalOpen = ref(false)
const modalDetails = ref({
  title: null,
  message: null,
  type: null,
})
const submit = async () => {
  loading.value = true
  await storeEmployee({...form.value});
  if(!errors.value) {
    modalDetails.value.title = 'Usuario registrado'
    modalDetails.value.message = 'Se ha registrado correctamente al Usuario del CRM.'
    modalDetails.value.type = 'success'
    modalOpen.value = true
    setTimeout( () => {
      modalOpen.value = false
      Inertia.visit(route('empleados.index'), {
        method: 'get',
        preserveScroll: true
      })
      loading.value = false
    }, 2000)
  } else {
    form.value.errors = errors
    loading.value = false
  }
}
</script>
