"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[497],{6904:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7484);function r(){return{types:[{name:""},{name:"directo"},{name:"comercial"},{name:"casa"},{name:"gobierno"}],estados:[{name:""},{name:"nuevo"},{name:"asignado"},{name:"convertido"}],sources:[{name:""},{name:"Campaña de Marketing"},{name:"Email"},{name:"Evento"},{name:"Llamada Telefónica"},{name:"Referido"},{name:"Relaciones Públicas"},{name:"Sitio Web"}],getName:function(e){return e?"".concat(e.firstname," ").concat(e.lastname):"NA"},userLevel:function(e){return 0==e?"Master":1==e?"Administrador":2==e?"Gerente":3==e?"Ejecutivo":4==e?"Cliente":"NA"},getStatus:function(e){return 0==e?"Suspendido":1==e?"Activo":"NA"},industries:[{name:""},{name:"Textile"},{name:"Banca"},{name:"Biotecnología"},{name:"Química"},{name:"Comunicaciones"},{name:"Construcción"},{name:"Consultoría"},{name:"Educación"},{name:"Electrónica"},{name:"Energía"},{name:"Ingeniería"},{name:"Entretenimiento"},{name:"Medio ambiente"},{name:"Finanzas"},{name:"Gobierno"},{name:"Salud"},{name:"Hospitalidad"},{name:"Seguros"},{name:"Maquinaria"},{name:"Fabricación"},{name:"Medios de comunicación"},{name:"Sin ánimo de lucro"},{name:"Recreación"},{name:"Minoristas"},{name:"Envíos"},{name:"Tecnología"},{name:"Telecomunicaciones"},{name:"Transporte"},{name:"Servicios públicos"},{name:"Otro"}],userStatus:function(e){return 0==e?"Inactivo":1==e?"Activo":2==e?"Permiso de ausencia":"NA"},addressType:[{name:"principal"},{name:"trabajo"},{name:"personal"},{name:"facturacion"},{name:"otro"}],salutations:[{salute:""},{salute:"Srta."},{salute:"Sra."},{salute:"Sr."}],statusClass:function(e){return 0==e?"bg-red-500":1==e?"bg-green-100 text-green-800":2==e?"bg-yellow-400":""},getLongDate:function(e){return a(e).format("YYYY-MM-DD HH:mm")}}}},5014:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(5166),r={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},o=[(0,a.createElementVNode)("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"},null,-1)];const s={render:function(e,t){return(0,a.openBlock)(),(0,a.createElementBlock)("svg",r,o)}},c=s},2343:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(5166),r={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},o=[(0,a.createElementVNode)("path",{"fill-rule":"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule":"evenodd"},null,-1)];const s={render:function(e,t){return(0,a.openBlock)(),(0,a.createElementBlock)("svg",r,o)}},c=s},8744:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(5166),r=["type"];const o=(0,a.defineComponent)({props:{type:{type:String,default:"submit"}}});o.render=function(e,t,n,o,s,c){return(0,a.openBlock)(),(0,a.createElementBlock)("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-purple border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-dark active:bg-purple-dark focus:outline-none focus:border-purple-light focus:ring focus:ring-purple-light disabled:opacity-25 transition"},[(0,a.renderSlot)(e.$slots,"default")],8,r)};const s=o},497:(e,t,n)=>{n.r(t),n.d(t,{default:()=>H});var a=n(5166),r={class:"max-w-7xl mx-auto"},o={class:"flex justify-around py-2 text-purple font-semibold text-2xl tracking-widest uppercase"},s=(0,a.createTextVNode)(" Listado de Contactos "),c=(0,a.createTextVNode)(" Nuevo "),l={class:"flex flex-col"},i={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},u={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},d={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},p={class:"min-w-full divide-y divide-gray-200"},m=(0,a.createElementVNode)("thead",{class:"bg-gray-50 font-medium text-gray-500 uppercase tracking-wider"},[(0,a.createElementVNode)("tr",null,[(0,a.createElementVNode)("th",{scope:"col",class:"px-6 py-3 text-left text-xs"}," Nombre "),(0,a.createElementVNode)("th",{scope:"col",class:"px-6 py-3 text-left text-xs"}," Branch "),(0,a.createElementVNode)("th",{scope:"col",class:"px-6 py-3 text-left text-xs"}," Título "),(0,a.createElementVNode)("th",{scope:"col",class:"px-6 py-3 text-left text-xs"}," Departamento "),(0,a.createElementVNode)("th",{scope:"col",class:"px-6 py-3 text-left text-xs"}," Celular "),(0,a.createElementVNode)("th",{scope:"col",class:"px-6 py-3 text-left text-xs"}," Tel. Trabajo "),(0,a.createElementVNode)("th",{scope:"col",class:"px-6 py-3 text-left text-xs"}," Estado "),(0,a.createElementVNode)("th",{scope:"col",class:"px-6 py-3 text-right text-xs"}," Registro ")])],-1),f={class:"bg-white divide-y divide-gray-200"},x={class:"px-6 py-4 whitespace-nowrap"},g={class:"flex items-center"},v={class:"flex-shrink-0 h-10 w-10"},h=["src"],y={class:"ml-4"},E={class:"text-xs font-medium text-gray-900"},w={class:"text-xs text-gray-500"},b={class:"px-6 py-4"},N={class:"px-6 py-4"},V={class:"px-6 py-4"},k={class:"px-6 py-4"},C={class:"px-6 py-4"},S={class:"px-6 py-4 text-right"};var B=n(7757),D=n.n(B),M=n(9669),L=n.n(M);function T(e,t,n,a,r,o,s){try{var c=e[o](s),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(a,r)}function Z(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var o=e.apply(t,n);function s(e){T(o,a,r,s,c,"next",e)}function c(e){T(o,a,r,s,c,"throw",e)}s(void 0)}))}}var A=n(8744),P=n(5014),_=n(2343),I=n(6904);const z=(0,a.defineComponent)({name:"ContactosIndex",components:{PlusIcon:_.Z,JetButton:A.Z,PencilIcon:P.Z},setup:function(){var e=(0,I.Z)(),t=e.userStatus,n=e.statusClass,r=e.getLongDate,o=function(){var e=(0,a.ref)([]),t=(0,a.ref)([]),n=(0,a.ref)(""),r=function(){var t=Z(D().mark((function t(){var n;return D().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L().get("/api/contacts");case 2:n=t.sent,e.value=n.data.data;case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var e=Z(D().mark((function e(n){var a;return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L().get("/api/contacts/"+n);case 2:a=e.sent,t.value=a.data.data;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Z(D().mark((function e(t){return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.value="",e.prev=1,e.next=4,L().post("/api/contacts",t);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),422===e.t0.response.status&&(n.value=e.t0.response.data.errors);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=Z(D().mark((function e(a){return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.value="",e.prev=1,e.next=4,L().put("/api/contacts/"+a,t.value);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),422===e.t0.response.status&&(n.value=e.t0.response.data.errors);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Z(D().mark((function e(t){return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L().delete("/api/contacts/"+t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{errors:n,contact:t,contacts:e,getContact:o,getContacts:r,storeContact:s,updateContact:c,destroyContact:l}}(),s=o.contacts,c=o.getContacts;return(0,a.onMounted)(c),{contacts:s,userStatus:t,statusClass:n,getLongDate:r}},methods:{getMainEmail:function(e){var t=[];return e.emails.length>0&&(t=e.emails.filter((function(e){return 1==e.main}))),t.length>0?t[0].email:""}}});z.render=function(e,t,n,B,D,M){var L=(0,a.resolveComponent)("Head"),T=(0,a.resolveComponent)("PlusIcon"),Z=(0,a.resolveComponent)("Link");return(0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,[(0,a.createVNode)(L,{title:"Listado de Empleados"}),(0,a.createElementVNode)("div",r,[(0,a.createElementVNode)("h1",o,[s,(0,a.createVNode)(Z,{class:"inline-flex items-center px-2 py-0 bg-purple border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-dark active:bg-purple-dark focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple-light disabled:opacity-25 transition",href:e.route("marketing.contacts.create")},{default:(0,a.withCtx)((function(){return[(0,a.createVNode)(T,{class:"w-4 h-4 mr-1"}),c]})),_:1},8,["href"])]),(0,a.createElementVNode)("div",l,[(0,a.createElementVNode)("div",i,[(0,a.createElementVNode)("div",u,[(0,a.createElementVNode)("div",d,[(0,a.createElementVNode)("table",p,[m,(0,a.createElementVNode)("tbody",f,[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(e.contacts,(function(t){var n;return(0,a.openBlock)(),(0,a.createElementBlock)("tr",{class:"text-xs text-gray-700 whitespace-nowrap",key:t.id},[(0,a.createElementVNode)("td",x,[(0,a.createElementVNode)("div",g,[(0,a.createElementVNode)("div",v,[(0,a.createElementVNode)("img",{class:"h-10 w-10 rounded-full",src:t.profile_photo_url,alt:""},null,8,h)]),(0,a.createVNode)(Z,{href:e.route("empleados.show",t.uuid)},{default:(0,a.withCtx)((function(){return[(0,a.createElementVNode)("div",y,[(0,a.createElementVNode)("div",E,(0,a.toDisplayString)(t.firstname)+" "+(0,a.toDisplayString)(t.lastname),1),(0,a.createElementVNode)("div",w,(0,a.toDisplayString)(e.getMainEmail(t)),1)])]})),_:2},1032,["href"])])]),(0,a.createElementVNode)("td",b,(0,a.toDisplayString)(null===(n=t.branch)||void 0===n?void 0:n.name),1),(0,a.createElementVNode)("td",N,(0,a.toDisplayString)(t.title),1),(0,a.createElementVNode)("td",null,(0,a.toDisplayString)(t.department),1),(0,a.createElementVNode)("td",V,(0,a.toDisplayString)(t.phone_mobil),1),(0,a.createElementVNode)("td",k,(0,a.toDisplayString)(t.phone_work),1),(0,a.createElementVNode)("td",C,[(0,a.createElementVNode)("span",{class:(0,a.normalizeClass)(["bg-gray-100 px-2 inline-flex text-xs leading-5 font-semibold rounded-md",e.statusClass(t.status)])},(0,a.toDisplayString)(e.userStatus(t.status)),3)]),(0,a.createElementVNode)("td",S,(0,a.toDisplayString)(e.getLongDate(t.created_at)),1)])})),128))])])])])])])])],64)};const H=z}}]);