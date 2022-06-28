import { ref } from 'vue'
import axios from "axios";

export default function useRetailers() {
    const retailers = ref([])
    const retailer = ref([])
    const errors = ref(null)

    const getRetailers = async () => {
        let response = await axios.get('/api/retailers')
        retailers.value = response.data.data;
    }

    const getRetailer = async (uuid) => {
        return await axios.get('/api/retailers/' + uuid)
    }

    const storeRetailer = async (data) => {
        errors.value = null
        try {
          await axios.post('/api/retailers', data)
        } catch (e) {
          if (e.response.status === 422) {
            errors.value = e.response.data.errors
          }
          if (e.response.status === 404) {
            errors.value = []
            errors.value = [ { errors: e.response.data.message } ]
          }
        }
    }

    const updateRetailer = async (retailer) => {
        errors.value = null

        try {
          await axios.put('/api/retailers/' + retailer.uuid, retailer)
        } catch (e) {
          if (e.response.status === 422) {
            errors.value = e.response.data.errors
          }
          if (e.response.status === 404) {
            errors.value = []
            errors.value = [ { errors: e.response.data.message } ]
          }
        }
    }

    const destroyRetailer = async (uuid) => {
        await axios.delete('/api/retailers/' + uuid)
    }

    return {
      errors,
      retailer,
      retailers,
      getRetailer,
      getRetailers,
      storeRetailer,
      updateRetailer,
      destroyRetailer
    }
}
