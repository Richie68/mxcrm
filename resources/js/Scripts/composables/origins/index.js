import { ref } from 'vue'
import axios from "axios";

export default function useOrigins() {
  let origins = ref([])
  const origin = ref([])
  const errors = ref(null)

  const getOrigins = async () => {
      let response = await axios.get('/api/origins')
      origins.value = response.data.data;
  }

  const getOrigin = async (uuid) => {
      return await axios.get('/api/origins/' + uuid)
  }

  const storeOrigin = async (data) => {
      errors.value = null
      try {
          await axios.post('/api/origins', data)
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

  const updateOrigin = async (origin) => {
      errors.value = null

      try {
          await axios.put('/api/origins/' + origin.uuid, origin)
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

  const destroyOrigin = async (uuid) => {
      try {
        await axios.delete('/api/origins/' + uuid)
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

  return {
    errors,
    origin,
    origins,
    getOrigins,
    getOrigin,
    storeOrigin,
    updateOrigin,
    destroyOrigin
  }
}
