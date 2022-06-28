"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5186],{1524:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(821),o=r(3279),l=r.n(o),a=r(7826),u={key:0,class:"relative z-20"},c={class:"flex"},s=(0,n.createTextVNode)("Close"),i={key:0,class:"bg-white border mt-2 py-4 space-y-2 rounded-md max-h-[300px] overflow-y-scroll min-w-full absolute top-full z-20"},d=["textContent","onClick"],p={key:0,class:"text-center font-semibold text-xs"};const m={props:{show:Boolean,label:String,level:Number},emits:["set-change","close-it"],setup:function(e,t){var r=t.emit,o=e,m=(0,n.ref)(""),f=(0,n.ref)(null);(0,n.watch)((function(){return o.show}),(function(e,t){e&&m.autofocus})),(0,n.watch)(m,l()((function(e){""==m.value?f.value=null:axios.post(route("api.search-employees"),{search:e,level:o.level}).then((function(e){f.value=e.data}))}),300));return function(t,o){return e.show?((0,n.openBlock)(),(0,n.createElementBlock)("div",u,[(0,n.createElementVNode)("div",c,[(0,n.withDirectives)((0,n.createElementVNode)("input",{type:"search",name:"search","onUpdate:modelValue":o[0]||(o[0]=function(e){return(0,n.isRef)(m)?m.value=e:m=e}),autocomplete:"off",autofocus:"",placeholder:"Buscar ...",class:"mt-1 mr-2 block w-full border border-gray-300 rounded-md shadow-sm px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"},null,512),[[n.vModelText,(0,n.unref)(m)]]),(0,n.createVNode)((0,n.unref)(a.Z),{onClick:o[1]||(o[1]=function(e){return t.$emit("close-it")})},{default:(0,n.withCtx)((function(){return[s]})),_:1})]),(0,n.unref)(f)?((0,n.openBlock)(),(0,n.createElementBlock)("ul",i,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)((0,n.unref)(f),(function(t){return(0,n.openBlock)(),(0,n.createElementBlock)("li",{class:"text-sm text-purple hover:bg-gray-200 py-2 pl-4 pr-2",key:t.uuid,textContent:(0,n.toDisplayString)(t[e.label]),onClick:function(e){return r("set-change",t),void(m.value="")}},null,8,d)})),128)),0==(0,n.unref)(f).length?((0,n.openBlock)(),(0,n.createElementBlock)("li",p," Sin resultados ")):(0,n.createCommentVNode)("",!0)])):(0,n.createCommentVNode)("",!0)])):(0,n.createCommentVNode)("",!0)}}}},7588:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(821),o=r(7751),l={key:0,class:"grid grid-cols-6 gap-6"},a={class:"col-span-6 text-right"};const u={props:{errors:Object},setup:function(e){return function(t,r){return(0,n.openBlock)(),(0,n.createBlock)(n.Transition,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 -translate-y-1","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition ease-in duration-150","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 -translate-y-1"},{default:(0,n.withCtx)((function(){return[e.errors?((0,n.openBlock)(),(0,n.createElementBlock)("div",l,[(0,n.createElementVNode)("div",a,[(0,n.createElementVNode)("span",{class:"inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-600 text-white",onClick:r[0]||(r[0]=function(t){return e.errors=null})},[(0,n.createVNode)((0,n.unref)(o.b0D),{class:"w-4 h-4"})])]),((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.errors,(function(t,r){return(0,n.openBlock)(),(0,n.createElementBlock)("div",{key:r,class:(0,n.normalizeClass)(["bg-red-600 text-white rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0",[1==e.errors.length?"col-span-6":""]])},[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(t,(function(e){return(0,n.openBlock)(),(0,n.createElementBlock)("p",{key:e,class:"text-sm"},(0,n.toDisplayString)(e),1)})),128))],2)})),128))])):(0,n.createCommentVNode)("",!0)]})),_:1})}}}},1608:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(821),o={key:0,class:"flex justify-center py-3 text-purple"},l=[(0,n.createElementVNode)("svg",{class:"animate-spin -ml-1 mr-3 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[(0,n.createElementVNode)("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),(0,n.createElementVNode)("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1)];const a={props:{show:Boolean},setup:function(e){return function(t,r){return e.show?((0,n.openBlock)(),(0,n.createElementBlock)("div",o,l)):(0,n.createCommentVNode)("",!0)}}}},7826:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(821),o=["type"];const l=(0,n.defineComponent)({props:{type:{type:String,default:"submit"}}});const a=(0,r(3744).Z)(l,[["render",function(e,t,r,l,a,u){return(0,n.openBlock)(),(0,n.createElementBlock)("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-purple border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-dark active:bg-purple-dark focus:outline-none focus:border-purple-light focus:ring focus:ring-purple-light disabled:opacity-25 transition"},[(0,n.renderSlot)(e.$slots,"default")],8,o)}]])},5186:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ut});var n=r(7757),o=r.n(n),l=r(821),a=r(9680),u=r(7751),c=r(3279),s=r.n(c),i=r(7826),d={key:0,class:"relative"},p={class:"flex"},m=(0,l.createTextVNode)("Close"),f={key:0,class:"bg-white border mt-2 py-4 space-y-2 rounded-md max-h-[300px] overflow-y-scroll min-w-full absolute top-full"},v=["textContent","onClick"];const x={props:{show:Boolean,label:String,url:String},emits:["set-change","close-it"],setup:function(e,t){var r=t.emit,n=e,o=(0,l.ref)(""),a=(0,l.ref)(null);(0,l.watch)((function(){return n.show}),(function(e,t){e&&o.autofocus})),(0,l.watch)(o,s()((function(e){""==o.value?a.value=null:axios.post(n.url,{search:e}).then((function(e){a.value=e.data}))}),300));return function(t,n){return e.show?((0,l.openBlock)(),(0,l.createElementBlock)("div",d,[(0,l.createElementVNode)("div",p,[(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"search",name:"search","onUpdate:modelValue":n[0]||(n[0]=function(e){return(0,l.isRef)(o)?o.value=e:o=e}),autocomplete:"off",autofocus:"",placeholder:"Buscar ...",class:"mt-1 mr-2 block w-full border border-gray-300 rounded-md shadow-sm px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"},null,512),[[l.vModelText,(0,l.unref)(o)]]),(0,l.createVNode)((0,l.unref)(i.Z),{onClick:n[1]||(n[1]=function(e){return t.$emit("close-it")})},{default:(0,l.withCtx)((function(){return[m]})),_:1})]),(0,l.unref)(a)?((0,l.openBlock)(),(0,l.createElementBlock)("ul",f,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)((0,l.unref)(a),(function(t){return(0,l.openBlock)(),(0,l.createElementBlock)("li",{class:"text-sm text-purple hover:bg-gray-200 py-2 pl-4 pr-2 cursor-pointer",key:t.uuid,textContent:(0,l.toDisplayString)(t[e.label]),onClick:function(e){return r("set-change",t),void(o.value="")}},null,8,v)})),128))])):(0,l.createCommentVNode)("",!0)])):(0,l.createCommentVNode)("",!0)}}};var g={key:0,class:"relative"},y={class:"flex"},b=(0,l.createTextVNode)("Close"),h={key:0,class:"bg-white border mt-2 py-4 space-y-2 rounded-md max-h-[300px] overflow-y-scroll min-w-full absolute top-full z-20"},w=["textContent","onClick"];const k={props:{show:Boolean,label:String,url:String},emits:["set-change","close-it"],setup:function(e,t){var r=t.emit,n=e,o=(0,l.ref)(""),a=(0,l.ref)(null);(0,l.watch)((function(){return n.show}),(function(e,t){e&&o.autofocus})),(0,l.watch)(o,s()((function(e){""==o.value?a.value=null:axios.post(n.url,{search:e}).then((function(e){a.value=e.data}))}),300));return function(t,n){return e.show?((0,l.openBlock)(),(0,l.createElementBlock)("div",g,[(0,l.createElementVNode)("div",y,[(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"search",name:"search","onUpdate:modelValue":n[0]||(n[0]=function(e){return(0,l.isRef)(o)?o.value=e:o=e}),autocomplete:"off",autofocus:"",placeholder:"Buscar ...",class:"mt-1 mr-2 block w-full border border-gray-300 rounded-md shadow-sm px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"},null,512),[[l.vModelText,(0,l.unref)(o)]]),(0,l.createVNode)((0,l.unref)(i.Z),{onClick:n[1]||(n[1]=function(e){return t.$emit("close-it")})},{default:(0,l.withCtx)((function(){return[b]})),_:1})]),(0,l.unref)(a)?((0,l.openBlock)(),(0,l.createElementBlock)("ul",h,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)((0,l.unref)(a),(function(t){return(0,l.openBlock)(),(0,l.createElementBlock)("li",{class:"text-sm text-purple hover:bg-gray-200 py-2 pl-4 pr-2",key:t.uuid,textContent:(0,l.toDisplayString)(t[e.label]),onClick:function(e){return r("set-change",t),void(o.value="")}},null,8,w)})),128))])):(0,l.createCommentVNode)("",!0)])):(0,l.createCommentVNode)("",!0)}}};var V={key:0,class:"relative"},N={class:"flex"},E=(0,l.createTextVNode)("Close"),C={key:0,class:"bg-white border mt-2 py-4 space-y-2 rounded-md max-h-[300px] overflow-y-scroll min-w-full absolute top-full z-20"},B=["textContent","onClick"];const _={props:{show:Boolean,label:String,url:String},emits:["set-change","close-it"],setup:function(e,t){var r=t.emit,n=e,o=(0,l.ref)(""),a=(0,l.ref)(null);(0,l.watch)((function(){return n.show}),(function(e,t){e&&o.autofocus})),(0,l.watch)(o,s()((function(e){""==o.value?a.value=null:axios.post(n.url,{search:e}).then((function(e){a.value=e.data}))}),300));return function(t,n){return e.show?((0,l.openBlock)(),(0,l.createElementBlock)("div",V,[(0,l.createElementVNode)("div",N,[(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"search",name:"search","onUpdate:modelValue":n[0]||(n[0]=function(e){return(0,l.isRef)(o)?o.value=e:o=e}),autocomplete:"off",autofocus:"",placeholder:"Buscar ...",class:"mt-1 mr-2 block w-full border border-gray-300 rounded-md shadow-sm px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"},null,512),[[l.vModelText,(0,l.unref)(o)]]),(0,l.createVNode)((0,l.unref)(i.Z),{onClick:n[1]||(n[1]=function(e){return t.$emit("close-it")})},{default:(0,l.withCtx)((function(){return[E]})),_:1})]),(0,l.unref)(a)?((0,l.openBlock)(),(0,l.createElementBlock)("ul",C,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)((0,l.unref)(a),(function(t){return(0,l.openBlock)(),(0,l.createElementBlock)("li",{class:"text-sm text-purple hover:bg-gray-200 py-2 pl-4 pr-2",key:t.uuid,textContent:(0,l.toDisplayString)(t[e.label]),onClick:function(e){return r("set-change",t),void(o.value="")}},null,8,B)})),128))])):(0,l.createCommentVNode)("",!0)])):(0,l.createCommentVNode)("",!0)}}};var D={key:0,class:"relative"},S={class:"flex"},T=(0,l.createTextVNode)("Close"),U={key:0,class:"bg-white border mt-2 py-4 space-y-2 rounded-md max-h-[300px] overflow-y-scroll min-w-full absolute top-full z-20"},M=["textContent","onClick"];const O={props:{show:Boolean,label:String,url:String},emits:["set-change","close-it"],setup:function(e,t){var r=t.emit,n=e,o=(0,l.ref)(""),a=(0,l.ref)(null);(0,l.watch)((function(){return n.show}),(function(e,t){e&&o.autofocus})),(0,l.watch)(o,s()((function(e){""==o.value?a.value=null:axios.post(n.url,{search:e}).then((function(e){a.value=e.data}))}),300));return function(t,n){return e.show?((0,l.openBlock)(),(0,l.createElementBlock)("div",D,[(0,l.createElementVNode)("div",S,[(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"search",name:"search","onUpdate:modelValue":n[0]||(n[0]=function(e){return(0,l.isRef)(o)?o.value=e:o=e}),autocomplete:"off",autofocus:"",placeholder:"Buscar ...",class:"mt-1 mr-2 block w-full border border-gray-300 rounded-md shadow-sm px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"},null,512),[[l.vModelText,(0,l.unref)(o)]]),(0,l.createVNode)((0,l.unref)(i.Z),{onClick:n[1]||(n[1]=function(e){return t.$emit("close-it")})},{default:(0,l.withCtx)((function(){return[T]})),_:1})]),(0,l.unref)(a)?((0,l.openBlock)(),(0,l.createElementBlock)("ul",U,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)((0,l.unref)(a),(function(t){return(0,l.openBlock)(),(0,l.createElementBlock)("li",{class:"text-sm text-purple hover:bg-gray-200 py-2 pl-4 pr-2 cursor-pointer",key:t.uuid,textContent:(0,l.toDisplayString)(t[e.label]),onClick:function(e){return r("set-change",t),void(o.value="")}},null,8,M)})),128))])):(0,l.createCommentVNode)("",!0)])):(0,l.createCommentVNode)("",!0)}}};var j=r(1524),G=r(9669),Z=r.n(G);function P(e,t,r,n,o,l,a){try{var u=e[l](a),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}function A(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var l=e.apply(t,r);function a(e){P(l,n,o,a,u,"next",e)}function u(e){P(l,n,o,a,u,"throw",e)}a(void 0)}))}}var F=r(7588),L=r(1608);function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){$(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function $(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function z(e,t,r,n,o,l,a){try{var u=e[l](a),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}var H=(0,l.createElementVNode)("header",{class:"bg-white shadow mb-4"},[(0,l.createElementVNode)("div",{class:"max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 text-purple text-center font-semibold"}," Registrar Nuevo Grupo ")],-1),X={class:"lg:grid lg:grid-cols-12 lg:gap-x-5 pb-20"},q={class:"py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-2"},J={class:"space-y-1"},K=(0,l.createElementVNode)("span",{class:"truncate"}," Grupos ",-1),Q=(0,l.createElementVNode)("span",{class:"truncate"}," Generales ",-1),W={class:"space-y-6 sm:px-6 lg:px-0 lg:col-span-10"},Y={class:"shadow sm:rounded-md"},ee={class:"bg-white py-6 px-4 space-y-6 sm:p-6"},te={class:"mb-4 border-b border-purple pb-1"},re={class:"text-lg font-semibold leading-6 text-purple flex"},ne=(0,l.createTextVNode)(" Generales "),oe=(0,l.createElementVNode)("p",{class:"text-gray-600 text-sm"},"Registrar la información General para el Grupo",-1),le={class:"grid grid-cols-6 gap-6"},ae={class:"col-span-6 lg:col-span-2"},ue=(0,l.createElementVNode)("label",{for:"name",class:"block text-sm text-gray-700"},"Nombre del Grupo:",-1),ce={class:"col-span-6 lg:col-span-2"},se=(0,l.createElementVNode)("label",{for:"department",class:"block text-sm text-gray-700"},"Departamento:",-1),ie={class:"col-span-6 lg:col-span-2"},de=(0,l.createElementVNode)("label",{for:"type",class:"block text-sm text-gray-700"},"Tipo de Grupo:",-1),pe={class:"col-span-6 lg:col-span-2"},me=(0,l.createElementVNode)("label",{for:"pax",class:"block text-sm text-gray-700"},"Aproximado personas:",-1),fe={class:"col-span-6 lg:col-span-2"},ve=(0,l.createElementVNode)("label",{for:"status",class:"block text-sm text-gray-700"},"Estatus:",-1),xe={class:"col-span-6 lg:col-span-2"},ge=(0,l.createElementVNode)("label",{for:"source",class:"block text-sm text-gray-700"},"Fuente del Grupo:",-1),ye={class:"col-span-6 lg:col-span-2"},be=(0,l.createElementVNode)("label",{for:"source_location",class:"block text-sm text-gray-700"},"Lugar de Trabajo de Fuente:",-1),he={class:"col-span-6 lg:col-span-2"},we=(0,l.createElementVNode)("label",{for:"company_uuid",class:"block text-sm text-gray-700"},"Empresa:",-1),ke={class:"col-span-6 lg:col-span-2"},Ve=(0,l.createElementVNode)("label",{for:"agency_uuid",class:"block text-sm text-gray-700"},"Agencia:",-1),Ne={class:"col-span-6 lg:col-span-2"},Ee=(0,l.createElementVNode)("label",{for:"assigned_to",class:"block text-sm text-gray-700"},"Asignado a:",-1),Ce={class:"col-span-6 lg:col-span-2"},Be=(0,l.createElementVNode)("label",{for:"manager_uuid",class:"block text-sm text-gray-700"},"Gerente:",-1),_e={class:"col-span-6 lg:col-span-2"},De=(0,l.createElementVNode)("label",{for:"executive_uuid",class:"block text-sm text-gray-700"},"Ejecutivo:",-1),Se={class:"col-span-6 lg:col-span-2"},Te=(0,l.createElementVNode)("label",{for:"executive_aditional",class:"block text-sm text-gray-700"},"Ejecutivo Adicional:",-1),Ue={class:"col-span-6 lg:col-span-2"},Me=(0,l.createElementVNode)("label",{for:"lead_uuid",class:"block text-sm text-gray-700"},"Lead (contacto potencial):",-1),Oe={class:"col-span-6 lg:col-span-2"},je=(0,l.createElementVNode)("label",{for:"contact_uuid",class:"block text-sm text-gray-700"},"Contacto:",-1),Ge={class:"col-span-6 lg:col-span-2"},Ze=(0,l.createElementVNode)("label",{for:"estimated_transportation",class:"block text-sm font-medium text-gray-700"},"Transportación:",-1),Pe={class:"mt-1 relative rounded-md shadow-sm"},Ae=(0,l.createElementVNode)("div",{class:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},[(0,l.createElementVNode)("span",{class:"text-gray-500 sm:text-sm"}," $ ")],-1),Fe={class:"absolute inset-y-0 right-0 flex items-center"},Le=(0,l.createElementVNode)("label",{for:"currency",class:"sr-only"},"Currency",-1),Ie=[(0,l.createElementVNode)("option",{value:"usd"},"USD",-1)],Re={class:"col-span-6 lg:col-span-2"},$e=(0,l.createElementVNode)("label",{for:"estimated_activities",class:"block text-sm font-medium text-gray-700"},"Actividades:",-1),ze={class:"mt-1 relative rounded-md shadow-sm"},He=(0,l.createElementVNode)("div",{class:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},[(0,l.createElementVNode)("span",{class:"text-gray-500 sm:text-sm"}," $ ")],-1),Xe={class:"absolute inset-y-0 right-0 flex items-center"},qe=(0,l.createElementVNode)("label",{for:"currency",class:"sr-only"},"Currency",-1),Je=[(0,l.createElementVNode)("option",{value:"usd"},"USD",-1)],Ke={class:"col-span-6 lg:col-span-2"},Qe=(0,l.createElementVNode)("label",{for:"estimated_events",class:"block text-sm font-medium text-gray-700"},"Eventos:",-1),We={class:"mt-1 relative rounded-md shadow-sm"},Ye=(0,l.createElementVNode)("div",{class:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},[(0,l.createElementVNode)("span",{class:"text-gray-500 sm:text-sm"}," $ ")],-1),et={class:"absolute inset-y-0 right-0 flex items-center"},tt=(0,l.createElementVNode)("label",{for:"currency",class:"sr-only"},"Currency",-1),rt=[(0,l.createElementVNode)("option",{value:"usd"},"USD",-1)],nt={class:"flex flex-col w-full"},ot=(0,l.createElementVNode)("label",{for:"notes",class:"block text-sm text-gray-700"},"Notas:",-1),lt={class:"px-4 py-3 bg-gray-50 text-right sm:px-6"},at=(0,l.createTextVNode)(" Registrar ");const ut={props:{user:Object},setup:function(e){var t=e,r=function(){var e=(0,l.ref)(null),t=(0,l.ref)([]),r=(0,l.ref)(null),n=function(){var e=A(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z().get("/api/groups");case 2:r=e.sent,t.value=r.data.data;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=A(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z().get("/api/groups/"+t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=A(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.value=null,e.prev=1,e.next=4,Z().post("/api/groups",t);case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),422===e.t0.response.status&&(r.value=e.t0.response.data.errors),404===e.t0.response.status&&(r.value=[],r.value=[{errors:e.t0.response.data.message}]);case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=A(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.value=null,e.prev=1,e.next=4,Z().put("/api/groups/"+t.uuid,t);case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),422===e.t0.response.status&&(r.value=e.t0.response.data.errors),404===e.t0.response.status&&(r.value=[],r.value=[{errors:e.t0.response.data.message}]);case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=A(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z().delete("/api/groups/"+t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{group:e,groups:t,errors:r,getGroup:a,getGroups:n,storeGroup:u,updateGroup:c,destroyGroup:s}}(),n=r.storeGroup,c=r.errors,s=(0,l.ref)(!1),d=(0,l.ref)(!1),p=(0,l.ref)(!1),m=(0,l.ref)(!1),f=(0,l.ref)(!1),v=(0,l.ref)(!1),g=(0,l.ref)(!1),y=(0,l.ref)(!1),b=(0,l.ref)(!1),h=(0,l.ref)({name:null,folio:null,department:null,notes:null,type:null,pax:null,status:null,source:null,start_date:null,end_date:null,source_location:null,estimated_activities:null,estimated_transportation:null,estimated_events:null,currency:"usd",company:null,company_uuid:null,agency:null,agency_uuid:null,created_by:t.user.uuid,assigned:t.user.fullname,assigned_to:t.user.uuid,manager:null,manager_uuid:null,executive:null,executive_uuid:null,executiveAdd:null,executive_aditional:null,lead:null,lead_uuid:null,campaign:null,campaign_uuid:null}),w=function(){var e,t=(e=o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.value=!0,e.next=3,n(R({},h.value));case 3:s.value=!1,c.value||a.Inertia.visit(route("ventas.groups.index"),{method:"get",preserveScroll:!0});case 5:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var l=e.apply(t,r);function a(e){z(l,n,o,a,u,"next",e)}function u(e){z(l,n,o,a,u,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}(),V=function(e){d.value=!1,h.value.assigned=e.fullname,h.value.assigned_to=e.uuid},N=function(e){p.value=!1,h.value.manager=e.fullname,h.value.manager_uuid=e.uuid},E=function(e){m.value=!1,h.value.executive=e.fullname,h.value.executive_uuid=e.uuid},C=function(e){f.value=!1,h.value.executiveAdd=e.fullname,h.value.executive_aditional=e.uuid},B=function(e){y.value=!1,h.value.lead=e.fullname,h.value.lead_uuid=e.uuid},D=function(e){g.value=!1,h.value.contact=e.fullname,h.value.contact_uuid=e.uuid},S=function(e){v.value=!1,h.value.company=e.name,h.value.company_uuid=e.uuid},T=function(e){b.value=!1,h.value.agency=e.name,h.value.agency_uuid=e.uuid};return function(e,t){var r=(0,l.resolveComponent)("Head"),n=(0,l.resolveComponent)("Link");return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,[(0,l.createVNode)(r,{title:"Registrar Grupo"}),H,(0,l.createElementVNode)("div",X,[(0,l.createElementVNode)("aside",q,[(0,l.createElementVNode)("nav",J,[(0,l.createVNode)(n,{href:e.route("ventas.groups.index"),class:"text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm","aria-current":"page"},{default:(0,l.withCtx)((function(){return[(0,l.createVNode)((0,l.unref)(u.vxs),{class:"h-6 w-6 mr-2"}),K]})),_:1},8,["href"]),(0,l.createVNode)(n,{href:"#",class:"text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm bg-gray-50","aria-current":"page"},{default:(0,l.withCtx)((function(){return[(0,l.createVNode)((0,l.unref)(u.XOb),{class:"h-6 w-6 mr-2"}),Q]})),_:1}),(0,l.createVNode)((0,l.unref)(L.Z),{show:(0,l.unref)(s)},null,8,["show"])])]),(0,l.createElementVNode)("div",W,[(0,l.createElementVNode)("div",Y,[(0,l.createElementVNode)("div",ee,[(0,l.createElementVNode)("div",te,[(0,l.createElementVNode)("h3",re,[(0,l.createVNode)((0,l.unref)(u.XOb),{class:"h-6 w-6 mr-2"}),ne]),oe]),(0,l.createVNode)((0,l.unref)(F.Z),{errors:(0,l.unref)(c)},null,8,["errors"]),(0,l.createElementVNode)("div",le,[(0,l.createElementVNode)("div",ae,[ue,(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"text",name:"name",id:"name","onUpdate:modelValue":t[0]||(t[0]=function(e){return(0,l.unref)(h).name=e}),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"},null,512),[[l.vModelText,(0,l.unref)(h).name]])]),(0,l.createElementVNode)("div",ce,[se,(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"text",name:"department",id:"department","onUpdate:modelValue":t[1]||(t[1]=function(e){return(0,l.unref)(h).department=e}),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"},null,512),[[l.vModelText,(0,l.unref)(h).department]])]),(0,l.createElementVNode)("div",ie,[de,(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"text",name:"type",id:"type","onUpdate:modelValue":t[2]||(t[2]=function(e){return(0,l.unref)(h).type=e}),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"},null,512),[[l.vModelText,(0,l.unref)(h).type]])]),(0,l.createElementVNode)("div",pe,[me,(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"number",min:"0",name:"pax",id:"pax","onUpdate:modelValue":t[3]||(t[3]=function(e){return(0,l.unref)(h).pax=e}),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"},null,512),[[l.vModelText,(0,l.unref)(h).pax]])]),(0,l.createElementVNode)("div",fe,[ve,(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"text",name:"status",id:"status","onUpdate:modelValue":t[4]||(t[4]=function(e){return(0,l.unref)(h).status=e}),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"},null,512),[[l.vModelText,(0,l.unref)(h).status]])]),(0,l.createElementVNode)("div",xe,[ge,(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"text",name:"source",id:"source","onUpdate:modelValue":t[5]||(t[5]=function(e){return(0,l.unref)(h).source=e}),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"},null,512),[[l.vModelText,(0,l.unref)(h).source]])]),(0,l.createElementVNode)("div",ye,[be,(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"text",name:"source_location",id:"source_location","onUpdate:modelValue":t[6]||(t[6]=function(e){return(0,l.unref)(h).source_location=e}),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"},null,512),[[l.vModelText,(0,l.unref)(h).source_location]])]),(0,l.createElementVNode)("div",he,[we,v.value?(0,l.createCommentVNode)("",!0):(0,l.withDirectives)(((0,l.openBlock)(),(0,l.createElementBlock)("input",{key:0,class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm",type:"text",name:"company_uuid",id:"company_uuid",autocomplete:"off","onUpdate:modelValue":t[7]||(t[7]=function(e){return(0,l.unref)(h).company=e}),onClick:t[8]||(t[8]=function(e){return v.value=!0})},null,512)),[[l.vModelText,(0,l.unref)(h).company]]),(0,l.createVNode)((0,l.unref)(x),{show:v.value,onSetChange:S,url:e.route("api.search-company"),label:"name",onCloseIt:t[9]||(t[9]=function(e){return v.value=!1})},null,8,["show","url"])]),(0,l.createElementVNode)("div",ke,[Ve,b.value?(0,l.createCommentVNode)("",!0):(0,l.withDirectives)(((0,l.openBlock)(),(0,l.createElementBlock)("input",{key:0,class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm",type:"text",name:"agency_uuid",id:"agency_uuid",autocomplete:"off","onUpdate:modelValue":t[10]||(t[10]=function(e){return(0,l.unref)(h).agency=e}),onClick:t[11]||(t[11]=function(e){return b.value=!0})},null,512)),[[l.vModelText,(0,l.unref)(h).agency]]),(0,l.createVNode)((0,l.unref)(O),{show:b.value,onSetChange:T,url:e.route("api.search-agency"),label:"name",onCloseIt:t[12]||(t[12]=function(e){return b.value=!1})},null,8,["show","url"])]),(0,l.createElementVNode)("div",Ne,[Ee,d.value?(0,l.createCommentVNode)("",!0):(0,l.withDirectives)(((0,l.openBlock)(),(0,l.createElementBlock)("input",{key:0,class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm",type:"text",name:"assigned_to",id:"assigned_to",autocomplete:"off","onUpdate:modelValue":t[13]||(t[13]=function(e){return(0,l.unref)(h).assigned=e}),onClick:t[14]||(t[14]=function(e){return d.value=!0})},null,512)),[[l.vModelText,(0,l.unref)(h).assigned]]),(0,l.createVNode)((0,l.unref)(j.Z),{show:d.value,onSetChange:V,url:e.route("api.search-employees"),label:"fullname",onCloseIt:t[15]||(t[15]=function(e){return d.value=!1})},null,8,["show","url"])]),(0,l.createElementVNode)("div",Ce,[Be,p.value?(0,l.createCommentVNode)("",!0):(0,l.withDirectives)(((0,l.openBlock)(),(0,l.createElementBlock)("input",{key:0,class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm",type:"text",name:"manager_uuid",id:"manager_uuid",autocomplete:"off","onUpdate:modelValue":t[16]||(t[16]=function(e){return(0,l.unref)(h).manager=e}),onClick:t[17]||(t[17]=function(e){return p.value=!0})},null,512)),[[l.vModelText,(0,l.unref)(h).manager]]),(0,l.createVNode)((0,l.unref)(j.Z),{show:p.value,onSetChange:N,url:e.route("api.search-employees"),label:"fullname",level:2,onCloseIt:t[18]||(t[18]=function(e){return p.value=!1})},null,8,["show","url"])]),(0,l.createElementVNode)("div",_e,[De,m.value?(0,l.createCommentVNode)("",!0):(0,l.withDirectives)(((0,l.openBlock)(),(0,l.createElementBlock)("input",{key:0,class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm",type:"text",name:"executive_uuid",id:"executive_uuid",autocomplete:"off","onUpdate:modelValue":t[19]||(t[19]=function(e){return(0,l.unref)(h).executive=e}),onClick:t[20]||(t[20]=function(e){return m.value=!0})},null,512)),[[l.vModelText,(0,l.unref)(h).executive]]),(0,l.createVNode)((0,l.unref)(j.Z),{show:m.value,onSetChange:E,url:e.route("api.search-employees"),label:"fullname",level:3,onCloseIt:t[21]||(t[21]=function(e){return m.value=!1})},null,8,["show","url"])]),(0,l.createElementVNode)("div",Se,[Te,f.value?(0,l.createCommentVNode)("",!0):(0,l.withDirectives)(((0,l.openBlock)(),(0,l.createElementBlock)("input",{key:0,class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm",type:"text",name:"executive_aditional",id:"executive_aditional",autocomplete:"off","onUpdate:modelValue":t[22]||(t[22]=function(e){return(0,l.unref)(h).executiveAdd=e}),onClick:t[23]||(t[23]=function(e){return f.value=!0})},null,512)),[[l.vModelText,(0,l.unref)(h).executiveAdd]]),(0,l.createVNode)((0,l.unref)(j.Z),{show:f.value,onSetChange:C,url:e.route("api.search-employees"),label:"fullname",level:3,onCloseIt:t[24]||(t[24]=function(e){return f.value=!1})},null,8,["show","url"])]),(0,l.createElementVNode)("div",Ue,[Me,y.value?(0,l.createCommentVNode)("",!0):(0,l.withDirectives)(((0,l.openBlock)(),(0,l.createElementBlock)("input",{key:0,class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm",type:"text",name:"lead_uuid",id:"lead_uuid",autocomplete:"off","onUpdate:modelValue":t[25]||(t[25]=function(e){return(0,l.unref)(h).lead=e}),onClick:t[26]||(t[26]=function(e){return y.value=!0})},null,512)),[[l.vModelText,(0,l.unref)(h).lead]]),(0,l.createVNode)((0,l.unref)(_),{show:y.value,onSetChange:D,url:e.route("api.search-leads"),label:"fullname",level:3,onCloseIt:t[27]||(t[27]=function(e){return y.value=!1})},null,8,["show","url"])]),(0,l.createElementVNode)("div",Oe,[je,g.value?(0,l.createCommentVNode)("",!0):(0,l.withDirectives)(((0,l.openBlock)(),(0,l.createElementBlock)("input",{key:0,class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm",type:"text",name:"contact_uuid",id:"contact_uuid",autocomplete:"off","onUpdate:modelValue":t[28]||(t[28]=function(e){return(0,l.unref)(h).contact=e}),onClick:t[29]||(t[29]=function(e){return g.value=!0})},null,512)),[[l.vModelText,(0,l.unref)(h).contact]]),(0,l.createVNode)((0,l.unref)(k),{show:g.value,onSetChange:B,url:e.route("api.search-contacts"),label:"fullname",level:3,onCloseIt:t[30]||(t[30]=function(e){return g.value=!1})},null,8,["show","url"])]),(0,l.createElementVNode)("div",Ge,[Ze,(0,l.createElementVNode)("div",Pe,[Ae,(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"text",name:"estimated_transportation",id:"estimated_transportation","onUpdate:modelValue":t[31]||(t[31]=function(e){return(0,l.unref)(h).estimated_transportation=e}),class:"focus:ring-purple focus:border-purple block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md",placeholder:"0.00"},null,512),[[l.vModelText,(0,l.unref)(h).estimated_transportation]]),(0,l.createElementVNode)("div",Fe,[Le,(0,l.withDirectives)((0,l.createElementVNode)("select",{id:"currency",name:"currency","onUpdate:modelValue":t[32]||(t[32]=function(e){return(0,l.unref)(h).currency=e}),class:"focus:ring-purple focus:border-purple h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"},Ie,512),[[l.vModelSelect,(0,l.unref)(h).currency]])])])]),(0,l.createElementVNode)("div",Re,[$e,(0,l.createElementVNode)("div",ze,[He,(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"text",name:"estimated_activities",id:"estimated_activities","onUpdate:modelValue":t[33]||(t[33]=function(e){return(0,l.unref)(h).estimated_activities=e}),class:"focus:ring-purple focus:border-purple block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md",placeholder:"0.00"},null,512),[[l.vModelText,(0,l.unref)(h).estimated_activities]]),(0,l.createElementVNode)("div",Xe,[qe,(0,l.withDirectives)((0,l.createElementVNode)("select",{id:"currency_activities",name:"currency","onUpdate:modelValue":t[34]||(t[34]=function(e){return(0,l.unref)(h).currency=e}),class:"focus:ring-purple focus:border-purple h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"},Je,512),[[l.vModelSelect,(0,l.unref)(h).currency]])])])]),(0,l.createElementVNode)("div",Ke,[Qe,(0,l.createElementVNode)("div",We,[Ye,(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"text",name:"estimated_events",id:"estimated_events","onUpdate:modelValue":t[35]||(t[35]=function(e){return(0,l.unref)(h).estimated_events=e}),class:"focus:ring-purple focus:border-purple block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md",placeholder:"0.00"},null,512),[[l.vModelText,(0,l.unref)(h).estimated_events]]),(0,l.createElementVNode)("div",et,[tt,(0,l.withDirectives)((0,l.createElementVNode)("select",{id:"currency",name:"currency","onUpdate:modelValue":t[36]||(t[36]=function(e){return(0,l.unref)(h).currency=e}),class:"focus:ring-purple focus:border-purple h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"},rt,512),[[l.vModelSelect,(0,l.unref)(h).currency]])])])])]),(0,l.createElementVNode)("div",nt,[ot,(0,l.withDirectives)((0,l.createElementVNode)("textarea",{name:"notes",id:"notes","onUpdate:modelValue":t[37]||(t[37]=function(e){return(0,l.unref)(h).notes=e}),rows:"3",class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"},null,512),[[l.vModelText,(0,l.unref)(h).notes]])]),(0,l.createElementVNode)("div",lt,[(0,l.createVNode)((0,l.unref)(i.Z),{type:"button",disabled:(0,l.unref)(s),onClick:(0,l.withModifiers)(w,["prevent"])},{default:(0,l.withCtx)((function(){return[at]})),_:1},8,["disabled","onClick"])])])])])])],64)}}}}}]);