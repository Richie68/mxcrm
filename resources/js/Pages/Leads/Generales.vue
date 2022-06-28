<template>
  <dl class="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-4 text-sm">
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
    <div class="sm:col-span-1">
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
        Recibe Llamadas?
      </dt>
      <dd class="mt-1 font-semibold text-gray-900" v-text="simpleStatus(contact.call)"></dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Estatus:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900 capitalize" v-text="contact.status"></dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Descripción del Estatus:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900 capitalize" v-text="contact.status_description"></dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Fuente de Contacto:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900 capitalize" v-text="contact.source"></dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Descripción de Fuente de Contacto:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900 capitalize" v-text="contact.source_description"></dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Página Web:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900 lowercase" v-text="contact.website"></dd>
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
      <dd class="mt-1 font-semibold text-gray-900" v-text="contact.assigned?.fullname"></dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Referido por:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900" v-text="contact.referred?.fullname"></dd>
    </div>
    <div class="sm:col-span-3">
      <dt class="font-medium text-purple">
        Descripción del Contacto:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900" v-text="contact.description"></dd>
    </div>
    <div class="sm:col-span-1" v-if="contact.contact">
      <dt class="font-medium text-purple">
        Proviene del Contacto:
      </dt>
      <dd class="mt-1 text-purple font-semibold">
        <Link :href="route('clientes.contacts.show', contact.contact.uuid)">
          {{ contact.contact.fullname }}
        </Link>
      </dd>
    </div>
  </dl>
</template>

<script setup>
import useHelpers from '@/Scripts/helpers'
import { StarIcon  } from '@heroicons/vue/solid'

const { simpleStatus, getStatus } = useHelpers()
const props = defineProps({
  contact: Object
})
</script>
