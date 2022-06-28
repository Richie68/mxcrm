<template>
  <jet-form-section @submitted="updateProfileInformation">
    <template #title>
      Información Personal
    </template>

    <template #description>
      Aquí puedes colocar una imágen como tu avatar y modificar los datos personales de tu cuenta.
    </template>

    <template #form>
      <!-- Profile Photo -->
      <div class="col-span-6 sm:col-span-4" v-if="$page.props.jetstream.managesProfilePhotos">
        <!-- Profile Photo File Input -->
        <input type="file" class="hidden" ref="photo" @change="updatePhotoPreview">

        <jet-label for="photo" value="Photo" />

        <!-- Current Profile Photo -->
        <div class="mt-2" v-show="! photoPreview">
          <img :src="user.profile_photo_url" :alt="user.firstname" class="rounded-full h-20 w-20 object-cover">
        </div>

        <!-- New Profile Photo Preview -->
        <div class="mt-2" v-show="photoPreview">
          <span
            class="block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center"
            :style="'background-image: url(\'' + photoPreview + '\');'"
          ></span>
        </div>

        <jet-secondary-button class="mt-2 mr-2" type="button" @click.prevent="selectNewPhoto">
          Selecciona una imágen
        </jet-secondary-button>

        <jet-secondary-button type="button" class="mt-2" @click.prevent="deletePhoto" v-if="user.profile_photo_path">
          Eliminar imágen
        </jet-secondary-button>

        <jet-input-error :message="form.errors.photo" class="mt-2" />
      </div>

      <!-- FirstName -->
      <div class="col-span-6 sm:col-span-4">
        <jet-label for="firstname" value="First Name" />
        <jet-input id="firstname" type="text" class="mt-1 block w-full" v-model="form.firstname" autocomplete="firstname" />
        <jet-input-error :message="form.errors.firstname" class="mt-2" />
      </div>

      <!-- LastName -->
      <div class="col-span-6 sm:col-span-4">
        <jet-label for="lastname" value="Last Name" />
        <jet-input id="lastname" type="text" class="mt-1 block w-full" v-model="form.lastname" autocomplete="lastname" />
        <jet-input-error :message="form.errors.lastname" class="mt-2" />
      </div>

      <!-- Username -->
      <div class="col-span-6 sm:col-span-4">
        <jet-label for="username" value="Username" />
        <jet-input id="username" type="text" class="mt-1 block w-full" v-model="form.username" autocomplete="username" />
        <jet-input-error :message="form.errors.username" class="mt-2" />
      </div>

      <!-- Email -->
      <div class="col-span-6 sm:col-span-4">
        <jet-label for="email" value="Email" />
        <jet-input id="email" type="email" class="mt-1 block w-full" v-model="form.email" />
        <jet-input-error :message="form.errors.email" class="mt-2" />
      </div>
    </template>

    <template #actions>
      <jet-action-message :on="form.recentlySuccessful" class="mr-3">
        Actualizado.
      </jet-action-message>

      <jet-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
        Guardar
      </jet-button>
    </template>
  </jet-form-section>
</template>

<script>
  import { defineComponent } from 'vue'
  import JetLabel from '@/Jetstream/Label.vue'
  import JetInput from '@/Jetstream/Input.vue'
  import JetButton from '@/Jetstream/Button.vue'
  import JetInputError from '@/Jetstream/InputError.vue'
  import JetFormSection from '@/Jetstream/FormSection.vue'
  import JetActionMessage from '@/Jetstream/ActionMessage.vue'
  import JetSecondaryButton from '@/Jetstream/SecondaryButton.vue'

  export default defineComponent({
    components: {
      JetInput,
      JetLabel,
      JetButton,
      JetInputError,
      JetFormSection,
      JetActionMessage,
      JetSecondaryButton,
    },

    props: ['user'],

    data() {
      return {
        form: this.$inertia.form({
          _method: 'PUT',
          firstname: this.user.firstname,
          lastname: this.user.lastname,
          username: this.user.username,
          email: this.user.email,
          photo: null,
        }),

        photoPreview: null,
      }
    },

    methods: {
      updateProfileInformation() {
        if (this.$refs.photo) {
          this.form.photo = this.$refs.photo.files[0]
        }

        this.form.post(route('user-profile-information.update'), {
          errorBag: 'updateProfileInformation',
          preserveScroll: true,
          onSuccess: () => (this.clearPhotoFileInput()),
        });
      },

      selectNewPhoto() {
        this.$refs.photo.click();
      },

      updatePhotoPreview() {
        const photo = this.$refs.photo.files[0];

        if (!photo) return;

        const reader = new FileReader();

        reader.onload = (e) => {
          this.photoPreview = e.target.result;
        };

        reader.readAsDataURL(photo);
      },

      deletePhoto() {
        this.$inertia.delete(route('current-user-photo.destroy'), {
          preserveScroll: true,
          onSuccess: () => {
            this.photoPreview = null;
            this.clearPhotoFileInput();
          },
        });
      },

      clearPhotoFileInput() {
        if (this.$refs.photo?.value) {
          this.$refs.photo.value = null;
        }
      },
    },
  })

</script>
