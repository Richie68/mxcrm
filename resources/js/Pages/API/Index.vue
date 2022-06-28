<template>
<div>
  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 text-center font-semibold">
      API Tokens
    </div>
  </header>

  <div>
    <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
        <api-token-manager :tokens="tokens"
                            :available-permissions="availablePermissions"
                            :default-permissions="defaultPermissions" />
    </div>
  </div>
</div>
</template>

<script setup>
import ApiTokenManager from '@/Pages/API/Partials/ApiTokenManager.vue'

defineProps([
  'tokens',
  'availablePermissions',
  'defaultPermissions',
])
</script>
