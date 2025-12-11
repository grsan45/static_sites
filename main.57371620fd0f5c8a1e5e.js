"use strict";
(self["webpackChunkgrass_static_sites"] = self["webpackChunkgrass_static_sites"] || []).push([["main"],{

/***/ 7144:
/*!********************************!*\
  !*** ./src/components/App.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ 4976);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ 7767);
/* harmony import */ var _views_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/Home */ 1716);
/* harmony import */ var _views_OGNameGen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/OGNameGen */ 370);
/* harmony import */ var _views_GOOSE__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/GOOSE */ 8412);
/* harmony import */ var _views_ChecklistBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/ChecklistBuilder */ 1012);
/* harmony import */ var _views_NoMatch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/NoMatch */ 3997);
/* harmony import */ var _views_NTM__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/NTM */ 1458);
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! highlight.js/lib/core */ 11);
/* harmony import */ var highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! highlight.js/lib/languages/json */ 7402);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ 4848);











var App = function App() {
  // Registering hljs languages. As if I've actually done bundle optimization anyway.
  highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_7__["default"].registerLanguage("json", highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_8__["default"]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.HashRouter, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Routes, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
          exact: true,
          path: "/",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_views_Home__WEBPACK_IMPORTED_MODULE_1__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
          exact: true,
          path: "og_name_gen",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_views_OGNameGen__WEBPACK_IMPORTED_MODULE_2__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
          exact: true,
          path: "goose",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_views_GOOSE__WEBPACK_IMPORTED_MODULE_3__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
          exact: true,
          path: "ntm",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_views_NTM__WEBPACK_IMPORTED_MODULE_6__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
          exact: true,
          path: "checklist_builder",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_views_ChecklistBuilder__WEBPACK_IMPORTED_MODULE_4__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
          path: "*",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_views_NoMatch__WEBPACK_IMPORTED_MODULE_5__["default"], {
            status: 404
          })
        })]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ 9407:
/*!**************************************!*\
  !*** ./src/components/CodeBlock.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highlight.js/lib/core */ 11);
/* harmony import */ var highlight_js_styles_an_old_hope_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/an-old-hope.min.css */ 4743);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ 4848);



var CodeBlock = function CodeBlock(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("pre", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
      className: "hljs",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        dangerouslySetInnerHTML: {
          __html: highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__["default"].highlightAuto(children).value
        }
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CodeBlock);

/***/ }),

/***/ 4831:
/*!********************************!*\
  !*** ./src/components/Col.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 4848);


var Col = function Col(_ref) {
  var width = _ref.width,
    centered = _ref.centered,
    children = _ref.children;
  var classNames = "d-flex flex-column col-md".concat(width === undefined ? "" : "-" + width, " ");
  if (centered) classNames += "justify-content-center align-items-center";else classNames += "justify-content-start align-items-start";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: classNames,
    children: children
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Col);

/***/ }),

/***/ 6888:
/*!****************************************!*\
  !*** ./src/components/Form/Button.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 4848);


var Button = function Button(_ref) {
  var name = _ref.name,
    text = _ref.text,
    action = _ref.action,
    style = _ref.style;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
    onClick: action,
    className: "btn btn-outline-primary",
    id: name,
    style: style,
    children: text
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ 2911:
/*!******************************************!*\
  !*** ./src/components/Form/Checkbox.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ 6784);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 6188);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ 4848);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Checkbox = function Checkbox(_ref) {
  var name = _ref.name,
    action = _ref.action,
    initialValue = _ref.initialValue;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue || false),
    _useState2 = _slicedToArray(_useState, 2),
    checked = _useState2[0],
    setChecked = _useState2[1];
  var doUpdate = function doUpdate(newValue) {
    setChecked(newValue);
    if (action) action(newValue);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
      type: "checkbox",
      name: name,
      className: "btn-check",
      id: name,
      onChange: function onChange(e) {
        return doUpdate(e.target.checked);
      },
      checked: checked
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
      htmlFor: name,
      className: "btn btn-outline-primary",
      id: name + "Label",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
        fixedWidth: true,
        icon: checked ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCheck : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faXmark
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkbox);

/***/ }),

/***/ 1826:
/*!******************************************!*\
  !*** ./src/components/Form/TextArea.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 4848);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var TextArea = function TextArea(_ref) {
  var children = _ref.children,
    onChange = _ref.onChange,
    formatter = _ref.formatter;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(children),
    _useState2 = _slicedToArray(_useState, 2),
    content = _useState2[0],
    setContent = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    editing = _useState4[0],
    setEditing = _useState4[1];
  if (editing) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("textarea", {
      className: "w-100 form-control bg-dark text-white",
      onChange: function onChange(e) {
        return setContent(e.target.value);
      },
      onBlur: function onBlur() {
        setEditing(false);
        onChange(content);
      },
      defaultValue: content,
      autoFocus: true
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "w-100 form-control bg-dark text-white",
    onClick: function onClick() {
      return setEditing(true);
    },
    children: formatter ? formatter(content) : content
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextArea);

/***/ }),

/***/ 5348:
/*!**********************************************!*\
  !*** ./src/components/Form/ToggleButton.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 4848);


var ToggleButton = function ToggleButton(_ref) {
  var name = _ref.name,
    text = _ref.text,
    action = _ref.action;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "btn-group",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
      type: "checkbox",
      name: name,
      className: "btn-check",
      id: name,
      onChange: action
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
      htmlFor: name,
      className: "btn btn-outline-primary",
      id: name + "Label",
      children: text
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToggleButton);

/***/ }),

/***/ 6226:
/*!******************************************!*\
  !*** ./src/components/Nav/NavColumn.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 4848);


var NavColumn = function NavColumn(_ref) {
  var title = _ref.title,
    children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "col-md-4 d-flex justify-content-start flex-column",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
        children: title
      }), react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children, function (child) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
          children: child
        });
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavColumn);

/***/ }),

/***/ 2391:
/*!***************************************!*\
  !*** ./src/components/Nav/TabNav.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 4848);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var TabNav = function TabNav(_ref) {
  var tabs = _ref.tabs;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(tabs[0].id),
    _useState2 = _slicedToArray(_useState, 2),
    selectedTabId = _useState2[0],
    setSelectedTabId = _useState2[1];
  var selectedTab = tabs.find(function (tab) {
    return tab.id === selectedTabId;
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
      className: "nav nav-tabs",
      children: tabs.map(function (t) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
          className: "nav-item",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
            className: "nav-link ".concat(selectedTabId === t.id ? "active" : ""),
            onClick: function onClick() {
              return setSelectedTabId(t.id);
            },
            children: t.title
          })
        }, t.id);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "gy-5",
      children: selectedTab.content
    }, selectedTabId)]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabNav);

/***/ }),

/***/ 3388:
/*!***************************************!*\
  !*** ./src/components/PageHeader.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ 1428);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 4848);
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var PageHeader = function PageHeader(_ref) {
  var text = _ref.text,
    logoUrl = _ref.logoUrl;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            display: flex;\n            &:before {\n                flex-basis: 1.2em;\n                content: \"\";\n                background-image: url(\"", "\");\n                background-size: 1.2em;\n                margin-right: 0.5rem;\n            }\n        "])), logoUrl),
    children: text
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHeader);

/***/ }),

/***/ 7958:
/*!*********************************!*\
  !*** ./src/components/View.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ 8747);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ 6378);
/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/main.css */ 1951);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ 4976);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ 4848);






var View = function View(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "container-fluid min-vh-100 d-flex flex-column",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("nav", {
      className: "navbar navbar-expand-lg navbar-dark justify-content-between",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
        to: "/",
        className: "navbar-brand",
        id: "title",
        children: ["Grayson's ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("em", {
          children: "Things"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
        className: "navbar-toggler",
        type: "button",
        "data-bs-toggle": "collapse",
        "data-bs-target": "#navlinks",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "navbar-toggler-icon"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "collapse navbar-collapse me-auto",
        id: "navlinks",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
          className: "navbar-nav align-self-end",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
            className: "nav-item active",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
              href: "https://github.com/grsan45",
              className: "nav-link",
              children: "Github"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
            className: "nav-item active",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
              href: "https://linkedin.com/in/grsan45",
              className: "nav-link",
              children: "LinkedIn"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
            className: "nav-item active",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
              href: "https://www.youtube.com/@grsan45",
              className: "nav-link",
              children: "Youtube"
            })
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "row gy-1",
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "container-fluid opacity-75 mt-auto",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        children: "This website and all projects, unless otherwise stated, are licensed under GNU-GPLv3"
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View);

/***/ }),

/***/ 199:
/*!********************************!*\
  !*** ./src/data/repository.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addEmptyItem: () => (/* binding */ addEmptyItem),
