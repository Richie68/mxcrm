"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7179],{3956:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(5166),r={class:"md:grid md:grid-cols-3 md:gap-6"},s={class:"mt-5 md:mt-0 md:col-span-2"},l={class:"px-4 py-5 sm:p-6 bg-white shadow sm:rounded-lg"};var a=o(3929);const c=(0,n.defineComponent)({components:{JetSectionTitle:a.Z}});c.render=function(e,t,o,a,c,i){var d=(0,n.resolveComponent)("jet-section-title");return(0,n.openBlock)(),(0,n.createElementBlock)("div",r,[(0,n.createVNode)(d,null,{title:(0,n.withCtx)((function(){return[(0,n.renderSlot)(e.$slots,"title")]})),description:(0,n.withCtx)((function(){return[(0,n.renderSlot)(e.$slots,"description")]})),_:3}),(0,n.createElementVNode)("div",s,[(0,n.createElementVNode)("div",l,[(0,n.renderSlot)(e.$slots,"content")])])])};const i=c},9218:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(5166),r=["type"];const s=(0,n.defineComponent)({props:{type:{type:String,default:"button"}}});s.render=function(e,t,o,s,l,a){return(0,n.openBlock)(),(0,n.createElementBlock)("button",{type:e.type,class:"inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 active:bg-red-600 disabled:opacity-25 transition"},[(0,n.renderSlot)(e.$slots,"default")],8,r)};const l=s},7959:(e,t,o)=>{o.d(t,{Z:()=>d});var n=o(5166),r={class:"px-6 py-4"},s={class:"text-lg"},l={class:"mt-4"},a={class:"px-6 py-4 bg-gray-100 text-right"};var c=o(9690);const i=(0,n.defineComponent)({emits:["close"],components:{Modal:c.Z},props:{show:{default:!1},maxWidth:{default:"2xl"},closeable:{default:!0}},methods:{close:function(){this.$emit("close")}}});i.render=function(e,t,o,c,i,d){var u=(0,n.resolveComponent)("modal");return(0,n.openBlock)(),(0,n.createBlock)(u,{show:e.show,"max-width":e.maxWidth,closeable:e.closeable,onClose:e.close},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",r,[(0,n.createElementVNode)("div",s,[(0,n.renderSlot)(e.$slots,"title")]),(0,n.createElementVNode)("div",l,[(0,n.renderSlot)(e.$slots,"content")])]),(0,n.createElementVNode)("div",a,[(0,n.renderSlot)(e.$slots,"footer")])]})),_:3},8,["show","max-width","closeable","onClose"])};const d=i},4361:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(5166),r=["value"];const s=(0,n.defineComponent)({props:["modelValue"],emits:["update:modelValue"],methods:{focus:function(){this.$refs.input.focus()}}});s.render=function(e,t,o,s,l,a){return(0,n.openBlock)(),(0,n.createElementBlock)("input",{class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",value:e.modelValue,onInput:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)}),ref:"input"},null,40,r)};const l=s},1174:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(5166),r={class:"text-sm text-red-600"};const s=(0,n.defineComponent)({props:["message"]});s.render=function(e,t,o,s,l,a){return(0,n.withDirectives)(((0,n.openBlock)(),(0,n.createElementBlock)("div",null,[(0,n.createElementVNode)("p",r,(0,n.toDisplayString)(e.message),1)],512)),[[n.vShow,e.message]])};const l=s},9690:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(5166),r={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},s=[(0,n.createElementVNode)("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1)];const l=(0,n.defineComponent)({emits:["close"],props:{show:{default:!1},maxWidth:{default:"2xl"},closeable:{default:!0}},watch:{show:{immediate:!0,handler:function(e){document.body.style.overflow=e?"hidden":null}}},setup:function(e,t){var o=t.emit,r=function(){e.closeable&&o("close")},s=function(t){"Escape"===t.key&&e.show&&r()};return(0,n.onMounted)((function(){return document.addEventListener("keydown",s)})),(0,n.onUnmounted)((function(){document.removeEventListener("keydown",s),document.body.style.overflow=null})),{close:r}},computed:{maxWidthClass:function(){return{sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[this.maxWidth]}}});l.render=function(e,t,o,l,a,c){return(0,n.openBlock)(),(0,n.createBlock)(n.Teleport,{to:"body"},[(0,n.createVNode)(n.Transition,{"leave-active-class":"duration-200"},{default:(0,n.withCtx)((function(){return[(0,n.withDirectives)((0,n.createElementVNode)("div",r,[(0,n.createVNode)(n.Transition,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:(0,n.withCtx)((function(){return[(0,n.withDirectives)((0,n.createElementVNode)("div",{class:"fixed inset-0 transform transition-all",onClick:t[0]||(t[0]=function(){return e.close&&e.close.apply(e,arguments)})},s,512),[[n.vShow,e.show]])]})),_:1}),(0,n.createVNode)(n.Transition,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:(0,n.withCtx)((function(){return[(0,n.withDirectives)((0,n.createElementVNode)("div",{class:(0,n.normalizeClass)(["mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",e.maxWidthClass])},[e.show?(0,n.renderSlot)(e.$slots,"default",{key:0}):(0,n.createCommentVNode)("",!0)],2),[[n.vShow,e.show]])]})),_:3})],512),[[n.vShow,e.show]])]})),_:3})])};const a=l},9623:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(5166),r=["type"];const s=(0,n.defineComponent)({props:{type:{type:String,default:"button"}}});s.render=function(e,t,o,s,l,a){return(0,n.openBlock)(),(0,n.createElementBlock)("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:text-gray-800 active:bg-gray-50 disabled:opacity-25 transition"},[(0,n.renderSlot)(e.$slots,"default")],8,r)};const l=s},3929:(e,t,o)=>{o.d(t,{Z:()=>d});var n=o(5166),r={class:"md:col-span-1 flex justify-between"},s={class:"px-4 sm:px-0"},l={class:"text-lg font-medium text-gray-900"},a={class:"mt-1 text-sm text-gray-600"},c={class:"px-4 sm:px-0"};const i={render:function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("div",r,[(0,n.createElementVNode)("div",s,[(0,n.createElementVNode)("h3",l,[(0,n.renderSlot)(e.$slots,"title")]),(0,n.createElementVNode)("p",a,[(0,n.renderSlot)(e.$slots,"description")])]),(0,n.createElementVNode)("div",c,[(0,n.renderSlot)(e.$slots,"aside")])])}},d=i},7179:(e,t,o)=>{o.r(t),o.d(t,{default:()=>C});var n=o(5166),r=(0,n.createTextVNode)(" Delete Account "),s=(0,n.createTextVNode)(" Permanently delete your account. "),l=(0,n.createElementVNode)("div",{class:"max-w-xl text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ",-1),a={class:"mt-5"},c=(0,n.createTextVNode)(" Delete Account "),i=(0,n.createTextVNode)(" Delete Account "),d=(0,n.createTextVNode)(" Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),u={class:"mt-4"},m=(0,n.createTextVNode)(" Cancel "),f=(0,n.createTextVNode)(" Delete Account ");var p=o(3956),w=o(7959),y=o(9218),h=o(4361),v=o(1174),x=o(9623);const g=(0,n.defineComponent)({components:{JetActionSection:p.Z,JetDangerButton:y.Z,JetDialogModal:w.Z,JetInput:h.Z,JetInputError:v.Z,JetSecondaryButton:x.Z},data:function(){return{confirmingUserDeletion:!1,form:this.$inertia.form({password:""})}},methods:{confirmUserDeletion:function(){var e=this;this.confirmingUserDeletion=!0,setTimeout((function(){return e.$refs.password.focus()}),250)},deleteUser:function(){var e=this;this.form.delete(route("current-user.destroy"),{preserveScroll:!0,onSuccess:function(){return e.closeModal()},onError:function(){return e.$refs.password.focus()},onFinish:function(){return e.form.reset()}})},closeModal:function(){this.confirmingUserDeletion=!1,this.form.reset()}}});g.render=function(e,t,o,p,w,y){var h=(0,n.resolveComponent)("jet-danger-button"),v=(0,n.resolveComponent)("jet-input"),x=(0,n.resolveComponent)("jet-input-error"),g=(0,n.resolveComponent)("jet-secondary-button"),C=(0,n.resolveComponent)("jet-dialog-modal"),b=(0,n.resolveComponent)("jet-action-section");return(0,n.openBlock)(),(0,n.createBlock)(b,null,{title:(0,n.withCtx)((function(){return[r]})),description:(0,n.withCtx)((function(){return[s]})),content:(0,n.withCtx)((function(){return[l,(0,n.createElementVNode)("div",a,[(0,n.createVNode)(h,{onClick:e.confirmUserDeletion},{default:(0,n.withCtx)((function(){return[c]})),_:1},8,["onClick"])]),(0,n.createVNode)(C,{show:e.confirmingUserDeletion,onClose:e.closeModal},{title:(0,n.withCtx)((function(){return[i]})),content:(0,n.withCtx)((function(){return[d,(0,n.createElementVNode)("div",u,[(0,n.createVNode)(v,{type:"password",class:"mt-1 block w-3/4",placeholder:"Password",ref:"password",modelValue:e.form.password,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.form.password=t}),onKeyup:(0,n.withKeys)(e.deleteUser,["enter"])},null,8,["modelValue","onKeyup"]),(0,n.createVNode)(x,{message:e.form.errors.password,class:"mt-2"},null,8,["message"])])]})),footer:(0,n.withCtx)((function(){return[(0,n.createVNode)(g,{onClick:e.closeModal},{default:(0,n.withCtx)((function(){return[m]})),_:1},8,["onClick"]),(0,n.createVNode)(h,{class:(0,n.normalizeClass)(["ml-2",{"opacity-25":e.form.processing}]),onClick:e.deleteUser,disabled:e.form.processing},{default:(0,n.withCtx)((function(){return[f]})),_:1},8,["onClick","class","disabled"])]})),_:1},8,["show","onClose"])]})),_:1})};const C=g}}]);