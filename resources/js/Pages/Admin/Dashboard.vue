<template>
  <Head title="Dashboard | México Planners | CRM" />

  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 text-center font-semibold">
      Bienvenido(a) {{ $page.props.user?.firstname }}!
    </div>
  </header>
  <div class="relative bg-gray-900">
    <div class="h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full">
      <div class="h-full w-full xl:grid xl:grid-cols-2">
        <div class="h-full xl:relative xl:col-start-2">
          <img
            class="h-full w-full object-cover opacity-40 xl:absolute xl:inset-0"
            :src="`/images/bg/${bgImage}`"
            alt="CRM México Planners"
            v-if="bgImage"
          >
          <div aria-hidden="true" class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"></div>
        </div>
      </div>
    </div>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
      <div class="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
        <h2 class="text-sm font-semibold text-purple tracking-wide uppercase">
          CRM Dashboard
        </h2>
        <p class="mt-3 text-3xl font-extrabold text-white">Módulo(s) en producción:</p>
        <p class="mt-5 text-3xl text-gray-300">Módulo de Grupos</p>
        <hr class="border-white border-opacity-40 mt-4">
        <p class="mt-4 text-lg font-extrabold text-white">Ya se tiene el módulo para mostrar el listado de grupos y el formulario para poder crearlo, esto con las diferentes relaciones que se tienen.</p>
        <p class="mt-4 text-lg font-extrabold text-white">Se tiene pendiente el poder actualizar el registro y poder asignarle otros hoteles. Esto con base en la relacion "belongsToMany" que ya se tiene registrada y ya se tiene la tabla lista.</p>
        <p class="mt-5 text-lg text-gray-300">Pendiente de saber como obtener los estatus que se necesitan para registrar un grupo.</p>
        <p class="mt-5 text-lg text-gray-300">Terminado el módulo de comisionistas</p>
        <div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
          <p>
            <span class="block text-2xl font-bold text-white">Contactos</span>
            <span class="mt-1 block text-base text-gray-300"><span class="font-medium text-white">Módulos</span> Listado, registro y edición.</span>
          </p>
          <p>
            <span class="block text-2xl font-bold text-white">Agencias</span>
            <span class="mt-1 block text-base text-gray-300"><span class="font-medium text-white">Módulos</span> Listado, registro y edición.</span>
          </p>
          <p>
            <span class="block text-2xl font-bold text-white">Empresas</span>
            <span class="mt-1 block text-base text-gray-300"><span class="font-medium text-white">Módulos</span> Listado, registro y edición.</span>
          </p>
          <p>
            <span class="block text-2xl font-bold text-white">Tareas</span>
            <span class="mt-1 block text-base text-gray-300"><span class="font-medium text-white">Módulos</span> dentro de los contactos y contactos potenciales</span>
          </p>
          <p>
            <span class="block text-2xl font-bold text-white">Hoteles</span>
            <span class="mt-1 block text-base text-gray-300"><span class="font-medium text-white">Módulos</span> Listado, registro y edición.</span>
          </p>
          <p>
            <span class="block text-2xl font-bold text-white">Comisionistas</span>
            <span class="mt-1 block text-base text-gray-300"><span class="font-medium text-white">Módulos</span> Listado, registro y edición.</span>
          </p>
          <p>
            <span class="block text-2xl font-bold text-white">Usuarios CRM</span>
            <span class="mt-1 block text-base text-gray-300"><span class="font-medium text-white">Módulos</span> Listado, registro y edición.</span>
          </p>
          <p>
            <span class="block text-2xl font-bold text-white">Branches</span>
            <span class="mt-1 block text-base text-gray-300"><span class="font-medium text-white">Módulos</span> Listado, registro y edición.</span>
          </p>
          <p>
            <span class="block text-2xl font-bold text-white">Productos y Categorías</span>
            <span class="mt-1 block text-base text-gray-300"><span class="font-medium text-white">Módulos</span> Listado, registro y edición.</span>
          </p>
          <p>
            <span class="block text-2xl font-bold text-white">Proveedores</span>
            <span class="mt-1 block text-base text-gray-300"><span class="font-medium text-white">Módulos</span> Listado, registro y edición.</span>
          </p>
          <p>
            <span class="block text-2xl font-bold text-white">Orígenes</span>
            <span class="mt-1 block text-base text-gray-300"><span class="font-medium text-white">Módulos</span> Listado, registro y edición.</span>
          </p>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { onMounted, ref } from 'vue'

let bgImage = ref(null)
onMounted( () => {
  axios
    .post(route('bg-current-image'))
    .then( ( { data } ) => {
      bgImage.value = data
    })
})
</script>
