webpackJsonp([2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_InputField_vue__ = __webpack_require__(49);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_13e02795_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_InputField_vue__ = __webpack_require__(267);
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_InputField_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_13e02795_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_InputField_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);


/* harmony default export */ __webpack_exports__["a"] = ({
  inject: {
    $validator: { default: null }
  },
  props: {
    /**
     * The validation mode, can be 'active', 'pasive' or 'onBlur'.
     * active - validates the input everytime input is given
     * onBlur - only validates the input when the focus leaves the element
     * passive - doesn't validate the input, just adds it into the fields
     * list of the current validator instance. Validate method needs to
     * be called for validations to be loaded on the errorBag take effect
     * @type String
     */
    validationMode: {
      type: [String],
      default: 'active',
      required: false,
      validator: function validator(value) {
        return value === 'active' || value === 'passive' || value === 'onBlur';
      }
    },
    /**
     * The validations for this input, can be any of vee-validate rules
     * http://vee-validate.logaretm.com/validation.html#available-rules
     * @type String
     */
    validation: {
      type: [String],
      default: null
    },
    /**
     * This name will be used for displaying the errors
     * If it is missing, a lower_case version of the label will be used,
     * if the label is missing, the name will be used
     * @type String
     */
    validationAttr: {
      type: String,
      default: null
    }
  },
  methods: {
    // Check if there is any available error for
    // the currentinput if validation is viable
    errorAvailable: function errorAvailable() {
      return this.validationViable() && this.$validator.errors.has(this.name);
    },

    // This method validates the rules and puts
    // them in the validator bag if validation
    // is viable. This works as if you run it
    // with the v-validate directive
    validateIfPresent: function validateIfPresent(value) {
      if (this.validationViable()) {
        this.$validator.validate(this.name, value);
      }
    },

    // For there to be validation we need a valid name
    // attribute and a valid validation attribute
    validationViable: function validationViable() {
      // Check if name is valid and there is a valid $validator instance
      if (this.$validator !== null && this.name !== undefined && this.name !== null && this.name !== '') {
        // Check if field exists on the fields on the validator
        var fieldExists = this.$validator.fields.find({ name: this.name });

        // If the field exists on the validator instance or there is
        // a valid validation string on the field we can validate it
        return fieldExists || this.validation !== undefined && this.validation !== null && this.validation !== '';
      }
      // If no name is set we can't validate the field
      return false;
    },

    // This method can be overrided to add extra rules inherent
    // to the type of input, for example date_format for date inputs
    // USE ONLY STRING TYPE, NOT OBJECT
    extraRules: function extraRules() {
      return '';
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (this.validationViable()) {
      var allValidation = this.validation;
      var extraRules = this.extraRules();
      if (extraRules !== '') {
        if (typeof allValidation === 'string') {
          allValidation = allValidation + '|' + extraRules;
        }
      }

      // If the field is not found, then match it, otherwise don't overwrite
      if (!this.$validator.fields.find({ name: this.name })) {
        var alias = this.name;
        // Check if the label is available to use, as the name can not always be considered optimal
        if (this.label !== undefined && this.label !== null && this.label !== '') {
          alias = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.lowerCase(this.label);
        }
        // Check if a custom validationAttr is set, this takes the top priority
        if (this.validationAttr !== undefined && this.validationAttr !== null && this.validationAttr !== '') {
          alias = this.validationAttr;
        }
        this.$validator.attach({
          name: this.name,
          alias: alias,
          rules: allValidation,
          getter: function getter() {
            return _this.value;
          }
        });
      }
    }
  },
  destroyed: function destroyed() {
    if (this.validationViable()) {
      this.$validator.detach(this.name);
    }
  }
});

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DropdownSelect_vue__ = __webpack_require__(61);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_22031360_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DropdownSelect_vue__ = __webpack_require__(285);
function injectStyle (ssrContext) {
  __webpack_require__(284)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DropdownSelect_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_22031360_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DropdownSelect_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  bind: function bind(el, binding, vnode) {
    el.event = function (event) {
      if (!(el === event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.event);
  },
  unbind: function unbind(el) {
    document.body.removeEventListener('click', el.event);
  }
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DropdownMultiselect_vue__ = __webpack_require__(64);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_52cb31b2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DropdownMultiselect_vue__ = __webpack_require__(289);
function injectStyle (ssrContext) {
  __webpack_require__(288)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DropdownMultiselect_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_52cb31b2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DropdownMultiselect_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TextareaField_vue__ = __webpack_require__(51);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_49633f72_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TextareaField_vue__ = __webpack_require__(268);
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TextareaField_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_49633f72_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TextareaField_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      modalActive: true
    };
  },
  methods: {
    goBack: function goBack() {
      var _this = this;

      this.modalActive = false;
      setTimeout(function () {
        // Get the route stack
        console.log(_this.$route);
        console.log(_this.$router);
        var routeStack = _this.$route.matched;
        if (routeStack.length >= 2) {
          // If there are enough routes to go back in the stack, go to the parent route
          var parentRoute = routeStack[routeStack.length - 2];
          _this.$router.push({
            name: parentRoute.name,
            params: _this.$route.params,
            query: _this.$route.query
          });
        } else {
          // Else just go back on the navigation history
          _this.$routes.back();
        }
      }, 400);
    }
  },
  mounted: function mounted() {
    document.body.classList.add('modal-active');
  },
  destroyed: function destroyed() {
    document.body.classList.remove('modal-active');
  }
});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ToggleButton_vue__ = __webpack_require__(58);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_49c0794a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ToggleButton_vue__ = __webpack_require__(281);
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ToggleButton_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_49c0794a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ToggleButton_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RadioButton_vue__ = __webpack_require__(59);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_331a4a72_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RadioButton_vue__ = __webpack_require__(282);
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RadioButton_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_331a4a72_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RadioButton_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CheckboxButton_vue__ = __webpack_require__(60);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_842152bc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CheckboxButton_vue__ = __webpack_require__(283);
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CheckboxButton_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_842152bc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CheckboxButton_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  bind: function bind(el, binding, vnode) {
    el.event = function (event) {
      var code = event.keyCode ? event.keyCode : event.which;
      var input = el;
      // Check if the objective of the directive is another component, if so, us the input ref
      if (vnode.componentInstance !== undefined && vnode.componentInstance.$refs.input !== undefined) {
        input = vnode.componentInstance.$refs.input;
      }
      if (code === 9 && input === document.activeElement) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('keyup', el.event);
  },
  unbind: function unbind(el) {
    document.body.removeEventListener('keyup', el.event);
  }
});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DatePicker_vue__ = __webpack_require__(189);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0b243432_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DatePicker_vue__ = __webpack_require__(296);
function injectStyle (ssrContext) {
  __webpack_require__(294)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0b243432"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DatePicker_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0b243432_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DatePicker_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DateRangePicker_vue__ = __webpack_require__(190);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6f609cbf_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DateRangePicker_vue__ = __webpack_require__(300);
function injectStyle (ssrContext) {
  __webpack_require__(297)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6f609cbf"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DateRangePicker_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6f609cbf_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DateRangePicker_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FilterInput_vue__ = __webpack_require__(220);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3fa2405b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FilterInput_vue__ = __webpack_require__(362);
function injectStyle (ssrContext) {
  __webpack_require__(357)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3fa2405b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FilterInput_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3fa2405b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FilterInput_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 40 */,
/* 41 */,
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Logo_vue__ = __webpack_require__(43);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1c522c02_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Logo_vue__ = __webpack_require__(248);
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Logo_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1c522c02_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Logo_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Logo'
});

/***/ }),
/* 44 */,
/* 45 */,
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_MenuPopup_vue__ = __webpack_require__(47);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_be824bf0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MenuPopup_vue__ = __webpack_require__(263);
function injectStyle (ssrContext) {
  __webpack_require__(262)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_MenuPopup_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_be824bf0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MenuPopup_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_docClick__ = __webpack_require__(18);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      menuShown: false
    };
  },

  directives: {
    DocClick: __WEBPACK_IMPORTED_MODULE_0__directives_docClick__["a" /* default */]
  },
  props: {
    align: {
      default: 'right',
      required: false,
      validator: function validator(value) {
        return value === 'right' || value === 'left';
      }
    }
  },
  methods: {
    toggleMenu: function toggleMenu() {
      this.menuShown = !this.menuShown;
    },
    hideMenu: function hideMenu() {
      this.menuShown = false;
    }
  },
  watch: {}
});

/***/ }),
/* 48 */,
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_validationBase_js__ = __webpack_require__(6);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {};
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_validationBase_js__["a" /* default */]],
  props: {
    id: '',
    placeholder: '',
    label: {
      default: null
    },
    type: {
      default: 'text'
    },
    name: {
      default: null
    },
    /**
     * The value that the input must have
     * CAN USE SYNC
     * @type {String, Number}
     */
    value: {
      required: true,
      default: ''
    },
    fieldClass: '',
    attribute: '',
    description: {
      default: null
    },
    tag: '',
    disabled: ''
  },
  computed: {
    parentClasses: function parentClasses() {
      return {
        disabled: this.disabled === 'disabled',
        valid: this.tag === 'valid',
        error: this.tag === 'error' || this.errorAvailable(),
        help: this.tag === 'help'
      };
    }
  },
  methods: {
    focus: function focus() {
      this.$refs.input.focus();
    },

    updateValue: function updateValue(event) {
      var value = event.target.value;
      this.$emit('update:value', value);

      if (this.validationMode === 'active') {
        this.validateIfPresent(value);
      }
    },

    focusLost: function focusLost(event) {
      if (this.validationMode === 'onBlur') {
        this.validateIfPresent(this.value);
      }
    }
  }
});

/***/ }),
/* 50 */,
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_validationBase_js__ = __webpack_require__(6);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      hasContent: false
    };
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_validationBase_js__["a" /* default */]],
  props: {
    id: '',
    placeholder: '',
    label: {
      default: null
    },
    type: {
      default: 'text'
    },
    name: '',
    /**
     * The value that the input must have
     * CAN USE SYNC
     * @type {String, Number}
     */
    value: {
      required: true,
      default: ''
    },
    fieldClass: '',
    attribute: '',
    description: {
      default: null
    },
    tag: '',
    disabled: ''
  },
  computed: {
    parentClasses: function parentClasses() {
      return {
        disabled: this.disabled === 'disabled',
        valid: this.tag === 'valid',
        error: this.tag === 'error' || this.errorAvailable(),
        help: this.tag === 'help'
      };
    }
  },
  methods: {
    focus: function focus() {
      this.$refs.input.focus();
    },
    updateValue: function updateValue(event) {
      var value = event.target.value;
      this.$emit('update:value', value);

      if (this.validationMode === 'active') {
        this.validateIfPresent(value);
      }
    },

    focusLost: function focusLost(event) {
      if (this.validationMode === 'onBlur') {
        this.validateIfPresent(this.value);
      }
    }
  }
});

/***/ }),
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BannerNotification_vue__ = __webpack_require__(56);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4545ac55_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BannerNotification_vue__ = __webpack_require__(276);
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BannerNotification_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4545ac55_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BannerNotification_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['resolve', 'PromoImage'],
  data: function data() {
    return {
      classNotPresent: false
    };
  },
  mounted: function mounted() {
    this.classNotPresent = !this.$el.classList.length;
  }
});

/***/ }),
/* 57 */,
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      parentClasses: {
        disabled: this.disabled === 'disabled',
        valid: this.tag === 'valid',
        error: this.tag === 'error',
        help: this.tag === 'help'
      }
    };
  },
  props: {
    id: '',
    label: null,
    name: '',
    fieldClass: '',
    tag: '',
    disabled: '',
    position: '',
    size: '',
    /**
     * The value that the input must have
     * CAN USE SYNC
     * @type {String, Number, Boolean}
     */
    value: {
      required: true,
      type: [String, Number, Boolean]
    },
    checkValue: {
      required: false,
      type: [String, Number, Boolean],
      default: true
    },
    uncheckValue: {
      required: false,
      type: [String, Number, Boolean],
      default: false
    }
  },
  computed: {
    isSelected: function isSelected() {
      return this.value === this.checkValue;
    }
  },
  methods: {
    toggleValue: function toggleValue() {
      if (this.value === this.checkValue) {
        this.$emit('update:value', this.uncheckValue);
      } else {
        this.$emit('update:value', this.checkValue);
      }
    }
  }
});

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_validationBase_js__ = __webpack_require__(6);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      parentClasses: {
        disabled: this.disabled === 'disabled',
        valid: this.tag === 'valid',
        error: this.tag === 'error',
        help: this.tag === 'help'
      }
    };
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_validationBase_js__["a" /* default */]],
  props: {
    id: '',
    label: null,
    name: {
      default: null
    },
    fieldClass: '',
    tag: '',
    disabled: '',
    position: '',
    /**
     * The value that the input must have
     * CAN USE SYNC
     * @type {String, Number}
     */
    value: {
      type: [String, Number],
      default: -1
    },
    selectedValue: {
      type: [String, Number],
      required: true
    }
  },
  methods: {
    onSelect: function onSelect() {
      if (this.value !== this.selectedValue) {
        this.$emit('update:value', this.selectedValue);
        this.validateIfPresent(this.selectedValue);
      }
    }
  }
});

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      parentClasses: {
        disabled: this.disabled === 'disabled',
        valid: this.tag === 'valid',
        error: this.tag === 'error',
        help: this.tag === 'help'
      }
    };
  },
  props: {
    id: '',
    label: null,
    name: '',
    fieldClass: '',
    tag: '',
    disabled: '',
    position: '',
    /**
     * The value that the input must have
     * CAN USE SYNC
     * @type {String, Number, Boolean}
     */
    value: {
      required: true,
      type: [String, Number, Boolean]
    },
    checkValue: {
      required: false,
      type: [String, Number, Boolean],
      default: true
    },
    uncheckValue: {
      required: false,
      type: [String, Number, Boolean],
      default: false
    }
  },
  computed: {
    isChecked: function isChecked() {
      return this.value === this.checkValue;
    }
  },
  methods: {
    toggleValue: function toggleValue() {
      if (this.value === this.checkValue) {
        this.$emit('update:value', this.uncheckValue);
      } else {
        this.$emit('update:value', this.checkValue);
      }
    }
  }
});

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_forms_InputField__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_docClick__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_tabbedIn__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_validationBase_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      isVisible: false,
      search: '',
      selectorIndex: 0
    };
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_3__mixins_validationBase_js__["a" /* default */]],
  components: {
    InputField: __WEBPACK_IMPORTED_MODULE_0__components_forms_InputField__["a" /* default */],
    DocClick: __WEBPACK_IMPORTED_MODULE_1__directives_docClick__["a" /* default */]
  },
  directives: {
    DocClick: __WEBPACK_IMPORTED_MODULE_1__directives_docClick__["a" /* default */],
    TabbedIn: __WEBPACK_IMPORTED_MODULE_2__directives_tabbedIn__["a" /* default */]
  },
  props: {
    id: '',
    placeholder: '',
    label: {
      default: null
    },
    name: '',
    searchField: false,
    /**
     * The value that the input must have
     * CAN USE SYNC
     * @type {String, Number}
     */
    value: {
      type: [String, Number],
      default: -1
    },
    fieldClass: '',
    attribute: '',
    description: {
      default: null
    },
    tag: '',
    disabled: '',

    /**
     * The options array/object, it can be an Array of Number, String
     * or it can be an array of Objects containing text and id as attributes.
     * Alternatively it can be an object that defines all the options as
     * attributes and values, the attribute name will be used for the id and
     * the attribute value will be used for the text
     * @type {Array, Object}
     */
    options: {
      required: true,
      type: [Array, Object],
      default: function _default() {
        return [];
      }
    },
    compact: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  computed: {
    // Process the options Array to standarize it
    processedOptions: function processedOptions() {
      var res = [];
      if (!(this.options instanceof Array)) {
        res = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.map(this.options, function (option, index) {
          return {
            id: index,
            text: option
          };
        });
      } else {
        res = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.map(this.options, function (option) {
          if (option instanceof Object) {
            return option;
          } else {
            return {
              id: option,
              text: String(option)
            };
          }
        });
      }
      return res;
    },


    // Calculate the list of all items currently shown
    filteredList: function filteredList() {
      var _this = this;

      // Reset the selector index
      this.selectorIndex = 0;

      // Filter all options with the current search
      return this.processedOptions.filter(function (searchField) {
        return searchField.text.toLowerCase().includes(_this.search.toLowerCase());
      });
    },


    // Calculate the index of the current element,
    // should be used to get the current selected item
    selectedIndex: function selectedIndex() {
      return __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.findIndex(this.processedOptions, { id: this.value });
    },


    // Calculates the text that will be shown in the input
    selectedText: function selectedText() {
      return this.selectedIndex === -1 ? this.placeholder : this.processedOptions[this.selectedIndex].text;
    },


    parentClasses: function parentClasses() {
      return {
        disabled: this.disabled === 'disabled',
        valid: this.tag === 'valid',
        error: this.tag === 'error' || this.errorAvailable(),
        help: this.tag === 'help',
        compact: this.compact
      };
    }
  },
  methods: {
    // Show the options dropdown
    toggleOptions: function toggleOptions(event) {
      this.isVisible = !this.isVisible;
    },

    // When an option is clicked
    optionSelect: function optionSelect(index) {
      // Hide options
      this.isVisible = false;

      // Reset search
      this.search = '';

      // Emit selected value to parent as an update to the 'value' prop
      this.$emit('update:value', index);

      // Validate the current value if any validation is present
      this.validateIfPresent(index);
    },

    // This is a callback that executes when the dropdown is shown
    dropdownShown: function dropdownShown() {
      if (this.isVisible && this.searchField) {
        this.$refs.searchField.focus();
      }
    },

    // Hide the options
    hide: function hide(event) {
      // If the target of the event comes from the button,
      // then stop the hide function, and let the button handle the logic
      // so the dropdown is not hidden and then shown again
      var buttonActive = event.relatedTarget === this.$refs.button;
      if (!buttonActive) {
        this.isVisible = false;
      }
    },

    // Show the options
    show: function show(event) {
      // If the target of the event comes from the button,
      // then stop the show function, and let the button handle the logic
      // so the dropdown is not shown and hidden again
      var buttonActive = event.relatedTarget === this.$refs.button;
      if (!buttonActive) {
        this.isVisible = true;
      }
    },

    // Select the previous option
    previousOption: function previousOption() {
      if (this.selectorIndex > 0) {
        this.selectorIndex--;
      }

      // Set the dropdown as visible, as the user may
      // want to quickly change the selected option
      this.isVisible = true;
    },

    // Select the next option
    nextOption: function nextOption() {
      if (this.selectorIndex < this.filteredList.length - 1) {
        this.selectorIndex++;
      }

      // Set the dropdown as visible, as the user may
      // want to quickly change the selected option
      this.isVisible = true;
    },

    // Get the selected item, can be used from the parent
    getSelectedItem: function getSelectedItem() {
      if (this.selectedIndex > -1) {
        return this.processedOptions[this.selectedIndex];
      } else {
        return null;
      }
    }
  }
});

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TokenSelect_vue__ = __webpack_require__(63);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2dc52bb9_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TokenSelect_vue__ = __webpack_require__(287);
function injectStyle (ssrContext) {
  __webpack_require__(286)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TokenSelect_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2dc52bb9_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TokenSelect_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_forms_InputField__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_docClick__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_tabbedIn__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_validationBase_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      isVisible: false,
      search: '',
      selectorIndex: 0,
      generatedTokens: []
    };
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_3__mixins_validationBase_js__["a" /* default */]],
  components: {
    InputField: __WEBPACK_IMPORTED_MODULE_0__components_forms_InputField__["a" /* default */],
    DocClick: __WEBPACK_IMPORTED_MODULE_1__directives_docClick__["a" /* default */]
  },
  directives: {
    DocClick: __WEBPACK_IMPORTED_MODULE_1__directives_docClick__["a" /* default */],
    TabbedIn: __WEBPACK_IMPORTED_MODULE_2__directives_tabbedIn__["a" /* default */]
  },
  props: {
    id: '',
    placeholder: '',
    label: {
      default: null
    },
    selectedLabel: {
      default: 'Options Selected'
    },
    name: '',
    /**
     * The values that the input must have
     * CAN USE SYNC
     * @type Array
     */
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    fieldClass: '',
    attribute: '',
    description: {
      default: null
    },
    tag: '',
    disabled: '',
    /**
     * The options array, it can be an Array of Number, String
     * or it can be an array of Objects containing text and id as attributes
     * @type {Array}
     */
    options: {
      required: true,
      type: Array,
      default: function _default() {
        return [];
      }
    },
    compact: {
      required: false,
      type: Boolean,
      default: false
    },
    validation: {
      type: [String],
      default: null
    },
    tagging: {
      type: Boolean,
      default: false
    },
    createTag: {
      type: Function,
      default: function _default(value) {
        return value;
      }
    },
    tokenSeparators: {
      type: Array,
      default: function _default() {
        return [','];
      }
    }
  },
  computed: {
    // Process the options Array to standarize it
    processedOptions: function processedOptions() {
      var res = [];
      if (!(this.options instanceof Array)) {
        res = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.map(this.options, function (option, index) {
          return {
            id: index,
            text: option,
            generated: false
          };
        });
      } else {
        res = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.map(this.options, function (option) {
          if (option instanceof Object) {
            return {
              id: option.id,
              text: option.text,
              generated: false
            };
          } else {
            return {
              id: option,
              text: String(option),
              generated: false
            };
          }
        });
      }
      return __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.concat(this.generatedTokens, res);
    },


    // Calculate the list of all items currently shown, this gets updated once:
    // search changes
    // processedOptions changes
    filteredList: function filteredList() {
      var _this = this;

      // Reset the selector index
      this.selectorIndex = 0;

      // Filter all options with the current search
      var filteredList = this.processedOptions.filter(function (options) {
        return options.text.toLowerCase().includes(_this.search.toLowerCase());
      });

      // Check if the search field has any text and if tagging is enabled and if the search is not an existing token
      if (this.tagging && this.search !== '' && __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.findIndex(this.processedOptions, function (o) {
        return o.text.toLowerCase() === _this.search.toLowerCase();
      }) === -1) {
        var lastLetter = this.search.slice(-1);
        // If any of the token separators has been written
        if (__WEBPACK_IMPORTED_MODULE_4_lodash___default.a.some(this.tokenSeparators, function (o) {
          return o === lastLetter;
        })) {
          // Then inmediately add it to the current selected tokens
          var newElement = {
            id: this.search.slice(0, -1),
            text: this.search.slice(0, -1),
            generated: true
          };
          this.addToken(newElement);
        } else {
          // Otherwise add the option to the list of shown results
          var _newElement = {
            id: this.search,
            text: this.search,
            generated: true
          };
          filteredList.push(_newElement);
        }
      }
      return filteredList;
    },


    // Calculate the index of the current element,
    // should be used to get the current selected item
    selectedIndexes: function selectedIndexes() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.map(this.value, function (value) {
        return __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.findIndex(_this2.processedOptions, { id: value });
      });
    },


    parentClasses: function parentClasses() {
      return {
        disabled: this.disabled === 'disabled',
        valid: this.tag === 'valid',
        error: this.tag === 'error' || this.errorAvailable(),
        help: this.tag === 'help',
        compact: this.compact
      };
    },

    selectedItems: function selectedItems() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.filter(this.processedOptions, function (o) {
        return __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.indexOf(_this3.value, o.id) > -1;
      });
    }
  },
  methods: {
    // Show the options dropdown
    toggleOptions: function toggleOptions(event) {
      this.isVisible = !this.isVisible;
    },

    // When an option is clicked
    optionSelect: function optionSelect(option) {
      // Check if the option has been selected or unselected
      var foundIndex = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.indexOf(this.value, option.id);
      if (foundIndex > -1) {
        this.removeToken(option);
      } else {
        this.addToken(option);
      }
    },

    // This is a callback that executes when the dropdown is shown
    dropdownShown: function dropdownShown() {
      if (this.isVisible) {
        this.$refs.searchField.focus();
      }
    },

    // Hide the options
    hide: function hide(event) {
      this.isVisible = false;
    },

    // Show the options
    show: function show(event) {
      if (event.type === 'keyup' || event.type === 'input') {
        this.isVisible = true;
      }
    },

    // Select the previous option
    previousOption: function previousOption() {
      if (this.selectorIndex > 0) {
        this.selectorIndex--;
      }

      // Set the dropdown as visible, as the user may
      // want to quickly change the selected option
      this.isVisible = true;
    },

    // Select the next option
    nextOption: function nextOption() {
      if (this.selectorIndex < this.filteredList.length - 1) {
        this.selectorIndex++;
      }

      // Set the dropdown as visible, as the user may
      // want to quickly change the selected option
      this.isVisible = true;
    },

    // Get the selected item, can be used from the parent
    getSelectedItems: function getSelectedItems() {
      var _this4 = this;

      if (this.selectedIndexes.length > 0) {
        return __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.filter(this.processedOptions, function (o) {
          __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.indexOf(_this4.value, o.id);
        });
      } else {
        return null;
      }
    },

    addToken: function addToken(token) {
      var newValue = this.value;
      // If the selected option is generated, then push it to the generated tokens array
      // run the createTag function to create the desired user output
      if (token.generated === true) {
        this.generatedTokens.push(token);
        newValue.push(this.createTag(token.text));
      } else {
        newValue.push(token.id);
      }
      this.search = '';

      // Emit selected value to parent as an update to the 'value' prop
      this.$emit('update:value', newValue);

      // Validate the current value if any validation is present
      this.validateIfPresent(newValue);
    },

    removeToken: function removeToken(token) {
      var newValue = this.value;
      var foundIndex = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.indexOf(this.value, token.id);
      newValue.splice(foundIndex, 1);
      if (token.generated === true) {
        var genIndex = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.findIndex(this.generatedTokens, function (o) {
          return o.id === token.id;
        });
        this.generatedTokens.splice(genIndex, 1);
      }

      // Emit selected value to parent as an update to the 'value' prop
      this.$emit('update:value', newValue);

      // Validate the current value if any validation is present
      this.validateIfPresent(newValue);
    }
  }
});

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_forms_InputField__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_docClick__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_tabbedIn__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_validationBase_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      isVisible: false,
      search: '',
      selectorIndex: 0
    };
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_3__mixins_validationBase_js__["a" /* default */]],
  components: {
    InputField: __WEBPACK_IMPORTED_MODULE_0__components_forms_InputField__["a" /* default */],
    DocClick: __WEBPACK_IMPORTED_MODULE_1__directives_docClick__["a" /* default */]
  },
  directives: {
    DocClick: __WEBPACK_IMPORTED_MODULE_1__directives_docClick__["a" /* default */],
    TabbedIn: __WEBPACK_IMPORTED_MODULE_2__directives_tabbedIn__["a" /* default */]
  },
  props: {
    id: '',
    placeholder: '',
    label: {
      default: null
    },
    selectedLabel: {
      default: 'Options Selected'
    },
    name: '',
    searchField: false,
    /**
     * The values that the input must have
     * CAN USE SYNC
     * @type Array
     */
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    fieldClass: '',
    attribute: '',
    description: {
      default: null
    },
    tag: '',
    disabled: '',
    /**
     * The options array, it can be an Array of Number, String
     * or it can be an array of Objects containing text and id as attributes
     * @type {Array}
     */
    options: {
      required: true,
      type: Array,
      default: function _default() {
        return [];
      }
    },
    compact: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  computed: {
    // Process the options Array to standarize it
    processedOptions: function processedOptions() {
      var res = [];
      if (!(this.options instanceof Array)) {
        res = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.map(this.options, function (option, index) {
          return {
            id: index,
            text: option
          };
        });
      } else {
        res = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.map(this.options, function (option) {
          if (option instanceof Object) {
            return option;
          } else {
            return {
              id: option,
              text: String(option)
            };
          }
        });
      }
      return res;
    },


    // Calculate the list of all items currently shown
    filteredList: function filteredList() {
      var _this = this;

      // Reset the selector index
      this.selectorIndex = 0;

      // Filter all options with the current search
      return this.processedOptions.filter(function (options) {
        return options.text.toLowerCase().includes(_this.search.toLowerCase());
      });
    },


    // Calculate the index of the current element,
    // should be used to get the current selected item
    selectedIndexes: function selectedIndexes() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.map(this.value, function (value) {
        return __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.findIndex(_this2.processedOptions, { id: value });
      });
    },


    // Calculates the text that will be shown in the input
    selectedText: function selectedText() {
      if (this.selectedIndexes.length === 0) {
        return this.placeholder;
      } else {
        if (this.selectedIndexes.length === 1) {
          return this.processedOptions[this.selectedIndexes[0]].text;
        } else if (this.selectedIndexes.length === this.processedOptions.length) {
          return 'All ' + this.selectedLabel;
        } else {
          return '(' + this.selectedIndexes.length + ') ' + this.selectedLabel;
        }
      }
    },

    parentClasses: function parentClasses() {
      return {
        disabled: this.disabled === 'disabled',
        valid: this.tag === 'valid',
        error: this.tag === 'error' || this.errorAvailable(),
        help: this.tag === 'help',
        compact: this.compact
      };
    }
  },
  methods: {
    // Show the options dropdown
    toggleOptions: function toggleOptions(event) {
      this.isVisible = !this.isVisible;
    },

    // When an option is clicked
    optionSelect: function optionSelect(index) {
      // Check if the option has been selected or unselected
      var newValue = this.value;
      var foundIndex = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.indexOf(this.value, index);
      if (foundIndex > -1) {
        newValue.splice(foundIndex, 1);
      } else {
        newValue.push(index);
      }

      // Emit selected value to parent as an update to the 'value' prop
      this.$emit('update:value', newValue);

      // Validate the current value if any validation is present
      this.validateIfPresent(newValue);
    },

    // This is a callback that executes when the dropdown is shown
    dropdownShown: function dropdownShown() {
      if (this.isVisible && this.searchField) {
        this.$refs.searchField.focus();
      }
    },

    // Hide the options
    hide: function hide(event) {
      // If the target of the event comes from the button,
      // then stop the hide function, and let the button handle the logic
      // so the dropdown is not hidden and then shown again
      var buttonActive = event.relatedTarget === this.$refs.button;
      if (!buttonActive) {
        this.isVisible = false;
      }
    },

    // Show the options
    show: function show(event) {
      // If the target of the event comes from the button,
      // then stop the show function, and let the button handle the logic
      // so the dropdown is not shown and hidden again
      if (event.type === 'keyup' || event.relatedTarget !== this.$refs.button) {
        this.isVisible = true;
      }
    },

    // Select the previous option
    previousOption: function previousOption() {
      if (this.selectorIndex > 0) {
        this.selectorIndex--;
      }

      // Set the dropdown as visible, as the user may
      // want to quickly change the selected option
      this.isVisible = true;
    },

    // Select the next option
    nextOption: function nextOption() {
      if (this.selectorIndex < this.filteredList.length - 1) {
        this.selectorIndex++;
      }

      // Set the dropdown as visible, as the user may
      // want to quickly change the selected option
      this.isVisible = true;
    },

    // Get the selected item, can be used from the parent
    getSelectedItems: function getSelectedItems() {
      var _this3 = this;

      if (this.selectedIndexes.length > 0) {
        return __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.filter(this.processedOptions, function (o) {
          __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.indexOf(_this3.values, o.id);
        });
      } else {
        return null;
      }
    }
  }
});

/***/ }),
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuejs_datepicker__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuejs_datepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuejs_datepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_validationBase_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {};
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_validationBase_js__["a" /* default */]],
  components: {
    'date-picker': __WEBPACK_IMPORTED_MODULE_0_vuejs_datepicker___default.a
  },
  props: {
    value: {
      required: true,
      type: Date
    },
    label: {
      default: null
    },
    description: {
      default: null
    },
    name: '',
    fieldClass: ''
  },
  computed: {
    parentClasses: function parentClasses() {
      return {
        disabled: this.disabled === 'disabled',
        valid: this.tag === 'valid',
        error: this.tag === 'error' || this.errorAvailable(),
        help: this.tag === 'help'
      };
    }
  },
  methods: {
    updateValue: function updateValue(value) {
      this.$emit('update:value', value);
      this.validateIfPresent(__WEBPACK_IMPORTED_MODULE_2_moment___default()(value).format('YYYY/MM/DD'));
      console.log(this.$validator.fields);
    },

    // This addition to the rules is
    // needed for the date validations to work
    extraRules: function extraRules() {
      return 'date_format:YYYY/MM/DD';
    }
  }
});

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_daterangepicker__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_daterangepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_daterangepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_daterangepicker_daterangepicker_css__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_daterangepicker_daterangepicker_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_daterangepicker_daterangepicker_css__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      daterangepicker: null
    };
  },
  props: {
    /**
     * Defines the default start of the date range picker
     * CAN BE USED WITH SYNC
     * @type {Date}
     */
    start: {
      required: true,
      type: Date
    },

    /**
     * Defines the default end of the date range picker
     * CAN BE USED WITH SYNC
     * @type {Date}
     */
    end: {
      required: true,
      type: Date
    },

    /**
     * Defines the ranges that will be available by default,
     * each range is in the format
     * 'label': [start, end]
     * Where "start" and "end" are Dates or MomentJS Objects and "label" is a String
     * @type {Object}
     */
    ranges: {
      required: false,
      type: Object,
      default: function _default() {
        return {
          'Today': [__WEBPACK_IMPORTED_MODULE_1_moment___default()(), __WEBPACK_IMPORTED_MODULE_1_moment___default()()],
          'Yesterday': [__WEBPACK_IMPORTED_MODULE_1_moment___default()().subtract('days', 1), __WEBPACK_IMPORTED_MODULE_1_moment___default()().subtract('days', 1)],
          'Last 7 Days': [__WEBPACK_IMPORTED_MODULE_1_moment___default()().subtract('days', 6), __WEBPACK_IMPORTED_MODULE_1_moment___default()()],
          'Last 30 Days': [__WEBPACK_IMPORTED_MODULE_1_moment___default()().subtract('days', 29), __WEBPACK_IMPORTED_MODULE_1_moment___default()()],
          'This Month': [__WEBPACK_IMPORTED_MODULE_1_moment___default()().startOf('month'), __WEBPACK_IMPORTED_MODULE_1_moment___default()()],
          'Last Month': [__WEBPACK_IMPORTED_MODULE_1_moment___default()().subtract('month', 1).startOf('month'), __WEBPACK_IMPORTED_MODULE_1_moment___default()().subtract('month', 1).endOf('month')]
        };
      }
    },

    /**
     * Defines the amount of days, months, weeks, years, etc.
     * Anything that can be added to a Date.
     * @type {Object}
     */
    dateLimit: {
      required: false,
      type: Object,
      default: function _default() {
        return {
          days: 90
        };
      }
    },

    /**
     * The minimum date that the Date Range Picker will allow the user to choose
     * @type {Date}
     */
    minDate: {
      required: false,
      type: [Date, Boolean],
      default: function _default() {
        return false;
      }
    },

    /**
     * The maximum date that the Date Range Picker will allow the user to choose
     * @type {Object}
     */
    maxDate: {
      required: false,
      type: [Date, Boolean],
      default: function _default() {
        return false;
      }
    },

    /**
     * The label of the date range picker
     * @type {Object}
     */
    label: {
      default: null
    },

    description: {
      default: null
    }
  },
  methods: {
    init: function init() {
      var _this = this;

      this.daterangepicker = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this.$refs.date_range).daterangepicker({
        startDate: this.start,
        endDate: this.end,
        dateLimit: this.dayLimit,
        ranges: this.ranges,
        opens: 'center',
        drops: 'down',
        applyClass: 'apply',
        cancelClass: 'cancel',
        linkedCalendars: true,
        template: __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this.$refs.template).html()
        // parentEl: this.$el
      }, function (start, end) {
        // Send the status of the inputs through a .sync
        // (without a .sync no change to the source is made)
        _this.$emit('update:start', start.toDate());
        _this.$emit('update:end', end.toDate());
      });
      this.container = this.daterangepicker.data('daterangepicker').container;
    },
    formatted: function formatted(date) {
      return __WEBPACK_IMPORTED_MODULE_1_moment___default()(date).format('MMMM D, YYYY');
    }
  },
  mounted: function mounted() {
    this.init();
  },
  beforeDestroy: function beforeDestroy() {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this.container).remove();
  }
});

/***/ }),
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Notification_vue__ = __webpack_require__(195);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_196e9130_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Notification_vue__ = __webpack_require__(307);
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Notification_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_196e9130_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Notification_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {};
  },

  props: {
    group: '',
    title: '',
    content: '',
    type: '',
    position: {
      default: 'bottom right'
    }
  },
  methods: {
    show: function show() {
      this.$notify({
        group: this.group,
        title: this.title,
        text: this.content,
        position: this.position,
        duration: -1
      });
    }
  }
});

/***/ }),
/* 196 */,
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Modal_vue__ = __webpack_require__(198);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_09c2334b_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Modal_vue__ = __webpack_require__(313);
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Modal_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_09c2334b_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Modal_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['modal'],
  methods: {
    closeModal: function closeModal() {
      var $this = this;
      this.$refs.container.classList.remove('active');
      setTimeout(function () {
        document.body.classList.remove('modal-active');
        $this.close();
      }, 400);
    },
    close: function close() {
      this.$emit('close');
    }
  },
  watch: {
    modal: function modal(showVal) {
      if (showVal) {
        document.body.classList.add('modal-active');
      } else {
        document.body.classList.remove('modal-active');
      }
    }
  }
});

/***/ }),
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DataTable_vue__ = __webpack_require__(215);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_444549e0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DataTable_vue__ = __webpack_require__(365);
function injectStyle (ssrContext) {
  __webpack_require__(352)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-444549e0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DataTable_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_444549e0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DataTable_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_forms_InputField__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_table_ShowInput__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_table_PaginationInput__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_table_FilterInput__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_table_ColumnSelector__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      columns: [],
      formattedData: [],
      size: 10,
      page: 1,
      total: 0,
      search: '',
      filters: [],
      sorters: [],
      orders: []
    };
  },
  components: {
    FilterInput: __WEBPACK_IMPORTED_MODULE_3__components_table_FilterInput__["a" /* default */],
    ShowInput: __WEBPACK_IMPORTED_MODULE_1__components_table_ShowInput__["a" /* default */],
    PaginationInput: __WEBPACK_IMPORTED_MODULE_2__components_table_PaginationInput__["a" /* default */],
    InputField: __WEBPACK_IMPORTED_MODULE_0__components_forms_InputField__["a" /* default */],
    ColumnSelector: __WEBPACK_IMPORTED_MODULE_4__components_table_ColumnSelector__["a" /* default */]
  },
  props: {
    /**
     * An array of objects with all the data.
     * @type Array
     */
    data: {
      type: Array,
      required: true
    },

    /**
     * Can be included to format the data before it is rendered,
     * default format is just the item itself, no extra formatting
     * @type Function
     */
    formatter: {
      type: Function,
      required: false,
      default: function _default(item) {
        return item;
      }
    },

    /**
     * Defines the source function which will be used in case the component needs data,
     * @type {Object}
     */
    source: {
      type: Function,
      required: false
    },

    /**
     * Defines the key with which the table will distingish between different rows
     * also defines the default ordering
     * @type {String}
     */
    tableKey: {
      type: String,
      required: true
    },

    /**
     * Defines whether or not to show the column Selector, also this option is necessary to
     * specify every column in the form of headers
     * @type {Boolean}
     */
    columnSelector: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  watch: {
    data: function data(val) {
      this.formatData(val);
    },
    size: function size(newVal, oldVal) {
      // Change the page with new size according to the first element shown right now
      var currentResult = oldVal * (this.page - 1);
      this.page = Math.floor(currentResult / newVal) + 1;
    },
    search: function search(val) {
      // Reset pagination when a search is done
      this.page = 1;
    },
    filters: function filters(val) {
      // Reset pagination when filters are applied
      this.page = 1;
    }
  },
  computed: {
    processedData: function processedData() {
      var _this = this;

      // Filter
      var processedData = this.filterData(this.formattedData);

      // Search
      processedData = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.filter(processedData, function (item) {
        return _this.searchData(item, _this.search);
      });

      // Sort
      processedData = this.sortData(processedData);

      // Set total
      this.total = processedData.length;

      // Paginate
      processedData = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.filter(processedData, function (item, index) {
        return _this.paginateData(index);
      });

      return processedData;
    }
  },
  methods: {
    // Methods for the DataTable computed property to work
    filterData: function filterData(data) {
      var _this2 = this;

      // No filtering is done without any filters
      if (this.filters.length === 0) {
        return data;
      }

      // Filter the data
      // For each row in the dataset
      return __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.filter(data, function (item) {
        // Check if the item matches all the filters
        return __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.every(_this2.filters, function (filter) {
          var key = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.head(__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.keys(filter));
          // Match the property and value against the filter
          return __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.matchesProperty(key, filter[key])(item);
        });
      });
    },
    searchData: function searchData(row, terms) {
      // Trim the terms and separate them by spaces
      var termsArray = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.split(__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.trim(terms), ' ');

      // Get the first term
      var term = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.toLower(termsArray[0]);

      // Get the rest of terms
      var rest = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.join(__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.takeRight(termsArray, termsArray.length - 1), ' ');

      // If the first term is empty, then we just skip the whole search
      if (term === '') {
        return true;
      } else {
        // If the term matches any of the elements in the row, return true
        var match = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.some(row, function (element) {
          if (typeof element === 'string') {
            return __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.includes(__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.toLower(__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.deburr(element)), term);
          } else {
            return false;
          }
        });

        // Match the rest of the terms again recursively
        return match && this.searchData(row, rest);
      }
    },
    sortData: function sortData(data) {
      return __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.orderBy(data, this.sorters, this.orders);
    },
    paginateData: function paginateData(index) {
      var start = this.size * (this.page - 1);
      var end = this.size * this.page - 1;
      return index >= start && index <= end;
    },

    formatData: function formatData(data) {
      var _this3 = this;

      this.formattedData = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.map(data, function (item) {
        return _this3.formatter(item);
      });
    },

    loadData: function loadData() {
      var _this4 = this;

      // If the data has any item then format it
      if (this.data.length > 0) {
        this.formatData(this.data);
      } else {
        if (this.source === undefined) {
          return;
        }
        this.source(this.columns, this.size, this.page, this.search, this.filters, this.sorters, this.orders).then(function (data) {
          _this4.formatData(data);
        });
      }
    },
    reloadData: function reloadData() {
      var _this5 = this;

      if (this.source === undefined) {
        return;
      }
      this.source(this.columns, this.size, this.page, this.search, this.filters, this.sorters, this.orders).then(function (data) {
        _this5.formatData(data);
      });
    }
  },
  mounted: function mounted() {
    this.loadData();
  }
});

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ShowInput_vue__ = __webpack_require__(217);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_65152380_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ShowInput_vue__ = __webpack_require__(354);
function injectStyle (ssrContext) {
  __webpack_require__(353)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-65152380"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ShowInput_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_65152380_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ShowInput_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_forms_DropdownSelect__ = __webpack_require__(12);
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {};
  },

  components: {
    DropdownSelect: __WEBPACK_IMPORTED_MODULE_0__components_forms_DropdownSelect__["a" /* default */]
  },
  props: {
    value: {
      type: Number,
      required: false,
      default: 10
    },
    options: {
      type: Array,
      required: false,
      default: function _default() {
        return [10, 25, 50, 100];
      }
    }
  },
  methods: {
    updateValue: function updateValue(value) {
      this.$emit('update:value', +value);
    }
  }
});

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PaginationInput_vue__ = __webpack_require__(219);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5617cf4c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PaginationInput_vue__ = __webpack_require__(356);
function injectStyle (ssrContext) {
  __webpack_require__(355)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5617cf4c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PaginationInput_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5617cf4c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PaginationInput_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {};
  },
  computed: {
    max: function max() {
      return Math.ceil(this.total / this.size);
    }
  },
  props: {
    value: {
      type: Number,
      required: true
    },
    size: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    pagesShown: {
      type: Number,
      required: false,
      default: 11
    }
  },
  methods: {
    changePage: function changePage(value) {
      // If the page is valid, then change the page
      if (value > 0 && value <= this.max) {
        this.$emit('input', value);
      }
    }
  },
  created: function created() {
    this.middlePage = Math.ceil(this.pagesShown / 2);
  }
});

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_forms_DropdownSelect__ = __webpack_require__(12);

//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      value: '-',
      label_text: '',
      optionsProcessed: []
    };
  },

  components: {
    DropdownSelect: __WEBPACK_IMPORTED_MODULE_2__components_forms_DropdownSelect__["a" /* default */]
  },
  props: {
    options: {
      type: Array,
      required: false,
      default: function _default() {
        return [];
      }
    },
    property: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false,
      default: null
    },
    allLabel: {
      type: String,
      required: false,
      default: 'All'
    }

  },
  methods: {
    getOptions: function getOptions() {
      var _this = this;

      // Get a list of possible values
      var attributes = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(this.$parent.formattedData, function (e) {
        return { id: e[_this.property], text: e[_this.property] };
      });

      // Create a list of options by removing duplicates and sorting it alphabetically
      var options = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.uniqBy(attributes, function (e) {
        return e.id;
      });

      return options;
    },
    generateLabel: function generateLabel() {
      return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.startCase(this.property);
    },
    updateValue: function updateValue(value) {
      // Remove the current filter
      if (value === '-') {
        var index = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.findIndex(this.$parent.filters, this.property);
        if (index !== -1) {
          this.$parent.filters.splice(index, 1);
        }
      } else {
        var _index = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.findIndex(this.$parent.filters, this.property);

        // If not new, then replace it with splice
        // (important to use splice since VueJS can detect this change)
        if (_index !== -1) {
          this.$parent.filters.splice(_index, 1, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, this.property, value));
        } else {
          // If new, push it
          this.$parent.filters.push(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, this.property, value));
        }
      }
      this.value = value;
    },
    addAll: function addAll(options) {
      var allLabel = {
        id: '-',
        text: this.allLabel
      };

      return [allLabel].concat(options);
    }
  },
  mounted: function mounted() {
    // Set the options
    if (this.options.length === 0) {
      this.optionsProcessed = this.addAll(this.getOptions());
    } else {
      this.optionsProcessed = this.addAll(this.options);
    }

    // Set the label
    if (this.label === null) {
      this.label_text = this.generateLabel();
    } else {
      this.label_text = this.label;
    }
  }
});

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ColumnSelector_vue__ = __webpack_require__(222);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_56a93b8a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ColumnSelector_vue__ = __webpack_require__(364);
function injectStyle (ssrContext) {
  __webpack_require__(363)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-56a93b8a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ColumnSelector_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_56a93b8a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ColumnSelector_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_forms_DropdownMultiselect__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      selectedColumns: [],
      processedColumns: [],
      loaded: false
    };
  },
  props: {
    columns: {
      required: true,
      type: Array
    }
  },
  components: {
    DropdownMultiselect: __WEBPACK_IMPORTED_MODULE_0__components_forms_DropdownMultiselect__["a" /* default */]
  },
  methods: {
    updateValue: function updateValue(columns) {
      var _this = this;

      // Cycle through each column in the datatable
      __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(this.columns, function (mc, index) {
        // Get the label & title
        var label = _this.$parent.columns[index][0];
        var title = _this.$parent.columns[index][2];

        // Check if the current column is on the selected columns of the multiselect
        var found = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(columns, function (fc) {
          return fc === mc[0];
        });
        if (found !== undefined) {
          // We replace the column item with a new one, this way VueJS can keep track of the change
          _this.$parent.columns.splice(index, 1, [label, true, title]);
        } else {
          // We replace the column item with a new one, this way VueJS can keep track of the change
          _this.$parent.columns.splice(index, 1, [label, false, title]);
        }
      });
    },

    loadColumns: function loadColumns() {
      if (!this.loaded) {
        // Load all the datatable columns into an array that the multiselect can use as options
        this.processedColumns = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(this.$parent.columns, function (o) {
          return {
            id: o[0], // 0 is the name, which we are using this as the id
            text: o[2] // 2 is the title
          };
        });

        // Load all the datatable columns into an array to set as selected values
        this.selectedColumns = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(this.$parent.columns, function (o) {
          return o[0]; // 0 is the name, which we are using as the id
        });
        this.loaded = true;
      }
    }
  },
  mounted: function mounted() {
    this.loadColumns();
  }
});

/***/ }),
/* 223 */,
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NormalHeader_vue__ = __webpack_require__(225);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ad0ac090_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_NormalHeader_vue__ = __webpack_require__(367);
function injectStyle (ssrContext) {
  __webpack_require__(366)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ad0ac090"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NormalHeader_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ad0ac090_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_NormalHeader_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {};
  },
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false
    }
  },
  methods: {
    shown: function shown() {
      var _this = this;

      var column = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.find(this.$parent.columns, function (o) {
        return o[0] === _this.name;
      });
      return column !== undefined ? column[1] : false;
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    var column = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.find(this.$parent.columns, function (o) {
      return o[0] === _this2.name;
    });
    if (column === undefined) {
      this.$parent.columns.push([this.name, true, this.title !== undefined ? this.title : this.name]);
    }
  }
});

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SortableHeader_vue__ = __webpack_require__(227);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6753891e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SortableHeader_vue__ = __webpack_require__(369);
function injectStyle (ssrContext) {
  __webpack_require__(368)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6753891e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SortableHeader_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6753891e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SortableHeader_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      sort: ''
    };
  },
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false
    }
  },
  methods: {
    shown: function shown() {
      var _this = this;

      var column = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.find(this.$parent.columns, function (o) {
        return o[0] === _this.name;
      });
      return column !== undefined ? column[1] : false;
    },
    getClass: function getClass() {
      if (this.sort === 'asc') {
        return 'sort-ascend';
      } else if (this.sort === 'desc') {
        return 'sort-descend';
      } else {
        return '';
      }
    },
    cycleSort: function cycleSort() {
      if (this.sort === '') {
        this.sort = 'asc';
        this.addSort(this.name);
      } else if (this.sort === 'asc') {
        this.sort = 'desc';
        this.changeSort(this.name);
      } else {
        this.sort = '';
        this.removeSort(this.name);
      }
    },

    addSort: function addSort(name) {
      this.$parent.sorters.push(name);
      this.$parent.orders.push('asc');
    },
    changeSort: function changeSort(name) {
      var index = this.$parent.sorters.indexOf(name);
      this.$parent.orders.splice(index, 1, 'desc');
    },
    removeSort: function removeSort(name) {
      var index = this.$parent.sorters.indexOf(name);
      this.$parent.sorters.splice(index, 1);
      this.$parent.orders.splice(index, 1);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    var column = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.find(this.$parent.columns, function (o) {
      return o[0] === _this2.name;
    });
    if (column === undefined) {
      this.$parent.columns.push([this.name, true, this.title !== undefined ? this.title : this.name]);
    }

    var index = this.$parent.sorters.indexOf(this.name);
    if (index > -1) {
      this.sort = this.$parent.orders[index];
    }
  }
});

/***/ }),
/* 228 */,
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Tooltip_vue__ = __webpack_require__(230);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6f846756_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Tooltip_vue__ = __webpack_require__(374);
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Tooltip_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6f846756_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Tooltip_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_v_tooltip__ = __webpack_require__(373);
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    content: {
      required: true,
      type: String
    },
    position: {
      defeault: 'top'
    },
    color: {
      default: 'dark'
    },
    trigger: {
      default: 'hover'
    },
    container: ''
  },
  directives: {
    'tooltip': __WEBPACK_IMPORTED_MODULE_0_v_tooltip__["b" /* VTooltip */],
    'close-popover': __WEBPACK_IMPORTED_MODULE_0_v_tooltip__["a" /* VClosePopover */]
  }
});

/***/ }),
/* 231 */,
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Tabs_vue__ = __webpack_require__(233);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c8d1856e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Tabs_vue__ = __webpack_require__(379);
function injectStyle (ssrContext) {
  __webpack_require__(378)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Tabs_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c8d1856e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Tabs_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    // The index itself can be a custom string, so
    // if the navigation is an object get the first key
    var defaultIndex = this.nav instanceof Array ? 0 : __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.keys(this.nav)[0];
    return {
      selectedIndex: defaultIndex
    };
  },
  props: {
    orientation: {
      default: '',
      required: false,
      validator: function validator(value) {
        return value === 'horizontal' || value === 'vertical' || value === '';
      }
    },
    nav: {
      type: [Array, Object],
      required: true
    }
  },
  computed: {
    // Get the selected tab slot name
    selectedTab: function selectedTab() {
      var tabName = '';
      // If the navigation is an array, the tab name is the element in the position
      if (this.nav instanceof Array) {
        tabName = this.nav[this.selectedIndex];
      } else {
        // Else the navigation is an object and the tab name is the index given
        tabName = this.selectedIndex;
      }
      return 'tab.' + tabName;
    }
  }
});

/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_30dca907_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Accordion_vue__ = __webpack_require__(380);
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_30dca907_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Accordion_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AccordionRow_vue__ = __webpack_require__(236);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_233634cf_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AccordionRow_vue__ = __webpack_require__(381);
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AccordionRow_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_233634cf_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AccordionRow_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      isOpened: false
    };
  },

  props: {
    title: ''
  },
  methods: {
    showAccordion: function showAccordion(opened) {
      this.$parent.$children.forEach(function (element) {
        element.isOpened = false;
      });
      this.isOpened = !opened;
    }
  }
});

/***/ }),
/* 237 */,
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_forms_InputField__ = __webpack_require__(5);
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {};
  },
  props: {
    value: {
      type: String,
      required: true
    }
  },
  components: {
    InputField: __WEBPACK_IMPORTED_MODULE_0__components_forms_InputField__["a" /* default */]
  },
  methods: {
    updateValue: function updateValue(value) {
      this.$emit('input', this.$refs.filter.value);
    }
  }
});

/***/ }),
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"id":"logo","viewBox":"0 0 400 150","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('g',{attrs:{"id":"svgg"}},[_c('path',{attrs:{"id":"path0","d":"M164.875 18.703 C 164.669 18.803,164.500 18.985,164.500 19.109 C 164.500 19.232,164.444 19.335,164.375 19.338 C 164.306 19.340,164.066 19.640,163.841 20.004 C 163.617 20.369,163.373 20.667,163.300 20.667 C 163.227 20.667,163.167 20.745,163.167 20.840 C 163.167 21.037,162.481 22.055,162.292 22.139 C 162.223 22.169,162.167 22.266,162.167 22.354 C 162.167 22.442,162.088 22.605,161.992 22.715 C 161.896 22.826,161.222 23.742,160.496 24.750 C 159.769 25.758,159.098 26.674,159.004 26.785 C 158.910 26.895,158.833 27.060,158.833 27.151 C 158.833 27.242,158.740 27.377,158.625 27.450 C 158.510 27.523,158.342 27.708,158.250 27.861 C 157.964 28.338,156.777 30.079,156.678 30.167 C 156.626 30.212,156.293 30.681,155.938 31.208 C 155.583 31.735,155.235 32.167,155.164 32.167 C 155.094 32.167,154.989 32.354,154.932 32.583 C 154.874 32.813,154.753 33.000,154.663 33.000 C 154.574 33.000,154.500 33.112,154.500 33.250 C 154.500 33.387,154.423 33.500,154.328 33.500 C 154.234 33.500,154.109 33.631,154.050 33.792 C 153.930 34.124,152.984 35.388,152.793 35.472 C 152.723 35.503,152.667 35.623,152.667 35.738 C 152.667 35.924,152.511 36.152,151.836 36.951 C 151.743 37.062,151.667 37.214,151.667 37.289 C 151.667 37.364,151.460 37.657,151.208 37.941 C 150.706 38.505,150.391 38.948,150.220 39.333 C 150.159 39.471,150.009 39.643,149.888 39.717 C 149.766 39.790,149.667 39.959,149.667 40.092 C 149.667 40.225,149.610 40.335,149.542 40.338 C 149.473 40.340,149.233 40.640,149.008 41.004 C 148.783 41.369,148.540 41.667,148.466 41.667 C 148.393 41.667,148.333 41.747,148.333 41.846 C 148.333 41.945,148.007 42.451,147.609 42.971 C 147.210 43.491,146.854 44.000,146.817 44.102 C 146.780 44.204,146.582 44.504,146.376 44.769 C 146.171 45.033,145.631 45.775,145.176 46.417 C 144.722 47.058,144.286 47.658,144.208 47.750 C 144.130 47.842,144.016 48.048,143.955 48.208 C 143.894 48.369,143.766 48.500,143.672 48.500 C 143.577 48.500,143.500 48.575,143.500 48.666 C 143.500 48.758,143.181 49.272,142.792 49.810 C 142.402 50.348,141.971 50.957,141.833 51.164 C 141.696 51.371,141.490 51.639,141.375 51.759 C 141.260 51.878,141.167 52.040,141.167 52.118 C 141.167 52.195,140.960 52.491,140.708 52.774 C 140.206 53.338,139.891 53.782,139.720 54.167 C 139.659 54.304,139.509 54.477,139.388 54.550 C 139.266 54.623,139.167 54.792,139.167 54.925 C 139.167 55.058,139.110 55.169,139.042 55.171 C 138.973 55.174,138.733 55.474,138.508 55.838 C 138.283 56.202,138.040 56.500,137.966 56.500 C 137.893 56.500,137.833 56.581,137.833 56.679 C 137.833 56.778,137.496 57.297,137.083 57.833 C 136.671 58.369,136.332 58.870,136.331 58.946 C 136.329 59.021,136.123 59.323,135.872 59.615 C 135.622 59.908,135.079 60.645,134.667 61.254 C 134.254 61.863,133.837 62.448,133.741 62.555 C 133.644 62.662,133.515 62.881,133.454 63.042 C 133.393 63.202,133.266 63.333,133.172 63.333 C 133.077 63.333,133.000 63.408,133.000 63.500 C 133.000 63.635,131.922 65.229,131.364 65.919 C 130.872 66.527,130.860 67.233,131.334 67.667 C 131.589 67.900,132.458 69.121,132.550 69.375 C 132.609 69.535,132.734 69.667,132.828 69.667 C 132.923 69.667,133.000 69.745,133.000 69.840 C 133.000 69.936,133.079 70.105,133.175 70.215 C 133.271 70.326,133.944 71.242,134.671 72.250 C 135.397 73.258,136.069 74.174,136.163 74.285 C 136.257 74.395,136.333 74.556,136.333 74.642 C 136.333 74.728,136.446 74.841,136.583 74.894 C 136.721 74.946,136.833 75.070,136.833 75.168 C 136.833 75.267,136.909 75.438,137.002 75.549 C 137.542 76.191,138.333 77.337,138.333 77.476 C 138.333 77.566,138.390 77.664,138.460 77.694 C 138.651 77.778,139.597 79.043,139.717 79.375 C 139.775 79.535,139.900 79.667,139.995 79.667 C 140.089 79.667,140.167 79.745,140.167 79.840 C 140.167 79.936,140.243 80.105,140.336 80.215 C 140.942 80.935,142.167 82.681,142.167 82.826 C 142.167 82.922,142.227 83.000,142.300 83.000 C 142.373 83.000,142.617 83.298,142.841 83.662 C 143.354 84.493,143.501 84.494,144.008 83.671 C 144.233 83.307,144.473 83.007,144.542 83.004 C 144.610 83.002,144.667 82.922,144.667 82.826 C 144.667 82.731,144.745 82.562,144.842 82.451 C 144.938 82.341,145.388 81.725,145.843 81.083 C 146.297 80.442,146.838 79.702,147.043 79.439 C 147.249 79.177,147.484 78.821,147.567 78.648 C 147.650 78.475,147.781 78.333,147.859 78.333 C 147.936 78.333,148.000 78.218,148.000 78.078 C 148.000 77.938,148.112 77.780,148.250 77.727 C 148.387 77.674,148.500 77.564,148.500 77.483 C 148.500 77.401,148.819 76.894,149.208 76.357 C 149.598 75.819,150.029 75.209,150.167 75.002 C 150.304 74.795,150.510 74.528,150.625 74.408 C 150.740 74.288,150.833 74.127,150.833 74.049 C 150.833 73.971,151.040 73.676,151.292 73.393 C 151.856 72.759,152.147 72.336,152.271 71.970 C 152.323 71.816,152.471 71.649,152.600 71.600 C 152.728 71.551,152.833 71.396,152.833 71.255 C 152.833 71.115,152.890 70.998,152.958 70.996 C 153.027 70.993,153.267 70.693,153.492 70.329 C 153.717 69.965,153.960 69.667,154.034 69.667 C 154.107 69.667,154.167 69.586,154.167 69.487 C 154.167 69.389,154.504 68.869,154.917 68.333 C 155.329 67.797,155.667 67.296,155.667 67.219 C 155.667 67.143,155.836 66.893,156.042 66.665 C 156.248 66.437,156.711 65.819,157.070 65.292 C 157.428 64.765,157.776 64.333,157.843 64.333 C 157.909 64.333,158.011 64.146,158.068 63.917 C 158.126 63.688,158.247 63.500,158.337 63.500 C 158.426 63.500,158.500 63.385,158.500 63.245 C 158.500 63.104,158.612 62.946,158.750 62.894 C 158.887 62.841,159.000 62.731,159.000 62.649 C 159.000 62.568,159.319 62.061,159.708 61.523 C 160.098 60.985,160.529 60.378,160.667 60.174 C 160.804 59.969,161.048 59.648,161.208 59.459 C 161.369 59.270,161.500 59.063,161.500 58.999 C 161.500 58.935,161.669 58.694,161.875 58.464 C 162.081 58.234,162.325 57.929,162.417 57.785 C 163.093 56.726,164.403 54.907,164.522 54.861 C 164.601 54.831,164.667 54.733,164.667 54.645 C 164.667 54.512,165.918 52.737,166.497 52.049 C 166.590 51.938,166.667 51.775,166.667 51.688 C 166.667 51.600,166.723 51.503,166.792 51.472 C 166.860 51.442,167.210 50.985,167.569 50.458 C 167.928 49.931,168.285 49.500,168.361 49.500 C 168.437 49.500,168.500 49.399,168.500 49.276 C 168.500 49.152,168.660 48.871,168.855 48.651 C 169.050 48.430,169.431 47.894,169.702 47.458 C 169.973 47.023,170.264 46.667,170.348 46.667 C 170.431 46.667,170.500 46.560,170.500 46.431 C 170.500 46.301,170.556 46.169,170.625 46.139 C 170.694 46.108,171.050 45.633,171.417 45.083 C 171.783 44.533,172.140 44.058,172.208 44.028 C 172.277 43.997,172.333 43.864,172.333 43.731 C 172.333 43.598,172.446 43.446,172.583 43.394 C 172.721 43.341,172.833 43.228,172.833 43.142 C 172.833 43.056,172.912 42.895,173.008 42.785 C 173.104 42.674,173.554 42.058,174.007 41.417 C 174.460 40.775,174.890 40.175,174.964 40.083 C 175.037 39.992,175.383 39.485,175.731 38.958 C 176.080 38.431,176.425 38.000,176.497 38.000 C 176.569 38.000,176.672 37.869,176.726 37.708 C 176.839 37.370,177.174 36.833,177.423 36.587 C 177.519 36.493,177.856 36.023,178.173 35.542 C 178.490 35.061,178.806 34.667,178.875 34.667 C 178.944 34.667,179.000 34.587,179.000 34.490 C 179.000 34.340,179.771 33.215,180.331 32.549 C 180.424 32.438,180.500 32.267,180.500 32.168 C 180.500 32.070,180.612 31.946,180.750 31.894 C 180.887 31.841,181.000 31.699,181.000 31.579 C 181.000 31.459,181.056 31.336,181.125 31.306 C 181.194 31.275,181.550 30.801,181.917 30.251 C 182.556 29.293,182.657 29.155,183.125 28.596 C 183.240 28.459,183.333 28.277,183.333 28.192 C 183.333 28.106,183.446 27.992,183.583 27.940 C 183.721 27.887,183.833 27.761,183.833 27.659 C 183.833 27.558,184.171 27.036,184.583 26.500 C 184.996 25.964,185.333 25.445,185.333 25.346 C 185.333 25.247,185.393 25.167,185.466 25.167 C 185.540 25.167,185.783 24.869,186.008 24.504 C 186.233 24.140,186.473 23.840,186.542 23.838 C 186.610 23.835,186.667 23.718,186.667 23.578 C 186.667 23.438,186.779 23.280,186.917 23.227 C 187.054 23.174,187.167 23.064,187.167 22.983 C 187.167 22.901,187.485 22.394,187.875 21.857 C 188.265 21.319,188.696 20.709,188.833 20.502 C 188.971 20.295,189.159 20.041,189.252 19.938 C 189.556 19.599,190.000 18.849,190.000 18.673 C 190.000 18.425,165.389 18.456,164.875 18.703 M48.333 49.592 C 47.921 49.710,46.936 49.813,46.144 49.820 C 45.215 49.829,44.535 49.922,44.227 50.082 C 43.965 50.219,43.402 50.332,42.977 50.332 C 42.552 50.333,41.990 50.445,41.727 50.582 C 41.465 50.719,41.015 50.832,40.727 50.832 C 40.440 50.833,39.990 50.945,39.727 51.082 C 39.465 51.219,39.086 51.332,38.885 51.332 C 38.684 51.333,38.477 51.402,38.426 51.485 C 38.374 51.569,38.032 51.688,37.667 51.750 C 37.301 51.812,36.959 51.931,36.908 52.015 C 36.856 52.098,36.674 52.167,36.504 52.167 C 36.333 52.167,35.981 52.270,35.722 52.396 C 35.462 52.523,34.950 52.756,34.583 52.916 C 34.217 53.075,33.718 53.309,33.474 53.436 C 33.231 53.563,32.912 53.667,32.766 53.667 C 32.620 53.667,32.500 53.734,32.500 53.817 C 32.500 53.900,32.294 54.052,32.042 54.156 C 31.277 54.470,29.471 55.628,29.361 55.875 C 29.331 55.944,29.237 56.000,29.153 56.000 C 29.069 56.000,28.866 56.131,28.703 56.292 C 28.539 56.452,28.159 56.771,27.858 57.000 C 27.021 57.638,24.974 59.670,24.416 60.417 C 24.143 60.783,23.824 61.143,23.709 61.217 C 23.594 61.290,23.500 61.459,23.500 61.592 C 23.500 61.725,23.425 61.833,23.333 61.833 C 23.242 61.833,23.167 61.940,23.167 62.071 C 23.167 62.202,23.073 62.409,22.958 62.530 C 22.715 62.787,21.742 64.744,21.585 65.292 C 21.526 65.498,21.408 65.667,21.322 65.667 C 21.237 65.667,21.164 65.873,21.161 66.125 C 21.158 66.377,21.046 66.729,20.911 66.907 C 20.777 67.085,20.667 67.464,20.667 67.749 C 20.667 68.034,20.583 68.351,20.480 68.453 C 19.748 69.185,19.747 78.926,20.478 80.293 C 20.582 80.486,20.667 80.823,20.667 81.041 C 20.667 81.258,20.777 81.582,20.911 81.760 C 21.046 81.938,21.158 82.290,21.161 82.542 C 21.164 82.794,21.237 83.000,21.322 83.000 C 21.408 83.000,21.526 83.169,21.585 83.375 C 21.699 83.771,22.691 85.858,22.833 86.000 C 22.879 86.046,23.103 86.440,23.330 86.875 C 23.557 87.310,23.801 87.667,23.872 87.667 C 23.942 87.667,24.000 87.748,24.000 87.848 C 24.000 88.283,27.431 91.637,28.292 92.043 C 28.498 92.141,28.667 92.283,28.667 92.360 C 28.667 92.437,28.775 92.500,28.908 92.500 C 29.041 92.500,29.210 92.594,29.283 92.708 C 29.419 92.920,29.817 93.199,30.417 93.503 C 30.600 93.596,30.975 93.818,31.250 93.996 C 31.525 94.174,32.462 94.666,33.333 95.087 C 34.204 95.509,35.129 95.962,35.389 96.094 C 35.648 96.226,36.036 96.333,36.252 96.333 C 36.467 96.333,36.755 96.446,36.893 96.583 C 37.030 96.721,37.359 96.833,37.623 96.833 C 37.887 96.833,38.249 96.943,38.426 97.078 C 38.604 97.213,38.975 97.328,39.250 97.334 C 39.525 97.340,39.938 97.452,40.167 97.583 C 40.396 97.714,40.860 97.824,41.198 97.827 C 41.537 97.831,41.857 97.904,41.911 97.990 C 41.964 98.077,42.362 98.194,42.796 98.252 C 43.229 98.309,43.733 98.421,43.917 98.501 C 44.100 98.580,44.775 98.695,45.417 98.756 C 46.058 98.816,46.658 98.924,46.750 98.994 C 46.842 99.064,47.580 99.166,48.391 99.220 C 49.202 99.275,49.952 99.388,50.058 99.473 C 50.164 99.557,51.023 99.661,51.967 99.705 C 52.931 99.749,53.767 99.867,53.875 99.975 C 53.980 100.080,54.542 100.167,55.122 100.167 C 55.702 100.167,56.447 100.279,56.776 100.417 C 57.105 100.554,57.721 100.669,58.145 100.673 C 58.570 100.676,59.104 100.786,59.333 100.917 C 59.563 101.048,59.910 101.158,60.106 101.161 C 60.302 101.164,60.677 101.279,60.939 101.416 C 61.202 101.553,61.549 101.665,61.711 101.666 C 61.872 101.666,62.135 101.739,62.294 101.827 C 62.816 102.117,64.145 102.667,64.324 102.667 C 64.421 102.667,64.500 102.733,64.500 102.814 C 64.500 102.895,64.631 103.009,64.792 103.068 C 65.359 103.276,66.000 103.687,66.000 103.842 C 66.000 103.929,66.075 104.000,66.167 104.000 C 66.460 104.000,68.000 105.791,68.000 106.131 C 68.000 106.223,68.112 106.341,68.250 106.394 C 68.387 106.446,68.502 106.661,68.505 106.870 C 68.508 107.079,68.621 107.396,68.755 107.574 C 69.102 108.032,69.102 111.301,68.755 111.760 C 68.621 111.938,68.505 112.233,68.498 112.417 C 68.491 112.600,68.302 113.050,68.077 113.417 C 67.853 113.783,67.618 114.196,67.555 114.333 C 67.375 114.727,65.550 116.487,65.130 116.672 C 64.921 116.764,64.419 117.025,64.015 117.253 C 63.611 117.480,63.189 117.667,63.078 117.667 C 62.966 117.667,62.781 117.779,62.667 117.917 C 62.553 118.054,62.327 118.167,62.165 118.167 C 62.004 118.167,61.657 118.279,61.394 118.416 C 61.131 118.553,60.650 118.665,60.325 118.666 C 60.000 118.666,59.655 118.745,59.559 118.841 C 58.651 119.749,47.384 119.753,45.688 118.845 C 45.505 118.747,45.140 118.667,44.876 118.667 C 44.613 118.667,44.251 118.557,44.074 118.422 C 43.896 118.287,43.558 118.175,43.324 118.172 C 43.089 118.169,42.751 118.057,42.574 117.922 C 42.396 117.787,42.137 117.675,42.000 117.672 C 41.702 117.666,39.607 116.638,39.528 116.458 C 39.497 116.390,39.377 116.333,39.262 116.333 C 39.076 116.333,38.848 116.177,38.049 115.503 C 37.938 115.410,37.781 115.333,37.700 115.333 C 37.619 115.333,37.196 114.996,36.759 114.583 C 36.322 114.171,35.898 113.833,35.816 113.833 C 35.734 113.833,35.667 113.773,35.667 113.700 C 35.667 113.627,35.378 113.267,35.026 112.900 C 34.307 112.152,32.833 110.022,32.833 109.731 C 32.833 109.626,32.721 109.447,32.583 109.333 C 32.446 109.219,32.333 108.957,32.333 108.750 C 32.333 108.543,32.221 108.281,32.083 108.167 C 31.946 108.053,31.831 107.800,31.828 107.605 C 31.816 106.808,30.959 106.364,30.500 106.917 C 30.386 107.054,30.152 107.167,29.980 107.167 C 29.807 107.167,29.667 107.227,29.667 107.301 C 29.667 107.376,29.255 107.619,28.752 107.843 C 28.248 108.067,27.836 108.298,27.835 108.357 C 27.834 108.416,27.628 108.515,27.377 108.578 C 27.126 108.642,26.882 108.743,26.835 108.805 C 26.788 108.867,26.188 109.201,25.500 109.549 C 24.246 110.183,23.916 110.356,23.375 110.668 C 23.215 110.760,22.971 110.878,22.833 110.930 C 22.696 110.982,22.471 111.091,22.333 111.174 C 22.196 111.256,21.311 111.713,20.367 112.190 C 19.423 112.668,18.612 113.120,18.565 113.196 C 18.519 113.271,18.344 113.333,18.177 113.333 C 18.011 113.333,17.781 113.446,17.667 113.583 C 17.553 113.721,17.318 113.833,17.146 113.833 C 16.974 113.833,16.833 113.907,16.833 113.997 C 16.833 114.087,16.646 114.207,16.417 114.265 C 15.998 114.370,15.815 115.033,16.148 115.238 C 16.229 115.289,16.345 115.593,16.405 115.915 C 16.466 116.237,16.587 116.500,16.674 116.500 C 16.762 116.500,16.833 116.678,16.833 116.896 C 16.833 117.114,16.946 117.386,17.083 117.500 C 17.221 117.614,17.333 117.787,17.333 117.884 C 17.333 118.138,18.000 119.480,18.181 119.592 C 18.265 119.644,18.333 119.832,18.333 120.010 C 18.333 120.188,18.403 120.333,18.489 120.333 C 18.574 120.333,18.697 120.502,18.761 120.708 C 18.826 120.915,18.928 121.121,18.990 121.167 C 19.051 121.212,19.282 121.550,19.503 121.917 C 19.725 122.283,20.078 122.771,20.288 123.000 C 20.498 123.229,20.712 123.548,20.763 123.708 C 20.814 123.869,20.926 124.000,21.011 124.000 C 21.097 124.000,21.167 124.067,21.167 124.150 C 21.167 124.452,23.782 127.245,25.085 128.333 C 26.214 129.277,26.974 129.833,27.135 129.833 C 27.229 129.833,27.331 129.890,27.361 129.958 C 27.445 130.148,28.463 130.833,28.660 130.833 C 28.755 130.833,28.833 130.900,28.833 130.981 C 28.833 131.062,28.965 131.176,29.125 131.235 C 29.692 131.443,30.333 131.854,30.333 132.009 C 30.333 132.096,30.474 132.167,30.646 132.167 C 30.818 132.167,31.053 132.279,31.167 132.417 C 31.281 132.554,31.543 132.667,31.750 132.667 C 31.957 132.667,32.219 132.779,32.333 132.917 C 32.447 133.054,32.673 133.167,32.835 133.167 C 32.996 133.167,33.343 133.279,33.606 133.416 C 33.869 133.553,34.206 133.665,34.356 133.666 C 34.506 133.666,34.843 133.779,35.106 133.916 C 35.369 134.053,35.748 134.165,35.948 134.166 C 36.149 134.166,36.354 134.232,36.403 134.311 C 36.452 134.391,36.809 134.507,37.196 134.569 C 37.583 134.631,37.979 134.743,38.075 134.818 C 38.171 134.893,38.586 134.998,38.996 135.050 C 39.407 135.102,39.769 135.225,39.802 135.323 C 39.834 135.420,40.286 135.500,40.806 135.501 C 41.325 135.502,41.965 135.614,42.227 135.751 C 42.524 135.906,43.186 136.003,43.977 136.007 C 44.677 136.011,45.550 136.123,45.917 136.255 C 46.904 136.610,57.225 136.605,58.401 136.248 C 58.851 136.112,59.724 136.000,60.341 136.000 C 61.011 136.000,61.654 135.900,61.939 135.751 C 62.202 135.614,62.764 135.502,63.189 135.501 C 63.614 135.500,64.177 135.388,64.439 135.251 C 64.702 135.114,65.152 135.002,65.439 135.001 C 65.727 135.000,66.177 134.888,66.439 134.751 C 66.702 134.614,67.081 134.502,67.282 134.501 C 67.483 134.500,67.693 134.425,67.750 134.333 C 67.807 134.242,68.017 134.166,68.218 134.166 C 68.419 134.165,68.798 134.053,69.061 133.916 C 69.323 133.779,69.665 133.667,69.821 133.667 C 69.976 133.667,70.249 133.557,70.426 133.422 C 70.604 133.287,70.910 133.175,71.105 133.172 C 71.300 133.169,71.553 133.054,71.667 132.917 C 71.781 132.779,72.006 132.667,72.167 132.667 C 72.328 132.667,72.553 132.554,72.667 132.417 C 72.781 132.279,73.015 132.167,73.187 132.167 C 73.359 132.167,73.500 132.099,73.500 132.016 C 73.500 131.934,73.706 131.784,73.958 131.683 C 74.419 131.499,75.350 130.964,76.015 130.500 C 77.764 129.279,78.667 128.589,78.667 128.472 C 78.667 128.396,78.741 128.333,78.831 128.333 C 79.068 128.333,81.534 125.823,82.178 124.926 C 82.478 124.508,82.785 124.167,82.862 124.167 C 82.938 124.167,83.000 124.058,83.000 123.925 C 83.000 123.792,83.094 123.623,83.208 123.550 C 83.571 123.318,85.213 120.163,85.425 119.292 C 85.486 119.040,85.603 118.833,85.685 118.833 C 85.766 118.833,85.833 118.623,85.833 118.365 C 85.833 118.108,85.943 117.751,86.078 117.574 C 86.213 117.396,86.325 117.021,86.328 116.740 C 86.331 116.460,86.443 116.085,86.578 115.907 C 86.713 115.729,86.825 115.237,86.828 114.813 C 86.831 114.389,86.946 113.723,87.083 113.333 C 87.274 112.793,87.333 111.824,87.333 109.249 C 87.333 106.626,87.278 105.741,87.083 105.276 C 86.946 104.947,86.831 104.356,86.828 103.964 C 86.825 103.571,86.713 103.104,86.578 102.926 C 86.443 102.749,86.331 102.374,86.328 102.093 C 86.325 101.813,86.213 101.438,86.078 101.260 C 85.943 101.082,85.833 100.807,85.833 100.648 C 85.833 100.490,85.725 100.148,85.592 99.889 C 85.459 99.629,85.005 98.704,84.583 97.833 C 84.161 96.962,83.671 96.025,83.493 95.750 C 83.316 95.475,83.119 95.143,83.056 95.013 C 82.993 94.882,82.824 94.652,82.679 94.500 C 82.535 94.349,82.111 93.893,81.737 93.487 C 81.363 93.082,80.621 92.375,80.089 91.917 C 79.556 91.458,78.981 90.952,78.810 90.792 C 78.640 90.631,78.437 90.500,78.359 90.500 C 78.282 90.500,78.001 90.307,77.734 90.072 C 77.468 89.836,77.100 89.574,76.917 89.489 C 76.507 89.299,75.945 88.951,75.833 88.817 C 75.651 88.600,72.443 87.000,72.191 87.000 C 72.086 87.000,72.000 86.925,72.000 86.833 C 72.000 86.742,71.827 86.667,71.615 86.667 C 71.404 86.667,71.085 86.557,70.907 86.422 C 70.729 86.287,70.391 86.175,70.157 86.172 C 69.922 86.169,69.585 86.057,69.407 85.922 C 69.229 85.787,68.849 85.675,68.562 85.672 C 68.275 85.669,67.947 85.554,67.833 85.417 C 67.719 85.279,67.381 85.167,67.082 85.167 C 66.783 85.167,66.323 85.055,66.061 84.918 C 65.798 84.781,65.396 84.667,65.167 84.665 C 64.938 84.663,64.450 84.554,64.083 84.421 C 63.717 84.289,63.172 84.178,62.873 84.174 C 62.574 84.170,62.199 84.098,62.039 84.015 C 61.715 83.845,59.942 83.561,57.872 83.347 C 57.114 83.269,56.289 83.127,56.039 83.032 C 55.788 82.937,54.920 82.823,54.109 82.780 C 53.298 82.737,52.552 82.619,52.451 82.517 C 52.350 82.416,51.792 82.333,51.211 82.333 C 50.631 82.333,49.887 82.221,49.558 82.083 C 49.229 81.946,48.612 81.833,48.188 81.832 C 47.764 81.832,47.202 81.719,46.939 81.582 C 46.677 81.445,46.237 81.333,45.962 81.333 C 45.154 81.333,41.794 80.074,41.500 79.662 C 41.454 79.598,41.245 79.491,41.036 79.426 C 40.427 79.236,38.897 77.630,38.472 76.737 C 38.040 75.825,37.904 73.110,38.269 72.651 C 38.371 72.522,38.503 72.210,38.564 71.958 C 38.624 71.706,38.747 71.500,38.837 71.500 C 38.926 71.500,39.000 71.362,39.000 71.193 C 39.000 70.686,41.631 68.167,42.161 68.167 C 42.269 68.167,42.470 68.054,42.607 67.917 C 42.745 67.779,43.002 67.667,43.179 67.667 C 43.355 67.667,43.500 67.595,43.500 67.508 C 43.500 67.420,43.774 67.297,44.109 67.234 C 44.445 67.171,44.913 67.018,45.151 66.894 C 45.389 66.770,45.823 66.668,46.115 66.668 C 46.408 66.667,46.688 66.601,46.738 66.520 C 46.788 66.439,47.486 66.324,48.289 66.265 C 49.093 66.205,50.399 66.070,51.191 65.965 C 52.638 65.774,52.911 65.792,56.500 66.323 C 58.423 66.607,59.385 66.818,59.561 66.994 C 59.656 67.089,59.929 67.167,60.168 67.167 C 60.407 67.167,60.749 67.277,60.926 67.411 C 61.104 67.546,61.410 67.658,61.605 67.661 C 61.800 67.664,62.053 67.779,62.167 67.917 C 62.281 68.054,62.544 68.167,62.753 68.167 C 62.961 68.167,63.174 68.279,63.227 68.417 C 63.280 68.554,63.471 68.667,63.652 68.667 C 63.832 68.667,64.030 68.746,64.090 68.844 C 64.150 68.941,64.361 69.091,64.558 69.177 C 64.998 69.368,65.494 69.681,65.797 69.958 C 65.922 70.073,66.078 70.167,66.144 70.167 C 66.211 70.167,66.586 70.467,66.980 70.833 C 67.373 71.200,67.726 71.500,67.764 71.500 C 67.859 71.500,68.500 72.148,68.500 72.244 C 68.500 72.287,68.725 72.552,69.000 72.833 C 69.275 73.115,69.500 73.455,69.500 73.589 C 69.500 73.723,69.558 73.833,69.628 73.833 C 69.699 73.833,69.934 74.158,70.151 74.554 L 70.545 75.275 71.897 74.576 C 72.641 74.191,73.617 73.679,74.066 73.438 C 74.516 73.197,74.975 73.000,75.088 73.000 C 75.200 73.000,75.386 72.887,75.500 72.750 C 75.614 72.612,75.816 72.500,75.949 72.500 C 76.082 72.500,76.303 72.387,76.440 72.250 C 76.578 72.112,76.827 72.000,76.994 72.000 C 77.161 72.000,77.341 71.887,77.394 71.750 C 77.446 71.612,77.633 71.500,77.808 71.500 C 77.983 71.500,78.219 71.387,78.333 71.250 C 78.447 71.112,78.672 71.000,78.833 71.000 C 78.994 71.000,79.219 70.887,79.333 70.750 C 79.447 70.612,79.675 70.500,79.840 70.500 C 80.004 70.500,80.164 70.444,80.194 70.375 C 80.225 70.306,81.055 69.851,82.040 69.362 C 83.024 68.874,83.872 68.405,83.924 68.321 C 83.977 68.236,84.146 68.164,84.302 68.161 C 84.886 68.150,85.755 67.000,85.180 67.000 C 85.096 67.000,84.977 66.775,84.917 66.500 C 84.856 66.225,84.757 65.999,84.695 65.998 C 84.634 65.997,84.400 65.585,84.176 65.082 C 83.953 64.578,83.718 64.167,83.654 64.167 C 83.591 64.167,83.495 64.035,83.441 63.875 C 83.323 63.525,83.071 63.122,82.458 62.310 C 82.206 61.976,82.000 61.665,82.000 61.620 C 82.000 61.343,77.786 57.000,77.518 57.000 C 77.416 57.000,77.333 56.934,77.333 56.853 C 77.333 56.773,76.883 56.420,76.333 56.070 C 75.783 55.719,75.333 55.373,75.333 55.300 C 75.333 55.227,75.226 55.167,75.095 55.167 C 74.964 55.167,74.757 55.073,74.634 54.958 C 74.511 54.844,74.056 54.564,73.622 54.337 C 73.188 54.110,72.833 53.866,72.833 53.795 C 72.833 53.724,72.681 53.667,72.495 53.667 C 72.309 53.667,72.113 53.554,72.060 53.417 C 72.008 53.279,71.828 53.167,71.662 53.167 C 71.496 53.167,71.111 53.041,70.805 52.888 C 70.500 52.734,70.051 52.509,69.808 52.388 C 69.564 52.266,69.212 52.167,69.026 52.167 C 68.839 52.167,68.644 52.098,68.592 52.015 C 68.541 51.931,68.199 51.812,67.833 51.750 C 67.468 51.688,67.126 51.569,67.074 51.485 C 67.023 51.402,66.779 51.333,66.532 51.332 C 66.285 51.332,65.869 51.219,65.606 51.082 C 65.343 50.945,64.893 50.833,64.606 50.832 C 64.319 50.832,63.869 50.719,63.606 50.582 C 63.343 50.445,62.797 50.333,62.392 50.333 C 61.987 50.333,61.387 50.221,61.058 50.083 C 60.702 49.935,59.940 49.833,59.181 49.833 C 58.478 49.833,57.471 49.721,56.944 49.583 C 55.701 49.260,49.471 49.266,48.333 49.592 M189.222 49.542 C 188.911 50.039,188.528 50.864,188.432 51.250 C 188.374 51.479,188.253 51.667,188.163 51.667 C 188.074 51.667,188.000 51.845,188.000 52.063 C 188.000 52.281,187.887 52.553,187.750 52.667 C 187.612 52.781,187.500 52.985,187.500 53.120 C 187.500 53.255,187.396 53.564,187.269 53.808 C 187.142 54.051,186.922 54.512,186.779 54.833 C 186.637 55.154,186.290 55.910,186.010 56.513 C 185.729 57.116,185.500 57.697,185.500 57.805 C 185.500 57.912,185.425 58.000,185.333 58.000 C 185.242 58.000,185.167 58.120,185.167 58.266 C 185.167 58.412,185.067 58.731,184.946 58.974 C 184.824 59.218,184.599 59.666,184.446 59.972 C 184.292 60.277,184.167 60.624,184.167 60.743 C 184.167 60.862,184.054 61.053,183.917 61.167 C 183.779 61.281,183.667 61.543,183.667 61.750 C 183.667 61.957,183.554 62.219,183.417 62.333 C 183.279 62.447,183.167 62.638,183.167 62.757 C 183.167 62.876,183.041 63.223,182.888 63.528 C 182.734 63.834,182.509 64.282,182.388 64.526 C 182.266 64.769,182.167 65.088,182.167 65.234 C 182.167 65.380,182.092 65.500,182.000 65.500 C 181.908 65.500,181.833 65.620,181.833 65.766 C 181.833 66.001,181.585 66.565,181.142 67.333 C 181.063 67.471,180.956 67.696,180.905 67.833 C 180.854 67.971,180.710 68.308,180.584 68.583 C 180.459 68.858,180.309 69.252,180.250 69.458 C 180.192 69.665,180.074 69.833,179.989 69.833 C 179.903 69.833,179.833 70.012,179.833 70.230 C 179.833 70.448,179.721 70.719,179.583 70.833 C 179.446 70.947,179.333 71.219,179.333 71.437 C 179.333 71.655,179.258 71.833,179.167 71.833 C 179.075 71.833,179.000 71.916,179.000 72.016 C 179.000 72.201,178.843 72.575,177.993 74.417 C 177.740 74.967,177.482 75.585,177.421 75.792 C 177.361 75.998,177.241 76.167,177.155 76.167 C 177.070 76.167,177.000 76.345,177.000 76.563 C 177.000 76.781,176.887 77.053,176.750 77.167 C 176.612 77.281,176.500 77.501,176.500 77.655 C 176.500 77.810,176.390 78.082,176.255 78.260 C 176.121 78.438,176.008 78.705,176.005 78.855 C 176.002 79.004,175.887 79.219,175.750 79.333 C 175.612 79.447,175.500 79.657,175.500 79.799 C 175.500 79.941,175.285 80.513,175.023 81.070 C 174.219 82.776,174.000 83.293,174.000 83.484 C 174.000 83.584,173.925 83.667,173.833 83.667 C 173.742 83.667,173.667 83.811,173.667 83.988 C 173.667 84.165,173.554 84.422,173.417 84.560 C 173.279 84.697,173.167 84.956,173.167 85.134 C 173.167 85.313,173.054 85.553,172.917 85.667 C 172.779 85.781,172.667 86.043,172.667 86.250 C 172.667 86.457,172.554 86.719,172.417 86.833 C 172.279 86.947,172.167 87.151,172.167 87.286 C 172.167 87.421,172.061 87.731,171.932 87.974 C 171.555 88.683,171.167 89.618,171.167 89.817 C 171.167 89.918,171.092 90.000,171.000 90.000 C 170.908 90.000,170.833 90.133,170.833 90.296 C 170.833 90.459,170.732 90.740,170.608 90.921 C 170.484 91.102,170.333 91.456,170.272 91.708 C 170.210 91.960,170.087 92.167,169.997 92.167 C 169.907 92.167,169.833 92.345,169.833 92.563 C 169.833 92.781,169.721 93.053,169.583 93.167 C 169.446 93.281,169.333 93.510,169.333 93.675 C 169.333 93.841,169.221 94.089,169.083 94.226 C 168.946 94.364,168.833 94.588,168.833 94.725 C 168.833 94.944,168.559 95.580,168.138 96.333 C 168.061 96.471,167.953 96.696,167.898 96.833 C 167.843 96.971,167.693 97.320,167.565 97.609 C 167.438 97.897,167.333 98.216,167.333 98.317 C 167.333 98.418,167.258 98.500,167.167 98.500 C 167.075 98.500,167.000 98.620,167.000 98.766 C 167.000 98.912,166.901 99.231,166.779 99.474 C 166.657 99.718,166.432 100.166,166.279 100.472 C 166.126 100.777,166.000 101.124,166.000 101.243 C 166.000 101.362,165.887 101.553,165.750 101.667 C 165.612 101.781,165.500 102.043,165.500 102.250 C 165.500 102.457,165.387 102.719,165.250 102.833 C 165.112 102.947,165.000 103.138,165.000 103.257 C 165.000 103.376,164.874 103.723,164.721 104.028 C 164.568 104.334,164.343 104.782,164.221 105.026 C 164.099 105.269,164.000 105.588,164.000 105.734 C 164.000 105.880,163.925 106.000,163.833 106.000 C 163.742 106.000,163.667 106.120,163.667 106.266 C 163.667 106.501,163.418 107.065,162.975 107.833 C 162.896 107.971,162.789 108.196,162.738 108.333 C 162.617 108.659,162.189 109.640,161.941 110.158 C 161.771 110.516,161.803 110.629,162.207 111.071 C 162.460 111.348,162.667 111.638,162.667 111.716 C 162.667 111.794,162.760 111.955,162.875 112.075 C 162.990 112.195,163.196 112.459,163.333 112.663 C 163.471 112.867,164.015 113.628,164.542 114.353 C 165.069 115.078,165.500 115.703,165.500 115.742 C 165.500 115.781,165.725 116.059,166.000 116.360 C 166.275 116.661,166.500 116.971,166.500 117.049 C 166.500 117.127,166.594 117.288,166.708 117.408 C 166.823 117.528,167.029 117.795,167.167 118.002 C 167.304 118.209,167.735 118.819,168.125 119.357 C 168.515 119.894,168.833 120.401,168.833 120.483 C 168.833 120.564,168.946 120.674,169.083 120.727 C 169.221 120.780,169.333 120.938,169.333 121.078 C 169.333 121.218,169.397 121.333,169.475 121.333 C 169.552 121.333,169.683 121.475,169.766 121.648 C 169.849 121.821,170.086 122.177,170.293 122.439 C 171.209 123.600,172.667 125.686,172.667 125.836 C 172.667 125.926,172.736 126.000,172.820 126.000 C 172.904 126.000,173.144 126.281,173.353 126.625 C 173.709 127.211,173.971 127.491,174.168 127.497 C 174.214 127.499,174.356 127.256,174.483 126.958 C 174.610 126.660,174.853 126.102,175.024 125.717 C 175.194 125.333,175.333 124.939,175.333 124.842 C 175.333 124.746,175.408 124.667,175.500 124.667 C 175.592 124.667,175.667 124.531,175.667 124.365 C 175.667 124.199,175.777 123.918,175.911 123.740 C 176.046 123.562,176.158 123.295,176.161 123.145 C 176.164 122.996,176.279 122.781,176.417 122.667 C 176.554 122.553,176.667 122.285,176.667 122.073 C 176.667 121.860,176.746 121.637,176.844 121.577 C 176.941 121.517,177.089 121.287,177.173 121.067 L 177.325 120.667 198.651 120.667 C 221.761 120.667,220.500 120.618,220.500 121.512 C 220.500 121.689,220.570 121.833,220.655 121.833 C 220.741 121.833,220.858 122.002,220.916 122.208 C 220.974 122.415,221.085 122.733,221.163 122.917 C 221.515 123.745,222.371 125.627,222.591 126.055 C 222.724 126.315,222.833 126.624,222.833 126.743 C 222.833 126.862,222.946 127.053,223.083 127.167 C 223.221 127.281,223.333 127.543,223.333 127.750 C 223.333 127.957,223.446 128.219,223.583 128.333 C 223.721 128.447,223.833 128.719,223.833 128.937 C 223.833 129.155,223.903 129.333,223.989 129.333 C 224.074 129.333,224.193 129.502,224.252 129.708 C 224.353 130.058,224.580 130.579,225.478 132.518 C 225.673 132.941,225.833 133.372,225.833 133.477 C 225.833 133.581,225.908 133.667,226.000 133.667 C 226.092 133.667,226.167 133.845,226.167 134.063 C 226.167 134.281,226.279 134.553,226.417 134.667 C 226.554 134.781,226.667 135.052,226.667 135.270 C 226.667 135.488,226.740 135.667,226.830 135.667 C 226.920 135.667,227.041 135.854,227.098 136.083 L 227.203 136.500 263.169 136.500 C 299.053 136.500,299.135 136.499,299.048 136.167 C 299.000 135.983,298.904 135.833,298.834 135.833 C 298.764 135.833,298.417 135.403,298.062 134.878 C 297.707 134.352,297.248 133.734,297.042 133.504 C 296.835 133.275,296.667 132.990,296.667 132.871 C 296.667 132.753,296.554 132.613,296.417 132.560 C 296.279 132.508,296.167 132.393,296.167 132.306 C 296.167 132.218,295.717 131.556,295.167 130.833 C 294.617 130.111,294.167 129.440,294.167 129.343 C 294.167 129.246,294.107 129.167,294.034 129.167 C 293.961 129.167,293.614 128.717,293.264 128.167 C 292.913 127.617,292.561 127.167,292.480 127.167 C 292.399 127.167,292.333 127.054,292.333 126.917 C 292.333 126.779,292.260 126.667,292.170 126.667 C 292.080 126.667,291.959 126.479,291.902 126.250 C 291.844 126.021,291.739 125.833,291.669 125.833 C 291.598 125.833,291.250 125.403,290.895 124.878 C 290.540 124.352,290.080 123.733,289.873 123.503 C 289.666 123.272,289.455 122.952,289.404 122.792 C 289.353 122.631,289.241 122.500,289.155 122.500 C 289.070 122.500,289.000 122.391,289.000 122.258 C 289.000 122.125,288.906 121.957,288.792 121.883 C 288.589 121.754,288.273 121.313,288.058 120.859 C 288.000 120.736,287.738 120.400,287.476 120.114 C 287.214 119.827,287.000 119.524,287.000 119.440 C 287.000 119.357,286.809 119.111,286.575 118.894 L 286.149 118.500 275.997 118.500 C 266.131 118.500,265.840 118.491,265.673 118.178 C 265.555 117.958,265.500 106.893,265.500 83.594 L 265.500 49.333 256.333 49.333 L 247.167 49.333 247.164 91.792 C 247.162 118.962,247.103 134.340,247.000 134.500 C 246.812 134.790,246.017 133.973,246.006 133.479 C 246.003 133.330,245.887 133.114,245.750 133.000 C 245.612 132.886,245.500 132.614,245.500 132.396 C 245.500 132.178,245.430 132.000,245.345 132.000 C 245.259 132.000,245.141 131.831,245.083 131.625 C 244.974 131.238,244.617 130.413,244.225 129.641 C 244.101 129.398,244.000 129.079,244.000 128.933 C 244.000 128.786,243.925 128.667,243.833 128.667 C 243.742 128.667,243.667 128.579,243.667 128.472 C 243.667 128.290,242.965 126.693,242.409 125.611 C 242.276 125.352,242.167 125.042,242.167 124.924 C 242.167 124.805,242.054 124.614,241.917 124.500 C 241.779 124.386,241.667 124.123,241.667 123.917 C 241.667 123.710,241.554 123.447,241.417 123.333 C 241.279 123.219,241.167 122.948,241.167 122.730 C 241.167 122.512,241.093 122.333,241.003 122.333 C 240.913 122.333,240.790 122.127,240.728 121.875 C 240.667 121.623,240.516 121.269,240.392 121.088 C 240.268 120.907,240.167 120.626,240.167 120.463 C 240.167 120.300,240.092 120.167,240.000 120.167 C 239.908 120.167,239.833 120.073,239.833 119.958 C 239.832 119.844,239.608 119.300,239.333 118.750 C 239.059 118.200,238.834 117.628,238.834 117.479 C 238.834 117.330,238.721 117.114,238.583 117.000 C 238.446 116.886,238.333 116.666,238.333 116.511 C 238.333 116.357,238.223 116.085,238.089 115.907 C 237.954 115.729,237.842 115.447,237.839 115.280 C 237.836 115.113,237.721 114.864,237.583 114.726 C 237.446 114.589,237.333 114.332,237.333 114.155 C 237.333 113.978,237.263 113.833,237.178 113.833 C 237.092 113.833,236.975 113.665,236.916 113.458 C 236.858 113.252,236.711 112.858,236.589 112.583 C 235.692 110.561,235.450 110.027,235.239 109.611 C 235.108 109.352,235.000 109.042,235.000 108.924 C 235.000 108.805,234.887 108.614,234.750 108.500 C 234.612 108.386,234.500 108.123,234.500 107.917 C 234.500 107.710,234.387 107.447,234.250 107.333 C 234.112 107.219,234.000 107.029,234.000 106.910 C 234.000 106.791,233.891 106.481,233.758 106.222 C 233.624 105.962,233.281 105.225,232.994 104.583 C 231.972 102.300,231.642 101.577,231.406 101.111 C 231.274 100.852,231.167 100.528,231.167 100.391 C 231.167 100.255,231.054 100.030,230.917 99.893 C 230.779 99.755,230.667 99.507,230.667 99.342 C 230.667 99.176,230.554 98.947,230.417 98.833 C 230.279 98.719,230.167 98.529,230.167 98.410 C 230.167 98.291,230.041 97.944,229.888 97.639 C 229.734 97.333,229.509 96.884,229.388 96.641 C 229.266 96.398,229.167 96.079,229.167 95.933 C 229.167 95.786,229.092 95.667,229.000 95.667 C 228.908 95.667,228.833 95.547,228.833 95.401 C 228.833 95.254,228.710 94.898,228.559 94.609 C 227.925 93.395,227.833 93.187,227.833 92.953 C 227.833 92.818,227.721 92.614,227.583 92.500 C 227.446 92.386,227.333 92.123,227.333 91.917 C 227.333 91.710,227.221 91.447,227.083 91.333 C 226.946 91.219,226.831 91.004,226.828 90.855 C 226.825 90.705,226.713 90.438,226.578 90.260 C 226.443 90.082,226.333 89.801,226.333 89.635 C 226.333 89.469,226.258 89.333,226.167 89.333 C 226.075 89.333,226.000 89.251,226.000 89.150 C 226.000 88.959,225.781 88.443,224.977 86.737 C 224.715 86.180,224.500 85.608,224.500 85.466 C 224.500 85.324,224.387 85.114,224.250 85.000 C 224.112 84.886,223.998 84.670,223.995 84.521 C 223.992 84.372,223.879 84.104,223.745 83.926 C 223.610 83.749,223.500 83.476,223.500 83.322 C 223.500 83.167,223.387 82.947,223.250 82.833 C 223.112 82.719,223.000 82.448,223.000 82.230 C 223.000 82.012,222.930 81.833,222.845 81.833 C 222.759 81.833,222.640 81.665,222.581 81.458 C 222.521 81.252,222.301 80.708,222.092 80.250 C 221.882 79.792,221.546 79.042,221.345 78.583 C 221.144 78.125,220.909 77.620,220.823 77.461 C 220.737 77.301,220.667 77.067,220.667 76.939 C 220.667 76.812,220.554 76.614,220.417 76.500 C 220.279 76.386,220.167 76.114,220.167 75.896 C 220.167 75.678,220.097 75.500,220.011 75.500 C 219.926 75.500,219.808 75.331,219.750 75.125 C 219.641 74.741,219.557 74.547,218.677 72.653 C 218.396 72.050,218.167 71.469,218.167 71.362 C 218.167 71.254,218.092 71.167,218.000 71.167 C 217.908 71.167,217.833 71.047,217.833 70.901 C 217.833 70.754,217.734 70.436,217.612 70.192 C 217.491 69.949,217.266 69.500,217.112 69.195 C 216.959 68.889,216.833 68.504,216.833 68.338 C 216.833 68.172,216.721 67.992,216.583 67.940 C 216.446 67.887,216.333 67.663,216.333 67.442 C 216.333 67.221,216.221 66.947,216.083 66.833 C 215.946 66.719,215.833 66.529,215.833 66.410 C 215.833 66.291,215.708 65.944,215.554 65.639 C 215.401 65.333,215.176 64.884,215.054 64.641 C 214.933 64.398,214.833 64.079,214.833 63.933 C 214.833 63.786,214.758 63.667,214.667 63.667 C 214.575 63.667,214.500 63.584,214.500 63.484 C 214.500 63.285,214.068 62.238,213.818 61.833 C 213.734 61.696,213.624 61.471,213.574 61.333 C 213.524 61.196,213.374 60.871,213.241 60.611 C 213.109 60.352,213.000 60.005,213.000 59.840 C 213.000 59.676,212.887 59.447,212.750 59.333 C 212.612 59.219,212.498 59.004,212.495 58.855 C 212.492 58.705,212.379 58.438,212.245 58.260 C 212.110 58.082,212.000 57.801,212.000 57.635 C 212.000 57.469,211.930 57.333,211.845 57.333 C 211.759 57.333,211.642 57.165,211.584 56.958 C 211.526 56.752,211.415 56.433,211.337 56.250 C 210.985 55.422,210.129 53.539,209.909 53.111 C 209.776 52.852,209.667 52.542,209.667 52.424 C 209.667 52.305,209.554 52.114,209.417 52.000 C 209.279 51.886,209.167 51.623,209.167 51.417 C 209.167 51.210,209.054 50.947,208.917 50.833 C 208.779 50.719,208.667 50.486,208.667 50.315 C 208.667 49.299,209.013 49.333,198.723 49.333 C 191.408 49.333,189.324 49.379,189.222 49.542 M290.333 79.681 L 290.333 110.029 290.875 110.806 C 291.173 111.234,291.473 111.608,291.542 111.639 C 291.610 111.669,291.667 111.766,291.667 111.854 C 291.667 111.942,291.745 112.105,291.842 112.215 C 291.938 112.326,292.388 112.942,292.843 113.583 C 293.297 114.225,293.838 114.967,294.043 115.231 C 294.249 115.496,294.447 115.796,294.484 115.898 C 294.521 116.000,294.877 116.509,295.276 117.029 C 295.674 117.549,296.000 118.023,296.000 118.083 C 296.000 118.142,296.094 118.295,296.208 118.423 C 296.534 118.786,296.702 119.018,297.417 120.086 C 297.783 120.635,298.140 121.108,298.208 121.139 C 298.277 121.169,298.333 121.301,298.333 121.431 C 298.333 121.560,298.404 121.667,298.491 121.667 C 298.646 121.667,299.057 122.308,299.265 122.875 C 299.324 123.035,299.432 123.167,299.506 123.167 C 299.579 123.167,299.812 123.448,300.022 123.792 C 300.232 124.135,300.482 124.501,300.577 124.605 C 300.672 124.708,300.862 124.962,301.000 125.169 C 301.137 125.376,301.569 125.985,301.958 126.523 C 302.348 127.061,302.667 127.568,302.667 127.649 C 302.667 127.731,302.779 127.841,302.917 127.894 C 303.054 127.946,303.167 128.104,303.167 128.245 C 303.167 128.385,303.240 128.500,303.330 128.500 C 303.420 128.500,303.541 128.688,303.598 128.917 C 303.656 129.146,303.764 129.333,303.838 129.333 C 303.912 129.333,304.144 129.615,304.354 129.958 C 304.564 130.302,304.795 130.608,304.868 130.639 C 304.941 130.669,305.000 130.797,305.000 130.922 C 305.000 131.048,305.094 131.210,305.208 131.283 C 305.411 131.413,305.727 131.854,305.942 132.308 C 306.000 132.431,306.262 132.766,306.524 133.053 C 306.786 133.340,307.000 133.638,307.000 133.716 C 307.000 133.794,307.094 133.962,307.208 134.089 C 307.533 134.452,307.707 134.689,308.333 135.626 L 308.917 136.499 332.625 136.500 L 356.333 136.500 356.333 127.500 L 356.333 118.500 332.509 118.500 L 308.686 118.500 308.426 118.130 C 308.040 117.578,308.035 102.905,308.421 102.158 L 308.675 101.667 330.338 101.667 L 352.000 101.667 352.000 93.000 L 352.000 84.333 330.359 84.333 C 309.606 84.333,308.707 84.321,308.442 84.029 C 308.194 83.754,308.167 82.949,308.167 75.934 C 308.167 68.174,308.201 67.650,308.733 67.294 C 308.834 67.227,319.585 67.171,332.625 67.169 L 356.333 67.167 356.333 58.250 L 356.333 49.333 323.333 49.333 L 290.333 49.333 290.333 79.681 M199.076 72.424 C 199.309 72.658,199.500 72.959,199.500 73.093 C 199.500 73.228,199.572 73.468,199.661 73.627 C 199.951 74.149,200.500 75.478,200.500 75.658 C 200.500 75.754,200.575 75.833,200.667 75.833 C 200.758 75.833,200.833 76.012,200.833 76.230 C 200.833 76.448,200.946 76.719,201.083 76.833 C 201.221 76.947,201.333 77.210,201.333 77.417 C 201.333 77.623,201.446 77.886,201.583 78.000 C 201.721 78.114,201.833 78.377,201.833 78.583 C 201.833 78.790,201.946 79.053,202.083 79.167 C 202.221 79.281,202.333 79.552,202.333 79.770 C 202.333 79.988,202.403 80.167,202.489 80.167 C 202.574 80.167,202.692 80.335,202.750 80.542 C 202.809 80.748,202.958 81.142,203.082 81.417 C 203.618 82.601,203.833 83.145,203.833 83.317 C 203.833 83.418,203.908 83.500,204.000 83.500 C 204.092 83.500,204.167 83.678,204.167 83.896 C 204.167 84.114,204.279 84.386,204.417 84.500 C 204.554 84.614,204.667 84.834,204.667 84.989 C 204.667 85.143,204.777 85.415,204.911 85.593 C 205.046 85.771,205.158 86.076,205.161 86.271 C 205.164 86.466,205.279 86.719,205.417 86.833 C 205.554 86.947,205.667 87.219,205.667 87.437 C 205.667 87.655,205.737 87.833,205.822 87.833 C 205.908 87.833,206.025 88.002,206.084 88.208 C 206.193 88.596,206.550 89.420,206.942 90.192 C 207.066 90.436,207.167 90.754,207.167 90.901 C 207.167 91.047,207.242 91.167,207.333 91.167 C 207.425 91.167,207.500 91.286,207.500 91.433 C 207.500 91.579,207.599 91.898,207.721 92.141 C 207.843 92.384,208.068 92.833,208.221 93.139 C 208.374 93.444,208.500 93.828,208.500 93.993 C 208.500 94.158,208.612 94.386,208.750 94.500 C 208.887 94.614,209.000 94.886,209.000 95.104 C 209.000 95.322,209.070 95.500,209.155 95.500 C 209.241 95.500,209.359 95.669,209.417 95.875 C 209.526 96.262,209.883 97.087,210.275 97.859 C 210.399 98.102,210.500 98.421,210.500 98.567 C 210.500 98.714,210.575 98.833,210.667 98.833 C 210.758 98.833,210.833 98.953,210.833 99.099 C 210.833 99.246,210.934 99.564,211.058 99.808 C 211.182 100.051,211.405 100.532,211.554 100.877 C 211.702 101.223,211.946 101.758,212.095 102.067 C 212.713 103.352,213.869 103.245,198.849 103.293 C 189.997 103.321,185.384 103.278,185.250 103.167 C 185.029 102.983,185.278 101.667,185.534 101.667 C 185.607 101.667,185.667 101.547,185.667 101.401 C 185.667 101.254,185.768 100.936,185.891 100.692 C 186.283 99.920,186.640 99.096,186.750 98.708 C 186.808 98.502,186.926 98.333,187.011 98.333 C 187.097 98.333,187.167 98.155,187.167 97.937 C 187.167 97.719,187.279 97.447,187.417 97.333 C 187.554 97.219,187.667 96.957,187.667 96.750 C 187.667 96.543,187.779 96.281,187.917 96.167 C 188.054 96.053,188.167 95.790,188.167 95.583 C 188.167 95.377,188.279 95.114,188.417 95.000 C 188.554 94.886,188.667 94.614,188.667 94.396 C 188.667 94.178,188.742 94.000,188.833 94.000 C 188.925 94.000,189.000 93.918,189.000 93.817 C 189.000 93.645,189.215 93.101,189.751 91.917 C 189.875 91.642,190.025 91.248,190.083 91.042 C 190.141 90.835,190.259 90.667,190.345 90.667 C 190.430 90.667,190.500 90.488,190.500 90.270 C 190.500 90.052,190.612 89.781,190.750 89.667 C 190.887 89.553,191.000 89.290,191.000 89.083 C 191.000 88.877,191.112 88.614,191.250 88.500 C 191.387 88.386,191.500 88.123,191.500 87.917 C 191.500 87.710,191.612 87.447,191.750 87.333 C 191.887 87.219,192.000 86.948,192.000 86.730 C 192.000 86.512,192.075 86.333,192.167 86.333 C 192.258 86.333,192.333 86.254,192.333 86.158 C 192.333 86.004,192.491 85.611,193.165 84.083 C 193.246 83.900,193.360 83.581,193.417 83.375 C 193.475 83.169,193.592 83.000,193.678 83.000 C 193.763 83.000,193.833 82.822,193.833 82.604 C 193.833 82.386,193.946 82.114,194.083 82.000 C 194.221 81.886,194.333 81.623,194.333 81.417 C 194.333 81.210,194.446 80.947,194.583 80.833 C 194.721 80.719,194.833 80.457,194.833 80.250 C 194.833 80.043,194.946 79.781,195.083 79.667 C 195.221 79.553,195.333 79.355,195.333 79.227 C 195.333 79.100,195.404 78.865,195.490 78.706 C 195.633 78.441,195.819 78.027,196.568 76.308 C 196.714 75.973,196.833 75.617,196.833 75.516 C 196.833 75.416,196.908 75.333,197.000 75.333 C 197.092 75.333,197.167 75.155,197.167 74.937 C 197.167 74.719,197.279 74.447,197.417 74.333 C 197.554 74.219,197.667 73.957,197.667 73.750 C 197.667 73.543,197.779 73.281,197.917 73.167 C 198.054 73.053,198.167 72.833,198.167 72.680 C 198.167 72.447,198.458 72.000,198.609 72.000 C 198.632 72.000,198.842 72.191,199.076 72.424 M137.322 93.841 C 136.733 94.671,136.137 95.496,136.000 95.676 C 135.862 95.856,135.225 96.751,134.583 97.666 C 133.942 98.580,132.779 100.219,132.000 101.309 C 131.221 102.399,130.471 103.459,130.333 103.664 C 130.196 103.870,129.540 104.781,128.875 105.690 C 128.210 106.598,127.667 107.377,127.667 107.420 C 127.667 107.463,127.104 108.264,126.416 109.200 C 125.486 110.465,125.192 110.989,125.269 111.242 C 125.423 111.756,126.006 112.667,126.180 112.667 C 126.264 112.667,126.333 112.779,126.333 112.917 C 126.333 113.054,126.407 113.167,126.497 113.167 C 126.587 113.167,126.707 113.354,126.765 113.583 C 126.822 113.813,126.924 114.000,126.990 114.000 C 127.057 114.000,127.405 114.431,127.764 114.958 C 128.123 115.485,128.585 116.103,128.791 116.332 C 128.998 116.560,129.167 116.809,129.167 116.886 C 129.167 116.963,129.504 117.464,129.917 118.000 C 130.329 118.536,130.667 119.049,130.667 119.140 C 130.667 119.231,130.731 119.331,130.809 119.361 C 131.002 119.436,132.912 122.007,133.048 122.375 C 133.108 122.535,133.234 122.667,133.328 122.667 C 133.423 122.667,133.500 122.745,133.500 122.840 C 133.500 122.936,133.578 123.105,133.674 123.215 C 133.770 123.326,134.217 123.942,134.667 124.583 C 135.116 125.225,135.563 125.841,135.659 125.951 C 135.755 126.062,135.833 126.223,135.833 126.308 C 135.833 126.394,135.946 126.508,136.083 126.560 C 136.221 126.613,136.333 126.739,136.333 126.841 C 136.333 126.942,136.671 127.464,137.083 128.000 C 137.496 128.536,137.833 129.055,137.833 129.154 C 137.833 129.253,137.893 129.333,137.966 129.333 C 138.040 129.333,138.283 129.631,138.508 129.996 C 138.733 130.360,138.973 130.660,139.042 130.662 C 139.110 130.665,139.167 130.782,139.167 130.922 C 139.167 131.062,139.272 131.217,139.400 131.267 C 139.529 131.316,139.677 131.482,139.729 131.637 C 139.853 132.002,140.144 132.425,140.708 133.059 C 140.960 133.343,141.167 133.638,141.167 133.716 C 141.167 133.794,141.260 133.962,141.375 134.089 C 141.700 134.452,141.874 134.689,142.500 135.626 L 143.083 136.499 156.728 136.500 L 170.373 136.500 169.936 135.928 C 169.696 135.613,169.500 135.284,169.500 135.196 C 169.500 135.108,169.387 134.992,169.250 134.940 C 169.112 134.887,169.000 134.763,169.000 134.665 C 169.000 134.566,168.924 134.395,168.831 134.285 C 168.262 133.605,165.667 129.966,165.667 129.847 C 165.667 129.767,165.554 129.659,165.417 129.606 C 165.279 129.554,165.167 129.430,165.167 129.332 C 165.167 129.233,165.090 129.062,164.997 128.951 C 164.535 128.404,162.333 125.310,162.331 125.204 C 162.329 125.138,162.123 124.844,161.872 124.551 C 161.622 124.259,161.079 123.521,160.667 122.913 C 160.254 122.304,159.823 121.705,159.708 121.581 C 159.594 121.458,159.500 121.285,159.500 121.196 C 159.500 121.108,159.387 120.992,159.250 120.940 C 159.112 120.887,159.000 120.761,159.000 120.659 C 159.000 120.558,158.662 120.036,158.250 119.500 C 157.837 118.964,157.500 118.451,157.500 118.360 C 157.500 118.269,157.443 118.169,157.374 118.139 C 157.183 118.055,156.237 116.791,156.116 116.458 C 156.058 116.298,155.933 116.167,155.839 116.167 C 155.744 116.167,155.667 116.054,155.667 115.917 C 155.667 115.779,155.593 115.667,155.503 115.667 C 155.413 115.667,155.293 115.479,155.235 115.250 C 155.178 115.021,155.080 114.833,155.018 114.833 C 154.862 114.833,153.667 113.216,153.667 113.004 C 153.667 112.910,153.607 112.833,153.534 112.833 C 153.460 112.833,153.217 112.535,152.992 112.171 C 152.767 111.807,152.527 111.507,152.458 111.504 C 152.390 111.502,152.333 111.388,152.333 111.250 C 152.333 111.112,152.256 111.000,152.163 111.000 C 152.069 111.000,151.919 110.831,151.830 110.625 C 151.611 110.120,151.339 109.722,150.792 109.107 C 150.540 108.824,150.333 108.497,150.333 108.380 C 150.333 108.262,150.273 108.167,150.200 108.167 C 150.127 108.167,149.781 107.717,149.430 107.167 C 149.080 106.617,148.736 106.167,148.666 106.167 C 148.596 106.167,148.495 106.035,148.441 105.875 C 148.319 105.511,148.027 105.077,147.537 104.531 C 147.329 104.299,146.994 103.840,146.794 103.513 C 146.593 103.185,146.339 102.824,146.229 102.711 C 146.063 102.540,144.869 100.831,144.250 99.877 C 144.158 99.736,143.915 99.433,143.708 99.203 C 143.502 98.973,143.333 98.732,143.333 98.668 C 143.333 98.604,143.202 98.397,143.042 98.208 C 142.881 98.019,142.637 97.697,142.500 97.493 C 142.362 97.288,141.931 96.681,141.542 96.143 C 141.152 95.606,140.833 95.099,140.833 95.017 C 140.833 94.936,140.721 94.826,140.583 94.773 C 140.446 94.720,140.333 94.562,140.333 94.422 C 140.333 94.282,140.263 94.167,140.178 94.167 C 140.092 94.167,139.979 94.035,139.926 93.875 C 139.796 93.485,138.780 92.333,138.565 92.333 C 138.472 92.333,137.912 93.012,137.322 93.841 ","stroke":"none","fill":"#212121","fill-rule":"evenodd"}}),_c('path',{attrs:{"id":"path1","d":"M164.645 18.615 C 164.441 18.866,164.452 18.879,164.750 18.740 C 165.235 18.512,190.000 18.444,190.000 18.670 C 190.000 18.848,189.558 19.598,189.252 19.938 C 189.159 20.041,188.971 20.295,188.833 20.502 C 188.696 20.709,188.259 21.326,187.863 21.872 C 187.467 22.419,187.180 22.902,187.225 22.947 C 187.270 22.992,187.443 22.816,187.610 22.556 C 187.776 22.296,187.988 21.992,188.081 21.881 C 188.174 21.769,188.344 21.566,188.458 21.429 C 188.573 21.293,188.667 21.132,188.667 21.073 C 188.667 21.013,188.881 20.691,189.143 20.357 C 189.404 20.023,189.818 19.431,190.061 19.042 L 190.504 18.333 177.689 18.333 C 165.867 18.333,164.856 18.355,164.645 18.615 M163.477 20.231 C 162.530 21.555,161.725 22.696,160.111 25.000 C 159.565 25.779,158.933 26.660,158.706 26.958 C 158.479 27.256,158.380 27.500,158.485 27.500 C 158.591 27.500,158.727 27.369,158.788 27.208 C 158.850 27.048,158.962 26.842,159.037 26.750 C 159.113 26.658,159.769 25.758,160.496 24.750 C 161.222 23.742,161.896 22.826,161.992 22.715 C 162.088 22.605,162.167 22.442,162.167 22.354 C 162.167 22.266,162.223 22.169,162.292 22.139 C 162.481 22.055,163.167 21.037,163.167 20.840 C 163.167 20.745,163.223 20.666,163.292 20.666 C 163.360 20.665,163.603 20.384,163.832 20.041 C 164.060 19.697,164.321 19.364,164.410 19.301 C 164.500 19.237,164.528 19.139,164.472 19.083 C 164.416 19.027,163.968 19.544,163.477 20.231 M186.715 23.458 C 186.656 23.619,186.564 23.787,186.511 23.833 C 186.457 23.879,186.227 24.197,185.999 24.541 C 185.770 24.884,185.527 25.165,185.458 25.166 C 185.390 25.166,185.333 25.247,185.333 25.346 C 185.333 25.445,184.988 25.974,184.566 26.523 C 184.144 27.071,183.836 27.558,183.883 27.605 C 183.929 27.651,184.325 27.178,184.762 26.553 C 185.843 25.008,186.190 24.523,186.738 23.792 C 186.996 23.448,187.120 23.167,187.015 23.167 C 186.909 23.167,186.774 23.298,186.715 23.458 M157.892 28.111 C 157.540 28.663,155.418 31.653,155.162 31.958 C 155.066 32.073,155.056 32.167,155.140 32.167 C 155.224 32.167,155.583 31.736,155.938 31.209 C 156.293 30.683,156.678 30.152,156.793 30.030 C 156.908 29.907,157.088 29.644,157.192 29.445 C 157.296 29.246,157.605 28.799,157.878 28.451 C 158.150 28.103,158.333 27.777,158.283 27.728 C 158.234 27.678,158.058 27.851,157.892 28.111 M183.542 27.944 C 183.427 27.990,183.333 28.100,183.333 28.188 C 183.333 28.275,183.240 28.459,183.125 28.596 C 182.656 29.156,182.556 29.293,181.919 30.251 C 181.553 30.801,181.181 31.302,181.090 31.366 C 181.000 31.430,180.971 31.527,181.026 31.581 C 181.117 31.672,181.919 30.633,183.307 28.625 C 183.608 28.190,183.831 27.839,183.802 27.846 C 183.773 27.854,183.656 27.897,183.542 27.944 M180.545 32.125 C 180.484 32.285,180.372 32.492,180.298 32.583 C 179.838 33.147,179.000 34.329,179.000 34.414 C 179.000 34.469,178.828 34.700,178.617 34.927 C 178.203 35.374,177.597 36.333,177.729 36.333 C 177.802 36.333,179.201 34.451,179.833 33.501 C 179.971 33.295,180.159 33.041,180.252 32.938 C 180.643 32.502,180.995 31.833,180.832 31.833 C 180.735 31.833,180.606 31.965,180.545 32.125 M154.749 32.558 C 154.281 33.092,154.000 33.656,154.249 33.560 C 154.387 33.508,154.500 33.360,154.500 33.232 C 154.500 33.104,154.567 33.000,154.649 33.000 C 154.791 33.000,155.057 32.499,154.962 32.410 C 154.937 32.386,154.841 32.453,154.749 32.558 M152.977 35.064 C 151.097 37.694,150.672 38.333,150.802 38.333 C 150.941 38.333,151.667 37.424,151.667 37.250 C 151.667 37.196,151.743 37.062,151.836 36.951 C 152.511 36.152,152.667 35.924,152.667 35.738 C 152.667 35.623,152.723 35.503,152.793 35.472 C 153.019 35.373,154.043 33.987,153.955 33.900 C 153.908 33.853,153.468 34.377,152.977 35.064 M177.375 36.610 C 177.260 36.657,177.167 36.792,177.167 36.910 C 177.167 37.029,177.054 37.219,176.917 37.333 C 176.650 37.555,176.565 37.916,176.817 37.760 C 176.945 37.681,177.720 36.476,177.619 36.513 C 177.600 36.520,177.490 36.564,177.375 36.610 M175.731 38.958 C 175.383 39.485,175.037 39.992,174.964 40.083 C 174.890 40.175,174.460 40.775,174.007 41.417 C 173.554 42.058,173.104 42.674,173.008 42.785 C 172.912 42.895,172.833 43.056,172.833 43.142 C 172.833 43.228,172.721 43.341,172.583 43.394 C 172.446 43.446,172.333 43.604,172.333 43.745 C 172.333 43.885,172.277 44.000,172.208 44.001 C 172.140 44.002,171.956 44.227,171.799 44.501 C 171.288 45.401,171.625 45.027,172.817 43.375 C 173.462 42.481,174.054 41.673,174.133 41.579 C 174.212 41.485,174.419 41.185,174.593 40.912 C 174.768 40.640,175.308 39.873,175.795 39.208 C 176.282 38.544,176.609 38.000,176.523 38.000 C 176.436 38.000,176.080 38.431,175.731 38.958 M150.212 38.949 C 149.665 39.738,149.626 39.838,149.908 39.730 C 150.050 39.676,150.167 39.551,150.167 39.454 C 150.167 39.356,150.291 39.139,150.443 38.970 C 150.596 38.802,150.679 38.623,150.628 38.573 C 150.578 38.522,150.390 38.691,150.212 38.949 M148.423 41.531 C 147.811 42.385,146.754 43.871,146.075 44.833 C 145.395 45.796,144.781 46.660,144.711 46.754 C 143.956 47.762,143.513 48.500,143.662 48.500 C 143.762 48.500,143.894 48.369,143.955 48.208 C 144.016 48.048,144.130 47.842,144.208 47.750 C 144.286 47.658,144.722 47.058,145.176 46.417 C 145.631 45.775,146.171 45.033,146.376 44.769 C 146.582 44.504,146.780 44.204,146.817 44.102 C 146.854 44.000,147.210 43.491,147.609 42.971 C 148.007 42.451,148.333 41.945,148.333 41.846 C 148.333 41.747,148.390 41.666,148.458 41.666 C 148.527 41.665,148.770 41.384,148.999 41.041 C 149.227 40.697,149.487 40.364,149.577 40.301 C 149.667 40.237,149.694 40.138,149.637 40.082 C 149.581 40.025,149.034 40.677,148.423 41.531 M171.034 45.666 C 170.878 45.940,170.694 46.165,170.625 46.166 C 170.556 46.166,170.500 46.251,170.500 46.354 C 170.500 46.485,170.562 46.489,170.708 46.367 C 170.973 46.145,171.552 45.167,171.418 45.167 C 171.363 45.167,171.190 45.391,171.034 45.666 M169.702 47.458 C 169.431 47.894,169.050 48.430,168.855 48.651 C 168.660 48.871,168.503 49.133,168.507 49.234 C 168.516 49.433,168.651 49.268,169.762 47.708 C 170.170 47.135,170.434 46.667,170.350 46.667 C 170.265 46.667,169.973 47.023,169.702 47.458 M142.690 49.572 C 142.311 50.074,142.000 50.527,142.000 50.578 C 142.000 50.628,141.585 51.232,141.077 51.918 C 140.569 52.605,140.217 53.167,140.295 53.167 C 140.441 53.167,141.167 52.261,141.167 52.078 C 141.167 52.022,141.260 51.878,141.375 51.759 C 141.490 51.639,141.696 51.371,141.833 51.164 C 141.971 50.957,142.407 50.341,142.803 49.794 C 143.714 48.538,143.616 48.345,142.690 49.572 M198.797 49.292 C 206.931 49.330,208.191 49.369,208.274 49.585 C 208.326 49.721,208.448 49.833,208.544 49.833 C 208.640 49.833,208.583 49.683,208.417 49.500 C 208.121 49.173,207.930 49.167,198.766 49.207 L 189.417 49.247 198.797 49.292 M256.375 49.291 L 265.500 49.336 265.500 83.596 C 265.500 106.893,265.555 117.958,265.673 118.178 C 265.840 118.491,266.131 118.500,275.997 118.500 L 286.149 118.500 286.575 118.894 C 286.809 119.111,287.000 119.339,287.000 119.401 C 287.000 119.590,287.720 120.500,287.870 120.500 C 288.053 120.500,286.688 118.634,286.345 118.417 C 286.182 118.313,282.260 118.219,275.917 118.167 L 265.750 118.083 265.667 83.667 L 265.583 49.250 256.417 49.248 L 247.250 49.246 256.375 49.291 M290.278 49.277 C 290.217 49.339,290.167 63.036,290.167 79.716 L 290.167 110.043 290.859 111.063 C 291.239 111.624,291.671 112.243,291.817 112.439 C 291.964 112.635,292.196 112.962,292.333 113.167 C 292.591 113.550,294.336 116.027,294.708 116.537 C 294.823 116.695,295.254 117.319,295.667 117.924 C 296.552 119.222,298.715 122.277,299.079 122.742 C 299.219 122.921,299.333 122.987,299.333 122.888 C 299.333 122.789,299.221 122.614,299.083 122.500 C 298.946 122.386,298.833 122.187,298.833 122.058 C 298.833 121.929,298.721 121.780,298.583 121.727 C 298.446 121.674,298.333 121.533,298.333 121.413 C 298.333 121.293,298.277 121.169,298.208 121.139 C 298.140 121.108,297.783 120.634,297.417 120.084 C 296.777 119.126,296.677 118.989,296.208 118.429 C 296.094 118.293,296.000 118.134,296.000 118.078 C 296.000 118.021,295.674 117.549,295.276 117.029 C 294.877 116.509,294.521 116.000,294.484 115.898 C 294.447 115.796,294.249 115.496,294.043 115.231 C 293.838 114.967,293.297 114.225,292.843 113.583 C 292.388 112.942,291.938 112.326,291.842 112.215 C 291.745 112.105,291.667 111.942,291.667 111.854 C 291.667 111.766,291.610 111.669,291.542 111.639 C 291.473 111.608,291.173 111.234,290.875 110.806 L 290.333 110.029 290.333 79.681 L 290.333 49.333 323.333 49.333 L 356.333 49.333 356.333 58.250 L 356.333 67.167 332.625 67.169 C 319.585 67.171,308.834 67.227,308.733 67.294 C 308.201 67.650,308.167 68.174,308.167 75.963 C 308.167 83.326,308.184 83.798,308.471 84.058 C 308.752 84.311,310.512 84.333,330.388 84.333 L 352.000 84.333 352.000 93.000 L 352.000 101.667 330.338 101.667 L 308.675 101.667 308.421 102.158 C 308.035 102.905,308.040 117.578,308.426 118.130 L 308.686 118.500 332.509 118.500 L 356.333 118.500 356.333 127.500 L 356.333 136.500 332.625 136.500 L 308.917 136.499 308.333 135.626 C 307.707 134.689,307.533 134.452,307.208 134.089 C 307.094 133.962,307.000 133.811,307.000 133.755 C 307.000 133.573,306.275 132.667,306.129 132.667 C 306.051 132.667,306.402 133.228,306.910 133.915 C 307.418 134.602,307.834 135.220,307.836 135.290 C 307.837 135.360,308.081 135.702,308.377 136.051 L 308.917 136.685 332.564 136.672 C 345.569 136.665,356.276 136.619,356.355 136.570 C 356.546 136.452,356.539 118.652,356.348 118.351 C 356.223 118.154,352.665 118.138,332.532 118.243 L 308.863 118.367 308.682 118.028 C 308.436 117.570,308.428 102.613,308.673 102.156 C 308.842 101.840,309.261 101.833,330.488 101.833 C 350.070 101.833,352.141 101.808,352.232 101.570 C 352.364 101.227,352.360 85.034,352.228 84.542 L 352.128 84.168 330.356 84.126 L 308.583 84.083 308.540 76.034 C 308.511 70.683,308.555 67.875,308.671 67.659 C 308.842 67.340,309.246 67.334,332.631 67.292 L 356.417 67.250 356.417 58.250 L 356.417 49.250 323.403 49.208 C 305.246 49.185,290.340 49.216,290.278 49.277 M47.748 49.430 C 47.656 49.469,47.018 49.572,46.332 49.658 L 45.083 49.815 46.667 49.759 C 48.231 49.704,49.840 49.351,48.500 49.357 C 48.179 49.358,47.841 49.391,47.748 49.430 M56.667 49.513 C 56.896 49.616,57.758 49.725,58.583 49.755 C 59.871 49.802,59.954 49.790,59.167 49.673 C 57.162 49.373,56.222 49.313,56.667 49.513 M188.899 49.625 C 188.850 49.785,188.744 50.040,188.664 50.191 C 188.286 50.905,188.032 51.667,188.172 51.667 C 188.257 51.667,188.376 51.471,188.436 51.233 C 188.496 50.994,188.720 50.469,188.934 50.066 C 189.149 49.663,189.249 49.333,189.157 49.333 C 189.065 49.333,188.949 49.465,188.899 49.625 M247.000 91.750 C 247.000 117.704,246.940 134.167,246.845 134.167 C 246.760 134.167,246.535 133.969,246.345 133.728 C 246.155 133.486,246.003 133.392,246.006 133.519 C 246.018 133.984,246.821 134.776,247.000 134.500 C 247.165 134.244,247.249 49.333,247.083 49.333 C 247.037 49.333,247.000 68.421,247.000 91.750 M167.569 50.458 C 167.210 50.985,166.860 51.442,166.792 51.472 C 166.723 51.503,166.667 51.600,166.667 51.688 C 166.667 51.775,166.590 51.938,166.497 52.049 C 165.891 52.768,164.667 54.515,164.667 54.659 C 164.667 54.755,164.610 54.834,164.542 54.834 C 164.473 54.835,164.234 55.116,164.010 55.459 C 163.787 55.803,163.311 56.483,162.954 56.971 C 162.596 57.459,162.341 57.896,162.387 57.942 C 162.433 57.988,162.792 57.551,163.185 56.971 C 163.578 56.391,164.316 55.343,164.825 54.642 C 165.334 53.941,165.862 53.202,166.000 53.000 C 166.320 52.530,168.158 49.983,168.376 49.708 C 168.477 49.580,168.480 49.500,168.381 49.500 C 168.294 49.500,167.928 49.931,167.569 50.458 M43.955 49.934 C 43.900 49.989,43.456 50.097,42.969 50.174 L 42.083 50.315 43.127 50.272 C 44.023 50.235,45.107 49.833,44.311 49.833 C 44.171 49.833,44.010 49.878,43.955 49.934 M61.083 50.074 C 61.358 50.208,61.958 50.312,62.417 50.304 L 63.250 50.289 62.500 50.166 C 62.087 50.099,61.487 49.995,61.167 49.937 L 60.583 49.830 61.083 50.074 M208.668 50.271 C 208.667 50.466,208.779 50.719,208.917 50.833 C 209.231 51.095,209.232 50.996,208.918 50.394 C 208.702 49.980,208.669 49.964,208.668 50.271 M41.446 50.443 C 41.386 50.503,41.055 50.612,40.710 50.687 C 40.122 50.813,40.133 50.818,40.889 50.763 C 41.635 50.709,42.440 50.333,41.811 50.333 C 41.671 50.333,41.506 50.383,41.446 50.443 M63.444 50.496 C 63.550 50.611,64.000 50.731,64.444 50.763 C 65.186 50.817,65.204 50.810,64.667 50.675 C 64.346 50.595,63.896 50.475,63.667 50.409 C 63.338 50.313,63.291 50.332,63.444 50.496 M39.250 51.040 C 38.015 51.464,37.789 51.568,37.977 51.631 C 38.087 51.668,38.269 51.626,38.381 51.537 C 38.492 51.449,38.862 51.327,39.202 51.265 C 39.543 51.204,39.866 51.082,39.921 50.994 C 40.038 50.803,39.917 50.812,39.250 51.040 M65.395 50.965 C 65.459 51.069,65.790 51.198,66.131 51.253 C 66.471 51.307,66.872 51.417,67.021 51.498 C 67.170 51.578,67.565 51.695,67.898 51.757 C 68.231 51.820,68.545 51.938,68.595 52.019 C 68.645 52.100,68.851 52.162,69.052 52.156 C 69.648 52.139,68.182 51.578,66.500 51.180 C 66.179 51.104,65.773 50.982,65.598 50.909 C 65.377 50.818,65.315 50.835,65.395 50.965 M209.168 51.438 C 209.167 51.633,209.279 51.886,209.417 52.000 C 209.731 52.261,209.732 52.163,209.418 51.561 C 209.202 51.147,209.169 51.131,209.168 51.438 M36.667 51.917 C 36.402 52.068,36.344 52.157,36.508 52.161 C 36.650 52.164,36.838 52.099,36.925 52.016 C 37.012 51.933,37.233 51.830,37.417 51.786 L 37.750 51.705 37.417 51.692 C 37.233 51.685,36.896 51.786,36.667 51.917 M187.785 52.083 C 187.720 52.267,187.620 52.529,187.563 52.667 C 187.480 52.869,187.515 52.865,187.746 52.645 C 187.903 52.495,188.003 52.233,187.968 52.061 C 187.907 51.768,187.896 51.769,187.785 52.083 M35.333 52.417 C 35.066 52.569,35.010 52.657,35.176 52.661 C 35.319 52.664,35.582 52.557,35.760 52.422 C 36.174 52.109,35.879 52.105,35.333 52.417 M69.760 52.411 C 69.938 52.546,70.198 52.658,70.338 52.661 C 70.478 52.664,70.761 52.785,70.967 52.929 C 71.173 53.073,71.428 53.163,71.532 53.128 C 71.637 53.093,71.429 52.934,71.070 52.774 C 70.711 52.615,70.286 52.412,70.127 52.325 C 69.673 52.076,69.401 52.140,69.760 52.411 M209.678 52.500 C 209.678 52.637,209.787 52.896,209.922 53.074 C 210.233 53.485,210.230 53.214,209.917 52.667 C 209.779 52.425,209.678 52.355,209.678 52.500 M33.500 53.173 C 32.996 53.433,32.700 53.650,32.843 53.656 C 32.986 53.662,33.249 53.557,33.426 53.422 C 33.604 53.287,33.862 53.172,34.000 53.167 C 34.137 53.161,34.396 53.046,34.574 52.911 C 35.109 52.506,34.511 52.652,33.500 53.173 M187.210 53.452 C 187.096 53.694,187.034 53.923,187.072 53.960 C 187.172 54.061,187.531 53.341,187.469 53.163 C 187.440 53.079,187.324 53.209,187.210 53.452 M72.000 53.337 C 72.000 53.432,72.116 53.555,72.257 53.609 C 72.648 53.759,72.694 53.597,72.326 53.367 C 72.120 53.239,72.000 53.227,72.000 53.337 M139.732 53.777 C 139.569 54.037,139.365 54.345,139.278 54.462 C 139.161 54.618,139.191 54.647,139.393 54.569 C 139.544 54.512,139.667 54.385,139.667 54.287 C 139.667 54.189,139.791 53.972,139.943 53.804 C 140.096 53.636,140.177 53.454,140.123 53.401 C 140.070 53.348,139.894 53.517,139.732 53.777 M210.172 53.676 C 210.175 53.809,210.287 54.062,210.422 54.240 C 210.594 54.468,210.665 54.493,210.661 54.324 C 210.658 54.191,210.546 53.938,210.411 53.760 C 210.239 53.532,210.168 53.507,210.172 53.676 M31.153 54.387 C 29.581 55.384,28.966 55.855,29.083 55.972 C 29.139 56.028,29.237 56.001,29.301 55.911 C 29.531 55.589,31.281 54.468,32.042 54.156 C 32.294 54.052,32.500 53.900,32.500 53.817 C 32.500 53.573,32.308 53.654,31.153 54.387 M72.833 53.793 C 72.833 53.865,73.188 54.110,73.622 54.337 C 74.056 54.564,74.511 54.844,74.634 54.958 C 74.757 55.073,74.964 55.167,75.095 55.167 C 75.226 55.167,75.333 55.227,75.333 55.300 C 75.333 55.373,75.783 55.719,76.333 56.070 C 76.883 56.420,77.333 56.773,77.333 56.853 C 77.333 56.934,77.416 57.000,77.518 57.000 C 77.786 57.000,82.000 61.343,82.000 61.620 C 82.000 61.665,82.206 61.976,82.458 62.310 C 83.071 63.122,83.323 63.525,83.441 63.875 C 83.495 64.035,83.591 64.167,83.654 64.167 C 83.718 64.167,83.953 64.578,84.176 65.082 C 84.400 65.585,84.634 65.997,84.695 65.998 C 84.757 65.999,84.856 66.225,84.917 66.500 C 84.977 66.775,85.096 67.000,85.180 67.000 C 85.474 67.000,85.331 67.588,84.984 67.805 C 84.792 67.925,84.672 68.061,84.718 68.106 C 84.867 68.256,85.500 67.760,85.500 67.494 C 85.500 66.920,82.602 61.842,81.937 61.250 C 81.834 61.158,81.478 60.746,81.145 60.333 C 80.229 59.197,78.682 57.634,77.750 56.903 C 77.292 56.544,76.892 56.194,76.861 56.125 C 76.831 56.056,76.729 56.000,76.635 56.000 C 76.541 56.000,76.191 55.794,75.857 55.542 C 75.162 55.018,74.693 54.714,74.333 54.553 C 74.196 54.491,73.802 54.266,73.458 54.052 C 73.115 53.838,72.833 53.721,72.833 53.793 M186.704 54.542 C 186.602 54.748,186.356 55.292,186.157 55.750 C 185.958 56.208,185.610 56.996,185.383 57.500 C 185.157 58.004,184.872 58.642,184.751 58.917 C 184.629 59.192,184.336 59.817,184.098 60.307 C 183.599 61.337,183.575 61.450,183.917 61.167 C 184.054 61.053,184.167 60.862,184.167 60.743 C 184.167 60.624,184.292 60.277,184.446 59.972 C 184.599 59.666,184.824 59.218,184.946 58.974 C 185.067 58.731,185.167 58.412,185.167 58.266 C 185.167 58.120,185.242 58.000,185.333 58.000 C 185.425 58.000,185.500 57.912,185.500 57.805 C 185.500 57.629,186.069 56.333,186.787 54.874 C 186.933 54.576,187.017 54.294,186.971 54.249 C 186.926 54.204,186.806 54.336,186.704 54.542 M210.667 54.752 C 210.667 54.799,210.738 54.968,210.825 55.127 C 211.050 55.538,211.454 56.516,211.581 56.958 C 211.641 57.165,211.759 57.333,211.845 57.333 C 212.047 57.333,212.043 57.305,211.760 56.734 C 211.628 56.468,211.369 55.894,211.183 55.458 C 210.891 54.773,210.667 54.467,210.667 54.752 M138.224 55.951 C 136.943 57.726,136.306 58.667,136.386 58.667 C 136.517 58.667,137.833 56.854,137.833 56.674 C 137.833 56.578,137.890 56.499,137.958 56.499 C 138.027 56.498,138.270 56.217,138.499 55.874 C 138.727 55.531,138.987 55.198,139.077 55.134 C 139.167 55.070,139.196 54.973,139.141 54.919 C 139.086 54.864,138.674 55.329,138.224 55.951 M27.907 56.765 C 27.143 57.467,27.145 57.639,27.910 56.975 C 28.097 56.813,28.400 56.571,28.583 56.437 C 28.766 56.303,28.874 56.152,28.824 56.101 C 28.773 56.050,28.360 56.349,27.907 56.765 M25.490 58.966 C 24.049 60.443,23.305 61.398,23.717 61.240 C 23.836 61.194,24.065 60.936,24.224 60.666 C 24.383 60.397,25.082 59.609,25.778 58.915 C 26.474 58.222,27.012 57.623,26.974 57.585 C 26.936 57.547,26.268 58.168,25.490 58.966 M212.001 57.676 C 212.000 57.819,212.110 58.082,212.245 58.260 C 212.379 58.438,212.492 58.705,212.495 58.855 C 212.498 59.004,212.613 59.219,212.750 59.333 C 212.972 59.517,212.973 59.477,212.764 58.979 C 212.356 58.011,212.002 57.406,212.001 57.676 M161.645 58.792 C 161.435 59.135,161.185 59.501,161.090 59.605 C 160.994 59.708,160.804 59.962,160.667 60.169 C 160.529 60.376,160.093 60.993,159.697 61.539 C 159.301 62.085,159.010 62.566,159.051 62.606 C 159.117 62.673,160.034 61.466,161.158 59.833 C 161.379 59.512,161.742 59.006,161.966 58.708 C 162.190 58.410,162.295 58.167,162.200 58.167 C 162.105 58.167,161.855 58.448,161.645 58.792 M135.405 59.947 C 134.324 61.492,133.977 61.977,133.429 62.708 C 133.171 63.052,133.047 63.333,133.152 63.333 C 133.258 63.333,133.394 63.202,133.455 63.042 C 133.516 62.881,133.630 62.675,133.708 62.583 C 133.785 62.492,134.217 61.892,134.667 61.250 C 135.607 59.908,135.642 59.862,136.068 59.367 C 136.244 59.164,136.345 58.956,136.293 58.904 C 136.242 58.853,135.842 59.322,135.405 59.947 M213.009 59.917 C 213.010 60.100,213.121 60.396,213.255 60.574 C 213.390 60.751,213.500 61.024,213.500 61.178 C 213.500 61.333,213.612 61.553,213.750 61.667 C 214.058 61.922,214.062 61.851,213.775 61.234 C 213.651 60.968,213.428 60.487,213.279 60.167 C 213.092 59.765,213.008 59.687,213.009 59.917 M23.207 61.704 C 22.658 62.373,21.099 65.667,21.331 65.667 C 21.411 65.667,21.526 65.498,21.585 65.292 C 21.742 64.744,22.715 62.787,22.958 62.530 C 23.073 62.409,23.167 62.209,23.167 62.085 C 23.167 61.962,23.260 61.828,23.375 61.787 C 23.490 61.746,23.538 61.663,23.482 61.602 C 23.426 61.542,23.302 61.588,23.207 61.704 M183.451 61.750 C 183.386 61.933,183.287 62.196,183.230 62.333 C 183.146 62.536,183.181 62.532,183.413 62.311 C 183.570 62.162,183.670 61.899,183.634 61.728 C 183.574 61.434,183.563 61.436,183.451 61.750 M214.009 62.198 C 214.004 62.354,214.069 62.523,214.154 62.575 C 214.238 62.628,214.357 62.895,214.417 63.169 C 214.477 63.443,214.596 63.667,214.680 63.667 C 214.764 63.667,214.833 63.786,214.833 63.933 C 214.833 64.079,214.933 64.398,215.054 64.641 C 215.176 64.884,215.401 65.333,215.554 65.639 C 215.708 65.944,215.833 66.291,215.833 66.410 C 215.833 66.529,215.946 66.719,216.083 66.833 C 216.393 67.091,216.396 67.015,216.100 66.401 C 215.972 66.134,215.681 65.504,215.453 65.000 C 214.444 62.765,214.017 61.936,214.009 62.198 M182.874 62.996 C 182.571 63.481,182.620 63.808,182.929 63.366 C 183.073 63.160,183.167 62.918,183.137 62.827 C 183.107 62.737,182.989 62.813,182.874 62.996 M158.546 63.125 C 158.485 63.285,158.337 63.516,158.218 63.637 C 158.098 63.758,158.000 63.932,158.000 64.024 C 158.000 64.231,158.328 63.895,158.714 63.292 C 158.876 63.040,158.929 62.833,158.832 62.833 C 158.735 62.833,158.607 62.965,158.546 63.125 M132.559 63.944 C 132.393 64.204,132.218 64.454,132.171 64.500 C 131.898 64.761,130.667 66.682,130.667 66.846 C 130.667 67.101,132.349 69.373,132.458 69.265 C 132.525 69.197,131.658 67.963,131.334 67.667 C 130.860 67.233,130.872 66.527,131.364 65.919 C 131.986 65.150,133.007 63.618,132.942 63.553 C 132.897 63.508,132.724 63.684,132.559 63.944 M182.374 64.163 C 182.071 64.648,182.120 64.975,182.429 64.533 C 182.573 64.327,182.667 64.084,182.637 63.994 C 182.607 63.904,182.489 63.980,182.374 64.163 M157.070 65.292 C 156.711 65.819,156.248 66.437,156.042 66.665 C 155.836 66.893,155.667 67.143,155.667 67.219 C 155.667 67.296,155.329 67.797,154.917 68.333 C 154.504 68.869,154.167 69.389,154.167 69.487 C 154.167 69.586,154.110 69.667,154.042 69.668 C 153.973 69.668,153.730 69.950,153.501 70.293 C 153.273 70.636,153.013 70.969,152.923 71.033 C 152.833 71.096,152.806 71.195,152.863 71.251 C 152.961 71.350,153.644 70.439,156.425 66.500 C 157.105 65.537,157.740 64.656,157.837 64.542 C 157.934 64.427,157.948 64.333,157.868 64.333 C 157.788 64.333,157.428 64.765,157.070 65.292 M181.676 65.750 C 181.476 66.208,181.205 66.801,181.073 67.067 C 180.770 67.679,180.772 67.759,181.083 67.500 C 181.221 67.386,181.336 67.170,181.339 67.021 C 181.342 66.872,181.454 66.604,181.589 66.426 C 181.723 66.249,181.833 65.974,181.833 65.815 C 181.833 65.657,181.920 65.499,182.025 65.464 C 182.130 65.429,182.177 65.291,182.128 65.158 C 182.074 65.010,181.900 65.238,181.676 65.750 M51.481 65.903 C 51.425 65.961,50.675 66.066,49.815 66.135 C 48.639 66.229,49.265 66.259,52.333 66.255 C 54.823 66.252,55.994 66.205,55.333 66.134 C 53.035 65.888,51.579 65.801,51.481 65.903 M20.875 66.452 C 20.584 67.077,20.615 67.315,20.928 66.867 C 21.072 66.662,21.166 66.384,21.137 66.249 C 21.102 66.092,21.009 66.164,20.875 66.452 M46.750 66.500 C 46.693 66.592,46.408 66.667,46.115 66.668 C 45.823 66.668,45.389 66.770,45.151 66.894 C 44.913 67.018,44.445 67.171,44.109 67.234 C 43.774 67.297,43.500 67.420,43.500 67.508 C 43.500 67.705,43.591 67.707,43.961 67.521 C 44.354 67.323,45.852 66.893,47.167 66.602 C 48.192 66.376,48.212 66.362,47.552 66.348 C 47.167 66.340,46.807 66.408,46.750 66.500 M56.500 66.382 C 56.546 66.430,57.108 66.587,57.750 66.730 C 58.851 66.975,60.173 67.330,60.917 67.581 C 61.245 67.692,61.245 67.690,60.926 67.430 C 60.749 67.285,60.407 67.167,60.168 67.167 C 59.929 67.167,59.656 67.089,59.561 66.994 C 59.348 66.782,56.302 66.172,56.500 66.382 M216.336 67.448 C 216.334 67.649,216.413 67.863,216.511 67.924 C 216.784 68.092,216.799 67.957,216.558 67.500 C 216.347 67.100,216.338 67.098,216.336 67.448 M20.375 68.024 C 20.085 68.834,20.116 69.184,20.425 68.592 C 20.566 68.322,20.659 67.952,20.632 67.771 C 20.596 67.524,20.531 67.588,20.375 68.024 M42.671 67.827 C 42.275 68.078,42.545 68.131,43.000 67.891 C 43.230 67.770,43.304 67.672,43.167 67.672 C 43.029 67.672,42.806 67.742,42.671 67.827 M61.727 67.918 C 62.329 68.232,62.428 68.231,62.167 67.917 C 62.053 67.779,61.800 67.667,61.605 67.668 C 61.297 67.669,61.314 67.702,61.727 67.918 M180.543 68.285 C 180.430 68.527,180.367 68.756,180.405 68.794 C 180.505 68.894,180.864 68.174,180.802 67.996 C 180.774 67.913,180.657 68.043,180.543 68.285 M41.250 68.714 C 40.210 69.550,39.000 70.858,39.000 71.146 C 39.000 71.323,39.090 71.273,39.276 70.995 C 39.766 70.262,40.396 69.637,41.393 68.894 C 41.931 68.494,42.268 68.169,42.143 68.172 C 42.019 68.175,41.617 68.419,41.250 68.714 M62.667 68.286 C 62.804 68.336,63.012 68.454,63.129 68.546 C 63.288 68.672,63.315 68.645,63.236 68.440 C 63.178 68.290,62.970 68.173,62.774 68.180 C 62.530 68.189,62.496 68.222,62.667 68.286 M83.924 68.321 C 83.872 68.405,83.024 68.874,82.040 69.362 C 81.055 69.851,80.225 70.306,80.194 70.375 C 80.164 70.444,80.004 70.500,79.840 70.500 C 79.675 70.500,79.447 70.612,79.333 70.750 C 79.219 70.887,78.994 71.000,78.833 71.000 C 78.672 71.000,78.451 71.108,78.342 71.240 C 78.232 71.372,77.985 71.503,77.793 71.532 C 77.600 71.560,77.412 71.676,77.375 71.790 C 77.337 71.903,78.569 71.349,80.112 70.557 C 81.654 69.766,83.142 69.004,83.417 68.865 C 84.298 68.420,84.617 68.167,84.297 68.167 C 84.144 68.167,83.977 68.236,83.924 68.321 M216.839 68.510 C 216.842 68.642,216.954 68.896,217.089 69.074 C 217.261 69.302,217.332 69.326,217.328 69.157 C 217.325 69.025,217.213 68.771,217.078 68.593 C 216.906 68.365,216.835 68.341,216.839 68.510 M64.000 69.032 C 64.321 69.230,65.097 69.735,65.725 70.154 C 66.352 70.573,67.027 71.023,67.225 71.152 C 67.422 71.281,67.283 71.114,66.917 70.780 C 66.550 70.446,66.199 70.172,66.137 70.170 C 66.075 70.168,65.922 70.073,65.797 69.958 C 65.494 69.681,64.998 69.368,64.558 69.177 C 64.361 69.091,64.150 68.941,64.090 68.844 C 64.030 68.746,63.854 68.668,63.698 68.669 C 63.525 68.671,63.640 68.810,64.000 69.032 M180.031 69.416 C 179.926 69.646,179.909 69.833,179.992 69.833 C 180.156 69.833,180.410 69.188,180.292 69.070 C 180.253 69.031,180.135 69.186,180.031 69.416 M19.875 70.304 C 19.570 71.602,19.600 77.498,19.916 78.583 L 20.159 79.417 20.061 78.667 C 19.852 77.057,19.812 71.421,20.006 70.824 C 20.112 70.499,20.173 70.049,20.141 69.824 C 20.099 69.529,20.026 69.662,19.875 70.304 M133.033 70.286 C 133.335 70.716,133.673 71.184,133.783 71.326 C 133.892 71.467,134.620 72.483,135.398 73.583 C 136.177 74.683,136.878 75.658,136.956 75.750 C 137.034 75.842,137.281 76.179,137.504 76.500 C 138.776 78.326,139.552 79.337,139.624 79.265 C 139.710 79.179,138.681 77.792,138.460 77.694 C 138.390 77.664,138.333 77.566,138.333 77.476 C 138.333 77.342,137.613 76.291,137.036 75.583 C 136.961 75.492,136.850 75.285,136.788 75.125 C 136.727 74.965,136.600 74.833,136.505 74.833 C 136.411 74.833,136.333 74.755,136.333 74.660 C 136.333 74.564,136.257 74.395,136.163 74.285 C 136.069 74.174,135.397 73.258,134.671 72.250 C 133.944 71.242,133.271 70.326,133.175 70.215 C 133.079 70.105,133.000 69.944,133.000 69.858 C 133.000 69.772,132.883 69.658,132.741 69.603 C 132.585 69.543,132.701 69.815,133.033 70.286 M217.339 69.676 C 217.342 69.809,217.454 70.062,217.589 70.240 C 217.761 70.468,217.832 70.493,217.828 70.324 C 217.825 70.191,217.713 69.938,217.578 69.760 C 217.406 69.532,217.335 69.507,217.339 69.676 M179.618 70.250 C 179.553 70.433,179.453 70.696,179.397 70.833 C 179.313 71.036,179.348 71.032,179.579 70.811 C 179.737 70.662,179.836 70.399,179.801 70.228 C 179.740 69.934,179.730 69.936,179.618 70.250 M217.833 70.917 C 217.833 71.054,217.908 71.167,218.000 71.167 C 218.092 71.167,218.167 71.254,218.167 71.362 C 218.167 71.469,218.380 72.013,218.640 72.570 C 218.901 73.127,219.204 73.799,219.313 74.063 C 219.423 74.327,219.552 74.503,219.601 74.454 C 219.650 74.406,219.619 74.227,219.531 74.058 C 219.309 73.626,218.749 72.394,218.350 71.458 C 218.005 70.650,217.833 70.470,217.833 70.917 M179.015 71.701 C 178.595 72.684,177.816 74.410,177.666 74.691 C 177.300 75.374,177.030 76.167,177.164 76.167 C 177.245 76.167,177.361 75.998,177.421 75.792 C 177.482 75.585,177.740 74.967,177.993 74.417 C 178.835 72.593,179.000 72.201,179.000 72.030 C 179.000 71.937,179.084 71.833,179.186 71.799 C 179.288 71.765,179.344 71.606,179.311 71.445 C 179.266 71.231,179.187 71.299,179.015 71.701 M38.564 71.958 C 38.503 72.210,38.382 72.508,38.295 72.619 C 38.208 72.730,38.115 73.405,38.089 74.119 C 38.064 74.833,38.070 75.079,38.104 74.667 C 38.173 73.816,38.646 72.022,38.883 71.708 C 38.986 71.572,38.977 71.500,38.857 71.500 C 38.756 71.500,38.624 71.706,38.564 71.958 M67.999 71.916 C 68.214 72.145,68.421 72.301,68.459 72.263 C 68.541 72.181,67.882 71.500,67.721 71.500 C 67.659 71.500,67.784 71.687,67.999 71.916 M152.542 71.610 C 152.427 71.657,152.333 71.792,152.333 71.910 C 152.333 72.029,152.221 72.219,152.083 72.333 C 151.816 72.555,151.732 72.916,151.983 72.760 C 152.111 72.681,152.887 71.476,152.786 71.513 C 152.766 71.520,152.656 71.564,152.542 71.610 M76.505 72.160 C 76.097 72.418,76.386 72.490,76.834 72.242 C 77.075 72.109,77.145 72.010,77.000 72.008 C 76.862 72.007,76.640 72.075,76.505 72.160 M198.367 72.200 C 198.257 72.310,198.167 72.512,198.167 72.649 C 198.167 72.848,198.208 72.840,198.377 72.609 C 198.711 72.153,199.055 72.559,199.769 74.250 C 200.686 76.419,200.831 76.687,200.832 76.208 C 200.833 76.002,200.758 75.833,200.667 75.833 C 200.575 75.833,200.500 75.754,200.500 75.658 C 200.500 75.478,199.951 74.149,199.661 73.627 C 199.572 73.468,199.500 73.228,199.500 73.093 C 199.500 72.896,198.770 72.000,198.609 72.000 C 198.586 72.000,198.477 72.090,198.367 72.200 M68.823 72.750 C 68.927 72.933,69.158 73.308,69.337 73.583 C 69.516 73.858,69.714 74.196,69.777 74.333 C 69.939 74.691,70.500 75.402,70.500 75.250 C 70.500 75.066,69.789 73.927,69.632 73.861 C 69.559 73.831,69.500 73.711,69.500 73.595 C 69.500 73.480,69.305 73.167,69.067 72.901 C 68.829 72.635,68.719 72.567,68.823 72.750 M75.500 72.750 C 75.236 73.068,75.484 73.065,75.907 72.745 C 76.166 72.549,76.178 72.500,75.969 72.500 C 75.825 72.500,75.614 72.612,75.500 72.750 M73.750 73.595 C 73.200 73.904,72.273 74.388,71.689 74.671 C 71.106 74.953,70.664 75.220,70.707 75.263 C 70.776 75.332,74.942 73.280,75.145 73.078 C 75.403 72.819,74.601 73.117,73.750 73.595 M151.198 73.493 C 150.997 73.765,150.833 74.032,150.833 74.088 C 150.833 74.145,150.740 74.288,150.625 74.408 C 150.510 74.528,150.304 74.795,150.167 75.002 C 150.029 75.209,149.593 75.826,149.197 76.372 C 148.801 76.919,148.512 77.401,148.556 77.445 C 148.599 77.488,148.881 77.162,149.183 76.720 C 149.484 76.278,149.791 75.892,149.865 75.861 C 149.939 75.831,150.000 75.736,150.000 75.651 C 150.000 75.566,150.415 74.935,150.923 74.248 C 151.431 73.562,151.783 73.000,151.705 73.000 C 151.627 73.000,151.399 73.222,151.198 73.493 M197.864 73.203 C 197.755 73.311,197.667 73.554,197.668 73.742 C 197.669 74.024,197.712 74.000,197.921 73.600 C 198.197 73.070,198.172 72.895,197.864 73.203 M197.364 74.369 C 197.255 74.478,197.167 74.739,197.167 74.950 C 197.167 75.161,197.098 75.333,197.013 75.333 C 196.929 75.333,196.811 75.557,196.750 75.831 C 196.690 76.105,196.572 76.372,196.487 76.425 C 196.403 76.477,196.337 76.646,196.342 76.802 C 196.347 76.957,196.577 76.596,196.853 76.000 C 197.128 75.404,197.429 74.778,197.522 74.609 C 197.725 74.235,197.635 74.098,197.364 74.369 M219.669 74.838 C 219.673 75.175,219.958 75.598,220.091 75.464 C 220.151 75.404,220.081 75.183,219.934 74.974 C 219.762 74.728,219.668 74.680,219.669 74.838 M38.167 75.908 C 38.167 76.638,39.533 78.450,40.653 79.207 C 41.452 79.747,41.382 79.505,40.563 78.896 C 39.604 78.185,38.801 77.163,38.514 76.292 C 38.299 75.641,38.167 75.495,38.167 75.908 M220.168 75.938 C 220.167 76.133,220.279 76.386,220.417 76.500 C 220.731 76.761,220.732 76.663,220.418 76.061 C 220.202 75.647,220.169 75.631,220.168 75.938 M176.785 76.583 C 176.720 76.767,176.620 77.029,176.563 77.167 C 176.480 77.369,176.515 77.365,176.746 77.145 C 176.903 76.995,177.003 76.733,176.968 76.561 C 176.907 76.268,176.896 76.269,176.785 76.583 M200.833 76.711 C 200.833 76.757,200.945 77.010,201.082 77.273 C 201.298 77.686,201.331 77.703,201.332 77.395 C 201.333 77.200,201.221 76.947,201.083 76.833 C 200.946 76.719,200.833 76.664,200.833 76.711 M220.675 76.961 C 220.670 77.076,220.738 77.301,220.825 77.461 C 220.912 77.620,221.115 78.044,221.274 78.403 C 221.434 78.762,221.587 78.987,221.613 78.903 C 221.640 78.819,221.442 78.300,221.173 77.750 C 220.904 77.200,220.680 76.845,220.675 76.961 M195.930 77.786 C 195.776 78.133,195.579 78.547,195.492 78.706 C 195.405 78.865,195.339 79.090,195.346 79.206 C 195.352 79.322,195.579 78.937,195.849 78.350 C 196.119 77.764,196.311 77.255,196.275 77.220 C 196.239 77.184,196.084 77.439,195.930 77.786 M176.210 77.952 C 176.096 78.194,176.034 78.423,176.072 78.460 C 176.172 78.561,176.531 77.841,176.469 77.663 C 176.440 77.579,176.324 77.709,176.210 77.952 M201.333 77.877 C 201.333 77.924,201.445 78.177,201.582 78.439 C 201.798 78.853,201.831 78.869,201.832 78.562 C 201.833 78.367,201.721 78.114,201.583 78.000 C 201.446 77.886,201.333 77.831,201.333 77.877 M147.567 78.648 C 147.484 78.821,147.249 79.177,147.043 79.439 C 146.838 79.702,146.297 80.442,145.843 81.083 C 145.388 81.725,144.938 82.341,144.842 82.451 C 144.745 82.562,144.667 82.731,144.667 82.826 C 144.667 82.922,144.610 83.002,144.542 83.004 C 144.473 83.007,144.233 83.307,144.008 83.671 C 143.501 84.494,143.354 84.493,142.841 83.662 C 142.617 83.298,142.373 83.000,142.300 83.000 C 142.227 83.000,142.167 82.922,142.167 82.826 C 142.167 82.681,140.942 80.935,140.336 80.215 C 140.243 80.105,140.167 79.944,140.167 79.858 C 140.167 79.772,140.050 79.658,139.908 79.603 C 139.686 79.518,140.300 80.538,140.917 81.279 C 141.008 81.389,141.564 82.159,142.152 82.990 C 143.284 84.589,143.493 84.724,143.917 84.125 C 144.063 83.919,144.612 83.150,145.137 82.417 C 147.197 79.539,148.001 78.333,147.863 78.333 C 147.783 78.333,147.650 78.475,147.567 78.648 M175.690 79.106 C 175.490 79.553,175.494 79.566,175.757 79.308 C 175.912 79.157,176.008 78.942,175.971 78.831 C 175.934 78.720,175.808 78.844,175.690 79.106 M201.833 79.044 C 201.833 79.090,201.945 79.343,202.082 79.606 C 202.298 80.020,202.331 80.036,202.332 79.729 C 202.333 79.534,202.221 79.281,202.083 79.167 C 201.946 79.053,201.833 78.997,201.833 79.044 M221.672 79.283 C 221.669 79.393,221.844 79.816,222.061 80.224 C 222.278 80.632,222.504 81.161,222.564 81.399 C 222.624 81.638,222.743 81.833,222.828 81.833 C 222.990 81.833,222.579 80.699,222.318 80.425 C 222.235 80.338,222.167 80.146,222.167 79.999 C 222.167 79.688,221.680 78.984,221.672 79.283 M41.500 79.633 C 41.500 79.814,43.796 80.873,44.023 80.798 C 44.134 80.761,43.967 80.633,43.654 80.514 C 43.340 80.394,42.727 80.121,42.292 79.906 C 41.856 79.692,41.500 79.569,41.500 79.633 M195.031 79.703 C 194.922 79.811,194.834 80.054,194.834 80.242 C 194.835 80.524,194.879 80.500,195.087 80.100 C 195.364 79.570,195.338 79.395,195.031 79.703 M20.176 79.833 C 20.173 79.971,20.280 80.383,20.412 80.750 C 20.567 81.181,20.655 81.291,20.659 81.061 C 20.663 80.865,20.557 80.453,20.423 80.144 C 20.289 79.836,20.178 79.696,20.176 79.833 M175.117 80.369 C 174.974 80.671,174.697 81.292,174.501 81.750 C 174.103 82.684,173.536 83.934,173.312 84.375 C 173.218 84.560,173.227 84.667,173.336 84.667 C 173.431 84.667,173.553 84.442,173.608 84.167 C 173.663 83.892,173.774 83.667,173.854 83.667 C 173.934 83.667,174.000 83.584,174.000 83.484 C 174.000 83.291,174.221 82.770,175.041 81.032 C 175.314 80.454,175.501 79.945,175.457 79.901 C 175.413 79.857,175.260 80.068,175.117 80.369 M202.899 81.458 C 203.903 83.803,204.154 84.284,204.161 83.875 C 204.164 83.669,204.092 83.500,204.000 83.500 C 203.908 83.500,203.833 83.418,203.833 83.317 C 203.833 83.145,203.618 82.601,203.082 81.417 C 202.958 81.142,202.809 80.748,202.750 80.542 C 202.692 80.335,202.577 80.167,202.495 80.167 C 202.413 80.167,202.595 80.748,202.899 81.458 M194.531 80.869 C 194.422 80.978,194.334 81.220,194.334 81.408 C 194.335 81.691,194.379 81.666,194.587 81.267 C 194.864 80.737,194.838 80.562,194.531 80.869 M44.811 81.090 C 45.119 81.224,45.532 81.328,45.727 81.321 C 45.992 81.311,45.933 81.250,45.500 81.083 C 44.684 80.769,44.085 80.775,44.811 81.090 M46.782 81.502 C 46.891 81.618,47.379 81.738,47.865 81.767 C 48.624 81.813,48.667 81.801,48.167 81.684 C 47.846 81.608,47.358 81.489,47.083 81.419 C 46.683 81.316,46.623 81.332,46.782 81.502 M20.667 81.616 C 20.667 81.714,20.779 82.010,20.916 82.273 C 21.115 82.654,21.164 82.683,21.160 82.417 C 21.158 82.233,21.046 81.938,20.911 81.760 C 20.777 81.582,20.667 81.517,20.667 81.616 M49.583 82.074 C 49.858 82.208,50.496 82.311,51.000 82.302 L 51.917 82.286 51.083 82.166 C 50.625 82.100,49.987 81.997,49.667 81.938 L 49.083 81.830 49.583 82.074 M194.031 82.036 C 193.922 82.145,193.834 82.387,193.834 82.575 C 193.835 82.858,193.879 82.833,194.087 82.434 C 194.364 81.904,194.338 81.728,194.031 82.036 M223.001 82.271 C 223.000 82.466,223.112 82.719,223.250 82.833 C 223.565 83.095,223.565 82.996,223.251 82.394 C 223.035 81.980,223.002 81.964,223.001 82.271 M52.445 82.498 C 52.567 82.628,53.226 82.726,54.195 82.758 C 55.727 82.809,55.733 82.808,54.583 82.674 C 53.942 82.600,53.154 82.483,52.833 82.414 C 52.370 82.315,52.290 82.332,52.445 82.498 M56.046 83.000 C 56.209 83.104,56.997 83.256,57.796 83.339 C 59.930 83.561,61.702 83.846,62.100 84.033 C 62.293 84.123,62.630 84.171,62.850 84.139 C 63.409 84.060,60.445 83.432,58.250 83.165 C 57.608 83.087,56.783 82.975,56.417 82.917 C 55.884 82.833,55.809 82.849,56.046 83.000 M21.167 83.056 C 21.167 83.087,21.517 83.819,21.945 84.681 C 23.514 87.844,25.014 89.764,27.250 91.471 C 27.800 91.891,28.287 92.275,28.333 92.326 C 28.588 92.603,31.579 94.500,31.763 94.500 C 31.959 94.500,31.614 94.137,31.275 93.987 C 31.078 93.900,30.692 93.680,30.417 93.499 C 30.142 93.318,29.804 93.119,29.667 93.056 C 29.529 92.993,29.357 92.842,29.283 92.721 C 29.210 92.599,29.041 92.500,28.908 92.500 C 28.775 92.500,28.667 92.437,28.667 92.360 C 28.667 92.283,28.498 92.141,28.292 92.043 C 27.431 91.637,24.000 88.283,24.000 87.848 C 24.000 87.748,23.942 87.667,23.872 87.667 C 23.801 87.667,23.557 87.310,23.330 86.875 C 23.103 86.440,22.879 86.046,22.833 86.000 C 22.691 85.858,21.699 83.771,21.585 83.375 C 21.499 83.076,21.167 82.823,21.167 83.056 M193.417 83.375 C 193.360 83.581,193.246 83.900,193.165 84.083 C 192.491 85.611,192.333 86.004,192.333 86.158 C 192.333 86.254,192.258 86.333,192.167 86.333 C 192.075 86.333,192.006 86.502,192.014 86.708 C 192.025 86.996,192.104 86.917,192.354 86.373 C 193.245 84.436,193.806 83.000,193.672 83.000 C 193.590 83.000,193.475 83.169,193.417 83.375 M223.501 83.343 C 223.500 83.486,223.610 83.749,223.745 83.926 C 224.063 84.347,224.066 84.165,223.751 83.561 C 223.614 83.298,223.502 83.200,223.501 83.343 M64.083 84.421 C 64.450 84.554,64.900 84.659,65.083 84.657 C 65.271 84.654,65.124 84.547,64.750 84.412 C 64.383 84.280,63.933 84.174,63.750 84.176 C 63.563 84.179,63.709 84.287,64.083 84.421 M204.167 84.371 C 204.167 84.414,204.268 84.667,204.392 84.933 C 204.516 85.199,204.739 85.679,204.888 86.000 C 205.075 86.401,205.159 86.479,205.158 86.250 C 205.157 86.067,205.046 85.771,204.911 85.593 C 204.777 85.415,204.667 85.143,204.667 84.989 C 204.667 84.834,204.554 84.614,204.417 84.500 C 204.279 84.386,204.167 84.328,204.167 84.371 M224.000 84.531 C 224.000 84.675,224.112 84.886,224.250 85.000 C 224.568 85.264,224.565 85.016,224.245 84.593 C 224.049 84.334,224.000 84.322,224.000 84.531 M66.061 84.918 C 66.323 85.055,66.698 85.164,66.894 85.160 C 67.169 85.155,67.123 85.099,66.689 84.910 C 65.945 84.587,65.438 84.593,66.061 84.918 M172.951 85.083 C 172.886 85.267,172.787 85.529,172.730 85.667 C 172.646 85.869,172.681 85.865,172.913 85.645 C 173.070 85.495,173.170 85.233,173.134 85.061 C 173.074 84.768,173.063 84.769,172.951 85.083 M67.833 85.417 C 67.947 85.554,68.275 85.663,68.562 85.659 C 69.082 85.652,69.082 85.651,68.417 85.412 C 67.586 85.113,67.581 85.113,67.833 85.417 M224.500 85.575 C 224.500 85.657,224.715 86.180,224.977 86.737 C 225.781 88.443,226.000 88.959,226.000 89.150 C 226.000 89.251,226.075 89.333,226.167 89.333 C 226.258 89.333,226.333 89.469,226.333 89.635 C 226.333 89.801,226.443 90.082,226.578 90.260 C 226.713 90.438,226.825 90.705,226.828 90.855 C 226.831 91.004,226.946 91.219,227.083 91.333 C 227.421 91.614,227.400 91.501,226.940 90.557 C 226.364 89.376,225.757 88.042,225.322 87.000 C 224.927 86.054,224.500 85.313,224.500 85.575 M69.407 85.922 C 69.585 86.057,69.922 86.158,70.157 86.147 C 70.501 86.132,70.519 86.112,70.250 86.048 C 70.067 86.004,69.845 85.900,69.758 85.817 C 69.671 85.734,69.484 85.669,69.342 85.672 C 69.137 85.676,69.150 85.728,69.407 85.922 M172.451 86.250 C 172.386 86.433,172.287 86.696,172.230 86.833 C 172.146 87.036,172.181 87.032,172.413 86.811 C 172.570 86.662,172.670 86.399,172.634 86.228 C 172.574 85.934,172.563 85.936,172.451 86.250 M70.907 86.403 C 71.085 86.548,71.404 86.667,71.615 86.667 C 71.827 86.667,72.000 86.742,72.000 86.833 C 72.000 86.925,72.086 87.000,72.191 87.000 C 72.443 87.000,75.651 88.600,75.833 88.817 C 75.945 88.951,76.507 89.299,76.917 89.489 C 77.100 89.574,77.468 89.836,77.734 90.072 C 78.001 90.307,78.282 90.500,78.359 90.500 C 78.437 90.500,78.640 90.631,78.810 90.792 C 78.981 90.952,79.556 91.458,80.089 91.917 C 81.064 92.756,82.160 93.866,82.579 94.440 C 82.704 94.610,82.847 94.709,82.897 94.658 C 83.170 94.385,79.765 91.199,77.750 89.843 C 76.556 89.039,74.188 87.636,73.412 87.273 C 73.048 87.103,72.605 86.887,72.428 86.795 C 72.251 86.702,71.914 86.568,71.678 86.497 C 71.443 86.426,71.100 86.317,70.917 86.254 C 70.588 86.141,70.588 86.143,70.907 86.403 M205.167 86.711 C 205.167 86.757,205.279 87.010,205.416 87.273 C 205.631 87.686,205.665 87.703,205.666 87.395 C 205.666 87.200,205.554 86.947,205.417 86.833 C 205.279 86.719,205.167 86.664,205.167 86.711 M171.862 87.586 C 171.748 87.837,171.688 88.077,171.730 88.119 C 171.843 88.232,172.198 87.510,172.130 87.305 C 172.097 87.208,171.977 87.335,171.862 87.586 M191.697 87.369 C 191.589 87.478,191.500 87.720,191.501 87.908 C 191.502 88.191,191.546 88.166,191.754 87.767 C 192.030 87.237,192.005 87.062,191.697 87.369 M205.935 88.434 C 206.073 88.765,206.246 89.159,206.318 89.309 C 206.391 89.460,206.564 89.846,206.702 90.167 C 207.231 91.395,207.407 91.694,207.478 91.482 C 207.518 91.364,207.464 91.238,207.358 91.203 C 207.253 91.168,207.167 91.025,207.167 90.887 C 207.167 90.748,207.066 90.436,206.942 90.192 C 206.550 89.420,206.193 88.596,206.084 88.208 C 206.025 88.002,205.911 87.833,205.831 87.833 C 205.750 87.833,205.797 88.104,205.935 88.434 M171.338 88.792 C 171.218 89.044,171.025 89.475,170.908 89.750 C 170.792 90.025,170.503 90.651,170.265 91.140 C 169.777 92.146,169.772 92.167,169.997 92.167 C 170.087 92.167,170.210 91.960,170.272 91.708 C 170.333 91.456,170.484 91.102,170.608 90.921 C 170.732 90.740,170.833 90.459,170.833 90.296 C 170.833 90.133,170.908 90.000,171.000 90.000 C 171.092 90.000,171.167 89.918,171.167 89.817 C 171.167 89.716,171.289 89.376,171.438 89.061 C 171.588 88.746,171.676 88.453,171.633 88.411 C 171.591 88.369,171.458 88.540,171.338 88.792 M191.197 88.536 C 191.089 88.645,191.000 88.887,191.001 89.075 C 191.002 89.358,191.046 89.333,191.254 88.934 C 191.530 88.404,191.505 88.228,191.197 88.536 M190.697 89.703 C 190.589 89.811,190.500 90.054,190.501 90.242 C 190.502 90.524,190.546 90.500,190.754 90.100 C 191.030 89.570,191.005 89.395,190.697 89.703 M190.083 91.042 C 190.025 91.248,189.875 91.642,189.751 91.917 C 189.215 93.101,189.000 93.645,189.000 93.817 C 189.000 93.918,188.925 94.000,188.833 94.000 C 188.742 94.000,188.669 94.169,188.673 94.375 C 188.677 94.651,188.771 94.552,189.030 94.000 C 189.878 92.190,190.476 90.667,190.338 90.667 C 190.256 90.667,190.141 90.835,190.083 91.042 M227.334 91.938 C 227.334 92.133,227.446 92.386,227.583 92.500 C 227.898 92.761,227.898 92.663,227.584 92.061 C 227.369 91.647,227.335 91.631,227.334 91.938 M207.505 92.010 C 207.508 92.142,207.621 92.396,207.755 92.574 C 207.928 92.802,207.998 92.826,207.995 92.657 C 207.992 92.525,207.879 92.271,207.745 92.093 C 207.572 91.865,207.502 91.841,207.505 92.010 M137.994 92.506 C 137.722 92.784,137.499 93.065,137.497 93.131 C 137.496 93.196,137.197 93.587,136.833 94.000 C 136.470 94.412,136.171 94.795,136.169 94.849 C 136.168 94.904,136.035 95.103,135.875 95.292 C 135.715 95.481,135.471 95.803,135.333 96.007 C 135.196 96.212,134.765 96.819,134.375 97.357 C 133.985 97.894,133.667 98.377,133.667 98.429 C 133.667 98.481,133.573 98.622,133.458 98.741 C 133.344 98.861,133.137 99.126,133.000 99.331 C 132.862 99.535,132.188 100.484,131.500 101.439 C 130.813 102.394,129.725 103.929,129.083 104.849 C 128.442 105.769,127.823 106.624,127.708 106.749 C 127.594 106.874,127.500 107.023,127.500 107.081 C 127.500 107.139,127.050 107.777,126.500 108.500 C 125.950 109.223,125.500 109.861,125.500 109.919 C 125.500 109.977,125.406 110.128,125.292 110.256 C 124.647 110.975,124.646 110.979,124.997 111.330 C 125.182 111.515,125.333 111.779,125.333 111.917 C 125.333 112.054,125.391 112.167,125.461 112.167 C 125.531 112.167,125.843 112.560,126.154 113.042 C 126.465 113.523,126.822 114.029,126.948 114.167 C 127.074 114.304,127.623 115.054,128.169 115.833 C 128.714 116.612,129.244 117.349,129.347 117.469 C 129.450 117.590,129.770 118.041,130.058 118.472 C 131.072 119.985,132.873 122.349,132.952 122.271 C 133.042 122.180,131.029 119.447,130.809 119.361 C 130.731 119.331,130.667 119.231,130.667 119.140 C 130.667 119.049,130.329 118.536,129.917 118.000 C 129.504 117.464,129.167 116.963,129.167 116.886 C 129.167 116.809,128.998 116.560,128.791 116.332 C 128.585 116.103,128.123 115.485,127.764 114.958 C 127.405 114.431,127.057 114.000,126.990 114.000 C 126.924 114.000,126.822 113.813,126.765 113.583 C 126.707 113.354,126.587 113.167,126.497 113.167 C 126.407 113.167,126.333 113.054,126.333 112.917 C 126.333 112.779,126.264 112.667,126.180 112.667 C 126.006 112.667,125.423 111.756,125.269 111.242 C 125.192 110.989,125.486 110.465,126.416 109.200 C 127.104 108.264,127.667 107.463,127.667 107.420 C 127.667 107.377,128.210 106.598,128.875 105.690 C 129.540 104.781,130.196 103.870,130.333 103.664 C 130.471 103.459,131.221 102.399,132.000 101.309 C 132.779 100.219,133.942 98.580,134.583 97.666 C 135.225 96.751,135.862 95.856,136.000 95.676 C 136.137 95.496,136.733 94.671,137.322 93.841 C 137.912 93.012,138.472 92.333,138.565 92.333 C 138.780 92.333,139.796 93.485,139.926 93.875 C 139.979 94.035,140.084 94.167,140.158 94.167 C 140.233 94.167,140.334 94.317,140.382 94.500 C 140.430 94.683,140.560 94.833,140.671 94.833 C 140.787 94.833,140.700 94.603,140.465 94.292 C 140.241 93.994,139.766 93.356,139.410 92.875 C 138.652 91.851,138.638 91.847,137.994 92.506 M169.426 93.047 C 169.248 93.434,169.039 93.881,168.962 94.042 C 168.876 94.220,168.887 94.333,168.991 94.333 C 169.084 94.333,169.209 94.127,169.269 93.875 C 169.329 93.623,169.487 93.291,169.620 93.137 C 169.754 92.984,169.837 92.742,169.806 92.601 C 169.773 92.450,169.616 92.635,169.426 93.047 M227.839 93.010 C 227.836 93.153,227.943 93.415,228.078 93.593 C 228.391 94.007,228.395 93.712,228.083 93.167 C 227.931 92.900,227.843 92.843,227.839 93.010 M208.005 93.176 C 208.008 93.309,208.121 93.562,208.255 93.740 C 208.428 93.968,208.498 93.993,208.495 93.824 C 208.492 93.691,208.379 93.438,208.245 93.260 C 208.072 93.032,208.002 93.007,208.005 93.176 M228.339 94.176 C 228.342 94.309,228.454 94.562,228.589 94.740 C 228.761 94.968,228.832 94.993,228.828 94.824 C 228.825 94.691,228.713 94.438,228.578 94.260 C 228.406 94.032,228.335 94.007,228.339 94.176 M208.500 94.377 C 208.500 94.424,208.612 94.677,208.749 94.939 C 208.965 95.353,208.998 95.369,208.999 95.062 C 209.000 94.867,208.887 94.614,208.750 94.500 C 208.612 94.386,208.500 94.331,208.500 94.377 M32.063 94.633 C 32.192 94.843,34.586 96.000,34.890 96.000 C 35.005 96.000,35.189 96.089,35.297 96.197 C 35.406 96.306,35.543 96.346,35.602 96.287 C 35.661 96.228,35.494 96.089,35.230 95.980 C 34.966 95.870,34.188 95.513,33.500 95.187 C 32.813 94.860,32.183 94.562,32.102 94.525 C 32.020 94.487,32.003 94.536,32.063 94.633 M168.541 94.996 C 168.238 95.481,168.286 95.808,168.596 95.366 C 168.740 95.160,168.834 94.918,168.804 94.827 C 168.774 94.737,168.655 94.813,168.541 94.996 M83.000 94.980 C 83.000 95.060,83.112 95.219,83.250 95.333 C 83.387 95.447,83.500 95.635,83.500 95.750 C 83.500 95.865,83.612 96.053,83.750 96.167 C 84.112 96.467,84.058 96.252,83.581 95.497 C 83.168 94.843,83.000 94.693,83.000 94.980 M188.364 95.036 C 188.255 95.145,188.167 95.387,188.168 95.575 C 188.169 95.858,188.212 95.833,188.421 95.434 C 188.697 94.904,188.672 94.728,188.364 95.036 M140.839 95.041 C 140.836 95.110,141.152 95.606,141.542 96.143 C 141.931 96.681,142.362 97.291,142.500 97.498 C 142.637 97.705,142.828 97.959,142.923 98.062 C 143.018 98.165,143.268 98.531,143.478 98.875 C 143.688 99.219,143.932 99.500,144.020 99.500 C 144.108 99.500,143.764 98.938,143.257 98.252 C 142.749 97.565,142.333 96.960,142.333 96.906 C 142.333 96.853,142.240 96.712,142.125 96.592 C 142.010 96.472,141.804 96.206,141.667 96.000 C 141.256 95.384,140.845 94.908,140.839 95.041 M228.833 95.417 C 228.833 95.554,228.908 95.667,229.000 95.667 C 229.092 95.667,229.167 95.786,229.167 95.933 C 229.167 96.079,229.266 96.398,229.388 96.641 C 229.509 96.884,229.734 97.333,229.888 97.639 C 230.041 97.944,230.167 98.291,230.167 98.410 C 230.167 98.529,230.279 98.719,230.417 98.833 C 230.704 99.072,230.738 98.958,230.506 98.539 C 230.355 98.268,230.039 97.559,229.316 95.875 C 229.002 95.143,228.833 94.983,228.833 95.417 M209.268 96.101 C 209.406 96.432,209.579 96.825,209.652 96.976 C 209.725 97.127,209.897 97.513,210.035 97.833 C 210.564 99.062,210.741 99.361,210.811 99.149 C 210.851 99.030,210.797 98.905,210.692 98.869 C 210.586 98.834,210.500 98.692,210.500 98.553 C 210.500 98.415,210.399 98.102,210.275 97.859 C 209.883 97.087,209.526 96.262,209.417 95.875 C 209.359 95.669,209.245 95.500,209.164 95.500 C 209.083 95.500,209.130 95.770,209.268 96.101 M168.030 96.181 C 167.909 96.374,167.842 96.564,167.881 96.604 C 167.997 96.719,168.370 96.193,168.307 96.004 C 168.275 95.908,168.150 95.988,168.030 96.181 M187.864 96.203 C 187.755 96.311,187.667 96.554,187.668 96.742 C 187.669 97.024,187.712 97.000,187.921 96.600 C 188.197 96.070,188.172 95.895,187.864 96.203 M36.083 96.454 C 36.267 96.499,36.512 96.613,36.629 96.708 C 36.746 96.803,36.894 96.829,36.958 96.765 C 37.132 96.590,36.641 96.336,36.167 96.355 C 35.823 96.369,35.809 96.386,36.083 96.454 M84.028 96.625 C 84.219 97.055,85.388 99.497,85.590 99.889 C 85.724 100.148,85.833 100.490,85.833 100.648 C 85.833 100.807,85.952 101.082,86.097 101.260 C 86.357 101.579,86.359 101.579,86.246 101.250 C 86.183 101.067,86.073 100.719,86.000 100.478 C 85.801 99.819,84.197 96.500,84.077 96.500 C 84.019 96.500,83.997 96.556,84.028 96.625 M37.917 97.088 C 38.749 97.388,38.834 97.386,38.426 97.078 C 38.249 96.943,37.911 96.837,37.676 96.841 C 37.323 96.847,37.364 96.889,37.917 97.088 M167.265 97.880 C 166.443 99.707,165.973 100.738,165.733 101.234 C 165.437 101.848,165.440 101.924,165.750 101.667 C 165.887 101.553,166.000 101.362,166.000 101.243 C 166.000 101.124,166.126 100.777,166.279 100.472 C 166.432 100.166,166.657 99.718,166.779 99.474 C 166.901 99.231,167.000 98.912,167.000 98.766 C 167.000 98.620,167.075 98.500,167.167 98.500 C 167.258 98.500,167.333 98.418,167.333 98.317 C 167.333 98.216,167.456 97.876,167.605 97.561 C 167.755 97.246,167.844 96.955,167.804 96.915 C 167.764 96.875,167.522 97.309,167.265 97.880 M187.364 97.369 C 187.255 97.478,187.167 97.720,187.168 97.908 C 187.169 98.191,187.212 98.166,187.421 97.767 C 187.697 97.237,187.672 97.062,187.364 97.369 M39.583 97.588 C 40.431 97.893,40.705 97.891,40.167 97.583 C 39.938 97.452,39.563 97.346,39.333 97.347 C 39.003 97.348,39.055 97.398,39.583 97.588 M41.470 98.101 C 41.865 98.240,42.315 98.320,42.470 98.279 C 42.673 98.226,42.649 98.200,42.385 98.186 C 42.184 98.175,41.973 98.092,41.917 98.000 C 41.860 97.908,41.574 97.837,41.282 97.841 C 40.762 97.849,40.766 97.855,41.470 98.101 M43.500 98.583 C 43.821 98.707,44.346 98.814,44.668 98.821 C 44.989 98.828,45.514 98.912,45.834 99.009 C 46.155 99.105,47.054 99.255,47.833 99.341 C 48.612 99.427,49.475 99.545,49.750 99.603 C 50.126 99.682,50.205 99.660,50.069 99.515 C 49.969 99.408,49.219 99.276,48.402 99.221 C 47.585 99.166,46.840 99.061,46.745 98.988 C 46.651 98.914,45.993 98.801,45.282 98.737 C 44.572 98.673,43.951 98.555,43.902 98.477 C 43.854 98.398,43.612 98.339,43.365 98.346 C 42.939 98.358,42.945 98.370,43.500 98.583 M186.750 98.708 C 186.640 99.096,186.283 99.920,185.891 100.692 C 185.768 100.936,185.667 101.248,185.667 101.387 C 185.667 101.525,185.580 101.668,185.475 101.703 C 185.370 101.738,185.316 101.864,185.355 101.982 C 185.426 102.194,185.602 101.895,186.131 100.667 C 186.269 100.346,186.442 99.960,186.515 99.809 C 186.922 98.967,187.132 98.333,187.003 98.333 C 186.922 98.333,186.808 98.502,186.750 98.708 M230.675 99.333 C 230.671 99.631,230.949 100.107,231.061 99.995 C 231.104 99.952,231.036 99.729,230.909 99.500 C 230.775 99.258,230.677 99.188,230.675 99.333 M210.839 99.676 C 210.842 99.809,210.954 100.062,211.089 100.240 C 211.261 100.468,211.332 100.493,211.328 100.324 C 211.325 100.191,211.213 99.938,211.078 99.760 C 210.906 99.532,210.835 99.507,210.839 99.676 M51.583 99.830 C 52.225 99.907,53.050 100.024,53.417 100.090 C 53.951 100.186,54.044 100.168,53.886 99.999 C 53.759 99.864,53.100 99.771,52.052 99.739 C 50.466 99.692,50.452 99.695,51.583 99.830 M144.167 99.768 C 144.167 99.823,144.381 100.142,144.643 100.476 C 144.904 100.810,145.310 101.390,145.545 101.765 C 145.779 102.140,146.071 102.553,146.194 102.683 C 146.316 102.813,146.707 103.350,147.062 103.876 C 147.417 104.403,147.776 104.833,147.860 104.833 C 147.944 104.833,147.582 104.252,147.055 103.542 C 146.528 102.831,145.695 101.669,145.204 100.958 C 144.370 99.751,144.167 99.518,144.167 99.768 M55.250 100.334 C 55.708 100.400,56.346 100.503,56.667 100.562 L 57.250 100.670 56.750 100.426 C 56.475 100.292,55.837 100.189,55.333 100.198 L 54.417 100.214 55.250 100.334 M231.167 100.455 C 231.167 100.556,231.274 100.852,231.406 101.111 C 231.642 101.577,231.972 102.300,232.994 104.583 C 233.281 105.225,233.624 105.962,233.758 106.222 C 233.891 106.481,234.000 106.791,234.000 106.910 C 234.000 107.029,234.112 107.219,234.250 107.333 C 234.560 107.591,234.563 107.515,234.267 106.901 C 234.138 106.634,233.838 105.985,233.600 105.458 C 233.362 104.931,232.988 104.106,232.769 103.625 C 231.836 101.571,231.666 101.178,231.661 101.051 C 231.653 100.836,231.167 100.250,231.167 100.455 M58.167 100.843 C 58.487 100.920,58.975 101.028,59.250 101.083 L 59.750 101.185 59.333 100.932 C 59.104 100.792,58.617 100.684,58.250 100.692 L 57.583 100.705 58.167 100.843 M211.339 100.843 C 211.342 100.975,211.454 101.229,211.589 101.407 C 211.761 101.635,211.832 101.659,211.828 101.490 C 211.825 101.358,211.713 101.104,211.578 100.926 C 211.406 100.698,211.335 100.674,211.339 100.843 M60.477 101.423 C 61.211 101.742,61.553 101.736,60.939 101.416 C 60.677 101.279,60.339 101.170,60.189 101.173 C 60.039 101.177,60.169 101.289,60.477 101.423 M61.894 101.918 C 62.157 102.055,62.439 102.167,62.523 102.167 C 62.880 102.167,64.992 103.296,65.833 103.937 C 66.786 104.663,67.043 104.930,67.555 105.723 C 67.723 105.983,67.901 106.155,67.950 106.105 C 68.118 105.938,66.477 104.000,66.167 104.000 C 66.075 104.000,66.000 103.929,66.000 103.842 C 66.000 103.687,65.359 103.276,64.792 103.068 C 64.631 103.009,64.500 102.895,64.500 102.814 C 64.500 102.733,64.421 102.667,64.324 102.667 C 64.145 102.667,62.816 102.117,62.294 101.827 C 62.135 101.739,61.872 101.667,61.711 101.668 C 61.511 101.668,61.570 101.748,61.894 101.918 M86.341 102.093 C 86.337 102.374,86.443 102.749,86.578 102.926 C 86.890 103.339,86.893 103.097,86.588 102.250 C 86.353 101.596,86.348 101.593,86.341 102.093 M211.919 102.083 C 212.334 103.178,213.575 103.083,198.758 103.083 L 185.432 103.083 185.331 102.667 C 185.233 102.257,185.229 102.257,185.133 102.619 C 184.940 103.340,184.881 103.337,198.852 103.293 L 212.250 103.250 212.303 102.878 C 212.332 102.673,212.229 102.335,212.074 102.128 C 211.834 101.805,211.811 101.799,211.919 102.083 M165.285 102.250 C 165.220 102.433,165.120 102.696,165.063 102.833 C 164.980 103.036,165.015 103.032,165.246 102.811 C 165.403 102.662,165.503 102.399,165.468 102.228 C 165.407 101.934,165.396 101.936,165.285 102.250 M164.702 103.572 C 164.423 104.185,164.449 104.313,164.762 103.866 C 164.907 103.660,164.998 103.410,164.964 103.310 C 164.931 103.210,164.813 103.328,164.702 103.572 M86.860 104.083 C 86.854 104.450,86.958 104.975,87.092 105.250 L 87.337 105.750 87.233 105.167 C 87.176 104.846,87.071 104.321,87.000 104.000 L 86.872 103.417 86.860 104.083 M164.208 104.663 C 163.905 105.148,163.953 105.475,164.262 105.033 C 164.407 104.827,164.500 104.584,164.470 104.494 C 164.440 104.404,164.322 104.480,164.208 104.663 M148.000 105.136 C 148.000 105.222,148.112 105.386,148.250 105.500 C 148.387 105.614,148.500 105.803,148.500 105.919 C 148.500 106.036,148.607 106.172,148.739 106.223 C 148.911 106.289,148.884 106.155,148.639 105.740 C 148.284 105.139,148.000 104.871,148.000 105.136 M163.510 106.250 C 163.036 107.334,162.501 108.504,162.302 108.891 C 162.215 109.061,162.183 109.239,162.232 109.288 C 162.281 109.337,162.407 109.160,162.512 108.897 C 162.616 108.633,162.770 108.304,162.852 108.167 C 162.935 108.029,163.045 107.804,163.097 107.667 C 163.150 107.529,163.299 107.218,163.430 106.974 C 163.560 106.731,163.667 106.418,163.667 106.280 C 163.667 106.141,163.753 105.999,163.858 105.964 C 163.964 105.929,164.010 105.791,163.962 105.658 C 163.908 105.510,163.733 105.737,163.510 106.250 M31.000 106.500 C 30.790 106.636,30.801 106.662,31.065 106.664 C 31.449 106.667,31.821 107.125,31.828 107.605 C 31.831 107.800,31.946 108.053,32.083 108.167 C 32.365 108.400,32.401 108.301,32.191 107.873 C 32.113 107.714,31.914 107.302,31.748 106.958 C 31.424 106.284,31.378 106.256,31.000 106.500 M68.224 106.745 C 68.330 106.971,68.442 107.081,68.474 106.989 C 68.556 106.752,68.373 106.333,68.188 106.333 C 68.100 106.333,68.116 106.515,68.224 106.745 M149.314 107.004 C 149.502 107.327,149.808 107.755,149.994 107.956 C 150.181 108.156,150.333 108.363,150.333 108.416 C 150.333 108.595,151.061 109.500,151.205 109.500 C 151.283 109.500,150.922 108.919,150.403 108.208 C 149.287 106.682,148.838 106.185,149.314 107.004 M30.093 106.922 C 29.834 107.118,29.822 107.167,30.031 107.167 C 30.175 107.167,30.386 107.054,30.500 106.917 C 30.764 106.599,30.516 106.602,30.093 106.922 M87.399 109.250 C 87.399 110.533,87.426 111.036,87.457 110.368 C 87.489 109.699,87.489 108.649,87.457 108.034 C 87.425 107.420,87.399 107.967,87.399 109.250 M27.750 108.149 C 26.742 108.674,25.591 109.272,25.192 109.480 C 24.794 109.687,24.499 109.888,24.538 109.927 C 24.615 110.003,26.697 108.986,26.835 108.805 C 26.882 108.743,27.126 108.642,27.377 108.578 C 27.628 108.515,27.834 108.416,27.835 108.357 C 27.836 108.298,28.248 108.067,28.752 107.843 C 29.255 107.619,29.667 107.376,29.667 107.301 C 29.667 107.134,29.896 107.033,27.750 108.149 M68.611 107.583 C 68.784 108.000,68.779 111.104,68.605 111.667 C 68.480 112.067,68.486 112.071,68.738 111.760 C 69.116 111.293,69.115 108.038,68.736 107.574 C 68.477 107.255,68.475 107.255,68.611 107.583 M234.501 107.938 C 234.500 108.133,234.612 108.386,234.750 108.500 C 235.065 108.761,235.065 108.663,234.751 108.061 C 234.535 107.647,234.502 107.631,234.501 107.938 M32.334 108.771 C 32.334 108.966,32.446 109.219,32.583 109.333 C 32.898 109.595,32.898 109.496,32.584 108.894 C 32.369 108.480,32.335 108.464,32.334 108.771 M235.011 109.000 C 235.011 109.138,235.121 109.396,235.255 109.574 C 235.567 109.985,235.563 109.714,235.250 109.167 C 235.112 108.925,235.012 108.855,235.011 109.000 M161.842 109.901 C 161.715 110.138,161.655 110.377,161.708 110.431 C 161.836 110.558,162.206 109.867,162.131 109.642 C 162.099 109.547,161.969 109.663,161.842 109.901 M32.889 109.878 C 33.061 110.370,34.362 112.208,35.034 112.909 C 35.382 113.271,35.667 113.627,35.667 113.700 C 35.667 113.773,35.749 113.833,35.849 113.833 C 35.949 113.833,35.705 113.457,35.307 112.996 C 34.909 112.536,34.179 111.580,33.685 110.871 C 33.191 110.163,32.833 109.716,32.889 109.878 M151.333 109.779 C 151.333 109.878,151.446 110.053,151.583 110.167 C 151.721 110.281,151.833 110.480,151.833 110.609 C 151.833 110.738,151.946 110.887,152.083 110.940 C 152.221 110.992,152.333 111.140,152.333 111.268 C 152.333 111.396,152.390 111.502,152.458 111.504 C 152.527 111.507,152.767 111.807,152.992 112.171 C 153.217 112.535,153.460 112.833,153.534 112.833 C 153.607 112.833,153.667 112.910,153.667 113.004 C 153.667 113.235,154.869 114.833,155.042 114.833 C 155.118 114.833,155.099 114.740,155.000 114.625 C 154.901 114.510,154.150 113.479,153.331 112.333 C 151.477 109.740,151.333 109.556,151.333 109.779 M23.760 110.255 C 23.501 110.451,23.488 110.500,23.698 110.500 C 23.842 110.500,24.053 110.388,24.167 110.250 C 24.431 109.932,24.183 109.935,23.760 110.255 M235.505 110.176 C 235.508 110.309,235.621 110.562,235.755 110.740 C 235.928 110.968,235.998 110.993,235.995 110.824 C 235.992 110.691,235.879 110.438,235.745 110.260 C 235.572 110.032,235.502 110.007,235.505 110.176 M22.760 110.755 C 22.501 110.951,22.488 111.000,22.698 111.000 C 22.842 111.000,23.053 110.888,23.167 110.750 C 23.431 110.432,23.183 110.435,22.760 110.755 M162.612 111.958 C 163.139 112.669,163.975 113.836,164.469 114.552 C 164.964 115.268,165.403 115.819,165.445 115.777 C 165.487 115.735,165.085 115.101,164.552 114.368 C 164.019 113.634,163.471 112.867,163.333 112.663 C 163.196 112.459,162.990 112.195,162.875 112.075 C 162.760 111.955,162.667 111.811,162.667 111.755 C 162.667 111.573,161.941 110.667,161.795 110.667 C 161.717 110.667,162.085 111.248,162.612 111.958 M21.908 111.157 C 21.821 111.243,21.126 111.625,20.363 112.006 C 19.601 112.387,19.011 112.733,19.053 112.776 C 19.147 112.869,22.134 111.354,22.262 111.148 C 22.383 110.951,22.109 110.958,21.908 111.157 M236.000 111.252 C 236.000 111.299,236.064 111.468,236.142 111.627 C 236.490 112.336,236.819 113.113,236.916 113.458 C 236.975 113.665,237.083 113.833,237.157 113.833 C 237.231 113.833,237.337 114.058,237.392 114.333 C 237.447 114.608,237.569 114.833,237.664 114.833 C 237.773 114.833,237.782 114.727,237.688 114.542 C 237.467 114.107,236.899 112.855,236.516 111.958 C 236.224 111.273,236.000 110.967,236.000 111.252 M68.112 112.860 C 67.528 114.208,66.725 115.230,65.490 116.201 C 65.175 116.448,65.007 116.655,65.118 116.659 C 65.339 116.667,67.296 114.783,67.619 114.250 C 68.145 113.382,68.534 112.520,68.477 112.349 C 68.443 112.245,68.278 112.475,68.112 112.860 M18.260 113.089 C 18.001 113.285,17.988 113.333,18.198 113.333 C 18.342 113.333,18.553 113.221,18.667 113.083 C 18.931 112.765,18.683 112.768,18.260 113.089 M87.027 113.477 C 86.920 113.832,86.839 114.376,86.846 114.686 C 86.861 115.327,86.882 115.282,87.175 113.957 C 87.419 112.855,87.315 112.516,87.027 113.477 M17.260 113.589 C 17.001 113.785,16.988 113.833,17.198 113.833 C 17.342 113.833,17.553 113.721,17.667 113.583 C 17.931 113.265,17.683 113.268,17.260 113.589 M16.292 114.110 C 15.776 114.381,15.707 114.842,16.083 115.500 C 16.257 115.803,16.323 115.840,16.327 115.635 C 16.331 115.480,16.258 115.307,16.167 115.250 C 15.818 115.035,15.986 114.373,16.417 114.265 C 16.646 114.207,16.833 114.087,16.833 113.997 C 16.833 113.907,16.815 113.841,16.792 113.851 C 16.769 113.861,16.544 113.977,16.292 114.110 M36.167 113.948 C 36.167 114.108,37.536 115.333,37.715 115.333 C 37.788 115.333,37.938 115.410,38.049 115.503 C 38.848 116.177,39.076 116.333,39.262 116.333 C 39.377 116.333,39.497 116.390,39.528 116.458 C 39.607 116.636,41.702 117.667,41.984 117.667 C 42.113 117.667,41.513 117.310,40.651 116.874 C 39.154 116.116,37.345 114.927,36.542 114.173 C 36.335 113.979,36.167 113.878,36.167 113.948 M155.167 115.132 C 155.167 115.230,155.279 115.422,155.417 115.560 C 155.554 115.697,155.667 115.882,155.667 115.970 C 155.667 116.059,155.790 116.178,155.940 116.236 C 156.142 116.314,156.172 116.286,156.053 116.129 C 155.965 116.012,155.730 115.700,155.530 115.436 C 155.330 115.171,155.167 115.035,155.167 115.132 M237.839 115.338 C 237.842 115.473,237.954 115.729,238.089 115.907 C 238.223 116.085,238.333 116.357,238.333 116.511 C 238.333 116.666,238.446 116.886,238.583 117.000 C 238.741 117.131,238.833 117.142,238.833 117.030 C 238.833 116.933,238.767 116.812,238.685 116.761 C 238.604 116.711,238.487 116.469,238.425 116.223 C 238.286 115.668,237.831 114.982,237.839 115.338 M86.514 115.975 C 86.414 116.160,86.342 116.523,86.353 116.781 C 86.366 117.113,86.393 117.153,86.445 116.917 C 86.485 116.733,86.601 116.415,86.703 116.209 C 86.937 115.738,86.758 115.517,86.514 115.975 M16.359 116.167 C 16.351 116.304,16.452 116.604,16.583 116.833 C 16.819 117.245,16.822 117.245,16.827 116.875 C 16.831 116.669,16.764 116.500,16.679 116.500 C 16.594 116.500,16.490 116.369,16.448 116.208 C 16.395 116.005,16.368 115.992,16.359 116.167 M166.410 117.248 C 166.918 117.935,167.333 118.573,167.333 118.665 C 167.333 118.758,167.391 118.833,167.461 118.833 C 167.531 118.833,167.838 119.214,168.143 119.679 C 168.447 120.145,168.733 120.490,168.777 120.446 C 168.821 120.402,168.533 119.919,168.137 119.372 C 167.741 118.826,167.304 118.209,167.167 118.002 C 167.029 117.795,166.823 117.528,166.708 117.408 C 166.594 117.288,166.500 117.145,166.500 117.088 C 166.500 116.906,165.775 116.000,165.629 116.000 C 165.551 116.000,165.902 116.562,166.410 117.248 M156.173 116.559 C 156.166 116.721,157.179 118.053,157.374 118.139 C 157.443 118.169,157.500 118.269,157.500 118.360 C 157.500 118.451,157.824 118.951,158.221 119.471 C 158.618 119.991,158.990 120.548,159.049 120.708 C 159.108 120.869,159.235 121.000,159.332 121.000 C 159.503 121.000,159.120 120.292,158.725 119.878 C 158.617 119.765,158.188 119.165,157.771 118.544 C 156.895 117.240,156.181 116.354,156.173 116.559 M63.750 117.181 C 63.292 117.444,62.987 117.661,63.072 117.663 C 63.304 117.669,64.650 116.995,64.759 116.819 C 64.911 116.573,64.638 116.671,63.750 117.181 M16.833 117.470 C 16.833 117.567,16.900 117.688,16.982 117.739 C 17.063 117.789,17.178 118.023,17.237 118.258 C 17.384 118.844,18.326 120.318,18.330 119.968 C 18.332 119.813,18.265 119.644,18.181 119.592 C 18.000 119.480,17.333 118.138,17.333 117.884 C 17.333 117.787,17.221 117.614,17.083 117.500 C 16.926 117.369,16.833 117.358,16.833 117.470 M86.014 117.641 C 85.914 117.827,85.839 118.152,85.846 118.364 C 85.854 118.596,85.893 118.650,85.942 118.500 C 85.987 118.362,86.107 118.081,86.207 117.875 C 86.437 117.403,86.257 117.186,86.014 117.641 M238.843 117.500 C 238.838 117.638,239.059 118.200,239.333 118.750 C 239.608 119.300,239.832 119.844,239.833 119.958 C 239.833 120.073,239.908 120.167,240.000 120.167 C 240.092 120.167,240.167 120.300,240.167 120.463 C 240.167 120.626,240.268 120.907,240.392 121.088 C 240.516 121.269,240.667 121.623,240.728 121.875 C 240.790 122.127,240.909 122.333,240.995 122.333 C 241.132 122.333,240.903 121.636,240.509 120.857 C 240.433 120.707,240.253 120.321,240.111 120.000 C 239.254 118.076,238.850 117.280,238.843 117.500 M42.574 117.922 C 42.751 118.057,43.089 118.163,43.324 118.159 C 43.677 118.153,43.636 118.111,43.083 117.912 C 42.251 117.612,42.166 117.614,42.574 117.922 M62.167 117.931 C 61.776 118.147,61.772 118.162,62.105 118.164 C 62.300 118.166,62.553 118.054,62.667 117.917 C 62.918 117.614,62.728 117.619,62.167 117.931 M44.074 118.422 C 44.251 118.557,44.613 118.667,44.876 118.667 C 45.140 118.667,45.505 118.747,45.688 118.845 C 47.413 119.768,58.707 119.746,59.568 118.818 C 59.706 118.669,59.649 118.649,59.333 118.736 C 57.167 119.330,51.268 119.587,48.667 119.200 C 46.859 118.932,44.833 118.505,44.461 118.315 C 43.993 118.076,43.717 118.152,44.074 118.422 M61.120 118.269 C 61.063 118.326,60.769 118.437,60.467 118.516 C 59.963 118.648,59.977 118.655,60.645 118.593 C 61.343 118.529,62.051 118.167,61.478 118.167 C 61.337 118.167,61.176 118.213,61.120 118.269 M85.421 119.312 C 85.364 119.575,85.020 120.380,84.658 121.100 C 83.943 122.525,83.927 122.565,84.152 122.426 C 84.291 122.340,84.592 121.742,85.291 120.167 C 85.433 119.846,85.613 119.453,85.691 119.294 C 85.872 118.925,85.870 118.833,85.680 118.833 C 85.596 118.833,85.479 119.049,85.421 119.312 M18.556 120.708 C 19.908 123.210,22.851 126.778,24.916 128.421 C 25.375 128.785,25.845 129.174,25.962 129.284 C 26.170 129.479,28.209 130.840,29.625 131.727 C 30.015 131.971,30.333 132.099,30.333 132.011 C 30.333 131.854,29.695 131.444,29.125 131.235 C 28.965 131.176,28.833 131.062,28.833 130.981 C 28.833 130.900,28.755 130.833,28.660 130.833 C 28.463 130.833,27.445 130.148,27.361 129.958 C 27.331 129.890,27.229 129.833,27.135 129.833 C 26.974 129.833,26.214 129.277,25.085 128.333 C 23.782 127.245,21.167 124.452,21.167 124.150 C 21.167 124.067,21.097 124.000,21.011 124.000 C 20.926 124.000,20.814 123.869,20.763 123.708 C 20.712 123.548,20.498 123.229,20.288 123.000 C 20.078 122.771,19.725 122.283,19.503 121.917 C 19.282 121.550,19.051 121.212,18.990 121.167 C 18.928 121.121,18.826 120.915,18.761 120.708 C 18.697 120.502,18.579 120.333,18.499 120.333 C 18.419 120.333,18.444 120.502,18.556 120.708 M177.278 120.778 C 177.065 120.990,177.168 121.206,177.393 121.020 C 177.559 120.882,183.297 120.843,198.846 120.874 L 220.073 120.917 220.284 121.333 C 220.429 121.619,220.496 121.662,220.498 121.470 C 220.505 120.625,221.635 120.667,198.683 120.667 C 186.971 120.667,177.339 120.717,177.278 120.778 M288.007 120.771 C 288.003 120.875,288.112 121.053,288.250 121.167 C 288.387 121.281,288.500 121.469,288.500 121.586 C 288.500 121.702,288.612 121.841,288.750 121.894 C 288.887 121.946,289.000 122.104,289.000 122.245 C 289.000 122.385,289.070 122.500,289.155 122.500 C 289.241 122.500,289.353 122.631,289.404 122.792 C 289.455 122.952,289.666 123.272,289.873 123.503 C 290.080 123.733,290.540 124.352,290.895 124.878 C 291.250 125.403,291.609 125.833,291.694 125.833 C 291.778 125.833,291.768 125.740,291.672 125.625 C 291.575 125.510,290.827 124.479,290.008 123.333 C 288.056 120.603,288.016 120.552,288.007 120.771 M159.506 121.220 C 159.503 121.296,159.594 121.458,159.708 121.581 C 159.823 121.705,160.254 122.304,160.667 122.913 C 161.079 123.521,161.622 124.259,161.872 124.551 C 162.123 124.844,162.329 125.138,162.331 125.204 C 162.333 125.310,164.535 128.404,164.997 128.951 C 165.090 129.062,165.167 129.233,165.167 129.332 C 165.167 129.430,165.279 129.554,165.417 129.606 C 165.554 129.659,165.667 129.767,165.667 129.847 C 165.667 129.959,168.156 133.460,168.798 134.250 C 168.873 134.342,168.984 134.548,169.045 134.708 C 169.106 134.869,169.242 135.000,169.348 135.000 C 169.453 135.000,169.354 134.756,169.127 134.458 C 168.900 134.160,168.269 133.279,167.724 132.500 C 166.388 130.591,165.218 128.961,165.003 128.712 C 164.906 128.599,164.588 128.149,164.295 127.712 C 164.003 127.275,163.272 126.242,162.671 125.417 C 162.070 124.592,161.298 123.504,160.956 123.000 C 160.176 121.854,159.514 121.041,159.506 121.220 M169.714 121.884 C 169.945 122.187,170.383 122.806,170.687 123.259 C 170.991 123.713,171.301 124.158,171.376 124.250 C 171.451 124.342,171.743 124.739,172.026 125.133 C 172.309 125.527,172.573 125.815,172.614 125.775 C 172.681 125.708,171.250 123.652,170.293 122.439 C 170.086 122.177,169.849 121.821,169.766 121.648 C 169.683 121.475,169.543 121.333,169.455 121.333 C 169.366 121.333,169.483 121.581,169.714 121.884 M176.864 121.536 C 176.755 121.645,176.667 121.887,176.668 122.075 C 176.669 122.358,176.712 122.333,176.921 121.934 C 177.197 121.404,177.172 121.228,176.864 121.536 M220.500 121.891 C 220.500 121.923,220.608 122.167,220.740 122.433 C 220.872 122.699,221.136 123.284,221.327 123.732 C 221.519 124.180,221.716 124.506,221.766 124.456 C 221.816 124.407,221.780 124.227,221.686 124.058 C 221.453 123.636,221.049 122.663,220.919 122.208 C 220.832 121.908,220.500 121.657,220.500 121.891 M133.943 123.879 C 135.277 125.805,135.702 126.354,135.790 126.266 C 135.832 126.223,135.781 126.090,135.676 125.969 C 135.571 125.849,135.116 125.225,134.667 124.583 C 134.217 123.942,133.770 123.326,133.674 123.215 C 133.578 123.105,133.500 122.944,133.500 122.858 C 133.500 122.772,133.386 122.659,133.247 122.605 C 133.107 122.552,133.420 123.125,133.943 123.879 M176.364 122.703 C 176.255 122.811,176.164 123.016,176.161 123.158 C 176.158 123.300,176.046 123.562,175.911 123.740 C 175.777 123.918,175.667 124.199,175.667 124.365 C 175.667 124.531,175.592 124.667,175.500 124.667 C 175.408 124.667,175.333 124.746,175.333 124.842 C 175.333 125.027,174.779 126.362,174.483 126.891 C 174.388 127.061,174.351 127.240,174.401 127.290 C 174.451 127.340,174.648 127.014,174.840 126.565 C 175.243 125.620,175.718 124.587,176.279 123.435 C 176.685 122.600,176.713 122.353,176.364 122.703 M241.168 122.771 C 241.167 122.966,241.279 123.219,241.417 123.333 C 241.731 123.595,241.732 123.496,241.418 122.894 C 241.202 122.480,241.169 122.464,241.168 122.771 M83.667 122.917 C 83.549 123.059,83.490 123.212,83.536 123.258 C 83.582 123.304,83.716 123.225,83.833 123.083 C 83.951 122.941,84.010 122.788,83.964 122.742 C 83.918 122.696,83.784 122.775,83.667 122.917 M300.248 124.458 C 300.749 125.169,301.592 126.371,302.121 127.130 C 303.299 128.818,303.667 129.272,303.667 129.037 C 303.667 128.938,303.569 128.758,303.449 128.637 C 303.329 128.516,303.182 128.285,303.121 128.125 C 303.060 127.965,302.933 127.833,302.839 127.833 C 302.744 127.833,302.667 127.759,302.667 127.667 C 302.667 127.576,302.348 127.061,301.958 126.523 C 301.569 125.985,301.137 125.376,301.000 125.169 C 300.862 124.962,300.672 124.708,300.577 124.605 C 300.482 124.501,300.232 124.135,300.022 123.792 C 299.812 123.448,299.571 123.167,299.488 123.167 C 299.405 123.167,299.747 123.748,300.248 124.458 M83.048 123.833 C 83.000 124.017,82.908 124.167,82.842 124.167 C 82.777 124.167,82.478 124.508,82.178 124.926 C 81.534 125.823,79.068 128.333,78.831 128.333 C 78.741 128.333,78.667 128.396,78.667 128.472 C 78.667 128.589,77.764 129.279,76.015 130.500 C 75.350 130.964,74.419 131.499,73.958 131.683 C 73.706 131.784,73.500 131.933,73.500 132.014 C 73.500 132.096,73.894 131.950,74.375 131.689 C 77.302 130.106,79.898 127.959,82.061 125.333 C 83.573 123.499,83.572 123.500,83.338 123.500 C 83.227 123.500,83.096 123.650,83.048 123.833 M241.668 123.938 C 241.667 124.133,241.779 124.386,241.917 124.500 C 242.231 124.761,242.232 124.663,241.918 124.061 C 241.702 123.647,241.669 123.631,241.668 123.938 M221.839 124.843 C 221.842 124.975,221.954 125.229,222.089 125.407 C 222.261 125.635,222.332 125.659,222.328 125.490 C 222.325 125.358,222.213 125.104,222.078 124.926 C 221.906 124.698,221.835 124.674,221.839 124.843 M242.172 125.010 C 242.175 125.142,242.287 125.396,242.422 125.574 C 242.594 125.802,242.665 125.826,242.661 125.657 C 242.658 125.525,242.546 125.271,242.411 125.093 C 242.239 124.865,242.168 124.841,242.172 125.010 M222.339 125.926 C 222.350 126.206,222.821 126.929,222.822 126.667 C 222.822 126.529,222.713 126.271,222.578 126.093 C 222.443 125.915,222.336 125.840,222.339 125.926 M172.782 126.208 C 173.650 127.366,174.052 127.833,174.181 127.833 C 174.449 127.833,174.344 127.526,174.042 127.428 C 173.881 127.376,173.579 127.034,173.370 126.667 C 173.161 126.300,172.908 126.000,172.808 126.000 C 172.690 126.000,172.681 126.073,172.782 126.208 M242.667 126.093 C 242.668 126.179,242.892 126.700,243.167 127.250 C 243.441 127.800,243.666 128.344,243.666 128.458 C 243.666 128.573,243.742 128.667,243.833 128.667 C 243.925 128.667,244.000 128.802,244.000 128.968 C 244.000 129.134,244.110 129.415,244.245 129.593 C 244.520 129.957,244.583 129.816,244.344 129.373 C 244.059 128.846,243.167 126.835,243.161 126.708 C 243.153 126.519,242.667 125.913,242.667 126.093 M291.841 126.113 C 291.837 126.221,291.946 126.422,292.083 126.560 C 292.221 126.697,292.333 126.890,292.333 126.988 C 292.333 127.086,292.399 127.167,292.480 127.167 C 292.561 127.167,292.913 127.617,293.264 128.167 C 293.614 128.717,293.961 129.167,294.034 129.167 C 294.107 129.167,294.167 129.246,294.167 129.343 C 294.167 129.440,294.617 130.111,295.167 130.833 C 295.717 131.556,296.167 132.218,296.167 132.306 C 296.167 132.393,296.281 132.508,296.421 132.562 C 296.679 132.661,296.192 131.925,293.730 128.500 C 291.886 125.934,291.849 125.887,291.841 126.113 M136.119 126.958 C 136.280 127.210,136.488 127.501,136.581 127.605 C 136.674 127.708,136.862 127.961,137.000 128.168 C 137.909 129.532,139.053 131.003,139.139 130.917 C 139.195 130.861,139.167 130.763,139.077 130.699 C 138.987 130.636,138.727 130.303,138.499 129.959 C 138.270 129.616,138.027 129.335,137.958 129.334 C 137.890 129.334,137.833 129.253,137.833 129.154 C 137.833 129.055,137.509 128.549,137.112 128.029 C 136.716 127.509,136.343 126.952,136.284 126.792 C 136.225 126.631,136.098 126.500,136.001 126.500 C 135.905 126.500,135.958 126.706,136.119 126.958 M222.833 127.044 C 222.833 127.090,222.945 127.343,223.082 127.606 C 223.298 128.020,223.331 128.036,223.332 127.729 C 223.333 127.534,223.221 127.281,223.083 127.167 C 222.946 127.053,222.833 126.997,222.833 127.044 M223.333 128.211 C 223.333 128.257,223.445 128.510,223.582 128.773 C 223.798 129.186,223.831 129.203,223.832 128.895 C 223.833 128.700,223.721 128.447,223.583 128.333 C 223.446 128.219,223.333 128.164,223.333 128.211 M224.101 129.934 C 224.240 130.265,224.414 130.659,224.490 130.809 C 224.566 130.960,224.724 131.289,224.842 131.541 C 224.960 131.793,225.093 131.962,225.139 131.917 C 225.184 131.871,225.028 131.440,224.791 130.959 C 224.554 130.477,224.312 129.915,224.252 129.708 C 224.193 129.502,224.078 129.333,223.997 129.333 C 223.916 129.333,223.963 129.604,224.101 129.934 M304.194 130.097 C 304.779 130.911,305.000 131.119,305.000 130.857 C 305.000 130.768,304.941 130.669,304.868 130.639 C 304.795 130.608,304.564 130.302,304.354 129.958 C 304.144 129.615,303.899 129.333,303.809 129.333 C 303.719 129.333,303.893 129.677,304.194 130.097 M244.502 130.171 C 244.501 130.311,244.601 130.574,244.725 130.755 C 244.849 130.935,245.000 131.290,245.062 131.542 C 245.123 131.794,245.247 132.000,245.337 132.000 C 245.561 132.000,245.562 132.003,245.002 130.898 C 244.728 130.358,244.503 130.031,244.502 130.171 M139.528 131.760 C 139.882 132.361,140.167 132.629,140.167 132.364 C 140.167 132.278,140.054 132.114,139.917 132.000 C 139.779 131.886,139.667 131.697,139.667 131.581 C 139.667 131.464,139.559 131.328,139.428 131.277 C 139.255 131.211,139.283 131.345,139.528 131.760 M305.361 131.760 C 305.716 132.361,306.000 132.629,306.000 132.364 C 306.000 132.278,305.887 132.114,305.750 132.000 C 305.612 131.886,305.500 131.697,305.500 131.581 C 305.500 131.464,305.393 131.328,305.261 131.277 C 305.089 131.211,305.116 131.345,305.361 131.760 M72.667 132.417 C 72.403 132.735,72.650 132.732,73.074 132.411 C 73.333 132.215,73.345 132.167,73.136 132.167 C 72.992 132.167,72.781 132.279,72.667 132.417 M225.169 132.255 C 225.174 132.640,226.150 134.404,226.158 134.042 C 226.163 133.835,226.100 133.667,226.018 133.667 C 225.936 133.667,225.819 133.467,225.758 133.222 C 225.641 132.756,225.165 131.974,225.169 132.255 M245.501 132.438 C 245.500 132.633,245.612 132.886,245.750 133.000 C 246.065 133.261,246.065 133.163,245.751 132.561 C 245.535 132.147,245.502 132.131,245.501 132.438 M31.894 132.918 C 32.496 133.232,32.595 133.231,32.333 132.917 C 32.219 132.779,31.966 132.667,31.771 132.668 C 31.464 132.669,31.480 132.702,31.894 132.918 M71.645 132.944 C 71.436 133.198,71.452 133.203,71.833 133.005 C 72.392 132.714,72.434 132.667,72.132 132.667 C 71.990 132.667,71.771 132.791,71.645 132.944 M141.332 134.292 C 141.974 135.185,142.647 136.104,142.827 136.333 L 143.155 136.750 156.119 136.800 C 169.447 136.851,170.500 136.823,170.500 136.406 C 170.500 136.275,170.444 136.166,170.375 136.166 C 170.306 136.165,170.116 135.930,169.953 135.643 C 169.790 135.356,169.614 135.164,169.561 135.216 C 169.509 135.269,169.670 135.579,169.920 135.906 L 170.373 136.500 156.728 136.500 L 143.083 136.499 142.500 135.626 C 141.874 134.689,141.700 134.452,141.375 134.089 C 141.260 133.962,141.167 133.811,141.167 133.755 C 141.167 133.577,140.443 132.667,140.301 132.667 C 140.226 132.667,140.690 133.398,141.332 134.292 M296.667 132.924 C 296.667 133.014,296.835 133.275,297.042 133.504 C 297.248 133.734,297.707 134.352,298.062 134.878 C 298.417 135.403,298.776 135.833,298.860 135.833 C 298.944 135.833,298.588 135.252,298.069 134.542 C 296.993 133.069,296.667 132.693,296.667 132.924 M33.144 133.423 C 33.877 133.742,34.220 133.736,33.606 133.416 C 33.343 133.279,33.006 133.170,32.856 133.173 C 32.706 133.177,32.836 133.289,33.144 133.423 M70.426 133.422 C 70.015 133.733,70.286 133.730,70.833 133.417 C 71.075 133.279,71.145 133.178,71.000 133.178 C 70.862 133.178,70.604 133.287,70.426 133.422 M34.500 133.917 C 34.729 134.048,35.067 134.157,35.250 134.160 C 35.516 134.164,35.487 134.114,35.106 133.916 C 34.475 133.586,33.924 133.587,34.500 133.917 M69.000 133.931 C 68.448 134.237,68.812 134.232,69.523 133.923 C 69.890 133.763,69.969 133.683,69.750 133.690 C 69.567 133.695,69.229 133.803,69.000 133.931 M36.000 134.417 C 36.229 134.548,36.557 134.658,36.728 134.661 C 36.899 134.664,37.424 134.787,37.894 134.933 C 39.535 135.445,39.729 135.494,39.808 135.414 C 39.963 135.259,39.688 135.138,38.972 135.047 C 38.575 134.996,38.171 134.893,38.075 134.818 C 37.979 134.743,37.583 134.631,37.196 134.569 C 36.809 134.507,36.452 134.391,36.403 134.311 C 36.354 134.232,36.149 134.169,35.948 134.173 C 35.596 134.178,35.597 134.187,36.000 134.417 M67.750 134.333 C 67.693 134.425,67.494 134.500,67.307 134.500 C 67.120 134.500,66.731 134.606,66.442 134.735 C 66.153 134.864,65.589 135.008,65.188 135.055 C 64.787 135.102,64.375 135.231,64.271 135.343 C 64.126 135.500,64.177 135.518,64.500 135.425 C 64.729 135.359,65.217 135.241,65.583 135.162 C 67.420 134.771,68.984 134.182,68.218 134.172 C 68.017 134.169,67.807 134.242,67.750 134.333 M226.167 134.544 C 226.167 134.590,226.279 134.843,226.416 135.106 C 226.631 135.520,226.665 135.536,226.666 135.229 C 226.666 135.034,226.554 134.781,226.417 134.667 C 226.279 134.553,226.167 134.497,226.167 134.544 M40.833 135.651 C 41.246 135.722,41.808 135.840,42.083 135.912 C 42.493 136.019,42.546 136.003,42.377 135.824 C 42.260 135.699,41.723 135.587,41.127 135.563 C 40.162 135.525,40.140 135.531,40.833 135.651 M62.042 135.672 C 61.512 135.885,61.575 136.062,62.125 135.908 C 62.377 135.838,62.921 135.727,63.333 135.662 L 64.083 135.545 63.250 135.533 C 62.792 135.526,62.248 135.589,62.042 135.672 M226.670 135.792 C 226.672 135.860,226.818 136.104,226.994 136.333 L 227.314 136.750 263.124 136.793 C 300.758 136.838,300.083 136.850,299.234 136.158 C 298.969 135.942,298.949 135.948,299.047 136.208 C 299.151 136.486,297.374 136.500,263.180 136.500 L 227.203 136.500 227.098 136.083 C 227.005 135.711,226.661 135.477,226.670 135.792 M44.000 136.153 C 44.504 136.224,45.254 136.335,45.667 136.401 C 46.301 136.503,46.366 136.489,46.087 136.314 C 45.905 136.200,45.155 136.089,44.420 136.066 C 43.201 136.029,43.164 136.037,44.000 136.153 M58.417 136.260 L 57.750 136.494 58.583 136.391 C 59.042 136.334,59.829 136.234,60.333 136.168 L 61.250 136.049 60.167 136.037 C 59.571 136.031,58.783 136.131,58.417 136.260 M50.551 136.624 C 51.541 136.654,53.116 136.654,54.051 136.624 C 54.985 136.595,54.175 136.570,52.250 136.571 C 50.325 136.571,49.560 136.595,50.551 136.624 ","stroke":"none","fill":"#545454","fill-rule":"evenodd"}}),_c('path',{attrs:{"id":"path2","d":"M164.065 18.707 C 163.801 19.097,163.542 19.454,163.489 19.500 C 163.390 19.587,162.204 21.325,161.917 21.805 C 161.825 21.958,161.656 22.143,161.542 22.217 C 161.427 22.290,161.333 22.452,161.333 22.578 C 161.333 22.703,161.268 22.831,161.188 22.861 C 161.062 22.910,159.543 25.032,159.083 25.804 C 158.992 25.958,158.823 26.143,158.708 26.217 C 158.594 26.290,158.500 26.424,158.500 26.515 C 158.500 26.606,158.424 26.771,158.331 26.882 C 157.771 27.549,157.000 28.673,157.000 28.823 C 157.000 28.921,156.940 29.000,156.867 29.000 C 156.794 29.000,156.550 29.298,156.325 29.662 C 156.100 30.026,155.860 30.326,155.792 30.329 C 155.723 30.331,155.667 30.442,155.667 30.575 C 155.667 30.708,155.573 30.877,155.458 30.950 C 155.214 31.106,154.865 31.627,154.726 32.042 C 154.672 32.202,154.568 32.333,154.494 32.333 C 154.421 32.333,154.188 32.615,153.978 32.958 C 153.768 33.302,153.518 33.668,153.423 33.771 C 153.328 33.875,153.137 34.129,153.000 34.336 C 152.862 34.543,152.431 35.152,152.042 35.690 C 151.652 36.228,151.333 36.742,151.333 36.834 C 151.333 36.925,151.256 37.000,151.161 37.000 C 151.067 37.000,150.939 37.131,150.878 37.292 C 150.817 37.452,150.703 37.658,150.626 37.750 C 150.548 37.842,150.116 38.442,149.667 39.083 C 149.217 39.725,148.770 40.341,148.674 40.451 C 148.578 40.562,148.500 40.723,148.500 40.808 C 148.500 40.894,148.387 41.008,148.250 41.060 C 148.112 41.113,148.000 41.239,148.000 41.341 C 148.000 41.442,147.662 41.964,147.250 42.500 C 146.837 43.036,146.500 43.555,146.500 43.654 C 146.500 43.753,146.440 43.833,146.367 43.833 C 146.294 43.833,146.050 44.131,145.825 44.496 C 145.600 44.860,145.360 45.160,145.292 45.162 C 145.223 45.165,145.167 45.275,145.167 45.408 C 145.167 45.541,145.073 45.710,144.958 45.783 C 144.714 45.939,144.365 46.460,144.226 46.875 C 144.172 47.035,144.068 47.167,143.994 47.167 C 143.921 47.167,143.688 47.448,143.478 47.792 C 143.268 48.135,143.018 48.501,142.923 48.605 C 142.828 48.708,142.637 48.962,142.500 49.169 C 142.362 49.376,141.931 49.985,141.542 50.523 C 141.152 51.061,140.833 51.568,140.833 51.649 C 140.833 51.731,140.721 51.841,140.583 51.894 C 140.446 51.946,140.333 52.072,140.333 52.173 C 140.333 52.274,140.240 52.458,140.125 52.581 C 140.010 52.705,139.579 53.304,139.167 53.913 C 138.754 54.521,138.212 55.259,137.961 55.551 C 137.710 55.844,137.504 56.145,137.503 56.221 C 137.501 56.297,137.162 56.797,136.750 57.333 C 136.337 57.869,136.000 58.382,136.000 58.473 C 136.000 58.564,135.935 58.664,135.855 58.694 C 135.736 58.740,134.427 60.559,133.750 61.618 C 133.658 61.762,133.415 62.067,133.208 62.297 C 133.002 62.527,132.833 62.768,132.833 62.832 C 132.833 62.896,132.702 63.103,132.542 63.292 C 132.381 63.481,132.137 63.803,132.000 64.007 C 131.862 64.212,131.431 64.819,131.042 65.357 C 130.213 66.501,130.168 66.937,130.792 67.815 C 131.044 68.170,131.362 68.626,131.500 68.829 C 131.637 69.032,131.881 69.352,132.042 69.541 C 132.202 69.730,132.333 69.937,132.333 70.001 C 132.333 70.065,132.502 70.306,132.708 70.536 C 132.915 70.766,133.158 71.069,133.250 71.211 C 133.827 72.099,135.060 73.872,135.223 74.047 C 135.329 74.161,135.672 74.628,135.984 75.086 C 136.295 75.543,136.633 75.993,136.734 76.087 C 136.834 76.181,136.992 76.382,137.083 76.533 C 137.573 77.343,139.064 79.424,139.188 79.472 C 139.268 79.503,139.333 79.617,139.333 79.727 C 139.333 79.836,139.558 80.172,139.833 80.473 C 140.108 80.774,140.333 81.061,140.333 81.111 C 140.333 81.161,140.558 81.486,140.833 81.833 C 141.108 82.181,141.333 82.548,141.333 82.649 C 141.333 82.750,141.403 82.833,141.489 82.833 C 141.574 82.833,141.687 82.965,141.740 83.125 C 141.826 83.385,142.314 84.026,143.073 84.875 C 143.476 85.326,143.579 85.256,144.571 83.875 C 145.080 83.165,145.571 82.495,145.660 82.388 C 145.859 82.148,147.519 79.750,147.750 79.367 C 147.842 79.215,147.999 79.014,148.100 78.921 C 148.200 78.827,148.517 78.392,148.805 77.955 C 149.092 77.517,149.403 77.067,149.497 76.955 C 150.036 76.306,151.167 74.640,151.167 74.494 C 151.167 74.400,151.279 74.280,151.417 74.227 C 151.554 74.174,151.667 74.061,151.667 73.975 C 151.667 73.889,151.745 73.729,151.841 73.618 C 151.937 73.507,152.384 72.892,152.833 72.250 C 153.283 71.608,153.730 70.993,153.826 70.882 C 153.922 70.771,154.000 70.611,154.000 70.525 C 154.000 70.439,154.112 70.326,154.250 70.273 C 154.387 70.220,154.500 70.094,154.500 69.993 C 154.500 69.891,154.837 69.369,155.250 68.833 C 155.662 68.297,156.000 67.778,156.000 67.679 C 156.000 67.581,156.060 67.500,156.133 67.500 C 156.206 67.500,156.553 67.050,156.903 66.500 C 157.253 65.950,157.597 65.500,157.667 65.500 C 157.737 65.500,157.839 65.369,157.892 65.208 C 158.019 64.832,158.305 64.415,158.875 63.774 C 159.127 63.491,159.333 63.195,159.333 63.118 C 159.333 63.040,159.427 62.878,159.542 62.759 C 159.656 62.639,159.862 62.371,160.000 62.164 C 160.137 61.957,160.569 61.348,160.958 60.810 C 161.348 60.272,161.667 59.766,161.667 59.684 C 161.667 59.602,161.779 59.492,161.917 59.440 C 162.054 59.387,162.167 59.263,162.167 59.165 C 162.167 59.066,162.245 58.895,162.341 58.785 C 162.436 58.674,163.108 57.758,163.833 56.750 C 164.559 55.742,165.230 54.826,165.326 54.715 C 165.422 54.605,165.500 54.465,165.500 54.406 C 165.500 54.347,165.725 54.014,166.000 53.667 C 166.275 53.319,166.500 52.952,166.500 52.851 C 166.500 52.750,166.569 52.667,166.653 52.667 C 166.737 52.667,166.978 52.385,167.188 52.042 C 167.397 51.698,167.629 51.392,167.701 51.361 C 167.774 51.331,167.833 51.224,167.833 51.125 C 167.833 51.026,167.947 50.826,168.085 50.681 C 168.527 50.218,169.833 48.339,169.833 48.166 C 169.833 48.075,169.911 48.000,170.005 48.000 C 170.100 48.000,170.227 47.869,170.288 47.708 C 170.350 47.548,170.462 47.342,170.538 47.250 C 171.084 46.591,172.667 44.297,172.667 44.164 C 172.667 44.074,172.744 44.000,172.839 44.000 C 172.933 44.000,173.065 43.861,173.130 43.691 C 173.196 43.521,173.421 43.165,173.629 42.899 C 173.838 42.634,174.378 41.892,174.830 41.250 C 175.282 40.608,175.730 39.993,175.826 39.882 C 175.922 39.771,176.000 39.603,176.000 39.507 C 176.000 39.411,176.077 39.333,176.172 39.333 C 176.266 39.333,176.392 39.202,176.451 39.042 C 176.510 38.881,176.882 38.324,177.279 37.804 C 177.676 37.284,178.000 36.778,178.000 36.679 C 178.000 36.581,178.057 36.500,178.128 36.500 C 178.234 36.500,179.674 34.488,180.250 33.534 C 180.342 33.382,180.500 33.181,180.602 33.087 C 180.704 32.993,181.038 32.542,181.345 32.083 C 181.652 31.625,181.962 31.175,182.035 31.083 C 182.653 30.304,183.667 28.799,183.667 28.661 C 183.667 28.567,183.779 28.446,183.917 28.394 C 184.054 28.341,184.167 28.225,184.167 28.137 C 184.167 28.049,184.260 27.872,184.375 27.744 C 184.700 27.381,184.869 27.149,185.583 26.080 C 185.950 25.532,186.306 25.058,186.375 25.028 C 186.444 24.997,186.500 24.866,186.500 24.736 C 186.500 24.606,186.565 24.500,186.643 24.500 C 186.762 24.500,187.741 23.133,188.417 22.024 C 188.508 21.873,188.623 21.712,188.671 21.667 C 189.000 21.354,189.833 20.168,189.833 20.012 C 189.833 19.908,189.946 19.780,190.083 19.727 C 190.221 19.674,190.333 19.559,190.333 19.470 C 190.333 19.382,190.450 19.193,190.592 19.051 C 190.735 18.908,190.828 18.632,190.801 18.438 L 190.750 18.083 177.648 18.041 L 164.547 17.998 164.065 18.707 M190.580 18.327 C 190.697 18.517,190.296 19.163,188.644 21.444 C 187.969 22.375,187.304 23.301,187.167 23.500 C 187.029 23.699,186.375 24.625,185.713 25.556 C 185.051 26.488,183.979 28.000,183.330 28.917 C 182.681 29.833,181.497 31.495,180.700 32.610 C 179.902 33.725,179.137 34.803,179.000 35.007 C 178.862 35.210,178.225 36.111,177.583 37.009 C 175.200 40.343,174.572 41.229,174.115 41.898 C 173.858 42.275,173.540 42.733,173.408 42.917 C 173.276 43.100,172.587 44.059,171.876 45.048 C 171.165 46.037,170.058 47.596,169.417 48.514 C 168.775 49.431,167.612 51.072,166.833 52.159 C 166.054 53.247,165.304 54.303,165.167 54.507 C 165.029 54.710,164.392 55.612,163.750 56.511 C 163.108 57.410,162.021 58.943,161.333 59.916 C 160.646 60.890,159.428 62.601,158.628 63.719 C 157.827 64.836,157.077 65.883,156.961 66.045 C 156.845 66.208,156.225 67.091,155.583 68.009 C 154.942 68.926,153.779 70.568,153.000 71.658 C 152.221 72.747,150.987 74.489,150.259 75.528 C 149.531 76.567,148.289 78.317,147.499 79.417 C 146.710 80.517,145.517 82.185,144.849 83.125 C 144.182 84.065,143.582 84.833,143.516 84.833 C 143.287 84.833,142.879 84.410,142.317 83.587 C 142.005 83.131,141.691 82.681,141.620 82.587 C 141.548 82.493,140.836 81.502,140.036 80.385 C 136.346 75.224,134.987 73.329,133.743 71.606 C 131.365 68.313,130.500 67.023,130.500 66.768 C 130.500 66.563,131.406 65.189,132.930 63.083 C 133.063 62.900,133.544 62.225,134.000 61.583 C 134.456 60.942,134.938 60.267,135.071 60.083 C 135.205 59.900,135.525 59.442,135.782 59.065 C 136.039 58.688,136.662 57.801,137.167 57.093 C 138.905 54.655,140.420 52.516,141.667 50.740 C 142.354 49.761,143.442 48.225,144.083 47.328 C 144.725 46.430,145.362 45.530,145.500 45.328 C 145.737 44.979,146.621 43.728,149.325 39.917 C 149.975 39.000,151.049 37.478,151.712 36.535 C 152.375 35.592,153.554 33.930,154.333 32.841 C 155.112 31.753,155.862 30.697,156.000 30.495 C 156.137 30.292,156.775 29.387,157.417 28.483 C 158.058 27.579,159.108 26.090,159.750 25.174 C 160.392 24.258,161.392 22.851,161.973 22.046 C 162.554 21.242,163.283 20.192,163.592 19.714 C 164.713 17.984,163.050 18.167,177.657 18.167 C 185.696 18.167,190.517 18.227,190.580 18.327 M51.250 48.840 C 50.883 48.917,49.758 48.990,48.750 49.000 C 47.742 49.011,46.542 49.094,46.083 49.186 C 45.625 49.277,44.696 49.417,44.020 49.498 C 43.343 49.578,42.709 49.724,42.611 49.822 C 42.383 50.050,42.600 50.053,43.539 49.835 C 46.447 49.162,55.782 48.841,58.445 49.323 C 58.980 49.420,59.942 49.569,60.583 49.654 C 61.225 49.739,62.012 49.861,62.333 49.926 C 62.799 50.020,62.877 50.002,62.720 49.834 C 62.612 49.718,61.975 49.586,61.304 49.540 C 60.632 49.495,59.941 49.383,59.767 49.293 C 59.593 49.203,57.943 49.069,56.101 48.996 C 54.258 48.923,52.563 48.826,52.333 48.781 C 52.104 48.736,51.617 48.762,51.250 48.840 M80.825 48.908 C 80.582 49.151,80.637 49.666,80.917 49.773 C 81.054 49.826,81.167 49.939,81.167 50.025 C 81.167 50.111,81.245 50.271,81.341 50.382 C 81.437 50.493,82.127 51.446,82.875 52.500 C 83.622 53.554,84.725 55.103,85.325 55.942 C 85.926 56.781,86.529 57.634,86.667 57.837 C 86.804 58.041,87.010 58.305,87.125 58.425 C 87.240 58.545,87.333 58.689,87.333 58.745 C 87.333 58.800,87.843 59.537,88.466 60.381 C 89.088 61.226,89.782 62.197,90.007 62.541 C 90.232 62.884,90.473 63.165,90.542 63.166 C 90.610 63.166,90.667 63.241,90.667 63.331 C 90.667 63.421,91.116 64.115,91.664 64.873 C 92.938 66.630,92.867 66.532,94.292 68.543 C 96.597 71.796,98.480 74.418,98.656 74.618 C 98.754 74.729,98.833 74.865,98.833 74.922 C 98.833 74.978,98.927 75.127,99.042 75.254 C 99.156 75.381,99.813 76.280,100.500 77.254 C 101.188 78.227,102.275 79.758,102.917 80.657 C 103.558 81.555,104.196 82.459,104.333 82.666 C 104.471 82.872,104.677 83.139,104.792 83.259 C 104.906 83.378,105.000 83.523,105.000 83.581 C 105.000 83.639,105.437 84.263,105.971 84.968 C 106.505 85.673,107.197 86.644,107.510 87.125 C 107.822 87.606,108.135 88.000,108.206 88.000 C 108.276 88.000,108.333 88.081,108.333 88.179 C 108.333 88.278,108.659 88.784,109.058 89.304 C 109.456 89.824,109.868 90.413,109.973 90.612 C 110.078 90.811,110.259 91.076,110.374 91.200 C 111.539 92.457,111.571 92.820,110.634 94.177 C 109.856 95.304,107.960 97.926,107.662 98.288 C 107.569 98.401,107.255 98.851,106.964 99.288 C 106.673 99.725,106.000 100.660,105.468 101.365 C 104.935 102.070,104.500 102.694,104.500 102.752 C 104.500 102.810,104.406 102.962,104.292 103.089 C 103.922 103.501,103.747 103.735,103.167 104.583 C 102.557 105.478,100.773 107.951,100.495 108.288 C 100.403 108.401,100.089 108.851,99.798 109.288 C 99.507 109.725,98.833 110.660,98.301 111.365 C 97.769 112.070,97.333 112.694,97.333 112.752 C 97.333 112.810,97.240 112.962,97.125 113.089 C 96.756 113.501,96.580 113.735,96.001 114.583 C 95.390 115.478,93.606 117.951,93.329 118.288 C 93.236 118.401,92.920 118.851,92.627 119.288 C 92.117 120.050,89.843 123.195,89.494 123.621 C 89.402 123.734,89.087 124.184,88.794 124.621 C 88.357 125.274,87.250 126.824,86.121 128.362 C 86.009 128.516,85.804 128.807,85.667 129.009 C 85.206 129.685,82.513 133.414,82.335 133.621 C 82.239 133.734,81.921 134.184,81.628 134.621 C 81.190 135.274,80.083 136.824,78.955 138.362 C 78.842 138.516,78.637 138.807,78.500 139.009 C 78.219 139.422,75.454 143.264,75.128 143.696 C 75.012 143.849,74.804 144.141,74.667 144.344 C 74.529 144.546,74.098 145.152,73.708 145.690 C 73.319 146.228,73.000 146.742,73.000 146.834 C 73.000 146.925,72.931 147.000,72.847 147.000 C 72.763 147.000,72.522 147.281,72.311 147.625 C 72.101 147.969,71.851 148.335,71.756 148.438 C 71.661 148.541,71.471 148.792,71.333 148.994 C 71.030 149.441,68.261 153.304,67.962 153.696 C 67.846 153.849,67.637 154.140,67.500 154.342 C 67.238 154.727,64.983 157.880,64.624 158.362 C 64.510 158.516,64.304 158.805,64.167 159.005 C 64.029 159.204,63.485 159.961,62.958 160.686 C 62.431 161.411,62.000 162.079,62.000 162.169 C 62.000 162.259,61.944 162.334,61.875 162.334 C 61.806 162.335,61.563 162.616,61.334 162.959 C 61.105 163.303,60.842 163.668,60.750 163.771 C 60.658 163.875,60.471 164.129,60.333 164.337 C 60.196 164.546,59.658 165.297,59.138 166.007 C 58.619 166.718,58.169 167.476,58.138 167.691 L 58.083 168.083 71.377 168.126 L 84.671 168.169 85.877 166.520 C 86.541 165.613,87.196 164.705,87.333 164.502 C 87.471 164.299,88.015 163.539,88.542 162.814 C 89.069 162.089,89.500 161.454,89.500 161.402 C 89.500 161.351,89.594 161.212,89.708 161.092 C 89.823 160.972,90.029 160.708,90.167 160.506 C 90.304 160.303,90.959 159.375,91.621 158.444 C 92.283 157.512,93.371 155.978,94.038 155.034 C 94.704 154.090,95.344 153.214,95.458 153.087 C 95.573 152.961,95.667 152.815,95.667 152.763 C 95.667 152.711,96.098 152.079,96.625 151.359 C 97.152 150.639,97.696 149.880,97.833 149.674 C 97.971 149.468,98.515 148.706,99.042 147.980 C 99.569 147.255,100.000 146.588,100.000 146.498 C 100.000 146.407,100.077 146.333,100.172 146.333 C 100.266 146.333,100.394 146.202,100.455 146.042 C 100.516 145.881,100.631 145.675,100.710 145.583 C 100.789 145.492,101.409 144.629,102.087 143.667 C 102.765 142.704,103.548 141.601,103.827 141.215 C 104.105 140.830,104.333 140.436,104.333 140.340 C 104.333 140.245,104.396 140.167,104.472 140.167 C 104.549 140.167,104.905 139.735,105.264 139.208 C 105.623 138.681,105.973 138.225,106.042 138.194 C 106.110 138.164,106.167 138.066,106.167 137.976 C 106.167 137.887,106.617 137.223,107.167 136.500 C 107.717 135.777,108.167 135.139,108.167 135.081 C 108.167 135.023,108.260 134.878,108.375 134.759 C 108.490 134.639,108.696 134.371,108.833 134.164 C 108.971 133.957,109.402 133.348,109.792 132.810 C 110.181 132.272,110.500 131.758,110.500 131.666 C 110.500 131.575,110.569 131.500,110.653 131.500 C 110.737 131.500,110.978 131.219,111.188 130.875 C 111.398 130.531,112.079 129.557,112.701 128.710 C 113.324 127.863,113.833 127.134,113.833 127.089 C 113.833 127.045,114.377 126.265,115.042 125.356 C 115.706 124.448,116.362 123.535,116.500 123.328 C 116.638 123.120,117.181 122.361,117.708 121.641 C 118.235 120.921,118.667 120.289,118.667 120.237 C 118.667 120.185,118.760 120.045,118.875 119.925 C 118.990 119.805,119.196 119.537,119.333 119.329 C 119.471 119.121,119.999 118.381,120.507 117.684 C 121.423 116.429,122.595 114.731,122.917 114.195 C 123.008 114.042,123.123 113.879,123.171 113.833 C 123.482 113.538,124.333 112.339,124.333 112.197 C 124.333 111.862,124.921 111.912,125.208 112.271 C 125.369 112.472,125.500 112.701,125.500 112.781 C 125.500 112.861,125.706 113.157,125.958 113.441 C 126.529 114.081,126.815 114.499,126.941 114.875 C 126.995 115.035,127.096 115.167,127.166 115.167 C 127.236 115.167,127.580 115.617,127.930 116.167 C 128.281 116.717,128.627 117.167,128.700 117.167 C 128.773 117.167,128.833 117.279,128.833 117.417 C 128.833 117.554,128.911 117.667,129.005 117.667 C 129.100 117.667,129.226 117.798,129.286 117.958 C 129.444 118.383,130.039 119.167,130.205 119.167 C 130.283 119.167,129.948 118.623,129.462 117.958 C 128.975 117.294,128.434 116.527,128.260 116.254 C 128.086 115.982,127.879 115.682,127.800 115.588 C 127.721 115.494,127.046 114.573,126.299 113.542 C 124.724 111.368,124.617 111.330,123.738 112.625 C 123.381 113.152,122.600 114.268,122.002 115.104 C 121.405 115.940,120.804 116.792,120.667 116.997 C 120.529 117.202,119.854 118.150,119.167 119.104 C 118.479 120.058,117.279 121.746,116.500 122.855 C 115.104 124.842,112.878 127.975,112.463 128.538 C 112.346 128.697,111.162 130.373,109.833 132.263 C 108.504 134.152,106.892 136.435,106.250 137.335 C 105.608 138.235,104.971 139.134,104.833 139.333 C 104.696 139.533,104.058 140.430,103.417 141.328 C 102.775 142.226,102.138 143.126,102.000 143.328 C 101.862 143.530,101.225 144.431,100.583 145.329 C 99.942 146.227,98.854 147.765,98.167 148.746 C 96.961 150.467,94.718 153.621,94.291 154.196 C 94.177 154.349,93.971 154.640,93.833 154.841 C 93.696 155.042,93.058 155.947,92.417 156.851 C 91.775 157.756,90.786 159.153,90.219 159.956 C 89.653 160.760,88.602 162.242,87.886 163.250 C 87.169 164.258,86.283 165.524,85.916 166.062 C 85.550 166.600,85.085 167.219,84.883 167.437 L 84.516 167.833 71.508 167.833 C 62.545 167.833,58.500 167.779,58.500 167.659 C 58.500 167.562,58.993 166.794,59.596 165.950 C 60.199 165.107,60.798 164.267,60.928 164.083 C 61.057 163.900,61.710 163.000,62.378 162.083 C 63.046 161.167,63.833 160.059,64.127 159.621 C 64.420 159.184,64.739 158.734,64.835 158.621 C 64.932 158.509,65.664 157.503,66.464 156.386 C 67.263 155.269,68.442 153.627,69.083 152.738 C 69.725 151.848,70.538 150.700,70.891 150.185 C 71.243 149.671,71.675 149.063,71.851 148.833 C 72.180 148.405,73.830 146.109,76.750 142.015 C 77.667 140.730,79.073 138.777,79.875 137.674 C 80.677 136.572,81.333 135.594,81.333 135.501 C 81.333 135.409,81.402 135.333,81.486 135.333 C 81.571 135.333,81.811 135.052,82.021 134.708 C 82.230 134.365,83.024 133.239,83.784 132.207 C 84.545 131.175,85.167 130.291,85.167 130.242 C 85.167 130.193,85.245 130.062,85.340 129.951 C 85.902 129.300,88.500 125.641,88.500 125.501 C 88.500 125.409,88.569 125.333,88.653 125.333 C 88.737 125.333,88.978 125.052,89.187 124.708 C 89.397 124.365,90.190 123.239,90.951 122.207 C 91.711 121.175,92.333 120.295,92.333 120.251 C 92.333 120.207,92.442 120.038,92.575 119.877 C 92.708 119.715,93.682 118.383,94.738 116.917 C 95.795 115.450,97.280 113.394,98.038 112.347 C 98.796 111.301,99.447 110.365,99.485 110.267 C 99.523 110.169,99.635 110.003,99.735 109.898 C 99.835 109.793,100.029 109.541,100.167 109.338 C 100.304 109.134,101.073 108.073,101.875 106.980 C 102.677 105.887,103.333 104.953,103.333 104.906 C 103.333 104.858,103.411 104.729,103.507 104.618 C 103.901 104.162,106.667 100.329,106.667 100.240 C 106.667 100.186,106.760 100.045,106.875 99.925 C 106.990 99.805,107.196 99.542,107.333 99.340 C 107.471 99.138,108.165 98.175,108.875 97.200 C 109.585 96.226,110.167 95.384,110.167 95.329 C 110.167 95.274,110.298 95.082,110.458 94.902 C 111.933 93.249,112.014 92.880,111.161 91.689 C 110.049 90.136,108.100 87.387,107.833 86.994 C 107.696 86.792,107.490 86.528,107.375 86.408 C 107.260 86.288,107.167 86.149,107.167 86.098 C 107.167 86.046,106.735 85.411,106.208 84.686 C 105.681 83.961,105.138 83.203,105.000 83.001 C 104.754 82.640,102.031 78.851,101.624 78.304 C 101.510 78.151,101.304 77.860,101.167 77.658 C 101.029 77.456,100.392 76.553,99.750 75.651 C 99.108 74.750,98.021 73.216,97.333 72.244 C 96.646 71.271,95.990 70.374,95.875 70.250 C 95.760 70.125,95.667 69.976,95.667 69.917 C 95.667 69.858,95.573 69.706,95.458 69.579 C 95.344 69.453,94.688 68.553,94.000 67.580 C 93.313 66.606,92.225 65.075,91.583 64.176 C 90.942 63.278,90.304 62.376,90.167 62.173 C 90.029 61.969,89.804 61.659,89.667 61.485 C 89.529 61.310,88.892 60.415,88.250 59.495 C 87.608 58.576,86.446 56.935,85.667 55.849 C 84.887 54.764,84.137 53.710,84.000 53.509 C 83.862 53.307,83.658 53.016,83.545 52.862 C 81.694 50.346,81.045 49.395,81.109 49.292 C 81.152 49.223,87.364 49.167,94.914 49.167 L 108.641 49.167 109.001 49.625 C 109.199 49.877,109.898 50.849,110.555 51.784 C 111.212 52.720,112.215 54.145,112.782 54.951 C 113.350 55.757,114.341 57.167,114.983 58.083 C 116.669 60.489,118.409 62.964,119.774 64.897 C 121.589 67.467,123.070 69.570,124.427 71.500 C 126.194 74.013,127.832 76.333,129.213 78.277 C 129.875 79.209,130.529 80.137,130.667 80.339 C 130.804 80.541,131.442 81.445,132.083 82.347 C 132.725 83.249,133.587 84.480,134.000 85.082 C 134.412 85.684,134.843 86.305,134.956 86.463 C 135.070 86.621,135.487 87.200,135.883 87.750 C 136.280 88.300,137.034 89.378,137.560 90.146 C 138.085 90.914,138.654 91.664,138.824 91.813 C 139.087 92.043,139.798 92.993,140.833 94.499 C 140.971 94.699,141.736 95.775,142.533 96.890 C 145.495 101.031,147.784 104.235,148.959 105.885 C 149.624 106.819,150.262 107.709,150.376 107.862 C 150.490 108.016,150.696 108.307,150.833 108.509 C 150.971 108.710,151.721 109.763,152.500 110.848 C 153.279 111.932,154.667 113.872,155.583 115.158 C 156.500 116.444,158.000 118.545,158.917 119.826 C 159.833 121.108,161.146 122.951,161.833 123.922 C 164.455 127.626,164.873 128.183,164.962 128.094 C 165.012 128.043,164.929 127.864,164.777 127.696 C 164.625 127.528,164.500 127.303,164.500 127.195 C 164.500 127.088,164.434 127.000,164.353 127.000 C 164.273 127.000,163.920 126.550,163.570 126.000 C 163.219 125.450,162.873 125.000,162.800 125.000 C 162.727 125.000,162.667 124.919,162.667 124.821 C 162.667 124.722,162.329 124.203,161.917 123.667 C 161.504 123.131,161.167 122.619,161.167 122.530 C 161.167 122.442,161.054 122.326,160.917 122.273 C 160.779 122.220,160.667 122.062,160.667 121.922 C 160.667 121.782,160.610 121.665,160.542 121.662 C 160.473 121.660,160.233 121.360,160.008 120.996 C 159.783 120.631,159.540 120.333,159.466 120.333 C 159.393 120.333,159.333 120.218,159.333 120.078 C 159.333 119.938,159.221 119.780,159.083 119.727 C 158.946 119.674,158.833 119.564,158.833 119.483 C 158.833 119.401,158.515 118.894,158.125 118.357 C 157.735 117.819,157.304 117.212,157.167 117.007 C 157.029 116.803,156.785 116.481,156.625 116.292 C 156.465 116.103,156.333 115.896,156.333 115.832 C 156.333 115.768,156.165 115.527,155.958 115.297 C 155.752 115.067,155.508 114.762,155.417 114.618 C 155.073 114.081,153.483 111.801,153.320 111.612 C 153.227 111.505,152.783 110.892,152.333 110.250 C 151.884 109.608,151.437 108.993,151.341 108.882 C 151.245 108.771,151.167 108.603,151.167 108.507 C 151.167 108.411,151.106 108.333,151.032 108.333 C 150.958 108.333,150.606 107.883,150.250 107.333 C 149.894 106.783,149.542 106.333,149.468 106.333 C 149.394 106.333,149.333 106.253,149.333 106.154 C 149.333 106.055,148.996 105.536,148.583 105.000 C 148.171 104.464,147.833 103.942,147.833 103.841 C 147.833 103.739,147.721 103.613,147.583 103.560 C 147.446 103.508,147.333 103.394,147.333 103.308 C 147.333 103.223,147.255 103.062,147.159 102.951 C 147.064 102.841,146.392 101.925,145.667 100.917 C 144.941 99.908,144.270 98.993,144.174 98.882 C 144.078 98.771,144.000 98.600,144.000 98.502 C 144.000 98.403,143.887 98.280,143.750 98.227 C 143.612 98.174,143.500 98.064,143.500 97.983 C 143.500 97.845,142.478 96.369,141.622 95.273 C 141.418 95.010,141.182 94.654,141.100 94.481 C 141.017 94.308,140.886 94.167,140.808 94.167 C 140.730 94.167,140.667 94.052,140.667 93.911 C 140.667 93.771,140.554 93.613,140.417 93.560 C 140.279 93.508,140.167 93.360,140.167 93.232 C 140.167 93.104,140.097 93.000,140.011 93.000 C 139.926 93.000,139.814 92.867,139.762 92.705 C 139.711 92.542,139.453 92.174,139.190 91.886 C 138.927 91.598,138.556 91.112,138.367 90.806 C 138.177 90.500,137.886 90.096,137.719 89.908 C 137.553 89.719,137.342 89.442,137.250 89.292 C 137.090 89.030,135.464 86.674,134.229 84.917 C 133.907 84.458,133.517 83.927,133.363 83.737 C 133.209 83.546,133.008 83.271,132.917 83.124 C 132.329 82.185,130.932 80.241,130.812 80.194 C 130.732 80.164,130.667 80.064,130.667 79.973 C 130.667 79.882,130.329 79.369,129.917 78.833 C 129.504 78.297,129.167 77.817,129.167 77.767 C 129.167 77.687,126.936 74.566,126.529 74.076 C 126.449 73.980,126.354 73.824,126.317 73.730 C 126.280 73.636,125.929 73.114,125.537 72.571 C 125.145 72.028,124.268 70.796,123.589 69.833 C 122.909 68.871,122.289 68.008,122.210 67.917 C 122.131 67.825,122.016 67.619,121.955 67.458 C 121.894 67.298,121.766 67.167,121.672 67.167 C 121.577 67.167,121.500 67.092,121.500 67.000 C 121.500 66.909,121.181 66.394,120.792 65.857 C 120.402 65.319,119.971 64.709,119.833 64.502 C 119.696 64.295,119.508 64.038,119.417 63.931 C 119.325 63.824,119.175 63.616,119.083 63.470 C 118.385 62.353,117.406 61.000,117.298 61.000 C 117.226 61.000,117.167 60.922,117.167 60.826 C 117.167 60.731,117.088 60.562,116.992 60.451 C 116.896 60.341,116.450 59.725,116.000 59.083 C 115.550 58.442,115.104 57.826,115.008 57.715 C 114.912 57.605,114.833 57.474,114.833 57.426 C 114.833 57.378,114.402 56.745,113.875 56.020 C 113.348 55.294,112.822 54.562,112.707 54.392 C 112.168 53.600,110.831 51.729,110.674 51.549 C 110.578 51.438,110.500 51.301,110.500 51.245 C 110.500 51.189,110.406 51.041,110.292 50.916 C 110.177 50.792,109.821 50.313,109.500 49.852 C 109.002 49.136,108.819 49.000,108.250 48.922 C 107.032 48.754,80.992 48.741,80.825 48.908 M189.167 48.851 C 188.791 48.994,188.167 49.993,188.167 50.451 C 188.167 50.547,188.054 50.719,187.917 50.833 C 187.779 50.947,187.667 51.210,187.667 51.417 C 187.667 51.623,187.554 51.886,187.417 52.000 C 187.279 52.114,187.167 52.386,187.167 52.604 C 187.167 52.822,187.097 53.000,187.011 53.000 C 186.926 53.000,186.806 53.169,186.745 53.375 C 186.636 53.745,186.018 55.128,185.236 56.752 C 185.014 57.212,184.837 57.700,184.842 57.836 C 184.850 58.087,185.532 56.771,186.182 55.250 C 186.378 54.792,186.711 54.042,186.922 53.583 C 187.839 51.592,188.315 50.538,188.591 49.887 C 188.988 48.953,188.385 49.005,198.838 49.002 C 208.438 49.000,208.833 49.027,208.833 49.676 C 208.833 49.762,209.058 50.320,209.333 50.916 C 210.181 52.754,210.770 54.059,211.015 54.640 C 211.681 56.220,212.310 57.387,212.321 57.062 C 212.328 56.867,212.221 56.614,212.083 56.500 C 211.946 56.386,211.833 56.182,211.833 56.047 C 211.833 55.912,211.721 55.584,211.583 55.317 C 211.446 55.051,211.221 54.616,211.083 54.349 C 210.946 54.083,210.833 53.746,210.833 53.599 C 210.833 53.453,210.758 53.333,210.667 53.333 C 210.575 53.333,210.500 53.200,210.500 53.037 C 210.500 52.874,210.399 52.593,210.275 52.412 C 210.151 52.231,210.000 51.877,209.938 51.625 C 209.877 51.373,209.753 51.167,209.663 51.167 C 209.574 51.167,209.500 50.988,209.500 50.770 C 209.500 50.552,209.387 50.281,209.250 50.167 C 209.112 50.053,209.000 49.823,209.000 49.658 C 209.000 48.677,208.881 48.665,198.808 48.680 C 193.426 48.688,189.410 48.759,189.167 48.851 M247.000 48.882 L 246.583 49.093 246.500 91.172 C 246.454 114.315,246.354 133.006,246.278 132.708 C 246.202 132.410,246.071 132.167,245.987 132.167 C 245.902 132.167,245.833 132.047,245.833 131.901 C 245.833 131.754,245.734 131.436,245.612 131.192 C 245.491 130.949,245.266 130.500,245.112 130.195 C 244.959 129.889,244.833 129.542,244.833 129.424 C 244.833 129.305,244.721 129.114,244.583 129.000 C 244.446 128.886,244.333 128.623,244.333 128.417 C 244.333 128.210,244.221 127.947,244.083 127.833 C 243.946 127.719,243.833 127.522,243.833 127.394 C 243.833 127.266,243.763 127.032,243.678 126.873 C 243.363 126.286,242.529 124.405,242.421 124.042 C 242.361 123.835,242.241 123.667,242.155 123.667 C 242.070 123.667,242.000 123.488,242.000 123.270 C 242.000 123.052,241.887 122.781,241.750 122.667 C 241.612 122.553,241.500 122.349,241.500 122.214 C 241.500 122.079,241.396 121.769,241.269 121.526 C 241.142 121.282,240.922 120.821,240.779 120.500 C 240.637 120.179,240.301 119.429,240.033 118.833 C 239.765 118.237,239.423 117.476,239.273 117.141 C 239.123 116.807,239.000 116.451,239.000 116.350 C 239.000 116.249,238.925 116.167,238.833 116.167 C 238.742 116.167,238.667 116.033,238.667 115.870 C 238.667 115.707,238.565 115.426,238.442 115.245 C 238.318 115.065,238.166 114.710,238.105 114.458 C 238.044 114.206,237.920 114.000,237.830 114.000 C 237.740 114.000,237.667 113.822,237.667 113.604 C 237.667 113.386,237.554 113.114,237.417 113.000 C 237.046 112.692,237.100 112.879,237.833 114.437 C 238.200 115.216,238.500 115.888,238.500 115.930 C 238.500 115.972,238.719 116.474,238.987 117.045 C 239.473 118.080,240.141 119.559,240.624 120.667 C 240.994 121.514,241.788 123.259,242.347 124.455 C 242.615 125.026,242.833 125.527,242.833 125.568 C 242.833 125.633,243.293 126.661,244.331 128.917 C 244.500 129.283,244.803 129.958,245.005 130.417 C 245.206 130.875,245.541 131.625,245.748 132.083 C 245.955 132.542,246.171 133.053,246.228 133.219 C 246.634 134.408,246.667 131.292,246.667 91.329 C 246.667 49.991,246.672 49.342,246.989 49.173 C 247.520 48.888,265.408 48.939,265.646 49.225 C 265.782 49.389,265.844 58.716,265.875 83.683 L 265.917 117.917 276.083 117.957 L 286.250 117.998 286.750 118.563 C 287.025 118.874,287.362 119.295,287.500 119.498 C 287.637 119.700,288.387 120.749,289.167 121.829 C 289.946 122.908,290.696 123.958,290.833 124.162 C 291.173 124.666,293.960 128.539,294.143 128.761 C 294.224 128.859,294.652 129.459,295.095 130.095 C 295.934 131.298,297.725 133.780,297.987 134.103 C 298.688 134.966,299.668 136.591,299.597 136.774 C 299.524 136.965,293.727 136.994,263.306 136.959 L 227.103 136.917 226.566 135.833 C 226.271 135.237,225.801 134.262,225.523 133.667 C 225.194 132.961,225.015 132.714,225.009 132.958 C 225.004 133.165,225.075 133.333,225.167 133.333 C 225.258 133.333,225.333 133.421,225.333 133.528 C 225.333 133.728,226.099 135.448,226.655 136.498 C 226.825 136.818,227.140 137.129,227.357 137.190 C 227.994 137.368,299.088 137.355,299.559 137.176 C 300.000 137.008,300.014 136.433,299.586 136.083 C 299.474 135.991,299.328 135.747,299.263 135.541 C 299.198 135.335,299.074 135.167,298.989 135.167 C 298.903 135.167,298.833 135.062,298.833 134.934 C 298.833 134.807,298.721 134.659,298.583 134.606 C 298.446 134.554,298.333 134.396,298.333 134.255 C 298.333 134.115,298.277 133.998,298.208 133.996 C 298.140 133.993,297.900 133.693,297.675 133.329 C 297.450 132.965,297.206 132.667,297.133 132.667 C 297.060 132.667,297.000 132.588,297.000 132.493 C 297.000 132.348,295.775 130.601,295.170 129.882 C 295.076 129.771,295.000 129.603,295.000 129.507 C 295.000 129.411,294.939 129.333,294.865 129.333 C 294.791 129.333,294.439 128.883,294.083 128.333 C 293.727 127.783,293.376 127.333,293.301 127.333 C 293.227 127.333,293.167 127.238,293.167 127.120 C 293.167 127.003,292.960 126.676,292.708 126.393 C 292.144 125.759,291.853 125.336,291.729 124.970 C 291.677 124.816,291.529 124.649,291.400 124.600 C 291.272 124.551,291.167 124.396,291.167 124.255 C 291.167 124.115,291.103 124.000,291.025 124.000 C 290.948 124.000,290.817 123.859,290.734 123.686 C 290.651 123.513,290.415 123.157,290.210 122.894 C 290.004 122.631,289.464 121.892,289.010 121.250 C 288.555 120.608,288.104 119.993,288.008 119.882 C 287.912 119.771,287.833 119.603,287.833 119.507 C 287.833 119.411,287.760 119.333,287.671 119.333 C 287.582 119.333,287.396 119.115,287.258 118.849 C 286.695 117.760,287.486 117.833,276.321 117.833 L 266.167 117.833 266.167 83.612 L 266.167 49.391 265.781 49.029 L 265.395 48.667 256.406 48.669 C 249.493 48.671,247.320 48.720,247.000 48.882 M290.086 49.056 C 289.702 49.642,289.782 110.459,290.167 110.881 C 290.582 111.337,290.744 111.556,291.144 112.208 C 291.355 112.552,291.587 112.833,291.661 112.833 C 291.734 112.833,291.839 112.965,291.892 113.125 C 292.032 113.540,292.381 114.061,292.625 114.217 C 292.740 114.290,292.833 114.424,292.833 114.515 C 292.833 114.606,292.912 114.771,293.008 114.882 C 293.104 114.993,293.550 115.608,294.000 116.250 C 294.450 116.892,294.896 117.507,294.992 117.618 C 295.088 117.729,295.167 117.897,295.167 117.993 C 295.167 118.089,295.244 118.167,295.339 118.167 C 295.433 118.167,295.560 118.298,295.621 118.458 C 295.682 118.619,296.036 119.171,296.408 119.686 C 296.779 120.200,297.178 120.763,297.293 120.936 C 297.731 121.590,299.158 123.592,299.326 123.785 C 299.422 123.895,299.500 124.064,299.500 124.160 C 299.500 124.255,299.577 124.333,299.672 124.333 C 299.766 124.333,299.894 124.465,299.955 124.625 C 300.015 124.785,300.369 125.338,300.741 125.852 C 301.113 126.367,301.529 126.957,301.667 127.164 C 301.804 127.371,302.010 127.639,302.125 127.759 C 302.240 127.878,302.333 128.022,302.333 128.078 C 302.333 128.264,303.060 129.167,303.209 129.167 C 303.290 129.167,303.182 128.930,302.970 128.640 C 302.576 128.103,301.563 126.666,299.582 123.833 C 298.973 122.962,297.997 121.575,297.413 120.750 C 296.828 119.925,295.856 118.537,295.252 117.667 C 294.647 116.796,293.596 115.296,292.915 114.333 C 292.234 113.371,291.299 112.037,290.838 111.370 L 290.000 110.157 290.000 79.778 C 290.000 56.373,290.046 49.354,290.200 49.200 C 290.491 48.909,356.176 48.909,356.467 49.200 C 356.617 49.351,356.667 51.607,356.667 58.333 C 356.667 65.059,356.617 67.316,356.467 67.467 C 356.313 67.620,350.775 67.667,332.553 67.667 L 308.840 67.667 308.749 68.042 C 308.699 68.248,308.678 71.904,308.704 76.167 L 308.750 83.917 330.583 84.002 C 342.592 84.048,352.435 84.104,352.458 84.127 C 352.733 84.391,352.459 101.843,352.178 101.994 C 351.960 102.111,344.855 102.167,330.347 102.167 L 308.840 102.167 308.749 102.542 C 308.698 102.748,308.678 106.292,308.704 110.417 L 308.750 117.917 332.574 117.959 C 351.379 117.992,356.425 118.045,356.530 118.209 C 356.734 118.531,356.700 136.293,356.494 136.678 C 356.325 136.994,355.882 137.000,332.593 137.000 L 308.865 137.000 307.700 135.375 C 306.448 133.628,305.481 132.249,304.244 130.448 C 303.816 129.824,303.423 129.354,303.372 129.405 C 303.321 129.456,303.404 129.636,303.557 129.804 C 303.709 129.972,303.833 130.191,303.833 130.291 C 303.833 130.391,303.890 130.497,303.958 130.528 C 304.027 130.558,304.377 131.015,304.736 131.542 C 305.095 132.069,305.443 132.500,305.510 132.500 C 305.576 132.500,305.678 132.688,305.735 132.917 C 305.793 133.146,305.913 133.333,306.003 133.333 C 306.093 133.333,306.167 133.448,306.167 133.589 C 306.167 133.729,306.279 133.887,306.417 133.940 C 306.554 133.992,306.667 134.102,306.667 134.184 C 306.667 134.334,307.898 136.092,308.499 136.801 L 308.826 137.186 332.621 137.173 L 356.417 137.159 356.705 136.788 C 357.123 136.248,357.157 118.798,356.741 118.204 L 356.481 117.833 332.656 117.833 L 308.830 117.833 308.873 110.125 L 308.917 102.417 330.667 102.375 C 350.881 102.337,352.431 102.314,352.625 102.052 C 352.785 101.834,352.833 99.747,352.833 92.964 L 352.833 84.158 352.406 83.996 C 352.136 83.893,344.019 83.833,330.406 83.833 L 308.833 83.833 308.833 75.917 L 308.833 68.000 332.542 67.997 C 345.581 67.996,356.333 67.940,356.433 67.872 C 356.970 67.514,357.000 67.007,357.000 58.207 L 357.000 49.391 356.614 49.029 L 356.229 48.667 323.285 48.667 L 290.341 48.667 290.086 49.056 M40.574 50.261 C 40.266 50.509,40.275 50.517,40.750 50.405 C 41.025 50.340,41.512 50.231,41.833 50.162 C 42.415 50.039,42.414 50.038,41.657 50.019 C 41.190 50.007,40.772 50.101,40.574 50.261 M63.500 50.150 C 63.821 50.225,64.308 50.344,64.583 50.415 C 64.984 50.518,65.044 50.501,64.885 50.331 C 64.776 50.215,64.288 50.096,63.801 50.066 C 63.043 50.021,63.000 50.033,63.500 50.150 M38.907 50.745 C 38.495 51.056,38.736 51.060,39.583 50.755 C 40.237 50.519,40.240 50.514,39.740 50.507 C 39.460 50.503,39.085 50.610,38.907 50.745 M65.583 50.671 C 65.858 50.746,66.271 50.861,66.500 50.925 C 66.906 51.039,66.908 51.035,66.583 50.776 C 66.400 50.630,65.987 50.516,65.667 50.522 L 65.083 50.534 65.583 50.671 M37.333 51.250 C 37.104 51.381,36.748 51.491,36.542 51.494 C 36.335 51.497,36.167 51.575,36.167 51.667 C 36.167 51.758,36.047 51.833,35.900 51.833 C 35.754 51.833,35.360 51.951,35.025 52.096 C 34.691 52.240,34.192 52.454,33.917 52.572 C 33.280 52.844,31.993 53.467,31.667 53.661 C 31.529 53.743,31.285 53.850,31.125 53.899 C 30.965 53.949,30.833 54.061,30.833 54.148 C 30.833 54.235,31.490 53.979,32.292 53.580 C 34.107 52.675,35.135 52.233,36.417 51.808 C 36.967 51.626,37.567 51.412,37.750 51.334 C 37.933 51.255,38.196 51.154,38.333 51.109 C 38.471 51.063,38.396 51.023,38.167 51.019 C 37.938 51.015,37.563 51.119,37.333 51.250 M67.250 51.119 C 67.433 51.163,67.655 51.267,67.742 51.350 C 67.829 51.432,68.049 51.500,68.232 51.500 C 68.559 51.500,68.560 51.497,68.240 51.255 C 68.062 51.121,67.692 51.017,67.417 51.025 C 67.074 51.034,67.021 51.064,67.250 51.119 M69.061 51.751 C 69.323 51.888,69.616 52.000,69.712 52.000 C 70.041 52.000,73.584 53.817,74.733 54.575 C 75.365 54.992,75.914 55.333,75.951 55.333 C 77.256 55.333,82.926 61.776,84.689 65.264 C 85.178 66.229,85.603 66.942,85.634 66.847 C 85.666 66.753,85.573 66.507,85.429 66.301 C 85.285 66.094,85.167 65.793,85.167 65.630 C 85.167 65.467,85.092 65.333,85.000 65.333 C 84.908 65.333,84.833 65.249,84.833 65.147 C 84.833 64.916,83.651 62.937,83.467 62.861 C 83.394 62.831,83.333 62.732,83.333 62.643 C 83.333 61.492,77.085 55.462,74.677 54.290 C 74.534 54.220,74.192 54.018,73.917 53.841 C 73.009 53.257,70.507 52.028,70.001 51.917 C 69.728 51.857,69.461 51.738,69.409 51.654 C 69.356 51.569,69.149 51.500,68.948 51.501 C 68.622 51.502,68.634 51.529,69.061 51.751 M30.107 54.583 C 29.970 54.721,29.777 54.833,29.679 54.833 C 29.580 54.833,29.499 54.890,29.499 54.958 C 29.498 55.027,29.218 55.271,28.876 55.500 C 26.887 56.833,23.338 60.421,22.776 61.667 C 22.714 61.804,22.515 62.142,22.333 62.417 C 22.152 62.692,21.960 63.029,21.906 63.167 C 21.853 63.304,21.739 63.529,21.654 63.667 C 21.568 63.804,21.454 64.029,21.399 64.167 C 21.345 64.304,21.201 64.642,21.080 64.917 C 20.453 66.330,20.333 66.662,20.333 66.984 C 20.333 67.176,20.271 67.333,20.195 67.333 C 20.036 67.333,19.676 68.884,19.575 70.000 C 19.518 70.629,19.548 70.575,19.760 69.667 C 21.271 63.199,24.455 58.644,30.102 54.873 C 30.412 54.665,30.667 54.459,30.667 54.414 C 30.667 54.246,30.348 54.343,30.107 54.583 M212.333 57.544 C 212.333 57.590,212.445 57.843,212.582 58.106 C 212.798 58.520,212.831 58.536,212.832 58.229 C 212.833 58.034,212.721 57.781,212.583 57.667 C 212.446 57.553,212.333 57.497,212.333 57.544 M184.531 58.369 C 184.422 58.478,184.331 58.683,184.328 58.825 C 184.325 58.967,184.213 59.229,184.078 59.407 C 183.943 59.585,183.835 59.885,183.837 60.074 C 183.840 60.325,183.913 60.261,184.112 59.833 C 184.261 59.512,184.485 59.032,184.609 58.765 C 184.860 58.225,184.830 58.070,184.531 58.369 M213.109 59.292 C 213.911 61.227,215.148 63.777,215.158 63.513 C 215.163 63.383,214.952 62.820,214.689 62.263 C 213.886 60.557,213.667 60.041,213.667 59.850 C 213.667 59.749,213.601 59.667,213.521 59.667 C 213.441 59.667,213.330 59.442,213.275 59.167 C 213.220 58.892,213.102 58.667,213.013 58.667 C 212.923 58.667,212.967 58.948,213.109 59.292 M183.444 60.611 C 183.383 60.672,183.333 60.897,183.333 61.111 C 183.333 61.325,183.263 61.500,183.178 61.500 C 183.092 61.500,182.973 61.669,182.912 61.875 C 182.852 62.081,182.659 62.569,182.485 62.958 C 182.310 63.348,182.013 64.023,181.825 64.458 C 181.637 64.894,181.375 65.462,181.242 65.722 C 181.109 65.981,181.000 66.291,181.000 66.410 C 181.000 66.529,180.887 66.719,180.750 66.833 C 180.612 66.947,180.505 67.200,180.512 67.395 C 180.523 67.720,181.153 66.553,181.818 64.974 C 182.190 64.090,183.007 62.276,183.167 61.976 C 183.715 60.953,183.871 60.184,183.444 60.611 M215.167 63.899 C 215.167 63.957,215.239 64.135,215.327 64.294 C 215.416 64.453,215.649 64.958,215.846 65.417 C 216.044 65.875,216.496 66.873,216.852 67.635 C 217.209 68.397,217.500 69.048,217.500 69.082 C 217.500 69.147,218.396 71.162,218.705 71.791 C 219.015 72.421,219.063 72.055,218.760 71.381 C 218.603 71.034,218.376 70.525,218.255 70.250 C 218.133 69.975,217.845 69.337,217.614 68.833 C 217.383 68.329,217.145 67.748,217.086 67.542 C 217.026 67.335,216.908 67.167,216.822 67.167 C 216.737 67.167,216.667 66.988,216.667 66.770 C 216.667 66.552,216.554 66.281,216.417 66.167 C 216.279 66.053,216.167 65.833,216.167 65.678 C 216.167 65.524,216.057 65.251,215.922 65.074 C 215.787 64.896,215.675 64.628,215.672 64.479 C 215.667 64.230,215.167 63.656,215.167 63.899 M51.792 66.455 C 52.181 66.490,52.819 66.490,53.208 66.455 C 53.598 66.420,53.279 66.392,52.500 66.392 C 51.721 66.392,51.402 66.420,51.792 66.455 M48.475 66.580 C 48.431 66.624,47.987 66.732,47.489 66.819 L 46.583 66.978 47.583 66.916 C 48.133 66.882,48.958 66.784,49.417 66.699 L 50.250 66.545 49.403 66.522 C 48.937 66.510,48.519 66.536,48.475 66.580 M55.333 66.688 C 56.412 66.931,58.205 67.051,57.250 66.816 C 56.883 66.725,56.133 66.622,55.583 66.585 L 54.583 66.519 55.333 66.688 M45.333 67.260 C 44.792 67.465,44.782 67.482,45.189 67.491 C 45.431 67.496,45.843 67.388,46.106 67.251 C 46.720 66.931,46.187 66.937,45.333 67.260 M58.407 67.255 C 58.585 67.390,58.960 67.497,59.240 67.493 C 59.740 67.486,59.737 67.481,59.083 67.245 C 58.236 66.940,57.995 66.944,58.407 67.255 M85.707 67.357 C 85.865 67.781,85.342 68.130,82.117 69.755 C 80.486 70.577,79.273 71.275,79.421 71.306 C 79.570 71.337,79.823 71.243,79.984 71.098 C 80.145 70.952,80.402 70.833,80.555 70.833 C 80.708 70.833,80.833 70.774,80.833 70.702 C 80.833 70.629,81.471 70.274,82.250 69.912 C 83.029 69.550,83.667 69.196,83.667 69.127 C 83.667 69.057,83.811 69.000,83.988 69.000 C 84.165 69.000,84.422 68.887,84.560 68.750 C 84.697 68.612,84.913 68.500,85.040 68.500 C 85.545 68.500,86.210 67.576,85.892 67.317 C 85.640 67.112,85.617 67.117,85.707 67.357 M44.000 67.652 C 43.862 67.725,43.450 67.925,43.083 68.097 C 41.113 69.021,38.809 71.353,38.839 72.394 C 38.847 72.696,39.333 71.967,39.333 71.653 C 39.333 71.497,39.446 71.326,39.583 71.273 C 39.721 71.220,39.833 71.089,39.833 70.980 C 39.833 70.628,41.510 69.163,42.512 68.641 C 42.873 68.453,43.210 68.232,43.261 68.149 C 43.311 68.067,43.522 68.000,43.728 68.000 C 43.934 68.000,44.249 67.890,44.426 67.755 C 44.785 67.484,44.464 67.406,44.000 67.652 M60.074 67.755 C 60.251 67.890,60.599 68.000,60.845 68.000 C 61.091 68.000,61.386 68.112,61.500 68.250 C 61.614 68.387,61.886 68.500,62.104 68.500 C 62.322 68.500,62.500 68.561,62.500 68.635 C 62.500 68.709,62.912 68.953,63.415 69.176 C 63.918 69.400,64.331 69.640,64.332 69.708 C 64.333 69.777,64.411 69.833,64.507 69.833 C 64.704 69.833,65.721 70.519,65.806 70.708 C 65.836 70.777,65.930 70.833,66.014 70.833 C 66.098 70.833,66.303 70.965,66.470 71.125 C 66.637 71.285,67.050 71.642,67.388 71.917 C 68.088 72.486,69.109 73.824,69.608 74.826 C 70.022 75.658,71.017 75.959,71.560 75.417 C 71.697 75.279,71.918 75.167,72.051 75.167 C 72.184 75.167,72.386 75.054,72.500 74.917 C 72.614 74.779,72.844 74.667,73.011 74.667 C 73.177 74.667,73.355 74.600,73.406 74.518 C 73.456 74.436,74.305 73.971,75.291 73.484 C 76.277 72.998,77.108 72.540,77.139 72.466 C 77.169 72.393,77.329 72.333,77.493 72.333 C 77.658 72.333,77.882 72.225,77.992 72.093 C 78.101 71.961,78.348 71.830,78.541 71.802 C 78.733 71.773,78.921 71.657,78.959 71.544 C 79.018 71.363,77.456 72.125,72.255 74.813 C 70.375 75.785,70.411 75.796,69.275 73.893 C 68.216 72.118,65.719 70.080,62.857 68.653 C 60.992 67.724,59.318 67.184,60.074 67.755 M180.083 68.208 C 180.025 68.415,179.876 68.808,179.752 69.083 C 179.628 69.358,179.339 69.996,179.111 70.500 C 178.882 71.004,178.460 71.942,178.173 72.583 C 177.886 73.225,177.542 73.962,177.409 74.222 C 177.276 74.481,177.169 74.819,177.173 74.972 C 177.179 75.235,177.326 74.953,178.269 72.875 C 178.488 72.394,178.846 71.606,179.064 71.125 C 179.283 70.644,179.623 69.875,179.820 69.417 C 180.017 68.958,180.251 68.453,180.339 68.294 C 180.540 67.932,180.542 67.833,180.345 67.833 C 180.259 67.833,180.141 68.002,180.083 68.208 M19.274 72.191 C 19.132 73.550,19.158 76.065,19.325 77.000 C 19.415 77.506,19.465 76.680,19.479 74.458 C 19.501 71.014,19.453 70.480,19.274 72.191 M219.006 72.438 C 219.022 72.830,219.488 73.426,219.494 73.062 C 219.497 72.867,219.387 72.614,219.250 72.500 C 219.112 72.386,219.003 72.358,219.006 72.438 M38.535 73.419 C 38.183 74.734,38.418 76.008,39.257 77.333 C 39.798 78.187,41.333 79.419,41.333 78.999 C 41.333 78.902,41.202 78.775,41.042 78.716 C 40.629 78.565,39.478 77.359,39.086 76.667 C 38.811 76.182,38.759 75.795,38.775 74.375 C 38.798 72.410,38.801 72.423,38.535 73.419 M198.399 72.958 C 198.350 73.119,198.234 73.389,198.143 73.558 C 198.052 73.727,198.024 73.913,198.081 73.970 C 198.236 74.125,198.495 73.640,198.497 73.190 L 198.500 72.796 198.828 73.190 C 199.183 73.616,199.272 73.508,198.994 72.989 C 198.779 72.588,198.518 72.574,198.399 72.958 M219.500 73.558 C 219.500 73.589,219.605 73.833,219.733 74.099 C 219.862 74.366,220.153 74.996,220.380 75.500 C 220.608 76.004,221.028 76.923,221.314 77.542 C 221.599 78.161,221.833 78.699,221.833 78.738 C 221.833 78.800,222.266 79.768,223.331 82.083 C 223.869 83.254,224.445 84.557,224.842 85.500 C 225.332 86.667,225.667 87.193,225.667 86.797 C 225.667 86.644,225.597 86.477,225.513 86.425 C 225.428 86.372,225.310 86.105,225.250 85.831 C 225.189 85.557,225.071 85.333,224.987 85.333 C 224.902 85.333,224.833 85.214,224.833 85.067 C 224.833 84.921,224.734 84.602,224.612 84.359 C 224.491 84.116,224.266 83.667,224.112 83.361 C 223.959 83.056,223.833 82.709,223.833 82.590 C 223.833 82.471,223.721 82.281,223.583 82.167 C 223.446 82.053,223.333 81.790,223.333 81.583 C 223.333 81.377,223.221 81.114,223.083 81.000 C 222.946 80.886,222.833 80.695,222.833 80.576 C 222.833 80.458,222.708 80.111,222.554 79.805 C 222.401 79.500,222.176 79.051,222.054 78.808 C 221.933 78.564,221.833 78.246,221.833 78.099 C 221.833 77.953,221.758 77.833,221.667 77.833 C 221.575 77.833,221.500 77.746,221.500 77.638 C 221.500 77.531,221.271 76.950,220.990 76.347 C 220.109 74.453,220.026 74.259,219.917 73.875 C 219.832 73.575,219.500 73.323,219.500 73.558 M199.167 73.853 C 199.167 73.990,199.277 74.249,199.411 74.426 C 199.596 74.671,199.656 74.689,199.656 74.500 C 199.656 74.362,199.546 74.104,199.411 73.926 C 199.227 73.682,199.167 73.664,199.167 73.853 M197.702 74.573 C 197.458 75.109,197.521 75.293,197.823 74.929 C 197.936 74.793,198.002 74.552,197.972 74.393 C 197.929 74.170,197.866 74.212,197.702 74.573 M199.667 74.970 C 199.667 75.081,199.739 75.301,199.827 75.461 C 200.117 75.982,200.667 77.311,200.667 77.491 C 200.667 77.588,200.742 77.667,200.833 77.667 C 200.925 77.667,201.000 77.849,201.000 78.071 C 201.000 78.294,201.112 78.589,201.250 78.726 C 201.387 78.864,201.500 79.122,201.500 79.301 C 201.500 79.480,201.612 79.719,201.750 79.833 C 201.887 79.947,202.000 80.210,202.000 80.417 C 202.000 80.623,202.112 80.886,202.250 81.000 C 202.387 81.114,202.500 81.318,202.500 81.453 C 202.500 81.588,202.603 81.898,202.730 82.141 C 202.856 82.384,203.039 82.771,203.137 83.000 C 203.235 83.229,203.475 83.792,203.670 84.250 C 203.865 84.708,204.131 85.320,204.262 85.609 C 204.393 85.897,204.500 86.216,204.500 86.317 C 204.500 86.418,204.575 86.500,204.667 86.500 C 204.758 86.500,204.833 86.620,204.833 86.766 C 204.833 86.912,204.934 87.231,205.058 87.474 C 205.182 87.718,205.405 88.199,205.554 88.544 C 205.702 88.889,205.939 89.433,206.079 89.752 C 206.377 90.433,206.727 91.248,206.973 91.833 C 207.070 92.063,207.303 92.602,207.491 93.033 C 207.679 93.463,207.833 93.894,207.833 93.991 C 207.833 94.088,207.908 94.167,208.000 94.167 C 208.092 94.167,208.167 94.286,208.167 94.433 C 208.167 94.579,208.268 94.898,208.391 95.141 C 208.515 95.384,208.738 95.866,208.887 96.211 C 209.036 96.556,209.272 97.100,209.412 97.419 C 209.552 97.739,209.781 98.261,209.921 98.581 C 210.061 98.900,210.279 99.407,210.404 99.706 C 210.530 100.005,210.828 100.664,211.066 101.169 C 211.854 102.838,213.239 102.675,198.708 102.626 L 185.917 102.583 185.975 102.167 C 186.007 101.938,186.129 101.563,186.247 101.333 C 186.455 100.929,186.718 100.345,187.280 99.044 C 187.429 98.699,187.652 98.218,187.775 97.974 C 187.899 97.731,188.000 97.412,188.000 97.266 C 188.000 97.120,188.075 97.000,188.167 97.000 C 188.258 97.000,188.333 96.918,188.333 96.817 C 188.333 96.716,188.440 96.397,188.571 96.109 C 188.702 95.820,188.969 95.208,189.164 94.750 C 189.359 94.292,189.598 93.729,189.696 93.500 C 189.794 93.271,189.977 92.884,190.104 92.641 C 190.230 92.398,190.333 92.088,190.333 91.953 C 190.333 91.818,190.446 91.614,190.583 91.500 C 190.721 91.386,190.833 91.123,190.833 90.917 C 190.833 90.710,190.946 90.447,191.083 90.333 C 191.221 90.219,191.333 89.980,191.333 89.801 C 191.333 89.622,191.446 89.364,191.583 89.226 C 191.721 89.089,191.833 88.794,191.833 88.571 C 191.833 88.349,191.908 88.167,192.000 88.167 C 192.092 88.167,192.167 88.088,192.167 87.991 C 192.167 87.824,192.632 86.692,193.037 85.875 C 193.139 85.669,193.185 85.463,193.139 85.417 C 193.059 85.337,192.886 85.658,192.399 86.792 C 192.114 87.455,191.836 88.081,191.175 89.542 C 190.896 90.161,190.667 90.700,190.667 90.739 C 190.667 90.778,190.437 91.322,190.156 91.947 C 189.875 92.572,189.580 93.233,189.499 93.417 C 189.418 93.600,189.161 94.183,188.927 94.712 C 188.692 95.242,188.313 96.121,188.083 96.667 C 187.854 97.212,187.474 98.092,187.240 98.621 C 187.006 99.150,186.748 99.733,186.668 99.917 C 186.587 100.100,186.288 100.769,186.003 101.402 C 185.718 102.036,185.524 102.655,185.571 102.777 C 185.701 103.117,211.636 103.107,211.766 102.768 C 211.856 102.534,211.325 101.204,209.500 97.083 C 208.786 95.472,208.447 94.691,207.833 93.250 C 207.220 91.809,206.881 91.028,206.167 89.417 C 205.453 87.805,205.113 87.025,204.500 85.583 C 204.110 84.667,203.608 83.504,203.386 83.000 C 203.163 82.496,202.915 81.933,202.834 81.750 C 202.754 81.567,202.458 80.905,202.177 80.280 C 201.896 79.655,201.667 79.111,201.667 79.072 C 201.667 78.973,200.697 76.848,200.405 76.308 C 200.274 76.064,200.164 75.764,200.161 75.641 C 200.155 75.359,199.667 74.697,199.667 74.970 M176.726 75.830 C 176.671 76.103,176.523 76.412,176.397 76.517 C 176.270 76.622,176.167 76.805,176.167 76.924 C 176.167 77.042,176.041 77.389,175.888 77.695 C 175.734 78.000,175.509 78.449,175.388 78.692 C 175.266 78.936,175.167 79.254,175.167 79.401 C 175.167 79.547,175.092 79.667,175.000 79.667 C 174.908 79.667,174.833 79.749,174.833 79.850 C 174.833 80.048,174.562 80.689,173.813 82.253 C 173.549 82.804,173.334 83.367,173.335 83.503 C 173.336 83.745,173.946 82.565,174.671 80.917 C 174.873 80.458,175.223 79.671,175.450 79.167 C 175.677 78.662,175.961 78.025,176.083 77.750 C 176.204 77.475,176.497 76.849,176.735 76.360 C 177.225 75.349,177.229 75.333,176.996 75.333 C 176.902 75.333,176.780 75.557,176.726 75.830 M196.949 76.366 C 196.695 76.944,196.380 77.662,196.248 77.961 C 196.117 78.260,195.895 78.766,195.755 79.086 C 195.615 79.405,195.391 79.910,195.259 80.208 C 195.126 80.506,194.834 81.162,194.609 81.667 C 193.621 83.887,193.537 84.148,193.917 83.833 C 194.054 83.719,194.167 83.457,194.167 83.250 C 194.167 83.043,194.279 82.781,194.417 82.667 C 194.554 82.553,194.667 82.313,194.667 82.134 C 194.667 81.956,194.779 81.697,194.917 81.560 C 195.054 81.422,195.167 81.127,195.167 80.905 C 195.167 80.682,195.237 80.500,195.322 80.500 C 195.408 80.500,195.526 80.331,195.585 80.125 C 195.645 79.919,195.805 79.487,195.941 79.167 C 196.078 78.846,196.253 78.433,196.330 78.250 C 196.408 78.067,196.709 77.410,196.999 76.792 C 197.290 76.173,197.501 75.588,197.469 75.491 C 197.437 75.395,197.203 75.788,196.949 76.366 M19.513 78.698 C 19.506 79.129,19.568 79.522,19.651 79.574 C 19.734 79.625,19.854 80.042,19.917 80.500 C 19.980 80.958,20.099 81.375,20.182 81.426 C 20.265 81.478,20.333 81.672,20.333 81.859 C 20.333 82.046,20.434 82.398,20.558 82.641 C 20.950 83.413,21.307 84.238,21.416 84.625 C 21.475 84.831,21.592 85.000,21.678 85.000 C 21.870 85.000,21.879 84.786,21.695 84.575 C 21.286 84.106,20.173 80.924,19.833 79.250 C 19.548 77.852,19.528 77.817,19.513 78.698 M41.755 79.395 C 42.969 80.239,46.337 81.238,49.417 81.668 C 49.967 81.745,50.679 81.861,51.000 81.926 C 51.465 82.020,51.544 82.002,51.387 81.834 C 51.279 81.718,50.641 81.586,49.970 81.541 C 49.299 81.495,48.670 81.394,48.572 81.317 C 48.475 81.240,47.950 81.127,47.406 81.066 C 46.862 81.005,46.342 80.899,46.250 80.832 C 46.158 80.764,45.729 80.657,45.296 80.595 C 44.862 80.532,44.464 80.410,44.411 80.324 C 44.357 80.237,44.145 80.167,43.939 80.167 C 43.732 80.167,43.418 80.057,43.240 79.922 C 43.062 79.787,42.795 79.675,42.645 79.672 C 42.496 79.669,42.281 79.554,42.167 79.417 C 42.053 79.279,41.839 79.167,41.693 79.167 C 41.478 79.167,41.490 79.212,41.755 79.395 M52.583 82.158 C 53.133 82.233,53.921 82.351,54.333 82.419 C 54.930 82.517,55.043 82.500,54.888 82.334 C 54.767 82.205,54.102 82.106,53.138 82.073 C 51.752 82.026,51.692 82.035,52.583 82.158 M56.167 82.657 C 58.852 83.040,58.770 83.034,58.417 82.812 C 58.233 82.697,57.447 82.586,56.667 82.564 C 55.399 82.530,55.347 82.540,56.167 82.657 M59.667 83.175 C 60.079 83.246,60.754 83.352,61.167 83.409 L 61.917 83.514 61.250 83.260 C 60.883 83.120,60.208 83.014,59.750 83.025 L 58.917 83.045 59.667 83.175 M62.750 83.754 C 63.912 84.076,64.652 84.070,63.750 83.745 C 63.383 83.613,62.821 83.509,62.500 83.514 C 61.946 83.522,61.958 83.534,62.750 83.754 M173.031 84.036 C 172.922 84.145,172.831 84.350,172.828 84.492 C 172.825 84.634,172.713 84.896,172.578 85.074 C 172.443 85.251,172.333 85.533,172.333 85.699 C 172.333 85.864,172.258 86.000,172.167 86.000 C 172.075 86.000,172.000 86.082,172.000 86.183 C 172.000 86.284,171.877 86.640,171.727 86.975 C 171.577 87.309,171.236 88.071,170.970 88.667 C 170.703 89.263,170.376 89.962,170.242 90.222 C 170.109 90.481,170.000 90.791,170.000 90.910 C 170.000 91.029,169.887 91.219,169.750 91.333 C 169.612 91.447,169.500 91.710,169.500 91.917 C 169.500 92.123,169.387 92.386,169.250 92.500 C 169.112 92.614,169.000 92.886,169.000 93.104 C 169.000 93.322,168.930 93.500,168.845 93.500 C 168.759 93.500,168.639 93.669,168.579 93.875 C 168.518 94.081,168.260 94.700,168.007 95.250 C 167.157 97.092,167.000 97.466,167.000 97.650 C 167.000 97.751,166.925 97.833,166.833 97.833 C 166.742 97.833,166.670 98.002,166.675 98.208 C 166.683 98.587,167.237 97.572,168.015 95.750 C 168.211 95.292,168.545 94.542,168.756 94.083 C 169.213 93.094,169.969 91.410,171.111 88.833 C 171.335 88.329,171.620 87.692,171.744 87.417 C 171.869 87.142,172.173 86.467,172.419 85.917 C 172.665 85.367,172.972 84.698,173.101 84.431 C 173.360 83.893,173.332 83.735,173.031 84.036 M65.083 84.231 C 65.450 84.357,66.237 84.593,66.833 84.755 C 68.243 85.137,70.774 85.967,71.442 86.265 C 71.731 86.394,72.037 86.500,72.123 86.500 C 72.265 86.500,74.966 87.846,75.638 88.252 C 79.274 90.447,81.988 92.836,83.574 95.239 C 84.344 96.408,84.707 97.101,85.928 99.750 C 86.086 100.091,86.160 100.152,86.163 99.942 C 86.165 99.773,86.062 99.436,85.933 99.192 C 85.805 98.949,85.449 98.225,85.142 97.583 C 84.835 96.942,84.527 96.392,84.458 96.361 C 84.390 96.331,84.333 96.219,84.333 96.113 C 84.333 95.862,83.203 94.191,82.713 93.716 C 82.504 93.514,82.333 93.307,82.333 93.256 C 82.333 92.930,77.750 89.167,77.353 89.167 C 77.266 89.167,77.169 89.107,77.139 89.035 C 76.997 88.699,72.674 86.338,72.183 86.328 C 72.037 86.325,71.771 86.213,71.593 86.078 C 71.415 85.943,71.115 85.831,70.926 85.828 C 70.738 85.825,70.438 85.713,70.260 85.578 C 70.082 85.443,69.772 85.333,69.571 85.333 C 69.369 85.333,68.990 85.221,68.727 85.084 C 68.465 84.947,68.059 84.835,67.825 84.834 C 67.591 84.834,67.329 84.766,67.242 84.684 C 67.080 84.532,65.818 84.199,64.917 84.071 C 64.517 84.015,64.551 84.047,65.083 84.231 M193.342 84.568 C 193.215 84.805,193.155 85.044,193.208 85.097 C 193.336 85.225,193.706 84.534,193.631 84.309 C 193.599 84.213,193.469 84.330,193.342 84.568 M21.833 85.370 C 21.833 85.522,21.904 85.691,21.990 85.744 C 22.076 85.797,22.320 86.195,22.532 86.629 C 22.743 87.062,22.954 87.454,23.000 87.500 C 23.046 87.546,23.309 87.916,23.584 88.323 C 24.358 89.470,27.313 92.333,27.722 92.333 C 27.772 92.333,28.059 92.558,28.360 92.833 C 28.661 93.108,28.955 93.333,29.012 93.333 C 29.070 93.333,29.631 93.671,30.259 94.083 C 30.887 94.496,31.492 94.833,31.603 94.833 C 31.715 94.833,31.831 94.891,31.861 94.962 C 31.892 95.033,32.442 95.343,33.083 95.652 C 33.725 95.960,34.449 96.315,34.692 96.440 C 34.936 96.565,35.273 96.669,35.442 96.672 C 35.612 96.675,35.896 96.787,36.074 96.922 C 36.251 97.057,36.589 97.169,36.824 97.172 C 37.058 97.175,37.396 97.287,37.574 97.422 C 37.751 97.557,38.103 97.667,38.355 97.667 C 38.607 97.667,38.857 97.737,38.911 97.824 C 38.964 97.910,39.362 98.032,39.796 98.095 C 40.229 98.158,40.658 98.256,40.750 98.312 C 40.999 98.466,42.656 98.844,43.417 98.921 C 44.333 99.013,42.883 98.595,40.240 98.006 C 39.868 97.923,39.381 97.783,39.157 97.695 C 38.933 97.607,38.300 97.403,37.750 97.242 C 37.200 97.080,36.514 96.847,36.225 96.724 C 35.936 96.601,35.616 96.500,35.514 96.500 C 35.412 96.500,35.199 96.430,35.039 96.344 C 34.880 96.257,34.150 95.908,33.417 95.568 C 28.696 93.376,24.602 89.965,22.835 86.750 C 22.045 85.313,21.833 85.022,21.833 85.370 M225.673 87.271 C 225.689 87.664,226.155 88.260,226.161 87.895 C 226.164 87.700,226.054 87.447,225.917 87.333 C 225.779 87.219,225.669 87.191,225.673 87.271 M226.167 88.399 C 226.167 88.457,226.239 88.635,226.327 88.794 C 226.416 88.953,226.649 89.458,226.847 89.917 C 227.238 90.829,227.648 91.745,228.971 94.667 C 229.240 95.263,229.638 96.158,229.855 96.657 C 230.644 98.471,230.989 99.099,230.995 98.729 C 230.998 98.534,230.887 98.281,230.750 98.167 C 230.612 98.053,230.500 97.790,230.500 97.583 C 230.500 97.377,230.387 97.114,230.250 97.000 C 230.112 96.886,230.000 96.695,230.000 96.576 C 230.000 96.458,229.891 96.148,229.758 95.889 C 229.624 95.629,229.297 94.929,229.030 94.333 C 228.764 93.737,228.423 92.976,228.273 92.641 C 228.123 92.307,228.000 91.951,228.000 91.850 C 228.000 91.749,227.925 91.667,227.833 91.667 C 227.742 91.667,227.667 91.547,227.667 91.401 C 227.667 91.148,227.579 90.945,226.941 89.724 C 226.790 89.435,226.667 89.088,226.667 88.953 C 226.667 88.818,226.554 88.614,226.417 88.500 C 226.279 88.386,226.167 88.340,226.167 88.399 M166.364 98.869 C 166.255 98.978,166.164 99.183,166.161 99.325 C 166.158 99.467,166.046 99.729,165.911 99.907 C 165.777 100.085,165.667 100.357,165.667 100.511 C 165.667 100.666,165.554 100.886,165.417 101.000 C 165.279 101.114,165.167 101.386,165.167 101.604 C 165.167 101.822,165.097 102.000,165.011 102.000 C 164.926 102.000,164.807 102.169,164.748 102.375 C 164.688 102.581,164.451 103.162,164.220 103.667 C 163.989 104.171,163.688 104.846,163.552 105.167 C 163.416 105.487,163.198 105.962,163.069 106.222 C 162.939 106.481,162.833 106.791,162.833 106.910 C 162.833 107.029,162.721 107.219,162.583 107.333 C 162.446 107.447,162.333 107.719,162.333 107.937 C 162.333 108.155,162.260 108.333,162.170 108.333 C 162.080 108.333,161.956 108.540,161.895 108.792 C 161.834 109.044,161.682 109.398,161.558 109.579 C 161.259 110.017,161.272 110.915,161.583 111.226 C 161.721 111.364,161.833 111.559,161.833 111.660 C 161.833 111.761,161.946 111.887,162.083 111.940 C 162.221 111.992,162.333 112.101,162.333 112.180 C 162.333 112.299,164.929 115.938,165.498 116.618 C 165.591 116.729,165.667 116.897,165.667 116.993 C 165.667 117.089,165.744 117.167,165.839 117.167 C 165.933 117.167,166.060 117.298,166.121 117.458 C 166.227 117.736,167.247 119.206,168.044 120.227 C 168.249 120.490,168.484 120.846,168.567 121.019 C 168.650 121.192,168.781 121.333,168.859 121.333 C 168.936 121.333,169.000 121.448,169.000 121.589 C 169.000 121.729,169.112 121.887,169.250 121.940 C 169.387 121.992,169.500 122.102,169.500 122.182 C 169.500 122.318,171.005 124.460,171.873 125.561 C 172.081 125.823,172.318 126.179,172.400 126.352 C 172.483 126.525,172.614 126.667,172.692 126.667 C 172.770 126.667,172.833 126.782,172.833 126.922 C 172.833 127.062,172.946 127.220,173.083 127.273 C 173.221 127.326,173.333 127.469,173.333 127.592 C 173.333 127.829,173.956 128.333,174.249 128.333 C 174.435 128.333,174.641 127.959,175.492 126.083 C 175.783 125.442,176.129 124.704,176.261 124.445 C 176.392 124.185,176.500 123.876,176.500 123.757 C 176.500 123.638,176.612 123.447,176.750 123.333 C 176.887 123.219,177.000 122.948,177.000 122.730 C 177.000 122.512,177.074 122.333,177.163 122.333 C 177.253 122.333,177.377 122.127,177.439 121.875 C 177.501 121.623,177.634 121.362,177.734 121.294 C 178.168 121.003,219.538 121.149,219.862 121.442 C 220.195 121.744,220.290 121.524,219.967 121.200 C 219.813 121.047,214.857 121.000,198.673 121.000 L 177.579 121.000 177.211 121.792 C 177.009 122.227,176.607 123.108,176.318 123.750 C 176.028 124.392,175.530 125.479,175.210 126.167 C 174.890 126.854,174.564 127.585,174.485 127.792 C 174.233 128.450,173.849 128.084,171.996 125.417 C 171.805 125.142,171.215 124.317,170.685 123.583 C 170.154 122.850,169.384 121.763,168.973 121.167 C 168.562 120.571,167.594 119.212,166.821 118.147 C 161.578 110.918,161.500 110.805,161.500 110.423 C 161.500 110.293,161.841 109.451,162.257 108.552 C 163.173 106.572,163.221 106.467,163.677 105.417 C 163.875 104.958,164.217 104.190,164.436 103.708 C 164.654 103.227,165.012 102.440,165.231 101.958 C 165.450 101.477,165.790 100.708,165.987 100.250 C 166.184 99.792,166.423 99.278,166.517 99.109 C 166.726 98.737,166.636 98.597,166.364 98.869 M44.811 99.242 C 45.119 99.384,45.757 99.491,46.227 99.479 L 47.083 99.458 46.417 99.335 C 46.050 99.267,45.413 99.160,45.000 99.097 L 44.250 98.983 44.811 99.242 M231.000 99.224 C 231.000 99.256,231.105 99.500,231.233 99.766 C 231.362 100.032,231.653 100.662,231.880 101.167 C 232.854 103.324,233.316 104.235,233.324 104.013 C 233.329 103.883,233.102 103.283,232.819 102.680 C 231.652 100.191,231.523 99.901,231.419 99.542 C 231.333 99.242,231.000 98.990,231.000 99.224 M47.833 99.735 C 48.176 99.876,48.933 99.969,49.667 99.962 L 50.917 99.949 49.917 99.832 C 49.367 99.767,48.542 99.665,48.083 99.605 L 47.250 99.496 47.833 99.735 M51.281 100.168 C 51.408 100.303,52.066 100.396,53.114 100.426 C 54.503 100.467,54.599 100.454,53.750 100.344 C 53.200 100.273,52.375 100.156,51.917 100.086 C 51.248 99.982,51.122 99.998,51.281 100.168 M86.245 100.625 C 86.492 101.258,86.996 102.980,87.281 104.167 C 87.721 106.002,87.718 112.664,87.276 114.583 C 86.280 118.914,84.525 122.835,82.579 125.083 C 80.522 127.460,76.498 131.000,75.853 131.000 C 75.773 131.000,75.614 131.112,75.500 131.250 C 74.927 131.940,77.551 130.353,78.276 129.571 C 78.482 129.349,78.711 129.165,78.784 129.163 C 78.915 129.159,82.019 126.031,82.840 125.076 C 83.543 124.257,84.551 122.652,85.137 121.417 C 85.441 120.775,85.798 120.038,85.929 119.778 C 86.060 119.519,86.169 119.181,86.172 119.028 C 86.175 118.875,86.287 118.604,86.422 118.426 C 86.557 118.249,86.667 117.938,86.667 117.737 C 86.667 117.536,86.779 117.157,86.916 116.894 C 87.053 116.631,87.165 116.150,87.166 115.825 C 87.166 115.500,87.250 115.150,87.352 115.048 C 88.037 114.363,88.023 104.290,87.336 103.603 C 87.243 103.510,87.166 103.205,87.166 102.925 C 87.165 102.645,87.053 102.202,86.916 101.939 C 86.779 101.677,86.667 101.327,86.667 101.161 C 86.667 100.728,86.491 100.333,86.298 100.333 C 86.206 100.333,86.182 100.465,86.245 100.625 M54.946 100.666 C 55.054 100.782,55.692 100.914,56.363 100.959 C 57.034 101.005,57.660 101.103,57.754 101.177 C 57.848 101.251,58.336 101.364,58.837 101.428 C 59.339 101.492,59.825 101.603,59.917 101.674 C 60.008 101.745,60.365 101.856,60.710 101.921 C 61.055 101.985,61.378 102.104,61.428 102.186 C 61.479 102.267,61.684 102.332,61.885 102.330 C 62.577 102.322,61.196 101.819,58.667 101.156 C 58.254 101.048,57.467 100.899,56.917 100.826 C 56.367 100.752,55.654 100.639,55.333 100.574 C 54.868 100.480,54.790 100.498,54.946 100.666 M62.500 102.583 C 62.614 102.721,62.877 102.833,63.083 102.833 C 63.290 102.833,63.553 102.946,63.667 103.083 C 63.781 103.221,64.006 103.333,64.167 103.333 C 64.328 103.333,64.553 103.446,64.667 103.583 C 64.781 103.721,64.959 103.833,65.062 103.833 C 65.296 103.832,67.667 106.302,67.667 106.546 C 67.667 106.644,67.798 106.869,67.958 107.046 C 68.564 107.716,68.376 111.504,67.667 112.916 C 67.107 114.032,65.417 116.000,65.019 116.000 C 64.917 116.000,64.833 116.056,64.832 116.125 C 64.831 116.194,64.418 116.433,63.915 116.657 C 63.412 116.881,63.000 117.124,63.000 117.199 C 63.000 117.273,62.822 117.333,62.604 117.333 C 62.386 117.333,62.114 117.446,62.000 117.583 C 61.886 117.721,61.554 117.833,61.261 117.833 C 60.805 117.833,59.812 118.313,60.238 118.328 C 60.896 118.351,63.357 117.270,65.012 116.232 C 67.670 114.565,69.443 110.299,68.481 107.883 C 67.589 105.643,66.201 104.133,64.019 103.030 C 62.552 102.288,62.159 102.172,62.500 102.583 M233.333 104.377 C 233.333 104.424,233.445 104.677,233.582 104.939 C 233.798 105.353,233.831 105.369,233.832 105.062 C 233.833 104.867,233.721 104.614,233.583 104.500 C 233.446 104.386,233.333 104.331,233.333 104.377 M233.833 105.558 C 233.833 105.589,233.938 105.833,234.067 106.099 C 234.195 106.366,234.486 106.996,234.714 107.500 C 234.941 108.004,235.315 108.829,235.545 109.333 C 235.774 109.837,236.125 110.625,236.323 111.083 C 236.882 112.371,237.049 112.674,237.146 112.577 C 237.228 112.495,237.016 111.994,236.397 110.808 C 236.270 110.564,236.167 110.246,236.167 110.099 C 236.167 109.953,236.092 109.833,236.000 109.833 C 235.908 109.833,235.833 109.714,235.833 109.567 C 235.833 109.421,235.734 109.102,235.612 108.859 C 235.491 108.616,235.266 108.167,235.112 107.861 C 234.959 107.556,234.833 107.209,234.833 107.090 C 234.833 106.971,234.730 106.788,234.603 106.683 C 234.477 106.578,234.329 106.269,234.274 105.996 C 234.198 105.616,233.833 105.253,233.833 105.558 M30.083 106.505 C 29.442 106.863,28.804 107.201,28.667 107.256 C 28.529 107.312,28.304 107.427,28.167 107.513 C 28.029 107.599,27.804 107.711,27.667 107.763 C 27.529 107.815,27.304 107.924,27.167 108.005 C 27.029 108.086,26.354 108.437,25.667 108.784 C 24.979 109.132,24.378 109.467,24.332 109.528 C 24.285 109.590,24.041 109.692,23.790 109.755 C 23.539 109.818,23.333 109.918,23.332 109.976 C 23.331 110.035,22.918 110.266,22.415 110.490 C 21.912 110.714,21.500 110.958,21.500 111.032 C 21.500 111.210,21.727 111.204,21.925 111.020 C 22.012 110.939,23.358 110.215,24.917 109.411 C 26.475 108.608,28.525 107.549,29.473 107.059 C 31.493 106.013,31.609 105.996,31.918 106.708 C 32.152 107.246,32.154 107.247,32.160 106.801 C 32.164 106.521,32.027 106.255,31.796 106.093 C 31.332 105.768,31.460 105.737,30.083 106.505 M32.167 107.419 C 32.167 107.466,32.232 107.635,32.311 107.794 C 32.390 107.953,32.709 108.608,33.019 109.249 C 33.994 111.265,36.101 113.798,37.664 114.833 C 37.871 114.971,38.139 115.177,38.259 115.292 C 38.378 115.406,38.516 115.500,38.564 115.500 C 38.612 115.500,38.936 115.694,39.284 115.931 C 40.124 116.504,41.703 117.236,43.017 117.663 C 43.603 117.853,44.346 118.095,44.667 118.201 C 45.212 118.380,46.074 118.568,47.250 118.765 L 47.750 118.849 47.333 118.597 C 47.104 118.459,46.575 118.342,46.157 118.339 C 45.739 118.336,45.251 118.223,45.074 118.089 C 44.896 117.954,44.525 117.839,44.250 117.833 C 43.975 117.828,43.604 117.713,43.426 117.578 C 43.249 117.443,42.892 117.333,42.635 117.333 C 42.377 117.333,42.167 117.258,42.167 117.167 C 42.167 117.075,42.069 117.000,41.950 117.000 C 41.648 117.000,39.542 115.905,38.894 115.411 C 38.598 115.185,38.294 114.999,38.219 114.997 C 38.145 114.996,37.821 114.763,37.500 114.479 C 37.179 114.195,36.729 113.800,36.500 113.601 C 36.119 113.270,35.489 112.577,34.559 111.465 C 34.362 111.229,34.151 110.878,34.089 110.685 C 34.028 110.492,33.908 110.333,33.822 110.333 C 33.737 110.333,33.667 110.230,33.667 110.104 C 33.667 109.977,33.554 109.781,33.417 109.667 C 33.279 109.553,33.167 109.324,33.167 109.158 C 33.167 108.993,33.054 108.745,32.917 108.607 C 32.779 108.470,32.667 108.245,32.667 108.109 C 32.667 107.737,32.484 107.333,32.316 107.333 C 32.234 107.333,32.167 107.372,32.167 107.419 M20.667 111.417 C 20.553 111.554,20.323 111.667,20.156 111.667 C 19.989 111.667,19.811 111.735,19.760 111.818 C 19.708 111.901,19.085 112.251,18.375 112.595 C 17.665 112.939,17.058 113.284,17.028 113.361 C 16.997 113.437,16.838 113.500,16.673 113.500 C 16.509 113.500,16.281 113.612,16.167 113.750 C 16.053 113.888,15.871 114.000,15.763 114.000 C 15.154 114.000,15.190 114.408,15.978 116.417 C 16.416 117.535,17.584 119.937,18.005 120.583 C 18.183 120.858,18.382 121.193,18.446 121.327 C 18.600 121.649,19.993 123.681,20.231 123.930 C 20.333 124.038,20.529 124.291,20.667 124.493 C 21.812 126.172,25.402 129.667,25.982 129.667 C 26.084 129.667,26.167 129.736,26.167 129.820 C 26.167 129.904,26.448 130.144,26.792 130.354 C 27.135 130.564,27.442 130.795,27.472 130.868 C 27.503 130.941,27.596 131.000,27.679 131.000 C 27.762 131.000,28.323 131.337,28.926 131.750 C 29.528 132.162,30.097 132.500,30.189 132.500 C 30.282 132.500,30.470 132.612,30.607 132.750 C 30.745 132.887,31.002 133.000,31.179 133.000 C 31.355 133.000,31.500 133.075,31.500 133.167 C 31.500 133.258,31.594 133.336,31.708 133.339 C 31.823 133.342,32.217 133.490,32.583 133.667 C 32.950 133.844,33.377 133.991,33.532 133.994 C 33.687 133.997,33.860 134.075,33.917 134.167 C 33.973 134.258,34.173 134.333,34.360 134.333 C 34.547 134.333,34.950 134.452,35.256 134.598 C 35.563 134.743,35.945 134.836,36.107 134.805 C 36.269 134.774,35.730 134.529,34.909 134.260 C 32.901 133.603,29.421 132.042,29.167 131.684 C 29.121 131.619,28.675 131.318,28.176 131.015 C 22.908 127.812,18.476 122.283,15.938 115.750 C 15.394 114.348,15.354 114.406,17.750 113.141 C 18.942 112.512,20.093 111.922,20.308 111.830 C 20.976 111.544,21.450 111.167,21.141 111.167 C 20.994 111.167,20.781 111.279,20.667 111.417 M58.000 118.599 C 57.585 118.852,57.586 118.853,58.167 118.740 C 58.487 118.677,59.050 118.570,59.417 118.501 L 60.083 118.375 59.250 118.360 C 58.771 118.352,58.239 118.453,58.000 118.599 M50.250 119.097 C 51.874 119.244,53.065 119.261,54.167 119.154 C 55.038 119.070,56.087 118.979,56.500 118.952 C 56.913 118.925,55.150 118.899,52.583 118.894 L 47.917 118.885 50.250 119.097 M130.339 119.432 C 130.336 119.533,130.524 119.833,130.757 120.099 C 130.989 120.365,131.343 120.846,131.543 121.167 C 131.911 121.759,132.084 121.993,132.458 122.411 C 132.573 122.538,132.667 122.689,132.667 122.745 C 132.667 122.936,133.396 123.833,133.551 123.833 C 133.636 123.833,133.521 123.590,133.294 123.292 C 133.067 122.994,132.498 122.188,132.028 121.500 C 130.983 119.968,130.347 119.190,130.339 119.432 M220.179 122.105 C 220.172 122.300,220.279 122.553,220.417 122.667 C 220.554 122.781,220.667 122.985,220.667 123.120 C 220.667 123.255,220.772 123.564,220.902 123.808 C 221.278 124.516,221.667 125.452,221.667 125.650 C 221.667 125.751,221.742 125.833,221.833 125.833 C 221.925 125.833,222.000 125.953,222.000 126.099 C 222.000 126.246,222.101 126.564,222.225 126.808 C 222.348 127.051,222.582 127.550,222.743 127.917 C 222.905 128.283,223.104 128.696,223.186 128.833 C 223.268 128.971,223.377 129.196,223.428 129.333 C 223.579 129.740,224.021 130.717,224.269 131.192 C 224.396 131.436,224.500 131.745,224.500 131.880 C 224.500 132.015,224.612 132.219,224.750 132.333 C 225.097 132.621,225.072 132.515,224.487 131.220 C 224.204 130.595,223.875 129.858,223.755 129.583 C 223.529 129.067,223.066 128.039,222.213 126.167 C 221.941 125.571,221.614 124.833,221.485 124.526 C 220.819 122.947,220.190 121.780,220.179 122.105 M133.667 124.136 C 133.667 124.222,133.779 124.386,133.917 124.500 C 134.054 124.614,134.167 124.803,134.167 124.919 C 134.167 125.036,134.279 125.174,134.417 125.227 C 134.554 125.280,134.667 125.438,134.667 125.578 C 134.667 125.718,134.723 125.835,134.792 125.838 C 134.860 125.840,135.100 126.140,135.325 126.504 C 135.550 126.869,135.794 127.167,135.867 127.167 C 135.940 127.167,136.000 127.247,136.000 127.346 C 136.000 127.445,136.337 127.964,136.750 128.500 C 137.162 129.036,137.501 129.537,137.503 129.612 C 137.504 129.688,137.710 129.989,137.961 130.282 C 138.212 130.574,138.754 131.312,139.167 131.921 C 139.579 132.529,140.010 133.128,140.125 133.252 C 140.240 133.375,140.333 133.559,140.333 133.660 C 140.333 133.761,140.446 133.887,140.583 133.940 C 140.721 133.992,140.833 134.102,140.833 134.184 C 140.833 134.338,142.075 136.106,142.694 136.833 L 143.049 137.250 156.933 137.250 C 166.535 137.250,170.871 137.195,170.994 137.072 C 171.172 136.895,170.834 135.995,170.427 135.562 C 170.329 135.459,170.137 135.206,170.000 135.000 C 169.862 134.794,169.671 134.541,169.574 134.438 C 169.477 134.335,169.348 134.119,169.288 133.958 C 169.227 133.798,169.100 133.667,169.005 133.667 C 168.911 133.667,168.833 133.593,168.833 133.502 C 168.833 133.355,167.433 131.347,166.460 130.101 C 166.253 129.835,166.031 129.498,165.966 129.351 C 165.788 128.942,165.200 128.245,165.110 128.336 C 165.067 128.380,165.418 128.955,165.891 129.613 C 166.363 130.270,167.313 131.605,168.000 132.579 C 168.688 133.552,169.329 134.439,169.425 134.550 C 169.969 135.174,170.667 136.357,170.667 136.655 L 170.667 137.000 156.863 137.000 L 143.059 137.000 141.738 135.156 C 139.530 132.075,138.097 130.062,137.833 129.674 C 137.696 129.471,137.033 128.542,136.359 127.611 C 135.686 126.679,134.872 125.523,134.551 125.041 C 133.958 124.153,133.667 123.854,133.667 124.136 M362.278 129.778 C 361.650 130.406,362.259 131.185,363.482 131.316 L 364.417 131.417 364.463 134.072 C 364.511 136.855,364.591 137.167,365.259 137.167 C 366.078 137.167,366.167 136.856,366.167 133.988 C 366.167 131.095,366.119 131.225,367.141 131.316 C 368.015 131.394,368.684 130.417,368.133 129.867 C 367.918 129.651,362.487 129.569,362.278 129.778 M369.350 129.969 C 369.119 130.401,369.102 136.140,369.329 136.739 C 369.453 137.065,369.609 137.167,369.984 137.167 C 370.883 137.167,370.999 136.871,371.013 134.530 C 371.020 133.368,371.069 132.529,371.122 132.667 C 371.175 132.804,371.548 133.348,371.952 133.875 C 372.933 135.156,373.241 135.151,374.194 133.839 C 375.150 132.522,375.235 132.601,375.333 134.895 C 375.420 136.917,375.513 137.158,376.208 137.164 C 377.057 137.172,377.167 136.727,377.167 133.283 C 377.167 131.004,377.108 130.008,376.967 129.867 C 376.609 129.509,375.371 129.620,375.009 130.042 C 374.832 130.248,374.532 130.597,374.343 130.817 C 374.155 131.037,374.000 131.263,374.000 131.319 C 374.000 131.375,373.805 131.630,373.567 131.887 C 373.065 132.428,372.815 132.305,372.126 131.178 C 371.926 130.851,371.673 130.491,371.563 130.378 C 371.453 130.265,371.334 130.087,371.300 129.982 C 371.171 129.598,369.554 129.587,369.350 129.969 M367.969 130.458 C 367.919 130.892,367.865 130.919,366.959 130.967 C 365.795 131.027,365.845 130.891,365.790 134.167 L 365.750 136.583 365.212 136.635 L 364.675 136.687 364.629 133.885 L 364.583 131.083 363.632 130.999 C 362.612 130.908,362.229 130.680,362.389 130.261 C 362.475 130.039,362.898 130.000,365.256 130.000 L 368.022 130.000 367.969 130.458 M371.937 131.333 C 373.108 132.969,373.081 132.969,374.276 131.333 L 375.250 130.000 376.000 130.042 L 376.750 130.083 376.750 133.333 L 376.750 136.583 376.208 136.636 L 375.667 136.688 375.664 134.552 C 375.661 132.048,375.549 131.719,374.927 132.390 C 374.692 132.643,374.498 132.903,374.497 132.967 C 374.495 133.031,374.163 133.458,373.760 133.917 C 372.911 134.883,372.939 134.894,371.766 133.121 C 370.861 131.754,370.690 131.972,370.630 134.558 L 370.583 136.583 370.042 136.636 L 369.500 136.688 369.500 133.344 L 369.500 130.000 370.241 130.000 C 370.977 130.000,370.989 130.010,371.937 131.333 M74.273 131.964 C 73.831 132.207,73.555 132.435,73.661 132.470 C 73.766 132.505,73.985 132.414,74.148 132.267 C 74.310 132.120,74.564 132.000,74.712 132.000 C 74.969 132.000,75.266 131.711,75.139 131.583 C 75.105 131.549,74.716 131.721,74.273 131.964 M72.063 133.095 C 70.894 133.645,70.227 133.907,68.583 134.463 C 68.076 134.635,67.868 134.768,68.052 134.803 C 68.218 134.835,68.604 134.743,68.910 134.598 C 69.217 134.452,69.550 134.333,69.652 134.333 C 69.754 134.333,69.968 134.262,70.127 134.175 C 70.538 133.950,71.516 133.546,71.958 133.419 C 72.165 133.359,72.333 133.241,72.333 133.155 C 72.333 133.070,72.465 132.999,72.625 132.997 C 72.955 132.995,73.448 132.723,73.329 132.611 C 73.285 132.570,72.716 132.788,72.063 133.095 M36.907 135.089 C 37.085 135.223,37.460 135.330,37.740 135.326 C 38.240 135.319,38.237 135.314,37.583 135.079 C 36.736 134.773,36.495 134.777,36.907 135.089 M66.908 134.984 C 66.821 135.067,66.600 135.170,66.417 135.214 C 66.188 135.269,66.240 135.299,66.583 135.309 C 66.858 135.316,67.229 135.213,67.407 135.078 C 67.726 134.836,67.726 134.833,67.399 134.833 C 67.216 134.833,66.995 134.901,66.908 134.984 M38.583 135.559 C 38.770 135.707,39.210 135.818,39.583 135.811 L 40.250 135.799 39.667 135.640 C 38.315 135.272,38.211 135.264,38.583 135.559 M65.301 135.421 C 65.252 135.470,64.884 135.574,64.481 135.653 L 63.750 135.797 64.510 135.815 C 64.946 135.826,65.407 135.729,65.593 135.589 C 65.857 135.389,65.868 135.343,65.653 135.339 C 65.508 135.336,65.349 135.373,65.301 135.421 M40.628 136.014 C 40.761 136.156,41.287 136.252,42.045 136.273 C 43.167 136.305,43.192 136.298,42.417 136.177 C 41.958 136.105,41.321 135.988,41.000 135.917 C 40.514 135.811,40.452 135.827,40.628 136.014 M62.951 135.938 C 62.893 135.996,62.412 136.104,61.881 136.179 L 60.917 136.315 62.137 136.262 C 63.218 136.216,64.338 135.833,63.394 135.833 C 63.208 135.833,63.008 135.880,62.951 135.938 M43.557 136.509 C 44.665 137.200,60.063 137.196,60.718 136.504 C 60.876 136.337,60.798 136.317,60.333 136.403 C 57.806 136.871,47.230 136.877,43.917 136.411 C 43.371 136.334,43.306 136.352,43.557 136.509 ","stroke":"none","fill":"#c9c9c9","fill-rule":"evenodd"}}),_c('path',{attrs:{"id":"path3","d":"M0.000 91.250 L 0.000 182.500 200.000 182.500 L 400.000 182.500 400.000 91.250 L 400.000 0.000 200.000 0.000 L 0.000 0.000 0.000 91.250 M190.801 18.438 C 190.828 18.632,190.735 18.908,190.592 19.051 C 190.450 19.193,190.333 19.382,190.333 19.470 C 190.333 19.559,190.221 19.674,190.083 19.727 C 189.946 19.780,189.833 19.908,189.833 20.012 C 189.833 20.168,189.000 21.354,188.671 21.667 C 188.623 21.712,188.508 21.873,188.417 22.024 C 187.741 23.133,186.762 24.500,186.643 24.500 C 186.565 24.500,186.500 24.606,186.500 24.736 C 186.500 24.866,186.444 24.997,186.375 25.028 C 186.306 25.058,185.950 25.532,185.583 26.080 C 184.869 27.149,184.700 27.381,184.375 27.744 C 184.260 27.872,184.167 28.049,184.167 28.137 C 184.167 28.225,184.054 28.341,183.917 28.394 C 183.779 28.446,183.667 28.567,183.667 28.661 C 183.667 28.799,182.653 30.304,182.035 31.083 C 181.962 31.175,181.652 31.625,181.345 32.083 C 181.038 32.542,180.704 32.993,180.602 33.087 C 180.500 33.181,180.342 33.382,180.250 33.534 C 179.674 34.488,178.234 36.500,178.128 36.500 C 178.057 36.500,178.000 36.581,178.000 36.679 C 178.000 36.778,177.676 37.284,177.279 37.804 C 176.882 38.324,176.510 38.881,176.451 39.042 C 176.392 39.202,176.266 39.333,176.172 39.333 C 176.077 39.333,176.000 39.411,176.000 39.507 C 176.000 39.603,175.922 39.771,175.826 39.882 C 175.730 39.993,175.282 40.608,174.830 41.250 C 174.378 41.892,173.838 42.634,173.629 42.899 C 173.421 43.165,173.196 43.521,173.130 43.691 C 173.065 43.861,172.933 44.000,172.839 44.000 C 172.744 44.000,172.667 44.074,172.667 44.164 C 172.667 44.297,171.084 46.591,170.538 47.250 C 170.462 47.342,170.350 47.548,170.288 47.708 C 170.227 47.869,170.100 48.000,170.005 48.000 C 169.911 48.000,169.833 48.075,169.833 48.166 C 169.833 48.339,168.527 50.218,168.085 50.681 C 167.947 50.826,167.833 51.026,167.833 51.125 C 167.833 51.224,167.774 51.331,167.701 51.361 C 167.629 51.392,167.397 51.698,167.188 52.042 C 166.978 52.385,166.737 52.667,166.653 52.667 C 166.569 52.667,166.500 52.750,166.500 52.851 C 166.500 52.952,166.275 53.319,166.000 53.667 C 165.725 54.014,165.500 54.347,165.500 54.406 C 165.500 54.465,165.422 54.605,165.326 54.715 C 165.230 54.826,164.559 55.742,163.833 56.750 C 163.108 57.758,162.436 58.674,162.341 58.785 C 162.245 58.895,162.167 59.066,162.167 59.165 C 162.167 59.263,162.054 59.387,161.917 59.440 C 161.779 59.492,161.667 59.602,161.667 59.684 C 161.667 59.766,161.348 60.272,160.958 60.810 C 160.569 61.348,160.137 61.957,160.000 62.164 C 159.862 62.371,159.656 62.639,159.542 62.759 C 159.427 62.878,159.333 63.040,159.333 63.118 C 159.333 63.195,159.127 63.491,158.875 63.774 C 158.305 64.415,158.019 64.832,157.892 65.208 C 157.839 65.369,157.737 65.500,157.667 65.500 C 157.597 65.500,157.253 65.950,156.903 66.500 C 156.553 67.050,156.206 67.500,156.133 67.500 C 156.060 67.500,156.000 67.581,156.000 67.679 C 156.000 67.778,155.662 68.297,155.250 68.833 C 154.837 69.369,154.500 69.891,154.500 69.993 C 154.500 70.094,154.387 70.220,154.250 70.273 C 154.112 70.326,154.000 70.439,154.000 70.525 C 154.000 70.611,153.922 70.771,153.826 70.882 C 153.730 70.993,153.283 71.608,152.833 72.250 C 152.384 72.892,151.937 73.507,151.841 73.618 C 151.745 73.729,151.667 73.889,151.667 73.975 C 151.667 74.061,151.554 74.174,151.417 74.227 C 151.279 74.280,151.167 74.400,151.167 74.494 C 151.167 74.640,150.036 76.306,149.497 76.955 C 149.403 77.067,149.092 77.517,148.805 77.955 C 148.517 78.392,148.200 78.827,148.100 78.921 C 147.999 79.014,147.842 79.215,147.750 79.367 C 147.519 79.750,145.859 82.148,145.660 82.388 C 145.571 82.495,145.080 83.165,144.571 83.875 C 143.579 85.256,143.476 85.326,143.073 84.875 C 142.314 84.026,141.826 83.385,141.740 83.125 C 141.687 82.965,141.574 82.833,141.489 82.833 C 141.403 82.833,141.333 82.750,141.333 82.649 C 141.333 82.548,141.108 82.181,140.833 81.833 C 140.558 81.486,140.333 81.161,140.333 81.111 C 140.333 81.061,140.108 80.774,139.833 80.473 C 139.558 80.172,139.333 79.836,139.333 79.727 C 139.333 79.617,139.268 79.503,139.188 79.472 C 139.064 79.424,137.573 77.343,137.083 76.533 C 136.992 76.382,136.834 76.181,136.734 76.087 C 136.633 75.993,136.295 75.543,135.984 75.086 C 135.672 74.628,135.329 74.161,135.223 74.047 C 135.060 73.872,133.827 72.099,133.250 71.211 C 133.158 71.069,132.915 70.766,132.708 70.536 C 132.502 70.306,132.333 70.065,132.333 70.001 C 132.333 69.937,132.202 69.730,132.042 69.541 C 131.881 69.352,131.637 69.032,131.500 68.829 C 131.362 68.626,131.044 68.170,130.792 67.815 C 130.168 66.937,130.213 66.501,131.042 65.357 C 131.431 64.819,131.862 64.212,132.000 64.007 C 132.137 63.803,132.381 63.481,132.542 63.292 C 132.702 63.103,132.833 62.896,132.833 62.832 C 132.833 62.768,133.002 62.527,133.208 62.297 C 133.415 62.067,133.658 61.762,133.750 61.618 C 134.427 60.559,135.736 58.740,135.855 58.694 C 135.935 58.664,136.000 58.564,136.000 58.473 C 136.000 58.382,136.337 57.869,136.750 57.333 C 137.162 56.797,137.501 56.297,137.503 56.221 C 137.504 56.145,137.710 55.844,137.961 55.551 C 138.212 55.259,138.754 54.521,139.167 53.913 C 139.579 53.304,140.010 52.705,140.125 52.581 C 140.240 52.458,140.333 52.274,140.333 52.173 C 140.333 52.072,140.446 51.946,140.583 51.894 C 140.721 51.841,140.833 51.731,140.833 51.649 C 140.833 51.568,141.152 51.061,141.542 50.523 C 141.931 49.985,142.362 49.376,142.500 49.169 C 142.637 48.962,142.828 48.708,142.923 48.605 C 143.018 48.501,143.268 48.135,143.478 47.792 C 143.688 47.448,143.921 47.167,143.994 47.167 C 144.068 47.167,144.172 47.035,144.226 46.875 C 144.365 46.460,144.714 45.939,144.958 45.783 C 145.073 45.710,145.167 45.541,145.167 45.408 C 145.167 45.275,145.223 45.165,145.292 45.162 C 145.360 45.160,145.600 44.860,145.825 44.496 C 146.050 44.131,146.294 43.833,146.367 43.833 C 146.440 43.833,146.500 43.753,146.500 43.654 C 146.500 43.555,146.837 43.036,147.250 42.500 C 147.662 41.964,148.000 41.442,148.000 41.341 C 148.000 41.239,148.112 41.113,148.250 41.060 C 148.387 41.008,148.500 40.894,148.500 40.808 C 148.500 40.723,148.578 40.562,148.674 40.451 C 148.770 40.341,149.217 39.725,149.667 39.083 C 150.116 38.442,150.548 37.842,150.626 37.750 C 150.703 37.658,150.817 37.452,150.878 37.292 C 150.939 37.131,151.067 37.000,151.161 37.000 C 151.256 37.000,151.333 36.925,151.333 36.834 C 151.333 36.742,151.652 36.228,152.042 35.690 C 152.431 35.152,152.862 34.543,153.000 34.336 C 153.137 34.129,153.328 33.875,153.423 33.771 C 153.518 33.668,153.768 33.302,153.978 32.958 C 154.188 32.615,154.421 32.333,154.494 32.333 C 154.568 32.333,154.672 32.202,154.726 32.042 C 154.865 31.627,155.214 31.106,155.458 30.950 C 155.573 30.877,155.667 30.708,155.667 30.575 C 155.667 30.442,155.723 30.331,155.792 30.329 C 155.860 30.326,156.100 30.026,156.325 29.662 C 156.550 29.298,156.794 29.000,156.867 29.000 C 156.940 29.000,157.000 28.921,157.000 28.823 C 157.000 28.673,157.771 27.549,158.331 26.882 C 158.424 26.771,158.500 26.606,158.500 26.515 C 158.500 26.424,158.594 26.290,158.708 26.217 C 158.823 26.143,158.992 25.958,159.083 25.804 C 159.543 25.032,161.062 22.910,161.188 22.861 C 161.268 22.831,161.333 22.703,161.333 22.578 C 161.333 22.452,161.427 22.290,161.542 22.217 C 161.656 22.143,161.825 21.958,161.917 21.805 C 162.204 21.325,163.390 19.587,163.489 19.500 C 163.542 19.454,163.801 19.097,164.065 18.707 L 164.547 17.998 177.648 18.041 L 190.750 18.083 190.801 18.438 M56.101 48.996 C 57.943 49.069,59.593 49.203,59.767 49.293 C 59.941 49.383,60.632 49.495,61.304 49.540 C 61.975 49.586,62.608 49.708,62.712 49.812 C 62.815 49.915,63.204 50.000,63.575 50.001 C 63.946 50.002,64.465 50.114,64.727 50.251 C 64.990 50.388,65.440 50.502,65.727 50.505 C 66.015 50.508,66.396 50.621,66.574 50.755 C 66.751 50.890,67.126 51.002,67.407 51.005 C 67.687 51.008,68.062 51.121,68.240 51.255 C 68.418 51.390,68.732 51.500,68.939 51.500 C 69.145 51.500,69.356 51.569,69.409 51.654 C 69.461 51.738,69.728 51.857,70.001 51.917 C 70.507 52.028,73.009 53.257,73.917 53.841 C 74.192 54.018,74.534 54.220,74.677 54.290 C 77.085 55.462,83.333 61.492,83.333 62.643 C 83.333 62.732,83.394 62.831,83.467 62.861 C 83.651 62.937,84.833 64.916,84.833 65.147 C 84.833 65.249,84.908 65.333,85.000 65.333 C 85.092 65.333,85.167 65.469,85.167 65.635 C 85.167 65.801,85.277 66.082,85.411 66.260 C 85.546 66.438,85.658 66.705,85.661 66.855 C 85.664 67.004,85.782 67.222,85.923 67.339 C 86.210 67.577,85.509 68.500,85.040 68.500 C 84.913 68.500,84.697 68.612,84.560 68.750 C 84.422 68.887,84.165 69.000,83.988 69.000 C 83.811 69.000,83.667 69.057,83.667 69.127 C 83.667 69.196,83.029 69.550,82.250 69.912 C 81.471 70.274,80.833 70.629,80.833 70.702 C 80.833 70.774,80.693 70.833,80.520 70.833 C 80.348 70.833,80.114 70.946,80.000 71.083 C 79.886 71.221,79.622 71.333,79.414 71.333 C 79.206 71.333,78.992 71.446,78.940 71.583 C 78.887 71.721,78.701 71.833,78.526 71.833 C 78.351 71.833,78.114 71.946,78.000 72.083 C 77.886 72.221,77.658 72.333,77.493 72.333 C 77.329 72.333,77.169 72.393,77.139 72.466 C 77.108 72.540,76.277 72.998,75.291 73.484 C 74.305 73.971,73.456 74.436,73.406 74.518 C 73.355 74.600,73.177 74.667,73.011 74.667 C 72.844 74.667,72.614 74.779,72.500 74.917 C 72.386 75.054,72.184 75.167,72.051 75.167 C 71.918 75.167,71.697 75.279,71.560 75.417 C 71.017 75.959,70.022 75.658,69.608 74.826 C 69.109 73.824,68.088 72.486,67.388 71.917 C 67.050 71.642,66.637 71.285,66.470 71.125 C 66.303 70.965,66.098 70.833,66.014 70.833 C 65.930 70.833,65.836 70.777,65.806 70.708 C 65.721 70.519,64.704 69.833,64.507 69.833 C 64.411 69.833,64.333 69.777,64.332 69.708 C 64.331 69.640,63.918 69.400,63.415 69.176 C 62.912 68.953,62.500 68.709,62.500 68.635 C 62.500 68.561,62.322 68.500,62.104 68.500 C 61.886 68.500,61.614 68.387,61.500 68.250 C 61.386 68.112,61.091 68.000,60.845 68.000 C 60.599 68.000,60.251 67.890,60.074 67.755 C 59.896 67.621,59.523 67.508,59.245 67.505 C 58.968 67.502,58.591 67.395,58.408 67.267 C 58.225 67.138,57.627 66.995,57.079 66.949 C 56.531 66.902,55.708 66.786,55.250 66.692 C 54.199 66.475,50.711 66.472,49.500 66.687 C 48.996 66.777,48.037 66.909,47.368 66.982 C 46.700 67.054,46.066 67.200,45.960 67.307 C 45.854 67.413,45.538 67.502,45.258 67.505 C 44.979 67.508,44.604 67.621,44.426 67.755 C 44.249 67.890,43.934 68.000,43.728 68.000 C 43.522 68.000,43.311 68.067,43.261 68.149 C 43.210 68.232,42.873 68.453,42.512 68.641 C 41.503 69.167,39.976 70.510,39.783 71.042 C 39.725 71.202,39.600 71.333,39.505 71.333 C 39.411 71.333,39.333 71.467,39.333 71.630 C 39.333 71.793,39.212 72.099,39.064 72.311 C 38.634 72.924,38.649 75.896,39.086 76.667 C 39.478 77.359,40.629 78.565,41.042 78.716 C 41.202 78.775,41.333 78.900,41.333 78.995 C 41.333 79.089,41.474 79.167,41.646 79.167 C 41.818 79.167,42.053 79.279,42.167 79.417 C 42.281 79.554,42.496 79.669,42.645 79.672 C 42.795 79.675,43.062 79.787,43.240 79.922 C 43.418 80.057,43.732 80.167,43.939 80.167 C 44.145 80.167,44.357 80.237,44.411 80.324 C 44.464 80.410,44.862 80.532,45.296 80.595 C 45.729 80.657,46.158 80.764,46.250 80.832 C 46.342 80.899,46.862 81.005,47.406 81.066 C 47.950 81.127,48.475 81.240,48.572 81.317 C 48.670 81.394,49.293 81.495,49.956 81.540 C 50.619 81.585,51.257 81.697,51.373 81.790 C 51.488 81.882,52.283 81.995,53.138 82.042 C 53.993 82.088,54.777 82.210,54.880 82.313 C 54.983 82.417,55.628 82.503,56.325 82.507 C 57.017 82.511,57.883 82.623,58.250 82.755 C 58.617 82.887,59.315 82.996,59.803 82.997 C 60.290 82.999,60.834 83.078,61.012 83.173 C 61.190 83.269,61.804 83.415,62.376 83.499 C 62.949 83.582,63.867 83.764,64.417 83.902 C 64.967 84.041,65.792 84.239,66.250 84.344 C 66.708 84.449,67.155 84.602,67.242 84.684 C 67.329 84.766,67.591 84.834,67.825 84.834 C 68.059 84.835,68.465 84.947,68.727 85.084 C 68.990 85.221,69.369 85.333,69.571 85.333 C 69.772 85.333,70.082 85.443,70.260 85.578 C 70.438 85.713,70.738 85.825,70.926 85.828 C 71.115 85.831,71.415 85.943,71.593 86.078 C 71.771 86.213,72.037 86.325,72.183 86.328 C 72.674 86.338,76.997 88.699,77.139 89.035 C 77.169 89.107,77.266 89.167,77.353 89.167 C 77.750 89.167,82.333 92.930,82.333 93.256 C 82.333 93.307,82.504 93.514,82.713 93.716 C 83.203 94.191,84.333 95.862,84.333 96.113 C 84.333 96.219,84.390 96.331,84.458 96.361 C 84.527 96.392,84.835 96.942,85.142 97.583 C 85.449 98.225,85.805 98.949,85.933 99.192 C 86.062 99.436,86.167 99.760,86.167 99.913 C 86.167 100.065,86.279 100.303,86.417 100.440 C 86.554 100.578,86.667 100.864,86.667 101.076 C 86.667 101.288,86.779 101.677,86.916 101.939 C 87.053 102.202,87.165 102.645,87.166 102.925 C 87.166 103.205,87.243 103.510,87.336 103.603 C 88.023 104.290,88.037 114.363,87.352 115.048 C 87.250 115.150,87.166 115.500,87.166 115.825 C 87.165 116.150,87.053 116.631,86.916 116.894 C 86.779 117.157,86.667 117.536,86.667 117.737 C 86.667 117.938,86.557 118.249,86.422 118.426 C 86.287 118.604,86.175 118.875,86.172 119.028 C 86.169 119.181,86.060 119.519,85.929 119.778 C 85.798 120.038,85.441 120.775,85.137 121.417 C 84.551 122.652,83.543 124.257,82.840 125.076 C 82.019 126.031,78.915 129.159,78.784 129.163 C 78.711 129.165,78.482 129.349,78.276 129.571 C 77.831 130.051,75.666 131.499,75.393 131.500 C 75.288 131.500,75.159 131.612,75.106 131.750 C 75.054 131.887,74.867 132.000,74.692 132.000 C 74.517 132.000,74.281 132.112,74.167 132.250 C 74.053 132.387,73.851 132.500,73.718 132.500 C 73.585 132.500,73.364 132.612,73.226 132.750 C 73.089 132.887,72.832 133.000,72.655 133.000 C 72.478 133.000,72.333 133.070,72.333 133.155 C 72.333 133.241,72.165 133.359,71.958 133.419 C 71.541 133.539,70.554 133.942,70.161 134.154 C 70.021 134.229,69.665 134.344,69.371 134.408 C 69.078 134.473,68.794 134.595,68.742 134.679 C 68.690 134.764,68.441 134.833,68.189 134.833 C 67.937 134.833,67.585 134.943,67.407 135.078 C 67.229 135.213,66.821 135.328,66.500 135.333 C 66.179 135.339,65.771 135.454,65.593 135.589 C 65.415 135.723,64.924 135.833,64.501 135.833 C 64.079 135.833,63.649 135.918,63.545 136.021 C 63.442 136.125,62.808 136.247,62.137 136.293 C 61.466 136.338,60.821 136.452,60.704 136.545 C 59.887 137.196,44.755 137.171,43.532 136.517 C 43.343 136.416,42.752 136.333,42.219 136.332 C 41.686 136.332,41.035 136.219,40.773 136.082 C 40.510 135.945,39.985 135.831,39.606 135.828 C 39.227 135.825,38.771 135.713,38.593 135.578 C 38.415 135.443,38.036 135.333,37.750 135.333 C 37.464 135.333,37.085 135.223,36.907 135.089 C 36.729 134.954,36.386 134.842,36.144 134.839 C 35.902 134.836,35.490 134.721,35.227 134.584 C 34.965 134.447,34.586 134.335,34.385 134.334 C 34.184 134.334,33.973 134.258,33.917 134.167 C 33.860 134.075,33.687 133.997,33.532 133.994 C 33.377 133.991,32.950 133.844,32.583 133.667 C 32.217 133.490,31.823 133.342,31.708 133.339 C 31.594 133.336,31.500 133.258,31.500 133.167 C 31.500 133.075,31.355 133.000,31.179 133.000 C 31.002 133.000,30.745 132.887,30.607 132.750 C 30.470 132.612,30.282 132.500,30.189 132.500 C 30.097 132.500,29.528 132.162,28.926 131.750 C 28.323 131.337,27.762 131.000,27.679 131.000 C 27.596 131.000,27.503 130.941,27.472 130.868 C 27.442 130.795,27.135 130.564,26.792 130.354 C 26.448 130.144,26.167 129.904,26.167 129.820 C 26.167 129.736,26.084 129.667,25.982 129.667 C 25.402 129.667,21.812 126.172,20.667 124.493 C 20.529 124.291,20.333 124.038,20.231 123.930 C 19.993 123.681,18.600 121.649,18.446 121.327 C 18.382 121.193,18.183 120.858,18.005 120.583 C 17.584 119.937,16.416 117.535,15.978 116.417 C 15.190 114.408,15.154 114.000,15.763 114.000 C 15.871 114.000,16.053 113.888,16.167 113.750 C 16.281 113.612,16.509 113.500,16.673 113.500 C 16.838 113.500,16.997 113.437,17.028 113.361 C 17.058 113.284,17.665 112.939,18.375 112.595 C 19.085 112.251,19.708 111.901,19.760 111.818 C 19.811 111.735,19.989 111.667,20.156 111.667 C 20.323 111.667,20.553 111.554,20.667 111.417 C 20.781 111.279,21.015 111.167,21.187 111.167 C 21.359 111.167,21.500 111.106,21.500 111.032 C 21.500 110.958,21.912 110.714,22.415 110.490 C 22.918 110.266,23.331 110.035,23.332 109.976 C 23.333 109.918,23.539 109.818,23.790 109.755 C 24.041 109.692,24.285 109.590,24.332 109.528 C 24.378 109.467,24.979 109.132,25.667 108.784 C 26.354 108.437,27.029 108.086,27.167 108.005 C 27.304 107.924,27.529 107.815,27.667 107.763 C 27.804 107.711,28.048 107.593,28.208 107.501 C 28.652 107.246,28.982 107.070,30.231 106.421 C 31.527 105.747,32.167 105.861,32.167 106.766 C 32.167 106.999,32.279 107.303,32.417 107.440 C 32.554 107.578,32.667 107.840,32.667 108.024 C 32.667 108.207,32.779 108.470,32.917 108.607 C 33.054 108.745,33.167 108.993,33.167 109.158 C 33.167 109.324,33.279 109.553,33.417 109.667 C 33.554 109.781,33.667 109.977,33.667 110.104 C 33.667 110.230,33.737 110.333,33.822 110.333 C 33.908 110.333,34.028 110.492,34.089 110.685 C 34.151 110.878,34.362 111.229,34.559 111.465 C 35.489 112.577,36.119 113.270,36.500 113.601 C 36.729 113.800,37.179 114.195,37.500 114.479 C 37.821 114.763,38.145 114.996,38.219 114.997 C 38.294 114.999,38.598 115.185,38.894 115.411 C 39.542 115.905,41.648 117.000,41.950 117.000 C 42.069 117.000,42.167 117.075,42.167 117.167 C 42.167 117.258,42.377 117.333,42.635 117.333 C 42.892 117.333,43.249 117.443,43.426 117.578 C 43.604 117.713,43.975 117.828,44.250 117.833 C 44.525 117.839,44.896 117.954,45.074 118.089 C 45.251 118.223,45.724 118.333,46.123 118.333 C 46.523 118.333,47.077 118.451,47.356 118.595 C 48.105 118.983,57.230 118.982,57.980 118.594 C 58.257 118.451,58.843 118.331,59.283 118.328 C 59.723 118.325,60.229 118.213,60.407 118.078 C 60.585 117.943,60.969 117.833,61.261 117.833 C 61.554 117.833,61.886 117.721,62.000 117.583 C 62.114 117.446,62.386 117.333,62.604 117.333 C 62.822 117.333,63.000 117.273,63.000 117.199 C 63.000 117.124,63.412 116.881,63.915 116.657 C 64.418 116.433,64.831 116.194,64.832 116.125 C 64.833 116.056,64.917 116.000,65.019 116.000 C 65.417 116.000,67.107 114.032,67.667 112.916 C 68.376 111.504,68.564 107.716,67.958 107.046 C 67.798 106.869,67.667 106.644,67.667 106.546 C 67.667 106.302,65.296 103.832,65.062 103.833 C 64.959 103.833,64.781 103.721,64.667 103.583 C 64.553 103.446,64.328 103.333,64.167 103.333 C 64.006 103.333,63.781 103.221,63.667 103.083 C 63.553 102.946,63.290 102.833,63.083 102.833 C 62.877 102.833,62.614 102.721,62.500 102.583 C 62.386 102.446,62.119 102.333,61.906 102.333 C 61.694 102.333,61.479 102.267,61.428 102.186 C 61.378 102.104,61.055 101.985,60.710 101.921 C 60.365 101.856,60.008 101.745,59.917 101.674 C 59.825 101.603,59.339 101.492,58.837 101.428 C 58.336 101.364,57.848 101.251,57.754 101.177 C 57.660 101.103,57.041 101.005,56.377 100.960 C 55.714 100.915,55.077 100.802,54.961 100.710 C 54.845 100.617,54.014 100.505,53.114 100.460 C 52.215 100.415,51.393 100.293,51.289 100.189 C 51.181 100.081,50.554 100.000,49.821 100.000 C 49.110 100.000,48.227 99.889,47.833 99.750 C 47.444 99.612,46.717 99.500,46.218 99.500 C 45.719 99.500,45.153 99.415,44.960 99.312 C 44.766 99.208,44.190 99.061,43.679 98.986 C 42.569 98.821,40.983 98.456,40.750 98.312 C 40.658 98.256,40.229 98.158,39.796 98.095 C 39.362 98.032,38.964 97.910,38.911 97.824 C 38.857 97.737,38.607 97.667,38.355 97.667 C 38.103 97.667,37.751 97.557,37.574 97.422 C 37.396 97.287,37.058 97.175,36.824 97.172 C 36.589 97.169,36.251 97.057,36.074 96.922 C 35.896 96.787,35.612 96.675,35.442 96.672 C 35.273 96.669,34.936 96.565,34.692 96.440 C 34.449 96.315,33.725 95.960,33.083 95.652 C 32.442 95.343,31.892 95.033,31.861 94.962 C 31.831 94.891,31.715 94.833,31.603 94.833 C 31.492 94.833,30.887 94.496,30.259 94.083 C 29.631 93.671,29.070 93.333,29.012 93.333 C 28.955 93.333,28.661 93.108,28.360 92.833 C 28.059 92.558,27.772 92.333,27.722 92.333 C 27.313 92.333,24.358 89.470,23.584 88.323 C 23.309 87.916,23.046 87.546,23.000 87.500 C 22.954 87.454,22.743 87.062,22.532 86.629 C 22.320 86.195,22.076 85.797,21.990 85.744 C 21.904 85.691,21.833 85.501,21.833 85.323 C 21.833 85.146,21.763 85.000,21.678 85.000 C 21.592 85.000,21.475 84.831,21.416 84.625 C 21.307 84.238,20.950 83.413,20.558 82.641 C 20.434 82.398,20.333 82.046,20.333 81.859 C 20.333 81.672,20.267 81.479,20.186 81.429 C 20.105 81.378,19.985 80.980,19.920 80.544 C 19.855 80.107,19.744 79.675,19.674 79.583 C 19.266 79.055,19.129 73.058,19.467 70.583 C 19.723 68.709,20.031 67.333,20.195 67.333 C 20.271 67.333,20.333 67.176,20.333 66.984 C 20.333 66.791,20.451 66.360,20.596 66.025 C 21.178 64.675,21.377 64.239,21.519 64.000 C 21.602 63.862,21.706 63.656,21.751 63.542 C 21.964 63.001,22.025 62.884,22.333 62.417 C 22.515 62.142,22.714 61.804,22.776 61.667 C 23.338 60.421,26.887 56.833,28.876 55.500 C 29.218 55.271,29.498 55.027,29.499 54.958 C 29.499 54.890,29.613 54.833,29.750 54.833 C 29.887 54.833,30.000 54.760,30.000 54.670 C 30.000 54.580,30.182 54.461,30.405 54.405 C 30.627 54.349,30.850 54.198,30.899 54.068 C 30.949 53.939,31.137 53.833,31.318 53.833 C 31.499 53.833,31.691 53.763,31.744 53.676 C 31.833 53.532,32.685 53.099,33.917 52.572 C 34.192 52.454,34.691 52.240,35.025 52.096 C 35.360 51.951,35.754 51.833,35.900 51.833 C 36.047 51.833,36.167 51.758,36.167 51.667 C 36.167 51.575,36.335 51.497,36.542 51.494 C 36.748 51.491,37.104 51.381,37.333 51.250 C 37.563 51.119,37.938 51.007,38.167 51.001 C 38.396 50.994,38.729 50.879,38.907 50.745 C 39.085 50.610,39.460 50.498,39.740 50.495 C 40.021 50.492,40.396 50.379,40.574 50.245 C 40.751 50.110,41.243 50.000,41.665 50.000 C 42.088 50.000,42.513 49.920,42.611 49.822 C 42.709 49.724,43.343 49.578,44.020 49.498 C 44.696 49.417,45.625 49.277,46.083 49.186 C 46.542 49.094,47.742 49.011,48.750 49.000 C 49.758 48.990,50.883 48.917,51.250 48.840 C 51.617 48.762,52.104 48.736,52.333 48.781 C 52.563 48.826,54.258 48.923,56.101 48.996 M108.250 48.922 C 108.819 49.000,109.002 49.136,109.500 49.852 C 109.821 50.313,110.177 50.792,110.292 50.916 C 110.406 51.041,110.500 51.189,110.500 51.245 C 110.500 51.301,110.578 51.438,110.674 51.549 C 110.831 51.729,112.168 53.600,112.707 54.392 C 112.822 54.562,113.348 55.294,113.875 56.020 C 114.402 56.745,114.833 57.378,114.833 57.426 C 114.833 57.474,114.912 57.605,115.008 57.715 C 115.104 57.826,115.550 58.442,116.000 59.083 C 116.450 59.725,116.896 60.341,116.992 60.451 C 117.088 60.562,117.167 60.731,117.167 60.826 C 117.167 60.922,117.226 61.000,117.298 61.000 C 117.406 61.000,118.385 62.353,119.083 63.470 C 119.175 63.616,119.325 63.824,119.417 63.931 C 119.508 64.038,119.696 64.295,119.833 64.502 C 119.971 64.709,120.402 65.319,120.792 65.857 C 121.181 66.394,121.500 66.909,121.500 67.000 C 121.500 67.092,121.577 67.167,121.672 67.167 C 121.766 67.167,121.894 67.298,121.955 67.458 C 122.016 67.619,122.131 67.825,122.210 67.917 C 122.289 68.008,122.909 68.871,123.589 69.833 C 124.268 70.796,125.145 72.028,125.537 72.571 C 125.929 73.114,126.280 73.636,126.317 73.730 C 126.354 73.824,126.449 73.980,126.529 74.076 C 126.936 74.566,129.167 77.687,129.167 77.767 C 129.167 77.817,129.504 78.297,129.917 78.833 C 130.329 79.369,130.667 79.882,130.667 79.973 C 130.667 80.064,130.732 80.164,130.812 80.194 C 130.932 80.241,132.329 82.185,132.917 83.124 C 133.008 83.271,133.209 83.546,133.363 83.737 C 133.517 83.927,133.907 84.458,134.229 84.917 C 135.464 86.674,137.090 89.030,137.250 89.292 C 137.342 89.442,137.553 89.719,137.719 89.908 C 137.886 90.096,138.177 90.500,138.367 90.806 C 138.556 91.112,138.927 91.598,139.190 91.886 C 139.453 92.174,139.711 92.542,139.762 92.705 C 139.814 92.867,139.926 93.000,140.011 93.000 C 140.097 93.000,140.167 93.104,140.167 93.232 C 140.167 93.360,140.279 93.508,140.417 93.560 C 140.554 93.613,140.667 93.771,140.667 93.911 C 140.667 94.052,140.730 94.167,140.808 94.167 C 140.886 94.167,141.017 94.308,141.100 94.481 C 141.182 94.654,141.418 95.010,141.622 95.273 C 142.478 96.369,143.500 97.845,143.500 97.983 C 143.500 98.064,143.612 98.174,143.750 98.227 C 143.887 98.280,144.000 98.403,144.000 98.502 C 144.000 98.600,144.078 98.771,144.174 98.882 C 144.270 98.993,144.941 99.908,145.667 100.917 C 146.392 101.925,147.064 102.841,147.159 102.951 C 147.255 103.062,147.333 103.223,147.333 103.308 C 147.333 103.394,147.446 103.508,147.583 103.560 C 147.721 103.613,147.833 103.739,147.833 103.841 C 147.833 103.942,148.171 104.464,148.583 105.000 C 148.996 105.536,149.333 106.055,149.333 106.154 C 149.333 106.253,149.394 106.333,149.468 106.333 C 149.542 106.333,149.894 106.783,150.250 107.333 C 150.606 107.883,150.958 108.333,151.032 108.333 C 151.106 108.333,151.167 108.411,151.167 108.507 C 151.167 108.603,151.245 108.771,151.341 108.882 C 151.437 108.993,151.884 109.608,152.333 110.250 C 152.783 110.892,153.227 111.505,153.320 111.612 C 153.483 111.801,155.073 114.081,155.417 114.618 C 155.508 114.762,155.752 115.067,155.958 115.297 C 156.165 115.527,156.333 115.768,156.333 115.832 C 156.333 115.896,156.465 116.103,156.625 116.292 C 156.785 116.481,157.029 116.803,157.167 117.007 C 157.304 117.212,157.735 117.819,158.125 118.357 C 158.515 118.894,158.833 119.401,158.833 119.483 C 158.833 119.564,158.946 119.674,159.083 119.727 C 159.221 119.780,159.333 119.938,159.333 120.078 C 159.333 120.218,159.393 120.333,159.466 120.333 C 159.540 120.333,159.783 120.631,160.008 120.996 C 160.233 121.360,160.473 121.660,160.542 121.662 C 160.610 121.665,160.667 121.782,160.667 121.922 C 160.667 122.062,160.779 122.220,160.917 122.273 C 161.054 122.326,161.167 122.442,161.167 122.530 C 161.167 122.619,161.504 123.131,161.917 123.667 C 162.329 124.203,162.667 124.722,162.667 124.821 C 162.667 124.919,162.727 125.000,162.800 125.000 C 162.873 125.000,163.219 125.450,163.570 126.000 C 163.920 126.550,164.264 127.000,164.334 127.000 C 164.404 127.000,164.505 127.131,164.559 127.292 C 164.683 127.661,164.977 128.095,165.477 128.648 C 165.694 128.887,165.919 129.204,165.977 129.351 C 166.036 129.498,166.253 129.835,166.460 130.101 C 167.433 131.347,168.833 133.355,168.833 133.502 C 168.833 133.593,168.911 133.667,169.005 133.667 C 169.100 133.667,169.227 133.798,169.288 133.958 C 169.348 134.119,169.477 134.335,169.574 134.438 C 169.671 134.541,169.862 134.794,170.000 135.000 C 170.137 135.206,170.329 135.459,170.427 135.562 C 170.834 135.995,171.172 136.895,170.994 137.072 C 170.871 137.195,166.535 137.250,156.933 137.250 L 143.049 137.250 142.694 136.833 C 142.043 136.069,140.833 134.335,140.833 134.166 C 140.833 134.075,140.756 134.000,140.661 134.000 C 140.567 134.000,140.440 133.869,140.379 133.708 C 140.318 133.548,140.189 133.329,140.093 133.222 C 139.996 133.115,139.579 132.529,139.167 131.921 C 138.754 131.312,138.212 130.574,137.961 130.282 C 137.710 129.989,137.504 129.688,137.503 129.612 C 137.501 129.537,137.162 129.036,136.750 128.500 C 136.337 127.964,136.000 127.445,136.000 127.346 C 136.000 127.247,135.940 127.167,135.867 127.167 C 135.794 127.167,135.550 126.869,135.325 126.504 C 135.100 126.140,134.860 125.840,134.792 125.838 C 134.723 125.835,134.667 125.725,134.667 125.592 C 134.667 125.459,134.567 125.290,134.446 125.217 C 134.324 125.143,134.175 124.971,134.113 124.833 C 133.942 124.448,133.627 124.005,133.125 123.441 C 132.873 123.157,132.667 122.864,132.667 122.789 C 132.667 122.664,132.582 122.544,132.077 121.953 C 131.982 121.841,131.741 121.487,131.542 121.167 C 131.343 120.846,130.989 120.365,130.757 120.099 C 130.524 119.833,130.333 119.556,130.333 119.484 C 130.333 119.413,130.108 119.108,129.833 118.806 C 129.558 118.505,129.333 118.161,129.333 118.041 C 129.333 117.921,129.221 117.780,129.083 117.727 C 128.946 117.674,128.833 117.527,128.833 117.399 C 128.833 117.271,128.773 117.167,128.700 117.167 C 128.627 117.167,128.281 116.717,127.930 116.167 C 127.580 115.617,127.236 115.167,127.166 115.167 C 127.096 115.167,126.995 115.035,126.941 114.875 C 126.815 114.499,126.529 114.081,125.958 113.441 C 125.706 113.157,125.500 112.861,125.500 112.781 C 125.500 112.701,125.369 112.472,125.208 112.271 C 124.921 111.912,124.333 111.862,124.333 112.197 C 124.333 112.339,123.482 113.538,123.171 113.833 C 123.123 113.879,123.008 114.042,122.917 114.195 C 122.595 114.731,121.423 116.429,120.507 117.684 C 119.999 118.381,119.471 119.121,119.333 119.329 C 119.196 119.537,118.990 119.805,118.875 119.925 C 118.760 120.045,118.667 120.185,118.667 120.237 C 118.667 120.289,118.235 120.921,117.708 121.641 C 117.181 122.361,116.638 123.120,116.500 123.328 C 116.362 123.535,115.706 124.448,115.042 125.356 C 114.377 126.265,113.833 127.045,113.833 127.089 C 113.833 127.134,113.324 127.863,112.701 128.710 C 112.079 129.557,111.398 130.531,111.188 130.875 C 110.978 131.219,110.737 131.500,110.653 131.500 C 110.569 131.500,110.500 131.575,110.500 131.666 C 110.500 131.758,110.181 132.272,109.792 132.810 C 109.402 133.348,108.971 133.957,108.833 134.164 C 108.696 134.371,108.490 134.639,108.375 134.759 C 108.260 134.878,108.167 135.023,108.167 135.081 C 108.167 135.139,107.717 135.777,107.167 136.500 C 106.617 137.223,106.167 137.887,106.167 137.976 C 106.167 138.066,106.110 138.164,106.042 138.194 C 105.973 138.225,105.623 138.681,105.264 139.208 C 104.905 139.735,104.549 140.167,104.472 140.167 C 104.396 140.167,104.333 140.245,104.333 140.340 C 104.333 140.436,104.105 140.830,103.827 141.215 C 103.548 141.601,102.765 142.704,102.087 143.667 C 101.409 144.629,100.789 145.492,100.710 145.583 C 100.631 145.675,100.516 145.881,100.455 146.042 C 100.394 146.202,100.266 146.333,100.172 146.333 C 100.077 146.333,100.000 146.407,100.000 146.498 C 100.000 146.588,99.569 147.255,99.042 147.980 C 98.515 148.706,97.971 149.468,97.833 149.674 C 97.696 149.880,97.152 150.639,96.625 151.359 C 96.098 152.079,95.667 152.711,95.667 152.763 C 95.667 152.815,95.573 152.961,95.458 153.087 C 95.344 153.214,94.704 154.090,94.038 155.034 C 93.371 155.978,92.283 157.512,91.621 158.444 C 90.959 159.375,90.304 160.303,90.167 160.506 C 90.029 160.708,89.823 160.972,89.708 161.092 C 89.594 161.212,89.500 161.351,89.500 161.402 C 89.500 161.454,89.069 162.089,88.542 162.814 C 88.015 163.539,87.471 164.299,87.333 164.502 C 87.196 164.705,86.541 165.613,85.877 166.520 L 84.671 168.169 71.377 168.126 L 58.083 168.083 58.138 167.691 C 58.169 167.476,58.619 166.718,59.138 166.007 C 59.658 165.297,60.196 164.546,60.333 164.337 C 60.471 164.129,60.658 163.875,60.750 163.771 C 60.842 163.668,61.105 163.303,61.334 162.959 C 61.563 162.616,61.806 162.335,61.875 162.334 C 61.944 162.334,62.000 162.259,62.000 162.169 C 62.000 162.079,62.431 161.411,62.958 160.686 C 63.485 159.961,64.029 159.204,64.167 159.005 C 64.304 158.805,64.510 158.516,64.624 158.362 C 64.983 157.880,67.238 154.727,67.500 154.342 C 67.637 154.140,67.846 153.849,67.962 153.696 C 68.261 153.304,71.030 149.441,71.333 148.994 C 71.471 148.792,71.661 148.541,71.756 148.438 C 71.851 148.335,72.101 147.969,72.311 147.625 C 72.522 147.281,72.763 147.000,72.847 147.000 C 72.931 147.000,73.000 146.925,73.000 146.834 C 73.000 146.742,73.319 146.228,73.708 145.690 C 74.098 145.152,74.529 144.546,74.667 144.344 C 74.804 144.141,75.012 143.849,75.128 143.696 C 75.454 143.264,78.219 139.422,78.500 139.009 C 78.637 138.807,78.842 138.516,78.955 138.362 C 80.083 136.824,81.190 135.274,81.628 134.621 C 81.921 134.184,82.239 133.734,82.335 133.621 C 82.513 133.414,85.206 129.685,85.667 129.009 C 85.804 128.807,86.009 128.516,86.121 128.362 C 87.250 126.824,88.357 125.274,88.794 124.621 C 89.087 124.184,89.402 123.734,89.494 123.621 C 89.843 123.195,92.117 120.050,92.627 119.288 C 92.920 118.851,93.236 118.401,93.329 118.288 C 93.606 117.951,95.390 115.478,96.001 114.583 C 96.580 113.735,96.756 113.501,97.125 113.089 C 97.240 112.962,97.333 112.810,97.333 112.752 C 97.333 112.694,97.769 112.070,98.301 111.365 C 98.833 110.660,99.507 109.725,99.798 109.288 C 100.089 108.851,100.403 108.401,100.495 108.288 C 100.773 107.951,102.557 105.478,103.167 104.583 C 103.747 103.735,103.922 103.501,104.292 103.089 C 104.406 102.962,104.500 102.810,104.500 102.752 C 104.500 102.694,104.935 102.070,105.468 101.365 C 106.000 100.660,106.673 99.725,106.964 99.288 C 107.255 98.851,107.569 98.401,107.662 98.288 C 107.960 97.926,109.856 95.304,110.634 94.177 C 111.571 92.820,111.539 92.457,110.374 91.200 C 110.259 91.076,110.078 90.811,109.973 90.612 C 109.868 90.413,109.456 89.824,109.058 89.304 C 108.659 88.784,108.333 88.278,108.333 88.179 C 108.333 88.081,108.276 88.000,108.206 88.000 C 108.135 88.000,107.822 87.606,107.510 87.125 C 107.197 86.644,106.505 85.673,105.971 84.968 C 105.437 84.263,105.000 83.639,105.000 83.581 C 105.000 83.523,104.906 83.378,104.792 83.259 C 104.677 83.139,104.471 82.872,104.333 82.666 C 104.196 82.459,103.558 81.555,102.917 80.657 C 102.275 79.758,101.188 78.227,100.500 77.254 C 99.813 76.280,99.156 75.381,99.042 75.254 C 98.927 75.127,98.833 74.978,98.833 74.922 C 98.833 74.865,98.754 74.729,98.656 74.618 C 98.480 74.418,96.597 71.796,94.292 68.543 C 92.867 66.532,92.938 66.630,91.664 64.873 C 91.116 64.115,90.667 63.421,90.667 63.331 C 90.667 63.241,90.610 63.166,90.542 63.166 C 90.473 63.165,90.232 62.884,90.007 62.541 C 89.782 62.197,89.088 61.226,88.466 60.381 C 87.843 59.537,87.333 58.800,87.333 58.745 C 87.333 58.689,87.240 58.545,87.125 58.425 C 87.010 58.305,86.804 58.041,86.667 57.837 C 86.529 57.634,85.926 56.781,85.325 55.942 C 84.725 55.103,83.622 53.554,82.875 52.500 C 82.127 51.446,81.437 50.493,81.341 50.382 C 81.245 50.271,81.167 50.111,81.167 50.025 C 81.167 49.939,81.054 49.826,80.917 49.773 C 80.637 49.666,80.582 49.151,80.825 48.908 C 80.992 48.741,107.032 48.754,108.250 48.922 M208.516 49.011 C 208.782 49.201,209.000 49.492,209.000 49.658 C 209.000 49.823,209.112 50.053,209.250 50.167 C 209.387 50.281,209.500 50.552,209.500 50.770 C 209.500 50.988,209.574 51.167,209.663 51.167 C 209.753 51.167,209.877 51.373,209.938 51.625 C 210.000 51.877,210.151 52.231,210.275 52.412 C 210.399 52.593,210.500 52.874,210.500 53.037 C 210.500 53.200,210.575 53.333,210.667 53.333 C 210.758 53.333,210.833 53.453,210.833 53.599 C 210.833 53.746,210.946 54.083,211.083 54.349 C 211.221 54.616,211.446 55.051,211.583 55.317 C 211.721 55.584,211.833 55.912,211.833 56.047 C 211.833 56.182,211.946 56.386,212.083 56.500 C 212.221 56.614,212.333 56.877,212.333 57.083 C 212.333 57.290,212.446 57.553,212.583 57.667 C 212.721 57.781,212.833 58.020,212.833 58.199 C 212.833 58.378,212.946 58.636,213.083 58.774 C 213.221 58.911,213.333 59.168,213.333 59.345 C 213.333 59.522,213.408 59.667,213.500 59.667 C 213.592 59.667,213.667 59.749,213.667 59.850 C 213.667 60.041,213.886 60.557,214.689 62.263 C 214.952 62.820,215.167 63.392,215.167 63.534 C 215.167 63.676,215.279 63.886,215.417 64.000 C 215.554 64.114,215.669 64.330,215.672 64.479 C 215.675 64.628,215.787 64.896,215.922 65.074 C 216.057 65.251,216.167 65.524,216.167 65.678 C 216.167 65.833,216.279 66.053,216.417 66.167 C 216.554 66.281,216.667 66.552,216.667 66.770 C 216.667 66.988,216.737 67.167,216.822 67.167 C 216.908 67.167,217.026 67.335,217.086 67.542 C 217.145 67.748,217.365 68.292,217.575 68.750 C 217.784 69.208,218.120 69.958,218.322 70.417 C 218.523 70.875,218.758 71.380,218.844 71.539 C 218.930 71.699,219.000 71.933,219.000 72.061 C 219.000 72.188,219.112 72.386,219.250 72.500 C 219.387 72.614,219.500 72.886,219.500 73.104 C 219.500 73.322,219.570 73.500,219.655 73.500 C 219.741 73.500,219.859 73.669,219.917 73.875 C 220.026 74.259,220.109 74.453,220.990 76.347 C 221.271 76.950,221.500 77.531,221.500 77.638 C 221.500 77.746,221.575 77.833,221.667 77.833 C 221.758 77.833,221.833 77.953,221.833 78.099 C 221.833 78.246,221.933 78.564,222.054 78.808 C 222.176 79.051,222.401 79.500,222.554 79.805 C 222.708 80.111,222.833 80.458,222.833 80.576 C 222.833 80.695,222.946 80.886,223.083 81.000 C 223.221 81.114,223.333 81.377,223.333 81.583 C 223.333 81.790,223.446 82.053,223.583 82.167 C 223.721 82.281,223.833 82.471,223.833 82.590 C 223.833 82.709,223.959 83.056,224.112 83.361 C 224.266 83.667,224.491 84.116,224.612 84.359 C 224.734 84.602,224.833 84.921,224.833 85.067 C 224.833 85.214,224.902 85.333,224.987 85.333 C 225.071 85.333,225.189 85.557,225.250 85.831 C 225.310 86.105,225.428 86.372,225.513 86.425 C 225.597 86.477,225.667 86.656,225.667 86.823 C 225.667 86.989,225.779 87.219,225.917 87.333 C 226.054 87.447,226.167 87.710,226.167 87.917 C 226.167 88.123,226.279 88.386,226.417 88.500 C 226.554 88.614,226.667 88.818,226.667 88.953 C 226.667 89.187,226.758 89.395,227.392 90.609 C 227.543 90.898,227.667 91.254,227.667 91.401 C 227.667 91.547,227.742 91.667,227.833 91.667 C 227.925 91.667,228.000 91.749,228.000 91.850 C 228.000 91.951,228.123 92.307,228.273 92.641 C 228.423 92.976,228.764 93.737,229.030 94.333 C 229.297 94.929,229.624 95.629,229.758 95.889 C 229.891 96.148,230.000 96.458,230.000 96.576 C 230.000 96.695,230.112 96.886,230.250 97.000 C 230.387 97.114,230.500 97.377,230.500 97.583 C 230.500 97.790,230.612 98.053,230.750 98.167 C 230.887 98.281,231.000 98.552,231.000 98.770 C 231.000 98.988,231.070 99.167,231.155 99.167 C 231.241 99.167,231.361 99.335,231.421 99.542 C 231.531 99.912,232.149 101.295,232.931 102.919 C 233.152 103.379,233.333 103.876,233.333 104.024 C 233.333 104.172,233.446 104.386,233.583 104.500 C 233.721 104.614,233.833 104.854,233.833 105.032 C 233.833 105.211,233.946 105.470,234.083 105.607 C 234.221 105.745,234.333 105.993,234.333 106.158 C 234.333 106.324,234.446 106.553,234.583 106.667 C 234.721 106.781,234.833 106.971,234.833 107.090 C 234.833 107.209,234.959 107.556,235.112 107.861 C 235.266 108.167,235.491 108.616,235.612 108.859 C 235.734 109.102,235.833 109.421,235.833 109.567 C 235.833 109.714,235.908 109.833,236.000 109.833 C 236.092 109.833,236.167 109.953,236.167 110.099 C 236.167 110.352,236.254 110.555,236.892 111.776 C 237.043 112.065,237.167 112.412,237.167 112.547 C 237.167 112.682,237.279 112.886,237.417 113.000 C 237.554 113.114,237.667 113.386,237.667 113.604 C 237.667 113.822,237.740 114.000,237.830 114.000 C 237.920 114.000,238.044 114.206,238.105 114.458 C 238.166 114.710,238.318 115.065,238.442 115.245 C 238.565 115.426,238.667 115.707,238.667 115.870 C 238.667 116.033,238.742 116.167,238.833 116.167 C 238.925 116.167,239.000 116.249,239.000 116.350 C 239.000 116.451,239.123 116.807,239.273 117.141 C 239.423 117.476,239.765 118.237,240.033 118.833 C 240.301 119.429,240.637 120.179,240.779 120.500 C 240.922 120.821,241.142 121.282,241.269 121.526 C 241.396 121.769,241.500 122.079,241.500 122.214 C 241.500 122.349,241.612 122.553,241.750 122.667 C 241.887 122.781,242.000 123.052,242.000 123.270 C 242.000 123.488,242.070 123.667,242.155 123.667 C 242.241 123.667,242.361 123.835,242.421 124.042 C 242.529 124.405,243.363 126.286,243.678 126.873 C 243.763 127.032,243.833 127.266,243.833 127.394 C 243.833 127.522,243.946 127.719,244.083 127.833 C 244.221 127.947,244.333 128.210,244.333 128.417 C 244.333 128.623,244.446 128.886,244.583 129.000 C 244.721 129.114,244.833 129.305,244.833 129.424 C 244.833 129.542,244.959 129.889,245.112 130.195 C 245.266 130.500,245.491 130.949,245.612 131.192 C 245.734 131.436,245.833 131.754,245.833 131.901 C 245.833 132.047,245.897 132.167,245.976 132.167 C 246.054 132.167,246.197 132.410,246.292 132.708 C 246.414 133.088,246.471 120.645,246.483 91.229 C 246.499 52.364,246.521 49.190,246.776 48.979 C 247.000 48.792,248.744 48.742,256.219 48.704 L 265.386 48.658 265.776 49.025 L 266.167 49.391 266.167 83.612 L 266.167 117.833 276.321 117.833 C 287.486 117.833,286.695 117.760,287.258 118.849 C 287.396 119.115,287.582 119.333,287.671 119.333 C 287.760 119.333,287.833 119.411,287.833 119.507 C 287.833 119.603,287.912 119.771,288.008 119.882 C 288.104 119.993,288.555 120.608,289.010 121.250 C 289.464 121.892,290.004 122.631,290.210 122.894 C 290.415 123.157,290.651 123.513,290.734 123.686 C 290.817 123.859,290.948 124.000,291.025 124.000 C 291.103 124.000,291.167 124.115,291.167 124.255 C 291.167 124.396,291.272 124.551,291.400 124.600 C 291.529 124.649,291.677 124.816,291.729 124.970 C 291.853 125.336,292.144 125.759,292.708 126.393 C 292.960 126.676,293.167 127.003,293.167 127.120 C 293.167 127.238,293.227 127.333,293.301 127.333 C 293.376 127.333,293.727 127.783,294.083 128.333 C 294.439 128.883,294.791 129.333,294.865 129.333 C 294.939 129.333,295.000 129.411,295.000 129.507 C 295.000 129.603,295.076 129.771,295.170 129.882 C 295.775 130.601,297.000 132.348,297.000 132.493 C 297.000 132.588,297.060 132.667,297.133 132.667 C 297.206 132.667,297.450 132.965,297.675 133.329 C 297.900 133.693,298.140 133.993,298.208 133.996 C 298.277 133.998,298.333 134.115,298.333 134.255 C 298.333 134.396,298.446 134.554,298.583 134.606 C 298.721 134.659,298.833 134.807,298.833 134.934 C 298.833 135.062,298.903 135.167,298.989 135.167 C 299.074 135.167,299.198 135.335,299.263 135.541 C 299.328 135.747,299.474 135.991,299.586 136.083 C 300.014 136.433,300.000 137.008,299.559 137.176 C 299.088 137.355,227.994 137.368,227.357 137.190 C 227.140 137.129,226.825 136.818,226.655 136.498 C 226.099 135.448,225.333 133.728,225.333 133.528 C 225.333 133.421,225.258 133.333,225.167 133.333 C 225.075 133.333,225.000 133.155,225.000 132.937 C 225.000 132.719,224.887 132.447,224.750 132.333 C 224.612 132.219,224.500 132.015,224.500 131.880 C 224.500 131.745,224.396 131.436,224.269 131.192 C 224.021 130.717,223.579 129.740,223.428 129.333 C 223.377 129.196,223.268 128.971,223.186 128.833 C 223.104 128.696,222.905 128.283,222.743 127.917 C 222.582 127.550,222.348 127.051,222.225 126.808 C 222.101 126.564,222.000 126.246,222.000 126.099 C 222.000 125.953,221.925 125.833,221.833 125.833 C 221.742 125.833,221.667 125.751,221.667 125.650 C 221.667 125.452,221.278 124.516,220.902 123.808 C 220.772 123.564,220.667 123.255,220.667 123.120 C 220.667 122.985,220.554 122.781,220.417 122.667 C 220.279 122.553,220.167 122.306,220.167 122.118 C 220.167 121.097,221.735 121.166,198.766 121.169 C 187.299 121.171,177.834 121.227,177.734 121.294 C 177.634 121.362,177.501 121.623,177.439 121.875 C 177.377 122.127,177.253 122.333,177.163 122.333 C 177.074 122.333,177.000 122.512,177.000 122.730 C 177.000 122.948,176.887 123.219,176.750 123.333 C 176.612 123.447,176.500 123.638,176.500 123.757 C 176.500 123.876,176.392 124.185,176.261 124.445 C 176.129 124.704,175.783 125.442,175.492 126.083 C 174.641 127.959,174.435 128.333,174.249 128.333 C 173.956 128.333,173.333 127.829,173.333 127.592 C 173.333 127.469,173.221 127.326,173.083 127.273 C 172.946 127.220,172.833 127.062,172.833 126.922 C 172.833 126.782,172.770 126.667,172.692 126.667 C 172.614 126.667,172.483 126.525,172.400 126.352 C 172.318 126.179,172.081 125.823,171.873 125.561 C 171.005 124.460,169.500 122.318,169.500 122.182 C 169.500 122.102,169.387 121.992,169.250 121.940 C 169.112 121.887,169.000 121.729,169.000 121.589 C 169.000 121.448,168.936 121.333,168.859 121.333 C 168.781 121.333,168.650 121.192,168.567 121.019 C 168.484 120.846,168.249 120.490,168.044 120.227 C 167.247 119.206,166.227 117.736,166.121 117.458 C 166.060 117.298,165.933 117.167,165.839 117.167 C 165.744 117.167,165.667 117.089,165.667 116.993 C 165.667 116.897,165.591 116.729,165.498 116.618 C 164.883 115.885,162.333 112.294,162.333 112.162 C 162.333 112.073,162.256 112.000,162.161 112.000 C 162.067 112.000,161.940 111.869,161.879 111.708 C 161.818 111.548,161.671 111.318,161.551 111.196 C 161.268 110.910,161.272 109.997,161.558 109.579 C 161.682 109.398,161.834 109.044,161.895 108.792 C 161.956 108.540,162.080 108.333,162.170 108.333 C 162.260 108.333,162.333 108.155,162.333 107.937 C 162.333 107.719,162.446 107.447,162.583 107.333 C 162.721 107.219,162.833 107.029,162.833 106.910 C 162.833 106.791,162.939 106.481,163.069 106.222 C 163.198 105.962,163.416 105.487,163.552 105.167 C 163.688 104.846,163.989 104.171,164.220 103.667 C 164.451 103.162,164.688 102.581,164.748 102.375 C 164.807 102.169,164.926 102.000,165.011 102.000 C 165.097 102.000,165.167 101.822,165.167 101.604 C 165.167 101.386,165.279 101.114,165.417 101.000 C 165.554 100.886,165.667 100.666,165.667 100.511 C 165.667 100.357,165.777 100.085,165.911 99.907 C 166.046 99.729,166.158 99.461,166.161 99.312 C 166.164 99.163,166.279 98.947,166.417 98.833 C 166.554 98.719,166.667 98.448,166.667 98.230 C 166.667 98.012,166.742 97.833,166.833 97.833 C 166.925 97.833,167.000 97.751,167.000 97.650 C 167.000 97.466,167.157 97.092,168.007 95.250 C 168.260 94.700,168.518 94.081,168.579 93.875 C 168.639 93.669,168.759 93.500,168.845 93.500 C 168.930 93.500,169.000 93.322,169.000 93.104 C 169.000 92.886,169.112 92.614,169.250 92.500 C 169.387 92.386,169.500 92.123,169.500 91.917 C 169.500 91.710,169.612 91.447,169.750 91.333 C 169.887 91.219,170.000 91.029,170.000 90.910 C 170.000 90.791,170.109 90.481,170.242 90.222 C 170.376 89.962,170.703 89.263,170.970 88.667 C 171.236 88.071,171.577 87.309,171.727 86.975 C 171.877 86.640,172.000 86.284,172.000 86.183 C 172.000 86.082,172.075 86.000,172.167 86.000 C 172.258 86.000,172.333 85.864,172.333 85.699 C 172.333 85.533,172.443 85.251,172.578 85.074 C 172.713 84.896,172.825 84.628,172.828 84.479 C 172.831 84.330,172.946 84.114,173.083 84.000 C 173.221 83.886,173.333 83.672,173.333 83.524 C 173.333 83.376,173.549 82.804,173.813 82.253 C 174.562 80.689,174.833 80.048,174.833 79.850 C 174.833 79.749,174.908 79.667,175.000 79.667 C 175.092 79.667,175.167 79.547,175.167 79.401 C 175.167 79.254,175.266 78.936,175.388 78.692 C 175.509 78.449,175.734 78.000,175.888 77.695 C 176.041 77.389,176.167 77.042,176.167 76.924 C 176.167 76.805,176.279 76.614,176.417 76.500 C 176.554 76.386,176.667 76.157,176.667 75.991 C 176.667 75.826,176.779 75.578,176.917 75.440 C 177.054 75.303,177.167 75.079,177.167 74.942 C 177.167 74.805,177.276 74.481,177.409 74.222 C 177.542 73.962,177.886 73.225,178.173 72.583 C 178.460 71.942,178.882 71.004,179.111 70.500 C 179.339 69.996,179.628 69.358,179.752 69.083 C 179.876 68.808,180.025 68.415,180.083 68.208 C 180.141 68.002,180.259 67.833,180.345 67.833 C 180.430 67.833,180.500 67.655,180.500 67.437 C 180.500 67.219,180.612 66.947,180.750 66.833 C 180.887 66.719,181.000 66.529,181.000 66.410 C 181.000 66.291,181.109 65.981,181.242 65.722 C 181.375 65.462,181.637 64.894,181.825 64.458 C 182.013 64.023,182.310 63.348,182.485 62.958 C 182.659 62.569,182.852 62.081,182.912 61.875 C 182.973 61.669,183.092 61.500,183.178 61.500 C 183.263 61.500,183.333 61.310,183.333 61.078 C 183.333 60.846,183.446 60.613,183.583 60.560 C 183.721 60.508,183.833 60.299,183.833 60.097 C 183.833 59.896,183.943 59.585,184.078 59.407 C 184.213 59.229,184.325 58.961,184.328 58.812 C 184.331 58.663,184.446 58.447,184.583 58.333 C 184.721 58.219,184.833 58.005,184.833 57.857 C 184.833 57.709,185.014 57.212,185.236 56.752 C 186.018 55.128,186.636 53.745,186.745 53.375 C 186.806 53.169,186.926 53.000,187.011 53.000 C 187.097 53.000,187.167 52.822,187.167 52.604 C 187.167 52.386,187.279 52.114,187.417 52.000 C 187.554 51.886,187.667 51.623,187.667 51.417 C 187.667 51.210,187.779 50.947,187.917 50.833 C 188.054 50.719,188.167 50.547,188.167 50.451 C 188.167 49.993,188.791 48.994,189.167 48.851 C 190.136 48.483,207.981 48.631,208.516 49.011 M356.614 49.029 L 357.000 49.391 357.000 58.207 C 357.000 67.007,356.970 67.514,356.433 67.872 C 356.333 67.940,345.581 67.996,332.542 67.997 L 308.833 68.000 308.833 75.917 L 308.833 83.833 330.406 83.833 C 344.019 83.833,352.136 83.893,352.406 83.996 L 352.833 84.158 352.833 92.964 C 352.833 99.747,352.785 101.834,352.625 102.052 C 352.431 102.314,350.881 102.337,330.667 102.375 L 308.917 102.417 308.873 110.125 L 308.830 117.833 332.656 117.833 L 356.481 117.833 356.741 118.204 C 357.157 118.798,357.123 136.248,356.705 136.788 L 356.417 137.159 332.621 137.173 L 308.826 137.186 308.499 136.801 C 307.898 136.092,306.667 134.334,306.667 134.184 C 306.667 134.102,306.554 133.992,306.417 133.940 C 306.279 133.887,306.167 133.729,306.167 133.589 C 306.167 133.448,306.093 133.333,306.003 133.333 C 305.913 133.333,305.793 133.146,305.735 132.917 C 305.678 132.688,305.576 132.500,305.510 132.500 C 305.443 132.500,305.096 132.069,304.738 131.542 C 304.381 131.015,304.044 130.546,303.990 130.500 C 303.936 130.454,303.842 130.304,303.781 130.167 C 303.608 129.781,303.293 129.337,302.792 128.774 C 302.540 128.491,302.333 128.195,302.333 128.118 C 302.333 128.040,302.240 127.878,302.125 127.759 C 302.010 127.639,301.804 127.371,301.667 127.164 C 301.529 126.957,301.113 126.367,300.741 125.852 C 300.369 125.338,300.015 124.785,299.955 124.625 C 299.894 124.465,299.766 124.333,299.672 124.333 C 299.577 124.333,299.500 124.255,299.500 124.160 C 299.500 124.064,299.422 123.895,299.326 123.785 C 299.158 123.592,297.731 121.590,297.293 120.936 C 297.178 120.763,296.779 120.200,296.408 119.686 C 296.036 119.171,295.682 118.619,295.621 118.458 C 295.560 118.298,295.433 118.167,295.339 118.167 C 295.244 118.167,295.167 118.089,295.167 117.993 C 295.167 117.897,295.088 117.729,294.992 117.618 C 294.896 117.507,294.450 116.892,294.000 116.250 C 293.550 115.608,293.104 114.993,293.008 114.882 C 292.912 114.771,292.833 114.606,292.833 114.515 C 292.833 114.424,292.740 114.290,292.625 114.217 C 292.381 114.061,292.032 113.540,291.892 113.125 C 291.839 112.965,291.734 112.833,291.661 112.833 C 291.587 112.833,291.355 112.552,291.144 112.208 C 290.744 111.556,290.582 111.337,290.167 110.881 C 289.782 110.459,289.702 49.642,290.086 49.056 L 290.341 48.667 323.285 48.667 L 356.229 48.667 356.614 49.029 M198.500 73.216 C 198.500 73.451,198.387 73.755,198.250 73.893 C 198.112 74.030,198.000 74.289,198.000 74.468 C 198.000 74.646,197.887 74.886,197.750 75.000 C 197.612 75.114,197.500 75.324,197.500 75.466 C 197.500 75.608,197.285 76.180,197.023 76.737 C 196.760 77.294,196.418 78.050,196.261 78.417 C 196.105 78.783,195.912 79.233,195.833 79.417 C 195.753 79.600,195.640 79.919,195.583 80.125 C 195.525 80.331,195.408 80.500,195.322 80.500 C 195.237 80.500,195.167 80.682,195.167 80.905 C 195.167 81.127,195.054 81.422,194.917 81.560 C 194.779 81.697,194.667 81.956,194.667 82.134 C 194.667 82.313,194.554 82.553,194.417 82.667 C 194.279 82.781,194.167 83.043,194.167 83.250 C 194.167 83.457,194.054 83.719,193.917 83.833 C 193.779 83.947,193.667 84.151,193.667 84.286 C 193.667 84.421,193.563 84.731,193.437 84.974 C 193.311 85.218,193.127 85.604,193.029 85.833 C 192.932 86.063,192.697 86.602,192.509 87.033 C 192.321 87.463,192.167 87.894,192.167 87.991 C 192.167 88.088,192.092 88.167,192.000 88.167 C 191.908 88.167,191.833 88.349,191.833 88.571 C 191.833 88.794,191.721 89.089,191.583 89.226 C 191.446 89.364,191.333 89.622,191.333 89.801 C 191.333 89.980,191.221 90.219,191.083 90.333 C 190.946 90.447,190.833 90.710,190.833 90.917 C 190.833 91.123,190.721 91.386,190.583 91.500 C 190.446 91.614,190.333 91.818,190.333 91.953 C 190.333 92.088,190.230 92.398,190.104 92.641 C 189.977 92.884,189.794 93.271,189.696 93.500 C 189.598 93.729,189.359 94.292,189.164 94.750 C 188.969 95.208,188.702 95.820,188.571 96.109 C 188.440 96.397,188.333 96.716,188.333 96.817 C 188.333 96.918,188.258 97.000,188.167 97.000 C 188.075 97.000,188.000 97.120,188.000 97.266 C 188.000 97.412,187.899 97.731,187.775 97.974 C 187.566 98.387,187.339 98.890,186.714 100.333 C 186.575 100.654,186.365 101.104,186.247 101.333 C 186.129 101.563,186.007 101.938,185.975 102.167 L 185.917 102.583 198.708 102.626 C 213.239 102.675,211.854 102.838,211.066 101.169 C 210.661 100.309,210.441 99.811,209.922 98.583 C 209.806 98.308,209.587 97.803,209.435 97.461 C 209.282 97.118,209.036 96.556,208.887 96.211 C 208.738 95.866,208.515 95.384,208.391 95.141 C 208.268 94.898,208.167 94.579,208.167 94.433 C 208.167 94.286,208.092 94.167,208.000 94.167 C 207.908 94.167,207.833 94.088,207.833 93.991 C 207.833 93.894,207.679 93.463,207.491 93.033 C 207.303 92.602,207.070 92.063,206.973 91.833 C 206.727 91.248,206.377 90.433,206.079 89.752 C 205.939 89.433,205.702 88.889,205.554 88.544 C 205.405 88.199,205.182 87.718,205.058 87.474 C 204.934 87.231,204.833 86.912,204.833 86.766 C 204.833 86.620,204.758 86.500,204.667 86.500 C 204.575 86.500,204.500 86.418,204.500 86.317 C 204.500 86.216,204.393 85.897,204.262 85.609 C 204.131 85.320,203.865 84.708,203.670 84.250 C 203.475 83.792,203.235 83.229,203.137 83.000 C 203.039 82.771,202.856 82.384,202.730 82.141 C 202.603 81.898,202.500 81.588,202.500 81.453 C 202.500 81.318,202.387 81.114,202.250 81.000 C 202.112 80.886,202.000 80.623,202.000 80.417 C 202.000 80.210,201.887 79.947,201.750 79.833 C 201.612 79.719,201.500 79.480,201.500 79.301 C 201.500 79.122,201.387 78.864,201.250 78.726 C 201.112 78.589,201.000 78.294,201.000 78.071 C 201.000 77.849,200.925 77.667,200.833 77.667 C 200.742 77.667,200.667 77.588,200.667 77.491 C 200.667 77.394,200.513 76.963,200.324 76.533 C 200.136 76.102,199.902 75.563,199.804 75.333 C 199.706 75.104,199.523 74.718,199.396 74.474 C 199.270 74.231,199.167 73.943,199.167 73.834 C 199.167 73.725,199.017 73.445,198.833 73.212 L 198.500 72.788 198.500 73.216 M368.133 129.867 C 368.684 130.417,368.015 131.394,367.141 131.316 C 366.119 131.225,366.167 131.095,366.167 133.988 C 366.167 136.856,366.078 137.167,365.259 137.167 C 364.591 137.167,364.511 136.855,364.463 134.072 L 364.417 131.417 363.482 131.316 C 362.259 131.185,361.650 130.406,362.278 129.778 C 362.487 129.569,367.918 129.651,368.133 129.867 M371.300 129.982 C 371.334 130.087,371.453 130.265,371.563 130.378 C 371.673 130.491,371.926 130.851,372.126 131.178 C 372.815 132.305,373.065 132.428,373.567 131.887 C 373.805 131.630,374.000 131.375,374.000 131.319 C 374.000 131.263,374.155 131.037,374.343 130.817 C 374.532 130.597,374.832 130.248,375.009 130.042 C 375.371 129.620,376.609 129.509,376.967 129.867 C 377.108 130.008,377.167 131.004,377.167 133.283 C 377.167 136.727,377.057 137.172,376.208 137.164 C 375.513 137.158,375.420 136.917,375.333 134.895 C 375.235 132.601,375.150 132.522,374.194 133.839 C 373.241 135.151,372.933 135.156,371.952 133.875 C 371.548 133.348,371.175 132.804,371.122 132.667 C 371.069 132.529,371.020 133.368,371.013 134.530 C 370.999 136.871,370.883 137.167,369.984 137.167 C 369.260 137.167,369.167 136.728,369.167 133.312 C 369.167 129.689,369.198 129.595,370.384 129.709 C 370.853 129.754,371.265 129.877,371.300 129.982 ","stroke":"none","fill":"#ffffff","fill-rule":"evenodd"}}),_c('path',{attrs:{"id":"path4","d":"M50.121 49.287 C 50.417 49.324,50.942 49.324,51.288 49.288 C 51.634 49.252,51.392 49.222,50.750 49.221 C 50.108 49.221,49.825 49.250,50.121 49.287 M53.213 49.289 C 53.652 49.324,54.327 49.323,54.713 49.288 C 55.100 49.254,54.742 49.225,53.917 49.226 C 53.092 49.226,52.775 49.255,53.213 49.289 M81.500 49.429 C 81.500 49.656,82.827 50.682,87.131 53.782 C 87.615 54.131,88.305 54.642,88.664 54.917 C 89.023 55.192,89.901 55.838,90.616 56.353 C 91.332 56.868,94.579 59.245,97.833 61.635 C 101.087 64.026,104.162 66.281,104.667 66.648 C 106.276 67.819,119.900 77.849,120.333 78.181 C 120.563 78.357,121.179 78.795,121.704 79.156 C 122.228 79.516,122.753 79.894,122.870 79.996 C 122.987 80.097,126.196 82.463,130.000 85.253 C 133.804 88.043,137.015 90.411,137.136 90.513 C 137.464 90.793,137.582 90.558,137.270 90.246 C 137.121 90.098,137.000 89.877,137.000 89.756 C 137.000 89.635,136.887 89.492,136.750 89.440 C 136.612 89.387,136.500 89.235,136.500 89.102 C 136.500 88.970,136.444 88.836,136.375 88.806 C 136.306 88.775,135.950 88.300,135.583 87.750 C 135.217 87.200,134.860 86.725,134.792 86.694 C 134.723 86.664,134.667 86.570,134.667 86.486 C 134.667 86.402,134.550 86.202,134.408 86.042 C 133.911 85.480,132.667 83.664,132.667 83.500 C 132.667 83.408,132.604 83.333,132.528 83.333 C 132.415 83.333,131.157 81.559,130.417 80.354 C 130.325 80.205,130.156 80.023,130.042 79.950 C 129.927 79.877,129.833 79.716,129.833 79.593 C 129.833 79.470,129.721 79.326,129.583 79.273 C 129.446 79.220,129.333 79.025,129.333 78.839 C 129.333 78.652,129.271 78.500,129.196 78.500 C 129.042 78.500,127.150 75.927,126.964 75.463 C 126.898 75.300,126.775 75.167,126.691 75.167 C 126.608 75.167,126.495 75.035,126.441 74.875 C 126.302 74.460,125.952 73.939,125.708 73.783 C 125.594 73.710,125.500 73.541,125.500 73.408 C 125.500 73.275,125.430 73.167,125.344 73.167 C 125.258 73.167,125.019 72.867,124.813 72.500 C 124.607 72.133,124.377 71.833,124.303 71.833 C 124.228 71.833,124.167 71.750,124.167 71.649 C 124.167 71.548,123.942 71.181,123.667 70.833 C 123.392 70.486,123.167 70.127,123.167 70.036 C 123.167 69.944,123.054 69.826,122.917 69.773 C 122.779 69.720,122.667 69.580,122.667 69.462 C 122.667 69.343,122.498 69.057,122.292 68.826 C 121.727 68.192,121.167 67.369,121.167 67.173 C 121.167 67.078,121.107 67.000,121.034 67.000 C 120.960 67.000,120.717 66.702,120.492 66.338 C 120.267 65.974,120.027 65.674,119.958 65.671 C 119.890 65.669,119.833 65.558,119.833 65.425 C 119.833 65.292,119.740 65.123,119.625 65.050 C 119.381 64.894,119.032 64.373,118.892 63.958 C 118.839 63.798,118.734 63.667,118.661 63.667 C 118.587 63.667,118.355 63.385,118.145 63.042 C 117.935 62.698,117.685 62.332,117.590 62.229 C 117.494 62.125,117.304 61.871,117.167 61.664 C 117.029 61.457,116.613 60.867,116.241 60.352 C 115.869 59.838,115.515 59.285,115.455 59.125 C 115.394 58.965,115.266 58.833,115.172 58.833 C 115.077 58.833,115.000 58.721,115.000 58.583 C 115.000 58.446,114.926 58.333,114.837 58.333 C 114.747 58.333,114.626 58.146,114.568 57.917 C 114.511 57.688,114.409 57.500,114.343 57.500 C 114.276 57.500,113.928 57.069,113.569 56.542 C 113.210 56.015,112.860 55.558,112.792 55.528 C 112.723 55.497,112.667 55.366,112.667 55.236 C 112.667 55.106,112.597 55.000,112.511 55.000 C 112.426 55.000,112.308 54.849,112.249 54.664 C 112.190 54.479,111.923 54.087,111.654 53.793 C 111.386 53.499,111.167 53.171,111.167 53.064 C 111.167 52.957,111.054 52.826,110.917 52.773 C 110.779 52.720,110.667 52.597,110.667 52.498 C 110.667 52.400,110.589 52.229,110.494 52.118 C 110.045 51.596,108.833 49.822,108.833 49.687 C 108.833 49.604,108.715 49.490,108.570 49.434 C 108.235 49.306,81.500 49.300,81.500 49.429 M332.674 67.292 C 319.616 67.315,308.876 67.390,308.808 67.459 C 308.739 67.527,319.383 67.564,332.459 67.541 C 347.921 67.513,356.293 67.440,356.401 67.332 C 356.492 67.241,356.533 67.185,356.492 67.208 C 356.450 67.230,345.733 67.268,332.674 67.292 M308.538 75.865 C 308.517 80.329,308.556 84.015,308.625 84.058 C 308.739 84.128,308.737 78.153,308.620 70.667 C 308.595 69.063,308.558 71.402,308.538 75.865 M19.542 75.083 C 19.544 75.450,19.578 75.580,19.618 75.373 C 19.658 75.166,19.656 74.866,19.615 74.706 C 19.573 74.547,19.540 74.717,19.542 75.083 M138.374 91.944 C 138.260 91.990,137.544 92.641,136.785 93.389 C 135.091 95.060,133.091 96.967,129.501 100.336 C 127.988 101.756,125.963 103.671,125.001 104.593 C 124.038 105.515,122.537 106.936,121.667 107.751 C 120.796 108.566,119.332 109.949,118.414 110.825 C 115.169 113.918,111.309 117.565,110.952 117.875 C 110.754 118.047,109.317 119.402,107.760 120.886 C 104.530 123.963,102.612 125.777,101.979 126.352 C 101.739 126.571,100.253 127.983,98.677 129.490 C 97.101 130.997,95.647 132.372,95.447 132.546 C 95.247 132.719,94.481 133.436,93.744 134.139 C 93.007 134.842,91.134 136.617,89.582 138.083 C 88.030 139.550,86.158 141.325,85.422 142.028 C 84.686 142.730,83.925 143.443,83.732 143.611 C 83.539 143.779,81.965 145.267,80.235 146.917 C 77.497 149.528,76.326 150.636,74.337 152.500 C 74.092 152.729,72.585 154.154,70.988 155.667 C 69.391 157.179,67.525 158.942,66.841 159.583 C 64.461 161.816,62.437 163.761,60.599 165.583 L 58.750 167.417 71.659 167.459 C 82.822 167.496,84.587 167.469,84.705 167.259 C 84.780 167.126,84.937 166.919,85.055 166.800 C 85.172 166.681,85.318 166.452,85.379 166.292 C 85.440 166.131,85.567 166.000,85.661 166.000 C 85.756 166.000,85.833 165.904,85.833 165.787 C 85.833 165.670,86.040 165.344,86.292 165.063 C 86.544 164.782,86.891 164.282,87.063 163.952 C 87.235 163.623,87.478 163.313,87.604 163.265 C 87.730 163.217,87.833 163.069,87.833 162.936 C 87.833 162.803,87.893 162.669,87.965 162.639 C 88.038 162.608,88.269 162.302,88.479 161.958 C 88.689 161.615,88.921 161.333,88.996 161.333 C 89.070 161.333,89.178 161.146,89.235 160.917 C 89.293 160.688,89.413 160.500,89.503 160.500 C 89.593 160.500,89.667 160.385,89.667 160.245 C 89.667 160.104,89.779 159.946,89.917 159.894 C 90.054 159.841,90.167 159.723,90.167 159.631 C 90.167 159.450,91.169 158.118,91.374 158.028 C 91.443 157.997,91.500 157.897,91.500 157.804 C 91.500 157.712,91.631 157.464,91.792 157.254 C 91.952 157.044,92.196 156.704,92.333 156.499 C 92.471 156.294,92.663 156.041,92.759 155.938 C 92.856 155.835,92.985 155.619,93.046 155.458 C 93.107 155.298,93.234 155.167,93.328 155.167 C 93.423 155.167,93.500 155.086,93.500 154.987 C 93.500 154.889,93.826 154.382,94.224 153.862 C 94.623 153.342,95.035 152.754,95.140 152.555 C 95.245 152.356,95.425 152.093,95.541 151.970 C 95.656 151.848,96.040 151.317,96.395 150.791 C 96.750 150.264,97.098 149.833,97.169 149.833 C 97.239 149.833,97.344 149.646,97.402 149.417 C 97.459 149.188,97.580 149.000,97.670 149.000 C 97.760 149.000,97.833 148.896,97.833 148.768 C 97.833 148.640,97.946 148.492,98.083 148.440 C 98.221 148.387,98.333 148.258,98.333 148.154 C 98.333 147.956,99.322 146.624,99.540 146.528 C 99.610 146.497,99.667 146.377,99.667 146.262 C 99.667 146.146,99.826 145.871,100.021 145.651 C 100.216 145.430,100.598 144.894,100.869 144.458 C 101.140 144.023,101.430 143.667,101.514 143.667 C 101.598 143.667,101.667 143.560,101.667 143.431 C 101.667 143.301,101.723 143.169,101.793 143.139 C 101.862 143.108,102.322 142.483,102.815 141.750 C 103.307 141.017,103.775 140.392,103.855 140.361 C 103.935 140.331,104.000 140.231,104.000 140.140 C 104.000 140.049,104.337 139.536,104.750 139.000 C 105.162 138.464,105.500 137.963,105.500 137.886 C 105.500 137.809,105.669 137.560,105.875 137.332 C 106.082 137.103,106.544 136.485,106.903 135.958 C 107.262 135.431,107.610 135.000,107.676 135.000 C 107.743 135.000,107.844 134.813,107.902 134.583 C 107.959 134.354,108.080 134.167,108.170 134.167 C 108.260 134.167,108.333 134.062,108.333 133.934 C 108.333 133.807,108.446 133.659,108.583 133.606 C 108.721 133.554,108.833 133.425,108.833 133.321 C 108.833 133.122,109.822 131.791,110.040 131.694 C 110.110 131.664,110.167 131.543,110.167 131.425 C 110.167 131.308,110.391 130.958,110.665 130.648 C 110.939 130.337,111.207 129.952,111.260 129.792 C 111.313 129.631,111.426 129.500,111.511 129.500 C 111.597 129.500,111.667 129.391,111.667 129.258 C 111.667 129.125,111.760 128.957,111.875 128.883 C 111.990 128.810,112.158 128.624,112.250 128.470 C 112.710 127.699,114.228 125.576,114.355 125.528 C 114.435 125.497,114.500 125.400,114.500 125.312 C 114.500 125.178,115.751 123.404,116.330 122.715 C 116.424 122.605,116.500 122.442,116.500 122.354 C 116.500 122.266,116.556 122.169,116.625 122.139 C 116.694 122.108,117.044 121.652,117.403 121.125 C 117.762 120.598,118.118 120.167,118.194 120.167 C 118.271 120.167,118.333 120.060,118.333 119.929 C 118.333 119.798,118.433 119.591,118.554 119.470 C 118.676 119.348,119.213 118.611,119.748 117.833 C 120.697 116.451,121.657 115.120,121.998 114.715 C 122.091 114.605,122.167 114.440,122.167 114.349 C 122.167 114.258,122.260 114.123,122.375 114.050 C 122.490 113.977,122.658 113.793,122.750 113.642 C 123.918 111.713,124.253 111.333,124.734 111.391 C 125.167 111.444,125.187 111.427,124.922 111.233 C 124.669 111.049,124.659 110.980,124.855 110.764 C 125.315 110.256,125.500 110.012,125.500 109.914 C 125.500 109.859,125.950 109.223,126.500 108.500 C 127.050 107.777,127.500 107.139,127.500 107.081 C 127.500 107.023,127.594 106.874,127.708 106.749 C 127.823 106.624,128.442 105.769,129.083 104.849 C 129.725 103.929,130.813 102.394,131.500 101.439 C 132.188 100.484,132.862 99.535,133.000 99.331 C 133.137 99.126,133.344 98.861,133.458 98.741 C 133.573 98.622,133.667 98.481,133.667 98.429 C 133.667 98.377,133.985 97.894,134.375 97.357 C 134.765 96.819,135.196 96.212,135.333 96.007 C 135.471 95.803,135.715 95.481,135.875 95.292 C 136.035 95.103,136.168 94.904,136.169 94.849 C 136.171 94.795,136.470 94.412,136.833 94.000 C 137.197 93.587,137.496 93.196,137.497 93.131 C 137.504 92.842,138.535 91.978,138.767 92.067 C 138.909 92.121,138.973 92.091,138.915 91.998 C 138.806 91.821,138.704 91.811,138.374 91.944 M308.577 110.083 C 308.577 114.392,308.598 116.178,308.625 114.053 C 308.651 111.928,308.651 108.403,308.625 106.220 C 308.599 104.036,308.577 105.775,308.577 110.083 M87.372 112.000 C 87.372 112.321,87.406 112.452,87.448 112.292 C 87.490 112.131,87.490 111.869,87.448 111.708 C 87.406 111.548,87.372 111.679,87.372 112.000 M308.810 118.210 C 308.879 118.279,313.844 118.316,319.843 118.293 L 330.750 118.250 319.717 118.167 C 313.648 118.121,308.740 118.140,308.810 118.210 M51.292 119.451 C 51.498 119.491,51.835 119.491,52.042 119.451 C 52.248 119.411,52.079 119.379,51.667 119.379 C 51.254 119.379,51.085 119.411,51.292 119.451 M53.208 119.448 C 53.369 119.490,53.631 119.490,53.792 119.448 C 53.952 119.406,53.821 119.372,53.500 119.372 C 53.179 119.372,53.048 119.406,53.208 119.448 M362.833 130.417 C 362.833 130.604,363.033 130.667,363.633 130.667 C 364.821 130.667,364.833 130.699,364.833 133.783 C 364.833 136.389,364.847 136.500,365.167 136.500 C 365.487 136.500,365.500 136.389,365.500 133.746 L 365.500 130.992 365.928 130.829 C 366.163 130.740,366.688 130.667,367.094 130.667 C 367.640 130.667,367.833 130.601,367.833 130.417 C 367.833 130.206,367.444 130.167,365.333 130.167 C 363.222 130.167,362.833 130.206,362.833 130.417 M369.667 133.333 C 369.667 136.389,369.678 136.500,370.000 136.500 C 370.318 136.500,370.333 136.389,370.333 134.156 L 370.333 131.811 370.775 131.864 C 371.018 131.893,371.299 132.058,371.400 132.231 C 371.501 132.404,371.758 132.741,371.972 132.979 C 372.186 133.217,372.483 133.619,372.633 133.872 C 372.996 134.488,373.018 134.479,373.844 133.375 C 375.685 130.915,375.833 130.987,375.833 134.347 C 375.833 136.389,375.851 136.500,376.167 136.500 C 376.488 136.500,376.500 136.389,376.500 133.333 L 376.500 130.167 375.950 130.167 C 375.489 130.167,375.334 130.273,374.992 130.829 C 374.767 131.193,374.527 131.493,374.458 131.496 C 374.390 131.498,374.333 131.568,374.333 131.651 C 374.333 131.876,373.299 133.000,373.094 132.997 C 372.860 132.993,372.322 132.400,371.852 131.625 C 371.643 131.281,371.404 131.000,371.320 131.000 C 371.236 131.000,371.167 130.920,371.167 130.821 C 371.167 130.483,370.689 130.167,370.179 130.167 L 369.667 130.167 369.667 133.333 M47.042 136.621 C 47.385 136.657,47.948 136.657,48.292 136.621 C 48.635 136.585,48.354 136.556,47.667 136.556 C 46.979 136.556,46.698 136.585,47.042 136.621 M56.128 136.621 C 56.428 136.658,56.878 136.657,57.128 136.619 C 57.378 136.581,57.133 136.551,56.583 136.552 C 56.033 136.553,55.828 136.584,56.128 136.621 M319.054 136.792 C 323.805 136.816,331.530 136.816,336.221 136.792 C 340.912 136.767,337.025 136.747,327.583 136.747 C 318.142 136.747,314.304 136.767,319.054 136.792 ","stroke":"none","fill":"#8962aa","fill-rule":"evenodd"}}),_c('path',{attrs:{"id":"path5","d":"M164.404 18.612 C 164.177 18.857,163.828 19.326,163.628 19.654 C 163.428 19.982,162.879 20.775,162.408 21.417 C 161.937 22.058,161.201 23.097,160.772 23.725 C 160.343 24.352,159.798 25.121,159.560 25.433 C 159.322 25.745,159.169 26.000,159.219 26.000 C 159.316 26.000,160.784 23.991,162.750 21.168 C 163.392 20.246,164.142 19.230,164.417 18.910 L 164.917 18.328 177.724 18.372 L 190.531 18.417 189.740 19.583 C 189.306 20.225,188.412 21.500,187.753 22.417 C 186.544 24.100,186.053 24.880,186.612 24.229 C 186.780 24.034,187.029 23.709,187.167 23.506 C 187.304 23.304,187.969 22.375,188.644 21.444 C 190.296 19.163,190.697 18.517,190.580 18.327 C 190.517 18.227,185.693 18.167,177.649 18.167 L 164.817 18.167 164.404 18.612 M186.048 24.875 C 185.325 25.820,184.944 26.383,185.087 26.297 C 185.284 26.178,186.391 24.667,186.281 24.667 C 186.240 24.667,186.136 24.760,186.048 24.875 M158.717 26.625 C 158.557 26.877,157.968 27.721,157.407 28.500 C 156.420 29.871,155.862 30.765,156.419 30.083 C 156.856 29.547,158.843 26.777,159.018 26.458 C 159.276 25.990,159.035 26.123,158.717 26.625 M184.386 27.174 C 184.128 27.544,183.500 28.425,182.991 29.132 C 181.507 31.191,180.099 33.294,180.568 32.750 C 180.805 32.475,181.279 31.837,181.622 31.333 C 181.965 30.829,182.736 29.742,183.334 28.917 C 184.569 27.216,185.042 26.500,184.931 26.500 C 184.889 26.500,184.644 26.803,184.386 27.174 M155.361 31.361 C 155.056 31.824,154.870 32.164,154.948 32.115 C 155.188 31.967,156.196 30.499,156.052 30.509 C 155.978 30.514,155.667 30.897,155.361 31.361 M154.113 33.124 C 153.790 33.560,153.558 33.947,153.597 33.986 C 153.635 34.024,153.687 34.024,153.711 33.986 C 153.735 33.948,154.002 33.560,154.305 33.125 C 155.017 32.098,154.873 32.098,154.113 33.124 M179.221 34.458 C 178.775 35.077,178.230 35.846,178.009 36.167 C 177.788 36.487,177.424 36.994,177.201 37.292 C 176.977 37.590,176.835 37.833,176.885 37.833 C 176.936 37.833,177.394 37.252,177.904 36.542 C 178.414 35.831,178.888 35.173,178.957 35.079 C 179.543 34.288,180.173 33.333,180.109 33.333 C 180.067 33.333,179.667 33.840,179.221 34.458 M153.049 34.625 C 152.888 34.877,152.374 35.608,151.906 36.250 C 151.003 37.489,150.230 38.707,150.743 38.083 C 151.621 37.016,153.583 34.167,153.440 34.167 C 153.385 34.167,153.210 34.373,153.049 34.625 M176.543 38.208 C 176.453 38.323,176.096 38.829,175.749 39.333 C 175.403 39.837,174.861 40.606,174.546 41.042 C 174.230 41.477,174.008 41.833,174.053 41.833 C 174.136 41.833,176.007 39.302,176.547 38.458 C 176.846 37.993,176.843 37.828,176.543 38.208 M149.218 40.086 C 148.594 40.959,147.662 42.259,147.147 42.975 C 145.944 44.649,145.607 45.167,145.719 45.167 C 145.769 45.167,146.028 44.848,146.294 44.458 C 147.117 43.255,149.695 39.613,150.129 39.042 C 150.355 38.744,150.497 38.500,150.446 38.500 C 150.395 38.500,149.842 39.214,149.218 40.086 M173.063 43.125 C 171.993 44.655,171.643 45.144,171.095 45.875 C 170.838 46.219,170.669 46.500,170.719 46.500 C 170.770 46.500,171.339 45.769,171.983 44.875 C 172.628 43.981,173.220 43.173,173.300 43.079 C 173.608 42.713,174.034 42.000,173.944 42.000 C 173.893 42.000,173.496 42.506,173.063 43.125 M144.861 46.194 C 144.556 46.657,144.370 46.997,144.448 46.949 C 144.688 46.801,145.696 45.333,145.552 45.342 C 145.478 45.347,145.167 45.731,144.861 46.194 M170.217 47.125 C 170.057 47.377,169.468 48.221,168.907 49.000 C 167.920 50.371,167.362 51.265,167.919 50.583 C 168.356 50.047,170.343 47.277,170.518 46.958 C 170.776 46.490,170.535 46.623,170.217 47.125 M143.394 48.292 C 142.960 48.910,142.148 50.054,141.589 50.833 C 140.441 52.435,139.754 53.517,140.282 52.894 C 140.448 52.698,140.708 52.360,140.861 52.144 C 141.014 51.927,141.727 50.924,142.445 49.914 C 143.981 47.753,144.369 47.167,144.262 47.167 C 144.219 47.167,143.828 47.673,143.394 48.292 M51.877 49.120 C 52.131 49.158,52.506 49.157,52.711 49.117 C 52.916 49.078,52.708 49.046,52.250 49.048 C 51.792 49.049,51.624 49.081,51.877 49.120 M189.131 49.137 C 188.974 49.199,193.190 49.229,198.501 49.203 C 208.015 49.157,208.161 49.161,208.495 49.495 C 208.681 49.681,208.833 49.763,208.833 49.676 C 208.833 49.025,208.447 49.000,198.755 49.012 C 193.619 49.018,189.288 49.074,189.131 49.137 M246.948 49.208 C 246.684 49.403,246.663 52.163,246.624 91.417 C 246.592 124.910,246.541 133.408,246.375 133.375 C 246.049 133.310,246.131 133.636,246.489 133.827 C 246.666 133.922,246.854 134.000,246.905 134.000 C 246.957 134.000,247.018 114.931,247.041 91.625 L 247.083 49.250 256.333 49.250 L 265.583 49.250 265.625 83.483 C 265.656 108.451,265.718 117.778,265.854 117.942 C 266.007 118.126,267.865 118.167,276.132 118.167 C 285.500 118.167,286.249 118.188,286.570 118.458 C 286.916 118.750,286.916 118.749,286.600 118.376 L 286.284 118.003 276.100 117.960 L 265.917 117.917 265.875 83.683 C 265.844 58.716,265.782 49.389,265.646 49.225 C 265.382 48.907,247.379 48.891,246.948 49.208 M290.200 49.200 C 290.046 49.354,290.000 56.373,290.000 79.778 L 290.000 110.157 290.853 111.414 C 291.322 112.106,291.780 112.717,291.870 112.773 C 292.068 112.895,291.651 112.225,290.796 111.048 L 290.166 110.180 290.208 79.715 L 290.250 49.250 323.333 49.250 L 356.417 49.250 356.417 58.333 L 356.417 67.417 332.597 67.500 C 313.479 67.567,308.769 67.625,308.735 67.796 C 308.711 67.913,308.730 67.931,308.776 67.837 C 308.834 67.722,316.543 67.667,332.564 67.667 C 350.777 67.667,356.313 67.620,356.467 67.467 C 356.617 67.316,356.667 65.059,356.667 58.333 C 356.667 51.607,356.617 49.351,356.467 49.200 C 356.176 48.909,290.491 48.909,290.200 49.200 M46.250 49.428 L 45.083 49.649 46.083 49.552 C 46.633 49.499,47.683 49.402,48.417 49.337 L 49.750 49.218 48.583 49.212 C 47.942 49.209,46.892 49.306,46.250 49.428 M56.750 49.341 C 57.575 49.407,58.663 49.505,59.167 49.559 C 59.999 49.648,59.976 49.636,58.917 49.422 C 58.275 49.293,57.188 49.195,56.500 49.204 L 55.250 49.221 56.750 49.341 M81.109 49.292 C 81.045 49.395,81.694 50.346,83.545 52.862 C 83.658 53.016,83.862 53.307,84.000 53.509 C 84.137 53.710,84.887 54.764,85.667 55.849 C 86.446 56.935,87.608 58.576,88.250 59.495 C 88.892 60.415,89.529 61.310,89.667 61.485 C 89.804 61.659,90.029 61.969,90.167 62.173 C 90.304 62.376,90.942 63.278,91.583 64.176 C 92.225 65.075,93.313 66.606,94.000 67.580 C 94.688 68.553,95.344 69.453,95.458 69.579 C 95.573 69.706,95.667 69.858,95.667 69.917 C 95.667 69.976,95.760 70.125,95.875 70.250 C 95.990 70.374,96.646 71.271,97.333 72.244 C 99.127 74.782,100.968 77.371,101.209 77.696 C 101.323 77.849,101.529 78.140,101.667 78.342 C 101.804 78.544,102.554 79.592,103.333 80.671 C 104.112 81.751,104.862 82.799,105.000 83.001 C 105.138 83.203,105.681 83.961,106.208 84.686 C 106.735 85.411,107.167 86.046,107.167 86.098 C 107.167 86.149,107.260 86.288,107.375 86.408 C 107.490 86.528,107.696 86.792,107.833 86.994 C 108.100 87.387,110.049 90.136,111.161 91.689 C 112.014 92.880,111.933 93.249,110.458 94.902 C 110.298 95.082,110.167 95.274,110.167 95.329 C 110.167 95.384,109.585 96.226,108.875 97.200 C 108.165 98.175,107.471 99.138,107.333 99.340 C 107.196 99.542,106.990 99.805,106.875 99.925 C 106.760 100.045,106.667 100.186,106.667 100.240 C 106.667 100.329,103.901 104.162,103.507 104.618 C 103.411 104.729,103.333 104.858,103.333 104.906 C 103.333 104.953,102.677 105.887,101.875 106.980 C 101.073 108.073,100.304 109.134,100.167 109.338 C 100.029 109.541,99.835 109.793,99.735 109.898 C 99.635 110.003,99.523 110.169,99.485 110.267 C 99.447 110.365,98.796 111.301,98.038 112.347 C 97.280 113.394,95.795 115.450,94.738 116.917 C 93.682 118.383,92.708 119.715,92.575 119.877 C 92.442 120.038,92.333 120.207,92.333 120.251 C 92.333 120.295,91.711 121.175,90.951 122.207 C 90.190 123.239,89.397 124.365,89.187 124.708 C 88.978 125.052,88.737 125.333,88.653 125.333 C 88.569 125.333,88.500 125.409,88.500 125.501 C 88.500 125.641,85.902 129.300,85.340 129.951 C 85.245 130.062,85.167 130.193,85.167 130.242 C 85.167 130.291,84.545 131.175,83.784 132.207 C 83.024 133.239,82.230 134.365,82.021 134.708 C 81.811 135.052,81.571 135.333,81.486 135.333 C 81.402 135.333,81.333 135.409,81.333 135.501 C 81.333 135.594,80.677 136.572,79.875 137.674 C 79.073 138.777,77.667 140.730,76.750 142.015 C 73.830 146.109,72.180 148.405,71.851 148.833 C 71.675 149.063,71.243 149.671,70.891 150.185 C 70.538 150.700,69.725 151.848,69.083 152.738 C 68.442 153.627,67.263 155.269,66.464 156.386 C 65.664 157.503,64.932 158.509,64.835 158.621 C 64.739 158.734,64.420 159.184,64.127 159.621 C 63.833 160.059,63.046 161.167,62.378 162.083 C 61.710 163.000,61.057 163.900,60.928 164.083 C 60.798 164.267,60.199 165.107,59.596 165.950 C 58.993 166.794,58.500 167.562,58.500 167.659 C 58.500 167.779,62.545 167.833,71.508 167.833 L 84.516 167.833 84.883 167.437 C 85.085 167.219,85.550 166.600,85.916 166.062 C 86.283 165.524,87.169 164.258,87.886 163.250 C 88.602 162.242,89.653 160.760,90.219 159.956 C 92.188 157.167,93.667 155.082,93.875 154.804 C 93.989 154.651,94.196 154.360,94.333 154.158 C 94.471 153.956,95.108 153.057,95.750 152.160 C 96.392 151.264,97.479 149.727,98.167 148.746 C 98.854 147.765,99.942 146.227,100.583 145.329 C 101.225 144.431,101.862 143.530,102.000 143.328 C 102.138 143.126,102.775 142.226,103.417 141.328 C 104.058 140.430,104.696 139.533,104.833 139.333 C 104.971 139.134,105.608 138.235,106.250 137.335 C 106.892 136.435,108.504 134.152,109.833 132.263 C 111.162 130.373,112.346 128.697,112.463 128.538 C 112.878 127.975,115.104 124.842,116.500 122.855 C 117.279 121.746,118.479 120.058,119.167 119.104 C 119.854 118.150,120.529 117.202,120.667 116.997 C 120.804 116.792,121.405 115.940,122.002 115.104 C 122.600 114.268,123.381 113.152,123.738 112.625 C 124.562 111.412,124.757 111.424,125.731 112.750 C 126.169 113.346,126.560 113.833,126.600 113.833 C 126.705 113.833,126.145 112.980,125.779 112.583 C 125.610 112.400,125.364 112.044,125.232 111.792 C 124.745 110.862,124.178 111.284,122.750 113.642 C 122.658 113.793,122.490 113.977,122.375 114.050 C 122.260 114.123,122.167 114.258,122.167 114.349 C 122.167 114.440,122.091 114.605,121.998 114.715 C 121.657 115.120,120.697 116.451,119.748 117.833 C 119.213 118.611,118.676 119.348,118.554 119.470 C 118.433 119.591,118.333 119.798,118.333 119.929 C 118.333 120.060,118.271 120.167,118.194 120.167 C 118.118 120.167,117.762 120.598,117.403 121.125 C 117.044 121.652,116.694 122.108,116.625 122.139 C 116.556 122.169,116.500 122.266,116.500 122.354 C 116.500 122.442,116.424 122.605,116.330 122.715 C 115.751 123.404,114.500 125.178,114.500 125.312 C 114.500 125.400,114.435 125.497,114.355 125.528 C 114.228 125.576,112.710 127.699,112.250 128.470 C 112.158 128.624,111.990 128.810,111.875 128.883 C 111.760 128.957,111.667 129.125,111.667 129.258 C 111.667 129.391,111.597 129.500,111.511 129.500 C 111.426 129.500,111.313 129.631,111.260 129.792 C 111.207 129.952,110.939 130.337,110.665 130.648 C 110.391 130.958,110.167 131.308,110.167 131.425 C 110.167 131.543,110.110 131.664,110.040 131.694 C 109.849 131.778,108.903 133.043,108.783 133.375 C 108.725 133.535,108.600 133.667,108.505 133.667 C 108.411 133.667,108.333 133.779,108.333 133.917 C 108.333 134.054,108.260 134.167,108.170 134.167 C 108.080 134.167,107.959 134.354,107.902 134.583 C 107.844 134.813,107.743 135.000,107.676 135.000 C 107.610 135.000,107.262 135.431,106.903 135.958 C 106.544 136.485,106.082 137.103,105.875 137.332 C 105.669 137.560,105.500 137.809,105.500 137.886 C 105.500 137.963,105.162 138.464,104.750 139.000 C 104.337 139.536,104.000 140.049,104.000 140.140 C 104.000 140.231,103.935 140.331,103.855 140.361 C 103.775 140.392,103.307 141.017,102.815 141.750 C 102.322 142.483,101.862 143.108,101.793 143.139 C 101.723 143.169,101.667 143.301,101.667 143.431 C 101.667 143.560,101.598 143.667,101.514 143.667 C 101.430 143.667,101.140 144.023,100.869 144.458 C 100.598 144.894,100.216 145.430,100.021 145.651 C 99.826 145.871,99.667 146.146,99.667 146.262 C 99.667 146.377,99.610 146.497,99.540 146.528 C 99.349 146.612,98.403 147.876,98.283 148.208 C 98.225 148.369,98.100 148.500,98.005 148.500 C 97.911 148.500,97.833 148.612,97.833 148.750 C 97.833 148.887,97.760 149.000,97.670 149.000 C 97.580 149.000,97.459 149.188,97.402 149.417 C 97.344 149.646,97.239 149.833,97.169 149.833 C 97.098 149.833,96.750 150.264,96.395 150.791 C 96.040 151.317,95.656 151.848,95.541 151.970 C 95.425 152.093,95.245 152.356,95.140 152.555 C 95.035 152.754,94.623 153.342,94.224 153.862 C 93.826 154.382,93.500 154.889,93.500 154.987 C 93.500 155.086,93.423 155.167,93.328 155.167 C 93.234 155.167,93.107 155.298,93.046 155.458 C 92.985 155.619,92.856 155.835,92.759 155.938 C 92.663 156.041,92.471 156.294,92.333 156.499 C 92.196 156.704,91.952 157.044,91.792 157.254 C 91.631 157.464,91.500 157.712,91.500 157.804 C 91.500 157.897,91.443 157.997,91.374 158.028 C 91.169 158.118,90.167 159.450,90.167 159.631 C 90.167 159.723,90.054 159.841,89.917 159.894 C 89.779 159.946,89.667 160.104,89.667 160.245 C 89.667 160.385,89.593 160.500,89.503 160.500 C 89.413 160.500,89.293 160.688,89.235 160.917 C 89.178 161.146,89.070 161.333,88.996 161.333 C 88.921 161.333,88.689 161.615,88.479 161.958 C 88.269 162.302,88.038 162.608,87.965 162.639 C 87.893 162.669,87.833 162.803,87.833 162.936 C 87.833 163.069,87.730 163.217,87.604 163.265 C 87.478 163.313,87.235 163.623,87.063 163.952 C 86.891 164.282,86.544 164.782,86.292 165.063 C 86.040 165.344,85.833 165.670,85.833 165.787 C 85.833 165.904,85.756 166.000,85.661 166.000 C 85.567 166.000,85.440 166.131,85.379 166.292 C 85.318 166.452,85.172 166.681,85.055 166.800 C 84.937 166.919,84.780 167.126,84.705 167.259 C 84.587 167.469,82.822 167.496,71.659 167.459 L 58.750 167.417 60.599 165.583 C 62.437 163.761,64.461 161.816,66.841 159.583 C 67.525 158.942,69.391 157.179,70.988 155.667 C 72.585 154.154,74.092 152.729,74.337 152.500 C 76.326 150.636,77.497 149.528,80.235 146.917 C 81.965 145.267,83.539 143.779,83.732 143.611 C 83.925 143.443,84.686 142.730,85.422 142.028 C 86.158 141.325,88.030 139.550,89.582 138.083 C 91.134 136.617,93.007 134.842,93.744 134.139 C 94.481 133.436,95.247 132.719,95.447 132.546 C 95.647 132.372,97.101 130.997,98.677 129.490 C 100.253 127.983,101.739 126.571,101.979 126.352 C 102.612 125.777,104.530 123.963,107.760 120.886 C 109.317 119.402,110.754 118.047,110.952 117.875 C 111.309 117.565,115.169 113.918,118.414 110.825 C 119.332 109.949,120.796 108.566,121.667 107.751 C 122.537 106.936,124.038 105.515,125.001 104.593 C 125.963 103.671,127.988 101.756,129.501 100.336 C 133.094 96.964,135.091 95.059,136.789 93.385 C 138.542 91.657,138.630 91.629,139.314 92.581 C 139.611 92.995,139.896 93.333,139.947 93.333 C 140.074 93.333,139.194 92.146,138.820 91.813 C 138.652 91.664,138.085 90.914,137.560 90.146 C 137.034 89.378,136.280 88.300,135.883 87.750 C 135.487 87.200,135.070 86.621,134.956 86.463 C 134.843 86.305,134.412 85.684,134.000 85.082 C 133.587 84.480,132.725 83.249,132.083 82.347 C 131.442 81.445,130.804 80.541,130.667 80.339 C 130.529 80.137,129.875 79.209,129.213 78.277 C 127.832 76.333,126.194 74.013,124.427 71.500 C 123.070 69.570,121.589 67.467,119.774 64.897 C 118.409 62.964,116.669 60.489,114.983 58.083 C 114.341 57.167,113.350 55.757,112.782 54.951 C 112.215 54.145,111.212 52.720,110.555 51.784 C 109.898 50.849,109.199 49.877,109.001 49.625 L 108.641 49.167 94.914 49.167 C 87.364 49.167,81.152 49.223,81.109 49.292 M108.570 49.434 C 108.715 49.490,108.833 49.604,108.833 49.687 C 108.833 49.822,110.045 51.596,110.494 52.118 C 110.589 52.229,110.667 52.400,110.667 52.498 C 110.667 52.597,110.779 52.720,110.917 52.773 C 111.054 52.826,111.167 52.957,111.167 53.064 C 111.167 53.171,111.386 53.499,111.654 53.793 C 111.923 54.087,112.190 54.479,112.249 54.664 C 112.308 54.849,112.426 55.000,112.511 55.000 C 112.597 55.000,112.667 55.106,112.667 55.236 C 112.667 55.366,112.723 55.497,112.792 55.528 C 112.860 55.558,113.210 56.015,113.569 56.542 C 113.928 57.069,114.276 57.500,114.343 57.500 C 114.409 57.500,114.511 57.688,114.568 57.917 C 114.626 58.146,114.747 58.333,114.837 58.333 C 114.926 58.333,115.000 58.446,115.000 58.583 C 115.000 58.721,115.077 58.833,115.172 58.833 C 115.266 58.833,115.394 58.965,115.455 59.125 C 115.515 59.285,115.869 59.838,116.241 60.352 C 116.613 60.867,117.029 61.457,117.167 61.664 C 117.304 61.871,117.494 62.125,117.590 62.229 C 117.685 62.332,117.935 62.698,118.145 63.042 C 118.355 63.385,118.587 63.667,118.661 63.667 C 118.734 63.667,118.839 63.798,118.892 63.958 C 119.032 64.373,119.381 64.894,119.625 65.050 C 119.740 65.123,119.833 65.292,119.833 65.425 C 119.833 65.558,119.890 65.669,119.958 65.671 C 120.027 65.674,120.267 65.974,120.492 66.338 C 120.717 66.702,120.960 67.000,121.034 67.000 C 121.107 67.000,121.167 67.078,121.167 67.173 C 121.167 67.369,121.727 68.192,122.292 68.826 C 122.498 69.057,122.667 69.343,122.667 69.462 C 122.667 69.580,122.779 69.720,122.917 69.773 C 123.054 69.826,123.167 69.944,123.167 70.036 C 123.167 70.127,123.392 70.486,123.667 70.833 C 123.942 71.181,124.167 71.548,124.167 71.649 C 124.167 71.750,124.228 71.833,124.303 71.833 C 124.377 71.833,124.607 72.133,124.813 72.500 C 125.019 72.867,125.258 73.167,125.344 73.167 C 125.430 73.167,125.500 73.275,125.500 73.408 C 125.500 73.541,125.594 73.710,125.708 73.783 C 125.952 73.939,126.302 74.460,126.441 74.875 C 126.495 75.035,126.608 75.167,126.691 75.167 C 126.775 75.167,126.898 75.300,126.964 75.463 C 127.150 75.927,129.042 78.500,129.196 78.500 C 129.271 78.500,129.333 78.652,129.333 78.839 C 129.333 79.025,129.446 79.220,129.583 79.273 C 129.721 79.326,129.833 79.470,129.833 79.593 C 129.833 79.716,129.927 79.877,130.042 79.950 C 130.156 80.023,130.325 80.205,130.417 80.354 C 131.157 81.559,132.415 83.333,132.528 83.333 C 132.604 83.333,132.667 83.408,132.667 83.500 C 132.667 83.664,133.911 85.480,134.408 86.042 C 134.550 86.202,134.667 86.402,134.667 86.486 C 134.667 86.570,134.723 86.664,134.792 86.694 C 134.860 86.725,135.217 87.200,135.583 87.750 C 135.950 88.300,136.306 88.775,136.375 88.806 C 136.444 88.836,136.500 88.970,136.500 89.102 C 136.500 89.235,136.612 89.387,136.750 89.440 C 136.887 89.492,137.000 89.635,137.000 89.756 C 137.000 89.877,137.121 90.098,137.270 90.246 C 137.582 90.558,137.464 90.793,137.136 90.513 C 137.015 90.411,133.804 88.043,130.000 85.253 C 126.196 82.463,122.987 80.097,122.870 79.996 C 122.753 79.894,122.228 79.516,121.704 79.156 C 121.179 78.795,120.563 78.357,120.333 78.181 C 119.900 77.849,106.276 67.819,104.667 66.648 C 104.162 66.281,101.087 64.026,97.833 61.635 C 94.579 59.245,91.332 56.868,90.616 56.353 C 89.901 55.838,89.023 55.192,88.664 54.917 C 88.305 54.642,87.615 54.131,87.131 53.782 C 82.827 50.682,81.500 49.656,81.500 49.429 C 81.500 49.300,108.235 49.306,108.570 49.434 M188.543 49.952 C 188.430 50.194,188.367 50.423,188.405 50.460 C 188.505 50.561,188.864 49.841,188.802 49.663 C 188.774 49.579,188.657 49.709,188.543 49.952 M43.000 49.925 C 41.993 50.213,42.677 50.212,43.833 49.924 C 44.451 49.770,44.587 49.697,44.250 49.703 C 43.975 49.707,43.413 49.807,43.000 49.925 M61.500 49.924 C 62.004 50.050,62.567 50.149,62.750 50.145 C 62.933 50.142,62.671 50.035,62.167 49.910 C 61.663 49.784,61.100 49.684,60.917 49.688 C 60.733 49.692,60.996 49.798,61.500 49.924 M208.845 50.083 C 208.845 50.175,208.952 50.438,209.083 50.667 C 209.214 50.896,209.322 51.008,209.322 50.917 C 209.322 50.825,209.214 50.563,209.083 50.333 C 208.952 50.104,208.845 49.992,208.845 50.083 M40.750 50.421 C 40.383 50.542,40.196 50.646,40.333 50.651 C 40.471 50.657,40.921 50.555,41.333 50.425 C 41.746 50.295,41.933 50.192,41.750 50.195 C 41.567 50.199,41.117 50.300,40.750 50.421 M63.917 50.421 C 64.283 50.554,64.733 50.658,64.917 50.653 C 65.100 50.648,64.912 50.538,64.500 50.408 C 63.521 50.100,63.053 50.110,63.917 50.421 M39.000 50.927 C 38.629 51.068,38.538 51.149,38.750 51.151 C 38.933 51.153,39.271 51.048,39.500 50.917 C 40.009 50.626,39.784 50.630,39.000 50.927 M65.833 50.917 C 66.154 51.040,66.567 51.144,66.750 51.147 C 66.933 51.150,66.783 51.044,66.417 50.912 C 65.576 50.609,65.046 50.613,65.833 50.917 M167.333 51.155 C 167.333 51.240,167.239 51.409,167.123 51.530 C 166.818 51.848,166.272 52.724,166.445 52.618 C 166.735 52.438,167.683 51.000,167.510 51.000 C 167.413 51.000,167.333 51.070,167.333 51.155 M209.333 51.199 C 209.333 51.252,209.445 51.510,209.582 51.773 C 209.719 52.035,209.829 52.137,209.827 52.000 C 209.825 51.862,209.713 51.604,209.578 51.426 C 209.443 51.249,209.333 51.146,209.333 51.199 M68.577 51.750 C 68.940 51.879,69.269 51.953,69.308 51.914 C 69.407 51.815,68.541 51.498,68.197 51.507 C 68.043 51.511,68.214 51.620,68.577 51.750 M36.250 51.828 C 36.067 51.904,35.317 52.213,34.583 52.514 C 33.396 53.003,32.437 53.500,32.682 53.500 C 32.731 53.500,33.141 53.322,33.594 53.106 C 34.046 52.889,34.604 52.654,34.833 52.585 C 35.063 52.516,35.325 52.402,35.417 52.332 C 35.508 52.262,35.826 52.153,36.123 52.090 C 36.420 52.026,36.706 51.905,36.758 51.821 C 36.871 51.637,36.704 51.639,36.250 51.828 M187.535 52.172 C 187.424 52.350,187.336 52.590,187.340 52.706 C 187.344 52.822,187.462 52.704,187.603 52.444 C 187.896 51.903,187.841 51.683,187.535 52.172 M69.977 52.257 C 70.286 52.390,70.586 52.497,70.644 52.494 C 70.861 52.482,69.907 52.012,69.667 52.012 C 69.529 52.013,69.669 52.123,69.977 52.257 M209.833 52.391 C 209.833 52.423,209.941 52.667,210.073 52.933 C 210.205 53.199,210.469 53.784,210.661 54.232 C 210.852 54.680,211.044 55.011,211.088 54.967 C 211.132 54.923,211.060 54.669,210.928 54.402 C 210.795 54.135,210.535 53.560,210.350 53.125 C 210.069 52.468,209.833 52.132,209.833 52.391 M71.652 53.003 C 72.149 53.277,72.587 53.468,72.627 53.428 C 72.705 53.350,71.097 52.498,70.881 52.503 C 70.809 52.505,71.156 52.730,71.652 53.003 M165.388 53.958 C 164.942 54.577,164.397 55.346,164.176 55.667 C 163.955 55.987,163.591 56.494,163.367 56.792 C 163.144 57.090,163.002 57.333,163.052 57.333 C 163.103 57.333,163.561 56.752,164.071 56.042 C 164.580 55.331,165.054 54.673,165.124 54.579 C 165.710 53.788,166.340 52.833,166.276 52.833 C 166.233 52.833,165.834 53.340,165.388 53.958 M186.772 53.916 C 186.175 55.177,186.233 55.326,186.842 54.097 C 187.112 53.554,187.305 53.083,187.271 53.049 C 187.238 53.016,187.014 53.406,186.772 53.916 M138.970 54.572 C 138.482 55.253,137.558 56.543,136.917 57.439 C 136.275 58.334,135.609 59.295,135.437 59.575 C 135.265 59.855,135.078 60.121,135.021 60.167 C 134.963 60.212,134.667 60.625,134.362 61.083 C 133.963 61.682,133.928 61.776,134.239 61.417 C 134.631 60.963,136.327 58.587,138.364 55.637 C 138.793 55.016,139.345 54.243,139.592 53.921 C 139.838 53.598,139.998 53.333,139.948 53.333 C 139.897 53.333,139.457 53.891,138.970 54.572 M72.847 53.561 C 73.110 53.794,75.663 55.295,75.588 55.174 C 75.484 55.005,73.051 53.500,72.883 53.500 C 72.825 53.500,72.809 53.528,72.847 53.561 M30.417 54.605 C 29.958 54.926,29.433 55.347,29.250 55.539 C 29.067 55.731,29.254 55.642,29.667 55.342 C 30.079 55.041,30.660 54.646,30.958 54.464 C 31.256 54.283,31.500 54.104,31.500 54.067 C 31.500 53.907,31.196 54.058,30.417 54.605 M211.173 55.333 C 211.175 55.471,211.287 55.729,211.422 55.907 C 211.737 56.323,211.735 56.169,211.418 55.561 C 211.281 55.298,211.171 55.196,211.173 55.333 M76.163 55.634 C 78.274 57.082,80.436 59.215,82.317 61.708 C 82.715 62.235,83.077 62.667,83.123 62.667 C 83.210 62.667,82.677 61.924,81.688 60.667 C 80.202 58.778,76.419 55.307,75.885 55.342 C 75.811 55.347,75.936 55.478,76.163 55.634 M27.484 56.860 C 25.693 58.349,22.639 61.667,23.059 61.667 C 23.102 61.667,23.371 61.348,23.655 60.958 C 24.363 59.988,26.711 57.622,27.875 56.705 C 28.749 56.017,28.939 55.833,28.776 55.833 C 28.744 55.833,28.163 56.295,27.484 56.860 M185.327 57.101 C 185.136 57.550,184.871 58.135,184.739 58.402 C 184.607 58.669,184.534 58.923,184.578 58.967 C 184.622 59.011,184.815 58.680,185.006 58.232 C 185.197 57.784,185.462 57.198,185.594 56.931 C 185.727 56.664,185.799 56.410,185.755 56.366 C 185.711 56.322,185.519 56.653,185.327 57.101 M211.679 56.363 C 211.672 56.426,211.896 56.988,212.177 57.613 C 212.898 59.217,213.048 59.508,213.118 59.438 C 213.152 59.404,212.845 58.673,212.436 57.813 C 212.026 56.953,211.686 56.301,211.679 56.363 M162.472 58.042 C 162.251 58.340,161.938 58.808,161.776 59.083 L 161.481 59.583 161.911 59.083 C 162.343 58.580,163.039 57.500,162.931 57.500 C 162.899 57.500,162.692 57.744,162.472 58.042 M184.279 59.421 C 184.217 59.602,184.121 59.862,184.066 60.000 C 184.011 60.137,184.091 60.079,184.245 59.871 C 184.399 59.662,184.495 59.402,184.458 59.292 C 184.421 59.180,184.342 59.236,184.279 59.421 M160.429 60.958 C 159.920 61.669,159.446 62.327,159.376 62.421 C 158.758 63.256,158.200 64.181,158.574 63.750 C 158.813 63.475,159.393 62.688,159.862 62.000 C 160.331 61.313,160.900 60.506,161.127 60.208 C 161.354 59.910,161.498 59.667,161.448 59.667 C 161.397 59.667,160.939 60.248,160.429 60.958 M213.178 59.750 C 213.178 59.842,213.286 60.104,213.417 60.333 C 213.548 60.563,213.655 60.675,213.655 60.583 C 213.655 60.492,213.548 60.229,213.417 60.000 C 213.286 59.771,213.178 59.658,213.178 59.750 M183.694 60.757 C 183.414 61.370,183.468 61.501,183.770 60.944 C 183.911 60.683,183.995 60.439,183.957 60.401 C 183.919 60.363,183.800 60.523,183.694 60.757 M213.667 60.866 C 213.667 60.919,213.779 61.177,213.916 61.439 C 214.053 61.702,214.163 61.804,214.160 61.667 C 214.158 61.529,214.046 61.271,213.911 61.093 C 213.777 60.915,213.667 60.813,213.667 60.866 M183.202 61.839 C 183.091 62.017,183.000 62.257,183.001 62.373 C 183.002 62.489,183.115 62.366,183.254 62.100 C 183.543 61.546,183.505 61.354,183.202 61.839 M133.383 62.458 C 133.222 62.710,133.050 62.954,133.000 63.000 C 132.777 63.203,130.492 66.547,130.541 66.597 C 130.572 66.628,131.194 65.812,131.924 64.785 C 133.414 62.686,133.864 62.000,133.751 62.000 C 133.709 62.000,133.543 62.206,133.383 62.458 M214.691 63.208 C 214.971 63.873,215.268 64.488,215.350 64.575 C 215.567 64.804,215.535 64.621,215.260 64.067 C 215.128 63.801,214.869 63.227,214.683 62.792 C 214.497 62.356,214.308 62.000,214.263 62.000 C 214.218 62.000,214.411 62.544,214.691 63.208 M182.494 63.435 C 182.303 63.883,182.038 64.468,181.906 64.735 C 181.773 65.002,181.701 65.257,181.745 65.301 C 181.789 65.345,181.981 65.014,182.173 64.565 C 182.364 64.117,182.629 63.532,182.761 63.265 C 182.893 62.998,182.966 62.743,182.922 62.699 C 182.878 62.655,182.685 62.986,182.494 63.435 M83.623 63.575 C 83.870 63.984,84.098 64.291,84.131 64.258 C 84.201 64.188,83.365 62.833,83.252 62.833 C 83.210 62.833,83.377 63.167,83.623 63.575 M157.446 65.124 C 157.124 65.560,156.891 65.947,156.930 65.986 C 156.968 66.024,157.020 66.024,157.044 65.986 C 157.069 65.948,157.336 65.560,157.638 65.125 C 158.351 64.098,158.206 64.098,157.446 65.124 M84.552 65.292 C 85.893 68.005,86.074 67.549,83.044 69.098 C 81.830 69.719,80.863 70.252,80.895 70.284 C 80.990 70.379,85.228 68.172,85.539 67.865 C 85.809 67.599,84.623 64.500,84.252 64.500 C 84.202 64.500,84.337 64.856,84.552 65.292 M20.935 65.786 C 20.696 66.412,20.504 66.997,20.509 67.087 C 20.514 67.177,20.666 66.875,20.847 66.417 C 21.028 65.958,21.261 65.415,21.366 65.209 C 21.470 65.002,21.514 64.792,21.463 64.741 C 21.412 64.689,21.174 65.160,20.935 65.786 M215.506 65.000 C 215.509 65.137,215.621 65.396,215.755 65.574 C 216.070 65.990,216.068 65.835,215.751 65.227 C 215.614 64.965,215.504 64.862,215.506 65.000 M181.446 65.754 C 181.384 65.935,181.288 66.196,181.233 66.333 C 181.177 66.471,181.258 66.413,181.412 66.204 C 181.566 65.995,181.662 65.735,181.625 65.625 C 181.588 65.513,181.509 65.570,181.446 65.754 M216.012 66.083 C 216.012 66.175,216.119 66.438,216.250 66.667 C 216.381 66.896,216.488 67.008,216.488 66.917 C 216.488 66.825,216.381 66.563,216.250 66.333 C 216.119 66.104,216.012 65.992,216.012 66.083 M52.042 66.286 C 52.294 66.324,52.706 66.324,52.958 66.286 C 53.210 66.248,53.004 66.217,52.500 66.217 C 51.996 66.217,51.790 66.248,52.042 66.286 M156.206 66.875 C 155.939 67.265,155.060 68.521,154.252 69.667 C 153.444 70.813,152.598 72.012,152.373 72.333 L 151.963 72.917 152.399 72.417 C 152.639 72.142,153.191 71.406,153.626 70.783 C 154.061 70.159,154.838 69.066,155.353 68.352 C 155.868 67.639,156.420 66.855,156.581 66.611 C 157.062 65.876,156.728 66.111,156.206 66.875 M49.296 66.456 C 49.688 66.491,50.288 66.490,50.629 66.454 C 50.971 66.419,50.650 66.390,49.917 66.390 C 49.183 66.391,48.904 66.420,49.296 66.456 M54.375 66.455 C 54.719 66.491,55.281 66.491,55.625 66.455 C 55.969 66.419,55.688 66.389,55.000 66.389 C 54.313 66.389,54.031 66.419,54.375 66.455 M47.250 66.667 L 46.750 66.794 47.250 66.797 C 47.525 66.799,47.938 66.740,48.167 66.667 L 48.583 66.533 48.167 66.536 C 47.938 66.538,47.525 66.597,47.250 66.667 M56.583 66.667 C 56.767 66.745,57.067 66.810,57.250 66.810 L 57.583 66.810 57.250 66.667 C 57.067 66.588,56.767 66.523,56.583 66.523 L 56.250 66.523 56.583 66.667 M180.590 67.709 C 180.333 68.282,180.020 68.968,179.894 69.235 C 179.768 69.502,179.690 69.746,179.721 69.777 C 179.786 69.841,179.945 69.529,180.661 67.936 C 180.945 67.304,181.150 66.761,181.117 66.728 C 181.084 66.696,180.847 67.137,180.590 67.709 M45.417 67.093 C 44.886 67.352,45.040 67.336,46.250 67.004 C 46.710 66.878,46.717 66.867,46.333 66.858 C 46.104 66.853,45.692 66.958,45.417 67.093 M58.250 67.004 C 59.460 67.336,59.614 67.352,59.083 67.093 C 58.808 66.958,58.396 66.853,58.167 66.858 C 57.783 66.867,57.790 66.878,58.250 67.004 M130.500 66.894 C 130.500 67.049,131.844 69.000,131.950 69.000 C 132.047 69.000,131.692 68.432,130.970 67.433 C 130.711 67.076,130.500 66.833,130.500 66.894 M216.500 67.215 C 216.500 67.283,216.572 67.468,216.660 67.627 C 216.749 67.786,217.010 68.348,217.241 68.875 C 217.473 69.402,217.699 69.833,217.743 69.833 C 217.847 69.833,217.006 67.852,216.719 67.421 C 216.599 67.240,216.500 67.148,216.500 67.215 M20.182 67.872 C 20.069 68.214,20.009 68.664,20.049 68.872 C 20.110 69.192,20.125 69.178,20.144 68.781 C 20.156 68.523,20.247 68.162,20.344 67.980 C 20.442 67.797,20.492 67.559,20.455 67.449 C 20.418 67.340,20.295 67.530,20.182 67.872 M43.833 67.597 C 43.577 67.740,43.516 67.829,43.675 67.831 C 43.817 67.832,44.005 67.766,44.092 67.683 C 44.179 67.600,44.400 67.496,44.583 67.452 L 44.917 67.372 44.583 67.369 C 44.400 67.367,44.063 67.470,43.833 67.597 M60.250 67.588 C 61.114 67.899,61.414 67.892,60.689 67.577 C 60.381 67.443,60.006 67.337,59.856 67.341 C 59.706 67.345,59.883 67.456,60.250 67.588 M61.667 68.083 C 61.896 68.214,62.158 68.322,62.250 68.322 C 62.342 68.322,62.229 68.214,62.000 68.083 C 61.771 67.952,61.508 67.845,61.417 67.845 C 61.325 67.845,61.438 67.952,61.667 68.083 M41.500 68.856 C 40.484 69.550,39.804 70.215,39.443 70.870 C 39.112 71.471,39.424 71.180,39.997 70.352 C 40.133 70.155,40.714 69.650,41.289 69.228 C 42.186 68.569,42.472 68.316,42.292 68.339 C 42.269 68.342,41.912 68.574,41.500 68.856 M63.723 69.039 C 63.892 69.155,64.602 69.625,65.302 70.083 C 67.081 71.249,68.568 72.693,69.356 74.018 C 69.725 74.640,70.142 75.244,70.284 75.361 C 70.860 75.840,68.760 72.807,67.963 72.010 C 67.042 71.089,64.961 69.564,64.000 69.107 C 63.679 68.954,63.555 68.923,63.723 69.039 M132.528 69.930 C 132.829 70.350,133.153 70.740,133.246 70.796 C 133.356 70.861,133.354 70.812,133.242 70.657 C 133.145 70.525,132.883 70.136,132.658 69.793 C 132.434 69.450,132.189 69.168,132.115 69.168 C 132.040 69.167,132.226 69.510,132.528 69.930 M19.750 69.833 C 19.687 70.121,19.672 70.395,19.718 70.441 C 19.764 70.486,19.853 70.288,19.917 70.000 C 19.980 69.712,19.994 69.439,19.948 69.393 C 19.903 69.347,19.813 69.545,19.750 69.833 M179.360 70.424 C 179.081 71.037,179.134 71.167,179.436 70.610 C 179.577 70.350,179.662 70.106,179.623 70.068 C 179.585 70.030,179.467 70.190,179.360 70.424 M217.834 70.176 C 217.834 70.319,217.943 70.582,218.078 70.760 C 218.396 71.181,218.400 70.998,218.084 70.394 C 217.947 70.131,217.835 70.034,217.834 70.176 M79.441 70.936 C 78.813 71.258,78.331 71.553,78.369 71.591 C 78.446 71.668,80.667 70.522,80.667 70.406 C 80.667 70.304,80.703 70.288,79.441 70.936 M19.564 72.583 C 19.564 73.683,19.591 74.112,19.624 73.535 C 19.656 72.959,19.656 72.059,19.623 71.535 C 19.590 71.012,19.563 71.483,19.564 72.583 M133.832 71.708 C 134.122 72.098,134.802 73.054,135.342 73.833 C 135.882 74.612,136.520 75.475,136.759 75.750 C 137.136 76.184,136.503 75.140,135.953 74.421 C 135.881 74.327,135.295 73.519,134.650 72.625 C 134.005 71.731,133.439 71.000,133.391 71.000 C 133.344 71.000,133.542 71.319,133.832 71.708 M178.869 71.505 C 178.758 71.683,178.667 71.924,178.668 72.039 C 178.668 72.155,178.782 72.033,178.921 71.767 C 179.209 71.213,179.171 71.021,178.869 71.505 M38.873 71.875 C 38.572 72.492,38.302 73.489,38.376 73.710 C 38.414 73.824,38.543 73.504,38.661 73.000 C 38.780 72.496,38.953 71.988,39.046 71.871 C 39.138 71.754,39.179 71.623,39.135 71.580 C 39.092 71.536,38.974 71.669,38.873 71.875 M218.816 72.375 C 219.883 74.862,220.199 75.523,220.283 75.439 C 220.316 75.406,220.087 74.825,219.775 74.148 C 219.462 73.471,219.088 72.635,218.945 72.292 C 218.801 71.948,218.645 71.667,218.598 71.667 C 218.551 71.667,218.649 71.985,218.816 72.375 M178.161 73.101 C 177.969 73.550,177.705 74.135,177.572 74.402 C 177.440 74.669,177.368 74.923,177.412 74.967 C 177.456 75.011,177.648 74.680,177.839 74.232 C 178.031 73.784,178.295 73.198,178.428 72.931 C 178.560 72.664,178.632 72.410,178.588 72.366 C 178.544 72.322,178.352 72.653,178.161 73.101 M198.449 72.440 C 198.243 72.646,198.326 72.826,198.582 72.728 C 198.758 72.660,198.926 72.856,199.159 73.399 C 199.340 73.821,199.524 74.167,199.569 74.167 C 199.613 74.167,199.535 73.885,199.394 73.542 C 199.103 72.830,198.621 72.268,198.449 72.440 M75.593 72.922 C 75.415 73.057,75.345 73.167,75.436 73.167 C 75.528 73.167,75.749 73.057,75.926 72.922 C 76.104 72.787,76.175 72.677,76.083 72.677 C 75.992 72.677,75.771 72.787,75.593 72.922 M151.546 73.458 C 151.383 73.710,151.161 74.029,151.051 74.167 C 150.118 75.341,147.557 79.088,147.783 78.948 C 148.056 78.779,152.078 73.000,151.923 73.000 C 151.878 73.000,151.708 73.206,151.546 73.458 M197.952 73.618 C 197.811 73.966,197.422 74.887,197.088 75.667 C 196.753 76.446,196.552 77.008,196.641 76.917 C 196.730 76.825,197.006 76.262,197.254 75.667 C 197.502 75.071,197.856 74.262,198.041 73.869 C 198.225 73.475,198.338 73.116,198.292 73.070 C 198.246 73.024,198.093 73.271,197.952 73.618 M73.074 74.245 C 72.896 74.379,72.825 74.489,72.917 74.489 C 73.008 74.489,73.229 74.379,73.407 74.245 C 73.585 74.110,73.655 74.000,73.564 74.000 C 73.472 74.000,73.251 74.110,73.074 74.245 M38.205 74.667 C 38.205 74.987,38.240 75.119,38.282 74.958 C 38.323 74.798,38.323 74.535,38.282 74.375 C 38.240 74.215,38.205 74.346,38.205 74.667 M199.668 74.510 C 199.667 74.653,199.777 74.915,199.911 75.093 C 200.230 75.514,200.233 75.332,199.918 74.727 C 199.781 74.465,199.668 74.367,199.668 74.510 M71.000 75.264 C 70.767 75.393,70.694 75.494,70.833 75.492 C 70.971 75.491,71.229 75.379,71.407 75.245 C 71.808 74.941,71.560 74.953,71.000 75.264 M177.112 75.421 C 177.050 75.602,176.955 75.862,176.899 76.000 C 176.844 76.137,176.925 76.079,177.079 75.871 C 177.232 75.662,177.328 75.402,177.292 75.292 C 177.254 75.180,177.176 75.236,177.112 75.421 M38.424 75.750 C 38.562 76.475,39.119 77.503,39.705 78.116 C 40.229 78.664,42.135 79.921,42.257 79.799 C 42.294 79.762,41.856 79.456,41.282 79.121 C 39.793 78.250,39.185 77.529,38.579 75.917 C 38.390 75.415,38.352 75.374,38.424 75.750 M200.168 75.676 C 200.167 75.819,200.277 76.082,200.411 76.260 C 200.730 76.681,200.733 76.498,200.418 75.894 C 200.281 75.631,200.168 75.534,200.168 75.676 M19.556 76.833 C 19.556 77.521,19.585 77.802,19.621 77.458 C 19.657 77.115,19.657 76.552,19.621 76.208 C 19.585 75.865,19.556 76.146,19.556 76.833 M220.339 75.760 C 220.350 76.039,220.821 76.762,220.822 76.500 C 220.822 76.362,220.713 76.104,220.578 75.926 C 220.443 75.749,220.336 75.674,220.339 75.760 M137.541 76.833 C 137.767 77.154,138.336 77.979,138.805 78.667 C 139.274 79.354,139.856 80.142,140.097 80.417 L 140.537 80.917 140.126 80.333 C 139.900 80.012,139.331 79.188,138.862 78.500 C 138.393 77.813,137.811 77.025,137.569 76.750 L 137.130 76.250 137.541 76.833 M176.535 76.672 C 176.424 76.850,176.336 77.090,176.340 77.206 C 176.344 77.322,176.462 77.204,176.603 76.944 C 176.896 76.403,176.841 76.183,176.535 76.672 M200.673 76.833 C 200.675 76.971,200.787 77.229,200.922 77.407 C 201.237 77.823,201.235 77.669,200.918 77.061 C 200.781 76.798,200.671 76.696,200.673 76.833 M220.833 76.858 C 220.833 76.908,220.941 77.167,221.073 77.433 C 221.205 77.699,221.465 78.273,221.650 78.708 C 221.836 79.144,222.025 79.500,222.070 79.500 C 222.178 79.500,221.177 77.130,220.983 76.925 C 220.901 76.838,220.833 76.808,220.833 76.858 M196.210 77.618 C 196.096 77.861,196.034 78.090,196.072 78.127 C 196.172 78.227,196.531 77.508,196.469 77.330 C 196.440 77.246,196.324 77.376,196.210 77.618 M176.035 77.839 C 175.924 78.017,175.834 78.257,175.834 78.373 C 175.835 78.489,175.949 78.366,176.087 78.100 C 176.376 77.546,176.338 77.354,176.035 77.839 M201.178 77.917 C 201.178 78.008,201.286 78.271,201.417 78.500 C 201.548 78.729,201.655 78.842,201.655 78.750 C 201.655 78.658,201.548 78.396,201.417 78.167 C 201.286 77.938,201.178 77.825,201.178 77.917 M19.695 78.500 C 19.692 78.729,19.755 79.067,19.833 79.250 L 19.977 79.583 19.972 79.250 C 19.969 79.067,19.907 78.729,19.833 78.500 L 19.700 78.083 19.695 78.500 M195.710 78.785 C 195.596 79.027,195.534 79.256,195.572 79.294 C 195.672 79.394,196.031 78.674,195.969 78.496 C 195.940 78.413,195.824 78.543,195.710 78.785 M175.618 78.781 C 175.437 79.081,175.022 80.167,175.088 80.167 C 175.197 80.167,175.840 78.784,175.766 78.710 C 175.730 78.674,175.663 78.706,175.618 78.781 M201.678 79.083 C 201.678 79.175,201.786 79.438,201.917 79.667 C 202.048 79.896,202.155 80.008,202.155 79.917 C 202.155 79.825,202.048 79.563,201.917 79.333 C 201.786 79.104,201.678 78.992,201.678 79.083 M146.708 80.292 C 145.891 81.409,145.461 82.081,145.776 81.750 C 145.864 81.658,146.123 81.321,146.352 81.000 C 146.582 80.679,146.980 80.135,147.238 79.792 C 147.496 79.448,147.667 79.167,147.619 79.167 C 147.571 79.167,147.161 79.673,146.708 80.292 M195.279 79.754 C 195.217 79.935,195.121 80.196,195.066 80.333 C 195.011 80.471,195.091 80.413,195.245 80.204 C 195.399 79.995,195.495 79.735,195.458 79.625 C 195.421 79.513,195.342 79.570,195.279 79.754 M20.025 80.000 C 20.019 80.229,20.125 80.642,20.259 80.917 C 20.519 81.448,20.502 81.293,20.171 80.083 C 20.045 79.623,20.033 79.617,20.025 80.000 M222.173 79.833 C 222.175 79.971,222.287 80.229,222.422 80.407 C 222.737 80.823,222.735 80.669,222.418 80.061 C 222.281 79.798,222.171 79.696,222.173 79.833 M42.740 80.089 C 42.918 80.223,43.181 80.333,43.324 80.332 C 43.466 80.332,43.369 80.219,43.106 80.082 C 42.502 79.767,42.319 79.770,42.740 80.089 M43.750 80.459 C 43.949 80.668,46.012 81.210,46.136 81.086 C 46.183 81.039,46.176 81.000,46.119 81.000 C 45.971 81.000,44.311 80.554,43.917 80.408 C 43.686 80.322,43.635 80.338,43.750 80.459 M174.710 80.785 C 174.596 81.027,174.534 81.256,174.572 81.294 C 174.672 81.394,175.031 80.674,174.969 80.496 C 174.940 80.413,174.824 80.543,174.710 80.785 M194.702 81.072 C 194.423 81.685,194.449 81.813,194.762 81.366 C 194.907 81.160,194.998 80.910,194.964 80.810 C 194.931 80.710,194.813 80.828,194.702 81.072 M222.678 80.917 C 222.678 81.008,222.786 81.271,222.917 81.500 C 223.048 81.729,223.155 81.842,223.155 81.750 C 223.155 81.658,223.048 81.396,222.917 81.167 C 222.786 80.938,222.678 80.825,222.678 80.917 M141.028 81.750 C 141.334 82.208,141.621 82.621,141.667 82.667 C 141.712 82.712,142.005 83.125,142.317 83.583 C 143.273 84.989,143.483 85.077,144.002 84.292 L 144.361 83.750 143.972 84.178 C 143.425 84.780,143.200 84.655,142.214 83.199 C 141.735 82.494,141.148 81.692,140.909 81.417 C 140.585 81.045,140.616 81.130,141.028 81.750 M46.917 81.351 C 48.238 81.641,48.797 81.679,47.917 81.419 C 47.458 81.284,46.896 81.180,46.667 81.189 C 46.378 81.200,46.454 81.250,46.917 81.351 M202.667 81.366 C 202.667 81.419,202.779 81.677,202.916 81.939 C 203.053 82.202,203.163 82.304,203.160 82.167 C 203.158 82.029,203.046 81.771,202.911 81.593 C 202.777 81.415,202.667 81.313,202.667 81.366 M20.525 81.750 C 20.518 81.933,20.619 82.271,20.750 82.500 C 20.901 82.764,20.990 82.822,20.994 82.658 C 20.997 82.516,20.932 82.329,20.850 82.242 C 20.767 82.155,20.663 81.933,20.619 81.750 L 20.539 81.417 20.525 81.750 M49.583 81.841 C 51.092 82.142,51.847 82.192,50.833 81.923 C 50.329 81.790,49.692 81.687,49.417 81.695 C 48.980 81.707,49.001 81.725,49.583 81.841 M194.194 82.257 C 193.914 82.870,193.968 83.001,194.270 82.444 C 194.411 82.183,194.495 81.939,194.457 81.901 C 194.419 81.863,194.300 82.023,194.194 82.257 M145.381 82.208 C 144.659 83.153,144.278 83.717,144.420 83.630 C 144.617 83.511,145.724 82.000,145.614 82.000 C 145.574 82.000,145.469 82.094,145.381 82.208 M173.741 82.958 C 173.510 83.485,173.249 84.047,173.160 84.206 C 172.922 84.636,172.966 84.791,173.219 84.412 C 173.506 83.981,174.347 82.000,174.243 82.000 C 174.199 82.000,173.973 82.431,173.741 82.958 M223.167 82.039 C 223.167 82.096,223.420 82.692,223.730 83.363 C 224.040 84.034,224.412 84.865,224.555 85.208 C 224.699 85.552,224.855 85.833,224.902 85.833 C 224.987 85.833,224.712 85.144,224.023 83.634 C 223.827 83.204,223.664 82.791,223.661 82.717 C 223.655 82.559,223.167 81.889,223.167 82.039 M52.833 82.350 C 53.246 82.428,53.996 82.530,54.500 82.577 C 55.370 82.658,55.357 82.650,54.250 82.428 C 53.608 82.299,52.858 82.196,52.583 82.201 C 52.206 82.206,52.268 82.243,52.833 82.350 M203.172 82.523 C 203.169 82.581,203.279 82.843,203.416 83.106 C 203.553 83.369,203.665 83.466,203.666 83.324 C 203.667 83.079,203.183 82.295,203.172 82.523 M56.917 82.912 C 57.467 83.044,58.179 83.145,58.500 83.137 C 59.152 83.120,58.510 82.987,56.750 82.774 C 55.925 82.674,55.927 82.675,56.917 82.912 M21.012 83.083 C 21.012 83.175,21.119 83.438,21.250 83.667 C 21.381 83.896,21.488 84.008,21.488 83.917 C 21.488 83.825,21.381 83.563,21.250 83.333 C 21.119 83.104,21.012 82.992,21.012 83.083 M193.533 83.829 C 193.342 84.290,193.221 84.667,193.265 84.667 C 193.377 84.667,194.023 83.134,193.945 83.056 C 193.910 83.021,193.724 83.369,193.533 83.829 M59.833 83.333 C 60.063 83.407,60.400 83.469,60.583 83.472 L 60.917 83.477 60.583 83.333 C 60.400 83.255,60.063 83.192,59.833 83.195 L 59.417 83.200 59.833 83.333 M61.208 83.615 C 61.369 83.657,61.631 83.657,61.792 83.615 C 61.952 83.573,61.821 83.539,61.500 83.539 C 61.179 83.539,61.048 83.573,61.208 83.615 M62.583 83.833 C 62.767 83.912,63.029 83.977,63.167 83.977 C 63.324 83.977,63.293 83.924,63.083 83.833 C 62.900 83.755,62.637 83.690,62.500 83.690 C 62.342 83.690,62.373 83.743,62.583 83.833 M308.808 84.041 C 308.876 84.109,318.679 84.184,330.591 84.208 L 352.250 84.250 352.250 93.000 L 352.250 101.750 330.683 101.792 C 308.997 101.835,308.641 101.845,308.680 102.395 C 308.688 102.513,308.724 102.506,308.777 102.375 C 308.844 102.210,313.316 102.167,330.358 102.167 C 344.858 102.167,351.960 102.111,352.178 101.994 C 352.459 101.843,352.733 84.390,352.458 84.127 C 352.346 84.019,308.700 83.934,308.808 84.041 M64.000 84.177 C 65.370 84.502,65.639 84.525,65.000 84.264 C 64.679 84.133,64.192 84.028,63.917 84.032 C 63.424 84.038,63.425 84.040,64.000 84.177 M21.500 84.207 C 21.500 84.380,22.382 86.007,22.443 85.946 C 22.475 85.914,22.307 85.519,22.068 85.068 C 21.622 84.225,21.500 84.041,21.500 84.207 M172.702 85.239 C 172.423 85.852,172.449 85.980,172.762 85.533 C 172.907 85.327,172.998 85.077,172.964 84.977 C 172.931 84.877,172.813 84.995,172.702 85.239 M192.877 85.285 C 192.763 85.527,192.701 85.756,192.738 85.794 C 192.838 85.894,193.197 85.174,193.136 84.996 C 193.107 84.913,192.990 85.043,192.877 85.285 M68.083 85.255 C 68.947 85.566,69.247 85.558,68.523 85.243 C 68.214 85.110,67.839 85.003,67.689 85.007 C 67.539 85.011,67.717 85.123,68.083 85.255 M69.644 85.757 C 69.953 85.890,70.290 85.997,70.394 85.993 C 70.498 85.990,70.331 85.877,70.023 85.743 C 69.714 85.610,69.377 85.503,69.273 85.507 C 69.168 85.510,69.336 85.623,69.644 85.757 M204.512 85.583 C 204.512 85.675,204.619 85.938,204.750 86.167 C 204.881 86.396,204.988 86.508,204.988 86.417 C 204.988 86.325,204.881 86.063,204.750 85.833 C 204.619 85.604,204.512 85.492,204.512 85.583 M71.061 86.251 C 71.323 86.388,71.623 86.500,71.727 86.499 C 71.831 86.498,71.702 86.386,71.439 86.249 C 71.177 86.112,70.877 86.000,70.773 86.001 C 70.669 86.002,70.798 86.114,71.061 86.251 M172.202 86.339 C 172.091 86.517,172.000 86.757,172.001 86.873 C 172.002 86.989,172.115 86.866,172.254 86.600 C 172.543 86.046,172.505 85.854,172.202 86.339 M192.377 86.452 C 192.263 86.694,192.201 86.923,192.238 86.960 C 192.338 87.061,192.697 86.341,192.636 86.163 C 192.607 86.079,192.490 86.209,192.377 86.452 M22.927 86.925 C 23.877 88.636,25.916 90.879,27.417 91.861 C 27.692 92.042,27.542 91.867,27.083 91.474 C 25.196 89.853,23.000 87.286,23.000 86.700 C 23.000 86.613,22.881 86.442,22.735 86.321 C 22.581 86.193,22.661 86.445,22.927 86.925 M72.017 86.573 C 72.146 86.702,73.667 87.324,73.667 87.248 C 73.667 87.149,72.314 86.500,72.108 86.500 C 72.018 86.500,71.977 86.533,72.017 86.573 M225.167 86.633 C 225.167 86.707,225.229 86.838,225.305 86.925 C 225.381 87.012,225.695 87.683,226.003 88.417 C 226.533 89.679,227.000 90.554,227.000 90.285 C 227.000 90.217,226.928 90.032,226.839 89.873 C 226.688 89.602,226.372 88.893,225.649 87.208 C 225.368 86.553,225.167 86.313,225.167 86.633 M205.012 86.750 C 205.012 86.842,205.119 87.104,205.250 87.333 C 205.381 87.563,205.488 87.675,205.488 87.583 C 205.488 87.492,205.381 87.229,205.250 87.000 C 205.119 86.771,205.012 86.658,205.012 86.750 M171.680 87.475 C 171.581 87.660,171.500 87.910,171.501 88.031 C 171.502 88.151,171.615 88.033,171.754 87.767 C 171.893 87.501,171.973 87.251,171.933 87.211 C 171.893 87.171,171.779 87.290,171.680 87.475 M191.946 87.421 C 191.884 87.602,191.788 87.862,191.733 88.000 C 191.677 88.138,191.758 88.079,191.912 87.871 C 192.066 87.662,192.162 87.402,192.125 87.292 C 192.088 87.180,192.009 87.236,191.946 87.421 M73.847 87.394 C 74.080 87.597,75.507 88.312,75.429 88.187 C 75.332 88.030,74.072 87.333,73.884 87.333 C 73.825 87.333,73.809 87.361,73.847 87.394 M205.500 87.866 C 205.500 87.919,205.612 88.177,205.749 88.439 C 205.886 88.702,205.996 88.804,205.994 88.667 C 205.991 88.529,205.879 88.271,205.745 88.093 C 205.610 87.915,205.500 87.813,205.500 87.866 M76.388 88.876 C 78.006 89.964,80.430 91.799,80.917 92.305 C 81.192 92.590,81.487 92.826,81.572 92.829 C 81.949 92.840,78.857 90.345,76.863 89.029 C 76.284 88.646,75.759 88.334,75.697 88.334 C 75.634 88.335,75.945 88.579,76.388 88.876 M171.278 88.458 C 171.063 88.815,170.672 89.893,170.809 89.750 C 170.990 89.561,171.518 88.333,171.418 88.333 C 171.382 88.333,171.319 88.390,171.278 88.458 M191.369 88.739 C 191.090 89.352,191.116 89.480,191.429 89.033 C 191.573 88.827,191.664 88.577,191.631 88.477 C 191.598 88.377,191.480 88.495,191.369 88.739 M206.000 89.032 C 206.000 89.085,206.112 89.343,206.249 89.606 C 206.386 89.869,206.496 89.971,206.494 89.833 C 206.491 89.696,206.379 89.438,206.245 89.260 C 206.110 89.082,206.000 88.980,206.000 89.032 M190.860 89.924 C 190.581 90.537,190.634 90.667,190.936 90.110 C 191.077 89.850,191.162 89.606,191.123 89.568 C 191.085 89.530,190.967 89.690,190.860 89.924 M170.446 90.254 C 170.384 90.435,170.288 90.696,170.233 90.833 C 170.177 90.971,170.258 90.913,170.412 90.704 C 170.566 90.495,170.662 90.235,170.625 90.125 C 170.588 90.013,170.509 90.070,170.446 90.254 M206.505 90.189 C 206.502 90.248,206.612 90.510,206.749 90.773 C 206.886 91.035,206.998 91.133,206.999 90.990 C 207.000 90.746,206.517 89.962,206.505 90.189 M227.012 90.583 C 227.012 90.675,227.119 90.938,227.250 91.167 C 227.381 91.396,227.488 91.508,227.488 91.417 C 227.488 91.325,227.381 91.063,227.250 90.833 C 227.119 90.604,227.012 90.492,227.012 90.583 M190.360 91.090 C 190.081 91.703,190.134 91.834,190.436 91.277 C 190.577 91.017,190.662 90.773,190.623 90.735 C 190.585 90.696,190.467 90.857,190.360 91.090 M169.860 91.590 C 169.581 92.203,169.634 92.334,169.936 91.777 C 170.077 91.517,170.162 91.273,170.123 91.235 C 170.085 91.196,169.967 91.357,169.860 91.590 M207.583 92.663 C 208.150 93.991,208.333 94.349,208.333 94.129 C 208.333 93.938,207.294 91.577,207.140 91.417 C 207.051 91.325,207.251 91.886,207.583 92.663 M227.500 91.699 C 227.500 91.752,227.612 92.010,227.749 92.273 C 227.886 92.535,227.996 92.638,227.994 92.500 C 227.991 92.362,227.879 92.104,227.745 91.926 C 227.610 91.749,227.500 91.646,227.500 91.699 M189.869 92.172 C 189.758 92.350,189.667 92.590,189.668 92.706 C 189.668 92.822,189.782 92.699,189.921 92.434 C 190.209 91.880,190.171 91.687,189.869 92.172 M28.417 92.580 C 29.066 93.130,32.496 95.226,32.590 95.132 C 32.630 95.092,32.345 94.883,31.956 94.667 C 31.568 94.451,30.500 93.799,29.583 93.216 C 28.667 92.634,28.142 92.348,28.417 92.580 M169.369 92.672 C 169.258 92.850,169.170 93.090,169.173 93.206 C 169.177 93.322,169.295 93.204,169.436 92.944 C 169.729 92.403,169.674 92.183,169.369 92.672 M228.005 92.856 C 228.002 92.914,228.112 93.177,228.249 93.439 C 228.386 93.702,228.498 93.800,228.499 93.657 C 228.500 93.412,228.017 92.628,228.005 92.856 M82.325 93.780 C 83.100 94.661,84.215 96.441,84.898 97.891 C 85.151 98.426,85.393 98.829,85.436 98.786 C 85.707 98.515,82.443 93.309,81.861 93.085 C 81.738 93.038,81.947 93.350,82.325 93.780 M140.279 93.917 C 140.444 94.192,141.119 95.167,141.781 96.083 C 142.442 97.000,143.141 97.975,143.333 98.250 C 143.526 98.525,144.224 99.500,144.885 100.417 C 145.545 101.333,146.367 102.496,146.710 103.000 C 147.053 103.504,147.524 104.142,147.756 104.417 L 148.177 104.917 147.880 104.408 C 147.717 104.128,146.773 102.778,145.783 101.408 C 143.632 98.431,141.180 95.006,140.833 94.494 C 140.331 93.753,139.933 93.339,140.279 93.917 M168.784 94.036 C 168.258 95.144,167.847 96.167,167.929 96.167 C 167.974 96.167,168.164 95.810,168.350 95.375 C 168.535 94.940,168.795 94.365,168.928 94.098 C 169.060 93.831,169.140 93.585,169.106 93.550 C 169.072 93.516,168.927 93.735,168.784 94.036 M228.774 94.625 C 229.008 95.193,229.333 95.692,229.333 95.481 C 229.333 95.333,228.662 94.000,228.588 94.000 C 228.549 94.000,228.633 94.281,228.774 94.625 M208.339 94.426 C 208.350 94.706,208.821 95.429,208.822 95.167 C 208.822 95.029,208.713 94.771,208.578 94.593 C 208.443 94.415,208.336 94.340,208.339 94.426 M33.727 95.751 C 34.335 96.068,34.490 96.070,34.074 95.755 C 33.896 95.621,33.637 95.509,33.500 95.506 C 33.362 95.504,33.465 95.614,33.727 95.751 M208.833 95.532 C 208.833 95.585,208.945 95.843,209.082 96.106 C 209.219 96.369,209.329 96.471,209.327 96.333 C 209.325 96.196,209.213 95.938,209.078 95.760 C 208.943 95.582,208.833 95.480,208.833 95.532 M229.340 95.833 C 229.342 95.971,229.454 96.229,229.589 96.407 C 229.903 96.823,229.901 96.669,229.584 96.061 C 229.447 95.798,229.337 95.696,229.340 95.833 M34.894 96.251 C 35.157 96.388,35.457 96.500,35.561 96.499 C 35.665 96.498,35.535 96.386,35.273 96.249 C 35.010 96.112,34.710 96.000,34.606 96.001 C 34.502 96.002,34.631 96.114,34.894 96.251 M188.027 96.424 C 187.748 97.037,187.801 97.167,188.103 96.610 C 188.244 96.350,188.328 96.106,188.290 96.068 C 188.252 96.030,188.134 96.190,188.027 96.424 M36.227 96.751 C 36.490 96.888,36.827 96.997,36.977 96.993 C 37.127 96.990,36.998 96.877,36.689 96.743 C 35.956 96.425,35.613 96.431,36.227 96.751 M209.333 96.699 C 209.333 96.752,209.445 97.010,209.582 97.273 C 209.719 97.535,209.829 97.638,209.827 97.500 C 209.825 97.362,209.713 97.104,209.578 96.926 C 209.443 96.749,209.333 96.646,209.333 96.699 M167.161 97.601 C 166.969 98.050,166.705 98.635,166.572 98.902 C 166.440 99.169,166.368 99.423,166.412 99.467 C 166.456 99.511,166.648 99.180,166.839 98.732 C 167.031 98.284,167.295 97.698,167.428 97.431 C 167.560 97.164,167.632 96.910,167.588 96.866 C 167.544 96.822,167.352 97.153,167.161 97.601 M229.845 96.917 C 229.845 97.008,229.952 97.271,230.083 97.500 C 230.214 97.729,230.322 97.842,230.322 97.750 C 230.322 97.658,230.214 97.396,230.083 97.167 C 229.952 96.938,229.845 96.825,229.845 96.917 M37.811 97.257 C 38.119 97.390,38.494 97.497,38.644 97.493 C 38.794 97.489,38.617 97.377,38.250 97.245 C 37.386 96.934,37.086 96.942,37.811 97.257 M187.527 97.590 C 187.248 98.203,187.301 98.334,187.603 97.777 C 187.744 97.517,187.828 97.273,187.790 97.235 C 187.752 97.196,187.634 97.357,187.527 97.590 M39.417 97.741 C 39.692 97.875,40.104 97.981,40.333 97.975 C 40.717 97.967,40.710 97.955,40.250 97.829 C 39.040 97.498,38.886 97.481,39.417 97.741 M209.833 97.933 C 209.833 98.025,209.896 98.171,209.974 98.258 C 210.284 98.609,211.851 102.546,211.767 102.765 C 211.691 102.964,209.711 103.000,198.667 103.000 C 184.598 103.000,185.224 103.041,185.663 102.138 C 185.843 101.768,185.840 101.765,185.593 102.074 C 185.304 102.434,185.274 102.649,185.471 102.959 C 185.705 103.327,211.895 103.174,211.966 102.804 C 211.995 102.651,211.595 101.526,211.076 100.304 C 210.189 98.215,209.833 97.537,209.833 97.933 M41.000 98.167 C 41.137 98.256,41.362 98.328,41.500 98.328 C 41.722 98.328,41.722 98.310,41.500 98.167 C 41.362 98.078,41.137 98.005,41.000 98.005 C 40.778 98.005,40.778 98.023,41.000 98.167 M230.333 98.054 C 230.333 98.118,230.405 98.301,230.492 98.461 C 230.579 98.620,230.776 99.034,230.930 99.381 C 231.084 99.728,231.239 99.983,231.275 99.947 C 231.310 99.912,231.226 99.666,231.087 99.400 C 230.949 99.134,230.833 98.842,230.829 98.750 C 230.822 98.560,230.333 97.874,230.333 98.054 M187.035 98.672 C 186.924 98.850,186.834 99.090,186.834 99.206 C 186.835 99.322,186.949 99.199,187.087 98.934 C 187.376 98.380,187.338 98.187,187.035 98.672 M43.000 98.667 C 43.137 98.756,43.400 98.824,43.583 98.819 L 43.917 98.810 43.583 98.667 C 43.085 98.453,42.669 98.453,43.000 98.667 M44.583 98.998 C 44.950 99.066,45.587 99.167,46.000 99.222 L 46.750 99.321 45.917 99.093 C 45.458 98.968,44.821 98.868,44.500 98.870 L 43.917 98.875 44.583 98.998 M85.506 99.167 C 85.509 99.304,85.621 99.562,85.755 99.740 C 86.070 100.156,86.068 100.002,85.751 99.394 C 85.614 99.131,85.504 99.029,85.506 99.167 M47.667 99.504 C 48.079 99.574,48.829 99.675,49.333 99.730 L 50.250 99.829 49.167 99.591 C 48.571 99.461,47.821 99.359,47.500 99.366 C 46.961 99.377,46.974 99.388,47.667 99.504 M186.535 99.839 C 186.424 100.017,186.334 100.257,186.334 100.373 C 186.335 100.489,186.449 100.366,186.587 100.100 C 186.876 99.546,186.838 99.354,186.535 99.839 M166.112 99.921 C 166.050 100.102,165.955 100.362,165.899 100.500 C 165.844 100.638,165.925 100.579,166.079 100.371 C 166.232 100.162,166.328 99.902,166.292 99.792 C 166.254 99.680,166.176 99.736,166.112 99.921 M51.500 100.004 C 51.913 100.074,52.663 100.175,53.167 100.230 L 54.083 100.329 53.000 100.091 C 52.404 99.961,51.654 99.859,51.333 99.866 C 50.794 99.877,50.807 99.888,51.500 100.004 M86.007 100.273 C 86.003 100.377,86.110 100.714,86.243 101.023 C 86.377 101.331,86.490 101.498,86.493 101.394 C 86.497 101.290,86.390 100.953,86.257 100.644 C 86.123 100.336,86.010 100.168,86.007 100.273 M231.348 100.250 C 231.346 100.472,232.318 102.464,232.324 102.250 C 232.327 102.158,232.109 101.633,231.839 101.083 C 231.570 100.533,231.349 100.158,231.348 100.250 M55.500 100.590 C 56.004 100.716,56.642 100.816,56.917 100.812 C 57.243 100.808,57.070 100.727,56.417 100.580 C 55.107 100.285,54.312 100.294,55.500 100.590 M186.014 100.975 C 185.914 101.160,185.834 101.410,185.834 101.531 C 185.835 101.651,185.949 101.533,186.087 101.267 C 186.226 101.001,186.307 100.751,186.266 100.711 C 186.226 100.671,186.113 100.790,186.014 100.975 M58.333 101.092 C 58.746 101.222,59.233 101.324,59.417 101.320 C 59.600 101.315,59.375 101.207,58.917 101.079 C 57.827 100.777,57.365 100.787,58.333 101.092 M165.527 101.257 C 165.248 101.870,165.301 102.001,165.603 101.444 C 165.744 101.183,165.828 100.939,165.790 100.901 C 165.752 100.863,165.634 101.023,165.527 101.257 M60.311 101.590 C 60.619 101.724,60.994 101.830,61.144 101.826 C 61.294 101.822,61.117 101.711,60.750 101.579 C 59.886 101.267,59.586 101.275,60.311 101.590 M86.587 102.000 C 86.899 103.235,86.966 103.416,86.983 103.061 C 86.992 102.865,86.883 102.453,86.741 102.144 C 86.570 101.775,86.518 101.726,86.587 102.000 M61.592 101.988 C 61.679 102.073,61.975 102.190,62.250 102.246 C 62.748 102.349,62.748 102.349,62.189 102.092 C 61.549 101.797,61.363 101.765,61.592 101.988 M165.035 102.339 C 164.924 102.517,164.834 102.757,164.834 102.873 C 164.835 102.989,164.949 102.866,165.087 102.600 C 165.376 102.046,165.338 101.854,165.035 102.339 M232.333 102.558 C 232.333 102.589,232.441 102.833,232.573 103.099 C 232.705 103.366,232.969 103.950,233.161 104.399 C 233.352 104.847,233.544 105.178,233.588 105.134 C 233.632 105.090,233.560 104.836,233.428 104.569 C 233.295 104.302,233.035 103.727,232.850 103.292 C 232.569 102.634,232.333 102.299,232.333 102.558 M64.417 103.213 C 64.967 103.508,65.979 104.307,66.667 104.988 C 68.014 106.323,67.968 106.143,66.593 104.697 C 65.847 103.912,63.975 102.659,63.567 102.671 C 63.484 102.674,63.867 102.917,64.417 103.213 M164.327 103.935 C 164.136 104.383,163.871 104.968,163.739 105.235 C 163.607 105.502,163.534 105.757,163.578 105.801 C 163.622 105.845,163.815 105.514,164.006 105.065 C 164.197 104.617,164.462 104.032,164.594 103.765 C 164.727 103.498,164.799 103.243,164.755 103.199 C 164.711 103.155,164.519 103.486,164.327 103.935 M87.101 104.083 C 87.397 106.048,87.454 106.289,87.475 105.667 C 87.485 105.346,87.383 104.708,87.247 104.250 C 87.025 103.498,87.011 103.482,87.101 104.083 M148.595 105.625 C 148.853 105.969,149.251 106.513,149.481 106.833 C 149.984 107.537,150.273 107.857,150.082 107.500 C 149.851 107.068,148.306 105.000,148.214 105.000 C 148.166 105.000,148.338 105.281,148.595 105.625 M233.673 105.500 C 233.675 105.638,233.787 105.896,233.922 106.074 C 234.237 106.490,234.235 106.335,233.918 105.727 C 233.781 105.465,233.671 105.362,233.673 105.500 M163.279 106.254 C 163.217 106.435,163.121 106.696,163.066 106.833 C 163.011 106.971,163.091 106.913,163.245 106.704 C 163.399 106.495,163.495 106.235,163.458 106.125 C 163.421 106.013,163.342 106.070,163.279 106.254 M30.926 106.318 C 30.875 106.401,30.974 106.432,31.147 106.387 C 31.349 106.334,31.557 106.441,31.731 106.689 C 32.031 107.119,32.094 106.988,31.827 106.489 C 31.650 106.157,31.091 106.051,30.926 106.318 M30.074 106.745 C 29.896 106.879,29.825 106.989,29.917 106.989 C 30.008 106.989,30.229 106.879,30.407 106.745 C 30.585 106.610,30.655 106.500,30.564 106.500 C 30.472 106.500,30.251 106.610,30.074 106.745 M234.178 106.583 C 234.178 106.675,234.286 106.938,234.417 107.167 C 234.548 107.396,234.655 107.508,234.655 107.417 C 234.655 107.325,234.548 107.063,234.417 106.833 C 234.286 106.604,234.178 106.492,234.178 106.583 M87.567 109.250 C 87.567 110.625,87.593 111.165,87.624 110.451 C 87.655 109.736,87.655 108.611,87.624 107.951 C 87.592 107.290,87.566 107.875,87.567 109.250 M32.007 107.333 C 32.013 107.632,32.486 108.500,32.494 108.227 C 32.497 108.123,32.388 107.823,32.251 107.561 C 32.114 107.298,32.004 107.196,32.007 107.333 M162.694 107.590 C 162.414 108.203,162.468 108.334,162.770 107.777 C 162.911 107.517,162.995 107.273,162.957 107.235 C 162.919 107.196,162.800 107.357,162.694 107.590 M68.440 107.667 C 68.602 108.207,68.609 110.748,68.450 111.500 C 68.360 111.924,68.395 111.879,68.577 111.333 C 68.907 110.347,68.906 108.528,68.574 107.811 C 68.432 107.502,68.371 107.438,68.440 107.667 M27.469 108.065 C 26.072 108.839,26.066 108.965,27.458 108.267 C 28.123 107.935,28.667 107.626,28.667 107.581 C 28.667 107.436,28.432 107.530,27.469 108.065 M234.667 107.699 C 234.667 107.752,234.779 108.010,234.916 108.273 C 235.053 108.535,235.163 108.638,235.160 108.500 C 235.158 108.362,235.046 108.104,234.911 107.926 C 234.777 107.749,234.667 107.646,234.667 107.699 M150.694 108.597 C 150.996 109.017,151.309 109.401,151.389 109.451 C 151.561 109.557,151.015 108.682,150.710 108.363 C 150.595 108.242,150.500 108.073,150.500 107.988 C 150.500 107.903,150.420 107.833,150.323 107.833 C 150.226 107.833,150.393 108.177,150.694 108.597 M161.939 109.249 C 161.421 110.342,161.406 110.532,161.789 111.131 C 162.339 111.992,164.695 115.167,164.784 115.167 C 164.833 115.167,164.687 114.923,164.460 114.625 C 164.233 114.327,163.683 113.558,163.239 112.917 C 162.795 112.275,162.389 111.712,162.337 111.667 C 161.794 111.188,161.558 110.364,161.823 109.873 C 162.177 109.215,162.497 108.442,162.440 108.384 C 162.406 108.350,162.180 108.739,161.939 109.249 M32.500 108.552 C 32.500 108.824,33.617 110.696,34.408 111.750 C 35.679 113.444,38.333 115.876,38.333 115.348 C 38.333 115.248,38.274 115.167,38.201 115.167 C 37.416 115.167,34.318 111.730,33.167 109.583 C 32.607 108.539,32.500 108.373,32.500 108.552 M24.750 109.485 C 24.108 109.830,22.888 110.474,22.039 110.915 C 21.190 111.356,20.521 111.744,20.554 111.776 C 20.586 111.809,20.981 111.638,21.432 111.398 C 21.882 111.157,23.037 110.557,24.000 110.064 C 25.894 109.095,26.342 108.833,26.083 108.848 C 25.992 108.853,25.392 109.140,24.750 109.485 M235.167 108.891 C 235.167 108.923,235.275 109.167,235.406 109.433 C 235.538 109.699,235.803 110.284,235.994 110.732 C 236.185 111.180,236.378 111.511,236.422 111.467 C 236.466 111.423,236.393 111.169,236.261 110.902 C 236.129 110.635,235.869 110.060,235.683 109.625 C 235.403 108.968,235.167 108.632,235.167 108.891 M152.031 110.458 C 152.335 110.894,152.625 111.287,152.676 111.333 C 152.727 111.379,153.157 111.979,153.631 112.667 C 154.106 113.354,154.691 114.142,154.932 114.417 L 155.370 114.917 154.962 114.333 C 154.738 114.013,154.269 113.337,153.921 112.833 C 152.883 111.331,151.641 109.667,151.557 109.667 C 151.514 109.667,151.728 110.023,152.031 110.458 M236.509 111.750 C 236.506 111.842,236.725 112.367,236.994 112.917 C 237.263 113.467,237.484 113.842,237.485 113.750 C 237.487 113.528,236.515 111.536,236.509 111.750 M19.760 112.089 C 19.582 112.223,19.511 112.333,19.603 112.333 C 19.695 112.333,19.915 112.223,20.093 112.089 C 20.271 111.954,20.342 111.844,20.250 111.844 C 20.158 111.844,19.938 111.954,19.760 112.089 M68.035 112.572 C 67.756 113.185,67.783 113.313,68.096 112.866 C 68.240 112.660,68.331 112.410,68.298 112.310 C 68.265 112.210,68.146 112.328,68.035 112.572 M87.299 113.333 C 87.235 113.837,87.141 114.475,87.090 114.750 C 87.038 115.025,87.113 114.887,87.257 114.444 C 87.401 114.001,87.495 113.363,87.466 113.027 C 87.419 112.485,87.401 112.519,87.299 113.333 M292.993 114.417 C 293.548 115.242,294.193 116.142,294.426 116.417 C 294.660 116.692,294.396 116.242,293.841 115.417 C 293.285 114.592,292.640 113.692,292.407 113.417 C 292.174 113.142,292.437 113.592,292.993 114.417 M17.240 113.411 C 17.062 113.546,16.992 113.656,17.083 113.656 C 17.175 113.656,17.396 113.546,17.574 113.411 C 17.751 113.277,17.822 113.167,17.730 113.167 C 17.639 113.167,17.418 113.277,17.240 113.411 M67.500 113.583 C 67.382 113.725,67.323 113.879,67.369 113.925 C 67.415 113.971,67.549 113.892,67.667 113.750 C 67.784 113.608,67.843 113.454,67.798 113.409 C 67.752 113.363,67.618 113.441,67.500 113.583 M16.083 114.011 C 15.528 114.367,15.506 114.641,15.941 115.750 C 16.085 116.117,16.273 116.595,16.358 116.813 C 16.443 117.031,16.552 117.170,16.601 117.121 C 16.650 117.072,16.617 116.894,16.529 116.725 C 16.270 116.230,15.854 115.112,15.794 114.750 C 15.755 114.517,15.916 114.305,16.328 114.047 C 16.652 113.843,16.842 113.680,16.750 113.684 C 16.658 113.688,16.358 113.835,16.083 114.011 M126.845 114.243 C 127.061 114.636,127.666 115.368,127.662 115.231 C 127.660 115.150,127.453 114.855,127.204 114.577 C 126.954 114.298,126.793 114.148,126.845 114.243 M66.619 114.906 C 66.279 115.313,65.550 115.924,64.998 116.265 C 64.446 116.605,64.026 116.915,64.065 116.954 C 64.285 117.174,66.374 115.530,67.026 114.625 C 67.528 113.928,67.312 114.077,66.619 114.906 M155.425 115.176 C 155.521 115.309,155.784 115.697,156.008 116.041 C 156.233 116.384,156.478 116.665,156.552 116.666 C 156.706 116.667,155.681 115.194,155.420 115.038 C 155.311 114.972,155.312 115.022,155.425 115.176 M238.013 115.095 C 238.006 115.193,238.221 115.718,238.490 116.262 C 238.760 116.805,238.979 117.175,238.977 117.083 C 238.973 116.835,238.028 114.887,238.013 115.095 M165.338 116.099 C 166.269 117.467,168.522 120.500,168.607 120.500 C 168.651 120.500,168.439 120.162,168.135 119.749 C 167.156 118.416,166.339 117.270,165.729 116.375 C 165.402 115.893,165.055 115.450,164.958 115.391 C 164.861 115.331,165.032 115.650,165.338 116.099 M38.879 115.833 C 39.112 116.017,39.357 116.167,39.424 116.167 C 39.490 116.167,39.354 116.017,39.121 115.833 C 38.888 115.650,38.643 115.500,38.576 115.500 C 38.510 115.500,38.646 115.650,38.879 115.833 M86.792 115.917 C 86.727 116.192,86.631 116.604,86.578 116.833 C 86.514 117.112,86.570 117.058,86.748 116.673 C 86.894 116.355,86.990 115.943,86.961 115.756 C 86.920 115.492,86.882 115.528,86.792 115.917 M128.281 116.250 C 128.711 116.978,131.678 121.000,131.784 121.000 C 131.834 121.000,131.800 120.906,131.708 120.792 C 131.617 120.677,130.862 119.646,130.031 118.500 C 128.216 116.000,127.869 115.553,128.281 116.250 M39.770 116.366 C 39.873 116.532,42.010 117.546,42.089 117.466 C 42.120 117.436,41.592 117.144,40.915 116.819 C 40.238 116.494,39.723 116.290,39.770 116.366 M156.771 117.000 C 156.839 117.138,158.131 118.975,159.643 121.083 C 161.154 123.192,162.608 125.235,162.874 125.625 C 163.140 126.015,163.388 126.333,163.426 126.333 C 163.536 126.333,163.003 125.521,161.750 123.777 C 161.108 122.885,159.820 121.089,158.888 119.786 C 157.109 117.302,156.564 116.583,156.771 117.000 M63.240 117.245 C 63.062 117.379,62.992 117.489,63.083 117.489 C 63.175 117.489,63.396 117.379,63.574 117.245 C 63.751 117.110,63.822 117.000,63.730 117.000 C 63.639 117.000,63.418 117.110,63.240 117.245 M294.931 117.167 C 295.046 117.400,295.617 118.219,298.336 122.053 C 298.933 122.895,299.702 123.996,300.045 124.500 C 300.387 125.004,300.860 125.642,301.095 125.917 C 301.526 126.421,300.178 124.384,298.926 122.640 C 298.554 122.122,298.137 121.532,298.000 121.329 C 297.862 121.127,297.337 120.379,296.833 119.667 C 296.329 118.955,295.804 118.204,295.667 117.999 C 295.307 117.461,294.786 116.872,294.931 117.167 M16.673 117.500 C 16.675 117.638,16.787 117.896,16.922 118.074 C 17.237 118.490,17.235 118.335,16.918 117.727 C 16.781 117.465,16.671 117.362,16.673 117.500 M86.204 117.875 C 85.921 118.660,85.960 118.872,86.261 118.179 C 86.397 117.865,86.486 117.541,86.459 117.459 C 86.431 117.377,86.317 117.564,86.204 117.875 M239.005 117.356 C 239.002 117.414,239.112 117.677,239.249 117.939 C 239.386 118.202,239.498 118.300,239.499 118.157 C 239.500 117.912,239.017 117.128,239.005 117.356 M42.811 117.757 C 43.119 117.890,43.457 117.997,43.561 117.993 C 43.665 117.990,43.498 117.877,43.189 117.743 C 42.881 117.610,42.543 117.503,42.439 117.507 C 42.335 117.510,42.502 117.623,42.811 117.757 M62.093 117.755 C 61.681 118.067,61.952 118.063,62.500 117.750 C 62.742 117.612,62.812 117.512,62.667 117.511 C 62.529 117.511,62.271 117.621,62.093 117.755 M308.808 118.041 C 308.876 118.110,319.616 118.185,332.674 118.208 L 356.417 118.250 356.417 127.417 L 356.417 136.583 348.167 136.705 C 343.629 136.772,332.942 136.810,324.417 136.789 L 308.917 136.750 307.917 135.403 C 307.367 134.662,306.804 133.884,306.667 133.674 C 306.529 133.464,306.281 133.132,306.115 132.937 C 305.556 132.281,306.307 133.440,307.641 135.292 L 308.872 137.000 332.597 137.000 C 355.882 137.000,356.325 136.994,356.494 136.678 C 356.700 136.294,356.734 118.531,356.530 118.209 C 356.426 118.046,351.338 117.993,332.541 117.959 C 319.419 117.936,308.739 117.973,308.808 118.041 M44.333 118.250 C 45.123 118.554,45.559 118.549,44.856 118.243 C 44.547 118.110,44.172 118.006,44.023 118.013 C 43.873 118.020,44.012 118.126,44.333 118.250 M60.500 118.260 C 60.179 118.382,60.039 118.485,60.189 118.491 C 60.339 118.496,60.714 118.390,61.023 118.257 C 61.717 117.955,61.298 117.958,60.500 118.260 M46.000 118.667 C 46.642 118.872,46.985 118.872,46.667 118.667 C 46.529 118.578,46.229 118.511,46.000 118.519 L 45.583 118.533 46.000 118.667 M58.794 118.595 C 58.742 118.647,58.336 118.751,57.891 118.825 C 57.324 118.920,57.232 118.966,57.583 118.977 C 57.858 118.986,58.458 118.889,58.917 118.762 C 59.492 118.602,59.617 118.525,59.319 118.515 C 59.083 118.507,58.846 118.543,58.794 118.595 M239.757 119.083 C 239.908 119.450,240.103 119.825,240.191 119.917 C 240.279 120.008,240.227 119.783,240.077 119.417 C 239.926 119.050,239.730 118.675,239.643 118.583 C 239.555 118.492,239.606 118.717,239.757 119.083 M47.208 118.948 C 47.369 118.990,47.631 118.990,47.792 118.948 C 47.952 118.906,47.821 118.872,47.500 118.872 C 47.179 118.872,47.048 118.906,47.208 118.948 M85.702 119.239 C 85.411 119.878,85.455 120.174,85.756 119.597 C 85.895 119.330,85.986 119.040,85.957 118.953 C 85.928 118.866,85.813 118.995,85.702 119.239 M286.955 119.042 C 287.393 119.602,289.991 123.200,290.538 124.003 C 290.880 124.506,291.355 125.142,291.593 125.417 C 291.966 125.847,291.397 124.905,290.790 124.087 C 290.720 123.993,289.990 122.979,289.168 121.833 C 288.345 120.688,287.558 119.603,287.419 119.424 C 287.280 119.245,287.167 119.039,287.167 118.966 C 287.167 118.893,287.082 118.833,286.980 118.833 C 286.854 118.833,286.846 118.902,286.955 119.042 M49.250 119.174 C 49.708 119.246,50.533 119.299,51.083 119.293 L 52.083 119.283 51.000 119.161 C 50.404 119.094,49.579 119.040,49.167 119.042 L 48.417 119.045 49.250 119.174 M54.000 119.167 L 53.083 119.279 54.000 119.288 C 54.504 119.293,55.367 119.241,55.917 119.173 L 56.917 119.049 55.917 119.052 C 55.367 119.053,54.504 119.105,54.000 119.167 M17.670 119.539 C 17.662 119.834,20.049 123.465,21.166 124.857 C 22.228 126.182,24.070 128.027,25.083 128.783 L 26.083 129.528 25.250 128.806 C 23.553 127.337,22.440 126.224,21.693 125.250 C 21.272 124.700,20.835 124.154,20.721 124.038 C 20.513 123.823,19.149 121.779,18.194 120.250 C 17.907 119.792,17.672 119.472,17.670 119.539 M85.285 120.281 C 85.103 120.581,84.688 121.667,84.755 121.667 C 84.864 121.667,85.507 120.284,85.432 120.210 C 85.396 120.174,85.330 120.206,85.285 120.281 M240.334 120.343 C 240.334 120.486,240.443 120.749,240.578 120.926 C 240.896 121.347,240.900 121.165,240.584 120.561 C 240.447 120.298,240.335 120.200,240.334 120.343 M168.948 121.083 C 169.111 121.358,169.786 122.333,170.447 123.250 C 171.109 124.167,171.806 125.142,171.997 125.417 C 173.969 128.260,174.212 128.454,174.599 127.494 C 174.808 126.977,174.806 126.950,174.583 127.240 C 174.446 127.418,174.333 127.662,174.333 127.782 C 174.333 128.184,174.026 128.006,173.552 127.331 C 171.187 123.954,168.445 120.235,168.948 121.083 M177.172 121.529 C 176.987 121.912,176.865 122.254,176.901 122.290 C 176.937 122.326,177.101 122.050,177.265 121.677 L 177.565 120.999 198.737 121.041 L 219.909 121.083 220.361 122.000 C 220.859 123.011,221.000 123.047,220.548 122.047 C 219.940 120.701,222.325 120.833,198.645 120.833 L 177.508 120.833 177.172 121.529 M132.112 121.583 C 132.276 121.858,132.900 122.758,133.499 123.583 C 134.098 124.408,134.868 125.496,135.211 126.000 C 135.554 126.504,136.027 127.142,136.261 127.417 C 136.748 127.986,135.227 125.719,133.841 123.809 C 133.333 123.108,132.804 122.367,132.667 122.163 C 132.170 121.425,131.765 121.002,132.112 121.583 M240.840 121.500 C 240.842 121.638,240.954 121.896,241.089 122.074 C 241.403 122.490,241.401 122.335,241.084 121.727 C 240.947 121.465,240.837 121.362,240.840 121.500 M83.667 123.303 C 82.535 125.081,79.337 128.383,77.270 129.908 C 75.696 131.070,75.406 131.418,76.875 130.383 C 79.610 128.456,82.686 125.272,84.146 122.857 C 85.025 121.403,84.661 121.742,83.667 123.303 M176.527 122.924 C 176.248 123.537,176.301 123.667,176.603 123.110 C 176.744 122.850,176.828 122.606,176.790 122.568 C 176.752 122.530,176.634 122.690,176.527 122.924 M241.339 122.593 C 241.350 122.873,241.821 123.596,241.822 123.333 C 241.822 123.196,241.713 122.938,241.578 122.760 C 241.443 122.582,241.336 122.507,241.339 122.593 M220.833 123.032 C 220.833 123.085,220.945 123.343,221.082 123.606 C 221.219 123.869,221.329 123.971,221.327 123.833 C 221.325 123.696,221.213 123.438,221.078 123.260 C 220.943 123.082,220.833 122.980,220.833 123.032 M175.950 124.203 C 175.425 125.311,175.014 126.333,175.095 126.333 C 175.141 126.333,175.330 125.977,175.516 125.542 C 175.702 125.106,175.962 124.532,176.094 124.265 C 176.227 123.998,176.307 123.751,176.273 123.717 C 176.238 123.683,176.093 123.901,175.950 124.203 M241.833 123.715 C 241.833 123.783,241.906 123.968,241.994 124.127 C 242.082 124.286,242.343 124.848,242.575 125.375 C 242.806 125.902,243.032 126.333,243.076 126.333 C 243.181 126.333,242.340 124.352,242.052 123.921 C 241.932 123.740,241.833 123.648,241.833 123.715 M221.333 124.224 C 221.333 124.256,221.441 124.500,221.573 124.766 C 221.705 125.032,221.969 125.617,222.161 126.065 C 222.352 126.514,222.544 126.845,222.588 126.801 C 222.632 126.757,222.560 126.502,222.428 126.235 C 222.295 125.968,222.035 125.394,221.850 124.958 C 221.569 124.301,221.333 123.966,221.333 124.224 M292.429 126.625 C 292.686 126.969,293.085 127.513,293.314 127.833 C 293.817 128.537,294.106 128.857,293.915 128.500 C 293.684 128.068,292.139 126.000,292.048 126.000 C 292.000 126.000,292.171 126.281,292.429 126.625 M163.873 127.042 C 164.101 127.340,164.652 128.108,165.098 128.750 C 165.990 130.033,166.015 130.067,166.513 130.667 C 167.211 131.508,166.573 130.530,165.127 128.542 C 164.310 127.419,163.601 126.500,163.551 126.500 C 163.501 126.500,163.646 126.744,163.873 127.042 M243.168 126.676 C 243.167 126.819,243.277 127.082,243.411 127.260 C 243.730 127.681,243.733 127.498,243.418 126.894 C 243.281 126.631,243.168 126.534,243.168 126.676 M301.754 126.903 C 302.066 127.426,303.807 129.869,304.257 130.417 C 304.703 130.960,304.049 129.900,303.262 128.807 C 302.889 128.288,302.471 127.698,302.333 127.495 C 301.845 126.773,301.413 126.331,301.754 126.903 M222.673 127.167 C 222.675 127.304,222.787 127.562,222.922 127.740 C 223.237 128.156,223.235 128.002,222.918 127.394 C 222.781 127.131,222.671 127.029,222.673 127.167 M243.678 127.750 C 243.678 127.842,243.786 128.104,243.917 128.333 C 244.048 128.563,244.155 128.675,244.155 128.583 C 244.155 128.492,244.048 128.229,243.917 128.000 C 243.786 127.771,243.678 127.658,243.678 127.750 M137.195 128.746 C 137.500 129.202,137.807 129.652,137.876 129.746 C 137.946 129.840,138.420 130.498,138.929 131.208 C 139.439 131.919,139.895 132.500,139.943 132.500 C 139.990 132.500,139.790 132.181,139.499 131.792 C 139.207 131.402,138.641 130.596,138.240 130.000 C 137.839 129.404,137.315 128.692,137.076 128.417 C 136.754 128.048,136.785 128.134,137.195 128.746 M223.178 128.250 C 223.178 128.342,223.286 128.604,223.417 128.833 C 223.548 129.063,223.655 129.175,223.655 129.083 C 223.655 128.992,223.548 128.729,223.417 128.500 C 223.286 128.271,223.178 128.158,223.178 128.250 M244.209 129.000 C 244.424 129.617,245.561 131.994,245.616 131.939 C 245.650 131.906,245.450 131.388,245.172 130.787 C 244.894 130.187,244.664 129.633,244.661 129.556 C 244.658 129.480,244.536 129.267,244.389 129.083 C 244.240 128.897,244.160 128.860,244.209 129.000 M294.490 129.542 C 295.474 130.908,295.843 131.238,295.050 130.044 C 294.610 129.381,294.189 128.837,294.115 128.836 C 294.040 128.835,294.209 129.152,294.490 129.542 M223.667 129.366 C 223.667 129.419,223.779 129.677,223.916 129.939 C 224.053 130.202,224.163 130.304,224.160 130.167 C 224.158 130.029,224.046 129.771,223.911 129.593 C 223.777 129.415,223.667 129.313,223.667 129.366 M26.583 129.916 C 27.133 130.386,28.667 131.374,28.667 131.257 C 28.667 131.217,28.085 130.802,27.375 130.336 C 26.665 129.869,26.308 129.680,26.583 129.916 M362.389 130.261 C 362.229 130.680,362.612 130.908,363.632 130.999 L 364.583 131.083 364.629 133.885 L 364.675 136.687 365.212 136.635 L 365.750 136.583 365.790 134.167 C 365.845 130.891,365.795 131.027,366.959 130.967 C 367.865 130.919,367.919 130.892,367.969 130.458 L 368.022 130.000 365.256 130.000 C 362.898 130.000,362.475 130.039,362.389 130.261 M369.500 133.344 L 369.500 136.688 370.042 136.636 L 370.583 136.583 370.630 134.558 C 370.690 131.972,370.861 131.754,371.766 133.121 C 372.939 134.894,372.911 134.883,373.760 133.917 C 374.163 133.458,374.495 133.031,374.497 132.967 C 374.498 132.903,374.692 132.643,374.927 132.390 C 375.549 131.719,375.661 132.048,375.664 134.552 L 375.667 136.688 376.208 136.636 L 376.750 136.583 376.750 133.333 L 376.750 130.083 376.000 130.042 L 375.250 130.000 374.276 131.333 C 373.081 132.969,373.108 132.969,371.937 131.333 C 370.989 130.010,370.977 130.000,370.241 130.000 L 369.500 130.000 369.500 133.344 M367.833 130.417 C 367.833 130.601,367.640 130.667,367.094 130.667 C 366.688 130.667,366.163 130.740,365.928 130.829 L 365.500 130.992 365.500 133.746 C 365.500 136.389,365.487 136.500,365.167 136.500 C 364.847 136.500,364.833 136.389,364.833 133.783 C 364.833 130.699,364.821 130.667,363.633 130.667 C 363.033 130.667,362.833 130.604,362.833 130.417 C 362.833 130.206,363.222 130.167,365.333 130.167 C 367.444 130.167,367.833 130.206,367.833 130.417 M370.929 130.405 C 371.060 130.536,371.167 130.723,371.167 130.821 C 371.167 130.920,371.236 131.000,371.320 131.000 C 371.404 131.000,371.643 131.281,371.852 131.625 C 372.322 132.400,372.860 132.993,373.094 132.997 C 373.299 133.000,374.333 131.876,374.333 131.651 C 374.333 131.568,374.390 131.498,374.458 131.496 C 374.527 131.493,374.767 131.193,374.992 130.829 C 375.334 130.273,375.489 130.167,375.950 130.167 L 376.500 130.167 376.500 133.333 C 376.500 136.389,376.488 136.500,376.167 136.500 C 375.851 136.500,375.833 136.389,375.833 134.347 C 375.833 130.987,375.685 130.915,373.844 133.375 C 373.018 134.479,372.996 134.488,372.633 133.872 C 372.483 133.619,372.186 133.217,371.972 132.979 C 371.758 132.741,371.501 132.404,371.400 132.231 C 371.299 132.058,371.018 131.893,370.775 131.864 L 370.333 131.811 370.333 134.156 C 370.333 136.389,370.318 136.500,370.000 136.500 C 369.678 136.500,369.667 136.389,369.667 133.333 L 369.667 130.167 370.179 130.167 C 370.460 130.167,370.798 130.274,370.929 130.405 M224.172 130.523 C 224.169 130.581,224.279 130.843,224.416 131.106 C 224.553 131.369,224.665 131.466,224.666 131.324 C 224.667 131.079,224.183 130.295,224.172 130.523 M305.028 131.597 C 305.786 132.653,305.983 132.722,305.305 131.694 C 305.000 131.231,304.689 130.847,304.615 130.842 C 304.540 130.837,304.726 131.177,305.028 131.597 M75.124 131.319 C 74.439 131.758,74.344 131.913,74.948 131.606 C 75.240 131.457,75.526 131.260,75.583 131.168 C 75.716 130.952,75.676 130.965,75.124 131.319 M167.320 131.833 C 167.603 132.246,168.027 132.808,168.263 133.083 C 168.594 133.467,168.574 133.409,168.180 132.833 C 167.897 132.421,167.473 131.858,167.237 131.583 C 166.906 131.199,166.926 131.257,167.320 131.833 M29.003 131.517 C 29.385 131.884,30.187 132.369,30.272 132.284 C 30.313 132.242,30.063 132.031,29.715 131.815 C 28.899 131.307,28.696 131.223,29.003 131.517 M296.214 131.884 C 296.445 132.187,296.872 132.787,297.162 133.218 C 297.635 133.918,298.037 134.322,297.734 133.792 C 297.476 133.340,295.963 131.333,295.881 131.333 C 295.833 131.333,295.983 131.581,296.214 131.884 M225.191 132.875 C 225.471 133.540,225.768 134.155,225.850 134.242 C 226.067 134.471,226.035 134.288,225.760 133.734 C 225.628 133.468,225.369 132.894,225.183 132.458 C 224.997 132.023,224.808 131.667,224.763 131.667 C 224.718 131.667,224.911 132.210,225.191 132.875 M73.292 132.297 C 72.856 132.531,72.530 132.752,72.567 132.789 C 72.633 132.855,73.665 132.351,74.167 132.009 C 74.634 131.690,74.086 131.870,73.292 132.297 M245.673 132.260 C 245.683 132.539,246.155 133.262,246.155 133.000 C 246.156 132.862,246.046 132.604,245.911 132.426 C 245.777 132.249,245.669 132.174,245.673 132.260 M140.286 133.092 C 140.449 133.371,141.140 134.365,141.821 135.300 L 143.058 137.000 156.862 137.000 L 170.667 137.000 170.667 136.655 C 170.667 136.371,170.080 135.360,169.465 134.583 C 168.406 133.246,168.548 133.623,169.693 135.187 C 171.029 137.014,172.437 136.833,156.844 136.833 L 143.189 136.833 142.621 136.125 C 142.308 135.735,141.800 135.042,141.491 134.583 C 140.908 133.717,140.883 133.682,140.327 133.000 L 139.988 132.583 140.286 133.092 M31.760 133.078 C 31.938 133.213,32.196 133.325,32.333 133.327 C 32.471 133.329,32.369 133.219,32.106 133.082 C 31.498 132.765,31.344 132.763,31.760 133.078 M71.833 133.004 C 71.696 133.087,71.246 133.304,70.833 133.488 C 70.421 133.671,70.168 133.824,70.271 133.827 C 70.511 133.835,72.333 133.032,72.333 132.919 C 72.333 132.795,72.120 132.831,71.833 133.004 M33.000 133.583 C 33.229 133.714,33.529 133.821,33.667 133.821 C 33.804 133.821,33.664 133.711,33.356 133.577 C 32.646 133.269,32.456 133.272,33.000 133.583 M68.417 134.343 C 67.683 134.603,67.204 134.819,67.351 134.824 C 67.628 134.834,69.805 134.084,69.965 133.924 C 70.122 133.767,69.789 133.857,68.417 134.343 M35.750 134.512 C 37.616 135.129,37.858 135.197,37.930 135.126 C 37.969 135.086,37.683 134.959,37.292 134.843 C 36.902 134.727,36.281 134.527,35.911 134.399 C 35.541 134.271,35.129 134.170,34.994 134.174 C 34.860 134.177,35.200 134.329,35.750 134.512 M298.361 134.930 C 298.663 135.350,298.986 135.740,299.080 135.796 C 299.189 135.861,299.188 135.812,299.075 135.657 C 298.979 135.525,298.716 135.136,298.492 134.793 C 298.267 134.450,298.022 134.168,297.948 134.168 C 297.874 134.167,298.059 134.510,298.361 134.930 M226.006 134.667 C 226.009 134.804,226.121 135.062,226.255 135.240 C 226.570 135.656,226.568 135.502,226.251 134.894 C 226.114 134.631,226.004 134.529,226.006 134.667 M64.750 135.421 C 63.862 135.714,64.362 135.713,65.417 135.421 C 65.876 135.293,66.063 135.192,65.833 135.195 C 65.604 135.199,65.117 135.300,64.750 135.421 M40.750 135.854 C 42.038 136.141,42.853 136.193,41.833 135.923 C 41.329 135.790,40.729 135.686,40.500 135.693 C 40.216 135.701,40.296 135.752,40.750 135.854 M62.250 135.920 C 61.753 136.048,61.585 136.138,61.833 136.143 C 62.063 136.148,62.625 136.048,63.083 135.921 C 64.130 135.630,63.380 135.630,62.250 135.920 M226.507 135.730 C 226.503 135.811,226.656 136.130,226.847 136.439 L 227.194 137.000 263.352 137.000 C 302.441 137.000,300.340 137.047,299.407 136.195 C 299.121 135.934,299.115 135.935,299.315 136.201 C 299.795 136.840,300.157 136.833,263.282 136.832 L 227.250 136.830 226.882 136.207 C 226.680 135.864,226.511 135.649,226.507 135.730 M44.250 136.406 C 44.892 136.535,45.679 136.636,46.000 136.631 C 46.695 136.620,45.548 136.407,44.000 136.259 C 43.136 136.176,43.151 136.184,44.250 136.406 M59.970 136.252 C 59.923 136.299,59.330 136.402,58.651 136.480 C 57.727 136.587,57.605 136.626,58.167 136.635 C 58.579 136.641,59.404 136.546,60.000 136.423 C 60.709 136.276,60.906 136.194,60.569 136.183 C 60.287 136.174,60.017 136.205,59.970 136.252 M50.375 136.791 C 51.360 136.821,52.973 136.821,53.958 136.791 C 54.944 136.762,54.137 136.737,52.167 136.737 C 50.196 136.737,49.390 136.762,50.375 136.791 ","stroke":"none","fill":"#a182bb","fill-rule":"evenodd"}})])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"doc-click",rawName:"v-doc-click",value:(_vm.hideMenu),expression:"hideMenu"}],staticClass:"popup-menu-container",class:{opened: _vm.menuShown}},[_vm._t("button",[_c('button',{staticClass:"popup-menu-button",on:{"click":_vm.toggleMenu}},[_c('span'),_vm._v(" "),_c('span'),_vm._v(" "),_c('span')])],{toggle:_vm.toggleMenu}),_vm._v(" "),_c('transition',{attrs:{"name":"ease-out"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.menuShown),expression:"menuShown"}],staticClass:"popup-menu",class:_vm.align},[_vm._t("default")],2)])],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"field-wrapper",class:_vm.parentClasses},[_c('label',{staticClass:"form-label",class:{show: _vm.value.length > 0 && _vm.label !== null}},[_vm._v(_vm._s(_vm.label !== null ? _vm.label : ' '))]),_vm._v(" "),_vm._t("default"),_vm._v(" "),_c('input',_vm._g({ref:"input",staticClass:"form-field",class:_vm.fieldClass,attrs:{"id":_vm.id,"type":_vm.type,"placeholder":_vm.placeholder,"name":_vm.name,"attribute":_vm.attribute,"description":_vm.description,"disabled":_vm.disabled},domProps:{"value":_vm.value},on:{"input":_vm.updateValue,"blur":_vm.focusLost}},_vm.$listeners)),_vm._v(" "),(!_vm.errorAvailable())?_c('span',{staticClass:"field-description italic"},[_vm._v(_vm._s(_vm.description !== null ? _vm.description : ' '))]):_c('span',{staticClass:"field-description italic"},[_vm._v(_vm._s(_vm.errors.first(_vm.name)))])],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 268 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"field-wrapper",class:_vm.parentClasses},[_c('label',{staticClass:"form-label",class:{show: _vm.value.length > 0 && _vm.label !== null}},[_vm._v(_vm._s(_vm.label !== null ? _vm.label : ' '))]),_vm._v(" "),_vm._t("default"),_vm._v(" "),_c('textarea',_vm._g({ref:"input",staticClass:"form-field textarea",class:_vm.fieldClass,attrs:{"id":_vm.id,"type":_vm.type,"placeholder":_vm.placeholder,"name":_vm.name,"attribute":_vm.attribute,"description":_vm.description,"disabled":_vm.disabled},domProps:{"value":_vm.value},on:{"input":_vm.updateValue,"blur":_vm.focusLost}},_vm.$listeners)),_vm._v(" "),(!_vm.errorAvailable())?_c('span',{staticClass:"field-description italic"},[_vm._v(_vm._s(_vm.description !== null ? _vm.description : ' '))]):_c('span',{staticClass:"field-description italic"},[_vm._v(_vm._s(_vm.errors.first(_vm.name)))])],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{'banner-critical': _vm.classNotPresent}},[_c('div',{staticClass:"wrapper"},[(_vm.PromoImage)?_c('img',{staticClass:"banner-image",attrs:{"src":_vm.PromoImage}}):_vm._e(),_vm._v(" "),_c('span',{staticClass:"banner-notification-icon icon"}),_vm._v(" "),_c('p',{staticClass:"promo-message"},[_vm._t("default",[_vm._v("There has been an error, please try again.")])],2),_vm._v(" "),(_vm.resolve)?_c('a',{staticClass:"banner-resolve-link",attrs:{"href":_vm.resolve.url,"target":"_blank"}},[_vm._v(_vm._s(_vm.resolve.text.replace(/ /g, ' ')))]):_vm._e(),_vm._v(" "),_c('button',{staticClass:"banner-close icon-cross"})])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"field-wrapper toggle",class:_vm.parentClasses},[_c('input',{class:_vm.fieldClass,attrs:{"id":_vm.id,"type":"checkbox","name":_vm.name,"disabled":_vm.disabled,"selected":_vm.isSelected}}),_vm._v(" "),_c('label',{staticClass:"toggle-label",class:{right: _vm.position === 'right', 'on': _vm.isSelected},attrs:{"for":_vm.id},on:{"click":_vm.toggleValue}},[_c('span',{staticClass:"toggle-switch"}),_vm._v(" "),_c('span',{staticClass:"fa-check checkmark"}),_vm._v(" "),_c('span',{staticClass:"label-text-wrapper"},[_vm._v(_vm._s(_vm.label))])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 282 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"field-wrapper radio",class:_vm.parentClasses},[_c('input',{class:_vm.fieldClass,attrs:{"id":_vm.id,"type":"radio","name":_vm.name,"disabled":_vm.disabled,"selected":_vm.selectedValue == _vm.value}}),_vm._v(" "),_c('label',{staticClass:"radio-label",class:{right: _vm.position === 'right', 'selected': _vm.selectedValue == _vm.value},attrs:{"for":_vm.id},on:{"click":_vm.onSelect}},[_c('span',[_vm._v(_vm._s(_vm.label))])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 283 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"field-wrapper checkbox",class:_vm.parentClasses},[_c('input',{class:_vm.fieldClass,attrs:{"id":_vm.id,"type":"checkbox","name":_vm.name,"disabled":_vm.disabled},domProps:{"checked":_vm.isChecked}}),_vm._v(" "),_c('label',{staticClass:"checkbox-label",class:{right: _vm.position === 'right', 'checked': _vm.isChecked},attrs:{"for":_vm.id},on:{"click":_vm.toggleValue}},[_c('span',[_vm._v(_vm._s(_vm.label))])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 284 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 285 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"doc-click",rawName:"v-doc-click",value:(_vm.hide),expression:"hide"}],staticClass:"field-wrapper dropdown",class:_vm.parentClasses},[(!_vm.compact)?_c('label',{staticClass:"form-label",class:{show: _vm.selectedIndex > -1 && _vm.label !== '&nbsp;'}},[_vm._v(_vm._s(_vm.label !== null ? _vm.label : ' '))]):_vm._e(),_vm._v(" "),_c('button',{directives:[{name:"tabbed-in",rawName:"v-tabbed-in",value:(_vm.show),expression:"show"}],ref:"button",staticClass:"form-field dropdown-button",attrs:{"tabindex":_vm.searchField && _vm.isVisible ? -1 : 0,"type":"button"},on:{"keydown":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();return _vm.nextOption($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }$event.preventDefault();return _vm.previousOption($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();_vm.optionSelect(_vm.filteredList[_vm.selectorIndex].id)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }return _vm.hide($event)}],"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key,"Escape")){ return null; }return _vm.hide($event)},"click":function($event){_vm.toggleOptions($event)},"blur":function($event){!_vm.searchField && _vm.hide($event)}}},[_vm._v("\n      "+_vm._s(_vm.selectedText)+"\n  ")]),_vm._v(" "),_c('transition',{attrs:{"name":"ease-out"},on:{"enter":_vm.dropdownShown}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isVisible),expression:"isVisible"}],staticClass:"options-wrapper"},[(_vm.searchField)?_c('input-field',{ref:"searchField",staticClass:"fa-search",attrs:{"type":"text","placeholder":"Search","value":_vm.search},on:{"update:value":function($event){_vm.search=$event},"keydown":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }return _vm.nextOption($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }return _vm.previousOption($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }_vm.optionSelect(_vm.filteredList[_vm.selectorIndex].id)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }return _vm.hide($event)}],"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key,"Escape")){ return null; }return _vm.hide($event)},"blur":function($event){_vm.hide($event)}}}):_vm._e(),_vm._v(" "),_c('ul',_vm._l((_vm.filteredList),function(option,index){return _c('li',{key:index,class:{clicked: _vm.value === option.id, selected: _vm.selectorIndex === index},on:{"click":function($event){_vm.optionSelect(option.id)}}},[_vm._v("\n            "+_vm._s(option.text)+"\n        ")])}))],1)]),_vm._v(" "),(!_vm.compact)?[(!_vm.errorAvailable())?_c('span',{staticClass:"field-description italic",class:{hide: _vm.isVisible}},[_vm._v(_vm._s(_vm.description !== null ? _vm.description : ' '))]):_c('span',{staticClass:"field-description italic"},[_vm._v(_vm._s(_vm.errors.first(_vm.name)))])]:_vm._e()],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 286 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 287 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"doc-click",rawName:"v-doc-click",value:(_vm.hide),expression:"hide"}],staticClass:"field-wrapper dropdown token-field",class:_vm.parentClasses},[(!_vm.compact)?_c('label',{staticClass:"form-label",class:{show: _vm.selectedIndexes.length > 0 && _vm.label !== '&nbsp;'}},[_vm._v(_vm._s(_vm.label !== null ? _vm.label : ' '))]):_vm._e(),_vm._v(" "),_c('div',{ref:"button",staticClass:"form-field dropdown-button",class:{'token-active': _vm.value.length > 0},on:{"click":function($event){_vm.toggleOptions($event)}}},[_vm._l((_vm.selectedItems),function(token,index){return _c('div',{key:index,staticClass:"token"},[_vm._v("\n        "+_vm._s(token.text)+"\n         "),_c('button',{staticClass:"token-remove",attrs:{"tabindex":"-1"},on:{"click":function($event){$event.stopPropagation();_vm.removeToken(token)}}},[_vm._v("x")])])}),_vm._v(" "),_c('input-field',{directives:[{name:"tabbed-in",rawName:"v-tabbed-in",value:(_vm.show),expression:"show"}],ref:"searchField",staticClass:"token-search",attrs:{"type":"text","value":_vm.search},on:{"update:value":function($event){_vm.search=$event},"keydown":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }return _vm.nextOption($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }return _vm.previousOption($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }_vm.optionSelect(_vm.filteredList[_vm.selectorIndex])},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }return _vm.hide($event)}],"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key,"Escape")){ return null; }return _vm.hide($event)},"input":_vm.show}})],2),_vm._v(" "),_c('transition',{attrs:{"name":"ease-out"},on:{"enter":_vm.dropdownShown}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isVisible),expression:"isVisible"}],staticClass:"options-wrapper multiselect"},[_c('ul',_vm._l((_vm.filteredList),function(option,index){return _c('li',{key:index,class:{clicked: _vm.value.indexOf(option.id) !== -1, selected: _vm.selectorIndex === index},on:{"click":function($event){_vm.optionSelect(option)}}},[_vm._v("\n            "+_vm._s(option.text)+"\n        ")])}))])]),_vm._v(" "),(!_vm.errorAvailable())?_c('span',{staticClass:"field-description italic"},[_vm._v(_vm._s(_vm.description !== null ? _vm.description : ' '))]):_c('span',{staticClass:"field-description italic"},[_vm._v(_vm._s(_vm.errors.first(_vm.name)))])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 288 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 289 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"doc-click",rawName:"v-doc-click",value:(_vm.hide),expression:"hide"}],staticClass:"field-wrapper dropdown",class:_vm.parentClasses},[(!_vm.compact)?_c('label',{staticClass:"form-label",class:{show: _vm.selectedIndexes.length > 0 && _vm.label !== '&nbsp;'}},[_vm._v(_vm._s(_vm.label !== null ? _vm.label : ' '))]):_vm._e(),_vm._v(" "),_c('button',{directives:[{name:"tabbed-in",rawName:"v-tabbed-in",value:(_vm.show),expression:"show"}],ref:"button",staticClass:"form-field dropdown-button",attrs:{"tabindex":_vm.searchField && _vm.isVisible ? -1 : 0,"type":"button"},on:{"keydown":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();return _vm.nextOption($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }$event.preventDefault();return _vm.previousOption($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();_vm.optionSelect(_vm.filteredList[_vm.selectorIndex].id)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }return _vm.hide($event)}],"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key,"Escape")){ return null; }return _vm.hide($event)},"click":function($event){_vm.toggleOptions($event)}}},[_vm._v("\n      "+_vm._s(_vm.selectedText)+"\n  ")]),_vm._v(" "),_c('transition',{attrs:{"name":"ease-out"},on:{"enter":_vm.dropdownShown}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isVisible),expression:"isVisible"}],staticClass:"options-wrapper multiselect"},[(_vm.searchField)?_c('input-field',{ref:"searchField",staticClass:"fa-search",attrs:{"type":"text","placeholder":"Search","value":_vm.search},on:{"update:value":function($event){_vm.search=$event},"keydown":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }return _vm.nextOption($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }return _vm.previousOption($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }_vm.optionSelect(_vm.filteredList[_vm.selectorIndex].id)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }return _vm.hide($event)}],"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key,"Escape")){ return null; }return _vm.hide($event)}}}):_vm._e(),_vm._v(" "),_c('ul',_vm._l((_vm.filteredList),function(option,index){return _c('li',{key:index,class:{clicked: _vm.value.indexOf(option.id) !== -1, selected: _vm.selectorIndex === index},on:{"click":function($event){_vm.optionSelect(option.id)}}},[_c('span',{staticClass:"checkbox"}),_vm._v("\n            "+_vm._s(option.text)+"\n        ")])}))],1)]),_vm._v(" "),(!_vm.errorAvailable())?_c('span',{staticClass:"field-description italic"},[_vm._v(_vm._s(_vm.description !== null ? _vm.description : ' '))]):_c('span',{staticClass:"field-description italic"},[_vm._v(_vm._s(_vm.errors.first(_vm.name)))])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 66,
	"./af.js": 66,
	"./ar": 67,
	"./ar-dz": 68,
	"./ar-dz.js": 68,
	"./ar-kw": 69,
	"./ar-kw.js": 69,
	"./ar-ly": 70,
	"./ar-ly.js": 70,
	"./ar-ma": 71,
	"./ar-ma.js": 71,
	"./ar-sa": 72,
	"./ar-sa.js": 72,
	"./ar-tn": 73,
	"./ar-tn.js": 73,
	"./ar.js": 67,
	"./az": 74,
	"./az.js": 74,
	"./be": 75,
	"./be.js": 75,
	"./bg": 76,
	"./bg.js": 76,
	"./bm": 77,
	"./bm.js": 77,
	"./bn": 78,
	"./bn.js": 78,
	"./bo": 79,
	"./bo.js": 79,
	"./br": 80,
	"./br.js": 80,
	"./bs": 81,
	"./bs.js": 81,
	"./ca": 82,
	"./ca.js": 82,
	"./cs": 83,
	"./cs.js": 83,
	"./cv": 84,
	"./cv.js": 84,
	"./cy": 85,
	"./cy.js": 85,
	"./da": 86,
	"./da.js": 86,
	"./de": 87,
	"./de-at": 88,
	"./de-at.js": 88,
	"./de-ch": 89,
	"./de-ch.js": 89,
	"./de.js": 87,
	"./dv": 90,
	"./dv.js": 90,
	"./el": 91,
	"./el.js": 91,
	"./en-au": 92,
	"./en-au.js": 92,
	"./en-ca": 93,
	"./en-ca.js": 93,
	"./en-gb": 94,
	"./en-gb.js": 94,
	"./en-ie": 95,
	"./en-ie.js": 95,
	"./en-il": 96,
	"./en-il.js": 96,
	"./en-nz": 97,
	"./en-nz.js": 97,
	"./eo": 98,
	"./eo.js": 98,
	"./es": 99,
	"./es-do": 100,
	"./es-do.js": 100,
	"./es-us": 101,
	"./es-us.js": 101,
	"./es.js": 99,
	"./et": 102,
	"./et.js": 102,
	"./eu": 103,
	"./eu.js": 103,
	"./fa": 104,
	"./fa.js": 104,
	"./fi": 105,
	"./fi.js": 105,
	"./fo": 106,
	"./fo.js": 106,
	"./fr": 107,
	"./fr-ca": 108,
	"./fr-ca.js": 108,
	"./fr-ch": 109,
	"./fr-ch.js": 109,
	"./fr.js": 107,
	"./fy": 110,
	"./fy.js": 110,
	"./gd": 111,
	"./gd.js": 111,
	"./gl": 112,
	"./gl.js": 112,
	"./gom-latn": 113,
	"./gom-latn.js": 113,
	"./gu": 114,
	"./gu.js": 114,
	"./he": 115,
	"./he.js": 115,
	"./hi": 116,
	"./hi.js": 116,
	"./hr": 117,
	"./hr.js": 117,
	"./hu": 118,
	"./hu.js": 118,
	"./hy-am": 119,
	"./hy-am.js": 119,
	"./id": 120,
	"./id.js": 120,
	"./is": 121,
	"./is.js": 121,
	"./it": 122,
	"./it.js": 122,
	"./ja": 123,
	"./ja.js": 123,
	"./jv": 124,
	"./jv.js": 124,
	"./ka": 125,
	"./ka.js": 125,
	"./kk": 126,
	"./kk.js": 126,
	"./km": 127,
	"./km.js": 127,
	"./kn": 128,
	"./kn.js": 128,
	"./ko": 129,
	"./ko.js": 129,
	"./ky": 130,
	"./ky.js": 130,
	"./lb": 131,
	"./lb.js": 131,
	"./lo": 132,
	"./lo.js": 132,
	"./lt": 133,
	"./lt.js": 133,
	"./lv": 134,
	"./lv.js": 134,
	"./me": 135,
	"./me.js": 135,
	"./mi": 136,
	"./mi.js": 136,
	"./mk": 137,
	"./mk.js": 137,
	"./ml": 138,
	"./ml.js": 138,
	"./mn": 139,
	"./mn.js": 139,
	"./mr": 140,
	"./mr.js": 140,
	"./ms": 141,
	"./ms-my": 142,
	"./ms-my.js": 142,
	"./ms.js": 141,
	"./mt": 143,
	"./mt.js": 143,
	"./my": 144,
	"./my.js": 144,
	"./nb": 145,
	"./nb.js": 145,
	"./ne": 146,
	"./ne.js": 146,
	"./nl": 147,
	"./nl-be": 148,
	"./nl-be.js": 148,
	"./nl.js": 147,
	"./nn": 149,
	"./nn.js": 149,
	"./pa-in": 150,
	"./pa-in.js": 150,
	"./pl": 151,
	"./pl.js": 151,
	"./pt": 152,
	"./pt-br": 153,
	"./pt-br.js": 153,
	"./pt.js": 152,
	"./ro": 154,
	"./ro.js": 154,
	"./ru": 155,
	"./ru.js": 155,
	"./sd": 156,
	"./sd.js": 156,
	"./se": 157,
	"./se.js": 157,
	"./si": 158,
	"./si.js": 158,
	"./sk": 159,
	"./sk.js": 159,
	"./sl": 160,
	"./sl.js": 160,
	"./sq": 161,
	"./sq.js": 161,
	"./sr": 162,
	"./sr-cyrl": 163,
	"./sr-cyrl.js": 163,
	"./sr.js": 162,
	"./ss": 164,
	"./ss.js": 164,
	"./sv": 165,
	"./sv.js": 165,
	"./sw": 166,
	"./sw.js": 166,
	"./ta": 167,
	"./ta.js": 167,
	"./te": 168,
	"./te.js": 168,
	"./tet": 169,
	"./tet.js": 169,
	"./tg": 170,
	"./tg.js": 170,
	"./th": 171,
	"./th.js": 171,
	"./tl-ph": 172,
	"./tl-ph.js": 172,
	"./tlh": 173,
	"./tlh.js": 173,
	"./tr": 174,
	"./tr.js": 174,
	"./tzl": 175,
	"./tzl.js": 175,
	"./tzm": 176,
	"./tzm-latn": 177,
	"./tzm-latn.js": 177,
	"./tzm.js": 176,
	"./ug-cn": 178,
	"./ug-cn.js": 178,
	"./uk": 179,
	"./uk.js": 179,
	"./ur": 180,
	"./ur.js": 180,
	"./uz": 181,
	"./uz-latn": 182,
	"./uz-latn.js": 182,
	"./uz.js": 181,
	"./vi": 183,
	"./vi.js": 183,
	"./x-pseudo": 184,
	"./x-pseudo.js": 184,
	"./yo": 185,
	"./yo.js": 185,
	"./zh-cn": 186,
	"./zh-cn.js": 186,
	"./zh-hk": 187,
	"./zh-hk.js": 187,
	"./zh-tw": 188,
	"./zh-tw.js": 188
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 293;

/***/ }),
/* 294 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 295 */,
/* 296 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"field-wrapper",class:_vm.parentClasses},[_c('label',{staticClass:"form-label show"},[_vm._v(_vm._s(_vm.label !== null ? _vm.label : ' '))]),_vm._v(" "),_c('date-picker',{attrs:{"value":_vm.value,"name":_vm.name,"input-class":_vm.fieldClass + ' form-field'},on:{"input":_vm.updateValue}}),_vm._v(" "),(!_vm.errorAvailable())?_c('span',{staticClass:"field-description italic"},[_vm._v(_vm._s(_vm.description !== null ? _vm.description : ' '))]):_c('span',{staticClass:"field-description italic"},[_vm._v(_vm._s(_vm.errors.first(_vm.name)))])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 297 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 298 */,
/* 299 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 300 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"field-wrapper"},[_c('label',{staticClass:"form-label show"},[_vm._v(_vm._s(_vm.label !== null ? _vm.label : ' '))]),_vm._v(" "),_c('button',{ref:"date_range",staticClass:"form-field date-range-picker",attrs:{"type":"button"}},[_c('i',{staticClass:"fa-calendar position-left"}),_vm._v(" "),_c('span',[_vm._t("default",[_vm._v("\n        "+_vm._s(_vm.formatted(_vm.start))+"   -   "+_vm._s(_vm.formatted(_vm.end))+"\n      ")],{start:_vm.start,end:_vm.end})],2),_vm._v(" "),_c('b',{staticClass:"caret"})]),_vm._v(" "),(_vm.description)?_c('span',{staticClass:"field-description italic"},[_vm._v(_vm._s(_vm.description !== null ? _vm.description : ' '))]):_vm._e(),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(false),expression:"false"}],ref:"template"},[_vm._m(0)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"daterangepicker dropdown-menu"},[_c('div',{staticClass:"calendar left"},[_c('div',{staticClass:"daterangepicker_input"},[_c('input',{staticClass:"input-mini form-control",attrs:{"type":"text","name":"daterangepicker_start","value":""}}),_vm._v(" "),_c('i',{staticClass:"fa fa-calendar glyphicon glyphicon-calendar"}),_vm._v(" "),_c('div',{staticClass:"calendar-time"},[_c('div'),_vm._v(" "),_c('i',{staticClass:"fa fa-clock-o glyphicon glyphicon-time"})])]),_vm._v(" "),_c('div',{staticClass:"calendar-table"})]),_vm._v(" "),_c('div',{staticClass:"calendar right"},[_c('div',{staticClass:"daterangepicker_input"},[_c('input',{staticClass:"input-mini form-control",attrs:{"type":"text","name":"daterangepicker_end","value":""}}),_vm._v(" "),_c('i',{staticClass:"fa fa-calendar glyphicon glyphicon-calendar"}),_vm._v(" "),_c('div',{staticClass:"calendar-time"},[_c('div'),_vm._v(" "),_c('i',{staticClass:"fa fa-clock-o glyphicon glyphicon-time"})])]),_vm._v(" "),_c('div',{staticClass:"calendar-table"})]),_vm._v(" "),_c('div',{staticClass:"ranges"},[_c('div',{staticClass:"range_inputs"},[_c('button',{staticClass:"applyBtn",attrs:{"disabled":"disabled","type":"button"}}),_vm._v(" "),_c('button',{staticClass:"cancelBtn",attrs:{"type":"button"}})])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('notifications',{attrs:{"group":_vm.group,"position":_vm.position},scopedSlots:_vm._u([{key:"body",fn:function(props){return _c('div',{},[_c('span',{staticClass:"notification-icon"}),_vm._v(" "),_c('button',{staticClass:"notification-dismiss",on:{"click":props.close}},[_c('i',{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]),_vm._v(" "),_c('p',{staticClass:"notification-title"},[_vm._v("\n      "+_vm._s(props.item.title)+"\n    ")]),_vm._v(" "),_c('p',{staticClass:"notification-message",domProps:{"innerHTML":_vm._s(props.item.text)}})])}}])})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"container",staticClass:"modal-container",class:{active: _vm.modal},on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }_vm.closeModal()}}},[_c('div',{staticClass:"modal-wrapper"},[_c('button',{staticClass:"modal-dismiss icon-cross",attrs:{"type":"button"},on:{"click":function($event){_vm.closeModal()}}}),_vm._v(" "),_c('div',{staticClass:"modal-title"},[_vm._t("modal-title")],2),_vm._v(" "),_c('hr'),_vm._v(" "),_c('div',{staticClass:"modal-body"},[_vm._t("modal-body")],2),_vm._v(" "),_c('div',{staticClass:"modal-footer"},[_vm._t("modal-footer",[_c('button',{staticClass:"btn-clear",attrs:{"type":"button"},on:{"click":function($event){_vm.closeModal()}}},[_vm._v("Cancel")]),_vm._v(" "),_c('button',{staticClass:"btn-primary",attrs:{"type":"button"},on:{"click":function($event){_vm.closeModal()}}},[_vm._v("Apply")])])],2)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 353 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 354 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"datatable-show-input"},[_vm._v("\n  Display    \n  "),_c('dropdown-select',{staticClass:"datatable-field-wrapper",attrs:{"value":_vm.value,"options":_vm.options,"compact":true},on:{"update:value":_vm.updateValue}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 355 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 356 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pagination"},[_c('button',{staticClass:"previous",on:{"click":function($event){_vm.changePage(_vm.value - 1)}}}),_vm._v(" "),_vm._l((_vm.pagesShown),function(page){return (_vm.value + page - _vm.middlePage > 0 && _vm.value + page - _vm.middlePage <= _vm.max)?_c('button',{class:{active: page == _vm.middlePage},on:{"click":function($event){_vm.changePage(_vm.value + page - _vm.middlePage)}}},[_vm._v("\n      "+_vm._s(_vm.value + page - _vm.middlePage)+"\n  ")]):_vm._e()}),_vm._v(" "),_c('button',{staticClass:"next",on:{"click":function($event){_vm.changePage(_vm.value + 1)}}})],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 357 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"datatable-filter-input"},[_vm._v("\n  "+_vm._s(_vm.label_text)+" :\n  "),_c('dropdown-select',{staticClass:"datatable-field-wrapper",attrs:{"value":_vm.value,"options":_vm.optionsProcessed,"compact":true},on:{"update:value":_vm.updateValue}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 363 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 364 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dropdown-multiselect',{staticClass:"filter-columns",attrs:{"value":_vm.selectedColumns,"placeholder":"Select Columns to Show","options":_vm.processedColumns,"selectedLabel":"Columns Selected","name":"column_selector","compact":true},on:{"update:value":_vm.updateValue}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 365 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"data-table-container"},[_c('div',{staticClass:"data-table-header"},[_c('div',[_c('div',{staticClass:"wrapper-left"},[_vm._t("controls.search",[_c('input-field',{staticClass:"data-table-search icon-search4",attrs:{"value":_vm.search,"placeholder":"Search"},on:{"update:value":function($event){_vm.search=$event}}})])],2),_vm._v(" "),_c('div',{staticClass:"wrapper-right"},[(_vm.formattedData.length > 0)?_vm._t("controls.filters"):_vm._e(),_vm._v(" "),(_vm.columnSelector && _vm.columns.length > 0)?_vm._t("controls.columns",[_c('column-selector',{attrs:{"columns":_vm.columns}})]):_vm._e(),_vm._v(" "),_vm._t("extras.buttons")],2)])]),_vm._v(" "),_c('table',{staticClass:"data-table"},[_c('thead',[_c('tr',[_vm._t("table.headers",_vm._l((_vm.processedData[0]),function(val,key){return _c('th',[_vm._v(_vm._s(key))])}))],2)]),_vm._v(" "),_c('tbody',_vm._l((_vm.processedData),function(row){return _c('tr',{key:row[_vm.tableKey]},[_vm._t("table.row",[(_vm.columns.length > 0)?[_vm._l((_vm.columns),function(val,key){return (val[1])?[(typeof _vm.$scopedSlots['trow.' + val[0]] === 'function')?[_vm._t('trow.' + val[0],null,{item:row})]:_c('td',[_vm._v(_vm._s(row[val[0]]))])]:_vm._e()})]:_vm._e(),_vm._v(" "),(_vm.columns.length === 0)?[_vm._l((row),function(val,key){return [_c('td',[_vm._v(_vm._s(val))])]})]:_vm._e()],{item:row})],2)}))]),_vm._v(" "),_c('div',{staticClass:"data-table-footer"},[_c('div',[_c('div',{staticClass:"wrapper-left"},[_vm._t("controls.showing",[_c('span',{staticClass:"showing-info"},[_vm._v("\n            Showing\n            "),_c('strong',[_vm._v(_vm._s(_vm.total > 0 ? (_vm.page - 1) * _vm.size + 1 : 0))]),_vm._v("\n            to\n            "),_c('strong',[_vm._v(_vm._s(_vm.page * _vm.size < _vm.total ? _vm.page * _vm.size : _vm.total))]),_vm._v("\n            of\n            "),_c('strong',[_vm._v(_vm._s(_vm.total))]),_vm._v("\n            entries\n          ")])],{page:_vm.page,size:_vm.size,total:_vm.total}),_vm._v(" "),(_vm.formattedData.length > 0)?_vm._t("controls.size",[_c('show-input',{attrs:{"value":_vm.size},on:{"update:value":function($event){_vm.size=$event}}})],{size:_vm.size}):_vm._e()],2),_vm._v(" "),_c('div',{staticClass:"wrapper-right"},[(_vm.formattedData.length > 0)?_vm._t("pagination",[_c('pagination-input',{attrs:{"size":_vm.size,"total":_vm.total},model:{value:(_vm.page),callback:function ($$v) {_vm.page=$$v},expression:"page"}})],{page:_vm.page,size:_vm.size,total:_vm.total}):_vm._e()],2)])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 366 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 367 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('th',{directives:[{name:"show",rawName:"v-show",value:(_vm.shown()),expression:"shown()"}]},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 368 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 369 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('th',{directives:[{name:"show",rawName:"v-show",value:(_vm.shown()),expression:"shown()"}],on:{"click":_vm.cycleSort}},[_c('button',{class:_vm.getClass()},[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"tooltip",rawName:"v-tooltip",value:({
  content: _vm.content, 
  placement: _vm.position, 
  classes: _vm.color,
  trigger: _vm.trigger,
  container: _vm.container}),expression:"{\n  content: content, \n  placement: position, \n  classes: color,\n  trigger: trigger,\n  container: container}"}],staticClass:"tooltip-wrapper"},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 379 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tabs-wrapper",class:{ horizontal: _vm.orientation === 'horizontal' || _vm.orientation === '', 'vertical clearfix': _vm.orientation === 'vertical'}},[_c('div',{staticClass:"tabs-nav"},[_c('ul',_vm._l((_vm.nav),function(options,index){return _c('li',{key:index,class:{'selected': _vm.selectedIndex === index}},[_c('button',{attrs:{"type":"button"},on:{"click":function($event){_vm.selectedIndex = index}}},[_vm._v(_vm._s(options))])])}))]),_vm._v(" "),_c('div',{staticClass:"tabs-content"},[_vm._t(_vm.selectedTab)],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 380 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ul',{staticClass:"accordion"},[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 381 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"accordion-body",class:{'opened': _vm.isOpened}},[_c('p',{staticClass:"accordion-title",on:{"click":function($event){_vm.showAccordion(_vm.isOpened)}}},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('div',{staticClass:"accordion-content"},[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_BannerNotification__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_Accordion__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_common_AccordionRow__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_common_DataTable__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_common_Logo__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_common_Modal__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_common_Notification__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_common_Tabs__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_common_Tooltip__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_common_MenuPopup__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_forms_CheckboxButton__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_forms_DatePicker__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_forms_DateRangePicker__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_forms_DropdownMultiselect__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_forms_TokenSelect__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_forms_DropdownSelect__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_forms_InputField__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_forms_RadioButton__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_forms_TextareaField__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_forms_ToggleButton__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_mixins_modalBase__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__mixins_validationBase__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_table_ColumnSelector__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_table_FilterInput__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_table_NormalHeader__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_table_PaginationInput__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_table_SearchInput__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_table_ShowInput__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_table_SortableHeader__ = __webpack_require__(226);


































/* harmony default export */ __webpack_exports__["default"] = ({
  common: {
    sxaleBanner: __WEBPACK_IMPORTED_MODULE_0__components_common_BannerNotification__["a" /* default */],
    sxaleAccordion: __WEBPACK_IMPORTED_MODULE_1__components_common_Accordion__["a" /* default */],
    sxaleAccordionRow: __WEBPACK_IMPORTED_MODULE_2__components_common_AccordionRow__["a" /* default */],
    sxaleDataTable: __WEBPACK_IMPORTED_MODULE_3__components_common_DataTable__["a" /* default */],
    sxaleLogo: __WEBPACK_IMPORTED_MODULE_4__components_common_Logo__["a" /* default */],
    sxaleModal: __WEBPACK_IMPORTED_MODULE_5__components_common_Modal__["a" /* default */],
    sxaleNotification: __WEBPACK_IMPORTED_MODULE_6__components_common_Notification__["a" /* default */],
    sxaleTabs: __WEBPACK_IMPORTED_MODULE_7__components_common_Tabs__["a" /* default */],
    sxaleTooltip: __WEBPACK_IMPORTED_MODULE_8__components_common_Tooltip__["a" /* default */],
    sxaleMenuPopup: __WEBPACK_IMPORTED_MODULE_9__components_common_MenuPopup__["a" /* default */]
  },
  form: {
    sxaleCheckboxButton: __WEBPACK_IMPORTED_MODULE_10__components_forms_CheckboxButton__["a" /* default */],
    sxaleDatePicker: __WEBPACK_IMPORTED_MODULE_11__components_forms_DatePicker__["a" /* default */],
    sxaleDateRangePicker: __WEBPACK_IMPORTED_MODULE_12__components_forms_DateRangePicker__["a" /* default */],
    sxaleDropdownMultiselect: __WEBPACK_IMPORTED_MODULE_13__components_forms_DropdownMultiselect__["a" /* default */],
    sxaleDropdownSelect: __WEBPACK_IMPORTED_MODULE_15__components_forms_DropdownSelect__["a" /* default */],
    sxaleTokenSelect: __WEBPACK_IMPORTED_MODULE_14__components_forms_TokenSelect__["a" /* default */],
    sxaleInputField: __WEBPACK_IMPORTED_MODULE_16__components_forms_InputField__["a" /* default */],
    sxaleRadioButton: __WEBPACK_IMPORTED_MODULE_17__components_forms_RadioButton__["a" /* default */],
    sxaleTextareaField: __WEBPACK_IMPORTED_MODULE_18__components_forms_TextareaField__["a" /* default */],
    sxaleToggleButton: __WEBPACK_IMPORTED_MODULE_19__components_forms_ToggleButton__["a" /* default */]
  },
  table: {
    sxaleColumnSelector: __WEBPACK_IMPORTED_MODULE_22__components_table_ColumnSelector__["a" /* default */],
    sxaleFilterInput: __WEBPACK_IMPORTED_MODULE_23__components_table_FilterInput__["a" /* default */],
    sxaleNormalHeader: __WEBPACK_IMPORTED_MODULE_24__components_table_NormalHeader__["a" /* default */],
    sxalePaginationInput: __WEBPACK_IMPORTED_MODULE_25__components_table_PaginationInput__["a" /* default */],
    sxaleSearchInput: __WEBPACK_IMPORTED_MODULE_26__components_table_SearchInput__["a" /* default */],
    sxaleShowInput: __WEBPACK_IMPORTED_MODULE_27__components_table_ShowInput__["a" /* default */],
    sxaleSortableHeader: __WEBPACK_IMPORTED_MODULE_28__components_table_SortableHeader__["a" /* default */]
  },
  base: {
    sxaleModalBase: __WEBPACK_IMPORTED_MODULE_20__components_mixins_modalBase__["a" /* default */],
    sxaleValidationBase: __WEBPACK_IMPORTED_MODULE_21__mixins_validationBase__["a" /* default */]
  }
});

/***/ }),
/* 393 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SearchInput_vue__ = __webpack_require__(238);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_28f500d8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SearchInput_vue__ = __webpack_require__(395);
function injectStyle (ssrContext) {
  __webpack_require__(394)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-28f500d8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SearchInput_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_28f500d8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SearchInput_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 394 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 395 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input-field',{staticClass:"data-table-search icon-search4",attrs:{"placeholder":"Search","value":_vm.value},on:{"input":function($event){_vm.updateValue($event.target.value)}}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 396 */,
/* 397 */,
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "docs/fonts/icomoon.34fdc41.ttf";

/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "docs/fonts/icomoon.c068d37.woff";

/***/ }),
/* 400 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArICJkb2NzL2ZvbnRzL2ljb21vb24uOWZjNDAzMS5zdmciOw=="

/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "docs/fonts/fontawesome-webfont.25a3241.eot";

/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "docs/fonts/fontawesome-webfont.25a3241.eot";

/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "docs/fonts/fontawesome-webfont.e6cf7c6.woff2";

/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "docs/fonts/fontawesome-webfont.c8ddf1e.woff";

/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "docs/fonts/fontawesome-webfont.1dc35d2.ttf";

/***/ }),
/* 406 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArICJkb2NzL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQuZDdjNjM5MC5zdmciOw=="

/***/ })
],[392]);
//# sourceMappingURL=sxale-ui.437dfabafaec3a4640a4.js.map