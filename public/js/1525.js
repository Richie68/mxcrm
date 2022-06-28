"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1525],{1525:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var n=r(821),o={class:"bg-white min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8"},s={class:"max-w-max mx-auto"},a={class:"sm:flex"},l=["textContent"],c={class:"sm:ml-6"},i={class:"sm:border-l sm:border-gray-200 sm:pl-6"},d=["textContent"],m=(0,n.createElementVNode)("p",{class:"mt-1 text-base text-gray-500"},"Please check the URL in the address bar and try again.",-1),u={class:"mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6"},p=(0,n.createTextVNode)(" Go back home "),x=(0,n.createElementVNode)("a",{onclick:"window.history.back()",href:"#",class:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"}," Go Back ",-1);const f={props:{status:Number},computed:{title:function(){return{503:"503: Service Unavailable",500:"500: Server Error",404:"404: Page Not Found",403:"403: Forbidden"}[this.status]},description:function(){return{503:"Sorry, we are doing some maintenance. Please check back soon.",500:"Whoops, something went wrong on our servers.",404:"Sorry, the page you are looking for could not be found.",403:"Sorry, you are forbidden from accessing this page."}[this.status]}}};const g=(0,r(3744).Z)(f,[["render",function(e,t,r,f,g,h){var b=(0,n.resolveComponent)("Link");return(0,n.openBlock)(),(0,n.createElementBlock)("div",o,[(0,n.createElementVNode)("div",s,[(0,n.createElementVNode)("main",a,[(0,n.createElementVNode)("p",{class:"text-4xl font-extrabold text-purple sm:text-5xl",textContent:(0,n.toDisplayString)(r.status)},null,8,l),(0,n.createElementVNode)("div",c,[(0,n.createElementVNode)("div",i,[(0,n.createElementVNode)("h1",{class:"text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl",textContent:(0,n.toDisplayString)(h.description)},null,8,d),m]),(0,n.createElementVNode)("div",u,[(0,n.createVNode)(b,{href:e.route("dashboard"),class:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple hover:bg-purple-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-light"},{default:(0,n.withCtx)((function(){return[p]})),_:1},8,["href"]),x])])])])])}]])}}]);