import { ref } from 'vue'
import axios from "axios";

export default function useLeads() {
  const lead = ref(null)
  const leads = ref([])
  let errors = ref(null)

  const getLeads = async () => {
    let response = await axios.get('/api/leads')
    leads.value = response.data.data;
  }

  const getLead = async (uuid) => {
    return await axios.get('/api/leads/' + uuid)
  }

  const storeLead = async (data) => {
    errors.value = null
    try {
        await axios.post('/api/leads', data)
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

  const updateLead = async (lead) => {
    errors.value = null
    try {
      await axios.put('/api/leads/' + lead.uuid, lead)
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

  const destroyLead = async (uuid) => {
    await axios.delete('/api/leads/' + uuid)
  }

  return {
    lead,
    leads,
    errors,
    getLead,
    getLeads,
    storeLead,
    updateLead,
    destroyLead,
  }
}
