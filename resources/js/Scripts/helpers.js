const dayjs = require('dayjs')
export default function useHelpers() {
  const statusContacto = [
    { estatus: 'nuevo' },
    { estatus: 'convertido' },
    { estatus: 'asignado' },
  ]
  const salutations = [
    { salute: '' },
    { salute: 'Srta.' },
    { salute: 'Sra.' },
    { salute: 'Sr.' },
  ]
  const sources = [
    { name: '' },
    { name: 'Campaña de Marketing' },
    { name: 'Email' },
    { name: 'Evento' },
    { name: 'Llamada Telefónica' },
    { name: 'Referido' },
    { name: 'Relaciones Públicas' },
    { name: 'Sitio Web' },
  ]
  const estados = [
    { name: '' },
    { name: 'nuevo' },
    { name: 'asignado' },
    { name: 'convertido' }
  ]
  const addressType = [
    { name: 'principal' },
    { name: 'trabajo' },
    { name: 'personal' },
    { name: 'facturacion' },
    { name: 'otro' }
  ]
  const productTypes = [
    { name: 'Good', translate: 'Bien', value: 'Good' },
    { name: 'Service', translate: 'Servicio', value: 'Service' },
    { name: 'Other', translate: 'Otro', value: 'Other' },
  ]
  const currencies = [
    { name: 'usd' },
    { name: 'mxn' },
    { name: 'cad' },
    { name: 'other' }
  ]
  const types = [
    { name: '' },
    { name: 'directo' },
    { name: 'comercial' },
    { name: 'casa' },
    { name: 'gobierno' }
  ]
  const industries = [
    { name: '' },
    { name: 'Textile' },
    { name: 'Banca' },
    { name: 'Biotecnología' },
    { name: 'Química' },
    { name: 'Comunicaciones' },
    { name: 'Construcción' },
    { name: 'Consultoría' },
    { name: 'Educación' },
    { name: 'Electrónica' },
    { name: 'Energía' },
    { name: 'Ingeniería' },
    { name: 'Entretenimiento' },
    { name: 'Medio ambiente' },
    { name: 'Finanzas' },
    { name: 'Gobierno' },
    { name: 'Salud' },
    { name: 'Hospitalidad' },
    { name: 'Seguros' },
    { name: 'Maquinaria' },
    { name: 'Fabricación' },
    { name: 'Medios de comunicación' },
    { name: 'Sin ánimo de lucro' },
    { name: 'Recreación' },
    { name: 'Minoristas' },
    { name: 'Envíos' },
    { name: 'Tecnología' },
    { name: 'Telecomunicaciones' },
    { name: 'Transporte' },
    { name: 'Servicios públicos' },
    { name: 'Otro' },
  ]
  const statesList = [
    { name: 'Sin Iniciar', value: 0 },
    { name: 'En Progreso', value: 1 },
    { name: 'Pendiente de Información', value: 2 },
    { name: 'Retresada', value: 3 },
    { name: 'Completada', value: 4 }
  ]
  const getName = (val) => {
    if(!val) {
      return 'NA'
    }

    return `${val.firstname} ${val.lastname}`
  }
  const getStatus = (val) => {
    if(val == 0) {
      return 'Suspendido'
    }
    if(val == 1) {
      return 'Activo'
    }

    return 'NA'
  }
  const simpleStatus = (val) => {
    if(val == 0) {
      return 'No'
    }
    if(val == 1) {
      return 'Si'
    }

    return 'NA'
  }
  const taskState = (val) => {
    if(val == 0) {
      return 'No iniciada'
    }
    if(val == 1) {
      return 'En progreso'
    }
    if(val == 2) {
      return 'Completada'
    }
    if(val == 3) {
      return 'Pendiente de información'
    }
    if(val == 4) {
      return 'Retrasada'
    }

    return 'NA'
  }
  const getLongDate = (val) => {
    return dayjs(val).format('YYYY-MM-DD HH:mm')
  }
  const getDate = (val) => {
    return dayjs(val).format('YYYY-MM-DD')
  }
  const convertidoClass = (val) => {
    if(val == 'Sitio Web') {
      return 'bg-red-100'
    }
    if(val == 'Referido') {
      return 'bg-yellow-100 text-green-800'
    }
    if(val == 'nuevo') {
      return 'bg-gray-200'
    }
    if(val == 'convertido') {
      return 'bg-green-100 text-green-600'
    }
    return 'bg-gray-50'
  }
  const statusClass = (val) => {
    if(val == 0) {
      return 'bg-red-500'
    }
    if(val == 1) {
      return 'bg-green-100 text-green-800'
    }
    if(val == 2) {
      return 'bg-yellow-400'
    }
    return ''
  }
  const userStatus = (val) => {
    if(val == 0) {
      return 'Inactivo'
    }
    if(val == 1) {
      return 'Activo'
    }
    if(val == 2) {
      return 'Permiso de ausencia'
    }
    return 'NA'
  }
  const userLevel = (val) => {
    if(val == 0) {
      return 'Master'
    }
    if(val == 1) {
      return 'Administrador'
    }
    if(val == 2) {
      return 'Gerente'
    }
    if(val == 3) {
      return 'Ejecutivo'
    }
    if(val == 4) {
      return 'Cliente'
    }
    return 'NA'
  }
  const stateNames = (val) => {
    if(val == 0) {
      return 'Sin Iniciar'
    }
    if(val == 1) {
      return 'En Progreso'
    }
    if(val == 2) {
      return 'Pendiente de Información'
    }
    if(val == 3) {
      return 'Retresada'
    }
    if(val == 4) {
      return 'Completada'
    }
    return 'NA'
  }

  return {
    dayjs,
    types,
    estados,
    sources,
    statesList,
    currencies,
    industries,
    addressType,
    salutations,
    productTypes,
    statusContacto,
    getName,
    getDate,
    taskState,
    userLevel,
    getStatus,
    stateNames,
    userStatus,
    statusClass,
    getLongDate,
    simpleStatus,
    convertidoClass,
  }
}
