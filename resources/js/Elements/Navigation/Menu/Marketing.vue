<template>
<Menu as="div" class="px-3 py-2 relative">
  <div>
    <MenuButton
      class="text-white uppercase hover:text-gray-300 px-3 py-2 rounded-md"
    >
      Marketing
    </MenuButton>
  </div>
  <transition
    enter-active-class="transition ease-out duration-100"
    enter-from-class="transform opacity-0 scale-95"
    enter-to-class="transform opacity-100 scale-100"
    leave-active-class="transition ease-in duration-75"
    leave-from-class="transform opacity-100 scale-100"
    leave-to-class="transform opacity-0 scale-95"
  >
    <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
      <MenuItem v-slot="{ active }">
        <Link
          class="hover:bg-purple hover:text-white"
          :href="route('marketing.company.index')"
          :class="[active || route().current('marketing.company.index') ? 'bg-purple text-white' : '', 'block px-4 py-1 text-sm text-gray-700']"
        >Empresas</Link>
      </MenuItem>
      <MenuItem v-slot="{ active }">
        <Link
          class="hover:bg-purple hover:text-white"
          :href="route('clientes.contacts.index')"
          :class="[active || route().current('clientes.contacts.index') ? 'bg-purple text-white' : '', 'block px-4 py-1 text-sm text-gray-700']"
        >Contactos</Link>
      </MenuItem>
    </MenuItems>
  </transition>
</Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
</script>
