<template>
  <div>
    <SuccessLegend :open="success" :modelo="modelo" />
    <!-- success legend -->
    <div
      class="flex mb-4"
      :class="[newAddress ? 'justify-end' : 'justify-between']"
    >
      <div>
        <span v-if="addresses.length == 0 && !newAddress">{{ modelo }} no tiene direcciones registradas</span>
      </div>
      <div>
        <jet-button
          type="button"
          class="w-full flex justify-center"
          @click="newAddress = !newAddress"
        >
          <span v-if="!newAddress">Registrar Dirección</span>
          <span v-if="newAddress">Cerrar</span>
        </jet-button>
      </div>
    </div>
    <!-- new address button -->
    <div v-show="newAddress">
      <Errors :errors="errors" />
      <!-- display errors -->

      <div class="grid grid-cols-6 gap-6 mb-4 items-end">
        <div class="col-span-6 lg:col-span-3">
          <label for="address" class="block text-sm text-gray-700">Dirección:</label>
          <input
            type="text"
            name="address"
            id="address"
            v-model="form.address"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
          >
        </div>
        <div class="col-span-6 lg:col-span-3">
          <label for="city" class="block text-sm text-gray-700">Ciudad:</label>
          <input
            type="text"
            name="city"
            id="city"
            v-model="form.city"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
          >
        </div>
      </div>
      <!-- address & city -->

      <div class="grid grid-cols-6 gap-6 mb-4 items-end">
        <div class="col-span-6 sm:col-span-6 lg:col-span-2">
          <label for="state" class="block text-sm text-gray-700">Estado:</label>
          <input
            type="text"
            name="state"
            id="state"
            v-model="form.state"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
          >
        </div>
        <div class="col-span-6 sm:col-span-3 lg:col-span-2">
          <label for="country" class="block text-sm text-gray-700">País</label>
          <input
            type="text"
            name="country"
            id="country"
            v-model="form.country"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
          >
        </div>
        <div class="col-span-6 sm:col-span-3 lg:col-span-2">
          <label for="zip" class="block text-sm text-gray-700">Código Postal</label>
          <input
            type="text"
            name="zip"
            id="zip"
            v-model="form.zip"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
          >
        </div>
      </div>
      <!-- state, country & zip -->

      <div class="grid grid-cols-6 gap-6 mb-4">
        <div class="col-span-6 lg:col-span-2">
          <label for="type" class="block text-sm text-gray-700">Tipo:</label>
          <select
            id="addtype"
            name="type"
            v-model="form.type"
            class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm capitalize"
          >
            <option
              :value="type.name"
              v-for="(type, i) in addressType"
              :key="i"
              v-text="type.name"
            ></option>
          </select>
        </div><!-- type -->
        <div class="col-span-6 lg:col-span-2">
          <label for="status" class="block text-sm text-gray-700">Estatus:</label>
          <select
            id="addstatus"
            name="status"
            v-model.number="form.status"
            class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm capitalize"
          >
            <option value="0">Suspendido</option>
            <option value="1">Activo</option>
          </select>
        </div><!-- status -->
        <div class="col-span-6 sm:col-span-3 lg:col-span-2">
          <label for="referencias" class="block text-sm text-gray-700">Referencias</label>
          <textarea
            name="referencias"
            id="referencias"
            v-model="form.referencias"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
          ></textarea>
        </div><!-- referencias -->
      </div>
      <!-- type, status & referencias -->

      <div class="flex justify-end">
        <jet-button
          type="button"
          class="w-1/3 flex justify-center"
          :disabled="loading"
          @click.prevent="registerAddress"
        >
          Registrar
        </jet-button>
      </div>
      <!-- register button -->
    </div>
    <div v-show="!newAddress">
      <hr class="my-4">
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tipo
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Dirección
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ciudad
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Estado
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      País
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      C.P.
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Estatus
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Referencias
                    </th>
                    <th scope="col" class="relative px-6 py-3">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="bg-white"
                    :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-50'"
                    v-for="(add, index) in addresses"
                    :key="add.uuid"
                  >
                    <td class="px-4 py-1 whitespace-nowrap text-xs font-xs capitalize">
                      {{ add.type }}
                    </td>
                    <td class="px-4 py-1 whitespace-nowrap text-xs text-gray-600">
                      {{ add.address }}
                    </td>
                    <td class="px-4 py-1 whitespace-nowrap text-xs text-gray-600">
                      {{ add.city }}
                    </td>
                    <td class="px-4 py-1 whitespace-nowrap text-xs text-gray-600">
                      {{ add.state }}
                    </td>
                    <td class="px-4 py-1 whitespace-nowrap text-xs text-gray-600">
                      {{ add.country }}
                    </td>
                    <td class="px-4 py-1 whitespace-nowrap text-xs text-gray-600">
                      {{ add.zip }}
                    </td>
                    <td class="px-4 py-1 whitespace-nowrap text-xs text-gray-600">
                      <ThumbDownIcon class="w-5 h-5 mx-auto text-red-600" v-if="add.status == 0" />
                      <ThumbUpIcon class="w-5 h-5 mx-auto text-green-600" v-if="add.status == 1" />
                    </td>
                    <td class="px-4 py-1 whitespace-wrap text-xs text-gray-600">
                      {{ add.referencias }}
                    </td>
                    <td class="px-4 py-1 whitespace-nowrap text-xsght text-sm font-medium">
                      <jet-button-red type="button" @click.prevent="deleteAddress(add.uuid)">
                        <TrashIcon class="w-4 h-4" />
                      </jet-button-red>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- addresses list -->
    </div>

    <DeleteItem
      :showModal="showDeleteModal"
      @confirmed="confirmDeletion"
      @closeModal="closeTheModal"
    />

  </div>
