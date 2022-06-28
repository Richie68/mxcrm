"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[971],{2180:(e,t,o)=>{o.d(t,{Z:()=>a});var r=o(5166),n={class:"relative z-10 min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0"},l={class:"w-full sm:max-w-md mt-6 px-6 py-4 border bg-white border-main overflow-hidden sm:rounded-lg"};const s={render:function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("div",n,[(0,r.createElementVNode)("div",null,[(0,r.renderSlot)(e.$slots,"logo")]),(0,r.createElementVNode)("div",l,[(0,r.renderSlot)(e.$slots,"default")])])}},a=s},7254:(e,t,o)=>{o.d(t,{Z:()=>s});var r=o(5166),n=(0,r.createElementVNode)("svg",{class:"w-16 h-16",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,r.createElementVNode)("path",{d:"M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",fill:"#6875F5"}),(0,r.createElementVNode)("path",{d:"M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",fill:"#6875F5"})],-1);const l={render:function(e,t){var o=(0,r.resolveComponent)("Link");return(0,r.openBlock)(),(0,r.createBlock)(o,{href:"/"},{default:(0,r.withCtx)((function(){return[n]})),_:1})}},s=l},8744:(e,t,o)=>{o.d(t,{Z:()=>s});var r=o(5166),n=["type"];const l=(0,r.defineComponent)({props:{type:{type:String,default:"submit"}}});l.render=function(e,t,o,l,s,a){return(0,r.openBlock)(),(0,r.createElementBlock)("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-purple border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-dark active:bg-purple-dark focus:outline-none focus:border-purple-light focus:ring focus:ring-purple-light disabled:opacity-25 transition"},[(0,r.renderSlot)(e.$slots,"default")],8,n)};const s=l},4361:(e,t,o)=>{o.d(t,{Z:()=>s});var r=o(5166),n=["value"];const l=(0,r.defineComponent)({props:["modelValue"],emits:["update:modelValue"],methods:{focus:function(){this.$refs.input.focus()}}});l.render=function(e,t,o,l,s,a){return(0,r.openBlock)(),(0,r.createElementBlock)("input",{class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",value:e.modelValue,onInput:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)}),ref:"input"},null,40,n)};const s=l},4054:(e,t,o)=>{o.d(t,{Z:()=>i});var r=o(5166),n={class:"block font-medium text-sm text-gray-700"},l={key:0},s={key:1};const a=(0,r.defineComponent)({props:["value"]});a.render=function(e,t,o,a,i,c){return(0,r.openBlock)(),(0,r.createElementBlock)("label",n,[e.value?((0,r.openBlock)(),(0,r.createElementBlock)("span",l,(0,r.toDisplayString)(e.value),1)):((0,r.openBlock)(),(0,r.createElementBlock)("span",s,[(0,r.renderSlot)(e.$slots,"default")]))])};const i=a},832:(e,t,o)=>{o.d(t,{Z:()=>i});var r=o(5166),n={key:0},l=(0,r.createElementVNode)("div",{class:"font-medium text-red-600"},"Whoops! Something went wrong.",-1),s={class:"mt-3 list-disc list-inside text-sm text-red-600"};const a=(0,r.defineComponent)({computed:{errors:function(){return this.$page.props.errors},hasErrors:function(){return Object.keys(this.errors).length>0}}});a.render=function(e,t,o,a,i,c){return e.hasErrors?((0,r.openBlock)(),(0,r.createElementBlock)("div",n,[l,(0,r.createElementVNode)("ul",s,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e.errors,(function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("li",{key:t},(0,r.toDisplayString)(e),1)})),128))])])):(0,r.createCommentVNode)("",!0)};const i=a},1971:(e,t,o)=>{o.r(t),o.d(t,{default:()=>g});var r=o(5166),n=(0,r.createElementVNode)("div",{class:"absolute inset-0 z-0"},[(0,r.createElementVNode)("img",{class:"h-full w-full object-cover",src:"/images/bg/bg-beach.jpg",alt:"CRM"}),(0,r.createElementVNode)("div",{class:"absolute inset-0 bg-gray-500",style:{"mix-blend-mode":"multiply"}})],-1),l=(0,r.createElementVNode)("img",{class:"h-20 w-auto",src:"/images/svg/small_logo.svg",alt:"CRM"},null,-1),s={class:"mt-4"},a={class:"mt-4"},i={class:"flex items-center justify-end mt-4"},c=(0,r.createTextVNode)(" Reset Password ");var d=o(2180),u=o(7254),m=o(8744),p=o(4361),f=o(4054),v=o(832);const w=(0,r.defineComponent)({components:{JetInput:p.Z,JetLabel:f.Z,JetButton:m.Z,JetValidationErrors:v.Z,JetAuthenticationCard:d.Z,JetAuthenticationCardLogo:u.Z},props:{email:String,token:String},data:function(){return{form:this.$inertia.form({token:this.token,email:this.email,password:"",password_confirmation:""})}},methods:{submit:function(){var e=this;this.form.post(this.route("password.update"),{onFinish:function(){return e.form.reset("password","password_confirmation")}})}}});w.render=function(e,t,o,d,u,m){var p=(0,r.resolveComponent)("Head"),f=(0,r.resolveComponent)("Link"),v=(0,r.resolveComponent)("jet-validation-errors"),w=(0,r.resolveComponent)("jet-label"),g=(0,r.resolveComponent)("jet-input"),h=(0,r.resolveComponent)("jet-button"),k=(0,r.resolveComponent)("jet-authentication-card");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)(p,{title:"Reset Password"}),n,(0,r.createVNode)(k,null,{logo:(0,r.withCtx)((function(){return[(0,r.createVNode)(f,{href:e.route("login")},{default:(0,r.withCtx)((function(){return[l]})),_:1},8,["href"])]})),default:(0,r.withCtx)((function(){return[(0,r.createVNode)(v,{class:"mb-4"}),(0,r.createElementVNode)("form",{onSubmit:t[3]||(t[3]=(0,r.withModifiers)((function(){return e.submit&&e.submit.apply(e,arguments)}),["prevent"]))},[(0,r.createElementVNode)("div",null,[(0,r.createVNode)(w,{for:"email",value:"Email"}),(0,r.createVNode)(g,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e.form.email,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.form.email=t}),required:"",autofocus:""},null,8,["modelValue"])]),(0,r.createElementVNode)("div",s,[(0,r.createVNode)(w,{for:"password",value:"Password"}),(0,r.createVNode)(g,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e.form.password,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.form.password=t}),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),(0,r.createElementVNode)("div",a,[(0,r.createVNode)(w,{for:"password_confirmation",value:"Confirm Password"}),(0,r.createVNode)(g,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:e.form.password_confirmation,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.form.password_confirmation=t}),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),(0,r.createElementVNode)("div",i,[(0,r.createVNode)(h,{class:(0,r.normalizeClass)({"opacity-25":e.form.processing}),disabled:e.form.processing},{default:(0,r.withCtx)((function(){return[c]})),_:1},8,["class","disabled"])])],32)]})),_:1})],64)};const g=w}}]);