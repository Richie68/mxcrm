<template>
  <Disclosure as="nav" class="bg-purple relative z-40" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex items-center px-2 lg:px-0">
          <div class="flex-shrink-0">
            <Link :href="route('dashboard')">
              <img
                class="block lg:hidden h-8 w-auto"
                src="/images/svg/small_logo.svg"
                alt="CRM"
              />
              <img
                class="hidden lg:block h-8 w-auto"
                src="/images/svg/small_logo.svg"
                alt="CRM"
              />
            </Link>
          </div>
          <div class="hidden lg:block lg:ml-6">
            <div class="flex space-x-4 uppercase text-sm">
              <MenuClientes />
              <MenuVentas />
              <MenuMarketing />
              <MenuSoporte />
              <MenuCatalogos />
            </div>
          </div>
        </div>
        <div class="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
          <div class="max-w-lg w-full lg:w-10 overflow-hidden rounded">
            <SearchIcon class="h-6 w-6 text-white" aria-hidden="true" />
          </div>
        </div>
        <div class="flex lg:hidden">
          <DisclosureButton class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-700 hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition">
            <span class="sr-only">Abrir menú principal</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <!-- Mobile menu button -->
        <div class="hidden lg:block lg:ml-4">
          <div class="flex items-center">
            <button type="button" class="flex-shrink-0 bg-white p-1 rounded-full text-gray-800 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition">
              <span class="sr-only">Notificaciones</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="ml-4 relative flex-shrink-0">
              <div>
                <MenuButton
                  class="bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span class="sr-only">Abrir menú usuario</span>
                  <img class="h-8 w-8 rounded-full object-cover" :src="$page.props.user.profile_photo_url" :alt="$page.props.user.name" />
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
                      :href="route('profile.show')"
                      :class="[active || route().current('profile.show') ? 'bg-purple text-white' : '', 'block px-4 py-2 text-sm text-gray-700']"
                    >Mi cuenta</Link>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <Link
                      :href="route('api-tokens.index')"
                      :class="[active || route().current('api-tokens.index') ? 'bg-purple text-white' : '', 'block px-4 py-2 text-sm text-gray-700']"
                    >API Tokens</Link>
                  </MenuItem>
                  <MenuItem v-slot="{ active }" v-if="$page.props.user.level <= 1">
                    <Link
                      :href="route('empleados.index')"
                      :class="[active || route().current('empleados.index') ? 'bg-purple text-white' : '', 'block px-4 py-2 text-sm text-gray-700']"
                    >Usuarios CRM</Link>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <Link
                      :href="route('logout')"
                      method="post"
                      as="button"
                      class="block px-4 py-2 text-sm text-gray-700"
                    >Salir</Link>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="lg:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <Link
          :href="route('empleados.index')"
          class="hover:bg-gray-50 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          :class="[route().current('empleados.index') ? 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-50' : 'text-white']"
        >Usuarios CRM</Link>
        <Link
          :href="route('dashboard')"
          class="hover:bg-gray-50 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          :class="[route().current('dashboard') ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' : 'text-white']"
        >Dashboard</Link>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-700">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img
              class="h-8 w-8 rounded-full object-cover"
              :src="$page.props.user.profile_photo_url"
              :alt="$page.props.user.name"
            />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-white">{{ $page.props.user.name }}</div>
            <div class="text-sm font-medium text-gray-50">{{ $page.props.user.email }}</div>
          </div>
          <button type="button" class="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-white transition">
            <span class="sr-only">Notificaciones</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-3 px-2 space-y-1">
          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-white">Mi perfil</a>
          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-white">Settings</a>
          <Link
            :href="route('logout')"
            method="post"
            as="button"
            class="block px-3 py-2 rounded-md text-base font-medium text-white"
          >Salir</Link>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { SearchIcon } from '@heroicons/vue/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'
import MenuVentas from './Menu/Ventas'
import MenuSoporte from './Menu/Soporte'
import MenuClientes from './Menu/Clientes'
import MenuCatalogos from './Menu/Catalogos'
import MenuMarketing from './Menu/Marketing'
</script>
