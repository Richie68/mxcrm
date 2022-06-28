<template>
  <div>
    <div class="grid grid-cols-6 items-center">
      <div class="col-span-6" v-if="addEmail">
        <div class="flex justify-around">
          <input
            type="email"
            name="email"
            v-model="email"
            class="border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
          >
          <!-- email input -->
          <div class="flex flex-col">
            <input
              id="main"
              name="main"
              type="checkbox"
              v-model="main"
              v-if="addEmail"
              class="focus:ring-purple h-4 text-purple border-gray-300 rounded w-2/3 mr-auto"
            >
            <label for="main" class="ml-1 text-xs" v-if="addEmail">Principal</label>
          </div>
          <!-- main checkbox -->
          <div>
            <button
              class="items-center px-2 py-1 mr-1 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-400 disabled:opacity-25 transition"
              type="button"
              @click.prevent="registerEmail()"
              v-if="addEmail"
            >
              <CheckIcon class="w-3 h-3" />
            </button>
            <button
              class="items-center px-2 py-1 bg-red-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-400 disabled:opacity-25 transition"
              type="button"
              @click.prevent="addEmail = !addEmail"
              v-if="addEmail"
            >
              <XIcon class="w-3 h-3" />
            </button>
          </div>
          <!-- actions buttons -->
        </div>
      </div>
      <!-- add email input & buttons -->
      <div class="col-span-5" v-if="emails.length > 0 && !addEmail">
        <ul class="w-full">
          <li
            class="grid grid-cols-6 items-start"
            v-for="(email, i) in emails"
            :key="i"
          >
            <div class="col-span-4 text-sm">{{ email.email }}</div>
            <div class="col-span-1">
              <StarIcon class="ml-2 w-4 h-4 text-yellow-500" v-if="email.main" />
            </div>
            <div class="col-span-1">
              <TrashIcon class="ml-2 w-4 h-4 text-red-500" @click="deleteEmail(email.uuid)" />
            </div>
          </li>
        </ul>
      </div>
      <!-- emails list -->
      <button
        class="inline-flex ml-6 items-center px-2 py-1 bg-purple border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-dark active:bg-purple-dark focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple-light disabled:opacity-25 transition"
        type="button"
        :class="[addEmail ? 'bg-purple-light' : 'bg-purple']"
        @click.prevent="addEmail = !addEmail"
        v-if="!addEmail"
      >
        <PlusIcon class="w-4 h-4 mr-1" />
      </button>
      <!-- emails list -->
    </div>

  </div>
</template>

<script>
import { defineComponent, ref, onMounted, watch } from 'vue'
import { PlusIcon, XIcon, CheckIcon, TrashIcon  } from '@heroicons/vue/outline'
import { StarIcon  } from '@heroicons/vue/solid'

export default defineComponent({
  name: 'EmailsComponent',

  props: {
    theemails: {
      type: Array,
      default: []
    }
  },

  components: {
    XIcon,
    PlusIcon,
    StarIcon,
    TrashIcon,
    CheckIcon,
  },

  setup(props) {
    const main = ref(false)
    const email = ref(null)
    const addEmail = ref(false)
    const emails = ref(props.theemails)

    watch(
      () => props.theemails,
      (val, oldVal) => {
        emails.value = val
        addEmail.value = false
      }
    )

    onMounted(() => {
      addEmail.value = emails.value.length == 0 ? true : false
    })

    return {
      main,
      email,
      emails,
      addEmail,
    }
  },

  methods: {
    registerEmail() {
      if(this.email && this.email != '') {
        this.$emit('new-email', {
          email: this.email,
          main: this.main
        })
        this.email = null
        this.main = false
      }
    },
    deleteEmail(uuid) {
      if(uuid) {
        this.$emit('delete-email', uuid)
      }
    }
  }
})
</script>
