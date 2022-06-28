"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Soporte_Branches_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Elements/Modals/DeleteItem.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Elements/Modals/DeleteItem.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/dialog/dialog.esm.js");
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/transitions/transition.esm.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/index.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Dialog: _headlessui_vue__WEBPACK_IMPORTED_MODULE_2__.Dialog,
    DialogTitle: _headlessui_vue__WEBPACK_IMPORTED_MODULE_2__.DialogTitle,
    DialogOverlay: _headlessui_vue__WEBPACK_IMPORTED_MODULE_2__.DialogOverlay,
    TransitionRoot: _headlessui_vue__WEBPACK_IMPORTED_MODULE_3__.TransitionRoot,
    TransitionChild: _headlessui_vue__WEBPACK_IMPORTED_MODULE_3__.TransitionChild,
    TrashIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_1__.TrashIcon
  },
  props: {
    showModal: {
      type: Boolean,
      "default": false
    }
  },
  setup: function setup(props) {
    var open = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.showModal);
    var loading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      return props.showModal;
    }, function (val, prevVal) {
      loading.value = false;
      open.value = val;
    });
    return {
      open: open,
      loading: loading
    };
  },
  methods: {
    closeIt: function closeIt() {
      this.loading = false;
      this.$emit('closeModal');
    },
    deleteItem: function deleteItem() {
      this.loading = true;
      this.$emit('confirmed');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Button.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Button.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  props: {
    type: {
      type: String,
      "default": 'submit'
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Soporte/Branches/Index.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Soporte/Branches/Index.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _Scripts_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Scripts/helpers.js */ "./resources/js/Scripts/helpers.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/index.js");
/* harmony import */ var _Jetstream_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Jetstream/Button */ "./resources/js/Jetstream/Button.vue");
/* harmony import */ var _Elements_Modals_DeleteItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Elements/Modals/DeleteItem */ "./resources/js/Elements/Modals/DeleteItem.vue");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'BranchesIndex',
  components: {
    XIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_3__.XIcon,
    PlusIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_3__.PlusIcon,
    TrashIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_3__.TrashIcon,
    JetButton: _Jetstream_Button__WEBPACK_IMPORTED_MODULE_4__["default"],
    DeleteItem: _Elements_Modals_DeleteItem__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  setup: function setup() {
    var showForm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var showDeleteModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var branches = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var errores = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var idToDelete = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)({
      name: null,
      status: 1
    });

    var _useHelpers = (0,_Scripts_helpers_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
        userStatus = _useHelpers.userStatus;

    function getBranches() {
      axios.get(route('branchs.index')).then(function (_ref) {
        var data = _ref.data;
        return branches.value = data;
      });
    }

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(getBranches);
    return {
      form: form,
      errores: errores,
      branches: branches,
      showForm: showForm,
      idToDelete: idToDelete,
      userStatus: userStatus,
      getBranches: getBranches,
      showDeleteModal: showDeleteModal
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.errores = [];
      axios.post(route('branchs.store'), this.form).then(function (response) {
        if (response.status == 200) {
          _this.branches = [];

          _this.getBranches();

          _this.showForm = false;
        }
      })["catch"](function (error) {
        _this.errores = error.response.data.errors;
      });
    },
    deleteBranch: function deleteBranch(id) {
      this.idToDelete = id;
      this.showDeleteModal = true;
    },
    closeTheModal: function closeTheModal() {
      this.showDeleteModal = false;
    },
    confirmDeletion: function confirmDeletion() {
      var _this2 = this;

      this.errores = [];
      axios["delete"](route('branchs.destroy', this.idToDelete)).then(function (response) {
        if (response.status == 200) {
          _this2.branches = [];

          _this2.getBranches();

          _this2.showDeleteModal = false;
        }
      })["catch"](function (error) {
        _this2.errores = error.response.data.errors;
      });
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Elements/Modals/DeleteItem.vue?vue&type=template&id=687167a6":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Elements/Modals/DeleteItem.vue?vue&type=template&id=687167a6 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "hidden sm:inline-block sm:align-middle sm:h-screen",
  "aria-hidden": "true"
}, "​", -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
};
var _hoisted_4 = {
  "class": "sm:flex sm:items-start"
};
var _hoisted_5 = {
  "class": "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
};
var _hoisted_6 = {
  "class": "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Eliminar Registro ");

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mt-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-sm text-gray-500"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" ¿Está seguro(a) de querer eliminar el Registro? "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" En algunos casos, ya no se podrá recuperar. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Si tienes dudas consulta con el área de Desarrollo Web de Transcabo. ")])], -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "mt-5 sm:mt-4 sm:ml-10 sm:pl-4 sm:flex"
};
var _hoisted_10 = {
  key: 0,
  "class": "flex"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  "class": "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "class": "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
})], -1
/* HOISTED */
);

