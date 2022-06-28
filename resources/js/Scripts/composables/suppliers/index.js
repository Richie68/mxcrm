import { ref } from 'vue'
import axios from "axios";

export default function useSuppliers() {
    const suppliers = ref([])
    const supplier = ref([])
    const errors = ref(null)

    const getSuppliers = async () => {
        let response = await axios.get('/api/suppliers')
        suppliers.value = response.data.data;
    }

    const getSupplier = async (uuid) => {
        return await axios.get('/api/suppliers/' + uuid)
    }

    const storeSupplier = async (data) => {
        errors.value = null
        try {
          await axios.post('/api/suppliers', data)
        } catch (e) {
          if (e.response.status === 422) {
            errors.value = e.response.data.errors
          } else {
            errors.value = []
            errors.value = [ { errors: e.response.data.message } ]
          }
        }
    }

    const updateSupplier = async (thesupplier) => {
        errors.value = null
        try {
            await axios.put('/api/suppliers/' + thesupplier.uuid, thesupplier)
        } catch (e) {
          if (e.response.status === 422) {
            errors.value = e.response.data.errors
          } else {
            errors.value = []
            errors.value = [ { errors: e.response.data.message } ]
          }
        }
    }

    const destroySupplier = async (uuid) => {
        await axios.delete('/api/suppliers/' + uuid)
    }


    return {
        errors,
        supplier,
        suppliers,
        getSupplier,
        getSuppliers,
        storeSupplier,
        updateSupplier,
        destroySupplier
    }
}
