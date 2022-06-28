"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[642],{6904:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7484);function o(){return{types:[{name:""},{name:"directo"},{name:"comercial"},{name:"casa"},{name:"gobierno"}],estados:[{name:""},{name:"nuevo"},{name:"asignado"},{name:"convertido"}],sources:[{name:""},{name:"Campaña de Marketing"},{name:"Email"},{name:"Evento"},{name:"Llamada Telefónica"},{name:"Referido"},{name:"Relaciones Públicas"},{name:"Sitio Web"}],getName:function(e){return e?"".concat(e.firstname," ").concat(e.lastname):"NA"},getDate:function(e){return a(e).format("YYYY-MM-DD")},taskState:function(e){return 0==e?"No iniciada":1==e?"En progreso":2==e?"Completada":3==e?"Pendiente de información":4==e?"Retrasada":"NA"},userLevel:function(e){return 0==e?"Master":1==e?"Administrador":2==e?"Gerente":3==e?"Ejecutivo":4==e?"Cliente":"NA"},getStatus:function(e){return 0==e?"Suspendido":1==e?"Activo":"NA"},industries:[{name:""},{name:"Textile"},{name:"Banca"},{name:"Biotecnología"},{name:"Química"},{name:"Comunicaciones"},{name:"Construcción"},{name:"Consultoría"},{name:"Educación"},{name:"Electrónica"},{name:"Energía"},{name:"Ingeniería"},{name:"Entretenimiento"},{name:"Medio ambiente"},{name:"Finanzas"},{name:"Gobierno"},{name:"Salud"},{name:"Hospitalidad"},{name:"Seguros"},{name:"Maquinaria"},{name:"Fabricación"},{name:"Medios de comunicación"},{name:"Sin ánimo de lucro"},{name:"Recreación"},{name:"Minoristas"},{name:"Envíos"},{name:"Tecnología"},{name:"Telecomunicaciones"},{name:"Transporte"},{name:"Servicios públicos"},{name:"Otro"}],userStatus:function(e){return 0==e?"Inactivo":1==e?"Activo":2==e?"Permiso de ausencia":"NA"},addressType:[{name:"principal"},{name:"trabajo"},{name:"personal"},{name:"facturacion"},{name:"otro"}],salutations:[{salute:""},{salute:"Srta."},{salute:"Sra."},{salute:"Sr."}],statusClass:function(e){return 0==e?"bg-red-500":1==e?"bg-green-100 text-green-800":2==e?"bg-yellow-400":""},simpleStatus:function(e){return 0==e?"No":1==e?"Si":"NA"},getLongDate:function(e){return a(e).format("YYYY-MM-DD HH:mm")},statusContacto:[{estatus:"nuevo"},{estatus:"convertido"},{estatus:"asignado"}]}}},642:(e,t,n)=>{n.r(t),n.d(t,{default:()=>K});var a=n(5166),o=n(6904),s=n(5728),c={class:"grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-4 text-sm"},l={class:"sm:col-span-2"},m=(0,a.createElementVNode)("dt",{class:"font-medium text-purple"}," Nombre ",-1),r={class:"mt-1 font-semibold text-gray-900"},i={class:"sm:col-span-2"},d=(0,a.createElementVNode)("dt",{class:"font-medium text-purple"}," Teléfonos ",-1),u={class:"mt-1 font-semibold text-gray-900"},p={class:"flex justify-start space-x-5"},f={key:0},g={key:1},x={key:2},E={class:"sm:col-span-2"},N=(0,a.createElementVNode)("dt",{class:"font-medium text-purple"}," Cuenta(s) de Correo: ",-1),V={class:"mt-1 font-semibold text-gray-900"},y={class:"sm:col-span-1"},C=(0,a.createElementVNode)("dt",{class:"font-medium text-purple"}," Asistente: ",-1),v=["textContent"],b={class:"sm:col-span-1"},S=(0,a.createElementVNode)("dt",{class:"font-medium text-purple"}," Tel. Asistente: ",-1),k=["textContent"],D={class:"sm:col-span-2"},B=(0,a.createElementVNode)("dt",{class:"font-medium text-purple"}," Empresa: ",-1),A=["textContent"],T={class:"sm:col-span-1"},h=(0,a.createElementVNode)("dt",{class:"font-medium text-purple"}," Título: ",-1),M=["textContent"],Y={class:"sm:col-span-1"},w=(0,a.createElementVNode)("dt",{class:"font-medium text-purple"}," Departamento: ",-1),_=["textContent"],L={class:"sm:col-span-1"},R=(0,a.createElementVNode)("dt",{class:"font-medium text-purple"}," Estatus: ",-1),j=["textContent"],F={class:"sm:col-span-1"},H=(0,a.createElementVNode)("dt",{class:"font-medium text-purple"}," Toma de Contacto: ",-1),P=["textContent"],z={class:"sm:col-span-1"},G=(0,a.createElementVNode)("dt",{class:"font-medium text-purple"}," Asignado a: ",-1),I=["textContent"],O={class:"sm:col-span-1"},Z=(0,a.createElementVNode)("dt",{class:"font-medium text-purple"}," Recibe Llamadas? ",-1),q=["textContent"],Q={class:"sm:col-span-4"},W=(0,a.createElementVNode)("dt",{class:"font-medium text-purple"}," Descripción ",-1),J=["textContent"];const K={props:{contact:Object},setup:function(e){var t=(0,o.Z)(),n=t.simpleStatus;t.getStatus;return function(t,o){var K;return(0,a.openBlock)(),(0,a.createElementBlock)("dl",c,[(0,a.createElementVNode)("div",l,[m,(0,a.createElementVNode)("dd",r,(0,a.toDisplayString)(e.contact.salutation)+" "+(0,a.toDisplayString)(e.contact.fullname),1)]),(0,a.createElementVNode)("div",i,[d,(0,a.createElementVNode)("dd",u,[(0,a.createElementVNode)("div",p,[e.contact.phone_mobil?((0,a.openBlock)(),(0,a.createElementBlock)("span",f,"Cel: "+(0,a.toDisplayString)(e.contact.phone_mobil),1)):(0,a.createCommentVNode)("",!0),e.contact.phone_work?((0,a.openBlock)(),(0,a.createElementBlock)("span",g,"Trab: "+(0,a.toDisplayString)(e.contact.phone_work),1)):(0,a.createCommentVNode)("",!0),e.contact.phone_fax?((0,a.openBlock)(),(0,a.createElementBlock)("span",x,"Fax: "+(0,a.toDisplayString)(e.contact.phone_fax),1)):(0,a.createCommentVNode)("",!0)])])]),(0,a.createElementVNode)("div",E,[N,(0,a.createElementVNode)("dd",V,[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(e.contact.emails,(function(e){return(0,a.openBlock)(),(0,a.createElementBlock)("div",{class:"flex items-center",key:e.id},[(0,a.createTextVNode)((0,a.toDisplayString)(e.email)+" ",1),e.main?((0,a.openBlock)(),(0,a.createBlock)((0,a.unref)(s.r7p),{key:0,class:"w-4 h-4 text-yellow-600 ml-2"})):(0,a.createCommentVNode)("",!0)])})),128))])]),(0,a.createElementVNode)("div",y,[C,(0,a.createElementVNode)("dd",{class:"mt-1 font-semibold text-gray-900",textContent:(0,a.toDisplayString)(e.contact.assistant)},null,8,v)]),(0,a.createElementVNode)("div",b,[S,(0,a.createElementVNode)("dd",{class:"mt-1 font-semibold text-gray-900",textContent:(0,a.toDisplayString)(e.contact.assistant_phone)},null,8,k)]),(0,a.createElementVNode)("div",D,[B,(0,a.createElementVNode)("dd",{class:"mt-1 font-semibold text-gray-900",textContent:(0,a.toDisplayString)(e.contact.company)},null,8,A)]),(0,a.createElementVNode)("div",T,[h,(0,a.createElementVNode)("dd",{class:"mt-1 font-semibold text-gray-900",textContent:(0,a.toDisplayString)(e.contact.title)},null,8,M)]),(0,a.createElementVNode)("div",Y,[w,(0,a.createElementVNode)("dd",{class:"mt-1 font-semibold text-gray-900",textContent:(0,a.toDisplayString)(e.contact.department)},null,8,_)]),(0,a.createElementVNode)("div",L,[R,(0,a.createElementVNode)("dd",{class:"mt-1 font-semibold text-gray-900 capitalize",textContent:(0,a.toDisplayString)(e.contact.status)},null,8,j)]),(0,a.createElementVNode)("div",F,[H,(0,a.createElementVNode)("dd",{class:"mt-1 font-semibold text-gray-900",textContent:(0,a.toDisplayString)(e.contact.source)},null,8,P)]),(0,a.createElementVNode)("div",z,[G,(0,a.createElementVNode)("dd",{class:"mt-1 font-semibold text-gray-900",textContent:(0,a.toDisplayString)(null===(K=e.contact.assigned)||void 0===K?void 0:K.fullname)},null,8,I)]),(0,a.createElementVNode)("div",O,[Z,(0,a.createElementVNode)("dd",{class:"mt-1 font-semibold text-gray-900",textContent:(0,a.toDisplayString)((0,a.unref)(n)(e.contact.call))},null,8,q)]),(0,a.createElementVNode)("div",Q,[W,(0,a.createElementVNode)("dd",{class:"mt-1 font-semibold text-gray-900",textContent:(0,a.toDisplayString)(e.contact.description)},null,8,J)])])}}}}}]);