var _hoisted_12 = [_hoisted_11];
var _hoisted_13 = {
  key: 1
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_DialogOverlay = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DialogOverlay");

  var _component_TransitionChild = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TransitionChild");

  var _component_TrashIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TrashIcon");

  var _component_DialogTitle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DialogTitle");

  var _component_Dialog = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Dialog");

  var _component_TransitionRoot = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TransitionRoot");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_TransitionRoot, {
    as: "template",
    show: $setup.open
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dialog, {
        as: "div",
        "class": "fixed z-10 inset-0 overflow-y-auto",
        onClose: _cache[2] || (_cache[2] = function ($event) {
          return $options.closeIt();
        })
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TransitionChild, {
            as: "template",
            enter: "ease-out duration-300",
            "enter-from": "opacity-0",
            "enter-to": "opacity-100",
            leave: "ease-in duration-200",
            "leave-from": "opacity-100",
            "leave-to": "opacity-0"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DialogOverlay, {
                "class": "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              })];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" This element is to trick the browser into centering the modal contents. "), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TransitionChild, {
            as: "template",
            enter: "ease-out duration-300",
            "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            "enter-to": "opacity-100 translate-y-0 sm:scale-100",
            leave: "ease-in duration-200",
            "leave-from": "opacity-100 translate-y-0 sm:scale-100",
            "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TrashIcon, {
                "class": "h-6 w-6 text-red-600",
                "aria-hidden": "true"
              })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DialogTitle, {
                as: "h3",
                "class": "text-lg leading-6 font-medium text-gray-900"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_7];
                }),
                _: 1
                /* STABLE */

              }), _hoisted_8])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                type: "button",
                "class": "inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto sm:text-sm",
                onClick: _cache[0] || (_cache[0] = function ($event) {
                  return $options.deleteItem();
                })
              }, [$setup.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_10, _hoisted_12)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_13, "Eliminar"))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                type: "button",
                "class": "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
                onClick: _cache[1] || (_cache[1] = function ($event) {
                  return $options.closeIt();
                }),
                ref: "cancelButtonRef"
              }, " Cancelar ", 512
              /* NEED_PATCH */
              )])])];
            }),
            _: 1
            /* STABLE */

          })])];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["show"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Button.vue?vue&type=template&id=afb94134":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Button.vue?vue&type=template&id=afb94134 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["type"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    type: _ctx.type,
    "class": "inline-flex items-center px-4 py-2 bg-purple border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-dark active:bg-purple-dark focus:outline-none focus:border-purple-light focus:ring focus:ring-purple-light disabled:opacity-25 transition"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 8
  /* PROPS */
  , _hoisted_1);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Soporte/Branches/Index.vue?vue&type=template&id=6622c183":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Soporte/Branches/Index.vue?vue&type=template&id=6622c183 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex max-w-6xl mx-auto"
};
var _hoisted_2 = {
  "class": "flex py-2 text-purple font-semibold text-2xl tracking-widest uppercase"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Branches / Destinos", -1
/* HOISTED */
);

