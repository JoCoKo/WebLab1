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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar pug_has_own_property = Object.prototype.hasOwnProperty;\n\n/**\n * Merge two attribute objects giving precedence\n * to values in object `b`. Classes are special-cased\n * allowing for arrays and merging/joining appropriately\n * resulting in a string.\n *\n * @param {Object} a\n * @param {Object} b\n * @return {Object} a\n * @api private\n */\n\nexports.merge = pug_merge;\nfunction pug_merge(a, b) {\n  if (arguments.length === 1) {\n    var attrs = a[0];\n    for (var i = 1; i < a.length; i++) {\n      attrs = pug_merge(attrs, a[i]);\n    }\n    return attrs;\n  }\n\n  for (var key in b) {\n    if (key === 'class') {\n      var valA = a[key] || [];\n      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);\n    } else if (key === 'style') {\n      var valA = pug_style(a[key]);\n      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;\n      var valB = pug_style(b[key]);\n      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;\n      a[key] = valA + valB;\n    } else {\n      a[key] = b[key];\n    }\n  }\n\n  return a;\n};\n\n/**\n * Process array, object, or string as a string of classes delimited by a space.\n *\n * If `val` is an array, all members of it and its subarrays are counted as\n * classes. If `escaping` is an array, then whether or not the item in `val` is\n * escaped depends on the corresponding item in `escaping`. If `escaping` is\n * not an array, no escaping is done.\n *\n * If `val` is an object, all the keys whose value is truthy are counted as\n * classes. No escaping is done.\n *\n * If `val` is a string, it is counted as a class. No escaping is done.\n *\n * @param {(Array.<string>|Object.<string, boolean>|string)} val\n * @param {?Array.<string>} escaping\n * @return {String}\n */\nexports.classes = pug_classes;\nfunction pug_classes_array(val, escaping) {\n  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);\n  for (var i = 0; i < val.length; i++) {\n    className = pug_classes(val[i]);\n    if (!className) continue;\n    escapeEnabled && escaping[i] && (className = pug_escape(className));\n    classString = classString + padding + className;\n    padding = ' ';\n  }\n  return classString;\n}\nfunction pug_classes_object(val) {\n  var classString = '', padding = '';\n  for (var key in val) {\n    if (key && val[key] && pug_has_own_property.call(val, key)) {\n      classString = classString + padding + key;\n      padding = ' ';\n    }\n  }\n  return classString;\n}\nfunction pug_classes(val, escaping) {\n  if (Array.isArray(val)) {\n    return pug_classes_array(val, escaping);\n  } else if (val && typeof val === 'object') {\n    return pug_classes_object(val);\n  } else {\n    return val || '';\n  }\n}\n\n/**\n * Convert object or string to a string of CSS styles delimited by a semicolon.\n *\n * @param {(Object.<string, string>|string)} val\n * @return {String}\n */\n\nexports.style = pug_style;\nfunction pug_style(val) {\n  if (!val) return '';\n  if (typeof val === 'object') {\n    var out = '';\n    for (var style in val) {\n      /* istanbul ignore else */\n      if (pug_has_own_property.call(val, style)) {\n        out = out + style + ':' + val[style] + ';';\n      }\n    }\n    return out;\n  } else {\n    return val + '';\n  }\n};\n\n/**\n * Render the given attribute.\n *\n * @param {String} key\n * @param {String} val\n * @param {Boolean} escaped\n * @param {Boolean} terse\n * @return {String}\n */\nexports.attr = pug_attr;\nfunction pug_attr(key, val, escaped, terse) {\n  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {\n    return '';\n  }\n  if (val === true) {\n    return ' ' + (terse ? key : key + '=\"' + key + '\"');\n  }\n  var type = typeof val;\n  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {\n    val = val.toJSON();\n  }\n  if (typeof val !== 'string') {\n    val = JSON.stringify(val);\n    if (!escaped && val.indexOf('\"') !== -1) {\n      return ' ' + key + '=\\'' + val.replace(/'/g, '&#39;') + '\\'';\n    }\n  }\n  if (escaped) val = pug_escape(val);\n  return ' ' + key + '=\"' + val + '\"';\n};\n\n/**\n * Render the given attributes object.\n *\n * @param {Object} obj\n * @param {Object} terse whether to use HTML5 terse boolean attributes\n * @return {String}\n */\nexports.attrs = pug_attrs;\nfunction pug_attrs(obj, terse){\n  var attrs = '';\n\n  for (var key in obj) {\n    if (pug_has_own_property.call(obj, key)) {\n      var val = obj[key];\n\n      if ('class' === key) {\n        val = pug_classes(val);\n        attrs = pug_attr(key, val, false, terse) + attrs;\n        continue;\n      }\n      if ('style' === key) {\n        val = pug_style(val);\n      }\n      attrs += pug_attr(key, val, false, terse);\n    }\n  }\n\n  return attrs;\n};\n\n/**\n * Escape the given string of `html`.\n *\n * @param {String} html\n * @return {String}\n * @api private\n */\n\nvar pug_match_html = /[\"&<>]/;\nexports.escape = pug_escape;\nfunction pug_escape(_html){\n  var html = '' + _html;\n  var regexResult = pug_match_html.exec(html);\n  if (!regexResult) return _html;\n\n  var result = '';\n  var i, lastIndex, escape;\n  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {\n    switch (html.charCodeAt(i)) {\n      case 34: escape = '&quot;'; break;\n      case 38: escape = '&amp;'; break;\n      case 60: escape = '&lt;'; break;\n      case 62: escape = '&gt;'; break;\n      default: continue;\n    }\n    if (lastIndex !== i) result += html.substring(lastIndex, i);\n    lastIndex = i + 1;\n    result += escape;\n  }\n  if (lastIndex !== i) return result + html.substring(lastIndex, i);\n  else return result;\n};\n\n/**\n * Re-throw the given `err` in context to the\n * the pug in `filename` at the given `lineno`.\n *\n * @param {Error} err\n * @param {String} filename\n * @param {String} lineno\n * @param {String} str original source\n * @api private\n */\n\nexports.rethrow = pug_rethrow;\nfunction pug_rethrow(err, filename, lineno, str){\n  if (!(err instanceof Error)) throw err;\n  if ((typeof window != 'undefined' || !filename) && !str) {\n    err.message += ' on line ' + lineno;\n    throw err;\n  }\n  try {\n    str = str || __webpack_require__(/*! fs */ 0).readFileSync(filename, 'utf8')\n  } catch (ex) {\n    pug_rethrow(err, null, lineno)\n  }\n  var context = 3\n    , lines = str.split('\\n')\n    , start = Math.max(lineno - context, 0)\n    , end = Math.min(lines.length, lineno + context);\n\n  // Error context\n  var context = lines.slice(start, end).map(function(line, i){\n    var curr = i + start + 1;\n    return (curr == lineno ? '  > ' : '    ')\n      + curr\n      + '| '\n      + line;\n  }).join('\\n');\n\n  // Alter exception message\n  err.path = filename;\n  err.message = (filename || 'Pug') + ':' + lineno\n    + '\\n' + context + '\\n\\n' + err.message;\n  throw err;\n};\n\n\n//# sourceURL=webpack:///./node_modules/pug-runtime/index.js?");

/***/ }),

