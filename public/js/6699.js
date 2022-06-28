"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6699],{8789:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(821),r={class:"text-sm text-gray-600"};const s=(0,o.defineComponent)({props:["on"]});const a=(0,n(3744).Z)(s,[["render",function(e,t,n,s,a,l){return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createVNode)(o.Transition,{"leave-active-class":"transition ease-in duration-1000","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:(0,o.withCtx)((function(){return[(0,o.withDirectives)((0,o.createElementVNode)("div",r,[(0,o.renderSlot)(e.$slots,"default")],512),[[o.vShow,e.on]])]})),_:3})])}]])},7826:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(821),r=["type"];const s=(0,o.defineComponent)({props:{type:{type:String,default:"submit"}}});const a=(0,n(3744).Z)(s,[["render",function(e,t,n,s,a,l){return(0,o.openBlock)(),(0,o.createElementBlock)("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-purple border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-dark active:bg-purple-dark focus:outline-none focus:border-purple-light focus:ring focus:ring-purple-light disabled:opacity-25 transition"},[(0,o.renderSlot)(e.$slots,"default")],8,r)}]])},9153:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(821),r={class:"md:grid md:grid-cols-3 md:gap-6"},s={class:"mt-5 md:mt-0 md:col-span-2"},a={class:"grid grid-cols-6 gap-6"},l={key:0,class:"flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md"};var c=n(5218);const i=(0,o.defineComponent)({emits:["submitted"],components:{JetSectionTitle:c.Z},computed:{hasActions:function(){return!!this.$slots.actions}}});const d=(0,n(3744).Z)(i,[["render",function(e,t,n,c,i,d){var m=(0,o.resolveComponent)("jet-section-title");return(0,o.openBlock)(),(0,o.createElementBlock)("div",r,[(0,o.createVNode)(m,null,{title:(0,o.withCtx)((function(){return[(0,o.renderSlot)(e.$slots,"title")]})),description:(0,o.withCtx)((function(){return[(0,o.renderSlot)(e.$slots,"description")]})),_:3}),(0,o.createElementVNode)("div",s,[(0,o.createElementVNode)("form",{onSubmit:t[0]||(t[0]=(0,o.withModifiers)((function(t){return e.$emit("submitted")}),["prevent"]))},[(0,o.createElementVNode)("div",{class:(0,o.normalizeClass)(["px-4 py-5 bg-white sm:p-6 shadow",e.hasActions?"sm:rounded-tl-md sm:rounded-tr-md":"sm:rounded-md"])},[(0,o.createElementVNode)("div",a,[(0,o.renderSlot)(e.$slots,"form")])],2),e.hasActions?((0,o.openBlock)(),(0,o.createElementBlock)("div",l,[(0,o.renderSlot)(e.$slots,"actions")])):(0,o.createCommentVNode)("",!0)],32)])])}]])},7292:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(821),r=["value"];const s=(0,o.defineComponent)({props:["modelValue"],emits:["update:modelValue"],methods:{focus:function(){this.$refs.input.focus()}}});const a=(0,n(3744).Z)(s,[["render",function(e,t,n,s,a,l){return(0,o.openBlock)(),(0,o.createElementBlock)("input",{class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",value:e.modelValue,onInput:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)}),ref:"input"},null,40,r)}]])},675:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(821),r={class:"text-sm text-red-600"};const s=(0,o.defineComponent)({props:["message"]});const a=(0,n(3744).Z)(s,[["render",function(e,t,n,s,a,l){return(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createElementVNode)("p",r,(0,o.toDisplayString)(e.message),1)],512)),[[o.vShow,e.message]])}]])},6138:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(821),r={class:"block font-medium text-sm text-gray-700"},s={key:0},a={key:1};const l=(0,o.defineComponent)({props:["value"]});const c=(0,n(3744).Z)(l,[["render",function(e,t,n,l,c,i){return(0,o.openBlock)(),(0,o.createElementBlock)("label",r,[e.value?((0,o.openBlock)(),(0,o.createElementBlock)("span",s,(0,o.toDisplayString)(e.value),1)):((0,o.openBlock)(),(0,o.createElementBlock)("span",a,[(0,o.renderSlot)(e.$slots,"default")]))])}]])},5218:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(821),r={class:"md:col-span-1 flex justify-between"},s={class:"px-4 sm:px-0"},a={class:"text-lg font-medium text-gray-900"},l={class:"mt-1 text-sm text-gray-600"},c={class:"px-4 sm:px-0"};const i={},d=(0,n(3744).Z)(i,[["render",function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("div",r,[(0,o.createElementVNode)("div",s,[(0,o.createElementVNode)("h3",a,[(0,o.renderSlot)(e.$slots,"title")]),(0,o.createElementVNode)("p",l,[(0,o.renderSlot)(e.$slots,"description")])]),(0,o.createElementVNode)("div",c,[(0,o.renderSlot)(e.$slots,"aside")])])}]])},6699:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var o=n(821),r=(0,o.createTextVNode)(" Team Name "),s=(0,o.createTextVNode)(" The team's name and owner information. "),a={class:"col-span-6"},l={class:"flex items-center mt-2"},c=["src","alt"],i={class:"ml-4 leading-tight"},d={class:"text-gray-700 text-sm"},m={class:"col-span-6 sm:col-span-4"},u=(0,o.createTextVNode)(" Saved. "),p=(0,o.createTextVNode)(" Save ");var f=n(8789),v=n(7826),g=n(9153),h=n(7292),x=n(675),V=n(6138);const b=(0,o.defineComponent)({components:{JetActionMessage:f.Z,JetButton:v.Z,JetFormSection:g.Z,JetInput:h.Z,JetInputError:x.Z,JetLabel:V.Z},props:["team","permissions"],data:function(){return{form:this.$inertia.form({name:this.team.name})}},methods:{updateTeamName:function(){this.form.put(route("teams.update",this.team),{errorBag:"updateTeamName",preserveScroll:!0})}}});const N=(0,n(3744).Z)(b,[["render",function(e,t,n,f,v,g){var h=(0,o.resolveComponent)("jet-label"),x=(0,o.resolveComponent)("jet-input"),V=(0,o.resolveComponent)("jet-input-error"),b=(0,o.resolveComponent)("jet-action-message"),N=(0,o.resolveComponent)("jet-button"),k=(0,o.resolveComponent)("jet-form-section");return(0,o.openBlock)(),(0,o.createBlock)(k,{onSubmitted:e.updateTeamName},(0,o.createSlots)({title:(0,o.withCtx)((function(){return[r]})),description:(0,o.withCtx)((function(){return[s]})),form:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",a,[(0,o.createVNode)(h,{value:"Team Owner"}),(0,o.createElementVNode)("div",l,[(0,o.createElementVNode)("img",{class:"w-12 h-12 rounded-full object-cover",src:e.team.owner.profile_photo_url,alt:e.team.owner.name},null,8,c),(0,o.createElementVNode)("div",i,[(0,o.createElementVNode)("div",null,(0,o.toDisplayString)(e.team.owner.name),1),(0,o.createElementVNode)("div",d,(0,o.toDisplayString)(e.team.owner.email),1)])])]),(0,o.createElementVNode)("div",m,[(0,o.createVNode)(h,{for:"name",value:"Team Name"}),(0,o.createVNode)(x,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e.form.name,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.form.name=t}),disabled:!e.permissions.canUpdateTeam},null,8,["modelValue","disabled"]),(0,o.createVNode)(V,{message:e.form.errors.name,class:"mt-2"},null,8,["message"])])]})),_:2},[e.permissions.canUpdateTeam?{name:"actions",fn:(0,o.withCtx)((function(){return[(0,o.createVNode)(b,{on:e.form.recentlySuccessful,class:"mr-3"},{default:(0,o.withCtx)((function(){return[u]})),_:1},8,["on"]),(0,o.createVNode)(N,{class:(0,o.normalizeClass)({"opacity-25":e.form.processing}),disabled:e.form.processing},{default:(0,o.withCtx)((function(){return[p]})),_:1},8,["class","disabled"])]}))}:void 0]),1032,["onSubmitted"])}]])}}]);