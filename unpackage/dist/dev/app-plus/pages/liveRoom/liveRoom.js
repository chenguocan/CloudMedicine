"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************************************************************************************!*\
  !*** C:/Users/chenguocan/Desktop/CloudMedicine/main.js?{"page":"pages%2FliveRoom%2FliveRoom"} ***!
  \************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_liveRoom_liveRoom_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/liveRoom/liveRoom.nvue?mpType=page */ 4);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_liveRoom_liveRoom_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_liveRoom_liveRoom_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/liveRoom/liveRoom'\n        _pages_liveRoom_liveRoom_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_liveRoom_liveRoom_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEsaUZBQUc7QUFDWCxRQUFRLGlGQUFHO0FBQ1gsUUFBUSxpRkFBRztBQUNYLGdCQUFnQixpRkFBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9saXZlUm9vbS9saXZlUm9vbS5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmICFQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5KSB7XG4gICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuY29uc3RydWN0b3JcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyByZWFzb25cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2xpdmVSb29tL2xpdmVSb29tJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*****************************************************************************!*\
  !*** C:/Users/chenguocan/Desktop/CloudMedicine/main.js?{"type":"appStyle"} ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsbURBQTRDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************************************************************************!*\
  !*** C:/Users/chenguocan/Desktop/CloudMedicine/App.vue?vue&type=style&index=0&lang=scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss */ 3);
