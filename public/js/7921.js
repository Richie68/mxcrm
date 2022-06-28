"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7921],{6904:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7484);function o(){return{dayjs:a,types:[{name:""},{name:"directo"},{name:"comercial"},{name:"casa"},{name:"gobierno"}],estados:[{name:""},{name:"nuevo"},{name:"asignado"},{name:"convertido"}],sources:[{name:""},{name:"Campaña de Marketing"},{name:"Email"},{name:"Evento"},{name:"Llamada Telefónica"},{name:"Referido"},{name:"Relaciones Públicas"},{name:"Sitio Web"}],statesList:[{name:"Sin Iniciar",value:0},{name:"En Progreso",value:1},{name:"Pendiente de Información",value:2},{name:"Retresada",value:3},{name:"Completada",value:4}],currencies:[{name:"usd"},{name:"mxn"},{name:"cad"},{name:"other"}],industries:[{name:""},{name:"Textile"},{name:"Banca"},{name:"Biotecnología"},{name:"Química"},{name:"Comunicaciones"},{name:"Construcción"},{name:"Consultoría"},{name:"Educación"},{name:"Electrónica"},{name:"Energía"},{name:"Ingeniería"},{name:"Entretenimiento"},{name:"Medio ambiente"},{name:"Finanzas"},{name:"Gobierno"},{name:"Salud"},{name:"Hospitalidad"},{name:"Seguros"},{name:"Maquinaria"},{name:"Fabricación"},{name:"Medios de comunicación"},{name:"Sin ánimo de lucro"},{name:"Recreación"},{name:"Minoristas"},{name:"Envíos"},{name:"Tecnología"},{name:"Telecomunicaciones"},{name:"Transporte"},{name:"Servicios públicos"},{name:"Otro"}],addressType:[{name:"principal"},{name:"trabajo"},{name:"personal"},{name:"facturacion"},{name:"otro"}],salutations:[{salute:""},{salute:"Srta."},{salute:"Sra."},{salute:"Sr."}],productTypes:[{name:"Good",translate:"Bien",value:"Good"},{name:"Service",translate:"Servicio",value:"Service"},{name:"Other",translate:"Otro",value:"Other"}],statusContacto:[{estatus:"nuevo"},{estatus:"convertido"},{estatus:"asignado"}],getName:function(e){return e?"".concat(e.firstname," ").concat(e.lastname):"NA"},getDate:function(e){return a(e).format("YYYY-MM-DD")},taskState:function(e){return 0==e?"No iniciada":1==e?"En progreso":2==e?"Completada":3==e?"Pendiente de información":4==e?"Retrasada":"NA"},userLevel:function(e){return 0==e?"Master":1==e?"Administrador":2==e?"Gerente":3==e?"Ejecutivo":4==e?"Cliente":"NA"},getStatus:function(e){return 0==e?"Suspendido":1==e?"Activo":"NA"},stateNames:function(e){return 0==e?"Sin Iniciar":1==e?"En Progreso":2==e?"Pendiente de Información":3==e?"Retresada":4==e?"Completada":"NA"},userStatus:function(e){return 0==e?"Inactivo":1==e?"Activo":2==e?"Permiso de ausencia":"NA"},statusClass:function(e){return 0==e?"bg-red-500":1==e?"bg-green-100 text-green-800":2==e?"bg-yellow-400":""},getLongDate:function(e){return a(e).format("YYYY-MM-DD HH:mm")},simpleStatus:function(e){return 0==e?"No":1==e?"Si":"NA"},convertidoClass:function(e){return"Sitio Web"==e?"bg-red-100":"Referido"==e?"bg-yellow-100 text-green-800":"nuevo"==e?"bg-gray-200":"convertido"==e?"bg-green-100 text-green-600":"bg-gray-50"}}}},7921:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L});var a=n(821),o=n(6904),s=n(3724),r={class:"grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-4 text-sm"},l={class:"sm:col-span-2"},m=(0,a.createElementVNode)("dt",{class:"font-medium text-purple"}," Nombre ",-1),c={class:"mt-1 font-semibold text-gray-900"},i={class:"sm:col-span-2"},d=(0,a.createElementVNode)("dt",{class:"font-medium text-purple"}," Teléfonos ",-1),u={class:"mt-1 font-semibold text-gray-900"},p={class:"flex justify-start space-x-5"},g={key:0},f={key:1},y={class:"sm:col-span-2"},x=(0,a.createElementVNode)("dt",{class:"font-medium text-purple"}," Cuenta(s) de Correo: ",-1),E={class:"mt-1 font-semibold text-gray-900"},N={class:"sm:col-span-1"},v=(0,a.createElementVNode)("dt",{class:"font-medium text-purple"}," Industria: ",-1),V=["textContent"],b={class:"sm:col-span-1"},C=(0,a.createElementVNode)("dt",{class:"font-medium text-purple"}," Tipo: ",-1),S=["textContent"],k={class:"sm:col-span-1"},D=(0,a.createElementVNode)("dt",{class:"font-medium text-purple"}," Página Web: ",-1),B=["textContent"],A={class:"sm:col-span-1"},h=(0,a.createElementVNode)("dt",{class:"font-medium text-purple"}," Cantidad Empleados: ",-1),T=["textContent"],w={class:"sm:col-span-1"},M=(0,a.createElementVNode)("dt",{class:"font-medium text-purple"}," Ingresos Anuales: ",-1),I=["textContent"],P={class:"sm:col-span-1"},Y=(0,a.createElementVNode)("dt",{class:"font-medium text-purple"}," Asignado a: ",-1),R=["textContent"],_={class:"sm:col-span-4"},j=(0,a.createElementVNode)("dt",{class:"font-medium text-purple"}," Descripción del Contacto: ",-1),z=["textContent"];const L={props:{company:Object},setup:function(e){var t=(0,o.Z)();t.simpleStatus,t.getStatus;return function(t,n){var o;return(0,a.openBlock)(),(0,a.createElementBlock)("dl",r,[(0,a.createElementVNode)("div",l,[m,(0,a.createElementVNode)("dd",c,(0,a.toDisplayString)(e.company.name),1)]),(0,a.createElementVNode)("div",i,[d,(0,a.createElementVNode)("dd",u,[(0,a.createElementVNode)("div",p,[e.company.phone_work?((0,a.openBlock)(),(0,a.createElementBlock)("span",g,"Trab: "+(0,a.toDisplayString)(e.company.phone_work),1)):(0,a.createCommentVNode)("",!0),e.company.phone_fax?((0,a.openBlock)(),(0,a.createElementBlock)("span",f,"Fax: "+(0,a.toDisplayString)(e.company.phone_fax),1)):(0,a.createCommentVNode)("",!0)])])]),(0,a.createElementVNode)("div",y,[x,(0,a.createElementVNode)("dd",E,[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(e.company.emails,(function(e){return(0,a.openBlock)(),(0,a.createElementBlock)("div",{class:"flex items-center",key:e.id},[(0,a.createTextVNode)((0,a.toDisplayString)(e.email)+" ",1),e.main?((0,a.openBlock)(),(0,a.createBlock)((0,a.unref)(s.r7p),{key:0,class:"w-4 h-4 text-yellow-600 ml-2"})):(0,a.createCommentVNode)("",!0)])})),128))])]),(0,a.createElementVNode)("div",N,[v,(0,a.createElementVNode)("dd",{class:"mt-1 font-semibold text-gray-900 capitalize",textContent:(0,a.toDisplayString)(e.company.industry)},null,8,V)]),(0,a.createElementVNode)("div",b,[C,(0,a.createElementVNode)("dd",{class:"mt-1 font-semibold text-gray-900 capitalize",textContent:(0,a.toDisplayString)(e.company.type)},null,8,S)]),(0,a.createElementVNode)("div",k,[D,(0,a.createElementVNode)("dd",{class:"mt-1 font-semibold text-gray-900 lowercase",textContent:(0,a.toDisplayString)(e.company.website)},null,8,B)]),(0,a.createElementVNode)("div",A,[h,(0,a.createElementVNode)("dd",{class:"mt-1 font-semibold text-gray-900 capitalize",textContent:(0,a.toDisplayString)(e.company.amount_employees)},null,8,T)]),(0,a.createElementVNode)("div",w,[M,(0,a.createElementVNode)("dd",{class:"mt-1 font-semibold text-gray-900 capitalize",textContent:(0,a.toDisplayString)(e.company.anual_revenue)},null,8,I)]),(0,a.createElementVNode)("div",P,[Y,(0,a.createElementVNode)("dd",{class:"mt-1 font-semibold text-gray-900",textContent:(0,a.toDisplayString)(null===(o=e.company.assigned)||void 0===o?void 0:o.fullname)},null,8,R)]),(0,a.createElementVNode)("div",_,[j,(0,a.createElementVNode)("dd",{class:"mt-1 font-semibold text-gray-900",textContent:(0,a.toDisplayString)(e.company.description)},null,8,z)])])}}}}}]);