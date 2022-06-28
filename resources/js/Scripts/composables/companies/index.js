import { ref } from 'vue'
import axios from "axios";

export default function useCompanies() {
    const companies = ref([])
    const company = ref([])
    const errors = ref(null)

    const getCompanies = async () => {
        let response = await axios.get('/api/companies')
        companies.value = response.data.data;
    }

    const getCompany = async (uuid) => {
        return await axios.get('/api/companies/' + uuid)
    }

    const storeCompany = async (data) => {
        errors.value = null
        try {
          await axios.post('/api/companies', data)
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

    const updateCompany = async (company) => {
        errors.value = null

        try {
          await axios.put('/api/companies/' + company.uuid, company)
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

    const destroyCompany = async (uuid) => {
        await axios.delete('/api/companies/' + uuid)
    }

    return {
      errors,
      companies,
      getCompanies,
      getCompany,
      storeCompany,
      updateCompany,
      destroyCompany
    }
}
