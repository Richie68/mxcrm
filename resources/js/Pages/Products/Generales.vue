<template>
  <dl class="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-4 text-sm">
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Nombre:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900">
        {{ contact.name }}
      </dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Código:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900" v-text="contact.code"></dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Categoría:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900" v-text="contact.category?.name"></dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Proveedor:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900" v-text="contact.supplier?.name"></dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Tipo:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900 capitalize">
        {{ contact.type }}
      </dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Modena:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900 uppercase">
        {{ contact.currency }}
      </dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Costo:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900 capitalize">
        $ {{ contact.cost/100 }}
      </dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Precio:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900 capitalize">
        $ {{ contact.price/100 }}
      </dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Estatus:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900 capitalize" v-text="getStatus(contact.status)"></dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Asignado a:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900" v-text="contact.assigned?.fullname"></dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Fecha registro:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900" v-text="getLongDate(contact.created_at)"></dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Registrado por:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900" v-text="contact.creator?.fullname"></dd>
    </div>
    <div class="sm:col-span-2">
      <dt class="font-medium text-purple">
        Descripción (Eng)
      </dt>
      <dd class="mt-1 font-semibold text-gray-900" v-text="contact.description"></dd>
    </div>
    <div class="sm:col-span-2">
      <dt class="font-medium text-purple">
        Descripción (Esp)
      </dt>
      <dd class="mt-1 font-semibold text-gray-900" v-text="contact.description_es"></dd>
    </div>
  </dl>
</template>

<script setup>
import useHelpers from '@/Scripts/helpers'

const { getStatus, getLongDate } = useHelpers()
defineProps({
  contact: Object
})
</script>
