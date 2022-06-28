import { ref } from 'vue'
import axios from "axios";

export default function useContacts() {
    const products = ref([])
    const product = ref([])
    const errors = ref(null)

    const getProducts = async () => {
        let response = await axios.get('/api/products')
        products.value = response.data.data;
    }

    const getProduct = async (uuid) => {
        return await axios.get('/api/products/' + uuid)
    }

    const storeProduct = async (data) => {
        errors.value = null
        try {
          await axios.post('/api/products', data)
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

    const updateProduct = async (thecontact) => {
        errors.value = null
        try {
            await axios.put('/api/products/' + thecontact.uuid, thecontact)
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

    const destroyProduct = async (uuid) => {
        await axios.delete('/api/products/' + uuid)
    }


    return {
        errors,
        product,
        products,
        getProduct,
        getProducts,
        storeProduct,
        updateProduct,
        destroyProduct
    }
}