/* harmony export */   checklistDB: () => (/* binding */ checklistDB),
/* harmony export */   removeItem: () => (/* binding */ removeItem),
/* harmony export */   updateItem: () => (/* binding */ updateItem)
/* harmony export */ });
/* harmony import */ var dexie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dexie */ 3371);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var checklistDB = new dexie__WEBPACK_IMPORTED_MODULE_0__["default"]('checklistBuilder');
checklistDB.version(1).stores({
  sections: "&id,name,parentSectionId",
  items: "&id,parentSectionId"
});
checklistDB.on("populate", function () {
  var initialSectionId = crypto.randomUUID();
  checklistDB.sections.add({
    id: initialSectionId,
    name: "New Section",
    parentSectionId: null,
    sectionNumber: 1
  });
  checklistDB.items.add({
    id: crypto.randomUUID(),
    parentSectionId: initialSectionId,
    itemNumber: 1,
    description: "An example item",
    completed: false
  });
});
var addEmptyItem = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(sectionId) {
    var newId;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          newId = crypto.randomUUID();
          _context.next = 4;
          return checklistDB.items.add({
            id: newId,
            description: "A new blank Item",
            parentSectionId: sectionId
          });
        case 4:
          _context.next = 9;
          break;
        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.error("Failed to add new item: ".concat(_context.t0));
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 6]]);
  }));
  return function addEmptyItem(_x) {
    return _ref.apply(this, arguments);
  };
}();
var updateItem = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(itemId, update) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return checklistDB.items.update(itemId, update);
        case 3:
          _context2.next = 8;
          break;
        case 5:
          _context2.prev = 5;
          _context2.t0 = _context2["catch"](0);
          console.error("Failed to update item ".concat(itemId, ": ").concat(_context2.t0));
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 5]]);
  }));
  return function updateItem(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
var removeItem = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(itemId) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return checklistDB.items["delete"](itemId, null);
        case 3:
          _context3.next = 8;
          break;
        case 5:
          _context3.prev = 5;
          _context3.t0 = _context3["catch"](0);
          console.error("Failed to remove item ".concat(itemId, ": ").concat(_context3.t0));
        case 8:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 5]]);
  }));
  return function removeItem(_x4) {
    return _ref3.apply(this, arguments);
  };
}();

/***/ }),

/***/ 6954:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ 5338);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ 7144);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ 4848);




var rootElement = document.createElement("div");
document.body.appendChild(rootElement);
var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(rootElement);
root.render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_App__WEBPACK_IMPORTED_MODULE_2__["default"], {}));

/***/ }),

/***/ 1012:
/*!****************************************!*\
  !*** ./src/views/ChecklistBuilder.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/View */ 7958);
/* harmony import */ var _components_Nav_TabNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Nav/TabNav */ 2391);
/* harmony import */ var dexie_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dexie-react-hooks */ 9352);
/* harmony import */ var _data_repository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/repository */ 199);
/* harmony import */ var _components_Form_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Form/Button */ 6888);
/* harmony import */ var _components_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Col */ 4831);
/* harmony import */ var _components_Form_Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Form/Checkbox */ 2911);
/* harmony import */ var _components_Form_TextArea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Form/TextArea */ 1826);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ 6784);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 6188);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ 4848);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }












var SectionView = function SectionView(_ref) {
  var sectionId = _ref.sectionId,
    sectionNumber = _ref.sectionNumber;
  var items = (0,dexie_react_hooks__WEBPACK_IMPORTED_MODULE_3__.useLiveQuery)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _data_repository__WEBPACK_IMPORTED_MODULE_4__.checklistDB.items.where('parentSectionId').equals(sectionId).toArray();
        case 2:
          return _context.abrupt("return", _context.sent);
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })), [sectionId]);
  if (!items) return null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("table", {
      className: "table table-dark",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("th", {
            scope: "col",
            className: "col-1",
            children: "Step"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("th", {
            scope: "col",
            children: "Description"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("th", {
            scope: "col",
            className: "col-1 text-center",
            children: "Completed"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("tbody", {
        children: [items.map(function (item, idx) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("th", {
              scope: "row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                style: {
                  "marginRight": "0.5em"
                },
                children: "".concat(sectionNumber, ".").concat(idx + 1)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Form_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
                name: "removeItem-".concat(item.id),
                action: function action(_) {
                  return (0,_data_repository__WEBPACK_IMPORTED_MODULE_4__.removeItem)(item.id);
                },
                text: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeIcon, {
                  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faMinus
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("td", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Form_TextArea__WEBPACK_IMPORTED_MODULE_8__["default"], {
                children: item.description,
                onChange: function onChange(val) {
                  return (0,_data_repository__WEBPACK_IMPORTED_MODULE_4__.updateItem)(item.id, {
                    description: val
                  });
                }
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("td", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
                className: "d-flex justify-content-center",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Form_Checkbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  name: "setCompleted-".concat(item.id),
                  initialValue: item.completed,
                  action: function action(val) {
                    return (0,_data_repository__WEBPACK_IMPORTED_MODULE_4__.updateItem)(item.id, {
                      completed: val
                    });
                  }
                })
              })
            })]
          }, item.id);
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("tr", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("td", {
            colSpan: "4",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "d-flex justify-content-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Form_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
                name: "addItem-".concat(sectionId),
                text: "Add Item",
                style: {
                  width: '35%'
                },
                action: function action() {
                  return (0,_data_repository__WEBPACK_IMPORTED_MODULE_4__.addEmptyItem)(sectionId);
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Form_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
                name: "addSubsection-".concat(sectionId),
                text: "Add Subsection",
                style: {
                  width: '35%'
                },
                action: function action() {
                  return alert("work in progress");
                }
              })]
            })
          })
        })]
      })]
    })
  });
};
var ChecklistBuilder = function ChecklistBuilder() {
  var sectionList = (0,dexie_react_hooks__WEBPACK_IMPORTED_MODULE_3__.useLiveQuery)(function () {
    return _data_repository__WEBPACK_IMPORTED_MODULE_4__.checklistDB.sections.toArray();
  });
  if (!sectionList) return null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_components_View__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      children: "I made this utility to make creating nice looking rocketry checklists easier... think of it as a really fancy to-do list"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Nav_TabNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
      tabs: sectionList.map(function (s) {
        return {
          id: s.id,
          title: s.name,
          content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(SectionView, {
            sectionId: s.id,
            sectionNumber: s.sectionNumber
          })
        };
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChecklistBuilder);

/***/ }),

/***/ 8412:
/*!*****************************!*\
  !*** ./src/views/GOOSE.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/View */ 7958);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ 4848);



var GOOSE = function GOOSE() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components_View__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
      children: "Grayson's Odd Operating System Endeavour"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h4", {
      children: "aka GOOSE"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h6", {
      children: "More on this soon..."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
      href: "http://github.com/grsan45/GOOSE",
      children: "Repo Link"
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GOOSE);

/***/ }),

/***/ 1716:
/*!****************************!*\
  !*** ./src/views/Home.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ 4976);
/* harmony import */ var _components_View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/View */ 7958);
/* harmony import */ var _components_Nav_NavColumn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Nav/NavColumn */ 6226);
/* harmony import */ var _components_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Col */ 4831);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ 4848);






var Home = function Home() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_View__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
        children: "Test"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_Nav_NavColumn__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "Projects",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
        className: "main-nav-link",
        to: "goose",
        children: "GOOSE (Grayson's Odd Operating System Endeavour)"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
        className: "main-nav-link",
        to: "ntm",
        children: "NoTrackingMarkers"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_Nav_NavColumn__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "Utilities & Fun Things",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
        className: "main-nav-link",
        to: "og_name_gen",
        children: "\"OG\" name generator"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
        className: "main-nav-link",
        to: "checklist_builder",
        children: "Rocketry Checklist Builder (WIP)"
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ 1458:
/*!***************************!*\
  !*** ./src/views/NTM.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/View */ 7958);
/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PageHeader */ 3388);
/* harmony import */ var _components_CodeBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CodeBlock */ 9407);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ 4848);