var _hoisted_4 = {
  key: 0,
  "class": "flex"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Nuevo");

var _hoisted_6 = {
  key: 1,
  "class": "flex"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Cerrar");

var _hoisted_8 = {
  "class": "flex flex-col md:flex-row px-10 md:px-4 lg:pl-0 max-w-6xl mx-auto"
};
var _hoisted_9 = {
  "class": "w-full md:w-1/2 order-last md:order-first"
};
var _hoisted_10 = {
  "class": "w-full py-2 align-middle mx-auto"
};
var _hoisted_11 = {
  "class": "shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
};
var _hoisted_12 = {
  "class": "min-w-full divide-y divide-gray-200"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
  "class": "bg-gray-50 font-medium text-gray-500 uppercase tracking-wider"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "px-6 py-3 text-left text-xs"
}, " Nombre "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "px-6 py-3 text-left text-xs"
}, " Estatus "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "px-6 py-3 text-right text-xs"
}, " Acc. ")])], -1
/* HOISTED */
);

var _hoisted_14 = {
  "class": "bg-white divide-y divide-gray-200"
};
var _hoisted_15 = {
  "class": "px-6 py-4 whitespace-nowrap font-semibold text-purple"
};
var _hoisted_16 = {
  "class": "px-6 py-4"
};
var _hoisted_17 = {
  "class": "px-6 py-4 text-right"
};
var _hoisted_18 = ["onClick"];
var _hoisted_19 = {
  key: 0,
  "class": "text-xs text-gray-700 whitespace-nowrap"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "3",
  "class": "px-6 py-4 text-center whitespace-nowrap"
}, "No hay registros", -1
/* HOISTED */
);

var _hoisted_21 = [_hoisted_20];
var _hoisted_22 = {
  key: 0,
  "class": "w-full md:w-1/2 order-first md:order-last md:pl-10"
};
var _hoisted_23 = {
  "class": "w-full grid grid-cols-6 gap-4"
};
var _hoisted_24 = {
  "class": "col-span-6 lg:col-span-2"
};

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "name",
  "class": "block text-sm text-gray-700"
}, "Nombre:", -1
/* HOISTED */
);

var _hoisted_26 = {
  key: 0,
  "class": "text-red-500 font-xs"
};
var _hoisted_27 = {
  "class": "col-span-6 lg:col-span-2"
};

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "status",
  "class": "block text-sm text-gray-700"
}, "Estatus:", -1
/* HOISTED */
);

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "1"
}, "Activo", -1
/* HOISTED */
);

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "0"
}, "Suspendido", -1
/* HOISTED */
);

