"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Admin_Dashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Dashboard.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Dashboard.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var bgImage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      axios.post(route('bg-current-image')).then(function (_ref2) {
        var data = _ref2.data;
        bgImage.value = data;
      });
    });
    var __returned__ = {
      bgImage: bgImage,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Dashboard.vue?vue&type=template&id=4dff49ca":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Dashboard.vue?vue&type=template&id=4dff49ca ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "bg-white shadow"
};
var _hoisted_2 = {
  "class": "max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 text-center font-semibold"
};
var _hoisted_3 = {
  "class": "relative bg-gray-900"
};
var _hoisted_4 = {
  "class": "h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full"
};
var _hoisted_5 = {
  "class": "h-full w-full xl:grid xl:grid-cols-2"
};
var _hoisted_6 = {
  "class": "h-full xl:relative xl:col-start-2"
};
var _hoisted_7 = ["src"];

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "aria-hidden": "true",
  "class": "absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
}, null, -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8\"><div class=\"relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24\"><h2 class=\"text-sm font-semibold text-purple tracking-wide uppercase\"> CRM Dashboard </h2><p class=\"mt-3 text-3xl font-extrabold text-white\">Módulo(s) en producción:</p><p class=\"mt-5 text-3xl text-gray-300\">Módulo de Grupos</p><hr class=\"border-white border-opacity-40 mt-4\"><p class=\"mt-4 text-lg font-extrabold text-white\">Ya se tiene el módulo para mostrar el listado de grupos y el formulario para poder crearlo, esto con las diferentes relaciones que se tienen.</p><p class=\"mt-4 text-lg font-extrabold text-white\">Se tiene pendiente el poder actualizar el registro y poder asignarle otros hoteles. Esto con base en la relacion &quot;belongsToMany&quot; que ya se tiene registrada y ya se tiene la tabla lista.</p><p class=\"mt-5 text-lg text-gray-300\">Pendiente de saber como obtener los estatus que se necesitan para registrar un grupo.</p><p class=\"mt-5 text-lg text-gray-300\">Terminado el módulo de comisionistas</p><div class=\"mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2\"><p><span class=\"block text-2xl font-bold text-white\">Contactos</span><span class=\"mt-1 block text-base text-gray-300\"><span class=\"font-medium text-white\">Módulos</span> Listado, registro y edición.</span></p><p><span class=\"block text-2xl font-bold text-white\">Agencias</span><span class=\"mt-1 block text-base text-gray-300\"><span class=\"font-medium text-white\">Módulos</span> Listado, registro y edición.</span></p><p><span class=\"block text-2xl font-bold text-white\">Empresas</span><span class=\"mt-1 block text-base text-gray-300\"><span class=\"font-medium text-white\">Módulos</span> Listado, registro y edición.</span></p><p><span class=\"block text-2xl font-bold text-white\">Tareas</span><span class=\"mt-1 block text-base text-gray-300\"><span class=\"font-medium text-white\">Módulos</span> dentro de los contactos y contactos potenciales</span></p><p><span class=\"block text-2xl font-bold text-white\">Hoteles</span><span class=\"mt-1 block text-base text-gray-300\"><span class=\"font-medium text-white\">Módulos</span> Listado, registro y edición.</span></p><p><span class=\"block text-2xl font-bold text-white\">Comisionistas</span><span class=\"mt-1 block text-base text-gray-300\"><span class=\"font-medium text-white\">Módulos</span> Listado, registro y edición.</span></p><p><span class=\"block text-2xl font-bold text-white\">Usuarios CRM</span><span class=\"mt-1 block text-base text-gray-300\"><span class=\"font-medium text-white\">Módulos</span> Listado, registro y edición.</span></p><p><span class=\"block text-2xl font-bold text-white\">Branches</span><span class=\"mt-1 block text-base text-gray-300\"><span class=\"font-medium text-white\">Módulos</span> Listado, registro y edición.</span></p><p><span class=\"block text-2xl font-bold text-white\">Productos y Categorías</span><span class=\"mt-1 block text-base text-gray-300\"><span class=\"font-medium text-white\">Módulos</span> Listado, registro y edición.</span></p><p><span class=\"block text-2xl font-bold text-white\">Proveedores</span><span class=\"mt-1 block text-base text-gray-300\"><span class=\"font-medium text-white\">Módulos</span> Listado, registro y edición.</span></p><p><span class=\"block text-2xl font-bold text-white\">Orígenes</span><span class=\"mt-1 block text-base text-gray-300\"><span class=\"font-medium text-white\">Módulos</span> Listado, registro y edición.</span></p></div></div></div>", 1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$$page$props$user;

  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Dashboard | México Planners | CRM"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, " Bienvenido(a) " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_ctx$$page$props$user = _ctx.$page.props.user) === null || _ctx$$page$props$user === void 0 ? void 0 : _ctx$$page$props$user.firstname) + "! ", 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [$setup.bgImage ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
    key: 0,
    "class": "h-full w-full object-cover opacity-40 xl:absolute xl:inset-0",
    src: "/images/bg/".concat($setup.bgImage),
    alt: "CRM México Planners"
  }, null, 8
  /* PROPS */
  , _hoisted_7)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_8])])]), _hoisted_9])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/Pages/Admin/Dashboard.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/Admin/Dashboard.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_4dff49ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=4dff49ca */ "./resources/js/Pages/Admin/Dashboard.vue?vue&type=template&id=4dff49ca");
/* harmony import */ var _Dashboard_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Admin/Dashboard.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Users_ricardo_Sites_mxcrm_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_ricardo_Sites_mxcrm_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Dashboard_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Dashboard_vue_vue_type_template_id_4dff49ca__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Admin/Dashboard.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Admin/Dashboard.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Dashboard.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dashboard.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Dashboard.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Admin/Dashboard.vue?vue&type=template&id=4dff49ca":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Dashboard.vue?vue&type=template&id=4dff49ca ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_template_id_4dff49ca__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_template_id_4dff49ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dashboard.vue?vue&type=template&id=4dff49ca */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Dashboard.vue?vue&type=template&id=4dff49ca");


/***/ })

}]);