"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3695],{9206:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(5166),r={class:"text-sm text-gray-600"};const s=(0,n.defineComponent)({props:["on"]});s.render=function(e,t,o,s,l,a){return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,[(0,n.createVNode)(n.Transition,{"leave-active-class":"transition ease-in duration-1000","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:(0,n.withCtx)((function(){return[(0,n.withDirectives)((0,n.createElementVNode)("div",r,[(0,n.renderSlot)(e.$slots,"default")],512),[[n.vShow,e.on]])]})),_:3})])};const l=s},8744:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(5166),r=["type"];const s=(0,n.defineComponent)({props:{type:{type:String,default:"submit"}}});s.render=function(e,t,o,s,l,a){return(0,n.openBlock)(),(0,n.createElementBlock)("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-purple border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-dark active:bg-purple-dark focus:outline-none focus:border-purple-light focus:ring focus:ring-purple-light disabled:opacity-25 transition"},[(0,n.renderSlot)(e.$slots,"default")],8,r)};const l=s},6730:(e,t,o)=>{o.d(t,{Z:()=>u});var n=o(5166),r={class:"md:grid md:grid-cols-3 md:gap-6"},s={class:"mt-5 md:mt-0 md:col-span-2"},l={class:"grid grid-cols-6 gap-6"},a={key:0,class:"flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md"};var i=o(3929);const c=(0,n.defineComponent)({emits:["submitted"],components:{JetSectionTitle:i.Z},computed:{hasActions:function(){return!!this.$slots.actions}}});c.render=function(e,t,o,i,c,u){var d=(0,n.resolveComponent)("jet-section-title");return(0,n.openBlock)(),(0,n.createElementBlock)("div",r,[(0,n.createVNode)(d,null,{title:(0,n.withCtx)((function(){return[(0,n.renderSlot)(e.$slots,"title")]})),description:(0,n.withCtx)((function(){return[(0,n.renderSlot)(e.$slots,"description")]})),_:3}),(0,n.createElementVNode)("div",s,[(0,n.createElementVNode)("form",{onSubmit:t[0]||(t[0]=(0,n.withModifiers)((function(t){return e.$emit("submitted")}),["prevent"]))},[(0,n.createElementVNode)("div",{class:(0,n.normalizeClass)(["px-4 py-5 bg-white sm:p-6 shadow",e.hasActions?"sm:rounded-tl-md sm:rounded-tr-md":"sm:rounded-md"])},[(0,n.createElementVNode)("div",l,[(0,n.renderSlot)(e.$slots,"form")])],2),e.hasActions?((0,n.openBlock)(),(0,n.createElementBlock)("div",a,[(0,n.renderSlot)(e.$slots,"actions")])):(0,n.createCommentVNode)("",!0)],32)])])};const u=c},4361:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(5166),r=["value"];const s=(0,n.defineComponent)({props:["modelValue"],emits:["update:modelValue"],methods:{focus:function(){this.$refs.input.focus()}}});s.render=function(e,t,o,s,l,a){return(0,n.openBlock)(),(0,n.createElementBlock)("input",{class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",value:e.modelValue,onInput:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)}),ref:"input"},null,40,r)};const l=s},1174:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(5166),r={class:"text-sm text-red-600"};const s=(0,n.defineComponent)({props:["message"]});s.render=function(e,t,o,s,l,a){return(0,n.withDirectives)(((0,n.openBlock)(),(0,n.createElementBlock)("div",null,[(0,n.createElementVNode)("p",r,(0,n.toDisplayString)(e.message),1)],512)),[[n.vShow,e.message]])};const l=s},4054:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(5166),r={class:"block font-medium text-sm text-gray-700"},s={key:0},l={key:1};const a=(0,n.defineComponent)({props:["value"]});a.render=function(e,t,o,a,i,c){return(0,n.openBlock)(),(0,n.createElementBlock)("label",r,[e.value?((0,n.openBlock)(),(0,n.createElementBlock)("span",s,(0,n.toDisplayString)(e.value),1)):((0,n.openBlock)(),(0,n.createElementBlock)("span",l,[(0,n.renderSlot)(e.$slots,"default")]))])};const i=a},9623:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(5166),r=["type"];const s=(0,n.defineComponent)({props:{type:{type:String,default:"button"}}});s.render=function(e,t,o,s,l,a){return(0,n.openBlock)(),(0,n.createElementBlock)("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:text-gray-800 active:bg-gray-50 disabled:opacity-25 transition"},[(0,n.renderSlot)(e.$slots,"default")],8,r)};const l=s},3929:(e,t,o)=>{o.d(t,{Z:()=>u});var n=o(5166),r={class:"md:col-span-1 flex justify-between"},s={class:"px-4 sm:px-0"},l={class:"text-lg font-medium text-gray-900"},a={class:"mt-1 text-sm text-gray-600"},i={class:"px-4 sm:px-0"};const c={render:function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("div",r,[(0,n.createElementVNode)("div",s,[(0,n.createElementVNode)("h3",l,[(0,n.renderSlot)(e.$slots,"title")]),(0,n.createElementVNode)("p",a,[(0,n.renderSlot)(e.$slots,"description")])]),(0,n.createElementVNode)("div",i,[(0,n.renderSlot)(e.$slots,"aside")])])}},u=c},3695:(e,t,o)=>{o.r(t),o.d(t,{default:()=>E});var n=o(5166),r=(0,n.createTextVNode)(" Información Personal "),s=(0,n.createTextVNode)(" Aquí puedes colocar una imágen como tu avatar y modificar los datos personales de tu cuenta. "),l={key:0,class:"col-span-6 sm:col-span-4"},a={class:"mt-2"},i=["src","alt"],c={class:"mt-2"},u=(0,n.createTextVNode)(" Selecciona una imágen "),d=(0,n.createTextVNode)(" Eliminar imágen "),m={class:"col-span-6 sm:col-span-4"},p={class:"col-span-6 sm:col-span-4"},f={class:"col-span-6 sm:col-span-4"},h={class:"col-span-6 sm:col-span-4"},v=(0,n.createTextVNode)(" Actualizado. "),g=(0,n.createTextVNode)(" Guardar ");var V=o(4054),b=o(4361),y=o(8744),k=o(1174),w=o(6730),x=o(9206),N=o(9623);const C=(0,n.defineComponent)({components:{JetInput:b.Z,JetLabel:V.Z,JetButton:y.Z,JetInputError:k.Z,JetFormSection:w.Z,JetActionMessage:x.Z,JetSecondaryButton:N.Z},props:["user"],data:function(){return{form:this.$inertia.form({_method:"PUT",firstname:this.user.firstname,lastname:this.user.lastname,username:this.user.username,email:this.user.email,photo:null}),photoPreview:null}},methods:{updateProfileInformation:function(){var e=this;this.$refs.photo&&(this.form.photo=this.$refs.photo.files[0]),this.form.post(route("user-profile-information.update"),{errorBag:"updateProfileInformation",preserveScroll:!0,onSuccess:function(){return e.clearPhotoFileInput()}})},selectNewPhoto:function(){this.$refs.photo.click()},updatePhotoPreview:function(){var e=this,t=this.$refs.photo.files[0];if(t){var o=new FileReader;o.onload=function(t){e.photoPreview=t.target.result},o.readAsDataURL(t)}},deletePhoto:function(){var e=this;this.$inertia.delete(route("current-user-photo.destroy"),{preserveScroll:!0,onSuccess:function(){e.photoPreview=null,e.clearPhotoFileInput()}})},clearPhotoFileInput:function(){var e;null!==(e=this.$refs.photo)&&void 0!==e&&e.value&&(this.$refs.photo.value=null)}}});C.render=function(e,t,o,V,b,y){var k=(0,n.resolveComponent)("jet-label"),w=(0,n.resolveComponent)("jet-secondary-button"),x=(0,n.resolveComponent)("jet-input-error"),N=(0,n.resolveComponent)("jet-input"),C=(0,n.resolveComponent)("jet-action-message"),E=(0,n.resolveComponent)("jet-button"),S=(0,n.resolveComponent)("jet-form-section");return(0,n.openBlock)(),(0,n.createBlock)(S,{onSubmitted:e.updateProfileInformation},{title:(0,n.withCtx)((function(){return[r]})),description:(0,n.withCtx)((function(){return[s]})),form:(0,n.withCtx)((function(){return[e.$page.props.jetstream.managesProfilePhotos?((0,n.openBlock)(),(0,n.createElementBlock)("div",l,[(0,n.createElementVNode)("input",{type:"file",class:"hidden",ref:"photo",onChange:t[0]||(t[0]=function(){return e.updatePhotoPreview&&e.updatePhotoPreview.apply(e,arguments)})},null,544),(0,n.createVNode)(k,{for:"photo",value:"Photo"}),(0,n.withDirectives)((0,n.createElementVNode)("div",a,[(0,n.createElementVNode)("img",{src:e.user.profile_photo_url,alt:e.user.firstname,class:"rounded-full h-20 w-20 object-cover"},null,8,i)],512),[[n.vShow,!e.photoPreview]]),(0,n.withDirectives)((0,n.createElementVNode)("div",c,[(0,n.createElementVNode)("span",{class:"block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center",style:(0,n.normalizeStyle)("background-image: url('"+e.photoPreview+"');")},null,4)],512),[[n.vShow,e.photoPreview]]),(0,n.createVNode)(w,{class:"mt-2 mr-2",type:"button",onClick:(0,n.withModifiers)(e.selectNewPhoto,["prevent"])},{default:(0,n.withCtx)((function(){return[u]})),_:1},8,["onClick"]),e.user.profile_photo_path?((0,n.openBlock)(),(0,n.createBlock)(w,{key:0,type:"button",class:"mt-2",onClick:(0,n.withModifiers)(e.deletePhoto,["prevent"])},{default:(0,n.withCtx)((function(){return[d]})),_:1},8,["onClick"])):(0,n.createCommentVNode)("",!0),(0,n.createVNode)(x,{message:e.form.errors.photo,class:"mt-2"},null,8,["message"])])):(0,n.createCommentVNode)("",!0),(0,n.createElementVNode)("div",m,[(0,n.createVNode)(k,{for:"firstname",value:"First Name"}),(0,n.createVNode)(N,{id:"firstname",type:"text",class:"mt-1 block w-full",modelValue:e.form.firstname,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.form.firstname=t}),autocomplete:"firstname"},null,8,["modelValue"]),(0,n.createVNode)(x,{message:e.form.errors.firstname,class:"mt-2"},null,8,["message"])]),(0,n.createElementVNode)("div",p,[(0,n.createVNode)(k,{for:"lastname",value:"Last Name"}),(0,n.createVNode)(N,{id:"lastname",type:"text",class:"mt-1 block w-full",modelValue:e.form.lastname,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.form.lastname=t}),autocomplete:"lastname"},null,8,["modelValue"]),(0,n.createVNode)(x,{message:e.form.errors.lastname,class:"mt-2"},null,8,["message"])]),(0,n.createElementVNode)("div",f,[(0,n.createVNode)(k,{for:"username",value:"Username"}),(0,n.createVNode)(N,{id:"username",type:"text",class:"mt-1 block w-full",modelValue:e.form.username,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.form.username=t}),autocomplete:"username"},null,8,["modelValue"]),(0,n.createVNode)(x,{message:e.form.errors.username,class:"mt-2"},null,8,["message"])]),(0,n.createElementVNode)("div",h,[(0,n.createVNode)(k,{for:"email",value:"Email"}),(0,n.createVNode)(N,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e.form.email,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.form.email=t})},null,8,["modelValue"]),(0,n.createVNode)(x,{message:e.form.errors.email,class:"mt-2"},null,8,["message"])])]})),actions:(0,n.withCtx)((function(){return[(0,n.createVNode)(C,{on:e.form.recentlySuccessful,class:"mr-3"},{default:(0,n.withCtx)((function(){return[v]})),_:1},8,["on"]),(0,n.createVNode)(E,{class:(0,n.normalizeClass)({"opacity-25":e.form.processing}),disabled:e.form.processing},{default:(0,n.withCtx)((function(){return[g]})),_:1},8,["class","disabled"])]})),_:1},8,["onSubmitted"])};const E=C}}]);