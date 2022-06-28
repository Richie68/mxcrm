"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8081],{6258:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7757),r=n.n(a),o=n(821),s=n(9669),c=n.n(s);function l(e,t,n,a,r,o,s){try{var c=e[o](s),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(a,r)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var o=e.apply(t,n);function s(e){l(o,a,r,s,c,"next",e)}function c(e){l(o,a,r,s,c,"throw",e)}s(void 0)}))}}function u(){var e=(0,o.ref)([]),t=(0,o.ref)([]),n=(0,o.ref)(null),a=function(){var t=i(r().mark((function t(){var n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c().get("/api/agencies");case 2:n=t.sent,e.value=n.data.data;case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var e=i(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/api/agencies/"+t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=i(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.value=null,e.prev=1,e.next=4,c().post("/api/agencies",t);case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),422===e.t0.response.status&&(n.value=e.t0.response.data.errors),404===e.t0.response.status&&(n.value=[],n.value=[{errors:e.t0.response.data.message}]);case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=i(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.value=null,e.prev=1,e.next=4,c().put("/api/agencies/"+t.uuid,t);case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),422===e.t0.response.status&&(n.value=e.t0.response.data.errors),404===e.t0.response.status&&(n.value=[],n.value=[{errors:e.t0.response.data.message}]);case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=i(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().delete("/api/agencies/"+t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{errors:n,agency:t,agencies:e,getAgency:s,getAgencies:a,storeAgency:l,updateAgency:u,destroyAgency:d}}},6904:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7484);function r(){return{types:[{name:""},{name:"directo"},{name:"comercial"},{name:"casa"},{name:"gobierno"}],estados:[{name:""},{name:"nuevo"},{name:"asignado"},{name:"convertido"}],sources:[{name:""},{name:"Campaña de Marketing"},{name:"Email"},{name:"Evento"},{name:"Llamada Telefónica"},{name:"Referido"},{name:"Relaciones Públicas"},{name:"Sitio Web"}],getName:function(e){return e?"".concat(e.firstname," ").concat(e.lastname):"NA"},getDate:function(e){return a(e).format("YYYY-MM-DD")},taskState:function(e){return 0==e?"No iniciada":1==e?"En progreso":2==e?"Completada":3==e?"Pendiente de información":4==e?"Retrasada":"NA"},userLevel:function(e){return 0==e?"Master":1==e?"Administrador":2==e?"Gerente":3==e?"Ejecutivo":4==e?"Cliente":"NA"},getStatus:function(e){return 0==e?"Suspendido":1==e?"Activo":"NA"},currencies:[{name:"usd"},{name:"mxn"},{name:"cad"},{name:"other"}],industries:[{name:""},{name:"Textile"},{name:"Banca"},{name:"Biotecnología"},{name:"Química"},{name:"Comunicaciones"},{name:"Construcción"},{name:"Consultoría"},{name:"Educación"},{name:"Electrónica"},{name:"Energía"},{name:"Ingeniería"},{name:"Entretenimiento"},{name:"Medio ambiente"},{name:"Finanzas"},{name:"Gobierno"},{name:"Salud"},{name:"Hospitalidad"},{name:"Seguros"},{name:"Maquinaria"},{name:"Fabricación"},{name:"Medios de comunicación"},{name:"Sin ánimo de lucro"},{name:"Recreación"},{name:"Minoristas"},{name:"Envíos"},{name:"Tecnología"},{name:"Telecomunicaciones"},{name:"Transporte"},{name:"Servicios públicos"},{name:"Otro"}],userStatus:function(e){return 0==e?"Inactivo":1==e?"Activo":2==e?"Permiso de ausencia":"NA"},addressType:[{name:"principal"},{name:"trabajo"},{name:"personal"},{name:"facturacion"},{name:"otro"}],salutations:[{salute:""},{salute:"Srta."},{salute:"Sra."},{salute:"Sr."}],statusClass:function(e){return 0==e?"bg-red-500":1==e?"bg-green-100 text-green-800":2==e?"bg-yellow-400":""},getLongDate:function(e){return a(e).format("YYYY-MM-DD HH:mm")},productTypes:[{name:"Good",translate:"Bien",value:"Good"},{name:"Service",translate:"Servicio",value:"Service"},{name:"Other",translate:"Otro",value:"Other"}],simpleStatus:function(e){return 0==e?"No":1==e?"Si":"NA"},statusContacto:[{estatus:"nuevo"},{estatus:"convertido"},{estatus:"asignado"}],convertidoClass:function(e){return"Sitio Web"==e?"bg-red-100":"Referido"==e?"bg-yellow-100 text-green-800":"nuevo"==e?"bg-gray-200":"convertido"==e?"bg-green-100 text-green-600":"bg-gray-50"}}}},7070:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(821),r={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},o=(0,a.createElementVNode)("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"​",-1),s={class:"inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"},c={class:"sm:flex sm:items-start"},l={class:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},i={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},u=(0,a.createTextVNode)(" Eliminar Registro "),d=(0,a.createElementVNode)("div",{class:"mt-2"},[(0,a.createElementVNode)("p",{class:"text-sm text-gray-500"},[(0,a.createTextVNode)(" ¿Está seguro(a) de querer eliminar el Registro? "),(0,a.createElementVNode)("br"),(0,a.createTextVNode)(" En algunos casos, ya no se podrá recuperar. "),(0,a.createElementVNode)("br"),(0,a.createTextVNode)(" Si tienes dudas consulta con el área de Desarrollo Web de Transcabo. ")])],-1),m={class:"mt-5 sm:mt-4 sm:ml-10 sm:pl-4 sm:flex"},p={key:0,class:"flex"},f=[(0,a.createElementVNode)("svg",{class:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[(0,a.createElementVNode)("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),(0,a.createElementVNode)("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1)],x={key:1};var g=n(8342),v=n(2494),h=n(7751);const y={components:{Dialog:g.Vq,DialogTitle:g.$N,DialogOverlay:g.t9,TransitionRoot:v.Q,TransitionChild:v.x,TrashIcon:h.XHJ},props:{showModal:{type:Boolean,default:!1}},setup:function(e){var t=(0,a.ref)(e.showModal),n=(0,a.ref)(!1);return(0,a.watch)((function(){return e.showModal}),(function(e,a){n.value=!1,t.value=e})),{open:t,loading:n}},methods:{closeIt:function(){this.loading=!1,this.$emit("closeModal")},deleteItem:function(){this.loading=!0,this.$emit("confirmed")}}};const w=(0,n(3744).Z)(y,[["render",function(e,t,n,g,v,h){var y=(0,a.resolveComponent)("DialogOverlay"),w=(0,a.resolveComponent)("TransitionChild"),N=(0,a.resolveComponent)("TrashIcon"),b=(0,a.resolveComponent)("DialogTitle"),V=(0,a.resolveComponent)("Dialog"),E=(0,a.resolveComponent)("TransitionRoot");return(0,a.openBlock)(),(0,a.createBlock)(E,{as:"template",show:g.open},{default:(0,a.withCtx)((function(){return[(0,a.createVNode)(V,{as:"div",class:"fixed z-10 inset-0 overflow-y-auto",onClose:t[2]||(t[2]=function(e){return h.closeIt()})},{default:(0,a.withCtx)((function(){return[(0,a.createElementVNode)("div",r,[(0,a.createVNode)(w,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:(0,a.withCtx)((function(){return[(0,a.createVNode)(y,{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})]})),_:1}),o,(0,a.createVNode)(w,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:(0,a.withCtx)((function(){return[(0,a.createElementVNode)("div",s,[(0,a.createElementVNode)("div",c,[(0,a.createElementVNode)("div",l,[(0,a.createVNode)(N,{class:"h-6 w-6 text-red-600","aria-hidden":"true"})]),(0,a.createElementVNode)("div",i,[(0,a.createVNode)(b,{as:"h3",class:"text-lg leading-6 font-medium text-gray-900"},{default:(0,a.withCtx)((function(){return[u]})),_:1}),d])]),(0,a.createElementVNode)("div",m,[(0,a.createElementVNode)("button",{type:"button",class:"inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto sm:text-sm",onClick:t[0]||(t[0]=function(e){return h.deleteItem()})},[g.loading?((0,a.openBlock)(),(0,a.createElementBlock)("span",p,f)):((0,a.openBlock)(),(0,a.createElementBlock)("span",x,"Eliminar"))]),(0,a.createElementVNode)("button",{type:"button",class:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",onClick:t[1]||(t[1]=function(e){return h.closeIt()}),ref:"cancelButtonRef"}," Cancelar ",512)])])]})),_:1})])]})),_:1})]})),_:1},8,["show"])}]])},7588:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(821),r=n(7751),o={key:0,class:"grid grid-cols-6 gap-6"},s={class:"col-span-6 text-right"};const c={props:{errors:Object},setup:function(e){return function(t,n){return(0,a.openBlock)(),(0,a.createBlock)(a.Transition,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 -translate-y-1","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition ease-in duration-150","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 -translate-y-1"},{default:(0,a.withCtx)((function(){return[e.errors?((0,a.openBlock)(),(0,a.createElementBlock)("div",o,[(0,a.createElementVNode)("div",s,[(0,a.createElementVNode)("span",{class:"inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-600 text-white",onClick:n[0]||(n[0]=function(t){return e.errors=null})},[(0,a.createVNode)((0,a.unref)(r.b0D),{class:"w-4 h-4"})])]),((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(e.errors,(function(t,n){return(0,a.openBlock)(),(0,a.createElementBlock)("div",{key:n,class:(0,a.normalizeClass)(["bg-red-600 text-white rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0",[1==e.errors.length?"col-span-6":""]])},[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(t,(function(e){return(0,a.openBlock)(),(0,a.createElementBlock)("p",{key:e,class:"text-sm"},(0,a.toDisplayString)(e),1)})),128))],2)})),128))])):(0,a.createCommentVNode)("",!0)]})),_:1})}}}},8081:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var a=n(821),r=n(9680),o=n(7751),s=n(6258),c=n(6904),l=n(7588),i=n(7070);var u={class:"flex max-w-6xl mx-auto"},d={class:"flex justify-around w-full py-2 text-purple font-semibold text-2xl tracking-widest uppercase"},m=(0,a.createElementVNode)("span",null,"Agencias",-1),p=(0,a.createTextVNode)(" Nueva "),f={class:"flex flex-col md:flex-row px-10 md:px-4 lg:pl-0 max-w-6xl mx-auto"},x={class:"w-full order-last md:order-first"},g={class:"py-2 align-middle mx-auto"},v={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},h={class:"min-w-full divide-y divide-gray-200"},y=(0,a.createElementVNode)("thead",{class:"bg-gray-50 font-medium text-gray-500 uppercase tracking-wider"},[(0,a.createElementVNode)("tr",null,[(0,a.createElementVNode)("th",{scope:"col",class:"px-6 py-3 text-left text-xs"}," Nombre "),(0,a.createElementVNode)("th",{scope:"col",class:"px-6 py-3 text-left text-xs"}," Descripción "),(0,a.createElementVNode)("th",{scope:"col",class:"px-6 py-3 text-left text-xs"}," Website "),(0,a.createElementVNode)("th",{scope:"col",class:"px-6 py-3 text-left text-xs"}," Registrado por: "),(0,a.createElementVNode)("th",{scope:"col",class:"px-6 py-3 text-left text-xs"}," Estatus "),(0,a.createElementVNode)("th",{scope:"col",class:"px-6 py-3 text-right text-xs"}," Acc. ")])],-1),w={class:"bg-white divide-y divide-gray-200"},N={class:"px-6 py-4 whitespace-nowrap cursor-pointer font-semibold text-purple hover:text-blue-600"},b={class:"px-6 py-4 whitespace-nowrap"},V={class:"px-6 py-4 whitespace-nowrap"},E={class:"flex"},k=["href"],C={class:"px-6 py-4 whitespace-nowrap"},B={class:"px-6 py-4"},S={class:"px-6 py-4 text-right"},T=["onClick"],D={key:0,class:"text-xs text-gray-700 whitespace-nowrap"},A={colspan:"7",class:"px-6 py-4 text-center whitespace-nowrap"},M={class:"flex"},R={class:"flex items-center mx-auto"},I=(0,a.createTextVNode)(" No hay registros ");const j={props:{user:Object},setup:function(e){var t=(0,s.Z)(),n=t.agencies,j=t.getAgencies,O=t.destroyAgency,Z=t.errors,_=(0,c.Z)().getStatus,L=(0,a.ref)(null),Y=(0,a.ref)(!1);(0,a.onMounted)(j());var H=function(){Y.value=!1},F=function(){O(L.value),Y.value=!1,Z.value||r.Inertia.visit(route("ventas.agencies.index"),{method:"get"})};return function(e,t){var r=(0,a.resolveComponent)("Head"),s=(0,a.resolveComponent)("Link");return(0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,[(0,a.createVNode)(r,{title:"Listado de Agencias"}),(0,a.createElementVNode)("div",u,[(0,a.createElementVNode)("h1",d,[m,(0,a.createVNode)(s,{class:"inline-flex items-center px-2 py-0 bg-purple border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-dark active:bg-purple-dark focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple-light disabled:opacity-25 transition",href:e.route("ventas.agencies.create")},{default:(0,a.withCtx)((function(){return[(0,a.createVNode)((0,a.unref)(o.pOD),{class:"w-4 h-4 mr-1"}),p]})),_:1},8,["href"])])]),(0,a.createElementVNode)("div",f,[(0,a.createElementVNode)("div",x,[(0,a.createElementVNode)("div",g,[(0,a.createVNode)((0,a.unref)(l.Z),{errors:(0,a.unref)(Z)},null,8,["errors"]),(0,a.createElementVNode)("div",v,[(0,a.createElementVNode)("table",h,[y,(0,a.createElementVNode)("tbody",w,[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)((0,a.unref)(n),(function(t){var n;return(0,a.openBlock)(),(0,a.createElementBlock)("tr",{class:"text-xs text-gray-700 whitespace-nowrap",key:t.uuid},[(0,a.createElementVNode)("td",N,[(0,a.createVNode)(s,{href:e.route("ventas.agencies.show",t.uuid)},{default:(0,a.withCtx)((function(){return[(0,a.createTextVNode)((0,a.toDisplayString)(t.name),1)]})),_:2},1032,["href"])]),(0,a.createElementVNode)("td",b,(0,a.toDisplayString)(t.description),1),(0,a.createElementVNode)("td",V,[(0,a.createElementVNode)("div",E,[(0,a.createTextVNode)((0,a.toDisplayString)(t.website)+" ",1),(0,a.createElementVNode)("a",{href:t.website,target:"_blank"},[(0,a.createVNode)((0,a.unref)(o.h0n),{class:"w-4 h-4 ml-2 text-gray-400"})],8,k)])]),(0,a.createElementVNode)("td",C,(0,a.toDisplayString)(null===(n=t.creator)||void 0===n?void 0:n.fullname),1),(0,a.createElementVNode)("td",B,(0,a.toDisplayString)((0,a.unref)(_)(t.status)),1),(0,a.createElementVNode)("td",S,[e.$page.props.user.level<2?((0,a.openBlock)(),(0,a.createElementBlock)("button",{key:0,onClick:(0,a.withModifiers)((function(e){return n=t.uuid,L.value=n,void(Y.value=!0);var n}),["prevent"])},[(0,a.createVNode)((0,a.unref)(o.XHJ),{class:"w-4 h-4 text-red-500"})],8,T)):(0,a.createCommentVNode)("",!0)])])})),128)),0==(0,a.unref)(n).length?((0,a.openBlock)(),(0,a.createElementBlock)("tr",D,[(0,a.createElementVNode)("td",A,[(0,a.createElementVNode)("div",M,[(0,a.createElementVNode)("div",R,[(0,a.createVNode)((0,a.unref)(o.kSp),{class:"w-6 h-6 text-purple mr-2"}),I])])])])):(0,a.createCommentVNode)("",!0)])])])])]),(0,a.createVNode)((0,a.unref)(i.Z),{showModal:Y.value,onConfirmed:F,onCloseModal:H},null,8,["showModal"])])],64)}}}}}]);