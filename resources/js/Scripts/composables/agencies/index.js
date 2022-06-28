import { ref } from 'vue'

export default function useAgencies() {
    const agencies = ref([])
    const agency = ref([])
    const errors = ref(null)

    const getAgencies = async () => {
        let response = await axios.get('/api/agencies')
        agencies.value = response.data.data;
    }

    const getAgency = async (uuid) => {
        return await axios.get('/api/agencies/' + uuid)
    }

    const storeAgency = async (data) => {
        errors.value = null
        try {
          await axios.post('/api/agencies', data)
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

    const updateAgency = async (agency) => {
        errors.value = null

        try {
          await axios.put('/api/agencies/' + agency.uuid, agency)
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

    const destroyAgency = async (uuid) => {
        await axios.delete('/api/agencies/' + uuid)
    }

    return {
      errors,
      agency,
      agencies,
      getAgency,
      getAgencies,
      storeAgency,
      updateAgency,
      destroyAgency
    }
}
