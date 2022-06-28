<template>
  <dl class="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-4 text-sm mb-6">
    <div class="sm:col-span-2">
      <dt class="font-medium text-purple">
        Nombre
      </dt>
      <dd class="mt-1 font-semibold text-gray-900">
        {{ contact.salutation }} {{ contact.fullname }}
      </dd>
    </div>
    <div class="sm:col-span-2">
      <dt class="font-medium text-purple">
        Teléfonos
      </dt>
      <dd class="mt-1 font-semibold text-gray-900">
        <div class="flex justify-start space-x-5">
          <span v-if="contact.phone_mobil">Cel: {{ contact.phone_mobil }}</span>
          <span v-if="contact.phone_work">Trab: {{ contact.phone_work }}</span>
          <span v-if="contact.phone_fax">Fax: {{ contact.phone_fax }}</span>
        </div>
      </dd>
    </div>
    <div class="sm:col-span-2">
      <dt class="font-medium text-purple">
        Cuenta(s) de Correo:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900">
        <div class="flex items-center" v-for="email in contact.emails" :key="email.id">
          {{ email.email }}
          <StarIcon class="w-4 h-4 text-yellow-600 ml-2" v-if="email.main" />
        </div>
      </dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Asistente:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900" v-text="contact.assistant"></dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Tel. Asistente:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900" v-text="contact.assistant_phone"></dd>
    </div>
    <div class="sm:col-span-2">
      <dt class="font-medium text-purple">
        Empresa:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900" v-text="contact.company"></dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Título:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900" v-text="contact.title"></dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Departamento:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900" v-text="contact.department"></dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Estatus:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900 capitalize" v-text="contact.status"></dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Toma de Contacto:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900" v-text="contact.source"></dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Asignado a:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900" v-text="contact.assigned ? contact.assigned.fullname : 'No asignado'"></dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Recibe Llamadas?
      </dt>
      <dd class="mt-1 font-semibold text-gray-900" v-text="simpleStatus(contact.call)"></dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Orígen Contacto
      </dt>
      <dd
        class="mt-1 font-semibold text-gray-900"
        v-text="contact.origin ? contact.origin.name : 'No registrado'"
      ></dd>
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
    <div class="sm:col-span-2">
      <dt class="font-medium text-purple">
        Descripción
      </dt>
      <dd class="mt-1 font-semibold text-gray-900" v-text="contact.description"></dd>
    </div>
  </dl>
</template>

<script setup>
import useHelpers from '@/Scripts/helpers'
import { StarIcon  } from '@heroicons/vue/solid'

const { simpleStatus } = useHelpers()
defineProps({
  contact: Object
})
</script>