var NTM = function NTM() {
  // yucky formatting :(
  var configSnippet = "{\n  \"autoStart\": true,\n  \"hosts\": [\n    {\n      \"host\":  \"string\",\n      \"flags\": [\"query param\", \"query param\"]\n    }\n  ]\n}";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_View__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_PageHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "NoTrackingMarkers",
      logoUrl: "https://r2.grsan.xyz/NTMLogo.png"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
      href: "https://github.com/grsan45/NoTrackingMarkers",
      children: "Github Repository Link"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
      children: "This is a simple Win32 program I made to remove those pesky url tracking markers in URLs copied to your clipboard."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
        src: "https://r2.grsan.xyz/ntmpreview.png",
        alt: "Image highlighting a tracking marker in a url"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("sub", {
        children: "(These Things)"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "gy-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
        children: "Download"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
        children: ["Get the latest version from the Github releases page ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
          href: "https://github.com/grsan45/NoTrackingMarkers/releases",
          children: "here"
        }), "."]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
        children: "Configuration"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
        children: ["I made this application for myself as a fun project to learn Win32. As such, I designed the configuration system to be something that's convenient for me.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {}), "We work in JSON here."]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        children: "Right click on the application icon in the system tray and select \"Open Configuration File,\" and you'll be presented with a file in your default text editor. Here's the schema:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_CodeBlock__WEBPACK_IMPORTED_MODULE_3__["default"], {
        children: configSnippet
      }), "From the top:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("code", {
            children: "autoStart"
          }), " -- boolean, determines whether the application starts on user login"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("code", {
            children: "hosts"
          }), " -- array of host configurations"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("code", {
            children: "host"
          }), " -- a hostname to remove markers from, i.e. ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("code", {
            children: "youtu.be"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("code", {
            children: "flags"
          }), " -- array of strings, these are the tracking keys to remove, i.e. ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("code", {
            children: "si"
          }), " for YouTube"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        children: "Once you're done editing, save the file and select \"Reload Configuration File\" in the application menu."
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NTM);

/***/ }),

/***/ 3997:
/*!*******************************!*\
  !*** ./src/views/NoMatch.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 4848);


var NoMatch = function NoMatch() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    children: "Not Found"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoMatch);

/***/ }),

/***/ 370:
/*!*********************************!*\
  !*** ./src/views/OGNameGen.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 6540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/View */ 7958);
/* harmony import */ var _components_Col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Col */ 4831);
/* harmony import */ var _components_Form_ToggleButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Form/ToggleButton */ 5348);
/* harmony import */ var _components_Form_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Form/Button */ 6888);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ 4848);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






var OGNameGen = /*#__PURE__*/function (_React$Component) {
  function OGNameGen(props) {
    var _this;
    _classCallCheck(this, OGNameGen);
    _this = _callSuper(this, OGNameGen, [props]);
    _defineProperty(_this, "updateInputName", function (fieldContent) {
      _this.setState({
        inputName: fieldContent === undefined ? '' : fieldContent
      }, _this.generateName);
    });
    _defineProperty(_this, "generateName", function () {
      var generatedName = _this.state.inputName;
      if (_this.state.replaceVowels) {
        var vowel = Math.round(Math.random()) ? 'x' : 'q';
        generatedName = generatedName.replaceAll(/[aeiou](?![aeiou])+?/g, vowel);
      }
      if (_this.state.addPrefix) {
        var prefix = _this.prefixes[Math.floor(Math.random() * _this.prefixes.length)];
        generatedName = prefix + generatedName;
      }
      if (_this.state.addSuffix) {
        var suffix = _this.suffixes[Math.floor(Math.random() * _this.suffixes.length)];
        generatedName = generatedName + suffix;
      }
      _this.setState({
        outputName: generatedName
      });
    });
    _this.state = {
      outputName: "",
      inputName: "",
      addPrefix: false,
      addSuffix: false,
      replaceVowels: false
    };
    _this.prefixes = ["Re", "Dis", "Un", "De"];
    _this.suffixes = ["icated", "ified", "ity", "ness", "ify"];
    return _this;
  }
  _inherits(OGNameGen, _React$Component);
  return _createClass(OGNameGen, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components_View__WEBPACK_IMPORTED_MODULE_1__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components_Col__WEBPACK_IMPORTED_MODULE_2__["default"], {
          width: "4",
          centered: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "row",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h1", {
              children: "\"OG\" Name Generator"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
            htmlFor: "ogname",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
              children: "Name to \"Og\"-ify"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
            type: "text",
            name: "ogname",
            id: "ogname",
            className: "form-control bg-dark text-white",
            onChange: function onChange(e) {
              return _this2.updateInputName(e.target.value);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
            children: "\"Og\"-ifiers:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "btn-group-vertical",
            role: "group",
            style: {
              width: '100%'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Form_ToggleButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
              name: "addPrefix",
              text: "Add a prefix?",
              action: function action(e) {
                return _this2.setState({
                  addPrefix: e.target.checked
                }, _this2.generateName);
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Form_ToggleButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
              name: "addSuffix",
              text: "Add a suffix?",
              action: function action(e) {
                return _this2.setState({
                  addSuffix: e.target.checked
                }, _this2.generateName);
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Form_ToggleButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
              name: "replaceVowels",
              text: "Replace vowels with 'x' or 'q'?",
              action: function action(e) {
                return _this2.setState({
                  replaceVowels: e.target.checked
                }, _this2.generateName);
              }
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components_Col__WEBPACK_IMPORTED_MODULE_2__["default"], {
          centered: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h1", {
            id: "generatedName",
            style: {
              fontWeight: 100,
              textAlign: 'center',
              visibility: this.state.inputName ? 'visible' : 'hidden'
            },
            children: this.state.outputName
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Form_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
            name: "generateName",
            text: "Regenerate Name",
            action: function action(_) {
              return _this2.generateName();
            },
            style: {
              width: '50%',
              visibility: this.state.inputName ? 'visible' : 'hidden'
            }
          })]
        })]
      });
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OGNameGen);

/***/ }),

/***/ 4142:
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/main.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 1354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
 Above font is Roboto Light (300)
 */

body {
    background-color: #1a1a1a;
    font-family: 'Roboto', sans-serif;
    color: #fafafa
}

ul {
    list-style-type: "- ";
}

a {
    color: #8eadff;
    text-decoration: underline;
}