</template>

<script>
import { defineComponent, ref, watch } from "vue"
import useHelpers from '@/Scripts/helpers.js'
import { XIcon, TrashIcon, ThumbDownIcon, ThumbUpIcon  } from '@heroicons/vue/outline'
import DeleteItem from '@/Elements/Modals/DeleteItem'
import JetButton from '@/Jetstream/Button'
import JetButtonRed from '@/Jetstream/ButtonRed'
import SuccessLegend from '@/Elements/Utilities/SuccessLegend'
import Errors from '@/Elements/Utilities/Errors'

export default defineComponent({
  name: 'AddressComponent',

  components: {
    XIcon,
    Errors,
    TrashIcon,
    JetButton,
    DeleteItem,
    ThumbUpIcon,
    JetButtonRed,
    ThumbDownIcon,
    SuccessLegend,
  },

  props: {
    theaddress: {
      type: Array,
      default: []
    },
    modelo: {
      type: String,
      default: ''
    },
    loading: Boolean,
    errors: {
      type: Object,
      default: null
    },
    newAddressRegistered: Boolean
  },

  setup(props) {
    let addresses = ref(props.theaddress)
    const { addressType, getStatus, statusClass } = useHelpers()
    const newAddress = ref(false)
    const showAddresses = ref(false)
    const success = ref(false)
    const showDeleteModal = ref(false)

    let form = {
      address: null,
      city: null,
      state: null,
      country: null,
      zip: null,
      type: 'principal',
      status: 1,
      referencias: null
    };

    function resetForm() {
      form = {
        address: null,
        city: null,
        state: null,
        country: null,
        zip: null,
        type: 'principal',
        status: 1,
        referencias: null
      }
    }

    watch(
      () => props.newAddressRegistered,
      (val, oldVal) => {
        if(val) {
          newAddress.value = false
          success.value = true
          addresses = props.theaddress
          resetForm()
        } else {
          success.value = false
        }
      }
    )

    return {
      form,
      success,
      addresses,
      getStatus,
      newAddress,
      addressType,
      statusClass,
      showAddresses,
      showDeleteModal,
    }
  },

  methods: {
    registerAddress() {
      this.$emit('register-address', this.form);
    },
    closeTheModal() {
      this.showDeleteModal = false
    },
    deleteAddress(uuid) {
      this.idToDelete = uuid
      this.showDeleteModal = true
    },
    confirmDeletion() {
      this.$emit('addressDeleted', this.idToDelete)
    }
  }
})
</script>
