<template>
<div>
  <table class="min-w-full divide-y divide-gray-200" v-if="tasks.length > 0">
    <thead class="bg-gray-50 font-medium text-gray-500 uppercase tracking-wider">
      <tr>
        <th scope="col" class="px-6 py-3 text-left text-xs">
          Título
        </th>
        <th scope="col" class="px-6 py-3 text-left text-xs">
          Inicio
        </th>
        <th scope="col" class="px-6 py-3 text-left text-xs">
          Prioridad
        </th>
        <th scope="col" class="px-6 py-3 text-left text-xs">
          Estado
        </th>
        <th scope="col" class="px-6 py-3 text-left text-xs">
          Asignado a
        </th>
        <th scope="col" class="px-6 py-3 text-left text-xs">
          Notificación
        </th>
        <th scope="col" class="px-6 py-3 text-left text-xs">
          Registro
        </th>
        <th scope="col" class="px-6 py-3 text-right text-xs">
          Acc.
        </th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <tr
        class="text-xs text-gray-700 whitespace-nowrap"
        v-for="task in tasks"
        :key="task.id"
      >
        <td class="px-6 py-4 whitespace-nowrap">
          {{ task.title }}
        </td>
        <td class="px-6 py-4">
          {{ task.start_date }} a las {{ task.start_time }}
        </td>
        <td class="px-6 py-4">
          {{ task.priority }}
        </td>
        <td class="px-6 py-4">
          {{ stateNames(task.state) }}
        </td>
        <td class="px-6 py-4">
          {{ task.assigned?.fullname }}
        </td>
        <td class="px-6 py-4">
          {{ task.minutes }} minutos
        </td>
        <td class="px-6 py-4">
          {{ getLongDate(task.created_at) }}
        </td>
        <td class="px-6 py-4 text-right">
          <TrashIcon class="w-4 h-4 text-red-600" @click="emit('remove-task', task.uuid)" />
        </td>
      </tr>
    </tbody>
  </table>
  <div class="text-center font-semibold text-base" v-else>
    No hay Tareas registradas
  </div>
</div>
</template>

<script setup>
import useHelpers from '@/Scripts/helpers.js'
import { TrashIcon } from '@heroicons/vue/outline'

const { getLongDate, stateNames } = useHelpers()
defineProps({
  tasks: Array
})
let emit = defineEmits(['remove-task'])
</script>
