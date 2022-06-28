(self.webpackChunk=self.webpackChunk||[]).push([[2773],{7745:(e,t,r)=>{"use strict";var o,a=r(7757),n=r.n(a),s=r(821),l=r(9038),i=r(1966),c=r(9872);function u(e,t,r,o,a,n,s){try{var l=e[n](s),i=l.value}catch(e){return void r(e)}l.done?t(i):Promise.resolve(i).then(o,a)}r(7333);var d,f,p=(null===(o=window.document.getElementsByTagName("title")[0])||void 0===o?void 0:o.innerText)||"MxPlanners";(0,l.yP)({title:function(e){return"".concat(e," - ").concat(p)},resolve:(d=n().mark((function e(t){var o;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(1273)("./".concat(t,".vue"));case 2:return void 0===(o=e.sent.default).layout&&(o.layout=c.Z),e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})),f=function(){var e=this,t=arguments;return new Promise((function(r,o){var a=d.apply(e,t);function n(e){u(a,r,o,n,s,"next",e)}function s(e){u(a,r,o,n,s,"throw",e)}n(void 0)}))},function(e){return f.apply(this,arguments)}),setup:function(e){var t=e.el,r=e.app,o=e.props,a=e.plugin;return(0,s.createApp)({render:function(){return(0,s.h)(r,o)}}).use(a).mixin({methods:{route}}).component("Link",l.rU).component("Head",l.Fb).mount(t)}}),i.I.init({color:"#3b82f6"})},7333:(e,t,r)=>{window._=r(6486),window.axios=r(9669),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",axios.defaults.withCredentials=!0},2584:()=>{},9872:(e,t,r)=>{"use strict";r.d(t,{Z:()=>Me});var o=r(821),a=(r(9680),{class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"}),n={class:"flex items-center justify-between flex-wrap"},s={class:"w-0 flex-1 flex items-center min-w-0"},l={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},i=[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)],c={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},u=[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null,-1)],d={class:"ml-3 font-medium text-sm text-white truncate"},f={class:"flex-shrink-0 sm:ml-3"},p=[(0,o.createElementVNode)("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)];const h=(0,o.defineComponent)({computed:{style:function(){var e,t;return(null===(e=this.$page.props.jetstream)||void 0===e||null===(t=e.flash)||void 0===t?void 0:t.bannerStyle)||"success"},message:function(){var e,t;return(null===(e=this.$page.props.jetstream)||void 0===e||null===(t=e.flash)||void 0===t?void 0:t.banner)||""}},data:function(){return{show:!0}}});const x=(0,r(3744).Z)(h,[["render",function(e,t,r,h,x,v){return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[e.show&&e.message?((0,o.openBlock)(),(0,o.createElementBlock)("div",{key:0,class:(0,o.normalizeClass)({"bg-green-500":"success"==e.style,"bg-red-700":"danger"==e.style})},[(0,o.createElementVNode)("div",a,[(0,o.createElementVNode)("div",n,[(0,o.createElementVNode)("div",s,[(0,o.createElementVNode)("span",{class:(0,o.normalizeClass)(["flex p-2 rounded-lg",{"bg-green-600":"success"==e.style,"bg-red-600":"danger"==e.style}])},["success"==e.style?((0,o.openBlock)(),(0,o.createElementBlock)("svg",l,i)):(0,o.createCommentVNode)("",!0),"danger"==e.style?((0,o.openBlock)(),(0,o.createElementBlock)("svg",c,u)):(0,o.createCommentVNode)("",!0)],2),(0,o.createElementVNode)("p",d,(0,o.toDisplayString)(e.message),1)]),(0,o.createElementVNode)("div",f,[(0,o.createElementVNode)("button",{type:"button",class:(0,o.normalizeClass)(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-green-600 focus:bg-green-600":"success"==e.style,"hover:bg-red-600 focus:bg-red-600":"danger"==e.style}]),"aria-label":"Dismiss",onClick:t[0]||(t[0]=(0,o.withModifiers)((function(t){return e.show=!1}),["prevent"]))},p,2)])])])],2)):(0,o.createCommentVNode)("",!0)])}]]);var v=r(7439),m=r(9408),g=r(3724),w=r(7751),N=(0,o.createTextVNode)(" Ventas "),y=(0,o.createTextVNode)("Clientes Potenciales"),b=(0,o.createTextVNode)("Grupos");const V={setup:function(e){return function(e,t){var r=(0,o.resolveComponent)("Link");return(0,o.openBlock)(),(0,o.createBlock)((0,o.unref)(m.v2),{as:"div",class:"px-3 py-2 relative"},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",null,[(0,o.createVNode)((0,o.unref)(m.j2),{class:"text-white uppercase hover:text-gray-300 px-3 py-2 rounded-md"},{default:(0,o.withCtx)((function(){return[N]})),_:1})]),(0,o.createVNode)(o.Transition,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)((0,o.unref)(m.sd),{class:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)((0,o.unref)(m.sN),null,{default:(0,o.withCtx)((function(t){var a=t.active;return[(0,o.createVNode)(r,{class:(0,o.normalizeClass)(["hover:bg-purple hover:text-white",[a||e.route().current("ventas.leads.index")?"bg-purple text-white":"","block px-4 py-1 text-sm text-gray-700"]]),href:e.route("ventas.leads.index")},{default:(0,o.withCtx)((function(){return[y]})),_:2},1032,["href","class"])]})),_:1}),(0,o.createVNode)((0,o.unref)(m.sN),null,{default:(0,o.withCtx)((function(t){var a=t.active;return[(0,o.createVNode)(r,{class:(0,o.normalizeClass)(["hover:bg-purple hover:text-white",[a||e.route().current("ventas.groups.index")?"bg-purple text-white":"","block px-4 py-1 text-sm text-gray-700"]]),href:e.route("ventas.groups.index")},{default:(0,o.withCtx)((function(){return[b]})),_:2},1032,["href","class"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})}}};var C=(0,o.createTextVNode)(" Soporte "),k=(0,o.createTextVNode)("Agencias"),_=(0,o.createTextVNode)("Hoteles"),E=(0,o.createTextVNode)("Proveedores"),T=(0,o.createTextVNode)("Productos"),P=(0,o.createTextVNode)("Prods-Categorías"),B=(0,o.createTextVNode)("Branches");const z={setup:function(e){return function(e,t){var r=(0,o.resolveComponent)("Link");return(0,o.openBlock)(),(0,o.createBlock)((0,o.unref)(m.v2),{as:"div",class:"px-3 py-2 relative"},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",null,[(0,o.createVNode)((0,o.unref)(m.j2),{class:"text-white uppercase hover:text-gray-300 px-3 py-2 rounded-md"},{default:(0,o.withCtx)((function(){return[C]})),_:1})]),(0,o.createVNode)(o.Transition,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)((0,o.unref)(m.sd),{class:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)((0,o.unref)(m.sN),null,{default:(0,o.withCtx)((function(t){var a=t.active;return[(0,o.createVNode)(r,{class:(0,o.normalizeClass)(["hover:bg-purple hover:text-white",[a||e.route().current("clientes.agencies.index")?"bg-purple text-white":"","block px-4 py-1 text-sm text-gray-700"]]),href:e.route("clientes.agencies.index")},{default:(0,o.withCtx)((function(){return[k]})),_:2},1032,["href","class"])]})),_:1}),(0,o.createVNode)((0,o.unref)(m.sN),null,{default:(0,o.withCtx)((function(t){var a=t.active;return[(0,o.createVNode)(r,{class:(0,o.normalizeClass)(["hover:bg-purple hover:text-white",[a||e.route().current("clientes.hotels.index")?"bg-purple text-white":"","block px-4 py-1 text-sm text-gray-700 hover:bg-purple hover:text-white"]]),href:e.route("clientes.hotels.index")},{default:(0,o.withCtx)((function(){return[_]})),_:2},1032,["href","class"])]})),_:1}),(0,o.createVNode)((0,o.unref)(m.sN),null,{default:(0,o.withCtx)((function(t){var a=t.active;return[(0,o.createVNode)(r,{class:(0,o.normalizeClass)(["hover:bg-purple hover:text-white",[a||e.route().current("catalogos.suppliers.index")?"bg-purple text-white":"","block px-4 py-1 text-sm text-gray-700 hover:bg-purple hover:text-white"]]),href:e.route("catalogos.suppliers.index")},{default:(0,o.withCtx)((function(){return[E]})),_:2},1032,["href","class"])]})),_:1}),(0,o.createVNode)((0,o.unref)(m.sN),null,{default:(0,o.withCtx)((function(t){var a=t.active;return[(0,o.createVNode)(r,{class:(0,o.normalizeClass)(["hover:bg-purple hover:text-white",[a||e.route().current("soporte.products.index")?"bg-purple text-white":"","block px-4 py-1 text-sm text-gray-700 hover:bg-purple hover:text-white"]]),href:e.route("soporte.products.index")},{default:(0,o.withCtx)((function(){return[T]})),_:2},1032,["href","class"])]})),_:1}),(0,o.createVNode)((0,o.unref)(m.sN),null,{default:(0,o.withCtx)((function(t){var a=t.active;return[(0,o.createVNode)(r,{class:(0,o.normalizeClass)(["hover:bg-purple hover:text-white",[a||e.route().current("catalogos.categories.index")?"bg-purple text-white":"","block px-4 py-1 text-sm text-gray-700 hover:bg-purple hover:text-white"]]),href:e.route("catalogos.categories.index")},{default:(0,o.withCtx)((function(){return[P]})),_:2},1032,["href","class"])]})),_:1}),(0,o.createVNode)((0,o.unref)(m.sN),null,{default:(0,o.withCtx)((function(t){var a=t.active;return[(0,o.createVNode)(r,{class:(0,o.normalizeClass)(["hover:bg-purple hover:text-white",[a||e.route().current("soporte.branchs.index")?"bg-purple text-white":"","block px-4 py-1 text-sm text-gray-700 hover:bg-purple hover:text-white"]]),href:e.route("soporte.branchs.index")},{default:(0,o.withCtx)((function(){return[B]})),_:2},1032,["href","class"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})}}};var S=(0,o.createTextVNode)(" Clientes "),j=(0,o.createTextVNode)("Contactos"),A=(0,o.createTextVNode)("Agencias"),M=(0,o.createTextVNode)("Hoteles"),I=(0,o.createTextVNode)("Comisionistas");const L={setup:function(e){return function(e,t){var r=(0,o.resolveComponent)("Link");return(0,o.openBlock)(),(0,o.createBlock)((0,o.unref)(m.v2),{as:"div",class:"px-3 py-2 relative"},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",null,[(0,o.createVNode)((0,o.unref)(m.j2),{class:"text-white uppercase hover:text-gray-300 px-3 py-2 rounded-md"},{default:(0,o.withCtx)((function(){return[S]})),_:1})]),(0,o.createVNode)(o.Transition,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)((0,o.unref)(m.sd),{class:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)((0,o.unref)(m.sN),null,{default:(0,o.withCtx)((function(t){var a=t.active;return[(0,o.createVNode)(r,{class:(0,o.normalizeClass)(["hover:bg-purple hover:text-white",[a||e.route().current("clientes.contacts.index")?"bg-purple text-white":"","block px-4 py-1 text-sm text-gray-700"]]),href:e.route("clientes.contacts.index")},{default:(0,o.withCtx)((function(){return[j]})),_:2},1032,["href","class"])]})),_:1}),(0,o.createVNode)((0,o.unref)(m.sN),null,{default:(0,o.withCtx)((function(t){var a=t.active;return[(0,o.createVNode)(r,{class:(0,o.normalizeClass)(["hover:bg-purple hover:text-white",[a||e.route().current("clientes.agencies.index")?"bg-purple text-white":"","block px-4 py-1 text-sm text-gray-700"]]),href:e.route("clientes.agencies.index")},{default:(0,o.withCtx)((function(){return[A]})),_:2},1032,["href","class"])]})),_:1}),(0,o.createVNode)((0,o.unref)(m.sN),null,{default:(0,o.withCtx)((function(t){var a=t.active;return[(0,o.createVNode)(r,{class:(0,o.normalizeClass)(["hover:bg-purple hover:text-white",[a||e.route().current("clientes.hotels.index")?"bg-purple text-white":"","block px-4 py-1 text-sm text-gray-700 hover:bg-purple hover:text-white"]]),href:e.route("clientes.hotels.index")},{default:(0,o.withCtx)((function(){return[M]})),_:2},1032,["href","class"])]})),_:1}),(0,o.createVNode)((0,o.unref)(m.sN),null,{default:(0,o.withCtx)((function(t){var a=t.active;return[(0,o.createVNode)(r,{class:(0,o.normalizeClass)(["hover:bg-purple hover:text-white",[a||e.route().current("clientes.retailers.index")?"bg-purple text-white":"","block px-4 py-1 text-sm text-gray-700 hover:bg-purple hover:text-white"]]),href:e.route("clientes.retailers.index")},{default:(0,o.withCtx)((function(){return[I]})),_:2},1032,["href","class"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})}}};var D=(0,o.createTextVNode)(" Catalogos "),F=(0,o.createTextVNode)("Hoteles"),R=(0,o.createTextVNode)("Orígenes"),O=(0,o.createTextVNode)("Proveedores"),$=(0,o.createTextVNode)("Prods-Categorías"),G=(0,o.createTextVNode)("Usuarios CRM");const U={setup:function(e){return function(e,t){var r=(0,o.resolveComponent)("Link");return(0,o.openBlock)(),(0,o.createBlock)((0,o.unref)(m.v2),{as:"div",class:"px-3 py-2 relative"},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",null,[(0,o.createVNode)((0,o.unref)(m.j2),{class:"text-white uppercase hover:text-gray-300 px-3 py-2 rounded-md"},{default:(0,o.withCtx)((function(){return[D]})),_:1})]),(0,o.createVNode)(o.Transition,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)((0,o.unref)(m.sd),{class:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)((0,o.unref)(m.sN),null,{default:(0,o.withCtx)((function(t){var a=t.active;return[(0,o.createVNode)(r,{class:(0,o.normalizeClass)(["hover:bg-purple hover:text-white",[a||e.route().current("clientes.hotels.index")?"bg-purple text-white":"","block px-4 py-1 text-sm text-gray-700 hover:bg-purple hover:text-white"]]),href:e.route("clientes.hotels.index")},{default:(0,o.withCtx)((function(){return[F]})),_:2},1032,["href","class"])]})),_:1}),(0,o.createVNode)((0,o.unref)(m.sN),null,{default:(0,o.withCtx)((function(t){var a=t.active;return[(0,o.createVNode)(r,{class:(0,o.normalizeClass)(["hover:bg-purple hover:text-white",[a||e.route().current("soporte.origins.index")?"bg-purple text-white":"","block px-4 py-1 text-sm text-gray-700 hover:bg-purple hover:text-white"]]),href:e.route("soporte.origins.index")},{default:(0,o.withCtx)((function(){return[R]})),_:2},1032,["href","class"])]})),_:1}),(0,o.createVNode)((0,o.unref)(m.sN),null,{default:(0,o.withCtx)((function(t){var a=t.active;return[(0,o.createVNode)(r,{class:(0,o.normalizeClass)(["hover:bg-purple hover:text-white",[a||e.route().current("catalogos.suppliers.index")?"bg-purple text-white":"","block px-4 py-1 text-sm text-gray-700 hover:bg-purple hover:text-white"]]),href:e.route("catalogos.suppliers.index")},{default:(0,o.withCtx)((function(){return[O]})),_:2},1032,["href","class"])]})),_:1}),(0,o.createVNode)((0,o.unref)(m.sN),null,{default:(0,o.withCtx)((function(t){var a=t.active;return[(0,o.createVNode)(r,{class:(0,o.normalizeClass)(["hover:bg-purple hover:text-white",[a||e.route().current("catalogos.categories.index")?"bg-purple text-white":"","block px-4 py-1 text-sm text-gray-700 hover:bg-purple hover:text-white"]]),href:e.route("catalogos.categories.index")},{default:(0,o.withCtx)((function(){return[$]})),_:2},1032,["href","class"])]})),_:1}),(0,o.createVNode)((0,o.unref)(m.sN),null,{default:(0,o.withCtx)((function(t){var a=t.active;return[(0,o.createVNode)(r,{class:(0,o.normalizeClass)(["hover:bg-purple hover:text-white",[a||e.route().current("empleados.index")?"bg-purple text-white":"","block px-4 py-1 text-sm text-gray-700 hover:bg-purple hover:text-white"]]),href:e.route("empleados.index")},{default:(0,o.withCtx)((function(){return[G]})),_:2},1032,["href","class"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})}}};var H=(0,o.createTextVNode)(" Marketing "),q=(0,o.createTextVNode)("Empresas"),Z=(0,o.createTextVNode)("Contactos");const W={setup:function(e){return function(e,t){var r=(0,o.resolveComponent)("Link");return(0,o.openBlock)(),(0,o.createBlock)((0,o.unref)(m.v2),{as:"div",class:"px-3 py-2 relative"},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",null,[(0,o.createVNode)((0,o.unref)(m.j2),{class:"text-white uppercase hover:text-gray-300 px-3 py-2 rounded-md"},{default:(0,o.withCtx)((function(){return[H]})),_:1})]),(0,o.createVNode)(o.Transition,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)((0,o.unref)(m.sd),{class:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)((0,o.unref)(m.sN),null,{default:(0,o.withCtx)((function(t){var a=t.active;return[(0,o.createVNode)(r,{class:(0,o.normalizeClass)(["hover:bg-purple hover:text-white",[a||e.route().current("marketing.company.index")?"bg-purple text-white":"","block px-4 py-1 text-sm text-gray-700"]]),href:e.route("marketing.company.index")},{default:(0,o.withCtx)((function(){return[q]})),_:2},1032,["href","class"])]})),_:1}),(0,o.createVNode)((0,o.unref)(m.sN),null,{default:(0,o.withCtx)((function(t){var a=t.active;return[(0,o.createVNode)(r,{class:(0,o.normalizeClass)(["hover:bg-purple hover:text-white",[a||e.route().current("clientes.contacts.index")?"bg-purple text-white":"","block px-4 py-1 text-sm text-gray-700"]]),href:e.route("clientes.contacts.index")},{default:(0,o.withCtx)((function(){return[Z]})),_:2},1032,["href","class"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})}}};var X={class:"max-w-7xl mx-auto px-2 sm:px-4 lg:px-8"},J={class:"relative flex items-center justify-between h-16"},K={class:"flex items-center px-2 lg:px-0"},Q={class:"flex-shrink-0"},Y=(0,o.createElementVNode)("img",{class:"block lg:hidden h-8 w-auto",src:"/images/svg/small_logo.svg",alt:"CRM"},null,-1),ee=(0,o.createElementVNode)("img",{class:"hidden lg:block h-8 w-auto",src:"/images/svg/small_logo.svg",alt:"CRM"},null,-1),te={class:"hidden lg:block lg:ml-6"},re={class:"flex space-x-4 uppercase text-sm"},oe={class:"flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end"},ae={class:"max-w-lg w-full lg:w-10 overflow-hidden rounded"},ne={class:"flex lg:hidden"},se=(0,o.createElementVNode)("span",{class:"sr-only"},"Abrir menú principal",-1),le={class:"hidden lg:block lg:ml-4"},ie={class:"flex items-center"},ce={type:"button",class:"flex-shrink-0 bg-white p-1 rounded-full text-gray-800 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition"},ue=(0,o.createElementVNode)("span",{class:"sr-only"},"Notificaciones",-1),de=(0,o.createElementVNode)("span",{class:"sr-only"},"Abrir menú usuario",-1),fe=["src","alt"],pe=(0,o.createTextVNode)("Mi cuenta"),he=(0,o.createTextVNode)("API Tokens"),xe=(0,o.createTextVNode)("Usuarios CRM"),ve=(0,o.createTextVNode)("Salir"),me={class:"px-2 pt-2 pb-3 space-y-1"},ge=(0,o.createTextVNode)("Usuarios CRM"),we=(0,o.createTextVNode)("Dashboard"),Ne={class:"pt-4 pb-3 border-t border-gray-700"},ye={class:"flex items-center px-5"},be={class:"flex-shrink-0"},Ve=["src","alt"],Ce={class:"ml-3"},ke={class:"text-base font-medium text-white"},_e={class:"text-sm font-medium text-gray-50"},Ee={type:"button",class:"ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-white transition"},Te=(0,o.createElementVNode)("span",{class:"sr-only"},"Notificaciones",-1),Pe={class:"mt-3 px-2 space-y-1"},Be=(0,o.createElementVNode)("a",{href:"#",class:"block px-3 py-2 rounded-md text-base font-medium text-white"},"Mi perfil",-1),ze=(0,o.createElementVNode)("a",{href:"#",class:"block px-3 py-2 rounded-md text-base font-medium text-white"},"Settings",-1),Se=(0,o.createTextVNode)("Salir");const je={setup:function(e){return function(e,t){var r=(0,o.resolveComponent)("Link");return(0,o.openBlock)(),(0,o.createBlock)((0,o.unref)(v.pJ),{as:"nav",class:"bg-purple relative z-40"},{default:(0,o.withCtx)((function(t){var a=t.open;return[(0,o.createElementVNode)("div",X,[(0,o.createElementVNode)("div",J,[(0,o.createElementVNode)("div",K,[(0,o.createElementVNode)("div",Q,[(0,o.createVNode)(r,{href:e.route("dashboard")},{default:(0,o.withCtx)((function(){return[Y,ee]})),_:1},8,["href"])]),(0,o.createElementVNode)("div",te,[(0,o.createElementVNode)("div",re,[(0,o.createVNode)((0,o.unref)(L)),(0,o.createVNode)((0,o.unref)(V)),(0,o.createVNode)((0,o.unref)(W)),(0,o.createVNode)((0,o.unref)(z)),(0,o.createVNode)((0,o.unref)(U))])])]),(0,o.createElementVNode)("div",oe,[(0,o.createElementVNode)("div",ae,[(0,o.createVNode)((0,o.unref)(g.W1M),{class:"h-6 w-6 text-white","aria-hidden":"true"})])]),(0,o.createElementVNode)("div",ne,[(0,o.createVNode)((0,o.unref)(v.lG),{class:"inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-700 hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition"},{default:(0,o.withCtx)((function(){return[se,a?((0,o.openBlock)(),(0,o.createBlock)((0,o.unref)(w.b0D),{key:1,class:"block h-6 w-6","aria-hidden":"true"})):((0,o.openBlock)(),(0,o.createBlock)((0,o.unref)(w.Oqj),{key:0,class:"block h-6 w-6","aria-hidden":"true"}))]})),_:2},1024)]),(0,o.createElementVNode)("div",le,[(0,o.createElementVNode)("div",ie,[(0,o.createElementVNode)("button",ce,[ue,(0,o.createVNode)((0,o.unref)(w.Dkj),{class:"h-6 w-6","aria-hidden":"true"})]),(0,o.createVNode)((0,o.unref)(m.v2),{as:"div",class:"ml-4 relative flex-shrink-0"},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",null,[(0,o.createVNode)((0,o.unref)(m.j2),{class:"bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"},{default:(0,o.withCtx)((function(){return[de,(0,o.createElementVNode)("img",{class:"h-8 w-8 rounded-full object-cover",src:e.$page.props.user.profile_photo_url,alt:e.$page.props.user.name},null,8,fe)]})),_:1})]),(0,o.createVNode)(o.Transition,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)((0,o.unref)(m.sd),{class:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)((0,o.unref)(m.sN),null,{default:(0,o.withCtx)((function(t){var a=t.active;return[(0,o.createVNode)(r,{href:e.route("profile.show"),class:(0,o.normalizeClass)([a||e.route().current("profile.show")?"bg-purple text-white":"","block px-4 py-2 text-sm text-gray-700"])},{default:(0,o.withCtx)((function(){return[pe]})),_:2},1032,["href","class"])]})),_:1}),(0,o.createVNode)((0,o.unref)(m.sN),null,{default:(0,o.withCtx)((function(t){var a=t.active;return[(0,o.createVNode)(r,{href:e.route("api-tokens.index"),class:(0,o.normalizeClass)([a||e.route().current("api-tokens.index")?"bg-purple text-white":"","block px-4 py-2 text-sm text-gray-700"])},{default:(0,o.withCtx)((function(){return[he]})),_:2},1032,["href","class"])]})),_:1}),e.$page.props.user.level<=1?((0,o.openBlock)(),(0,o.createBlock)((0,o.unref)(m.sN),{key:0},{default:(0,o.withCtx)((function(t){var a=t.active;return[(0,o.createVNode)(r,{href:e.route("empleados.index"),class:(0,o.normalizeClass)([a||e.route().current("empleados.index")?"bg-purple text-white":"","block px-4 py-2 text-sm text-gray-700"])},{default:(0,o.withCtx)((function(){return[xe]})),_:2},1032,["href","class"])]})),_:1})):(0,o.createCommentVNode)("",!0),(0,o.createVNode)((0,o.unref)(m.sN),null,{default:(0,o.withCtx)((function(t){t.active;return[(0,o.createVNode)(r,{href:e.route("logout"),method:"post",as:"button",class:"block px-4 py-2 text-sm text-gray-700"},{default:(0,o.withCtx)((function(){return[ve]})),_:1},8,["href"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})])])])]),(0,o.createVNode)((0,o.unref)(v.V2),{class:"lg:hidden"},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",me,[(0,o.createVNode)(r,{href:e.route("empleados.index"),class:(0,o.normalizeClass)(["hover:bg-gray-50 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium",[e.route().current("empleados.index")?"bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-50":"text-white"]])},{default:(0,o.withCtx)((function(){return[ge]})),_:1},8,["href","class"]),(0,o.createVNode)(r,{href:e.route("dashboard"),class:(0,o.normalizeClass)(["hover:bg-gray-50 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium",[e.route().current("dashboard")?"bg-gray-100 text-gray-700 hover:bg-gray-200":"text-white"]])},{default:(0,o.withCtx)((function(){return[we]})),_:1},8,["href","class"])]),(0,o.createElementVNode)("div",Ne,[(0,o.createElementVNode)("div",ye,[(0,o.createElementVNode)("div",be,[(0,o.createElementVNode)("img",{class:"h-8 w-8 rounded-full object-cover",src:e.$page.props.user.profile_photo_url,alt:e.$page.props.user.name},null,8,Ve)]),(0,o.createElementVNode)("div",Ce,[(0,o.createElementVNode)("div",ke,(0,o.toDisplayString)(e.$page.props.user.name),1),(0,o.createElementVNode)("div",_e,(0,o.toDisplayString)(e.$page.props.user.email),1)]),(0,o.createElementVNode)("button",Ee,[Te,(0,o.createVNode)((0,o.unref)(w.Dkj),{class:"h-6 w-6","aria-hidden":"true"})])]),(0,o.createElementVNode)("div",Pe,[Be,ze,(0,o.createVNode)(r,{href:e.route("logout"),method:"post",as:"button",class:"block px-3 py-2 rounded-md text-base font-medium text-white"},{default:(0,o.withCtx)((function(){return[Se]})),_:1},8,["href"])])])]})),_:1})]})),_:1})}}};var Ae={class:"min-h-screen bg-gray-100"};const Me={props:{title:String},setup:function(e){(0,o.ref)(!0);return function(t,r){var a=(0,o.resolveComponent)("Head");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createVNode)(a,{title:e.title},null,8,["title"]),(0,o.createVNode)(x),t.$page.props.user?((0,o.openBlock)(),(0,o.createBlock)((0,o.unref)(je),{key:0})):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("div",Ae,[(0,o.createElementVNode)("main",null,[(0,o.renderSlot)(t.$slots,"default")])])])}}}},1273:(e,t,r)=>{var o={"./API/Index.vue":[9428,9428],"./API/Partials/ApiTokenManager.vue":[2785,2785],"./Admin/Dashboard.vue":[7662,7662],"./Agency/Create.vue":[7496,8898,7496],"./Agency/Index.vue":[309,8898,309],"./Agency/Show.vue":[1618,8898,1618],"./Auth/ConfirmPassword.vue":[2699,2699],"./Auth/ForgotPassword.vue":[2277,2277],"./Auth/Login.vue":[7980,7980],"./Auth/Register.vue":[9071,9071],"./Auth/ResetPassword.vue":[2455,2455],"./Auth/TwoFactorChallenge.vue":[9100,9100],"./Auth/VerifyEmail.vue":[1334,5515],"./Categories/Create.vue":[1836,8898,1836],"./Categories/Generales.vue":[4278,8898,4278],"./Categories/Index.vue":[4559,8898,4559],"./Categories/Show.vue":[7412,8898,7412],"./Company/Create.vue":[8521,8898,8521],"./Company/Generales.vue":[7921,8898,7921],"./Company/Index.vue":[6872,8898,6872],"./Company/Show.vue":[4626,8898,4626],"./Contact/Create.vue":[3616,8898,3616],"./Contact/Generales.vue":[5070,8898,5070],"./Contact/Index.vue":[6177,8898,6177],"./Contact/Show.vue":[2313,8898,2313],"./Empleados/Create.vue":[9194,8898,9194],"./Empleados/Index.vue":[3568,8898,3568],"./Empleados/Show.vue":[2529,8898,2529],"./Error.vue":[1525,1525],"./Groups/Create.vue":[2630,8898,2630],"./Groups/Index.vue":[8673,8898,8673],"./Hotels/Index.vue":[4906,8898,4906],"./Leads/Create.vue":[8839,8898,8839],"./Leads/Generales.vue":[7803,8898,7803],"./Leads/Index.vue":[4445,8898,4445],"./Leads/Show.vue":[8166,8898,8166],"./Origins/Index.vue":[2195,8898,2195],"./PrivacyPolicy.vue":[3459,3459],"./Products/Create.vue":[8979,8898,8979],"./Products/Generales.vue":[6490,8898,6490],"./Products/Index.vue":[9575,8898,9575],"./Products/Show.vue":[6540,8898,6540],"./Profile/Partials/DeleteUserForm.vue":[8545,8545],"./Profile/Partials/LogoutOtherBrowserSessionsForm.vue":[8664,8664],"./Profile/Partials/TwoFactorAuthenticationForm.vue":[2221,2221],"./Profile/Partials/UpdatePasswordForm.vue":[1698,1698],"./Profile/Partials/UpdateProfileInformationForm.vue":[2015,2015],"./Profile/Show.vue":[722,722],"./Retailer/Create.vue":[8745,8898,8745],"./Retailer/Generales.vue":[4274,8898,4274],"./Retailer/Index.vue":[6129,8898,6129],"./Retailer/Show.vue":[4019,8898,4019],"./Soporte/Branches/Index.vue":[4300,8898,4300],"./Suppliers/Create.vue":[1675,8898,1675],"./Suppliers/Index.vue":[1661,8898,1661],"./Suppliers/Show.vue":[3388,8898,3388],"./Teams/Create.vue":[145,145],"./Teams/Partials/CreateTeamForm.vue":[4758,4758],"./Teams/Partials/DeleteTeamForm.vue":[1029,1029],"./Teams/Partials/TeamMemberManager.vue":[1621,1621],"./Teams/Partials/UpdateTeamNameForm.vue":[6699,6699],"./Teams/Show.vue":[4431,4431],"./TermsOfService.vue":[9238,9238]};function a(e){if(!r.o(o,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],a=t[0];return Promise.all(t.slice(1).map(r.e)).then((()=>r(a)))}a.keys=()=>Object.keys(o),a.id=1273,e.exports=a},4654:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[6170,8898],(()=>(t(7745),t(2584))));e.O()}]);