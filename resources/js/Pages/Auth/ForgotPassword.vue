<template>

  <Head title="Forgot Password" />

  <div class="absolute inset-0 z-0">
    <img class="h-full w-full object-cover" src="/images/bg/admin-dashboard.jpg" alt="Login BBC Store">
    <div class="absolute inset-0 bg-gray-600" style="mix-blend-mode: multiply;"></div>
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

    <div class="mb-4 text-sm text-gray-600">
      ¿Olvidó su contraseña? No hay problema. Solo proporcione el correo electrónico de su cuenta y le enviaremos un link para poder modificar su contraseña. Su contraseña anterior será cambiada por la nueva que registre.
    </div>

    <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
      {{ status }}
    </div>

    <jet-validation-errors class="mb-4" />

    <form @submit.prevent="submit">
      <div>
        <jet-label for="email" value="Email" />
        <jet-input id="email" type="email" class="mt-1 block w-full" v-model="form.email" required autofocus />
      </div>

      <div class="flex items-center justify-end mt-4">
        <jet-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
          Enviar link por email
        </jet-button>
      </div>
    </form>
  </jet-authentication-card>
</template>

<script>
  import {
    defineComponent
  } from 'vue'
  import JetInput from '@/Jetstream/Input'
  import JetLabel from '@/Jetstream/Label'
  import JetButton from '@/Jetstream/Button'
  import JetValidationErrors from '@/Jetstream/ValidationErrors'
  import JetAuthenticationCard from '@/Jetstream/AuthenticationCard'

  export default defineComponent({
    components: {
      JetInput,
      JetLabel,
      JetButton,
      JetValidationErrors,
      JetAuthenticationCard,
    },

    props: {
      status: String
    },

    data() {
      return {
        form: this.$inertia.form({
          email: ''
        })
      }
    },

    methods: {
      submit() {
        this.form.post(this.route('password.email'))
      }
    }
  })

</script>
