import { ref } from 'vue'
import axios from "axios";

export default function useCategories() {
    const categories = ref([])
    const category = ref([])
    const errors = ref(null)

    const getCategories = async () => {
        let response = await axios.get('/api/categories')
        categories.value = response.data.data;
    }

    const getCategory = async (uuid) => {
        return await axios.get('/api/categories/' + uuid)
    }

    const storeCategory = async (data) => {
        errors.value = null
        try {
          await axios.post('/api/categories', data)
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

    const updateCategory = async (category) => {
        errors.value = null

        try {
          await axios.put('/api/categories/' + category.uuid, category)
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

    const destroyCategory = async (uuid) => {
        await axios.delete('/api/categories/' + uuid)
    }

    return {
      errors,
      category,
      categories,
      getCategory,
      getCategories,
      storeCategory,
      updateCategory,
      destroyCategory
    }
}
