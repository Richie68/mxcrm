"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[32],{6438:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7757),a=n.n(r),o=n(5166),l=n(9669),s=n.n(l);function c(e,t,n,r,a,o,l){try{var s=e[o](l),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function l(e){c(o,r,a,l,s,"next",e)}function s(e){c(o,r,a,l,s,"throw",e)}l(void 0)}))}}function i(){var e=(0,o.ref)(null),t=(0,o.ref)([]),n=(0,o.ref)(null),r=function(){var e=u(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/api/leads");case 2:n=e.sent,t.value=n.data.data;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=u(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/api/leads/"+t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=u(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.value=null,e.prev=1,e.next=4,s().post("/api/leads",t);case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),422===e.t0.response.status&&(n.value=e.t0.response.data.errors),404===e.t0.response.status&&(n.value=[],n.value=[{errors:e.t0.response.data.message}]);case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=u(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.value=null,e.prev=1,e.next=4,s().put("/api/leads/"+t.uuid,t);case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),422===e.t0.response.status&&(n.value=e.t0.response.data.errors),404===e.t0.response.status&&(n.value=[],n.value=[{errors:e.t0.response.data.message}]);case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=u(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().delete("/api/leads/"+t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{lead:e,leads:t,errors:n,getLead:l,getLeads:r,storeLead:c,updateLead:i,destroyLead:d}}},6904:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7484);function a(){return{types:[{name:""},{name:"directo"},{name:"comercial"},{name:"casa"},{name:"gobierno"}],estados:[{name:""},{name:"nuevo"},{name:"asignado"},{name:"convertido"}],sources:[{name:""},{name:"Campaña de Marketing"},{name:"Email"},{name:"Evento"},{name:"Llamada Telefónica"},{name:"Referido"},{name:"Relaciones Públicas"},{name:"Sitio Web"}],getName:function(e){return e?"".concat(e.firstname," ").concat(e.lastname):"NA"},getDate:function(e){return r(e).format("YYYY-MM-DD")},userLevel:function(e){return 0==e?"Master":1==e?"Administrador":2==e?"Gerente":3==e?"Ejecutivo":4==e?"Cliente":"NA"},getStatus:function(e){return 0==e?"Suspendido":1==e?"Activo":"NA"},industries:[{name:""},{name:"Textile"},{name:"Banca"},{name:"Biotecnología"},{name:"Química"},{name:"Comunicaciones"},{name:"Construcción"},{name:"Consultoría"},{name:"Educación"},{name:"Electrónica"},{name:"Energía"},{name:"Ingeniería"},{name:"Entretenimiento"},{name:"Medio ambiente"},{name:"Finanzas"},{name:"Gobierno"},{name:"Salud"},{name:"Hospitalidad"},{name:"Seguros"},{name:"Maquinaria"},{name:"Fabricación"},{name:"Medios de comunicación"},{name:"Sin ánimo de lucro"},{name:"Recreación"},{name:"Minoristas"},{name:"Envíos"},{name:"Tecnología"},{name:"Telecomunicaciones"},{name:"Transporte"},{name:"Servicios públicos"},{name:"Otro"}],userStatus:function(e){return 0==e?"Inactivo":1==e?"Activo":2==e?"Permiso de ausencia":"NA"},addressType:[{name:"principal"},{name:"trabajo"},{name:"personal"},{name:"facturacion"},{name:"otro"}],salutations:[{salute:""},{salute:"Srta."},{salute:"Sra."},{salute:"Sr."}],statusClass:function(e){return 0==e?"bg-red-500":1==e?"bg-green-100 text-green-800":2==e?"bg-yellow-400":""},getLongDate:function(e){return r(e).format("YYYY-MM-DD HH:mm")}}}},3442:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(5166),a=n(3279),o=n.n(a),l=n(8744),s={key:0,class:"relative z-20"},c={class:"flex"},u=(0,r.createTextVNode)("Close"),i={key:0,class:"bg-white border mt-2 py-4 space-y-2 rounded-md max-h-[300px] overflow-y-scroll min-w-full absolute top-full z-20"},d=["textContent","onClick"];const p={props:{show:Boolean,label:String},emits:["set-change","close-it"],setup:function(e,t){var n=t.emit,a=e,p=(0,r.ref)(""),m=(0,r.ref)(null);(0,r.watch)((function(){return a.show}),(function(e,t){e&&p.autofocus})),(0,r.watch)(p,o()((function(e){""==p.value?m.value=null:axios.post(route("api.search-employees"),{search:e}).then((function(e){m.value=e.data}))}),300));return function(t,a){return e.show?((0,r.openBlock)(),(0,r.createElementBlock)("div",s,[(0,r.createElementVNode)("div",c,[(0,r.withDirectives)((0,r.createElementVNode)("input",{type:"search",name:"search","onUpdate:modelValue":a[0]||(a[0]=function(e){return(0,r.isRef)(p)?p.value=e:p=e}),autocomplete:"off",autofocus:"",placeholder:"Buscar ...",class:"mt-1 mr-2 block w-full border border-gray-300 rounded-md shadow-sm px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"},null,512),[[r.vModelText,(0,r.unref)(p)]]),(0,r.createVNode)((0,r.unref)(l.Z),{onClick:a[1]||(a[1]=function(e){return t.$emit("close-it")})},{default:(0,r.withCtx)((function(){return[u]})),_:1})]),(0,r.unref)(m)?((0,r.openBlock)(),(0,r.createElementBlock)("ul",i,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)((0,r.unref)(m),(function(t){return(0,r.openBlock)(),(0,r.createElementBlock)("li",{class:"text-sm text-purple hover:bg-gray-200 py-2 pl-4 pr-2",key:t.uuid,textContent:(0,r.toDisplayString)(t[e.label]),onClick:function(e){return n("set-change",t),void(p.value="")}},null,8,d)})),128))])):(0,r.createCommentVNode)("",!0)])):(0,r.createCommentVNode)("",!0)}}}},4187:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(5166),a=n(3293),o={key:0,class:"grid grid-cols-6 gap-6"},l={class:"col-span-6 text-right"};const s={props:{errors:Object},setup:function(e){return function(t,n){return(0,r.openBlock)(),(0,r.createBlock)(r.Transition,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 -translate-y-1","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition ease-in duration-150","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 -translate-y-1"},{default:(0,r.withCtx)((function(){return[e.errors?((0,r.openBlock)(),(0,r.createElementBlock)("div",o,[(0,r.createElementVNode)("div",l,[(0,r.createElementVNode)("span",{class:"inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-600 text-white",onClick:n[0]||(n[0]=function(t){return e.errors=null})},[(0,r.createVNode)((0,r.unref)(a.b0D),{class:"w-4 h-4"})])]),((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e.errors,(function(t,n){return(0,r.openBlock)(),(0,r.createElementBlock)("div",{key:n,class:(0,r.normalizeClass)(["bg-red-600 text-white rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0",[1==e.errors.length?"col-span-6":""]])},[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(t,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("p",{key:e,class:"text-sm"},(0,r.toDisplayString)(e),1)})),128))],2)})),128))])):(0,r.createCommentVNode)("",!0)]})),_:1})}}}},8744:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(5166),a=["type"];const o=(0,r.defineComponent)({props:{type:{type:String,default:"submit"}}});o.render=function(e,t,n,o,l,s){return(0,r.openBlock)(),(0,r.createElementBlock)("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-purple border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-dark active:bg-purple-dark focus:outline-none focus:border-purple-light focus:ring focus:ring-purple-light disabled:opacity-25 transition"},[(0,r.renderSlot)(e.$slots,"default")],8,a)};const l=o},5032:(e,t,n)=>{n.r(t),n.d(t,{default:()=>we});var r=n(7757),a=n.n(r),o=n(5166),l=n(9680),s=n(6904),c=n(4187),u=n(6438),i=n(3293),d=n(8744),p=n(3442);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t,n,r,a,o,l){try{var s=e[o](l),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}var x=(0,o.createElementVNode)("header",{class:"bg-white shadow mb-4"},[(0,o.createElementVNode)("div",{class:"max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 text-purple text-center font-semibold"}," Registrar Nuevo Contacto ")],-1),b={class:"lg:grid lg:grid-cols-12 lg:gap-x-5 pb-20"},y={class:"py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-2"},h={class:"space-y-1"},w=(0,o.createElementVNode)("span",{class:"truncate"}," Contactos ",-1),V=(0,o.createElementVNode)("span",{class:"truncate"}," Generales ",-1),k={key:0,class:"flex justify-center py-3 text-purple"},E=[(0,o.createElementVNode)("svg",{class:"animate-spin -ml-1 mr-3 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[(0,o.createElementVNode)("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),(0,o.createElementVNode)("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1)],N={class:"space-y-6 sm:px-6 lg:px-0 lg:col-span-10"},C={class:"shadow sm:rounded-md"},B={class:"bg-white py-6 px-4 space-y-6 sm:p-6"},_={class:"mb-4 border-b border-purple pb-1"},D={class:"text-lg font-semibold leading-6 text-purple flex"},T=(0,o.createTextVNode)(" Generales "),M=(0,o.createElementVNode)("p",{class:"text-gray-600 text-sm"},"Después de registrar al Contacto, se podrá asignar una dirección y/o cuentas de correo adicionales",-1),S={class:"grid grid-cols-6 gap-6"},O={class:"col-span-6 lg:col-span-2"},j=(0,o.createElementVNode)("label",{for:"salutation",class:"block text-sm text-gray-700"},"Saludo:",-1),U=["value","textContent"],P={class:"col-span-6 lg:col-span-2"},L=(0,o.createElementVNode)("label",{for:"firstname",class:"block text-sm text-gray-700"},"Nombre:",-1),A={class:"col-span-6 lg:col-span-2"},Z=(0,o.createElementVNode)("label",{for:"lastname",class:"block text-sm text-gray-700"},"Apellido:",-1),F={class:"grid grid-cols-6 gap-6"},R={class:"col-span-6 lg:col-span-2"},Y=(0,o.createElementVNode)("label",{for:"phone_mobil",class:"block text-sm text-gray-700"},"Tel. Celular:",-1),z={class:"col-span-6 lg:col-span-2"},H=(0,o.createElementVNode)("label",{for:"phone_work",class:"block text-sm text-gray-700"},"Tel. Trabajo:",-1),G={class:"col-span-6 lg:col-span-2"},I=(0,o.createElementVNode)("label",{for:"phone_fax",class:"block text-sm text-gray-700"},"Tel. Fax",-1),X={class:"grid grid-cols-6 gap-6"},$={class:"col-span-6 lg:col-span-2"},q=(0,o.createElementVNode)("label",{for:"title",class:"block text-sm text-gray-700"},"Puesto:",-1),Q={class:"col-span-6 lg:col-span-2"},W=(0,o.createElementVNode)("label",{for:"department",class:"block text-sm text-gray-700"},"Área de Trabajo:",-1),J={class:"col-span-6 lg:col-span-2"},K=(0,o.createElementVNode)("label",{for:"company",class:"block text-sm text-gray-700"},"Empresa:",-1),ee={class:"grid grid-cols-6 gap-6"},te={class:"col-span-6 lg:col-span-2"},ne=(0,o.createElementVNode)("label",{for:"email",class:"block text-sm text-gray-700"},[(0,o.createTextVNode)("Correo Electrónico: "),(0,o.createElementVNode)("span",{class:"text-xs"},"(principal)")],-1),re={class:"col-span-6 lg:col-span-2"},ae=(0,o.createElementVNode)("label",{for:"assistant",class:"block text-sm text-gray-700"},"Asistente:",-1),oe={class:"col-span-6 lg:col-span-2"},le=(0,o.createElementVNode)("label",{for:"assistant_phone",class:"block text-sm text-gray-700"},"Tel. Asistente",-1),se={class:"flex flex-col w-full"},ce=(0,o.createElementVNode)("label",{for:"description",class:"block text-sm text-gray-700"},"Descripción del Contacto:",-1),ue={class:"grid grid-cols-6 gap-6"},ie={class:"col-span-6 lg:col-span-2"},de=(0,o.createElementVNode)("label",{for:"assigned_to",class:"block text-sm text-gray-700"},"Asignado a:",-1),pe={class:"col-span-6 lg:col-span-2"},me=(0,o.createElementVNode)("label",{for:"source",class:"block text-sm text-gray-700"},"Toma de Contacto:",-1),fe=["value","textContent"],ve={class:"col-span-2 lg:col-span-2"},ge={class:"flex h-full items-center justify-start relative"},xe={class:"flex items-center h-5"},be=(0,o.createElementVNode)("div",{class:"ml-3 text-sm"},[(0,o.createElementVNode)("label",{for:"call",class:"font-medium"},"Recibir llamadas:")],-1),ye={class:"px-4 py-3 bg-gray-50 text-right sm:px-6"},he=(0,o.createTextVNode)(" Registrar ");const we={props:{user:Object},setup:function(e){var t=e,n=(0,o.ref)(!1),r=(0,o.ref)(!1),m=(0,o.ref)({salutation:null,firstname:null,lastname:null,phone_work:null,phone_mobil:null,phone_fax:null,title:null,department:null,company_id:null,assigned:t.user.fullname,assigned_to:t.user.uuid,description:null,call:!0,assistant:null,assistant_phone:null,status:1,source:null,created_by:t.user.uuid}),v=(0,s.Z)(),we=v.salutations,Ve=v.sources,ke=(0,u.Z)(),Ee=ke.storeLead,Ne=ke.errors,Ce=function(){var e,t=(e=a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.value=!0,e.next=3,Ee(f({},m.value));case 3:n.value=!1,Ne.value||l.Inertia.visit(route("marketing.contacts.index"),{method:"get"});case 5:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function l(e){g(o,r,a,l,s,"next",e)}function s(e){g(o,r,a,l,s,"throw",e)}l(void 0)}))});return function(){return t.apply(this,arguments)}}(),Be=function(e){r.value=!1,m.value.assigned=e.fullname,m.value.assigned_to=e.uuid};return function(e,t){var a=(0,o.resolveComponent)("Head"),l=(0,o.resolveComponent)("Link");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)(a,{title:"Registrar Contacto"}),x,(0,o.createElementVNode)("div",b,[(0,o.createElementVNode)("aside",y,[(0,o.createElementVNode)("nav",h,[(0,o.createVNode)(l,{href:e.route("marketing.contacts.index"),class:"text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm","aria-current":"page"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)((0,o.unref)(i.zTD),{class:"h-6 w-6 mr-2"}),w]})),_:1},8,["href"]),(0,o.createVNode)(l,{href:"#",class:"text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm bg-gray-50","aria-current":"page"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)((0,o.unref)(i.XOb),{class:"h-6 w-6 mr-2"}),V]})),_:1}),n.value?((0,o.openBlock)(),(0,o.createElementBlock)("div",k,E)):(0,o.createCommentVNode)("",!0)])]),(0,o.createElementVNode)("div",N,[(0,o.createElementVNode)("div",C,[(0,o.createElementVNode)("div",B,[(0,o.createElementVNode)("div",_,[(0,o.createElementVNode)("h3",D,[(0,o.createVNode)((0,o.unref)(i.XOb),{class:"h-6 w-6 mr-2"}),T]),M]),(0,o.createVNode)((0,o.unref)(c.Z),{errors:(0,o.unref)(Ne)},null,8,["errors"]),(0,o.createElementVNode)("div",S,[(0,o.createElementVNode)("div",O,[j,(0,o.withDirectives)((0,o.createElementVNode)("select",{id:"salutation",name:"salutation","onUpdate:modelValue":t[0]||(t[0]=function(e){return m.value.salutation=e}),class:"mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"},[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)((0,o.unref)(we),(function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("option",{value:e.salute,key:t,textContent:(0,o.toDisplayString)(e.salute)},null,8,U)})),128))],512),[[o.vModelSelect,m.value.salutation]])]),(0,o.createElementVNode)("div",P,[L,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text",name:"firstname",id:"firstname","onUpdate:modelValue":t[1]||(t[1]=function(e){return m.value.firstname=e}),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"},null,512),[[o.vModelText,m.value.firstname]])]),(0,o.createElementVNode)("div",A,[Z,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text",name:"lastname",id:"lastname","onUpdate:modelValue":t[2]||(t[2]=function(e){return m.value.lastname=e}),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"},null,512),[[o.vModelText,m.value.lastname]])])]),(0,o.createElementVNode)("div",F,[(0,o.createElementVNode)("div",R,[Y,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text",name:"phone_mobil",id:"phone_mobil","onUpdate:modelValue":t[3]||(t[3]=function(e){return m.value.phone_mobil=e}),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"},null,512),[[o.vModelText,m.value.phone_mobil]])]),(0,o.createElementVNode)("div",z,[H,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text",name:"phone_work",id:"phone_work","onUpdate:modelValue":t[4]||(t[4]=function(e){return m.value.phone_work=e}),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"},null,512),[[o.vModelText,m.value.phone_work]])]),(0,o.createElementVNode)("div",G,[I,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text",name:"phone_fax",id:"phone_fax","onUpdate:modelValue":t[5]||(t[5]=function(e){return m.value.phone_fax=e}),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"},null,512),[[o.vModelText,m.value.phone_fax]])])]),(0,o.createElementVNode)("div",X,[(0,o.createElementVNode)("div",$,[q,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text",name:"title",id:"title","onUpdate:modelValue":t[6]||(t[6]=function(e){return m.value.title=e}),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"},null,512),[[o.vModelText,m.value.title]])]),(0,o.createElementVNode)("div",Q,[W,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text",name:"department",id:"department","onUpdate:modelValue":t[7]||(t[7]=function(e){return m.value.department=e}),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"},null,512),[[o.vModelText,m.value.department]])]),(0,o.createElementVNode)("div",J,[K,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text",name:"company",id:"company","onUpdate:modelValue":t[8]||(t[8]=function(e){return m.value.company=e}),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"},null,512),[[o.vModelText,m.value.company]])])]),(0,o.createElementVNode)("div",ee,[(0,o.createElementVNode)("div",te,[ne,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"email",name:"email",id:"email","onUpdate:modelValue":t[9]||(t[9]=function(e){return m.value.email=e}),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"},null,512),[[o.vModelText,m.value.email]])]),(0,o.createElementVNode)("div",re,[ae,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text",name:"assistant",id:"assistant","onUpdate:modelValue":t[10]||(t[10]=function(e){return m.value.assistant=e}),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"},null,512),[[o.vModelText,m.value.assistant]])]),(0,o.createElementVNode)("div",oe,[le,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text",name:"assistant_phone",id:"assistant_phone","onUpdate:modelValue":t[11]||(t[11]=function(e){return m.value.assistant_phone=e}),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"},null,512),[[o.vModelText,m.value.assistant_phone]])])]),(0,o.createElementVNode)("div",se,[ce,(0,o.withDirectives)((0,o.createElementVNode)("textarea",{name:"description",id:"description","onUpdate:modelValue":t[12]||(t[12]=function(e){return m.value.description=e}),rows:"3",class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"},null,512),[[o.vModelText,m.value.description]])]),(0,o.createElementVNode)("div",ue,[(0,o.createElementVNode)("div",ie,[de,r.value?(0,o.createCommentVNode)("",!0):(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createElementBlock)("input",{key:0,class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm",type:"text",name:"assigned_to",id:"assigned_to",autocomplete:"off","onUpdate:modelValue":t[13]||(t[13]=function(e){return m.value.assigned=e}),onClick:t[14]||(t[14]=function(e){return r.value=!0})},null,512)),[[o.vModelText,m.value.assigned]]),(0,o.createVNode)((0,o.unref)(p.Z),{show:r.value,onSetChange:Be,url:e.route("api.search-employees"),label:"fullname",onCloseIt:t[15]||(t[15]=function(e){return r.value=!1})},null,8,["show","url"])]),(0,o.createElementVNode)("div",pe,[me,(0,o.withDirectives)((0,o.createElementVNode)("select",{id:"source",name:"source","onUpdate:modelValue":t[16]||(t[16]=function(e){return m.value.source=e}),class:"mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"},[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)((0,o.unref)(Ve),(function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("option",{value:e.name,key:t,textContent:(0,o.toDisplayString)(e.name)},null,8,fe)})),128))],512),[[o.vModelSelect,m.value.source]])]),(0,o.createElementVNode)("div",ve,[(0,o.createElementVNode)("div",ge,[(0,o.createElementVNode)("div",xe,[(0,o.withDirectives)((0,o.createElementVNode)("input",{id:"call",name:"call",type:"checkbox","onUpdate:modelValue":t[17]||(t[17]=function(e){return m.value.call=e}),class:"focus:ring-purple h-4 w-4 text-purple border-gray-300 rounded"},null,512),[[o.vModelCheckbox,m.value.call]])]),be])])])]),(0,o.createElementVNode)("div",ye,[(0,o.createVNode)((0,o.unref)(d.Z),{type:"button",disabled:n.value,onClick:(0,o.withModifiers)(Ce,["prevent"])},{default:(0,o.withCtx)((function(){return[he]})),_:1},8,["disabled","onClick"])])])])])],64)}}}}}]);