var _hoisted_31 = [_hoisted_29, _hoisted_30];
var _hoisted_32 = {
  key: 0
};
var _hoisted_33 = {
  "class": "col-span-6 md:col-span-4"
};

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Registrar ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_PlusIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PlusIcon");

  var _component_XIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("XIcon");

  var _component_TrashIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TrashIcon");

  var _component_jet_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-button");

  var _component_DeleteItem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DeleteItem");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Branches | Destinos"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["inline-flex ml-6 items-center px-2 py-0 bg-purple border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-dark active:bg-purple-dark focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple-light disabled:opacity-25 transition", [_ctx.showForm ? 'bg-purple-light' : 'bg-purple']]),
    type: "button",
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return _ctx.showForm = !_ctx.showForm;
    }, ["prevent"]))
  }, [!_ctx.showForm ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PlusIcon, {
    "class": "w-4 h-4 mr-1"
  }), _hoisted_5])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.showForm ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_XIcon, {
    "class": "w-4 h-4 mr-1"
  }), _hoisted_7])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" title & add button "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", _hoisted_14, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.branches, function (branch) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      "class": "text-xs text-gray-700 whitespace-nowrap",
      key: branch.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(branch.name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.userStatus(branch.status)), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_17, [_ctx.$page.props.user.level < 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return _ctx.deleteBranch(branch.id);
      }, ["prevent"])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TrashIcon, {
      "class": "w-4 h-4 text-red-500"
    })], 8
    /* PROPS */
    , _hoisted_18)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
  }), 128
  /* KEYED_FRAGMENT */
  )), _ctx.branches.length == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_19, _hoisted_21)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" branches table "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    "enter-active-class": "transition ease-out duration-100",
    "enter-from-class": "transform opacity-0 scale-95",
    "enter-to-class": "transform opacity-100 scale-100",
    "leave-active-class": "transition ease-in duration-75",
    "leave-from-class": "transform opacity-100 scale-100",
    "leave-to-class": "transform opacity-0 scale-95"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      var _ctx$errores, _ctx$errores2;

      return [_ctx.showForm ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        action: "#",
        method: "POST",
        onSubmit: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
          return _ctx.submit && _ctx.submit.apply(_ctx, arguments);
        }, ["prevent"]))
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        name: "name",
        id: "name",
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return _ctx.form.name = $event;
        }),
        "class": "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple lg:text-sm"
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.form.name]]), (_ctx$errores = _ctx.errores) !== null && _ctx$errores !== void 0 && _ctx$errores.name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errores.name[0]), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
        id: "status",
        name: "status",
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return _ctx.form.status = $event;
        }),
        "class": "mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple focus:border-purple sm:text-sm"
      }, _hoisted_31, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.form.status]]), (_ctx$errores2 = _ctx.errores) !== null && _ctx$errores2 !== void 0 && _ctx$errores2.status ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errores.status[0]), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" name & status "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_button, {
        "class": "w-full justify-center",
        disabled: _ctx.form.processing
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_34];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["disabled"])])])], 32
      /* HYDRATE_EVENTS */
      )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" form for new/update branch ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DeleteItem, {
    showModal: _ctx.showDeleteModal,
    onConfirmed: _ctx.confirmDeletion,
    onCloseModal: _ctx.closeTheModal
  }, null, 8
  /* PROPS */
  , ["showModal", "onConfirmed", "onCloseModal"])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/Scripts/helpers.js":
/*!*****************************************!*\
  !*** ./resources/js/Scripts/helpers.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useHelpers)
/* harmony export */ });
var dayjs = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");

