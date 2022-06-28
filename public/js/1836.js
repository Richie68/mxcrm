"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1836],{6302:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7757),a=r.n(n),o=r(821),l=r(9669),s=r.n(l);function c(e,t,r,n,a,o,l){try{var s=e[o](l),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,a)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function l(e){c(o,n,a,l,s,"next",e)}function s(e){c(o,n,a,l,s,"throw",e)}l(void 0)}))}}function i(){var e=(0,o.ref)([]),t=(0,o.ref)([]),r=(0,o.ref)(null),n=function(){var t=u(a().mark((function t(){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/api/categories");case 2:r=t.sent,e.value=r.data.data;case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){var e=u(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/api/categories/"+t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=u(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.value=null,e.prev=1,e.next=4,s().post("/api/categories",t);case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),422===e.t0.response.status&&(r.value=e.t0.response.data.errors),404===e.t0.response.status&&(r.value=[],r.value=[{errors:e.t0.response.data.message}]);case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=u(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.value=null,e.prev=1,e.next=4,s().put("/api/categories/"+t.uuid,t);case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),422===e.t0.response.status&&(r.value=e.t0.response.data.errors),404===e.t0.response.status&&(r.value=[],r.value=[{errors:e.t0.response.data.message}]);case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=u(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().delete("/api/categories/"+t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{errors:r,category:t,categories:e,getCategory:l,getCategories:n,storeCategory:c,updateCategory:i,destroyCategory:p}}},353:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(821),a=r(3279),o=r.n(a),l=r(7826),s={key:0,class:"relative"},c={class:"flex"},u=(0,n.createTextVNode)("Close"),i={key:0,class:"bg-white border mt-2 py-4 space-y-2 rounded-md max-h-[300px] overflow-y-scroll min-w-full absolute top-full"},p=["textContent","onClick"],d={key:0,class:"text-center font-semibold text-xs"};const m={props:{show:Boolean,label:String,url:String,parent:Boolean},emits:["set-change","close-it"],setup:function(e,t){var r=t.emit,a=e,m=(0,n.ref)(""),f=(0,n.ref)(null);(0,n.watch)((function(){return a.show}),(function(e){e&&m.autofocus})),(0,n.watch)(m,o()((function(e){""==m.value?f.value=null:axios.post(a.url,{search:e,parent:a.parent}).then((function(e){f.value=e.data}))}),300));return function(t,a){return e.show?((0,n.openBlock)(),(0,n.createElementBlock)("div",s,[(0,n.createElementVNode)("div",c,[(0,n.withDirectives)((0,n.createElementVNode)("input",{type:"search",name:"search","onUpdate:modelValue":a[0]||(a[0]=function(e){return(0,n.isRef)(m)?m.value=e:m=e}),autocomplete:"off",autofocus:"",placeholder:"Buscar ...",class:"mt-1 mr-2 block w-full border border-gray-300 rounded-md shadow-sm px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"},null,512),[[n.vModelText,(0,n.unref)(m)]]),(0,n.createVNode)((0,n.unref)(l.Z),{onClick:a[1]||(a[1]=function(e){return t.$emit("close-it")})},{default:(0,n.withCtx)((function(){return[u]})),_:1})]),(0,n.unref)(f)?((0,n.openBlock)(),(0,n.createElementBlock)("ul",i,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)((0,n.unref)(f),(function(t){return(0,n.openBlock)(),(0,n.createElementBlock)("li",{class:"text-sm text-purple hover:bg-gray-200 py-2 pl-4 pr-2",key:t.uuid,textContent:(0,n.toDisplayString)(t[e.label]),onClick:function(e){return r("set-change",t),void(m.value="")}},null,8,p)})),128)),0==(0,n.unref)(f).length?((0,n.openBlock)(),(0,n.createElementBlock)("li",d," Sin resultados ")):(0,n.createCommentVNode)("",!0)])):(0,n.createCommentVNode)("",!0)])):(0,n.createCommentVNode)("",!0)}}}},7588:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(821),a=r(7751),o={key:0,class:"grid grid-cols-6 gap-6"},l={class:"col-span-6 text-right"};const s={props:{errors:Object},setup:function(e){return function(t,r){return(0,n.openBlock)(),(0,n.createBlock)(n.Transition,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 -translate-y-1","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition ease-in duration-150","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 -translate-y-1"},{default:(0,n.withCtx)((function(){return[e.errors?((0,n.openBlock)(),(0,n.createElementBlock)("div",o,[(0,n.createElementVNode)("div",l,[(0,n.createElementVNode)("span",{class:"inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-600 text-white",onClick:r[0]||(r[0]=function(t){return e.errors=null})},[(0,n.createVNode)((0,n.unref)(a.b0D),{class:"w-4 h-4"})])]),((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.errors,(function(t,r){return(0,n.openBlock)(),(0,n.createElementBlock)("div",{key:r,class:(0,n.normalizeClass)(["bg-red-600 text-white rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0",[1==e.errors.length?"col-span-6":""]])},[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(t,(function(e){return(0,n.openBlock)(),(0,n.createElementBlock)("p",{key:e,class:"text-sm"},(0,n.toDisplayString)(e),1)})),128))],2)})),128))])):(0,n.createCommentVNode)("",!0)]})),_:1})}}}},7826:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(821),a=["type"];const o=(0,n.defineComponent)({props:{type:{type:String,default:"submit"}}});const l=(0,r(3744).Z)(o,[["render",function(e,t,r,o,l,s){return(0,n.openBlock)(),(0,n.createElementBlock)("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-purple border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-dark active:bg-purple-dark focus:outline-none focus:border-purple-light focus:ring focus:ring-purple-light disabled:opacity-25 transition"},[(0,n.renderSlot)(e.$slots,"default")],8,a)}]])},1836:(e,t,r)=>{r.r(t),r.d(t,{default:()=>J});var n=r(7757),a=r.n(n),o=r(821),l=r(9680),s=r(7588),c=r(7751),u=r(6302),i=r(7826),p=r(353);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e,t,r,n,a,o,l){try{var s=e[o](l),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,a)}var g=(0,o.createElementVNode)("header",{class:"bg-white shadow mb-4"},[(0,o.createElementVNode)("div",{class:"max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 text-purple text-center font-semibold"}," Registrar Nueva Categoría ")],-1),x={class:"lg:grid lg:grid-cols-12 lg:gap-x-5 pb-20"},h={class:"py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-2"},y={class:"space-y-1"},b=(0,o.createElementVNode)("span",{class:"truncate"}," Categorías ",-1),w=(0,o.createElementVNode)("span",{class:"truncate"}," Generales ",-1),k={key:0,class:"flex justify-center py-3 text-purple"},V=[(0,o.createElementVNode)("svg",{class:"animate-spin -ml-1 mr-3 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[(0,o.createElementVNode)("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),(0,o.createElementVNode)("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1)],N={class:"space-y-6 sm:px-6 lg:px-0 lg:col-span-10"},E={class:"shadow sm:rounded-md"},C={class:"bg-white py-6 px-4 space-y-6 sm:p-6"},B={class:"mb-4 border-b border-purple pb-1"},O={class:"text-lg font-semibold leading-6 text-purple flex"},_=(0,o.createTextVNode)(" Generales "),P=(0,o.createElementVNode)("p",{class:"text-gray-600 text-sm"},"Para asignar una categoría padre a este registro, verifique primero que ya se encuentre registrada la Categoría Padre.",-1),j={class:"grid grid-cols-6 gap-6"},D={class:"col-span-6 lg:col-span-2"},S=(0,o.createElementVNode)("label",{for:"name",class:"block text-sm text-gray-700"},"Nombre:",-1),Z={class:"col-span-6 lg:col-span-2 relative z-50"},T=(0,o.createElementVNode)("label",{for:"assigned_to",class:"block text-sm text-gray-700"},"Asignado a:",-1),M={class:"grid grid-cols-6 gap-6"},z={class:"col-span-6 lg:col-span-2"},U=(0,o.createElementVNode)("label",{for:"parent",class:"block text-sm text-gray-700"},"Categoría Padre:",-1),F={class:"col-span-2 lg:col-span-2"},L={class:"flex h-full items-center justify-start relative z-0"},R={class:"flex items-center h-5"},I=(0,o.createElementVNode)("div",{class:"ml-3 text-sm relative z-0"},[(0,o.createElementVNode)("label",{for:"is_parent",class:"font-medium"},"Es Categoría Padre?:")],-1),q={class:"grid grid-cols-6 gap-6"},A={class:"col-span-6 lg:col-span-4"},G={class:"flex flex-col w-full"},H=(0,o.createElementVNode)("label",{for:"description",class:"block text-sm text-gray-700"},"Descripción:",-1),X={class:"px-4 py-3 bg-gray-50 text-right sm:px-6"},$=(0,o.createTextVNode)(" Registrar ");const J={props:{user:Object},setup:function(e){var t=e,r=(0,o.ref)(!1),n=(0,o.ref)(!1),d=(0,o.ref)(!1),f=(0,o.ref)({name:null,created_by:t.user.uuid,description:null,assigned:t.user.fullname,assigned_to:t.user.uuid,is_parent:!1,parent_uuid:null,status:1}),J=(0,u.Z)(),K=J.storeCategory,Q=J.errors,W=function(){var e,t=(e=a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.value=!0,e.next=3,K(m({},f.value));case 3:r.value=!1,Q.value||l.Inertia.visit(route("catalogos.categories.index"),{method:"get"});case 5:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function l(e){v(o,n,a,l,s,"next",e)}function s(e){v(o,n,a,l,s,"throw",e)}l(void 0)}))});return function(){return t.apply(this,arguments)}}(),Y=function(e){n.value=!1,f.value.assigned=e.fullname,f.value.assigned_to=e.uuid},ee=function(e){d.value=!1,f.value.parent_uuid=e.uuid,f.value.parent=e.name};return function(e,t){var a=(0,o.resolveComponent)("Head"),l=(0,o.resolveComponent)("Link");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)(a,{title:"Registrar Categoría"}),g,(0,o.createElementVNode)("div",x,[(0,o.createElementVNode)("aside",h,[(0,o.createElementVNode)("nav",y,[(0,o.createVNode)(l,{href:e.route("catalogos.categories.index"),class:"text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm","aria-current":"page"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)((0,o.unref)(c.zTD),{class:"h-6 w-6 mr-2"}),b]})),_:1},8,["href"]),(0,o.createVNode)(l,{href:"#",class:"text-purple opacity-75 hover:opacity-100 font-semibold hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm bg-gray-50","aria-current":"page"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)((0,o.unref)(c.XOb),{class:"h-6 w-6 mr-2"}),w]})),_:1}),r.value?((0,o.openBlock)(),(0,o.createElementBlock)("div",k,V)):(0,o.createCommentVNode)("",!0)])]),(0,o.createElementVNode)("div",N,[(0,o.createElementVNode)("div",E,[(0,o.createElementVNode)("div",C,[(0,o.createElementVNode)("div",B,[(0,o.createElementVNode)("h3",O,[(0,o.createVNode)((0,o.unref)(c.XOb),{class:"h-6 w-6 mr-2"}),_]),P]),(0,o.createVNode)((0,o.unref)(s.Z),{errors:(0,o.unref)(Q)},null,8,["errors"]),(0,o.createElementVNode)("div",j,[(0,o.createElementVNode)("div",D,[S,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text",name:"name",id:"name","onUpdate:modelValue":t[0]||(t[0]=function(e){return f.value.name=e}),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"},null,512),[[o.vModelText,f.value.name]])]),(0,o.createElementVNode)("div",Z,[T,n.value?(0,o.createCommentVNode)("",!0):(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createElementBlock)("input",{key:0,class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm",type:"text",name:"assigned_to",id:"assigned_to",autocomplete:"off","onUpdate:modelValue":t[1]||(t[1]=function(e){return f.value.assigned=e}),onClick:t[2]||(t[2]=function(e){return n.value=!0})},null,512)),[[o.vModelText,f.value.assigned]]),(0,o.createVNode)((0,o.unref)(p.Z),{show:n.value,onSetChange:Y,url:e.route("api.search-employees"),label:"fullname",onCloseIt:t[3]||(t[3]=function(e){return n.value=!1})},null,8,["show","url"])])]),(0,o.createElementVNode)("div",M,[(0,o.createElementVNode)("div",z,[U,d.value?(0,o.createCommentVNode)("",!0):(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createElementBlock)("input",{key:0,class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm",type:"text",name:"parent",id:"parent",autocomplete:"off","onUpdate:modelValue":t[4]||(t[4]=function(e){return f.value.parent=e}),onClick:t[5]||(t[5]=function(e){return d.value=!0})},null,512)),[[o.vModelText,f.value.parent]]),(0,o.createVNode)((0,o.unref)(p.Z),{show:d.value,onSetChange:ee,url:e.route("api.search-categories"),label:"name",onCloseIt:t[6]||(t[6]=function(e){return d.value=!1}),parent:f.value.is_parent},null,8,["show","url","parent"])]),(0,o.createElementVNode)("div",F,[(0,o.createElementVNode)("div",L,[(0,o.createElementVNode)("div",R,[(0,o.withDirectives)((0,o.createElementVNode)("input",{id:"is_parent",name:"is_parent",type:"checkbox","onUpdate:modelValue":t[7]||(t[7]=function(e){return f.value.is_parent=e}),class:"focus:ring-purple h-4 w-4 text-purple border-gray-300 rounded"},null,512),[[o.vModelCheckbox,f.value.is_parent]])]),I])])]),(0,o.createElementVNode)("div",q,[(0,o.createElementVNode)("div",A,[(0,o.createElementVNode)("div",G,[H,(0,o.withDirectives)((0,o.createElementVNode)("textarea",{name:"description",id:"description","onUpdate:modelValue":t[8]||(t[8]=function(e){return f.value.description=e}),rows:"3",class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"},null,512),[[o.vModelText,f.value.description]])])])])]),(0,o.createElementVNode)("div",X,[(0,o.createVNode)((0,o.unref)(i.Z),{type:"button",disabled:r.value,onClick:(0,o.withModifiers)(W,["prevent"])},{default:(0,o.withCtx)((function(){return[$]})),_:1},8,["disabled","onClick"])])])])])],64)}}}}}]);