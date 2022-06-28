import { ref } from 'vue'
import axios from "axios";

export default function useEmployees() {
    const employees = ref([])
    const employee = ref([])
    const errors = ref(null)

    const getEmployees = async () => {
        let response = await axios.get('/api/employees')
        employees.value = response.data.data;
    }

    const getEmployee = async (uuid) => {
        let response = await axios.get('/api/employees/' + uuid)
        employee.value = response.data.data;
    }

    const storeEmployee = async (data) => {
        errors.value = null
        try {
          await axios.post('/api/employees', data)
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

    const updateEmployee = async (uuid) => {
        errors.value = ''
        try {
            await axios.put('/api/employees/' + uuid, employee.value)
        } catch (e) {
          if (e.response.status === 422) {
            errors.value = e.response.data.errors
          }
        }
    }

    const destroyEmployee = async (uuid) => {
        await axios.delete('/api/employees/' + uuid)
    }


    return {
        employees,
        employee,
        errors,
        getEmployees,
        getEmployee,
        storeEmployee,
        updateEmployee,
        destroyEmployee
    }
}