/* harmony import */ var _D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/chenguocan/Desktop/CloudMedicine/App.vue?vue&type=style&index=0&lang=scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 4 */
/*!******************************************************************************************!*\
  !*** C:/Users/chenguocan/Desktop/CloudMedicine/pages/liveRoom/liveRoom.nvue?mpType=page ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _liveRoom_nvue_vue_type_template_id_5eebaec8_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./liveRoom.nvue?vue&type=template&id=5eebaec8&mpType=page */ 5);\n/* harmony import */ var _liveRoom_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./liveRoom.nvue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _liveRoom_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _liveRoom_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./liveRoom.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 11).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./liveRoom.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 11).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _liveRoom_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _liveRoom_nvue_vue_type_template_id_5eebaec8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _liveRoom_nvue_vue_type_template_id_5eebaec8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"155579a4\",\n  false,\n  _liveRoom_nvue_vue_type_template_id_5eebaec8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/liveRoom/liveRoom.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUk7QUFDakk7QUFDd0U7QUFDTDtBQUNuRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHNFQUE4RDtBQUNsSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsc0VBQThEO0FBQ3ZIOztBQUVBOztBQUVBO0FBQzBNO0FBQzFNLGdCQUFnQixrTkFBVTtBQUMxQixFQUFFLDBGQUFNO0FBQ1IsRUFBRSwrRkFBTTtBQUNSLEVBQUUsd0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9saXZlUm9vbS5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVlZWJhZWM4Jm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9saXZlUm9vbS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2xpdmVSb29tLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2xpdmVSb29tLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vbGl2ZVJvb20ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWC4yLjkuMy4yMDIwMTAxNFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiMTU1NTc5YTRcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvbGl2ZVJvb20vbGl2ZVJvb20ubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!************************************************************************************************************************!*\
  !*** C:/Users/chenguocan/Desktop/CloudMedicine/pages/liveRoom/liveRoom.nvue?vue&type=template&id=5eebaec8&mpType=page ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_liveRoom_nvue_vue_type_template_id_5eebaec8_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./liveRoom.nvue?vue&type=template&id=5eebaec8&mpType=page */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_liveRoom_nvue_vue_type_template_id_5eebaec8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_liveRoom_nvue_vue_type_template_id_5eebaec8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_liveRoom_nvue_vue_type_template_id_5eebaec8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_liveRoom_nvue_vue_type_template_id_5eebaec8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 6 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/chenguocan/Desktop/CloudMedicine/pages/liveRoom/liveRoom.nvue?vue&type=template&id=5eebaec8&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c(
        "view",
        [
          _c(
            "scroll-view",
            {
              staticClass: ["page"],
              style: [
                _vm.windowHeight ? { height: _vm.windowHeight + "px" } : ""
              ],
              attrs: { scrollY: "true" }
            },
            [
              _c(
                "view",
                { staticClass: ["liveroom"] },
                [
                  _c(
                    "view",
                    { staticClass: ["liveroom-cel", "liveroom-pusher"] },
                    [
                      _c("TX-PlayView", {
                        ref: "maxTxPlayView",
                        staticClass: ["liveroom-trtc"],
                        attrs: {
                          appId: _vm.appId,
                          appKey: _vm.appKey,
                          roomId: _vm.roomId,
                          userId: _vm.userName,
                          enableLocalPreview: "true",
                          enableLocalAudio: "true"
                        },
                        on: { statechange: _vm.onPush }
                      }),
                      _c("u-text", { staticClass: ["liveroom-cel-name"] }, [
                        _vm._v("我")
                      ])
                    ],
                    1
                  ),
                  _vm._l(_vm.players, function(item, index) {
                    return _c(
                      "view",
                      {
                        key: index,
                        staticClass: ["liveroom-cel", "liveroom-player"]
                      },
                      [
                        _c("TX-PlayView", {
                          ref: "remoteUser" + item.userId,
                          refInFor: true,
                          staticClass: ["liveroom-trtc"],
                          attrs: {
                            remoteUserId: item.userId,
                            remoteSubStreamUserId: item.remoteSubStreamUserId,
                            remoteSubStreamModel: "0"
                          }
                        }),
                        _c("u-text", { staticClass: ["liveroom-cel-name"] }, [
                          _vm._v(_vm._s(item.userId))
                        ])
                      ],
                      1
                    )
                  })
                ],
                2
              )
            ]
          ),
          _c(
            "view",
            { staticClass: ["video-ico"] },
            [
              _c("u-image", {
                staticClass: ["video-ico-img"],
                attrs: { src: "../../static/icon/toggle.png" },
                on: {
                  click: function($event) {
                    _vm.opCamera(0)
                  }
                }
              })
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 7 */
/*!******************************************************************************************************************!*\
  !*** C:/Users/chenguocan/Desktop/CloudMedicine/pages/liveRoom/liveRoom.nvue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_liveRoom_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./liveRoom.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony import */ var _D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_liveRoom_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_liveRoom_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_liveRoom_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_liveRoom_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_liveRoom_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlpQixDQUFnQix1a0JBQUcsRUFBQyIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYLjIuOS4zLjIwMjAxMDE0XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclguMi45LjMuMjAyMDEwMTRcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYLjIuOS4zLjIwMjAxMDE0XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xpdmVSb29tLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYLjIuOS4zLjIwMjAxMDE0XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclguMi45LjMuMjAyMDEwMTRcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYLjIuOS4zLjIwMjAxMDE0XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xpdmVSb29tLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/chenguocan/Desktop/CloudMedicine/pages/liveRoom/liveRoom.nvue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin, __f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar trtcCloud = __webpack_provided_uni_dot_requireNativePlugin('TX-TRTCCloud');var _default =\n\n{\n\n  data: function data() {\n    return _defineProperty({\n      windowHeight: 0,\n      roomId: 1100,\n      userName: \"chenguocan\",\n      players: [],\n      appId: '',\n      appKey: '' }, \"windowHeight\",\n    '');\n\n  },\n  onShow: function onShow() {\n    this.windowHeight = uni.getSystemInfoSync().windowHeight;\n    __f__(\"log\", this.windowHeight, \" at pages/liveRoom/liveRoom.nvue:91\");\n  },\n  onLoad: function onLoad() {\n    this.appId = 1400476021;\n    this.appKey = 'c188a146da5116bd07882e99a5891e874db39af7695f9e69a46c5fc0876baf67';\n    trtcCloud.muteAllRemoteAudio();\n  },\n\n  onReady: function onReady() {\n    this.join();\n  },\n\n  onResize: function onResize() {\n\n    this.resizeWinHeight();\n\n  },\n\n  onNavigationBarButtonTap: function onNavigationBarButtonTap() {\n\n    uni.navigateBack({\n      delta: 1,\n      animationType: 'pop-out',\n      animationDuration: 200 });\n\n  },\n\n  onBackPress: function onBackPress() {\n    this.$refs.maxTxPlayView.leaveRoom();\n\n  },\n\n  methods: {\n    opCamera: function opCamera(index) {\n      if (index === 0) {\n        trtcCloud.switchCamera();\n      }\n    },\n    join: function join() {\n      //开启声音大小的回调，如果不需要可以不写\n      trtcCloud.enableAudioVolumeEvaluation(5000);\n\n      //加入房间 ，与trtcCloud的enterRoom方法一样的效果，二者选一个就可以了，如果用enterRoom需要填写参数，参考文档\n      this.$refs.maxTxPlayView.joinRoom();\n    },\n\n    onPush: function onPush(e) {\n      var result = e.detail;\n      __f__(\"log\", result, \" at pages/liveRoom/liveRoom.nvue:139\");\n      switch (result.type) {\n        case 'onFirstVideoFrame':\n          __f__(\"log\", 'onFirstVideoFrame', \" at pages/liveRoom/liveRoom.nvue:142\");\n          break;\n\n        case 'onUserVideoAvailable':\n          break;\n\n        case 'onUserEnter':\n          if (result.userId) this.addPlayer(result.userId);\n          break;\n        case 'onUserSubStreamAvailable':\n          if (result.userId) this.addSubStreamPlayer(result.userId);\n\n        case 'onUserExit':\n          if (result.userId) this.removePlayer(result.userId);\n          break;}\n\n    },\n\n    addPlayer: function addPlayer(userId) {\n      this.players.push({\n        userId: userId });\n\n    },\n\n    addSubStreamPlayer: function addSubStreamPlayer(userId) {\n      this.players.push({\n        remoteSubStreamUserId: userId });\n\n    },\n\n\n    removePlayer: function removePlayer(userId) {\n      for (var i = 0; i < this.players.length; i++) {\n        var d = this.players[i];\n        if (d.userId === userId) {\n          this.players.splice(i, 1);\n          break;\n        }\n      }\n    },\n\n    resizeWinHeight: function resizeWinHeight() {var _this = this;\n      uni.getSystemInfo({\n        success: function success(res) {\n          _this.windowHeight = res.windowHeight;\n        } });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 9)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbGl2ZVJvb20vbGl2ZVJvb20ubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUVBLCtFOztBQUVBOztBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBLHFCQURBO0FBRUEsa0JBRkE7QUFHQSw0QkFIQTtBQUlBLGlCQUpBO0FBS0EsZUFMQTtBQU1BLGdCQU5BO0FBT0EsTUFQQTs7QUFTQSxHQVpBO0FBYUEsUUFiQSxvQkFhQTtBQUNBO0FBQ0E7QUFDQSxHQWhCQTtBQWlCQSxRQWpCQSxvQkFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQXJCQTs7QUF1QkEsU0F2QkEscUJBdUJBO0FBQ0E7QUFDQSxHQXpCQTs7QUEyQkEsVUEzQkEsc0JBMkJBOztBQUVBOztBQUVBLEdBL0JBOztBQWlDQSwwQkFqQ0Esc0NBaUNBOztBQUVBO0FBQ0EsY0FEQTtBQUVBLDhCQUZBO0FBR0EsNEJBSEE7O0FBS0EsR0F4Q0E7O0FBMENBLGFBMUNBLHlCQTBDQTtBQUNBOztBQUVBLEdBN0NBOztBQStDQTtBQUNBLFlBREEsb0JBQ0EsS0FEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FMQTtBQU1BLFFBTkEsa0JBTUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQVpBOztBQWNBLFVBZEEsa0JBY0EsQ0FkQSxFQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBaEJBOztBQWtCQSxLQW5DQTs7QUFxQ0EsYUFyQ0EscUJBcUNBLE1BckNBLEVBcUNBO0FBQ0E7QUFDQSxzQkFEQTs7QUFHQSxLQXpDQTs7QUEyQ0Esc0JBM0NBLDhCQTJDQSxNQTNDQSxFQTJDQTtBQUNBO0FBQ0EscUNBREE7O0FBR0EsS0EvQ0E7OztBQWtEQSxnQkFsREEsd0JBa0RBLE1BbERBLEVBa0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTFEQTs7QUE0REEsbUJBNURBLDZCQTREQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSEE7O0FBS0EsS0FsRUEsRUEvQ0EsRSIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPCEtLSA8dGVtcGxhdGU+XG5cdDxzY3JvbGwtdmlldyBjbGFzcz1cInBhZ2VcIiA6c3R5bGU9XCJbd2luZG93SGVpZ2h0ID8ge2hlaWdodDogd2luZG93SGVpZ2h0ICsgJ3B4J30gOiAnJ11cIiBzY3JvbGwteT1cInRydWVcIj5cblxuICAgIFxuXHRcdDx2aWV3IGNsYXNzPVwibGl2ZXJvb21cIiA+IDpzdHlsZT1cIntoZWlnaHQ6d2luZG93SGVpZ2h0KydweCd9XCJcblxuICAgICAgPHZpZXcgY2xhc3M9XCJsaXZlcm9vbS1jZWwgbGl2ZXJvb20tcHVzaGVyXCIgPiA6c3R5bGU9XCJ7aGVpZ2h0OndpbmRvd0hlaWdodCsncHgnfVwiXG4gICAgICAgIDxUWC1QbGF5VmlldyBjbGFzcz1cIm15LWxpdmVyb29tLXRydGNcIiByZWY9XCJtYXhUeFBsYXlWaWV3XCIgXG4gICAgICAgICAgOmFwcElkPVwiYXBwSWRcIlxuXHRcdCAgOmFwcEtleT1cImFwcEtleVwiXG4gICAgICAgICAgOnJvb21JZD1cInJvb21JZFwiXG4gICAgICAgICAgOnVzZXJJZD1cInVzZXJOYW1lXCJcbiAgICAgICAgXHRlbmFibGVMb2NhbFByZXZpZXc9dHJ1ZVxuICAgICAgICBcdGVuYWJsZUxvY2FsQXVkaW89dHJ1ZVxuICAgICAgICBcdEBzdGF0ZWNoYW5nZT1cIm9uUHVzaFwiXHJcblx0XHRcdDpzdHlsZT1cIntoZWlnaHQ6d2luZG93SGVpZ2h0KydweCd9XCJcbiAgICAgICAgPjwvVFgtUGxheVZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImljb1wiPlxyXG5cdFx0XHQ8aW1hZ2UgY2xhc3M9XCJpY28taW1nXCIgQGNsaWNrPVwib3BDYW1lcmEoMClcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaWNvbi9ub3RpZnkucG5nXCIgLz5cclxuXHRcdDwvdmlldz5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJsaXZlcm9vbS1jZWwtbmFtZVwiPuaIkTwvdGV4dD5cbiAgICAgIDwvdmlldz5cblxuICAgICAgPHZpZXcgY2xhc3M9XCJsaXZlcm9vbS1jZWwgbGl2ZXJvb20tcGxheWVyXCIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHBsYXllcnNcIiA6a2V5PVwiaW5kZXhcIj5cbiAgICAgICAgPFRYLVBsYXlWaWV3IGNsYXNzPVwibGl2ZXJvb20tdHJ0Y1wiIDpyZWY9XCIncmVtb3RlVXNlcicgKyBpdGVtLnVzZXJJZFwiIFxuICAgICAgICAgIDpyZW1vdGVVc2VySWQ9XCJpdGVtLnVzZXJJZFwiIDpyZW1vdGVTdWJTdHJlYW1Vc2VySWQ9XCJpdGVtLnJlbW90ZVN1YlN0cmVhbVVzZXJJZFwiIHJlbW90ZVN1YlN0cmVhbU1vZGVsPTAgPjwvVFgtUGxheVZpZXc+XG5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJsaXZlcm9vbS1jZWwtbmFtZVwiPnt7aXRlbS51c2VySWR9fTwvdGV4dD5cbiAgICAgIDwvdmlldz5cblxuICAgIDwvdmlldz5cblxuXHQ8L3Njcm9sbC12aWV3PlxuPC90ZW1wbGF0ZT5cbiAtLT5cclxuPHRlbXBsYXRlPlxyXG5cdDx2aWV3PlxyXG5cdFx0PHNjcm9sbC12aWV3IGNsYXNzPVwicGFnZVwiIDpzdHlsZT1cIlt3aW5kb3dIZWlnaHQgPyB7aGVpZ2h0OiB3aW5kb3dIZWlnaHQgKyAncHgnfSA6ICcnXVwiIHNjcm9sbC15PVwidHJ1ZVwiPlxyXG5cdFx0IFxyXG5cdFx0PCEtLSA8dGV4dCBjbGFzcz1cInBhZ2UtdGl0bGVcIj7lpJrkurrmiL/pl7Q6IHt7cm9vbUlkfX08L3RleHQ+IC0tPlxyXG5cdFx0IFxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwibGl2ZXJvb21cIj5cclxuXHRcdFxyXG5cdFx0ICAgPHZpZXcgY2xhc3M9XCJsaXZlcm9vbS1jZWwgbGl2ZXJvb20tcHVzaGVyXCI+XHJcblx0XHQgICAgIDxUWC1QbGF5VmlldyBjbGFzcz1cImxpdmVyb29tLXRydGNcIiByZWY9XCJtYXhUeFBsYXlWaWV3XCIgXHJcblx0XHQgICAgICAgOmFwcElkPVwiYXBwSWRcIlxyXG5cdFx0XHRcdCAgOmFwcEtleT1cImFwcEtleVwiXHJcblx0XHQgICAgICAgOnJvb21JZD1cInJvb21JZFwiXHJcblx0XHQgICAgICAgOnVzZXJJZD1cInVzZXJOYW1lXCJcclxuXHRcdCAgICAgXHRlbmFibGVMb2NhbFByZXZpZXc9dHJ1ZVxyXG5cdFx0ICAgICBcdGVuYWJsZUxvY2FsQXVkaW89dHJ1ZVxyXG5cdFx0ICAgICBcdEBzdGF0ZWNoYW5nZT1cIm9uUHVzaFwiXHJcblx0XHQgICAgID48L1RYLVBsYXlWaWV3PlxyXG5cdFx0XHJcblx0XHQgICAgIDx0ZXh0IGNsYXNzPVwibGl2ZXJvb20tY2VsLW5hbWVcIj7miJE8L3RleHQ+XHJcblx0XHQgICA8L3ZpZXc+XHJcblx0XHRcclxuXHRcdCAgIDx2aWV3IGNsYXNzPVwibGl2ZXJvb20tY2VsIGxpdmVyb29tLXBsYXllclwiIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBwbGF5ZXJzXCIgOmtleT1cImluZGV4XCI+XHJcblx0XHQgICAgIDxUWC1QbGF5VmlldyBjbGFzcz1cImxpdmVyb29tLXRydGNcIiA6cmVmPVwiJ3JlbW90ZVVzZXInICsgaXRlbS51c2VySWRcIiBcclxuXHRcdCAgICAgICA6cmVtb3RlVXNlcklkPVwiaXRlbS51c2VySWRcIiA6cmVtb3RlU3ViU3RyZWFtVXNlcklkPVwiaXRlbS5yZW1vdGVTdWJTdHJlYW1Vc2VySWRcIiByZW1vdGVTdWJTdHJlYW1Nb2RlbD0wID48L1RYLVBsYXlWaWV3PlxyXG5cdFx0XHJcblx0XHQgICAgIDx0ZXh0IGNsYXNzPVwibGl2ZXJvb20tY2VsLW5hbWVcIj57e2l0ZW0udXNlcklkfX08L3RleHQ+XHJcblx0XHQgICA8L3ZpZXc+XHJcblx0XHRcclxuXHRcdCA8L3ZpZXc+XHJcblx0XHRcdFx0XHJcblx0XHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidmlkZW8taWNvXCI+XHJcblx0XHRcdFx0PGltYWdlIGNsYXNzPVwidmlkZW8taWNvLWltZ1wiIEBjbGljaz1cIm9wQ2FtZXJhKDApXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ljb24vdG9nZ2xlLnBuZ1wiIC8+XHJcblx0XHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cblx0Y29uc3QgdHJ0Y0Nsb3VkID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ1RYLVRSVENDbG91ZCcpO1xuICBcbmV4cG9ydCBkZWZhdWx0IHtcblx0XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpbmRvd0hlaWdodDogMCxcbiAgICAgIHJvb21JZDoxMTAwLFxuICAgICAgdXNlck5hbWU6IFwiY2hlbmd1b2NhblwiLFxuICAgICAgcGxheWVyczogW10sXG5cdCAgYXBwSWQ6JycsXG5cdCAgYXBwS2V5OicnLFxyXG5cdCAgd2luZG93SGVpZ2h0OicnXG4gICAgfVxuICB9LFxuICBvblNob3coKXtcclxuXHR0aGlzLndpbmRvd0hlaWdodCA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodDtcclxuXHRjb25zb2xlLmxvZyh0aGlzLndpbmRvd0hlaWdodCk7XHJcbiAgfSxcbiAgb25Mb2FkKCkge1xuXHR0aGlzLmFwcElkPTE0MDA0NzYwMjE7XHJcblx0dGhpcy5hcHBLZXk9J2MxODhhMTQ2ZGE1MTE2YmQwNzg4MmU5OWE1ODkxZTg3NGRiMzlhZjc2OTVmOWU2OWE0NmM1ZmMwODc2YmFmNjcnO1xuXHR0cnRjQ2xvdWQubXV0ZUFsbFJlbW90ZUF1ZGlvKCk7XHJcbiAgfSxcbiAgXG4gIG9uUmVhZHkoKSB7XG4gICAgdGhpcy5qb2luKCk7XG4gIH0sXG4gIFxuICBvblJlc2l6ZSgpIHtcbiAgICAvLyAjaWZkZWYgQVBQLVBMVVMtTlZVRVxuICAgIHRoaXMucmVzaXplV2luSGVpZ2h0KClcbiAgICAvLyAjZW5kaWZcbiAgfSxcbiAgXG4gIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCgpIHtcbiAgXHRcbiAgXHR1bmkubmF2aWdhdGVCYWNrKHtcbiAgXHQgICAgZGVsdGE6IDEsXG4gIFx0ICAgIGFuaW1hdGlvblR5cGU6ICdwb3Atb3V0JyxcbiAgXHQgICAgYW5pbWF0aW9uRHVyYXRpb246IDIwMFxuICBcdH0pO1xuICB9LFxuICBcbiAgb25CYWNrUHJlc3MoKSB7XG4gIFx0dGhpcy4kcmVmcy5tYXhUeFBsYXlWaWV3LmxlYXZlUm9vbSgpO1xyXG5cdFxuICB9LFxuICBcbiAgbWV0aG9kczoge1xuXHRvcENhbWVyYShpbmRleCl7XHJcblx0XHRpZihpbmRleD09PTApe1xyXG5cdFx0XHR0cnRjQ2xvdWQuc3dpdGNoQ2FtZXJhKCk7XHRcclxuXHRcdH1cclxuXHR9LFxuICAgIGpvaW4oKXtcbiAgICAgIC8v5byA5ZCv5aOw6Z+z5aSn5bCP55qE5Zue6LCD77yM5aaC5p6c5LiN6ZyA6KaB5Y+v5Lul5LiN5YaZXG5cdCAgIHRydGNDbG91ZC5lbmFibGVBdWRpb1ZvbHVtZUV2YWx1YXRpb24oNTAwMCk7XG5cdCAgIFxuXHQgICAgLy/liqDlhaXmiL/pl7Qg77yM5LiOdHJ0Y0Nsb3Vk55qEZW50ZXJSb29t5pa55rOV5LiA5qC355qE5pWI5p6c77yM5LqM6ICF6YCJ5LiA5Liq5bCx5Y+v5Lul5LqG77yM5aaC5p6c55SoZW50ZXJSb29t6ZyA6KaB5aGr5YaZ5Y+C5pWw77yM5Y+C6ICD5paH5qGjXG5cdCAgICB0aGlzLiRyZWZzLm1heFR4UGxheVZpZXcuam9pblJvb20oKTtcbiAgICB9LFxuICAgIFxuICAgIG9uUHVzaChlKXtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGUuZGV0YWlsXG5cdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgc3dpdGNoIChyZXN1bHQudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ29uRmlyc3RWaWRlb0ZyYW1lJzpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvbkZpcnN0VmlkZW9GcmFtZScpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdvblVzZXJWaWRlb0F2YWlsYWJsZSc6XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ29uVXNlckVudGVyJzpcbiAgICAgICAgICAgIGlmIChyZXN1bHQudXNlcklkKSB0aGlzLmFkZFBsYXllcihyZXN1bHQudXNlcklkKVxuICAgICAgICAgICAgYnJlYWs7XG5cdFx0ICBjYXNlICdvblVzZXJTdWJTdHJlYW1BdmFpbGFibGUnOlxuXHRcdCAgICBpZiAocmVzdWx0LnVzZXJJZCkgdGhpcy5hZGRTdWJTdHJlYW1QbGF5ZXIocmVzdWx0LnVzZXJJZCk7XG5cbiAgICAgICAgICBjYXNlICdvblVzZXJFeGl0JzpcbiAgICAgICAgICAgIGlmIChyZXN1bHQudXNlcklkKSB0aGlzLnJlbW92ZVBsYXllcihyZXN1bHQudXNlcklkKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIGFkZFBsYXllcih1c2VySWQpIHtcbiAgICAgIHRoaXMucGxheWVycy5wdXNoKHtcbiAgICAgICAgdXNlcklkOiB1c2VySWRcbiAgICAgIH0pXG4gICAgfSxcblx0XG5cdGFkZFN1YlN0cmVhbVBsYXllcih1c2VySWQpIHtcblx0ICB0aGlzLnBsYXllcnMucHVzaCh7XG5cdCAgICByZW1vdGVTdWJTdHJlYW1Vc2VySWQ6IHVzZXJJZFxuXHQgIH0pXG5cdH0sXG5cdFxuICAgIFxuICAgIHJlbW92ZVBsYXllcih1c2VySWQpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBkID0gdGhpcy5wbGF5ZXJzW2ldXG4gICAgICAgIGlmIChkLnVzZXJJZCA9PT0gdXNlcklkKSB7XG4gICAgICAgICAgdGhpcy5wbGF5ZXJzLnNwbGljZShpLCAxKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIHJlc2l6ZVdpbkhlaWdodCgpIHtcbiAgICAgIHVuaS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgIHRoaXMud2luZG93SGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcblx0LnZpZGVvLWljb3tcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdGJvdHRvbTogMjBycHg7XHJcblx0fVxyXG5cdC52aWRlby1pY28taW1ne1xyXG5cdFx0d2lkdGg6IDEwMHJweDtcclxuXHRcdGhlaWdodDogODBycHg7XHJcblx0fVxyXG5cdC5wYWdlIHtcclxuXHQgIGhlaWdodDogMTAwJTtcclxuXHQgIGJhY2tncm91bmQtY29sb3I6ICMyNzE1MDY7XHJcblx0fVxyXG5cdC5wYWdlLXRpdGxlIHtcclxuXHQgIHdpZHRoOiA3NTBycHg7XHJcblx0ICBoZWlnaHQ6IDgwcnB4O1xyXG5cdCAgbGluZS1oZWlnaHQ6IDgwcnB4O1xyXG5cdCAgY29sb3I6ICNmZmY7XHJcblx0ICBmb250LXNpemU6IDI4cnB4O1xyXG5cdCAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHRcclxuXHQubGl2ZXJvb20ge1xyXG5cdCAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHQgIGZsZXgtd3JhcDogd3JhcDtcclxuXHRcclxuXHQgIHdpZHRoOiA3NTBycHg7XHJcblx0fVxyXG5cdCRjZWwtd2lkdGg6IDAuNSAqIDc1MHJweDtcclxuXHQubGl2ZXJvb20tY2VsIHtcclxuXHQgIHdpZHRoOiAkY2VsLXdpZHRoO1xyXG5cdCAgaGVpZ2h0OiAxLjM4MiAqICRjZWwtd2lkdGggKyA0MHJweDtcclxuXHQgIHBhZGRpbmc6IDIwcnB4O1xyXG5cdH1cclxuXHQubGl2ZXJvb20tdHJ0YyB7XHJcblx0ICB3aWR0aDogJGNlbC13aWR0aCAtIDQwcnB4O1xyXG5cdCAgaGVpZ2h0OiAxLjM4MiAqICRjZWwtd2lkdGggLSA0MHJweDtcclxuXHQgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XHJcblx0fVxyXG5cdFxyXG5cdC5saXZlcm9vbS1jZWwtbmFtZSB7XHJcblx0ICB3aWR0aDogJGNlbC13aWR0aCAtIDQwcnB4O1xyXG5cdCAgaGVpZ2h0OiA0MHJweDtcclxuXHQgIGxpbmUtaGVpZ2h0OiA0MHJweDtcclxuXHQgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHQgIGNvbG9yOiAjOTk5O1xyXG5cdCAgZm9udC1zaXplOiAyNHJweDtcclxuXHR9XHJcblxyXG4vKlxuLnBhZ2Uge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzE1MDY7XG59XG4ucGFnZS10aXRsZSB7XG4gIHdpZHRoOiA3NTBycHg7XG4gIGhlaWdodDogODBycHg7XG4gIGxpbmUtaGVpZ2h0OiA4MHJweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjhycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxpdmVyb29tIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuXHRcbiAgd2lkdGg6IDc1MHJweDtcbn1cbiRjZWwtd2lkdGg6IDAuNSAqIDc1MHJweDtcbi5saXZlcm9vbS1jZWwge1xyXG4gXG4gIHdpZHRoOiAkY2VsLXdpZHRoO1xuICBoZWlnaHQ6IDEuMzgyICogJGNlbC13aWR0aCArIDQwcnB4O1xufVxyXG4ubXktbGl2ZXJvb20tdHJ0Y3tcclxuXHR3aWR0aDogMzUwcnB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XHJcbn1cbi5saXZlcm9vbS10cnRjIHtcclxuICB6LWluZGV4Ojk5OTtcbiAgd2lkdGg6ICRjZWwtd2lkdGggLSA0MHJweDtcbiAgaGVpZ2h0OiAxLjM4MiAqICRjZWwtd2lkdGggLSA0MHJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcbn1cblxuLmxpdmVyb29tLWNlbC1uYW1lIHtcbiAgd2lkdGg6ICRjZWwtd2lkdGggLSA0MHJweDtcbiAgaGVpZ2h0OiA0MHJweDtcbiAgbGluZS1oZWlnaHQ6IDQwcnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjOTk5O1xuICBmb250LXNpemU6IDI0cnB4O1xufSAqL1xuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = requireNativePlugin;function requireNativePlugin(name) {
  return weex.requireModule(name);
}

/***/ }),
/* 10 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;}

}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 11 */
/*!***************************************************************************************************************************!*\
  !*** C:/Users/chenguocan/Desktop/CloudMedicine/pages/liveRoom/liveRoom.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_liveRoom_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./liveRoom.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 12);
/* harmony import */ var _D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_liveRoom_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_liveRoom_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_liveRoom_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_liveRoom_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_HBuilderX_HBuilderX_2_9_3_20201014_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_liveRoom_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 12 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/chenguocan/Desktop/CloudMedicine/pages/liveRoom/liveRoom.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "video-ico": {
    "position": "fixed",
    "bottom": "20rpx"
  },
  "video-ico-img": {
    "width": "100rpx",
    "height": "80rpx"
  },
  "page": {
    "height": 100,
    "backgroundColor": "#271506"
  },
  "page-title": {
    "width": "750rpx",
    "height": "80rpx",
    "lineHeight": "80rpx",
    "color": "#ffffff",
    "fontSize": "28rpx",
    "textAlign": "center"
  },
  "liveroom": {
    "flexDirection": "row",
    "flexWrap": "wrap",
    "width": "750rpx"
  },
  "liveroom-cel": {
    "width": "375rpx",
    "height": "558.25rpx",
    "paddingTop": "20rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "20rpx"
  },
  "liveroom-trtc": {
    "width": "335rpx",
    "height": "478.25rpx",
    "backgroundColor": "#444444"
  },
  "liveroom-cel-name": {
    "width": "335rpx",
    "height": "40rpx",
    "lineHeight": "40rpx",
    "textAlign": "center",
    "color": "#999999",
    "fontSize": "24rpx"
  }
}

/***/ }),
/* 13 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);