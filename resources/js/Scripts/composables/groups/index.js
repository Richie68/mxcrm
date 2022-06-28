import { ref } from 'vue'
import axios from "axios";

export default function useGroups() {
  const group = ref(null)
  const groups = ref([])
  let errors = ref(null)

  const getGroups = async () => {
    let response = await axios.get('/api/groups')
    groups.value = response.data.data;
  }

  const getGroup = async (uuid) => {
    return await axios.get('/api/groups/' + uuid)
  }

  const storeGroup = async (data) => {
    errors.value = null
    try {
        await axios.post('/api/groups', data)
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

  const updateGroup = async (group) => {
    errors.value = null
    try {
      await axios.put('/api/groups/' + group.uuid, group)
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

  const destroyGroup = async (uuid) => {
    await axios.delete('/api/groups/' + uuid)
  }

  return {
    group,
    groups,
    errors,
    getGroup,
    getGroups,
    storeGroup,
    updateGroup,
    destroyGroup,
  }
}
