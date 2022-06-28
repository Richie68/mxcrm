<template>
  <dl class="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-4 text-sm mb-6">
    <div class="sm:col-span-2">
      <dt class="font-medium text-purple">
        Nombre
      </dt>
      <dd class="mt-1 font-semibold text-gray-900">
        {{ contact.name }}
      </dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Website:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900" v-text="contact.website"></dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Branch
      </dt>
       <dd
        class="mt-1 font-semibold text-gray-900"
        v-text="contact.branch ? contact.branch.name : 'No especificada'"
      ></dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Registrado por
      </dt>
      <dd class="mt-1 font-semibold text-gray-900" v-text="contact.creator?.fullname"></dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Asignado a:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900" v-text="contact.assigned ? contact.assigned.fullname : 'No asignado'"></dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Estatus:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900 capitalize" v-text="getStatus(contact.status)"></dd>
    </div>
    <div class="sm:col-span-2">
      <dt class="font-medium text-purple">
        Descripción
      </dt>
      <dd class="mt-1 font-semibold text-gray-900" v-text="contact.description"></dd>
    </div><!-- description -->
  </dl>
</template>

<script setup>
import useHelpers from '@/Scripts/helpers'

const { getStatus } = useHelpers()
defineProps({
  contact: Object
})
</script>