/***/ "./src/fillElements.js":
/*!*****************************!*\
  !*** ./src/fillElements.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return fillElements; });\nconst compiledFunction = __webpack_require__(/*! ./template.pug */ \"./src/template.pug\");\n\nfunction fillElements(obj) {\n  document.getElementById('graphWeather').innerHTML = compiledFunction({\n    error: obj.error,\n    picSrc: obj.picSrc,\n    place: obj.place,\n    weather: obj.weather,\n    temperature: obj.temperature,\n    wind: obj.wind\n  });\n}\n\n//# sourceURL=webpack:///./src/fillElements.js?");

/***/ }),

/***/ "./src/fillError.js":
/*!**************************!*\
  !*** ./src/fillError.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return fillError; });\nfunction fillError(error, fillElements) {\n  fillElements({\n    picSrc: '',\n    error: 'Error! ' + error.cod + ' ' + error.message + '\\r\\n',\n    place: '',\n    weather: '',\n    temperature: '',\n    wind: ''\n  });\n  return {\n    picSrc: '',\n    error: 'Error! ' + error.cod + ' ' + error.message + '\\r\\n',\n    place: '',\n    weather: '',\n    temperature: '',\n    wind: ''\n  };\n}\n\n//# sourceURL=webpack:///./src/fillError.js?");

/***/ }),

