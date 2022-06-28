"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7934],{6904:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(7484);function a(){return{dayjs:o,types:[{name:""},{name:"directo"},{name:"comercial"},{name:"casa"},{name:"gobierno"}],estados:[{name:""},{name:"nuevo"},{name:"asignado"},{name:"convertido"}],sources:[{name:""},{name:"Campaña de Marketing"},{name:"Email"},{name:"Evento"},{name:"Llamada Telefónica"},{name:"Referido"},{name:"Relaciones Públicas"},{name:"Sitio Web"}],getName:function(e){return e?"".concat(e.firstname," ").concat(e.lastname):"NA"},getDate:function(e){return o(e).format("YYYY-MM-DD")},taskState:function(e){return 0==e?"No iniciada":1==e?"En progreso":2==e?"Completada":3==e?"Pendiente de información":4==e?"Retrasada":"NA"},userLevel:function(e){return 0==e?"Master":1==e?"Administrador":2==e?"Gerente":3==e?"Ejecutivo":4==e?"Cliente":"NA"},getStatus:function(e){return 0==e?"Suspendido":1==e?"Activo":"NA"},statesList:[{name:"Sin Iniciar",value:0},{name:"En Progreso",value:1},{name:"Pendiente de Información",value:2},{name:"Retresada",value:3},{name:"Completada",value:4}],currencies:[{name:"usd"},{name:"mxn"},{name:"cad"},{name:"other"}],stateNames:function(e){return 0==e?"Sin Iniciar":1==e?"En Progreso":2==e?"Pendiente de Información":3==e?"Retresada":4==e?"Completada":"NA"},industries:[{name:""},{name:"Textile"},{name:"Banca"},{name:"Biotecnología"},{name:"Química"},{name:"Comunicaciones"},{name:"Construcción"},{name:"Consultoría"},{name:"Educación"},{name:"Electrónica"},{name:"Energía"},{name:"Ingeniería"},{name:"Entretenimiento"},{name:"Medio ambiente"},{name:"Finanzas"},{name:"Gobierno"},{name:"Salud"},{name:"Hospitalidad"},{name:"Seguros"},{name:"Maquinaria"},{name:"Fabricación"},{name:"Medios de comunicación"},{name:"Sin ánimo de lucro"},{name:"Recreación"},{name:"Minoristas"},{name:"Envíos"},{name:"Tecnología"},{name:"Telecomunicaciones"},{name:"Transporte"},{name:"Servicios públicos"},{name:"Otro"}],userStatus:function(e){return 0==e?"Inactivo":1==e?"Activo":2==e?"Permiso de ausencia":"NA"},addressType:[{name:"principal"},{name:"trabajo"},{name:"personal"},{name:"facturacion"},{name:"otro"}],salutations:[{salute:""},{salute:"Srta."},{salute:"Sra."},{salute:"Sr."}],statusClass:function(e){return 0==e?"bg-red-500":1==e?"bg-green-100 text-green-800":2==e?"bg-yellow-400":""},getLongDate:function(e){return o(e).format("YYYY-MM-DD HH:mm")},productTypes:[{name:"Good",translate:"Bien",value:"Good"},{name:"Service",translate:"Servicio",value:"Service"},{name:"Other",translate:"Otro",value:"Other"}],simpleStatus:function(e){return 0==e?"No":1==e?"Si":"NA"},statusContacto:[{estatus:"nuevo"},{estatus:"convertido"},{estatus:"asignado"}],convertidoClass:function(e){return"Sitio Web"==e?"bg-red-100":"Referido"==e?"bg-yellow-100 text-green-800":"nuevo"==e?"bg-gray-200":"convertido"==e?"bg-green-100 text-green-600":"bg-gray-50"}}}},7070:(e,t,n)=>{n.d(t,{Z:()=>y});var o=n(821),a={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},r=(0,o.createElementVNode)("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"​",-1),s={class:"inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"},l={class:"sm:flex sm:items-start"},c={class:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},i={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},m=(0,o.createTextVNode)(" Eliminar Registro "),d=(0,o.createElementVNode)("div",{class:"mt-2"},[(0,o.createElementVNode)("p",{class:"text-sm text-gray-500"},[(0,o.createTextVNode)(" ¿Está seguro(a) de querer eliminar el Registro? "),(0,o.createElementVNode)("br"),(0,o.createTextVNode)(" En algunos casos, ya no se podrá recuperar. "),(0,o.createElementVNode)("br"),(0,o.createTextVNode)(" Si tienes dudas consulta con el área de Desarrollo Web de Transcabo. ")])],-1),u={class:"mt-5 sm:mt-4 sm:ml-10 sm:pl-4 sm:flex"},p={key:0,class:"flex"},f=[(0,o.createElementVNode)("svg",{class:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[(0,o.createElementVNode)("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),(0,o.createElementVNode)("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1)],g={key:1};var h=n(8342),x=n(2494),v=n(7751);const b={components:{Dialog:h.Vq,DialogTitle:h.$N,DialogOverlay:h.t9,TransitionRoot:x.Q,TransitionChild:x.x,TrashIcon:v.XHJ},props:{showModal:{type:Boolean,default:!1}},setup:function(e){var t=(0,o.ref)(e.showModal),n=(0,o.ref)(!1);return(0,o.watch)((function(){return e.showModal}),(function(e,o){n.value=!1,t.value=e})),{open:t,loading:n}},methods:{closeIt:function(){this.loading=!1,this.$emit("closeModal")},deleteItem:function(){this.loading=!0,this.$emit("confirmed")}}};const y=(0,n(3744).Z)(b,[["render",function(e,t,n,h,x,v){var b=(0,o.resolveComponent)("DialogOverlay"),y=(0,o.resolveComponent)("TransitionChild"),w=(0,o.resolveComponent)("TrashIcon"),N=(0,o.resolveComponent)("DialogTitle"),V=(0,o.resolveComponent)("Dialog"),E=(0,o.resolveComponent)("TransitionRoot");return(0,o.openBlock)(),(0,o.createBlock)(E,{as:"template",show:h.open},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(V,{as:"div",class:"fixed z-10 inset-0 overflow-y-auto",onClose:t[2]||(t[2]=function(e){return v.closeIt()})},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",a,[(0,o.createVNode)(y,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(b,{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})]})),_:1}),r,(0,o.createVNode)(y,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",s,[(0,o.createElementVNode)("div",l,[(0,o.createElementVNode)("div",c,[(0,o.createVNode)(w,{class:"h-6 w-6 text-red-600","aria-hidden":"true"})]),(0,o.createElementVNode)("div",i,[(0,o.createVNode)(N,{as:"h3",class:"text-lg leading-6 font-medium text-gray-900"},{default:(0,o.withCtx)((function(){return[m]})),_:1}),d])]),(0,o.createElementVNode)("div",u,[(0,o.createElementVNode)("button",{type:"button",class:"inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto sm:text-sm",onClick:t[0]||(t[0]=function(e){return v.deleteItem()})},[h.loading?((0,o.openBlock)(),(0,o.createElementBlock)("span",p,f)):((0,o.openBlock)(),(0,o.createElementBlock)("span",g,"Eliminar"))]),(0,o.createElementVNode)("button",{type:"button",class:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",onClick:t[1]||(t[1]=function(e){return v.closeIt()}),ref:"cancelButtonRef"}," Cancelar ",512)])])]})),_:1})])]})),_:1})]})),_:1},8,["show"])}]])},7826:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(821),a=["type"];const r=(0,o.defineComponent)({props:{type:{type:String,default:"submit"}}});const s=(0,n(3744).Z)(r,[["render",function(e,t,n,r,s,l){return(0,o.openBlock)(),(0,o.createElementBlock)("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-purple border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-dark active:bg-purple-dark focus:outline-none focus:border-purple-light focus:ring focus:ring-purple-light disabled:opacity-25 transition"},[(0,o.renderSlot)(e.$slots,"default")],8,a)}]])},7934:(e,t,n)=>{n.r(t),n.d(t,{default:()=>H});var o=n(821),a={class:"flex max-w-6xl mx-auto"},r={class:"flex py-2 text-purple font-semibold text-2xl tracking-widest uppercase"},s=(0,o.createElementVNode)("span",null,"Branches / Destinos",-1),l={key:0,class:"flex"},c=(0,o.createTextVNode)(" Nuevo"),i={key:1,class:"flex"},m=(0,o.createTextVNode)(" Cerrar"),d={class:"flex flex-col md:flex-row px-10 md:px-4 lg:pl-0 max-w-6xl mx-auto"},u={class:"w-full md:w-1/2 order-last md:order-first"},p={class:"w-full py-2 align-middle mx-auto"},f={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},g={class:"min-w-full divide-y divide-gray-200"},h=(0,o.createElementVNode)("thead",{class:"bg-gray-50 font-medium text-gray-500 uppercase tracking-wider"},[(0,o.createElementVNode)("tr",null,[(0,o.createElementVNode)("th",{scope:"col",class:"px-6 py-3 text-left text-xs"}," Nombre "),(0,o.createElementVNode)("th",{scope:"col",class:"px-6 py-3 text-left text-xs"}," Estatus "),(0,o.createElementVNode)("th",{scope:"col",class:"px-6 py-3 text-right text-xs"}," Acc. ")])],-1),x={class:"bg-white divide-y divide-gray-200"},v={class:"px-6 py-4 whitespace-nowrap font-semibold text-purple"},b={class:"px-6 py-4"},y={class:"px-6 py-4 text-right"},w=["onClick"],N={key:0,class:"text-xs text-gray-700 whitespace-nowrap"},V=[(0,o.createElementVNode)("td",{colspan:"3",class:"px-6 py-4 text-center whitespace-nowrap"},"No hay registros",-1)],E={key:0,class:"w-full md:w-1/2 order-first md:order-last md:pl-10"},k={class:"w-full grid grid-cols-6 gap-4"},C={class:"col-span-6 lg:col-span-2"},B=(0,o.createElementVNode)("label",{for:"name",class:"block text-sm text-gray-700"},"Nombre:",-1),D={key:0,class:"text-red-500 font-xs"},S={class:"col-span-6 lg:col-span-2"},T=(0,o.createElementVNode)("label",{for:"status",class:"block text-sm text-gray-700"},"Estatus:",-1),M=[(0,o.createElementVNode)("option",{value:"1"},"Activo",-1),(0,o.createElementVNode)("option",{value:"0"},"Suspendido",-1)],I={key:0},A={class:"col-span-6 md:col-span-4"},R=(0,o.createTextVNode)(" Registrar ");var F=n(9038),P=n(6904),j=n(7751),Z=n(7826),O=n(7070);const Y=(0,o.defineComponent)({name:"BranchesIndex",components:{XIcon:j.b0D,PlusIcon:j.pOD,TrashIcon:j.XHJ,JetButton:Z.Z,DeleteItem:O.Z},setup:function(){var e=(0,o.ref)(!1),t=(0,o.ref)(!1),n=(0,o.ref)([]),a=(0,o.ref)([]),r=(0,o.ref)(null),s=(0,F.cI)({name:null,status:1}),l=(0,P.Z)().userStatus;function c(){axios.get(route("branchs.index")).then((function(e){var t=e.data;return n.value=t}))}return(0,o.onMounted)(c),{form:s,errores:a,branches:n,showForm:e,idToDelete:r,userStatus:l,getBranches:c,showDeleteModal:t}},methods:{submit:function(){var e=this;this.errores=[],axios.post(route("branches.store"),this.form).then((function(t){200==t.status&&(e.branches=[],e.getBranches(),e.showForm=!1)})).catch((function(t){e.errores=t.response.data.errors}))},deleteBranch:function(e){this.idToDelete=e,this.showDeleteModal=!0},closeTheModal:function(){this.showDeleteModal=!1},confirmDeletion:function(){var e=this;this.errores=[],axios.delete(route("branches.destroy",this.idToDelete)).then((function(t){200==t.status&&(e.branches=[],e.getBranches(),e.showDeleteModal=!1)})).catch((function(t){e.errores=t.response.data.errors}))}}});const H=(0,n(3744).Z)(Y,[["render",function(e,t,n,F,P,j){var Z=(0,o.resolveComponent)("Head"),O=(0,o.resolveComponent)("PlusIcon"),Y=(0,o.resolveComponent)("XIcon"),H=(0,o.resolveComponent)("TrashIcon"),_=(0,o.resolveComponent)("jet-button"),z=(0,o.resolveComponent)("DeleteItem");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)(Z,{title:"Branches | Destinos"}),(0,o.createElementVNode)("div",a,[(0,o.createElementVNode)("h1",r,[s,(0,o.createElementVNode)("button",{class:(0,o.normalizeClass)(["inline-flex ml-6 items-center px-2 py-0 bg-purple border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-dark active:bg-purple-dark focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple-light disabled:opacity-25 transition",[e.showForm?"bg-purple-light":"bg-purple"]]),type:"button",onClick:t[0]||(t[0]=(0,o.withModifiers)((function(t){return e.showForm=!e.showForm}),["prevent"]))},[e.showForm?(0,o.createCommentVNode)("",!0):((0,o.openBlock)(),(0,o.createElementBlock)("span",l,[(0,o.createVNode)(O,{class:"w-4 h-4 mr-1"}),c])),e.showForm?((0,o.openBlock)(),(0,o.createElementBlock)("span",i,[(0,o.createVNode)(Y,{class:"w-4 h-4 mr-1"}),m])):(0,o.createCommentVNode)("",!0)],2)])]),(0,o.createElementVNode)("div",d,[(0,o.createElementVNode)("div",u,[(0,o.createElementVNode)("div",p,[(0,o.createElementVNode)("div",f,[(0,o.createElementVNode)("table",g,[h,(0,o.createElementVNode)("tbody",x,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.branches,(function(t){return(0,o.openBlock)(),(0,o.createElementBlock)("tr",{class:"text-xs text-gray-700 whitespace-nowrap",key:t.id},[(0,o.createElementVNode)("td",v,(0,o.toDisplayString)(t.name),1),(0,o.createElementVNode)("td",b,(0,o.toDisplayString)(e.userStatus(t.status)),1),(0,o.createElementVNode)("td",y,[e.$page.props.user.level<2?((0,o.openBlock)(),(0,o.createElementBlock)("button",{key:0,onClick:(0,o.withModifiers)((function(n){return e.deleteBranch(t.id)}),["prevent"])},[(0,o.createVNode)(H,{class:"w-4 h-4 text-red-500"})],8,w)):(0,o.createCommentVNode)("",!0)])])})),128)),0==e.branches.length?((0,o.openBlock)(),(0,o.createElementBlock)("tr",N,V)):(0,o.createCommentVNode)("",!0)])])])])]),(0,o.createVNode)(o.Transition,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:(0,o.withCtx)((function(){var n,a;return[e.showForm?((0,o.openBlock)(),(0,o.createElementBlock)("div",E,[(0,o.createElementVNode)("form",{action:"#",method:"POST",onSubmit:t[3]||(t[3]=(0,o.withModifiers)((function(){return e.submit&&e.submit.apply(e,arguments)}),["prevent"]))},[(0,o.createElementVNode)("div",k,[(0,o.createElementVNode)("div",C,[B,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text",name:"name",id:"name","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.form.name=t}),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"},null,512),[[o.vModelText,e.form.name]]),null!==(n=e.errores)&&void 0!==n&&n.name?((0,o.openBlock)(),(0,o.createElementBlock)("div",D,(0,o.toDisplayString)(e.errores.name[0]),1)):(0,o.createCommentVNode)("",!0)]),(0,o.createElementVNode)("div",S,[T,(0,o.withDirectives)((0,o.createElementVNode)("select",{id:"status",name:"status","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.form.status=t}),class:"mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"},M,512),[[o.vModelSelect,e.form.status]]),null!==(a=e.errores)&&void 0!==a&&a.status?((0,o.openBlock)(),(0,o.createElementBlock)("div",I,(0,o.toDisplayString)(e.errores.status[0]),1)):(0,o.createCommentVNode)("",!0)]),(0,o.createElementVNode)("div",A,[(0,o.createVNode)(_,{class:"w-full justify-center",disabled:e.form.processing},{default:(0,o.withCtx)((function(){return[R]})),_:1},8,["disabled"])])])],32)])):(0,o.createCommentVNode)("",!0)]})),_:1})]),(0,o.createVNode)(z,{showModal:e.showDeleteModal,onConfirmed:e.confirmDeletion,onCloseModal:e.closeTheModal},null,8,["showModal","onConfirmed","onCloseModal"])],64)}]])}}]);