import { ref } from 'vue'
import axios from "axios";

export default function useContacts() {
    const contacts = ref([])
    const contact = ref([])
    const errors = ref(null)

    const getContacts = async () => {
        let response = await axios.get('/api/contacts')
        contacts.value = response.data.data;
    }

    const getContact = async (uuid) => {
        return await axios.get('/api/contacts/' + uuid)
    }

    const storeContact = async (data) => {
        errors.value = null
        try {
          await axios.post('/api/contacts', data)
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

    const updateContact = async (thecontact) => {
        errors.value = null
        try {
            await axios.put('/api/contacts/' + thecontact.uuid, thecontact)
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

    const destroyContact = async (uuid) => {
        await axios.delete('/api/contacts/' + uuid)
    }


    return {
        errors,
        contact,
        contacts,
        getContact,
        getContacts,
        storeContact,
        updateContact,
        destroyContact
    }
}