/***/ "./src/fillWeather.js":
/*!****************************!*\
  !*** ./src/fillWeather.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return fillWeather; });\nfunction fillWeather(weather, fillElements) {\n  fillElements({\n    picSrc: 'http://openweathermap.org/img/wn/' + weather.weather[0].icon + '@2x.png',\n    error: \"\",\n    place: weather.name + ', ' + weather.sys.country,\n    weather: 'Current weather: ' + weather.weather[0].main + ' ( ' + weather.weather[0].description + ' )',\n    temperature: 'Temperature: ' + (weather.main.temp - 273.15).toFixed(0) + '°C',\n    wind: 'Wind: ' + weather.wind.speed + 'm/s'\n  });\n  return {\n    picSrc: 'http://openweathermap.org/img/wn/' + weather.weather[0].icon + '@2x.png',\n    error: \"\",\n    place: weather.name + ', ' + weather.sys.country,\n    weather: 'Current weather: ' + weather.weather[0].main + ' ( ' + weather.weather[0].description + ' )',\n    temperature: 'Temperature: ' + (weather.main.temp - 273.15).toFixed(0) + '°C',\n    wind: 'Wind: ' + weather.wind.speed + 'm/s'\n  };\n}\n\n//# sourceURL=webpack:///./src/fillWeather.js?");

/***/ }),

/***/ "./src/getWeather.js":
/*!***************************!*\
  !*** ./src/getWeather.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst getWeather = async cityName => {\n  let APIkey = '74e541dab94c8071bb4282ecb2691ea0';\n  let result = {\n    weather: null,\n    error: null\n  };\n  result.weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${APIkey}&q=${cityName}`).then(res => res.json());\n  if (result.weather.cod !== 200) result.error = true;\n  return result;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getWeather);\n\n//# sourceURL=webpack:///./src/getWeather.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _processWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processWeather */ \"./src/processWeather.js\");\n/* harmony import */ var _getWeather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWeather */ \"./src/getWeather.js\");\n/* harmony import */ var _fillWeather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fillWeather */ \"./src/fillWeather.js\");\n/* harmony import */ var _fillError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fillError */ \"./src/fillError.js\");\n\n\n\n\n\ndocument.getElementById('formID').addEventListener('submit', event => Object(_processWeather__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(event, _getWeather__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _fillWeather__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _fillError__WEBPACK_IMPORTED_MODULE_4__[\"default\"]));\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/processWeather.js":
/*!*******************************!*\
  !*** ./src/processWeather.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fillElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fillElements */ \"./src/fillElements.js\");\n/* harmony import */ var _getWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeather */ \"./src/getWeather.js\");\n/* harmony import */ var _fillError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fillError */ \"./src/fillError.js\");\n/* harmony import */ var _fillWeather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fillWeather */ \"./src/fillWeather.js\");\n\n\n\n\n\nconst processWeather = async event => {\n  try {\n    const cityName = event.target[0].value;\n    event.preventDefault();\n    const data = await Object(_getWeather__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cityName);\n\n    if (data.error) {\n      await Object(_fillError__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data.weather, _fillElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    } else {\n      await Object(_fillWeather__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(data.weather, _fillElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    }\n  } catch (data) {\n    await Object(_fillError__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data.weather, _fillElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (processWeather);\n\n//# sourceURL=webpack:///./src/processWeather.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ }),

/***/ "./src/template.pug":
/*!**************************!*\
  !*** ./src/template.pug ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (error, picSrc, place, temperature, weather, wind) {pug_html = pug_html + \"\\u003Cdiv id=\\\"errorID\\\"\\u003E\" + (pug.escape(null == (pug_interp = error) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003Cimg\" + (\" id=\\\"picID\\\"\"+pug.attr(\"src\", picSrc, true, true)) + \"\\u003E\\u003Cdiv id=\\\"placeID\\\"\\u003E\" + (pug.escape(null == (pug_interp = place) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv id=\\\"weatherID\\\"\\u003E\" + (pug.escape(null == (pug_interp = weather) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv id=\\\"temperature\\\"\\u003E\" + (pug.escape(null == (pug_interp = temperature) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv id=\\\"wind\\\"\\u003E\" + (pug.escape(null == (pug_interp = wind) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\";}.call(this,\"error\" in locals_for_with?locals_for_with.error:typeof error!==\"undefined\"?error:undefined,\"picSrc\" in locals_for_with?locals_for_with.picSrc:typeof picSrc!==\"undefined\"?picSrc:undefined,\"place\" in locals_for_with?locals_for_with.place:typeof place!==\"undefined\"?place:undefined,\"temperature\" in locals_for_with?locals_for_with.temperature:typeof temperature!==\"undefined\"?temperature:undefined,\"weather\" in locals_for_with?locals_for_with.weather:typeof weather!==\"undefined\"?weather:undefined,\"wind\" in locals_for_with?locals_for_with.wind:typeof wind!==\"undefined\"?wind:undefined));;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./src/template.pug?");

/***/ }),

/***/ 0:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///fs_(ignored)?");

/***/ })

/******/ });