function useHelpers() {
  var statusContacto = [{
    estatus: 'nuevo'
  }, {
    estatus: 'convertido'
  }, {
    estatus: 'asignado'
  }];
  var salutations = [{
    salute: ''
  }, {
    salute: 'Srta.'
  }, {
    salute: 'Sra.'
  }, {
    salute: 'Sr.'
  }];
  var sources = [{
    name: ''
  }, {
    name: 'Campaña de Marketing'
  }, {
    name: 'Email'
  }, {
    name: 'Evento'
  }, {
    name: 'Llamada Telefónica'
  }, {
    name: 'Referido'
  }, {
    name: 'Relaciones Públicas'
  }, {
    name: 'Sitio Web'
  }];
  var estados = [{
    name: ''
  }, {
    name: 'nuevo'
  }, {
    name: 'asignado'
  }, {
    name: 'convertido'
  }];
  var addressType = [{
    name: 'principal'
  }, {
    name: 'trabajo'
  }, {
    name: 'personal'
  }, {
    name: 'facturacion'
  }, {
    name: 'otro'
  }];
  var productTypes = [{
    name: 'Good',
    translate: 'Bien',
    value: 'Good'
  }, {
    name: 'Service',
    translate: 'Servicio',
    value: 'Service'
  }, {
    name: 'Other',
    translate: 'Otro',
    value: 'Other'
  }];
  var currencies = [{
    name: 'usd'
  }, {
    name: 'mxn'
  }, {
    name: 'cad'
  }, {
    name: 'other'
  }];
  var types = [{
    name: ''
  }, {
    name: 'directo'
  }, {
    name: 'comercial'
  }, {
    name: 'casa'
  }, {
    name: 'gobierno'
  }];
  var industries = [{
    name: ''
  }, {
    name: 'Textile'
  }, {
    name: 'Banca'
  }, {
    name: 'Biotecnología'
  }, {
    name: 'Química'
  }, {
    name: 'Comunicaciones'
  }, {
    name: 'Construcción'
  }, {
    name: 'Consultoría'
  }, {
    name: 'Educación'
  }, {
    name: 'Electrónica'
  }, {
    name: 'Energía'
  }, {
    name: 'Ingeniería'
  }, {
    name: 'Entretenimiento'
  }, {
    name: 'Medio ambiente'
  }, {
    name: 'Finanzas'
  }, {
    name: 'Gobierno'
  }, {
    name: 'Salud'
  }, {
    name: 'Hospitalidad'
  }, {
    name: 'Seguros'
  }, {
    name: 'Maquinaria'
  }, {
    name: 'Fabricación'
  }, {
    name: 'Medios de comunicación'
  }, {
    name: 'Sin ánimo de lucro'
  }, {
    name: 'Recreación'
  }, {
    name: 'Minoristas'
  }, {
    name: 'Envíos'
  }, {
    name: 'Tecnología'
  }, {
    name: 'Telecomunicaciones'
  }, {
    name: 'Transporte'
  }, {
    name: 'Servicios públicos'
  }, {
    name: 'Otro'
  }];
  var statesList = [{
    name: 'Sin Iniciar',
    value: 0
  }, {
    name: 'En Progreso',
    value: 1
  }, {
    name: 'Pendiente de Información',
    value: 2
  }, {
    name: 'Retresada',
    value: 3
  }, {
    name: 'Completada',
    value: 4
  }];

  var getName = function getName(val) {
    if (!val) {
      return 'NA';
    }

    return "".concat(val.firstname, " ").concat(val.lastname);
  };

  var getStatus = function getStatus(val) {
    if (val == 0) {
      return 'Suspendido';
    }

    if (val == 1) {
      return 'Activo';
    }

    return 'NA';
  };

  var simpleStatus = function simpleStatus(val) {
    if (val == 0) {
      return 'No';
    }

    if (val == 1) {
      return 'Si';
    }

    return 'NA';
  };

  var taskState = function taskState(val) {
    if (val == 0) {
      return 'No iniciada';
    }

    if (val == 1) {
      return 'En progreso';
    }

    if (val == 2) {
      return 'Completada';
    }

    if (val == 3) {
      return 'Pendiente de información';
    }

    if (val == 4) {
      return 'Retrasada';
    }

    return 'NA';
  };

  var getLongDate = function getLongDate(val) {
    return dayjs(val).format('YYYY-MM-DD HH:mm');
  };

  var getDate = function getDate(val) {
    return dayjs(val).format('YYYY-MM-DD');
  };

  var convertidoClass = function convertidoClass(val) {
    if (val == 'Sitio Web') {
      return 'bg-red-100';
    }

    if (val == 'Referido') {
      return 'bg-yellow-100 text-green-800';
    }

    if (val == 'nuevo') {
      return 'bg-gray-200';
    }

    if (val == 'convertido') {
      return 'bg-green-100 text-green-600';
    }

    return 'bg-gray-50';
  };

  var statusClass = function statusClass(val) {
    if (val == 0) {
      return 'bg-red-500';
    }

    if (val == 1) {
      return 'bg-green-100 text-green-800';
    }

    if (val == 2) {
      return 'bg-yellow-400';
    }

    return '';
  };

  var userStatus = function userStatus(val) {
    if (val == 0) {
      return 'Inactivo';
    }

    if (val == 1) {
      return 'Activo';
    }

    if (val == 2) {
      return 'Permiso de ausencia';
    }

    return 'NA';
  };

  var userLevel = function userLevel(val) {
    if (val == 0) {
      return 'Master';
    }

    if (val == 1) {
      return 'Administrador';
    }

    if (val == 2) {
      return 'Gerente';
    }

    if (val == 3) {
      return 'Ejecutivo';
    }

    if (val == 4) {
      return 'Cliente';
    }

    return 'NA';
  };

  var stateNames = function stateNames(val) {
    if (val == 0) {
      return 'Sin Iniciar';
    }

    if (val == 1) {
      return 'En Progreso';
    }

    if (val == 2) {
      return 'Pendiente de Información';
    }

    if (val == 3) {
      return 'Retresada';
    }

    if (val == 4) {
      return 'Completada';
    }

    return 'NA';
  };

  return {
    dayjs: dayjs,
    types: types,
    estados: estados,
    sources: sources,
    statesList: statesList,
    currencies: currencies,
    industries: industries,
    addressType: addressType,
    salutations: salutations,
    productTypes: productTypes,
    statusContacto: statusContacto,
    getName: getName,
    getDate: getDate,
    taskState: taskState,
    userLevel: userLevel,
    getStatus: getStatus,
    stateNames: stateNames,
    userStatus: userStatus,
    statusClass: statusClass,
    getLongDate: getLongDate,
    simpleStatus: simpleStatus,
    convertidoClass: convertidoClass
  };
}

