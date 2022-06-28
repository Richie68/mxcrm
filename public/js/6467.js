"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6467],{9206:(e,t,o)=>{o.d(t,{Z:()=>a});var r=o(5166),s={class:"text-sm text-gray-600"};const n=(0,r.defineComponent)({props:["on"]});n.render=function(e,t,o,n,a,l){return(0,r.openBlock)(),(0,r.createElementBlock)("div",null,[(0,r.createVNode)(r.Transition,{"leave-active-class":"transition ease-in duration-1000","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:(0,r.withCtx)((function(){return[(0,r.withDirectives)((0,r.createElementVNode)("div",s,[(0,r.renderSlot)(e.$slots,"default")],512),[[r.vShow,e.on]])]})),_:3})])};const a=n},8744:(e,t,o)=>{o.d(t,{Z:()=>a});var r=o(5166),s=["type"];const n=(0,r.defineComponent)({props:{type:{type:String,default:"submit"}}});n.render=function(e,t,o,n,a,l){return(0,r.openBlock)(),(0,r.createElementBlock)("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-purple border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-dark active:bg-purple-dark focus:outline-none focus:border-purple-light focus:ring focus:ring-purple-light disabled:opacity-25 transition"},[(0,r.renderSlot)(e.$slots,"default")],8,s)};const a=n},6730:(e,t,o)=>{o.d(t,{Z:()=>i});var r=o(5166),s={class:"md:grid md:grid-cols-3 md:gap-6"},n={class:"mt-5 md:mt-0 md:col-span-2"},a={class:"grid grid-cols-6 gap-6"},l={key:0,class:"flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md"};var c=o(3929);const d=(0,r.defineComponent)({emits:["submitted"],components:{JetSectionTitle:c.Z},computed:{hasActions:function(){return!!this.$slots.actions}}});d.render=function(e,t,o,c,d,i){var u=(0,r.resolveComponent)("jet-section-title");return(0,r.openBlock)(),(0,r.createElementBlock)("div",s,[(0,r.createVNode)(u,null,{title:(0,r.withCtx)((function(){return[(0,r.renderSlot)(e.$slots,"title")]})),description:(0,r.withCtx)((function(){return[(0,r.renderSlot)(e.$slots,"description")]})),_:3}),(0,r.createElementVNode)("div",n,[(0,r.createElementVNode)("form",{onSubmit:t[0]||(t[0]=(0,r.withModifiers)((function(t){return e.$emit("submitted")}),["prevent"]))},[(0,r.createElementVNode)("div",{class:(0,r.normalizeClass)(["px-4 py-5 bg-white sm:p-6 shadow",e.hasActions?"sm:rounded-tl-md sm:rounded-tr-md":"sm:rounded-md"])},[(0,r.createElementVNode)("div",a,[(0,r.renderSlot)(e.$slots,"form")])],2),e.hasActions?((0,r.openBlock)(),(0,r.createElementBlock)("div",l,[(0,r.renderSlot)(e.$slots,"actions")])):(0,r.createCommentVNode)("",!0)],32)])])};const i=d},4361:(e,t,o)=>{o.d(t,{Z:()=>a});var r=o(5166),s=["value"];const n=(0,r.defineComponent)({props:["modelValue"],emits:["update:modelValue"],methods:{focus:function(){this.$refs.input.focus()}}});n.render=function(e,t,o,n,a,l){return(0,r.openBlock)(),(0,r.createElementBlock)("input",{class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",value:e.modelValue,onInput:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)}),ref:"input"},null,40,s)};const a=n},1174:(e,t,o)=>{o.d(t,{Z:()=>a});var r=o(5166),s={class:"text-sm text-red-600"};const n=(0,r.defineComponent)({props:["message"]});n.render=function(e,t,o,n,a,l){return(0,r.withDirectives)(((0,r.openBlock)(),(0,r.createElementBlock)("div",null,[(0,r.createElementVNode)("p",s,(0,r.toDisplayString)(e.message),1)],512)),[[r.vShow,e.message]])};const a=n},4054:(e,t,o)=>{o.d(t,{Z:()=>c});var r=o(5166),s={class:"block font-medium text-sm text-gray-700"},n={key:0},a={key:1};const l=(0,r.defineComponent)({props:["value"]});l.render=function(e,t,o,l,c,d){return(0,r.openBlock)(),(0,r.createElementBlock)("label",s,[e.value?((0,r.openBlock)(),(0,r.createElementBlock)("span",n,(0,r.toDisplayString)(e.value),1)):((0,r.openBlock)(),(0,r.createElementBlock)("span",a,[(0,r.renderSlot)(e.$slots,"default")]))])};const c=l},3929:(e,t,o)=>{o.d(t,{Z:()=>i});var r=o(5166),s={class:"md:col-span-1 flex justify-between"},n={class:"px-4 sm:px-0"},a={class:"text-lg font-medium text-gray-900"},l={class:"mt-1 text-sm text-gray-600"},c={class:"px-4 sm:px-0"};const d={render:function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("div",s,[(0,r.createElementVNode)("div",n,[(0,r.createElementVNode)("h3",a,[(0,r.renderSlot)(e.$slots,"title")]),(0,r.createElementVNode)("p",l,[(0,r.renderSlot)(e.$slots,"description")])]),(0,r.createElementVNode)("div",c,[(0,r.renderSlot)(e.$slots,"aside")])])}},i=d},6467:(e,t,o)=>{o.r(t),o.d(t,{default:()=>V});var r=o(5166),s=(0,r.createTextVNode)(" Update Password "),n=(0,r.createTextVNode)(" Ensure your account is using a long, random password to stay secure. "),a={class:"col-span-6 sm:col-span-4"},l={class:"col-span-6 sm:col-span-4"},c={class:"col-span-6 sm:col-span-4"},d=(0,r.createTextVNode)(" Saved. "),i=(0,r.createTextVNode)(" Save ");var u=o(9206),m=o(8744),p=o(6730),f=o(4361),w=o(1174),v=o(4054);const g=(0,r.defineComponent)({components:{JetActionMessage:u.Z,JetButton:m.Z,JetFormSection:p.Z,JetInput:f.Z,JetInputError:w.Z,JetLabel:v.Z},data:function(){return{form:this.$inertia.form({current_password:"",password:"",password_confirmation:""})}},methods:{updatePassword:function(){var e=this;this.form.put(route("user-password.update"),{errorBag:"updatePassword",preserveScroll:!0,onSuccess:function(){return e.form.reset()},onError:function(){e.form.errors.password&&(e.form.reset("password","password_confirmation"),e.$refs.password.focus()),e.form.errors.current_password&&(e.form.reset("current_password"),e.$refs.current_password.focus())}})}}});g.render=function(e,t,o,u,m,p){var f=(0,r.resolveComponent)("jet-label"),w=(0,r.resolveComponent)("jet-input"),v=(0,r.resolveComponent)("jet-input-error"),g=(0,r.resolveComponent)("jet-action-message"),V=(0,r.resolveComponent)("jet-button"),x=(0,r.resolveComponent)("jet-form-section");return(0,r.openBlock)(),(0,r.createBlock)(x,{onSubmitted:e.updatePassword},{title:(0,r.withCtx)((function(){return[s]})),description:(0,r.withCtx)((function(){return[n]})),form:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("div",a,[(0,r.createVNode)(f,{for:"current_password",value:"Current Password"}),(0,r.createVNode)(w,{id:"current_password",type:"password",class:"mt-1 block w-full",modelValue:e.form.current_password,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.form.current_password=t}),ref:"current_password",autocomplete:"current-password"},null,8,["modelValue"]),(0,r.createVNode)(v,{message:e.form.errors.current_password,class:"mt-2"},null,8,["message"])]),(0,r.createElementVNode)("div",l,[(0,r.createVNode)(f,{for:"password",value:"New Password"}),(0,r.createVNode)(w,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e.form.password,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.form.password=t}),ref:"password",autocomplete:"new-password"},null,8,["modelValue"]),(0,r.createVNode)(v,{message:e.form.errors.password,class:"mt-2"},null,8,["message"])]),(0,r.createElementVNode)("div",c,[(0,r.createVNode)(f,{for:"password_confirmation",value:"Confirm Password"}),(0,r.createVNode)(w,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:e.form.password_confirmation,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.form.password_confirmation=t}),autocomplete:"new-password"},null,8,["modelValue"]),(0,r.createVNode)(v,{message:e.form.errors.password_confirmation,class:"mt-2"},null,8,["message"])])]})),actions:(0,r.withCtx)((function(){return[(0,r.createVNode)(g,{on:e.form.recentlySuccessful,class:"mr-3"},{default:(0,r.withCtx)((function(){return[d]})),_:1},8,["on"]),(0,r.createVNode)(V,{class:(0,r.normalizeClass)({"opacity-25":e.form.processing}),disabled:e.form.processing},{default:(0,r.withCtx)((function(){return[i]})),_:1},8,["class","disabled"])]})),_:1},8,["onSubmitted"])};const V=g}}]);