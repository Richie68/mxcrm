"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8521],{3702:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7757),a=n.n(r),o=n(821),l=n(9669),s=n.n(l);function c(e,t,n,r,a,o,l){try{var s=e[o](l),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function l(e){c(o,r,a,l,s,"next",e)}function s(e){c(o,r,a,l,s,"throw",e)}l(void 0)}))}}function i(){var e=(0,o.ref)([]),t=((0,o.ref)([]),(0,o.ref)(null)),n=function(){var t=u(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/api/companies");case 2:n=t.sent,e.value=n.data.data;case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),r=function(){var e=u(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/api/companies/"+t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=u(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.value=null,e.prev=1,e.next=4,s().post("/api/companies",n);case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),422===e.t0.response.status&&(t.value=e.t0.response.data.errors),404===e.t0.response.status&&(t.value=[],t.value=[{errors:e.t0.response.data.message}]);case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=u(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.value=null,e.prev=1,e.next=4,s().put("/api/companies/"+n.uuid,n);case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),422===e.t0.response.status&&(t.value=e.t0.response.data.errors),404===e.t0.response.status&&(t.value=[],t.value=[{errors:e.t0.response.data.message}]);case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=u(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().delete("/api/companies/"+t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{errors:t,companies:e,getCompanies:n,getCompany:r,storeCompany:l,updateCompany:c,destroyCompany:i}}},6904:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7484);function a(){return{dayjs:r,types:[{name:""},{name:"directo"},{name:"comercial"},{name:"casa"},{name:"gobierno"}],estados:[{name:""},{name:"nuevo"},{name:"asignado"},{name:"convertido"}],sources:[{name:""},{name:"Campaña de Marketing"},{name:"Email"},{name:"Evento"},{name:"Llamada Telefónica"},{name:"Referido"},{name:"Relaciones Públicas"},{name:"Sitio Web"}],statesList:[{name:"Sin Iniciar",value:0},{name:"En Progreso",value:1},{name:"Pendiente de Información",value:2},{name:"Retresada",value:3},{name:"Completada",value:4}],currencies:[{name:"usd"},{name:"mxn"},{name:"cad"},{name:"other"}],industries:[{name:""},{name:"Textile"},{name:"Banca"},{name:"Biotecnología"},{name:"Química"},{name:"Comunicaciones"},{name:"Construcción"},{name:"Consultoría"},{name:"Educación"},{name:"Electrónica"},{name:"Energía"},{name:"Ingeniería"},{name:"Entretenimiento"},{name:"Medio ambiente"},{name:"Finanzas"},{name:"Gobierno"},{name:"Salud"},{name:"Hospitalidad"},{name:"Seguros"},{name:"Maquinaria"},{name:"Fabricación"},{name:"Medios de comunicación"},{name:"Sin ánimo de lucro"},{name:"Recreación"},{name:"Minoristas"},{name:"Envíos"},{name:"Tecnología"},{name:"Telecomunicaciones"},{name:"Transporte"},{name:"Servicios públicos"},{name:"Otro"}],addressType:[{name:"principal"},{name:"trabajo"},{name:"personal"},{name:"facturacion"},{name:"otro"}],salutations:[{salute:""},{salute:"Srta."},{salute:"Sra."},{salute:"Sr."}],productTypes:[{name:"Good",translate:"Bien",value:"Good"},{name:"Service",translate:"Servicio",value:"Service"},{name:"Other",translate:"Otro",value:"Other"}],statusContacto:[{estatus:"nuevo"},{estatus:"convertido"},{estatus:"asignado"}],getName:function(e){return e?"".concat(e.firstname," ").concat(e.lastname):"NA"},getDate:function(e){return r(e).format("YYYY-MM-DD")},taskState:function(e){return 0==e?"No iniciada":1==e?"En progreso":2==e?"Completada":3==e?"Pendiente de información":4==e?"Retrasada":"NA"},userLevel:function(e){return 0==e?"Master":1==e?"Administrador":2==e?"Gerente":3==e?"Ejecutivo":4==e?"Cliente":"NA"},getStatus:function(e){return 0==e?"Suspendido":1==e?"Activo":"NA"},stateNames:function(e){return 0==e?"Sin Iniciar":1==e?"En Progreso":2==e?"Pendiente de Información":3==e?"Retresada":4==e?"Completada":"NA"},userStatus:function(e){return 0==e?"Inactivo":1==e?"Activo":2==e?"Permiso de ausencia":"NA"},statusClass:function(e){return 0==e?"bg-red-500":1==e?"bg-green-100 text-green-800":2==e?"bg-yellow-400":""},getLongDate:function(e){return r(e).format("YYYY-MM-DD HH:mm")},simpleStatus:function(e){return 0==e?"No":1==e?"Si":"NA"},convertidoClass:function(e){return"Sitio Web"==e?"bg-red-100":"Referido"==e?"bg-yellow-100 text-green-800":"nuevo"==e?"bg-gray-200":"convertido"==e?"bg-green-100 text-green-600":"bg-gray-50"}}}},1524:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(821),a=n(3279),o=n.n(a),l=n(7826),s={key:0,class:"relative z-20"},c={class:"flex"},u=(0,r.createTextVNode)("Close"),i={key:0,class:"bg-white border mt-2 py-4 space-y-2 rounded-md max-h-[300px] overflow-y-scroll min-w-full absolute top-full z-20"},d=["textContent","onClick"],p={key:0,class:"text-center font-semibold text-xs"};const m={props:{show:Boolean,label:String,level:Number},emits:["set-change","close-it"],setup:function(e,t){var n=t.emit,a=e,m=(0,r.ref)(""),f=(0,r.ref)(null);(0,r.watch)((function(){return a.show}),(function(e,t){e&&m.autofocus})),(0,r.watch)(m,o()((function(e){""==m.value?f.value=null:axios.post(route("api.search-employees"),{search:e,level:a.level}).then((function(e){f.value=e.data}))}),300));return function(t,a){return e.show?((0,r.openBlock)(),(0,r.createElementBlock)("div",s,[(0,r.createElementVNode)("div",c,[(0,r.withDirectives)((0,r.createElementVNode)("input",{type:"search",name:"search","onUpdate:modelValue":a[0]||(a[0]=function(e){return(0,r.isRef)(m)?m.value=e:m=e}),autocomplete:"off",autofocus:"",placeholder:"Buscar ...",class:"mt-1 mr-2 block w-full border border-gray-300 rounded-md shadow-sm px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"},null,512),[[r.vModelText,(0,r.unref)(m)]]),(0,r.createVNode)((0,r.unref)(l.Z),{onClick:a[1]||(a[1]=function(e){return t.$emit("close-it")})},{default:(0,r.withCtx)((function(){return[u]})),_:1})]),(0,r.unref)(f)?((0,r.openBlock)(),(0,r.createElementBlock)("ul",i,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)((0,r.unref)(f),(function(t){return(0,r.openBlock)(),(0,r.createElementBlock)("li",{class:"text-sm text-purple hover:bg-gray-200 py-2 pl-4 pr-2",key:t.uuid,textContent:(0,r.toDisplayString)(t[e.label]),onClick:function(e){return n("set-change",t),void(m.value="")}},null,8,d)})),128)),0==(0,r.unref)(f).length?((0,r.openBlock)(),(0,r.createElementBlock)("li",p," Sin resultados ")):(0,r.createCommentVNode)("",!0)])):(0,r.createCommentVNode)("",!0)])):(0,r.createCommentVNode)("",!0)}}}},7588:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(821),a=n(7751),o={key:0,class:"grid grid-cols-6 gap-6"},l={class:"col-span-6 text-right"};const s={props:{errors:Object},setup:function(e){return function(t,n){return(0,r.openBlock)(),(0,r.createBlock)(r.Transition,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 -translate-y-1","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition ease-in duration-150","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 -translate-y-1"},{default:(0,r.withCtx)((function(){return[e.errors?((0,r.openBlock)(),(0,r.createElementBlock)("div",o,[(0,r.createElementVNode)("div",l,[(0,r.createElementVNode)("span",{class:"inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-600 text-white",onClick:n[0]||(n[0]=function(t){return e.errors=null})},[(0,r.createVNode)((0,r.unref)(a.b0D),{class:"w-4 h-4"})])]),((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e.errors,(function(t,n){return(0,r.openBlock)(),(0,r.createElementBlock)("div",{key:n,class:(0,r.normalizeClass)(["bg-red-600 text-white rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0",[1==e.errors.length?"col-span-6":""]])},[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(t,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("p",{key:e,class:"text-sm"},(0,r.toDisplayString)(e),1)})),128))],2)})),128))])):(0,r.createCommentVNode)("",!0)]})),_:1})}}}},1608:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(821),a={key:0,class:"flex justify-center py-3 text-purple"},o=[(0,r.createElementVNode)("svg",{class:"animate-spin -ml-1 mr-3 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[(0,r.createElementVNode)("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),(0,r.createElementVNode)("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1)];const l={props:{show:Boolean},setup:function(e){return function(t,n){return e.show?((0,r.openBlock)(),(0,r.createElementBlock)("div",a,o)):(0,r.createCommentVNode)("",!0)}}}},7826:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(821),a=["type"];const o=(0,r.defineComponent)({props:{type:{type:String,default:"submit"}}});const l=(0,n(3744).Z)(o,[["render",function(e,t,n,o,l,s){return(0,r.openBlock)(),(0,r.createElementBlock)("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-purple border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-dark active:bg-purple-dark focus:outline-none focus:border-purple-light focus:ring focus:ring-purple-light disabled:opacity-25 transition"},[(0,r.renderSlot)(e.$slots,"default")],8,a)}]])},8521:(e,t,n)=>{n.r(t),n.d(t,{default:()=>se});var r=n(7757),a=n.n(r),o=n(821),l=n(9680),s=n(6904),c=n(3702),u=n(7588),i=n(7751),d=n(7826),p=n(1608),m=n(1524);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e,t,n,r,a,o,l){try{var s=e[o](l),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}var b=(0,o.createElementVNode)("header",{class:"bg-white shadow mb-4"},[(0,o.createElementVNode)("div",{class:"max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 text-purple text-center font-semibold"}," Registrar Nueva Empresa ")],-1),y={class:"lg:grid lg:grid-cols-12 lg:gap-x-5"},h={class:"py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-2"},w={class:"space-y-1"},k=(0,o.createElementVNode)("span",{class:"truncate"}," Empresas ",-1),E=(0,o.createElementVNode)("span",{class:"truncate"}," Generales ",-1),N={class:"space-y-6 sm:px-6 lg:px-0 lg:col-span-10"},V={class:"shadow sm:rounded-md"},C={class:"bg-white py-6 px-4 space-y-6 sm:p-6"},B={class:"mb-4 border-b border-purple pb-1"},S={class:"text-lg font-semibold leading-6 text-purple flex"},_=(0,o.createTextVNode)(" Generales "),D=(0,o.createElementVNode)("p",{class:"text-gray-600 text-sm"},"Después de registrar la Empresa, se podrá asignar una dirección y/o cuentas de correo.",-1),T={class:"grid grid-cols-6 gap-6"},M={class:"col-span-6 lg:col-span-2"},O=(0,o.createElementVNode)("label",{for:"name",class:"block text-sm text-gray-700"},"Nombre:",-1),P={class:"col-span-6 lg:col-span-2"},j=(0,o.createElementVNode)("label",{for:"phone_work",class:"block text-sm text-gray-700"},"Tel. Trabajo:",-1),Z={class:"col-span-6 lg:col-span-2"},A=(0,o.createElementVNode)("label",{for:"phone_fax",class:"block text-sm text-gray-700"},"Tel. Fax",-1),U={class:"grid grid-cols-6 gap-6"},z={class:"col-span-6 lg:col-span-2"},I=(0,o.createElementVNode)("label",{for:"website",class:"block text-sm text-gray-700"},"Página Web:",-1),L={class:"col-span-6 lg:col-span-2"},R=(0,o.createElementVNode)("label",{for:"type",class:"block text-sm text-gray-700"},"Tipo:",-1),F=["value","textContent"],Y={class:"col-span-6 lg:col-span-2"},G=(0,o.createElementVNode)("label",{for:"industry",class:"block text-sm text-gray-700"},"Industria:",-1),H=["value","textContent"],q={class:"grid grid-cols-6 gap-6"},W={class:"col-span-6 lg:col-span-2"},$=(0,o.createElementVNode)("label",{for:"email",class:"block text-sm text-gray-700"},[(0,o.createTextVNode)("Correo Electrónico: "),(0,o.createElementVNode)("span",{class:"text-xs"},"(principal)")],-1),Q={class:"col-span-6 lg:col-span-2"},J=(0,o.createElementVNode)("label",{for:"anual_revenue",class:"block text-sm text-gray-700"},"Ingresos anuales:",-1),K={class:"col-span-6 lg:col-span-2"},X=(0,o.createElementVNode)("label",{for:"amount_employees",class:"block text-sm text-gray-700"},"Cantidad de empleados:",-1),ee={class:"grid grid-cols-6 gap-6"},te={class:"col-span-6 lg:col-span-2"},ne=(0,o.createElementVNode)("label",{for:"assigned_to",class:"block text-sm text-gray-700"},"Asignado a:",-1),re={class:"col-span-4"},ae=(0,o.createElementVNode)("label",{for:"description",class:"block text-sm text-gray-700"},"Descripción:",-1),oe={class:"px-4 py-3 bg-gray-50 text-right sm:px-6"},le=(0,o.createTextVNode)(" Registrar ");const se={props:{user:Object},setup:function(e){var t=e,n=(0,o.ref)(!0),r=(0,o.ref)(!1),f=(0,o.ref)(!1),g=(0,o.ref)({name:null,phone_work:null,phone_fax:null,website:null,description:null,assigned:t.user.fullname,assigned_to:t.user.uuid,type:null,industry:null,anual_revenue:null,amount_employees:null}),se=(0,s.Z)(),ce=se.types,ue=se.industries,ie=(0,c.Z)(),de=ie.storeCompany,pe=ie.errors,me=function(){var e,t=(e=a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f.value=!0,e.next=3,de(v({},g.value));case 3:pe.value||l.Inertia.visit(route("marketing.company.index"),{method:"get"}),f.value=!1;case 4:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function l(e){x(o,r,a,l,s,"next",e)}function s(e){x(o,r,a,l,s,"throw",e)}l(void 0)}))});return function(){return t.apply(this,arguments)}}(),fe=function(e){r.value=!1,g.value.assigned=e.fullname,g.value.assigned_to=e.uuid};return function(e,t){var a=(0,o.resolveComponent)("Head"),l=(0,o.resolveComponent)("Link");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)(a,{title:"Crear registro de Empresa"}),b,(0,o.createElementVNode)("div",y,[(0,o.createElementVNode)("aside",h,[(0,o.createElementVNode)("nav",w,[(0,o.createVNode)(l,{href:e.route("marketing.company.index"),class:"text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm","aria-current":"page"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)((0,o.unref)(i.zTD),{class:"h-6 w-6 mr-2"}),k]})),_:1},8,["href"]),(0,o.createElementVNode)("div",{class:(0,o.normalizeClass)(["text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm",{"bg-gray-50":n.value}]),"aria-current":"generales"},[(0,o.createVNode)((0,o.unref)(i.CSq),{class:"h-6 w-6 mr-2"}),E],2),(0,o.createVNode)((0,o.unref)(p.Z),{show:f.value},null,8,["show"])])]),(0,o.createElementVNode)("div",N,[(0,o.createElementVNode)("div",V,[(0,o.createElementVNode)("div",C,[(0,o.createElementVNode)("div",B,[(0,o.createElementVNode)("h3",S,[(0,o.createVNode)((0,o.unref)(i.CSq),{class:"h-6 w-6 mr-2"}),_]),D]),(0,o.createVNode)((0,o.unref)(u.Z),{errors:(0,o.unref)(pe)},null,8,["errors"]),(0,o.createElementVNode)("div",T,[(0,o.createElementVNode)("div",M,[O,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text",name:"name",id:"name","onUpdate:modelValue":t[0]||(t[0]=function(e){return g.value.name=e}),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"},null,512),[[o.vModelText,g.value.name]])]),(0,o.createElementVNode)("div",P,[j,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text",name:"phone_work",id:"phone_work","onUpdate:modelValue":t[1]||(t[1]=function(e){return g.value.phone_work=e}),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"},null,512),[[o.vModelText,g.value.phone_work]])]),(0,o.createElementVNode)("div",Z,[A,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text",name:"phone_fax",id:"phone_fax","onUpdate:modelValue":t[2]||(t[2]=function(e){return g.value.phone_fax=e}),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"},null,512),[[o.vModelText,g.value.phone_fax]])])]),(0,o.createElementVNode)("div",U,[(0,o.createElementVNode)("div",z,[I,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"url",placeholder:"https://example.com",pattern:"https://.*",name:"website",id:"website","onUpdate:modelValue":t[3]||(t[3]=function(e){return g.value.website=e}),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"},null,512),[[o.vModelText,g.value.website]])]),(0,o.createElementVNode)("div",L,[R,(0,o.withDirectives)((0,o.createElementVNode)("select",{id:"type",name:"type","onUpdate:modelValue":t[4]||(t[4]=function(e){return g.value.type=e}),class:"mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm capitalize"},[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)((0,o.unref)(ce),(function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("option",{value:e.name,key:t,textContent:(0,o.toDisplayString)(e.name)},null,8,F)})),128))],512),[[o.vModelSelect,g.value.type]])]),(0,o.createElementVNode)("div",Y,[G,(0,o.withDirectives)((0,o.createElementVNode)("select",{id:"industry",name:"industry","onUpdate:modelValue":t[5]||(t[5]=function(e){return g.value.industry=e}),class:"mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm capitalize"},[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)((0,o.unref)(ue),(function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("option",{value:e.name,key:t,textContent:(0,o.toDisplayString)(e.name)},null,8,H)})),128))],512),[[o.vModelSelect,g.value.industry]])])]),(0,o.createElementVNode)("div",q,[(0,o.createElementVNode)("div",W,[$,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"email",name:"email",id:"email","onUpdate:modelValue":t[6]||(t[6]=function(e){return g.value.email=e}),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"},null,512),[[o.vModelText,g.value.email]])]),(0,o.createElementVNode)("div",Q,[J,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text",name:"anual_revenue",id:"anual_revenue","onUpdate:modelValue":t[7]||(t[7]=function(e){return g.value.anual_revenue=e}),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"},null,512),[[o.vModelText,g.value.anual_revenue]])]),(0,o.createElementVNode)("div",K,[X,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text",name:"amount_employees",id:"amount_employees","onUpdate:modelValue":t[8]||(t[8]=function(e){return g.value.amount_employees=e}),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"},null,512),[[o.vModelText,g.value.amount_employees]])])]),(0,o.createElementVNode)("div",ee,[(0,o.createElementVNode)("div",te,[ne,r.value?(0,o.createCommentVNode)("",!0):(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createElementBlock)("input",{key:0,class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm",type:"text",name:"assigned_to",id:"assigned_to",autocomplete:"off","onUpdate:modelValue":t[9]||(t[9]=function(e){return g.value.assigned=e}),onClick:t[10]||(t[10]=function(e){return r.value=!0})},null,512)),[[o.vModelText,g.value.assigned]]),(0,o.createVNode)((0,o.unref)(m.Z),{show:r.value,onSetChange:fe,label:"fullname",onCloseIt:t[11]||(t[11]=function(e){return r.value=!1})},null,8,["show"])]),(0,o.createElementVNode)("div",re,[ae,(0,o.withDirectives)((0,o.createElementVNode)("textarea",{name:"description",id:"description","onUpdate:modelValue":t[12]||(t[12]=function(e){return g.value.description=e}),cols:"2",class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"},null,512),[[o.vModelText,g.value.description]])])])]),(0,o.createElementVNode)("div",oe,[(0,o.createVNode)((0,o.unref)(d.Z),{disabled:f.value,type:"button",onClick:(0,o.withModifiers)(me,["prevent"])},{default:(0,o.withCtx)((function(){return[le]})),_:1},8,["disabled","onClick"])])])])])],64)}}}}}]);