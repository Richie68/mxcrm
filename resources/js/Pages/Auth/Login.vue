<template>

  <Head title="Acceso Intranet" />

  <div class="absolute inset-0 z-0">
    <img
      class="h-full w-full object-cover"
      :src="`/images/bg/${bgImage}`"
      alt="CRM"
      v-if="bgImage"
    >
    <div class="absolute inset-0 bg-gray-500" style="mix-blend-mode: multiply;"></div>
  </div>

  <jet-authentication-card>
    <template #logo>
      <Link :href="route('login')">
        <img
          class="h-20 w-auto"
          src="/images/svg/small_logo.svg"
          alt="CRM"
        />
      </Link>
    </template>

    <jet-validation-errors class="mb-4" />

    <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
      {{ status }}
    </div>

    <form @submit.prevent="submit">
      <h1 class="text-center">Acceso | CRM</h1>
      <div class="mt-4">
        <jet-label for="email" value="Correo Electrónico:" />
        <jet-input id="email" type="email" class="mt-1 block w-full" v-model="form.email" required autofocus />
      </div>
      <div class="mt-4">
        <jet-label for="password" value="Contraseña:" />
        <jet-input id="password" type="password" class="mt-1 block w-full" v-model="form.password" required
          autocomplete="current-password" />
      </div>
      <div class="block mt-4">
        <label class="flex items-center">
          <jet-checkbox name="remember" v-model:checked="form.remember" />
          <span class="ml-2 text-sm text-gray-600">Recordarme</span>
        </label>
      </div>
      <div class="flex items-center justify-end mt-4">
        <Link v-if="canResetPassword" :href="route('password.request')"
          class="underline text-sm text-gray-600 hover:text-gray-900">
        ¿Olvidó su contraseña?
        </Link>

        <jet-button class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
          Ingresar
        </jet-button>
      </div>
    </form>
  </jet-authentication-card>
</template>

<script setup>
import { useForm } from '@inertiajs/inertia-vue3'
import { onMounted, ref } from 'vue'
import JetInput from '@/Jetstream/Input'
import JetLabel from '@/Jetstream/Label'
import JetButton from '@/Jetstream/Button'
import JetCheckbox from '@/Jetstream/Checkbox'
import JetValidationErrors from '@/Jetstream/ValidationErrors'
import JetAuthenticationCard from '@/Jetstream/AuthenticationCard.vue'

defineProps({
  canResetPassword: Boolean,
  status: String
})
let bgImage = ref(null)
let form = useForm({
  email: '',
  password: '',
  remember: false
})
let submit = () => {
  form
    .transform(data => ({
      ...data,
      remember: form.remember ? 'on' : ''
    }))
    .post(route('login'), {
      onFinish: () => form.reset('password'),
    })
}
onMounted( () => {
  axios
    .post(route('bg-current-image'))
    .then( ( { data } ) => {
      bgImage.value = data
    })
})

</script>
