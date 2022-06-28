import { ref } from 'vue'
import axios from "axios";

export default function useBranchs() {
  let branchs = ref([])
  const branch = ref([])
  const errors = ref(null)

  const getBranchs = async () => {
      let response = await axios.get('/api/branchs')
      branchs.value = response.data.data;
  }

  const getBranch = async (uuid) => {
      return await axios.get('/api/branchs/' + uuid)
  }

  const storeBranch = async (data) => {
      errors.value = null
      try {
          await axios.post('/api/branchs', data)
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

  const updateBranch = async (branch) => {
      errors.value = null

      try {
          await axios.put('/api/branchs/' + branch.uuid, branch)
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

  const destroyBranch = async (uuid) => {
      try {
        await axios.delete('/api/branchs/' + uuid)
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
    branch,
    branchs,
    getBranchs,
    getBranch,
    storeBranch,
    updateBranch,
    destroyBranch
  }
}
