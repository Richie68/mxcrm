<template>
  <dl class="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-4 text-sm">
    <div class="sm:col-span-2">
      <dt class="font-medium text-purple">
        Nombre
      </dt>
      <dd class="mt-1 font-semibold text-gray-900">
        {{ company.name }}
      </dd>
    </div>
    <div class="sm:col-span-2">
      <dt class="font-medium text-purple">
        Teléfonos
      </dt>
      <dd class="mt-1 font-semibold text-gray-900">
        <div class="flex justify-start space-x-5">
          <span v-if="company.phone_work">Trab: {{ company.phone_work }}</span>
          <span v-if="company.phone_fax">Fax: {{ company.phone_fax }}</span>
        </div>
      </dd>
    </div>
    <div class="sm:col-span-2">
      <dt class="font-medium text-purple">
        Cuenta(s) de Correo:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900">
        <div class="flex items-center" v-for="email in company.emails" :key="email.id">
          {{ email.email }}
          <StarIcon class="w-4 h-4 text-yellow-600 ml-2" v-if="email.main" />
        </div>
      </dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Industria:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900 capitalize" v-text="company.industry"></dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Tipo:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900 capitalize" v-text="company.type"></dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Página Web:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900 lowercase" v-text="company.website"></dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Cantidad Empleados:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900 capitalize" v-text="company.amount_employees"></dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Ingresos Anuales:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900 capitalize" v-text="company.anual_revenue"></dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="font-medium text-purple">
        Asignado a:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900" v-text="company.assigned?.fullname"></dd>
    </div>
    <div class="sm:col-span-4">
      <dt class="font-medium text-purple">
        Descripción del Contacto:
      </dt>
      <dd class="mt-1 font-semibold text-gray-900" v-text="company.description"></dd>
    </div>
  </dl>
</template>

<script setup>
import useHelpers from '@/Scripts/helpers'
import { StarIcon  } from '@heroicons/vue/solid'

const { simpleStatus, getStatus } = useHelpers()
const props = defineProps({
  company: Object
})
</script>
