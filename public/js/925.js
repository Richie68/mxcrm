"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[925],{6740:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7757),o=r.n(n),l=r(5166),a=r(9669),s=r.n(a);function c(e,t,r,n,o,l,a){try{var s=e[l](a),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,o)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var l=e.apply(t,r);function a(e){c(l,n,o,a,s,"next",e)}function s(e){c(l,n,o,a,s,"throw",e)}a(void 0)}))}}function i(){var e=(0,l.ref)([]),t=(0,l.ref)([]),r=(0,l.ref)(null),n=function(){var t=u(o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/api/suppliers");case 2:r=t.sent,e.value=r.data.data;case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),a=function(){var e=u(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/api/suppliers/"+t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=u(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.value=null,e.prev=1,e.next=4,s().post("/api/suppliers",t);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),422===e.t0.response.status?r.value=e.t0.response.data.errors:(r.value=[],r.value=[{errors:e.t0.response.data.message}]);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=u(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.value=null,e.prev=1,e.next=4,s().put("/api/suppliers/"+t.uuid,t);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),422===e.t0.response.status?r.value=e.t0.response.data.errors:(r.value=[],r.value=[{errors:e.t0.response.data.message}]);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=u(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().delete("/api/suppliers/"+t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{errors:r,supplier:t,suppliers:e,getSupplier:a,getSuppliers:n,storeSupplier:c,updateSupplier:i,destroySupplier:p}}},3442:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(5166),o=r(3279),l=r.n(o),a=r(8744),s={key:0,class:"relative z-20"},c={class:"flex"},u=(0,n.createTextVNode)("Close"),i={key:0,class:"bg-white border mt-2 py-4 space-y-2 rounded-md max-h-[300px] overflow-y-scroll min-w-full absolute top-full z-20"},p=["textContent","onClick"];const d={props:{show:Boolean,label:String},emits:["set-change","close-it"],setup:function(e,t){var r=t.emit,o=e,d=(0,n.ref)(""),m=(0,n.ref)(null);(0,n.watch)((function(){return o.show}),(function(e,t){e&&d.autofocus})),(0,n.watch)(d,l()((function(e){""==d.value?m.value=null:axios.post(route("api.search-employees"),{search:e}).then((function(e){m.value=e.data}))}),300));return function(t,o){return e.show?((0,n.openBlock)(),(0,n.createElementBlock)("div",s,[(0,n.createElementVNode)("div",c,[(0,n.withDirectives)((0,n.createElementVNode)("input",{type:"search",name:"search","onUpdate:modelValue":o[0]||(o[0]=function(e){return(0,n.isRef)(d)?d.value=e:d=e}),autocomplete:"off",autofocus:"",placeholder:"Buscar ...",class:"mt-1 mr-2 block w-full border border-gray-300 rounded-md shadow-sm px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"},null,512),[[n.vModelText,(0,n.unref)(d)]]),(0,n.createVNode)((0,n.unref)(a.Z),{onClick:o[1]||(o[1]=function(e){return t.$emit("close-it")})},{default:(0,n.withCtx)((function(){return[u]})),_:1})]),(0,n.unref)(m)?((0,n.openBlock)(),(0,n.createElementBlock)("ul",i,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)((0,n.unref)(m),(function(t){return(0,n.openBlock)(),(0,n.createElementBlock)("li",{class:"text-sm text-purple hover:bg-gray-200 py-2 pl-4 pr-2",key:t.uuid,textContent:(0,n.toDisplayString)(t[e.label]),onClick:function(e){return r("set-change",t),void(d.value="")}},null,8,p)})),128))])):(0,n.createCommentVNode)("",!0)])):(0,n.createCommentVNode)("",!0)}}}},4187:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(5166),o=r(3293),l={key:0,class:"grid grid-cols-6 gap-6"},a={class:"col-span-6 text-right"};const s={props:{errors:Object},setup:function(e){return function(t,r){return(0,n.openBlock)(),(0,n.createBlock)(n.Transition,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 -translate-y-1","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition ease-in duration-150","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 -translate-y-1"},{default:(0,n.withCtx)((function(){return[e.errors?((0,n.openBlock)(),(0,n.createElementBlock)("div",l,[(0,n.createElementVNode)("div",a,[(0,n.createElementVNode)("span",{class:"inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-600 text-white",onClick:r[0]||(r[0]=function(t){return e.errors=null})},[(0,n.createVNode)((0,n.unref)(o.b0D),{class:"w-4 h-4"})])]),((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.errors,(function(t,r){return(0,n.openBlock)(),(0,n.createElementBlock)("div",{key:r,class:(0,n.normalizeClass)(["bg-red-600 text-white rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0",[1==e.errors.length?"col-span-6":""]])},[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(t,(function(e){return(0,n.openBlock)(),(0,n.createElementBlock)("p",{key:e,class:"text-sm"},(0,n.toDisplayString)(e),1)})),128))],2)})),128))])):(0,n.createCommentVNode)("",!0)]})),_:1})}}}},8744:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(5166),o=["type"];const l=(0,n.defineComponent)({props:{type:{type:String,default:"submit"}}});l.render=function(e,t,r,l,a,s){return(0,n.openBlock)(),(0,n.createElementBlock)("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-purple border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-dark active:bg-purple-dark focus:outline-none focus:border-purple-light focus:ring focus:ring-purple-light disabled:opacity-25 transition"},[(0,n.renderSlot)(e.$slots,"default")],8,o)};const a=l},3925:(e,t,r)=>{r.r(t),r.d(t,{default:()=>X});var n=r(7757),o=r.n(n),l=r(5166),a=r(9680),s=r(4187),c=r(6740),u=r(3293),i=r(8744),p=r(3442);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e,t,r,n,o,l,a){try{var s=e[l](a),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,o)}var g=(0,l.createElementVNode)("header",{class:"bg-white shadow mb-4"},[(0,l.createElementVNode)("div",{class:"max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 text-purple text-center font-semibold"}," Registrar Nuevo Proveedor ")],-1),x={class:"lg:grid lg:grid-cols-12 lg:gap-x-5 pb-20"},b={class:"py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-2"},h={class:"space-y-1"},y=(0,l.createElementVNode)("span",{class:"truncate"}," Listado Proveedores ",-1),w=(0,l.createElementVNode)("span",{class:"truncate"}," Generales ",-1),k={key:0,class:"flex justify-center py-3 text-purple"},V=[(0,l.createElementVNode)("svg",{class:"animate-spin -ml-1 mr-3 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[(0,l.createElementVNode)("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),(0,l.createElementVNode)("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1)],N={class:"space-y-6 sm:px-6 lg:px-0 lg:col-span-10"},E={class:"shadow sm:rounded-md"},C={class:"bg-white py-6 px-4 space-y-6 sm:p-6"},B={class:"mb-4 border-b border-purple pb-1"},_={class:"flex text-lg font-semibold leading-6 text-purple"},O=(0,l.createTextVNode)(" Generales "),D=(0,l.createElementVNode)("p",{class:"text-gray-600 text-sm"},"Después de registrar al Contacto, se podrá asignar una dirección y/o cuentas de correo adicionales",-1),P={class:"grid grid-cols-6 gap-6"},S={class:"col-span-6 lg:col-span-2"},j=(0,l.createElementVNode)("label",{for:"name",class:"block text-sm text-gray-700"},"Nombre:",-1),T={class:"col-span-6 lg:col-span-2"},z=(0,l.createElementVNode)("label",{for:"phone_work",class:"block text-sm text-gray-700"},"Tel. Trabajo:",-1),M={class:"col-span-6 lg:col-span-2"},U=(0,l.createElementVNode)("label",{for:"assigned_to",class:"block text-sm text-gray-700"},"Asignado a:",-1),Z={class:"grid grid-cols-6 gap-6"},R={class:"col-span-6 lg:col-span-2"},F=(0,l.createElementVNode)("label",{for:"razon_social",class:"block text-sm text-gray-700"},"Razón Social:",-1),L={class:"col-span-6 lg:col-span-2"},q=(0,l.createElementVNode)("label",{for:"rfc",class:"block text-sm text-gray-700"},"RFC:",-1),A={class:"col-span-6 lg:col-span-2"},G=(0,l.createElementVNode)("label",{for:"website",class:"block text-sm text-gray-700"},"Página Web:",-1),H={class:"grid grid-cols-6 gap-6"},I={class:"col-span-6 lg:col-span-2"},$=(0,l.createElementVNode)("label",{for:"code",class:"block text-sm text-gray-700"},"Código",-1),W={class:"col-span-6 lg:col-span-4"},J=(0,l.createElementVNode)("label",{for:"description",class:"block text-sm text-gray-700"},"Descripción del Contacto:",-1),K={class:"px-4 py-3 bg-gray-50 text-right sm:px-6"},Q=(0,l.createTextVNode)(" Registrar ");const X={props:{user:Object},setup:function(e){var t=e,r=(0,l.ref)(!1),n=(0,l.ref)(!1),d=(0,l.ref)({name:null,lastname:null,phone_work:null,assigned:t.user.fullname,assigned_to:t.user.uuid,description:null,code:null,razon_social:null,rfc:null,status:1,website:null,created_by:t.user.uuid}),f=(0,c.Z)(),X=f.storeSupplier,Y=f.errors,ee=function(){var e,t=(e=o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.value=!0,e.next=3,X(m({},d.value));case 3:r.value=!1,Y.value||a.Inertia.visit(route("catalogos.suppliers.index"),{method:"get"});case 5:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var l=e.apply(t,r);function a(e){v(l,n,o,a,s,"next",e)}function s(e){v(l,n,o,a,s,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}(),te=function(e){n.value=!1,d.value.assigned=e.fullname,d.value.assigned_to=e.uuid};return function(e,t){var o=(0,l.resolveComponent)("Head"),a=(0,l.resolveComponent)("Link");return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,[(0,l.createVNode)(o,{title:"Registrar Proveedor"}),g,(0,l.createElementVNode)("div",x,[(0,l.createElementVNode)("aside",b,[(0,l.createElementVNode)("nav",h,[(0,l.createVNode)(a,{href:e.route("catalogos.suppliers.index"),class:"text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm","aria-current":"page"},{default:(0,l.withCtx)((function(){return[(0,l.createVNode)((0,l.unref)(u.zTD),{class:"h-6 w-6 mr-2"}),y]})),_:1},8,["href"]),(0,l.createVNode)(a,{href:"#",class:"text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm bg-gray-50","aria-current":"page"},{default:(0,l.withCtx)((function(){return[(0,l.createVNode)((0,l.unref)(u.CSq),{class:"h-6 w-6 mr-2"}),w]})),_:1}),r.value?((0,l.openBlock)(),(0,l.createElementBlock)("div",k,V)):(0,l.createCommentVNode)("",!0)])]),(0,l.createElementVNode)("div",N,[(0,l.createElementVNode)("div",E,[(0,l.createElementVNode)("div",C,[(0,l.createElementVNode)("div",B,[(0,l.createElementVNode)("h3",_,[(0,l.createVNode)((0,l.unref)(u.CSq),{class:"h-6 w-6 mr-2"}),O]),D]),(0,l.createVNode)((0,l.unref)(s.Z),{errors:(0,l.unref)(Y)},null,8,["errors"]),(0,l.createElementVNode)("div",P,[(0,l.createElementVNode)("div",S,[j,(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"text",name:"name",id:"name","onUpdate:modelValue":t[0]||(t[0]=function(e){return d.value.name=e}),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"},null,512),[[l.vModelText,d.value.name]])]),(0,l.createElementVNode)("div",T,[z,(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"text",name:"phone_work",id:"phone_work","onUpdate:modelValue":t[1]||(t[1]=function(e){return d.value.phone_work=e}),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"},null,512),[[l.vModelText,d.value.phone_work]])]),(0,l.createElementVNode)("div",M,[U,n.value?(0,l.createCommentVNode)("",!0):(0,l.withDirectives)(((0,l.openBlock)(),(0,l.createElementBlock)("input",{key:0,class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm",type:"text",name:"assigned_to",id:"assigned_to",autocomplete:"off","onUpdate:modelValue":t[2]||(t[2]=function(e){return d.value.assigned=e}),onClick:t[3]||(t[3]=function(e){return n.value=!0})},null,512)),[[l.vModelText,d.value.assigned]]),(0,l.createVNode)((0,l.unref)(p.Z),{show:n.value,onSetChange:te,url:e.route("api.search-employees"),label:"fullname",onCloseIt:t[4]||(t[4]=function(e){return n.value=!1})},null,8,["show","url"])])]),(0,l.createElementVNode)("div",Z,[(0,l.createElementVNode)("div",R,[F,(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"text",name:"razon_social",id:"razon_social","onUpdate:modelValue":t[5]||(t[5]=function(e){return d.value.razon_social=e}),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"},null,512),[[l.vModelText,d.value.razon_social]])]),(0,l.createElementVNode)("div",L,[q,(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"text",name:"rfc",id:"rfc","onUpdate:modelValue":t[6]||(t[6]=function(e){return d.value.rfc=e}),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"},null,512),[[l.vModelText,d.value.rfc]])]),(0,l.createElementVNode)("div",A,[G,(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"url",placeholder:"https://example.com",pattern:"https://.*",name:"website",id:"website","onUpdate:modelValue":t[7]||(t[7]=function(e){return d.value.website=e}),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"},null,512),[[l.vModelText,d.value.website]])])]),(0,l.createElementVNode)("div",H,[(0,l.createElementVNode)("div",I,[$,(0,l.withDirectives)((0,l.createElementVNode)("input",{type:"text",name:"code",id:"code","onUpdate:modelValue":t[8]||(t[8]=function(e){return d.value.code=e}),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm uppercase"},null,512),[[l.vModelText,d.value.code]])]),(0,l.createElementVNode)("div",W,[J,(0,l.withDirectives)((0,l.createElementVNode)("textarea",{name:"description",id:"description","onUpdate:modelValue":t[9]||(t[9]=function(e){return d.value.description=e}),rows:"3",class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"},null,512),[[l.vModelText,d.value.description]])])])]),(0,l.createElementVNode)("div",K,[(0,l.createVNode)((0,l.unref)(i.Z),{type:"button",disabled:r.value,onClick:(0,l.withModifiers)(ee,["prevent"])},{default:(0,l.withCtx)((function(){return[Q]})),_:1},8,["disabled","onClick"])])])])])],64)}}}}}]);