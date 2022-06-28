<template>

  <Head title="Registro de Usuarios" />

  <div class="absolute inset-0 z-0">
    <img class="h-full w-full object-cover" src="/images/bg/bg-beach.jpg" alt="CRM">
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

    <form @submit.prevent="submit">
      <div>
        <jet-label for="firstname" value="First Name" />
        <jet-input
          id="firstname"
          type="text"
          class="mt-1 block w-full"
          v-model="form.firstname"
          required
          autofocus
          autocomplete="firstname"
        />
      </div>

      <div class="mt-4">
        <jet-label for="lastname" value="Last Name" />
        <jet-input
          id="lastname"
          type="text"
          class="mt-1 block w-full"
          v-model="form.lastname"
          required
          autocomplete="lastname"
        />
      </div>
      <div class="mt-4">
        <jet-label for="username" value="Username" />
        <jet-input
          id="username"
          type="text"
          class="mt-1 block w-full"
          v-model="form.username"
          required
          autocomplete="username"
        />
      </div>

      <div class="mt-4">
        <jet-label for="email" value="Email" />
        <jet-input
          id="email"
          type="email"
          class="mt-1 block w-full"
          v-model="form.email"
          required
        />
      </div>

      <div class="mt-4">
        <jet-label for="password" value="Password" />
        <jet-input
          id="password"
          type="password"
          class="mt-1 block w-full"
          v-model="form.password"
          required
          autocomplete="new-password"
        />
      </div>

      <div class="mt-4">
        <jet-label for="password_confirmation" value="Confirm Password" />
        <jet-input
          id="password_confirmation"
          type="password"
          class="mt-1 block w-full"
          v-model="form.password_confirmation"
          required
          autocomplete="new-password"
        />
      </div>

      <div class="flex items-center justify-end mt-4">
        <Link
          :href="route('login')"
          class="underline text-sm text-gray-600 hover:text-gray-900"
        >Already registered?</Link>

        <jet-button
          class="ml-4"
          :class="{ 'opacity-25': form.processing }"
          :disabled="form.processing"
        >Register</jet-button>
      </div>
    </form>
  </jet-authentication-card>
</template>

<script>
  import {
    defineComponent
  } from 'vue'
  import JetAuthenticationCard from '@/Jetstream/AuthenticationCard.vue'
  import JetButton from '@/Jetstream/Button.vue'
  import JetInput from '@/Jetstream/Input.vue'
  import JetCheckbox from '@/Jetstream/Checkbox.vue'
  import JetLabel from '@/Jetstream/Label.vue'
  import JetValidationErrors from '@/Jetstream/ValidationErrors.vue'

  export default defineComponent({
    components: {
      JetButton,
      JetInput,
      JetCheckbox,
      JetLabel,
      JetValidationErrors,
      JetAuthenticationCard,
    },

    data() {
      return {
        form: this.$inertia.form({
          firstname: '',
          lastname: '',
          username: '',
          email: '',
          password: '',
          password_confirmation: '',
        })
      }
    },

    methods: {
      submit() {
        this.form.post(this.route('register'), {
          onFinish: () => this.form.reset('password', 'password_confirmation'),
        })
      }
    }
  })

</script>
