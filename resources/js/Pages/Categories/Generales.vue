<template>
  <dl class="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-4 text-sm">
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Categoría
      </dt>
      <dd class="mt-1 font-semibold text-gray-900">
        {{ contact.name }}
      </dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Productos asignados:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900">
        {{ contact.products.length }}
      </dd>
    </div>
    <div class="sm:col-span-2">
      <dt class="font-medium text-purple">
        Descripción
      </dt>
      <dd class="mt-1 font-semibold text-gray-900">
        {{ contact.description }}
      </dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Es Categoría Padre?
      </dt>
      <dd class="mt-1 font-semibold text-gray-900">
        <CheckCircleIcon class="w-6 h-6 text-green-500" />
      </dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Asignado a:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900" v-text="contact.assigned?.fullname"></dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Registrado por:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900" v-text="contact.creator?.fullname"></dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Estatus:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900 capitalize">
        {{ getStatus(contact.status) }}
      </dd>
    </div>
  </dl>
</template>

<script setup>
import useHelpers from '@/Scripts/helpers'
import { CheckCircleIcon  } from '@heroicons/vue/outline'

const { getStatus } = useHelpers()
const props = defineProps({
  contact: Object
})
</script>