a:hover {
    color: #6b89e0;
}`, "",{"version":3,"sources":["webpack://./src/style/main.css"],"names":[],"mappings":"AACA;;EAEE;;AAEF;IACI,yBAAyB;IACzB,iCAAiC;IACjC;AACJ;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,cAAc;IACd,0BAA0B;AAC9B;;;AAGA;IACI,cAAc;AAClB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');\r\n/*\r\n Above font is Roboto Light (300)\r\n */\r\n\r\nbody {\r\n    background-color: #1a1a1a;\r\n    font-family: 'Roboto', sans-serif;\r\n    color: #fafafa\r\n}\r\n\r\nul {\r\n    list-style-type: \"- \";\r\n}\r\n\r\na {\r\n    color: #8eadff;\r\n    text-decoration: underline;\r\n}\r\n\r\n\r\na:hover {\r\n    color: #6b89e0;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1951:
/*!****************************!*\
  !*** ./src/style/main.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 5072);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 7825);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ 7659);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 5056);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 540);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 1113);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ 4142);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 3385:
/*!******************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ 5782:
/*!*********************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e";

/***/ }),

/***/ 4718:
/*!******************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ 7154:
/*!***********************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e ***!
  \***********************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e";

/***/ }),

/***/ 8734:
/*!*****************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e";

/***/ }),

/***/ 5372:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e";

/***/ }),

/***/ 7249:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e";

/***/ }),

/***/ 6690:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ 5932:
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e";

/***/ }),

/***/ 1144:
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ 7210:
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23052c65%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23052c65%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e";

/***/ }),

/***/ 7326:
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23212529%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23212529%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e";

/***/ }),

/***/ 5531:
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ 7115:
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ 4274:
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e";

/***/ }),

/***/ 5419:
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ 6366:
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ 2247:
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ 8487:
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(6954)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDZIQUE2SDtBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHNGQUFzRixNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxRQUFRLEtBQUssVUFBVSwrR0FBK0csZ0VBQWdFLGtDQUFrQywwQ0FBMEMsMkJBQTJCLFlBQVksZ0NBQWdDLEtBQUssV0FBVyx1QkFBdUIsbUNBQW1DLEtBQUsscUJBQXFCLHVCQUF1QixLQUFLLG1CQUFtQjtBQUM3cUI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QnZDLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXFHO0FBQ3JHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7QUFDckMsaUJBQWlCLHVHQUFhO0FBQzlCLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMscUZBQU87Ozs7QUFJK0M7QUFDdkUsT0FBTyxpRUFBZSxxRkFBTyxJQUFJLHFGQUFPLFVBQVUscUZBQU8sbUJBQW1CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFzc19zdGF0aWNfc2l0ZXMvLi9zcmMvY29tcG9uZW50cy9BcHAuanN4Iiwid2VicGFjazovL2dyYXNzX3N0YXRpY19zaXRlcy8uL3NyYy9jb21wb25lbnRzL0NvZGVCbG9jay5qc3giLCJ3ZWJwYWNrOi8vZ3Jhc3Nfc3RhdGljX3NpdGVzLy4vc3JjL2NvbXBvbmVudHMvQ29sLmpzeCIsIndlYnBhY2s6Ly9ncmFzc19zdGF0aWNfc2l0ZXMvLi9zcmMvY29tcG9uZW50cy9Gb3JtL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vZ3Jhc3Nfc3RhdGljX3NpdGVzLy4vc3JjL2NvbXBvbmVudHMvRm9ybS9DaGVja2JveC5qc3giLCJ3ZWJwYWNrOi8vZ3Jhc3Nfc3RhdGljX3NpdGVzLy4vc3JjL2NvbXBvbmVudHMvRm9ybS9UZXh0QXJlYS5qc3giLCJ3ZWJwYWNrOi8vZ3Jhc3Nfc3RhdGljX3NpdGVzLy4vc3JjL2NvbXBvbmVudHMvRm9ybS9Ub2dnbGVCdXR0b24uanN4Iiwid2VicGFjazovL2dyYXNzX3N0YXRpY19zaXRlcy8uL3NyYy9jb21wb25lbnRzL05hdi9OYXZDb2x1bW4uanN4Iiwid2VicGFjazovL2dyYXNzX3N0YXRpY19zaXRlcy8uL3NyYy9jb21wb25lbnRzL05hdi9UYWJOYXYuanN4Iiwid2VicGFjazovL2dyYXNzX3N0YXRpY19zaXRlcy8uL3NyYy9jb21wb25lbnRzL1BhZ2VIZWFkZXIuanN4Iiwid2VicGFjazovL2dyYXNzX3N0YXRpY19zaXRlcy8uL3NyYy9jb21wb25lbnRzL1ZpZXcuanN4Iiwid2VicGFjazovL2dyYXNzX3N0YXRpY19zaXRlcy8uL3NyYy9kYXRhL3JlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vZ3Jhc3Nfc3RhdGljX3NpdGVzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2dyYXNzX3N0YXRpY19zaXRlcy8uL3NyYy92aWV3cy9DaGVja2xpc3RCdWlsZGVyLmpzeCIsIndlYnBhY2s6Ly9ncmFzc19zdGF0aWNfc2l0ZXMvLi9zcmMvdmlld3MvR09PU0UuanN4Iiwid2VicGFjazovL2dyYXNzX3N0YXRpY19zaXRlcy8uL3NyYy92aWV3cy9Ib21lLmpzeCIsIndlYnBhY2s6Ly9ncmFzc19zdGF0aWNfc2l0ZXMvLi9zcmMvdmlld3MvTlRNLmpzeCIsIndlYnBhY2s6Ly9ncmFzc19zdGF0aWNfc2l0ZXMvLi9zcmMvdmlld3MvTm9NYXRjaC5qc3giLCJ3ZWJwYWNrOi8vZ3Jhc3Nfc3RhdGljX3NpdGVzLy4vc3JjL3ZpZXdzL09HTmFtZUdlbi5qc3giLCJ3ZWJwYWNrOi8vZ3Jhc3Nfc3RhdGljX3NpdGVzLy4vc3JjL3N0eWxlL21haW4uY3NzIiwid2VicGFjazovL2dyYXNzX3N0YXRpY19zaXRlcy8uL3NyYy9zdHlsZS9tYWluLmNzcz84MzMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Um91dGUsIEhhc2hSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZXN9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCBIb21lIGZyb20gXCIuLi92aWV3cy9Ib21lXCJcbmltcG9ydCBPR05hbWVHZW4gZnJvbSBcIi4uL3ZpZXdzL09HTmFtZUdlblwiXG5pbXBvcnQgR09PU0UgZnJvbSBcIi4uL3ZpZXdzL0dPT1NFXCI7XG5pbXBvcnQgQ2hlY2tsaXN0QnVpbGRlciBmcm9tIFwiLi4vdmlld3MvQ2hlY2tsaXN0QnVpbGRlclwiO1xuaW1wb3J0IE5vTWF0Y2ggZnJvbSBcIi4uL3ZpZXdzL05vTWF0Y2hcIjtcbmltcG9ydCBOVE0gZnJvbSBcIi4uL3ZpZXdzL05UTVwiO1xuXG5pbXBvcnQgaGxqcyBmcm9tIFwiaGlnaGxpZ2h0LmpzL2xpYi9jb3JlXCJcbmltcG9ydCBqc29uIGZyb20gXCJoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9qc29uXCJcblxuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gICAgLy8gUmVnaXN0ZXJpbmcgaGxqcyBsYW5ndWFnZXMuIEFzIGlmIEkndmUgYWN0dWFsbHkgZG9uZSBidW5kbGUgb3B0aW1pemF0aW9uIGFueXdheS5cbiAgICBobGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJqc29uXCIsIGpzb24pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJvdXRlcj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWUgLz59Lz5cblxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIm9nX25hbWVfZ2VuXCIgZWxlbWVudD17PE9HTmFtZUdlbiAvPn0vPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cImdvb3NlXCIgZWxlbWVudD17PEdPT1NFIC8+fS8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwibnRtXCIgZWxlbWVudD17PE5UTSAvPn0vPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cImNoZWNrbGlzdF9idWlsZGVyXCIgZWxlbWVudD17PENoZWNrbGlzdEJ1aWxkZXIgLz59Lz5cblxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIipcIiBlbGVtZW50PXs8Tm9NYXRjaCBzdGF0dXM9ezQwNH0gLz59Lz5cbiAgICAgICAgICAgICAgICA8L1JvdXRlcz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1JvdXRlcj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwOyIsImltcG9ydCBobGpzIGZyb20gXCJoaWdobGlnaHQuanMvbGliL2NvcmVcIjtcbmltcG9ydCBcImhpZ2hsaWdodC5qcy9zdHlsZXMvYW4tb2xkLWhvcGUubWluLmNzc1wiXG5cbmNvbnN0IENvZGVCbG9jayA9ICh7Y2hpbGRyZW59KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHByZT5cbiAgICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT17XCJobGpzXCJ9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBobGpzLmhpZ2hsaWdodEF1dG8oY2hpbGRyZW4pLnZhbHVlfX0gLz5cbiAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgPC9wcmU+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29kZUJsb2NrOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQ29sID0gKHt3aWR0aCwgY2VudGVyZWQsIGNoaWxkcmVufSkgPT4ge1xuICAgIGxldCBjbGFzc05hbWVzID0gYGQtZmxleCBmbGV4LWNvbHVtbiBjb2wtbWQke3dpZHRoID09PSB1bmRlZmluZWQgPyBcIlwiIDogXCItXCIgKyB3aWR0aH0gYFxuICAgIGlmIChjZW50ZXJlZClcbiAgICAgICAgY2xhc3NOYW1lcyArPSBcImp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCJcbiAgICBlbHNlXG4gICAgICAgIGNsYXNzTmFtZXMgKz0gXCJqdXN0aWZ5LWNvbnRlbnQtc3RhcnQgYWxpZ24taXRlbXMtc3RhcnRcIlxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29sO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBCdXR0b24gPSAoe25hbWUsIHRleHQsIGFjdGlvbiwgc3R5bGV9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthY3Rpb259IGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XCIgaWQ9e25hbWV9IHN0eWxlPXtzdHlsZX0+e3RleHR9PC9idXR0b24+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0ZvbnRBd2Vzb21lSWNvbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHtmYUNoZWNrLCBmYVhtYXJrfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5cbmNvbnN0IENoZWNrYm94ID0gKHtuYW1lLCBhY3Rpb24sIGluaXRpYWxWYWx1ZX0pID0+IHtcbiAgICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZShpbml0aWFsVmFsdWUgfHwgZmFsc2UpXG4gICAgY29uc3QgZG9VcGRhdGUgPSAobmV3VmFsdWUpID0+IHtcbiAgICAgICAgc2V0Q2hlY2tlZChuZXdWYWx1ZSk7XG4gICAgICAgIGlmIChhY3Rpb24pXG4gICAgICAgICAgICBhY3Rpb24obmV3VmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT17bmFtZX0gY2xhc3NOYW1lPVwiYnRuLWNoZWNrXCIgaWQ9e25hbWV9IG9uQ2hhbmdlPXtlID0+IGRvVXBkYXRlKGUudGFyZ2V0LmNoZWNrZWQpfSBjaGVja2VkPXtjaGVja2VkfSAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e25hbWV9IGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XCIgaWQ9e25hbWUgKyBcIkxhYmVsXCJ9PjxGb250QXdlc29tZUljb24gZml4ZWRXaWR0aD17dHJ1ZX0gaWNvbj17Y2hlY2tlZCA/IGZhQ2hlY2sgOiBmYVhtYXJrfSAvPjwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveDtcbiIsImltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBUZXh0QXJlYSA9ICh7Y2hpbGRyZW4sIG9uQ2hhbmdlLCBmb3JtYXR0ZXJ9KSA9PiB7XG4gICAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoY2hpbGRyZW4pO1xuICAgIGNvbnN0IFtlZGl0aW5nLCBzZXRFZGl0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGlmIChlZGl0aW5nKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwidy0xMDAgZm9ybS1jb250cm9sIGJnLWRhcmsgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0Q29udGVudChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVkaXRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZShjb250ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtjb250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1cy8+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIGZvcm0tY29udHJvbCBiZy1kYXJrIHRleHQtd2hpdGVcIiBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0aW5nKHRydWUpfT5cbiAgICAgICAgICAgIHtmb3JtYXR0ZXIgPyBmb3JtYXR0ZXIoY29udGVudCkgOiBjb250ZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRBcmVhOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgVG9nZ2xlQnV0dG9uID0gKHtuYW1lLCB0ZXh0LCBhY3Rpb259KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPXtuYW1lfSBjbGFzc05hbWU9XCJidG4tY2hlY2tcIiBpZD17bmFtZX0gb25DaGFuZ2U9e2FjdGlvbn0gLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtuYW1lfSBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiIGlkPXtuYW1lICsgXCJMYWJlbFwifT57dGV4dH08L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9nZ2xlQnV0dG9uOyIsImltcG9ydCBSZWFjdCwge0NoaWxkcmVufSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTmF2Q29sdW1uID0gKHt0aXRsZSwgY2hpbGRyZW59KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBkLWZsZXgganVzdGlmeS1jb250ZW50LXN0YXJ0IGZsZXgtY29sdW1uXCI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGgzPnt0aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgIHtDaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGNoaWxkID0+XG4gICAgICAgICAgICAgICAgICAgIDxsaT57Y2hpbGR9PC9saT5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkNvbHVtbjsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFRhYk5hdiA9ICh7dGFic30pID0+IHtcbiAgICBjb25zdCBbc2VsZWN0ZWRUYWJJZCwgc2V0U2VsZWN0ZWRUYWJJZF0gPSB1c2VTdGF0ZSh0YWJzWzBdLmlkKVxuICAgIGNvbnN0IHNlbGVjdGVkVGFiID0gdGFicy5maW5kKHRhYiA9PiB0YWIuaWQgPT09IHNlbGVjdGVkVGFiSWQpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnNcIj5cbiAgICAgICAgICAgICAgICB7dGFicy5tYXAodCA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIGtleT17dC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YG5hdi1saW5rICR7c2VsZWN0ZWRUYWJJZD09PXQuaWQgPyBcImFjdGl2ZVwiIDogXCJcIn1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZFRhYklkKHQuaWQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxkaXYga2V5PXtzZWxlY3RlZFRhYklkfSBjbGFzc05hbWU9XCJneS01XCI+XG4gICAgICAgICAgICAgICAge3NlbGVjdGVkVGFiLmNvbnRlbnR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJOYXY7IiwiaW1wb3J0IHtjc3N9IGZyb20gXCJAZW1vdGlvbi9jc3NcIjtcblxuY29uc3QgUGFnZUhlYWRlciA9ICh7dGV4dCwgbG9nb1VybH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtjc3NgXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEuMmVtO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiJHtsb2dvVXJsfVwiKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEuMmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfT5cbiAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICA8L2gxPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZUhlYWRlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgJ2Jvb3RzdHJhcCdcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZS9tYWluLmNzcydcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuY29uc3QgVmlldyA9ICh7Y2hpbGRyZW59KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbWluLXZoLTEwMCBkLWZsZXggZmxleC1jb2x1bW5cIj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWRhcmsganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBpZD1cInRpdGxlXCI+R3JheXNvbidzIDxlbT5UaGluZ3M8L2VtPjwvTGluaz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLWJzLXRhcmdldD1cIiNuYXZsaW5rc1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlIG1lLWF1dG9cIiBpZD1cIm5hdmxpbmtzXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IGFsaWduLXNlbGYtZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gYWN0aXZlXCI+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ncnNhbjQ1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5HaXRodWI8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBhY3RpdmVcIj48YSBocmVmPVwiaHR0cHM6Ly9saW5rZWRpbi5jb20vaW4vZ3JzYW40NVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+TGlua2VkSW48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBhY3RpdmVcIj48YSBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vQGdyc2FuNDVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiPllvdXR1YmU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPGhyLz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZ3ktMVwiPntjaGlsZHJlbn08L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgb3BhY2l0eS03NSBtdC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPHA+VGhpcyB3ZWJzaXRlIGFuZCBhbGwgcHJvamVjdHMsIHVubGVzcyBvdGhlcndpc2Ugc3RhdGVkLCBhcmUgbGljZW5zZWQgdW5kZXIgR05VLUdQTHYzPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWaWV3OyIsImltcG9ydCBEZXhpZSBmcm9tIFwiZGV4aWVcIjtcblxuZXhwb3J0IGNvbnN0IGNoZWNrbGlzdERCID0gbmV3IERleGllKCdjaGVja2xpc3RCdWlsZGVyJyk7XG5jaGVja2xpc3REQi52ZXJzaW9uKDEpLnN0b3Jlcyh7XG4gICAgc2VjdGlvbnM6IFwiJmlkLG5hbWUscGFyZW50U2VjdGlvbklkXCIsXG4gICAgaXRlbXM6IFwiJmlkLHBhcmVudFNlY3Rpb25JZFwiXG59KTtcblxuY2hlY2tsaXN0REIub24oXCJwb3B1bGF0ZVwiLCAoKSA9PiB7XG4gICAgbGV0IGluaXRpYWxTZWN0aW9uSWQgPSBjcnlwdG8ucmFuZG9tVVVJRCgpO1xuICAgIGNoZWNrbGlzdERCLnNlY3Rpb25zLmFkZCh7aWQ6IGluaXRpYWxTZWN0aW9uSWQsIG5hbWU6XCJOZXcgU2VjdGlvblwiLCBwYXJlbnRTZWN0aW9uSWQ6IG51bGwsIHNlY3Rpb25OdW1iZXI6IDF9KTtcbiAgICBjaGVja2xpc3REQi5pdGVtcy5hZGQoe2lkOiBjcnlwdG8ucmFuZG9tVVVJRCgpLCBwYXJlbnRTZWN0aW9uSWQ6IGluaXRpYWxTZWN0aW9uSWQsIGl0ZW1OdW1iZXI6IDEsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkFuIGV4YW1wbGUgaXRlbVwiLCBjb21wbGV0ZWQ6IGZhbHNlfSk7XG59KVxuXG5leHBvcnQgY29uc3QgYWRkRW1wdHlJdGVtID0gYXN5bmMgKHNlY3Rpb25JZCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG5ld0lkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcblxuICAgICAgICBhd2FpdCBjaGVja2xpc3REQi5pdGVtcy5hZGQoe1xuICAgICAgICAgICAgaWQ6IG5ld0lkLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQSBuZXcgYmxhbmsgSXRlbVwiLFxuICAgICAgICAgICAgcGFyZW50U2VjdGlvbklkOiBzZWN0aW9uSWRcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBhZGQgbmV3IGl0ZW06ICR7ZXJyfWApXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlSXRlbSA9IGFzeW5jIChpdGVtSWQsIHVwZGF0ZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGNoZWNrbGlzdERCLml0ZW1zLnVwZGF0ZShpdGVtSWQsIHVwZGF0ZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byB1cGRhdGUgaXRlbSAke2l0ZW1JZH06ICR7ZXJyfWApXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlSXRlbSA9IGFzeW5jIChpdGVtSWQpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBjaGVja2xpc3REQi5pdGVtcy5kZWxldGUoaXRlbUlkLCBudWxsKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIHJlbW92ZSBpdGVtICR7aXRlbUlkfTogJHtlcnJ9YClcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJztcblxuY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyb290RWxlbWVudCk7XG5cbmNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KHJvb3RFbGVtZW50KTtcbnJvb3QucmVuZGVyKDxBcHAgLz4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBWaWV3IGZyb20gXCIuLi9jb21wb25lbnRzL1ZpZXdcIjtcbmltcG9ydCBUYWJOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2L1RhYk5hdlwiO1xuaW1wb3J0IHt1c2VMaXZlUXVlcnl9IGZyb20gXCJkZXhpZS1yZWFjdC1ob29rc1wiO1xuaW1wb3J0IHthZGRFbXB0eUl0ZW0sIGNoZWNrbGlzdERCLCByZW1vdmVJdGVtLCB1cGRhdGVJdGVtfSBmcm9tIFwiLi4vZGF0YS9yZXBvc2l0b3J5XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm0vQnV0dG9uXCI7XG5pbXBvcnQgQ29sIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbFwiO1xuaW1wb3J0IENoZWNrYm94IGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm0vQ2hlY2tib3hcIjtcbmltcG9ydCBUZXh0QXJlYSBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtL1RleHRBcmVhXCI7XG5pbXBvcnQge0ZvbnRBd2Vzb21lSWNvbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHtmYU1pbnVzfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5cbmNvbnN0IFNlY3Rpb25WaWV3ID0gKHtzZWN0aW9uSWQsIHNlY3Rpb25OdW1iZXJ9KSA9PiB7XG4gICAgY29uc3QgaXRlbXMgPSB1c2VMaXZlUXVlcnkoYXN5bmMgKCkgPT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgY2hlY2tsaXN0REIuaXRlbXNcbiAgICAgICAgICAgIC53aGVyZSgncGFyZW50U2VjdGlvbklkJylcbiAgICAgICAgICAgIC5lcXVhbHMoc2VjdGlvbklkKVxuICAgICAgICAgICAgLnRvQXJyYXkoKVxuICAgIH0sIFtzZWN0aW9uSWRdKVxuICAgIGlmICghaXRlbXMpIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbD5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1kYXJrXCI+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJjb2wtMVwiPlN0ZXA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+RGVzY3JpcHRpb248L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwiY29sLTEgdGV4dC1jZW50ZXJcIj5Db21wbGV0ZWQ8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e1wibWFyZ2luUmlnaHRcIjogXCIwLjVlbVwifX0+e2Ake3NlY3Rpb25OdW1iZXJ9LiR7aWR4ICsgMX1gfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBuYW1lPXtgcmVtb3ZlSXRlbS0ke2l0ZW0uaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e18gPT4gcmVtb3ZlSXRlbShpdGVtLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXs8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTWludXN9Lz59Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48VGV4dEFyZWEgY2hpbGRyZW49e2l0ZW0uZGVzY3JpcHRpb259IG9uQ2hhbmdlPXt2YWwgPT4gdXBkYXRlSXRlbShpdGVtLmlkLCB7ZGVzY3JpcHRpb246IHZhbH0pfS8+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBuYW1lPXtgc2V0Q29tcGxldGVkLSR7aXRlbS5pZH1gfSBpbml0aWFsVmFsdWU9e2l0ZW0uY29tcGxldGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17dmFsID0+IHVwZGF0ZUl0ZW0oaXRlbS5pZCwge2NvbXBsZXRlZDogdmFsfSl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gbmFtZT17YGFkZEl0ZW0tJHtzZWN0aW9uSWR9YH0gdGV4dD1cIkFkZCBJdGVtXCIgc3R5bGU9e3t3aWR0aDogJzM1JSd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17KCkgPT4gYWRkRW1wdHlJdGVtKHNlY3Rpb25JZCl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBuYW1lPXtgYWRkU3Vic2VjdGlvbi0ke3NlY3Rpb25JZH1gfSB0ZXh0PVwiQWRkIFN1YnNlY3Rpb25cIiBzdHlsZT17e3dpZHRoOiAnMzUlJ319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXsoKSA9PiBhbGVydChcIndvcmsgaW4gcHJvZ3Jlc3NcIil9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvQ29sPlxuICAgIClcbn1cblxuY29uc3QgQ2hlY2tsaXN0QnVpbGRlciA9ICgpID0+IHtcbiAgICBjb25zdCBzZWN0aW9uTGlzdCA9IHVzZUxpdmVRdWVyeSgoKSA9PiBjaGVja2xpc3REQi5zZWN0aW9ucy50b0FycmF5KCkpO1xuICAgIGlmICghc2VjdGlvbkxpc3QpIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXc+XG4gICAgICAgICAgICA8ZGl2PkkgbWFkZSB0aGlzIHV0aWxpdHkgdG8gbWFrZSBjcmVhdGluZyBuaWNlIGxvb2tpbmcgcm9ja2V0cnkgY2hlY2tsaXN0cyBlYXNpZXIuLi4gdGhpbmsgb2YgaXQgYXMgYSByZWFsbHkgZmFuY3kgdG8tZG8gbGlzdDwvZGl2PlxuICAgICAgICAgICAgPFRhYk5hdiB0YWJzPXtcbiAgICAgICAgICAgICAgICBzZWN0aW9uTGlzdC5tYXAoKHMpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBzLmlkLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiA8U2VjdGlvblZpZXcgc2VjdGlvbklkPXtzLmlkfSBzZWN0aW9uTnVtYmVyPXtzLnNlY3Rpb25OdW1iZXJ9Lz5cbiAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIH0vPlxuICAgICAgICA8L1ZpZXc+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrbGlzdEJ1aWxkZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBWaWV3IGZyb20gXCIuLi9jb21wb25lbnRzL1ZpZXdcIjtcblxuY29uc3QgR09PU0UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXc+XG4gICAgICAgICAgICA8aDE+R3JheXNvbidzIE9kZCBPcGVyYXRpbmcgU3lzdGVtIEVuZGVhdm91cjwvaDE+XG4gICAgICAgICAgICA8aDQ+YWthIEdPT1NFPC9oND5cbiAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICA8aDY+TW9yZSBvbiB0aGlzIHNvb24uLi48L2g2PlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9naXRodWIuY29tL2dyc2FuNDUvR09PU0VcIj5SZXBvIExpbms8L2E+XG4gICAgICAgIDwvVmlldz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR09PU0U7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBWaWV3IGZyb20gXCIuLi9jb21wb25lbnRzL1ZpZXdcIlxuaW1wb3J0IE5hdkNvbHVtbiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXYvTmF2Q29sdW1uXCI7XG5pbXBvcnQgQ29sIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbFwiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgICA8Vmlldz5cbiAgICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgICAgICA8aDI+VGVzdDwvaDI+XG4gICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgPE5hdkNvbHVtbiB0aXRsZT1cIlByb2plY3RzXCI+XG4gICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm1haW4tbmF2LWxpbmtcIiB0bz1cImdvb3NlXCI+R09PU0UgKEdyYXlzb24ncyBPZGQgT3BlcmF0aW5nIFN5c3RlbSBFbmRlYXZvdXIpPC9MaW5rPlxuICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJtYWluLW5hdi1saW5rXCIgdG89XCJudG1cIj5Ob1RyYWNraW5nTWFya2VyczwvTGluaz5cbiAgICAgICAgICAgICA8L05hdkNvbHVtbj5cbiAgICAgICAgICAgICA8TmF2Q29sdW1uIHRpdGxlPVwiVXRpbGl0aWVzICYgRnVuIFRoaW5nc1wiPlxuICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJtYWluLW5hdi1saW5rXCIgdG89XCJvZ19uYW1lX2dlblwiPlwiT0dcIiBuYW1lIGdlbmVyYXRvcjwvTGluaz5cbiAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibWFpbi1uYXYtbGlua1wiIHRvPVwiY2hlY2tsaXN0X2J1aWxkZXJcIj5Sb2NrZXRyeSBDaGVja2xpc3QgQnVpbGRlciAoV0lQKTwvTGluaz5cbiAgICAgICAgICAgICA8L05hdkNvbHVtbj5cbiAgICAgICAgIDwvVmlldz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL2NvbXBvbmVudHMvVmlld1wiO1xuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvUGFnZUhlYWRlclwiO1xuaW1wb3J0IENvZGVCbG9jayBmcm9tIFwiLi4vY29tcG9uZW50cy9Db2RlQmxvY2tcIjtcblxuY29uc3QgTlRNID0gKCkgPT4ge1xuICAgIC8vIHl1Y2t5IGZvcm1hdHRpbmcgOihcbiAgICBjb25zdCBjb25maWdTbmlwcGV0ID0gYHtcbiAgXCJhdXRvU3RhcnRcIjogdHJ1ZSxcbiAgXCJob3N0c1wiOiBbXG4gICAge1xuICAgICAgXCJob3N0XCI6ICBcInN0cmluZ1wiLFxuICAgICAgXCJmbGFnc1wiOiBbXCJxdWVyeSBwYXJhbVwiLCBcInF1ZXJ5IHBhcmFtXCJdXG4gICAgfVxuICBdXG59YDtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3PlxuICAgICAgICAgICAgPFBhZ2VIZWFkZXIgdGV4dD17XCJOb1RyYWNraW5nTWFya2Vyc1wifSBsb2dvVXJsPXtcImh0dHBzOi8vcjIuZ3JzYW4ueHl6L05UTUxvZ28ucG5nXCJ9Lz5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ3JzYW40NS9Ob1RyYWNraW5nTWFya2Vyc1wiPkdpdGh1YiBSZXBvc2l0b3J5IExpbms8L2E+XG5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFRoaXMgaXMgYSBzaW1wbGUgV2luMzIgcHJvZ3JhbSBJIG1hZGUgdG8gcmVtb3ZlIHRob3NlIHBlc2t5IHVybCB0cmFja2luZyBtYXJrZXJzIGluIFVSTHMgY29waWVkIHRvXG4gICAgICAgICAgICAgICAgeW91ciBjbGlwYm9hcmQuXG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiaHR0cHM6Ly9yMi5ncnNhbi54eXovbnRtcHJldmlldy5wbmdcIn1cbiAgICAgICAgICAgICAgICAgICAgIGFsdD17XCJJbWFnZSBoaWdobGlnaHRpbmcgYSB0cmFja2luZyBtYXJrZXIgaW4gYSB1cmxcIn0vPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxzdWI+KFRoZXNlIFRoaW5ncyk8L3N1Yj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJneS00XCJ9PlxuICAgICAgICAgICAgICAgIDxoMj5Eb3dubG9hZDwvaDI+XG4gICAgICAgICAgICAgICAgPHA+R2V0IHRoZSBsYXRlc3QgdmVyc2lvbiBmcm9tIHRoZSBHaXRodWIgcmVsZWFzZXMgcGFnZSA8YSBocmVmPXtcImh0dHBzOi8vZ2l0aHViLmNvbS9ncnNhbjQ1L05vVHJhY2tpbmdNYXJrZXJzL3JlbGVhc2VzXCJ9PmhlcmU8L2E+LjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMj5Db25maWd1cmF0aW9uPC9oMj5cbiAgICAgICAgICAgICAgICA8cD5JIG1hZGUgdGhpcyBhcHBsaWNhdGlvbiBmb3IgbXlzZWxmIGFzIGEgZnVuIHByb2plY3QgdG8gbGVhcm4gV2luMzIuXG4gICAgICAgICAgICAgICAgICAgIEFzIHN1Y2gsIEkgZGVzaWduZWQgdGhlIGNvbmZpZ3VyYXRpb24gc3lzdGVtIHRvIGJlIHNvbWV0aGluZyB0aGF0J3MgY29udmVuaWVudCBmb3IgbWUuXG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgIFdlIHdvcmsgaW4gSlNPTiBoZXJlLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgUmlnaHQgY2xpY2sgb24gdGhlIGFwcGxpY2F0aW9uIGljb24gaW4gdGhlIHN5c3RlbSB0cmF5IGFuZCBzZWxlY3QgXCJPcGVuIENvbmZpZ3VyYXRpb24gRmlsZSxcIiBhbmQgeW91J2xsXG4gICAgICAgICAgICAgICAgICAgIGJlIHByZXNlbnRlZCB3aXRoIGEgZmlsZSBpbiB5b3VyIGRlZmF1bHQgdGV4dCBlZGl0b3IuIEhlcmUncyB0aGUgc2NoZW1hOlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8Q29kZUJsb2NrPlxuICAgICAgICAgICAgICAgICAgICB7Y29uZmlnU25pcHBldH1cbiAgICAgICAgICAgICAgICA8L0NvZGVCbG9jaz5cblxuICAgICAgICAgICAgICAgIEZyb20gdGhlIHRvcDpcbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48Y29kZT5hdXRvU3RhcnQ8L2NvZGU+IC0tIGJvb2xlYW4sIGRldGVybWluZXMgd2hldGhlciB0aGUgYXBwbGljYXRpb24gc3RhcnRzIG9uIHVzZXIgbG9naW48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGNvZGU+aG9zdHM8L2NvZGU+IC0tIGFycmF5IG9mIGhvc3QgY29uZmlndXJhdGlvbnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGNvZGU+aG9zdDwvY29kZT4gLS0gYSBob3N0bmFtZSB0byByZW1vdmUgbWFya2VycyBmcm9tLCBpLmUuIDxjb2RlPnlvdXR1LmJlPC9jb2RlPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48Y29kZT5mbGFnczwvY29kZT4gLS0gYXJyYXkgb2Ygc3RyaW5ncywgdGhlc2UgYXJlIHRoZSB0cmFja2luZyBrZXlzIHRvIHJlbW92ZSwgaS5lLiA8Y29kZT5zaTwvY29kZT4gZm9yIFlvdVR1YmU8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICA8cD5PbmNlIHlvdSdyZSBkb25lIGVkaXRpbmcsIHNhdmUgdGhlIGZpbGUgYW5kIHNlbGVjdCBcIlJlbG9hZCBDb25maWd1cmF0aW9uIEZpbGVcIiBpbiB0aGUgYXBwbGljYXRpb24gbWVudS48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICA8L1ZpZXc+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTlRNOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTm9NYXRjaCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2Pk5vdCBGb3VuZDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb01hdGNoOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vY29tcG9uZW50cy9WaWV3XCI7XG5pbXBvcnQgQ29sIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbFwiO1xuaW1wb3J0IFRvZ2dsZUJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtL1RvZ2dsZUJ1dHRvblwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtL0J1dHRvblwiO1xuXG5jbGFzcyBPR05hbWVHZW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG91dHB1dE5hbWU6IFwiXCIsXG4gICAgICAgICAgICBpbnB1dE5hbWU6IFwiXCIsXG4gICAgICAgICAgICBhZGRQcmVmaXg6IGZhbHNlLFxuICAgICAgICAgICAgYWRkU3VmZml4OiBmYWxzZSxcbiAgICAgICAgICAgIHJlcGxhY2VWb3dlbHM6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5wcmVmaXhlcyA9IFtcIlJlXCIsIFwiRGlzXCIsIFwiVW5cIiwgXCJEZVwiXTtcbiAgICAgICAgdGhpcy5zdWZmaXhlcyA9IFtcImljYXRlZFwiLCBcImlmaWVkXCIsIFwiaXR5XCIsIFwibmVzc1wiLCBcImlmeVwiXTtcbiAgICB9XG5cbiAgICB1cGRhdGVJbnB1dE5hbWUgPSAoZmllbGRDb250ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lucHV0TmFtZTogZmllbGRDb250ZW50ID09PSB1bmRlZmluZWQgPyAnJyA6IGZpZWxkQ29udGVudH0sIHRoaXMuZ2VuZXJhdGVOYW1lKVxuICAgIH1cblxuICAgIGdlbmVyYXRlTmFtZSA9ICgpID0+IHtcbiAgICAgICAgbGV0IGdlbmVyYXRlZE5hbWUgPSB0aGlzLnN0YXRlLmlucHV0TmFtZTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5yZXBsYWNlVm93ZWxzKSB7XG4gICAgICAgICAgICBsZXQgdm93ZWwgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpID8gJ3gnIDogJ3EnO1xuICAgICAgICAgICAgZ2VuZXJhdGVkTmFtZSA9IGdlbmVyYXRlZE5hbWUucmVwbGFjZUFsbCgvW2FlaW91XSg/IVthZWlvdV0pKz8vZywgdm93ZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWRkUHJlZml4KSB7XG4gICAgICAgICAgICBsZXQgcHJlZml4ID0gdGhpcy5wcmVmaXhlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnByZWZpeGVzLmxlbmd0aCldO1xuICAgICAgICAgICAgZ2VuZXJhdGVkTmFtZSA9IHByZWZpeCArIGdlbmVyYXRlZE5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hZGRTdWZmaXgpIHtcbiAgICAgICAgICAgIGxldCBzdWZmaXggPSB0aGlzLnN1ZmZpeGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuc3VmZml4ZXMubGVuZ3RoKV07XG4gICAgICAgICAgICBnZW5lcmF0ZWROYW1lID0gZ2VuZXJhdGVkTmFtZSArIHN1ZmZpeDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe291dHB1dE5hbWU6IGdlbmVyYXRlZE5hbWV9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFZpZXc+XG4gICAgICAgICAgICAgICAgPENvbCB3aWR0aD1cIjRcIiBjZW50ZXJlZD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlwiT0dcIiBOYW1lIEdlbmVyYXRvcjwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm9nbmFtZVwiPjxoMz5OYW1lIHRvIFwiT2dcIi1pZnk8L2gzPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJvZ25hbWVcIiBpZD1cIm9nbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgYmctZGFyayB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMudXBkYXRlSW5wdXROYW1lKGUudGFyZ2V0LnZhbHVlKX0vPlxuXG4gICAgICAgICAgICAgICAgICAgIDxoMz5cIk9nXCItaWZpZXJzOjwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwLXZlcnRpY2FsXCIgcm9sZT1cImdyb3VwXCIgc3R5bGU9e3t3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9nZ2xlQnV0dG9uIG5hbWU9XCJhZGRQcmVmaXhcIiB0ZXh0PVwiQWRkIGEgcHJlZml4P1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17ZSA9PiB0aGlzLnNldFN0YXRlKHthZGRQcmVmaXg6IGUudGFyZ2V0LmNoZWNrZWR9LCB0aGlzLmdlbmVyYXRlTmFtZSl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb2dnbGVCdXR0b24gbmFtZT1cImFkZFN1ZmZpeFwiIHRleHQ9XCJBZGQgYSBzdWZmaXg/XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXtlID0+IHRoaXMuc2V0U3RhdGUoe2FkZFN1ZmZpeDogZS50YXJnZXQuY2hlY2tlZH0sIHRoaXMuZ2VuZXJhdGVOYW1lKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvZ2dsZUJ1dHRvbiBuYW1lPVwicmVwbGFjZVZvd2Vsc1wiIHRleHQ9XCJSZXBsYWNlIHZvd2VscyB3aXRoICd4JyBvciAncSc/XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXtlID0+IHRoaXMuc2V0U3RhdGUoe3JlcGxhY2VWb3dlbHM6IGUudGFyZ2V0LmNoZWNrZWR9LCB0aGlzLmdlbmVyYXRlTmFtZSl9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPENvbCBjZW50ZXJlZD17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBpZD1cImdlbmVyYXRlZE5hbWVcIiBzdHlsZT17e2ZvbnRXZWlnaHQ6IDEwMCwgdGV4dEFsaWduOiAnY2VudGVyJywgdmlzaWJpbGl0eTogdGhpcy5zdGF0ZS5pbnB1dE5hbWUgPyAndmlzaWJsZScgOiAnaGlkZGVuJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUub3V0cHV0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBuYW1lPVwiZ2VuZXJhdGVOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiUmVnZW5lcmF0ZSBOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e18gPT4gdGhpcy5nZW5lcmF0ZU5hbWUoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiAnNTAlJywgdmlzaWJpbGl0eTogdGhpcy5zdGF0ZS5pbnB1dE5hbWUgPyAndmlzaWJsZScgOiAnaGlkZGVuJ319Lz5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9HTmFtZUdlbjsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qXHJcbiBBYm92ZSBmb250IGlzIFJvYm90byBMaWdodCAoMzAwKVxyXG4gKi9cclxuXHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjZmFmYWZhXHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogXCItIFwiO1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiAjOGVhZGZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcblxyXG5hOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNmI4OWUwO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7O0VBRUU7O0FBRUY7SUFDSSx5QkFBeUI7SUFDekIsaUNBQWlDO0lBQ2pDO0FBQ0o7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsMEJBQTBCO0FBQzlCOzs7QUFHQTtJQUNJLGNBQWM7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcbi8qXFxyXFxuIEFib3ZlIGZvbnQgaXMgUm9ib3RvIExpZ2h0ICgzMDApXFxyXFxuICovXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6ICNmYWZhZmFcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IFxcXCItIFxcXCI7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgICBjb2xvcjogIzhlYWRmZjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbmE6aG92ZXIge1xcclxcbiAgICBjb2xvcjogIzZiODllMDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUm91dGUiLCJIYXNoUm91dGVyIiwiUm91dGVyIiwiUm91dGVzIiwiSG9tZSIsIk9HTmFtZUdlbiIsIkdPT1NFIiwiQ2hlY2tsaXN0QnVpbGRlciIsIk5vTWF0Y2giLCJOVE0iLCJobGpzIiwianNvbiIsImpzeCIsIl9qc3giLCJqc3hzIiwiX2pzeHMiLCJBcHAiLCJyZWdpc3Rlckxhbmd1YWdlIiwiY2hpbGRyZW4iLCJleGFjdCIsInBhdGgiLCJlbGVtZW50Iiwic3RhdHVzIiwiQ29kZUJsb2NrIiwiX3JlZiIsImNsYXNzTmFtZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiaGlnaGxpZ2h0QXV0byIsInZhbHVlIiwiQ29sIiwid2lkdGgiLCJjZW50ZXJlZCIsImNsYXNzTmFtZXMiLCJjb25jYXQiLCJ1bmRlZmluZWQiLCJCdXR0b24iLCJuYW1lIiwidGV4dCIsImFjdGlvbiIsInN0eWxlIiwib25DbGljayIsImlkIiwidXNlU3RhdGUiLCJGb250QXdlc29tZUljb24iLCJmYUNoZWNrIiwiZmFYbWFyayIsIkNoZWNrYm94IiwiaW5pdGlhbFZhbHVlIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJkb1VwZGF0ZSIsIm5ld1ZhbHVlIiwidHlwZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImh0bWxGb3IiLCJmaXhlZFdpZHRoIiwiaWNvbiIsIlRleHRBcmVhIiwiZm9ybWF0dGVyIiwiY29udGVudCIsInNldENvbnRlbnQiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImVkaXRpbmciLCJzZXRFZGl0aW5nIiwib25CbHVyIiwiZGVmYXVsdFZhbHVlIiwiYXV0b0ZvY3VzIiwiVG9nZ2xlQnV0dG9uIiwiQ2hpbGRyZW4iLCJOYXZDb2x1bW4iLCJ0aXRsZSIsIm1hcCIsImNoaWxkIiwiVGFiTmF2IiwidGFicyIsInNlbGVjdGVkVGFiSWQiLCJzZXRTZWxlY3RlZFRhYklkIiwic2VsZWN0ZWRUYWIiLCJmaW5kIiwidGFiIiwidCIsImNzcyIsIlBhZ2VIZWFkZXIiLCJsb2dvVXJsIiwiX3RlbXBsYXRlT2JqZWN0IiwiX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbCIsIkxpbmsiLCJWaWV3IiwidG8iLCJocmVmIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93Iiwia2V5IiwiaW5mbyIsImVycm9yIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcnIiLCJEZXhpZSIsImNoZWNrbGlzdERCIiwidmVyc2lvbiIsInN0b3JlcyIsInNlY3Rpb25zIiwiaXRlbXMiLCJvbiIsImluaXRpYWxTZWN0aW9uSWQiLCJjcnlwdG8iLCJyYW5kb21VVUlEIiwiYWRkIiwicGFyZW50U2VjdGlvbklkIiwic2VjdGlvbk51bWJlciIsIml0ZW1OdW1iZXIiLCJkZXNjcmlwdGlvbiIsImNvbXBsZXRlZCIsImFkZEVtcHR5SXRlbSIsIl9jYWxsZWUiLCJzZWN0aW9uSWQiLCJuZXdJZCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJ0MCIsImNvbnNvbGUiLCJfeCIsInVwZGF0ZUl0ZW0iLCJfcmVmMiIsIl9jYWxsZWUyIiwiaXRlbUlkIiwidXBkYXRlIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiX3gyIiwiX3gzIiwicmVtb3ZlSXRlbSIsIl9yZWYzIiwiX2NhbGxlZTMiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJfeDQiLCJSZWFjdERPTSIsInJvb3RFbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwicm9vdCIsImNyZWF0ZVJvb3QiLCJyZW5kZXIiLCJ1c2VMaXZlUXVlcnkiLCJmYU1pbnVzIiwiU2VjdGlvblZpZXciLCJ3aGVyZSIsImVxdWFscyIsInRvQXJyYXkiLCJzY29wZSIsIml0ZW0iLCJpZHgiLCJfIiwidmFsIiwiY29sU3BhbiIsImFsZXJ0Iiwic2VjdGlvbkxpc3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJjb25maWdTbmlwcGV0Iiwic3JjIiwiYWx0IiwiX1JlYWN0JENvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwiX2RlZmluZVByb3BlcnR5IiwiZmllbGRDb250ZW50Iiwic2V0U3RhdGUiLCJpbnB1dE5hbWUiLCJnZW5lcmF0ZU5hbWUiLCJnZW5lcmF0ZWROYW1lIiwic3RhdGUiLCJyZXBsYWNlVm93ZWxzIiwidm93ZWwiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJyZXBsYWNlQWxsIiwiYWRkUHJlZml4IiwicHJlZml4IiwicHJlZml4ZXMiLCJmbG9vciIsImFkZFN1ZmZpeCIsInN1ZmZpeCIsInN1ZmZpeGVzIiwib3V0cHV0TmFtZSIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsIl90aGlzMiIsInVwZGF0ZUlucHV0TmFtZSIsInJvbGUiLCJmb250V2VpZ2h0IiwidGV4dEFsaWduIiwidmlzaWJpbGl0eSIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=