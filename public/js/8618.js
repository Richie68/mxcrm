"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8618],{2180:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(5166),r={class:"relative z-10 min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0"},i={class:"w-full sm:max-w-md mt-6 px-6 py-4 border bg-white border-main overflow-hidden sm:rounded-lg"};const l={render:function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("div",r,[(0,o.createElementVNode)("div",null,[(0,o.renderSlot)(e.$slots,"logo")]),(0,o.createElementVNode)("div",i,[(0,o.renderSlot)(e.$slots,"default")])])}},s=l},7254:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(5166),r=(0,o.createElementVNode)("svg",{class:"w-16 h-16",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,o.createElementVNode)("path",{d:"M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",fill:"#6875F5"}),(0,o.createElementVNode)("path",{d:"M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",fill:"#6875F5"})],-1);const i={render:function(e,t){var n=(0,o.resolveComponent)("Link");return(0,o.openBlock)(),(0,o.createBlock)(n,{href:"/"},{default:(0,o.withCtx)((function(){return[r]})),_:1})}},l=i},8744:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(5166),r=["type"];const i=(0,o.defineComponent)({props:{type:{type:String,default:"submit"}}});i.render=function(e,t,n,i,l,s){return(0,o.openBlock)(),(0,o.createElementBlock)("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-purple border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-dark active:bg-purple-dark focus:outline-none focus:border-purple-light focus:ring focus:ring-purple-light disabled:opacity-25 transition"},[(0,o.renderSlot)(e.$slots,"default")],8,r)};const l=i},8618:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var o=n(5166),r=(0,o.createElementVNode)("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),i={key:0,class:"mb-4 font-medium text-sm text-green-600"},l={class:"mt-4 flex items-center justify-between"},s=(0,o.createTextVNode)(" Resend Verification Email "),a=(0,o.createTextVNode)("Log Out");var c=n(2180),d=n(7254),u=n(8744);const m=(0,o.defineComponent)({components:{JetAuthenticationCard:c.Z,JetAuthenticationCardLogo:d.Z,JetButton:u.Z},props:{status:String},data:function(){return{form:this.$inertia.form()}},methods:{submit:function(){this.form.post(this.route("verification.send"))}},computed:{verificationLinkSent:function(){return"verification-link-sent"===this.status}}});m.render=function(e,t,n,c,d,u){var m=(0,o.resolveComponent)("Head"),f=(0,o.resolveComponent)("jet-authentication-card-logo"),p=(0,o.resolveComponent)("jet-button"),h=(0,o.resolveComponent)("Link"),g=(0,o.resolveComponent)("jet-authentication-card");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)(m,{title:"Email Verification"}),(0,o.createVNode)(g,null,{logo:(0,o.withCtx)((function(){return[(0,o.createVNode)(f)]})),default:(0,o.withCtx)((function(){return[r,e.verificationLinkSent?((0,o.openBlock)(),(0,o.createElementBlock)("div",i," A new verification link has been sent to the email address you provided during registration. ")):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("form",{onSubmit:t[0]||(t[0]=(0,o.withModifiers)((function(){return e.submit&&e.submit.apply(e,arguments)}),["prevent"]))},[(0,o.createElementVNode)("div",l,[(0,o.createVNode)(p,{class:(0,o.normalizeClass)({"opacity-25":e.form.processing}),disabled:e.form.processing},{default:(0,o.withCtx)((function(){return[s]})),_:1},8,["class","disabled"]),(0,o.createVNode)(h,{href:e.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:(0,o.withCtx)((function(){return[a]})),_:1},8,["href"])])],32)]})),_:1})],64)};const f=m}}]);