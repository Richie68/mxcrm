import { ref } from 'vue'
import axios from "axios";

export default function useHotels() {
    const hotels = ref([])
    const hotel = ref([])
    const errors = ref(null)

    const getHotels = async () => {
        let response = await axios.get('/api/hotels')
        hotels.value = response.data.data;
    }

    const getHotel = async (uuid) => {
        return await axios.get('/api/hotels/' + uuid)
    }

    const storeHotel = async (data) => {
        errors.value = null
        try {
            await axios.post('/api/hotels', data)
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

    const updateHotel = async (hotel) => {
        errors.value = null

        try {
            await axios.put('/api/hotels/' + hotel.id, hotel)
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

    const destroyHotel = async (uuid) => {
        try {
          await axios.delete('/api/hotels/' + uuid)
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
      hotel,
      hotels,
      getHotels,
      getHotel,
      storeHotel,
      updateHotel,
      destroyHotel
    }
}
