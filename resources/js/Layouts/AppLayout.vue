<template>
  <div>

    <Head :title="title" />

    <jet-banner />

    <main-navigation v-if="$page.props.user" />

    <div class="min-h-screen bg-gray-100">

      <!-- Page Content -->
      <main>
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Inertia } from '@inertiajs/inertia'
import JetBanner from '@/Jetstream/Banner.vue'
import MainNavigation from '@/Elements/Navigation/Navigation'

defineProps({
  title: String,
})

const logout = () => {
  Inertia.post(route('logout'))
}
const show = ref(true)
</script>