/***/ }),

/***/ "./resources/js/Elements/Modals/DeleteItem.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Elements/Modals/DeleteItem.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DeleteItem_vue_vue_type_template_id_687167a6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeleteItem.vue?vue&type=template&id=687167a6 */ "./resources/js/Elements/Modals/DeleteItem.vue?vue&type=template&id=687167a6");
/* harmony import */ var _DeleteItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeleteItem.vue?vue&type=script&lang=js */ "./resources/js/Elements/Modals/DeleteItem.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_ricardo_Sites_mxcrm_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_ricardo_Sites_mxcrm_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DeleteItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DeleteItem_vue_vue_type_template_id_687167a6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Elements/Modals/DeleteItem.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Jetstream/Button.vue":
/*!*******************************************!*\
  !*** ./resources/js/Jetstream/Button.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Button_vue_vue_type_template_id_afb94134__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.vue?vue&type=template&id=afb94134 */ "./resources/js/Jetstream/Button.vue?vue&type=template&id=afb94134");
/* harmony import */ var _Button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.vue?vue&type=script&lang=js */ "./resources/js/Jetstream/Button.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_ricardo_Sites_mxcrm_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_ricardo_Sites_mxcrm_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Button_vue_vue_type_template_id_afb94134__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Jetstream/Button.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Soporte/Branches/Index.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/Soporte/Branches/Index.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_6622c183__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=6622c183 */ "./resources/js/Pages/Soporte/Branches/Index.vue?vue&type=template&id=6622c183");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/Pages/Soporte/Branches/Index.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_ricardo_Sites_mxcrm_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_ricardo_Sites_mxcrm_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index_vue_vue_type_template_id_6622c183__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Soporte/Branches/Index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Elements/Modals/DeleteItem.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/Elements/Modals/DeleteItem.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeleteItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeleteItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DeleteItem.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Elements/Modals/DeleteItem.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Jetstream/Button.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./resources/js/Jetstream/Button.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Button.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Button.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Soporte/Branches/Index.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Soporte/Branches/Index.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Soporte/Branches/Index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Elements/Modals/DeleteItem.vue?vue&type=template&id=687167a6":
/*!***********************************************************************************!*\
  !*** ./resources/js/Elements/Modals/DeleteItem.vue?vue&type=template&id=687167a6 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeleteItem_vue_vue_type_template_id_687167a6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeleteItem_vue_vue_type_template_id_687167a6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DeleteItem.vue?vue&type=template&id=687167a6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Elements/Modals/DeleteItem.vue?vue&type=template&id=687167a6");


/***/ }),

/***/ "./resources/js/Jetstream/Button.vue?vue&type=template&id=afb94134":
/*!*************************************************************************!*\
  !*** ./resources/js/Jetstream/Button.vue?vue&type=template&id=afb94134 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Button_vue_vue_type_template_id_afb94134__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Button_vue_vue_type_template_id_afb94134__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Button.vue?vue&type=template&id=afb94134 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Button.vue?vue&type=template&id=afb94134");


/***/ }),

/***/ "./resources/js/Pages/Soporte/Branches/Index.vue?vue&type=template&id=6622c183":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Soporte/Branches/Index.vue?vue&type=template&id=6622c183 ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_6622c183__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_6622c183__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=6622c183 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Soporte/Branches/Index.vue?vue&type=template&id=6622c183");


/***/ })

}]);