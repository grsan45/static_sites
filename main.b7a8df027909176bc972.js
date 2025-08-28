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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ 4976);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ 7767);
/* harmony import */ var _views_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/Home */ 1716);
/* harmony import */ var _views_OGNameGen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/OGNameGen */ 370);
/* harmony import */ var _views_GOOSE__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/GOOSE */ 8412);
/* harmony import */ var _views_ChecklistBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/ChecklistBuilder */ 1012);
/* harmony import */ var _views_NoMatch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/NoMatch */ 3997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ 4848);








var App = function App() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.HashRouter, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Routes, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
          exact: true,
          path: "/",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_views_Home__WEBPACK_IMPORTED_MODULE_1__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
          exact: true,
          path: "og_name_gen",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_views_OGNameGen__WEBPACK_IMPORTED_MODULE_2__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
          exact: true,
          path: "goose",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_views_GOOSE__WEBPACK_IMPORTED_MODULE_3__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
          exact: true,
          path: "checklist_builder",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_views_ChecklistBuilder__WEBPACK_IMPORTED_MODULE_4__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
          path: "*",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_views_NoMatch__WEBPACK_IMPORTED_MODULE_5__["default"], {
            status: 404
          })
        })]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ 4848);





var View = function View(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "container-fluid",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("nav", {
      className: "navbar navbar-expand-lg navbar-dark justify-content-between",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
        className: "navbar-brand",
        id: "title",
        href: "/",
        children: ["Grayson's ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("em", {
          children: "things"
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
              href: "https://x.com/grsan45",
              className: "nav-link",
              children: "X/Twitter"
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
      className: "row gy-5",
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "container-fluid fixed-bottom opacity-75",
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ 4976);
/* harmony import */ var _components_View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/View */ 7958);
/* harmony import */ var _components_Nav_NavColumn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Nav/NavColumn */ 6226);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ 4848);





var Home = function Home() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_View__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Nav_NavColumn__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "Projects",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
        to: "goose",
        children: "GOOSE (Grayson's Odd Operating System Endeavour)"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_Nav_NavColumn__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "Utilities & Fun Things",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
        to: "og_name_gen",
        children: "\"OG\" name generator"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
        to: "checklist_builder",
        children: "Rocketry Checklist Builder (WIP)"
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

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
    background-color:#1a1a1a
}

ul {
    list-style-type: "- ";
}

* {
    font-family: 'Roboto', sans-serif;
    color:#fafafa
}`, "",{"version":3,"sources":["webpack://./src/style/main.css"],"names":[],"mappings":"AACA;;EAEE;;AAEF;IACI;AACJ;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,iCAAiC;IACjC;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');\r\n/*\r\n Above font is Roboto Light (300)\r\n */\r\n\r\nbody {\r\n    background-color:#1a1a1a\r\n}\r\n\r\nul {\r\n    list-style-type: \"- \";\r\n}\r\n\r\n* {\r\n    font-family: 'Roboto', sans-serif;\r\n    color:#fafafa\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxzRkFBc0YsTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSw4R0FBOEcsZ0VBQWdFLHFDQUFxQyxZQUFZLGdDQUFnQyxLQUFLLFdBQVcsMENBQTBDLDBCQUEwQixtQkFBbUI7QUFDemdCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJ2QyxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFxRztBQUNyRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHFGQUFPOzs7O0FBSStDO0FBQ3ZFLE9BQU8saUVBQWUscUZBQU8sSUFBSSxxRkFBTyxVQUFVLHFGQUFPLG1CQUFtQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3Jhc3Nfc3RhdGljX3NpdGVzLy4vc3JjL2NvbXBvbmVudHMvQXBwLmpzeCIsIndlYnBhY2s6Ly9ncmFzc19zdGF0aWNfc2l0ZXMvLi9zcmMvY29tcG9uZW50cy9Db2wuanN4Iiwid2VicGFjazovL2dyYXNzX3N0YXRpY19zaXRlcy8uL3NyYy9jb21wb25lbnRzL0Zvcm0vQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly9ncmFzc19zdGF0aWNfc2l0ZXMvLi9zcmMvY29tcG9uZW50cy9Gb3JtL0NoZWNrYm94LmpzeCIsIndlYnBhY2s6Ly9ncmFzc19zdGF0aWNfc2l0ZXMvLi9zcmMvY29tcG9uZW50cy9Gb3JtL1RleHRBcmVhLmpzeCIsIndlYnBhY2s6Ly9ncmFzc19zdGF0aWNfc2l0ZXMvLi9zcmMvY29tcG9uZW50cy9Gb3JtL1RvZ2dsZUJ1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vZ3Jhc3Nfc3RhdGljX3NpdGVzLy4vc3JjL2NvbXBvbmVudHMvTmF2L05hdkNvbHVtbi5qc3giLCJ3ZWJwYWNrOi8vZ3Jhc3Nfc3RhdGljX3NpdGVzLy4vc3JjL2NvbXBvbmVudHMvTmF2L1RhYk5hdi5qc3giLCJ3ZWJwYWNrOi8vZ3Jhc3Nfc3RhdGljX3NpdGVzLy4vc3JjL2NvbXBvbmVudHMvVmlldy5qc3giLCJ3ZWJwYWNrOi8vZ3Jhc3Nfc3RhdGljX3NpdGVzLy4vc3JjL2RhdGEvcmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly9ncmFzc19zdGF0aWNfc2l0ZXMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3Jhc3Nfc3RhdGljX3NpdGVzLy4vc3JjL3ZpZXdzL0NoZWNrbGlzdEJ1aWxkZXIuanN4Iiwid2VicGFjazovL2dyYXNzX3N0YXRpY19zaXRlcy8uL3NyYy92aWV3cy9HT09TRS5qc3giLCJ3ZWJwYWNrOi8vZ3Jhc3Nfc3RhdGljX3NpdGVzLy4vc3JjL3ZpZXdzL0hvbWUuanN4Iiwid2VicGFjazovL2dyYXNzX3N0YXRpY19zaXRlcy8uL3NyYy92aWV3cy9Ob01hdGNoLmpzeCIsIndlYnBhY2s6Ly9ncmFzc19zdGF0aWNfc2l0ZXMvLi9zcmMvdmlld3MvT0dOYW1lR2VuLmpzeCIsIndlYnBhY2s6Ly9ncmFzc19zdGF0aWNfc2l0ZXMvLi9zcmMvc3R5bGUvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vZ3Jhc3Nfc3RhdGljX3NpdGVzLy4vc3JjL3N0eWxlL21haW4uY3NzPzgzMzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtSb3V0ZSwgSGFzaFJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlc30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IEhvbWUgZnJvbSBcIi4uL3ZpZXdzL0hvbWVcIlxuaW1wb3J0IE9HTmFtZUdlbiBmcm9tIFwiLi4vdmlld3MvT0dOYW1lR2VuXCJcbmltcG9ydCBHT09TRSBmcm9tIFwiLi4vdmlld3MvR09PU0VcIjtcbmltcG9ydCBDaGVja2xpc3RCdWlsZGVyIGZyb20gXCIuLi92aWV3cy9DaGVja2xpc3RCdWlsZGVyXCI7XG5pbXBvcnQgTm9NYXRjaCBmcm9tIFwiLi4vdmlld3MvTm9NYXRjaFwiO1xuXG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Um91dGVyPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZSAvPn0vPlxuXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwib2dfbmFtZV9nZW5cIiBlbGVtZW50PXs8T0dOYW1lR2VuIC8+fS8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiZ29vc2VcIiBlbGVtZW50PXs8R09PU0UgLz59Lz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCJjaGVja2xpc3RfYnVpbGRlclwiIGVsZW1lbnQ9ezxDaGVja2xpc3RCdWlsZGVyIC8+fS8+XG5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgZWxlbWVudD17PE5vTWF0Y2ggc3RhdHVzPXs0MDR9IC8+fS8+XG4gICAgICAgICAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Sb3V0ZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IENvbCA9ICh7d2lkdGgsIGNlbnRlcmVkLCBjaGlsZHJlbn0pID0+IHtcbiAgICBsZXQgY2xhc3NOYW1lcyA9IGBkLWZsZXggZmxleC1jb2x1bW4gY29sLW1kJHt3aWR0aCA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IFwiLVwiICsgd2lkdGh9IGBcbiAgICBpZiAoY2VudGVyZWQpXG4gICAgICAgIGNsYXNzTmFtZXMgKz0gXCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiXG4gICAgZWxzZVxuICAgICAgICBjbGFzc05hbWVzICs9IFwianVzdGlmeS1jb250ZW50LXN0YXJ0IGFsaWduLWl0ZW1zLXN0YXJ0XCJcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQnV0dG9uID0gKHtuYW1lLCB0ZXh0LCBhY3Rpb24sIHN0eWxlfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b24gb25DbGljaz17YWN0aW9ufSBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiIGlkPXtuYW1lfSBzdHlsZT17c3R5bGV9Pnt0ZXh0fTwvYnV0dG9uPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtGb250QXdlc29tZUljb259IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7ZmFDaGVjaywgZmFYbWFya30gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuXG5jb25zdCBDaGVja2JveCA9ICh7bmFtZSwgYWN0aW9uLCBpbml0aWFsVmFsdWV9KSA9PiB7XG4gICAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlIHx8IGZhbHNlKVxuICAgIGNvbnN0IGRvVXBkYXRlID0gKG5ld1ZhbHVlKSA9PiB7XG4gICAgICAgIHNldENoZWNrZWQobmV3VmFsdWUpO1xuICAgICAgICBpZiAoYWN0aW9uKVxuICAgICAgICAgICAgYWN0aW9uKG5ld1ZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9e25hbWV9IGNsYXNzTmFtZT1cImJ0bi1jaGVja1wiIGlkPXtuYW1lfSBvbkNoYW5nZT17ZSA9PiBkb1VwZGF0ZShlLnRhcmdldC5jaGVja2VkKX0gY2hlY2tlZD17Y2hlY2tlZH0gLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtuYW1lfSBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiIGlkPXtuYW1lICsgXCJMYWJlbFwifT48Rm9udEF3ZXNvbWVJY29uIGZpeGVkV2lkdGg9e3RydWV9IGljb249e2NoZWNrZWQgPyBmYUNoZWNrIDogZmFYbWFya30gLz48L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3g7XG4iLCJpbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgVGV4dEFyZWEgPSAoe2NoaWxkcmVuLCBvbkNoYW5nZSwgZm9ybWF0dGVyfSkgPT4ge1xuICAgIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKGNoaWxkcmVuKTtcbiAgICBjb25zdCBbZWRpdGluZywgc2V0RWRpdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBpZiAoZWRpdGluZykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cInctMTAwIGZvcm0tY29udHJvbCBiZy1kYXJrIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldENvbnRlbnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFZGl0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UoY29udGVudClcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Y29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXMvPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCBmb3JtLWNvbnRyb2wgYmctZGFyayB0ZXh0LXdoaXRlXCIgb25DbGljaz17KCkgPT4gc2V0RWRpdGluZyh0cnVlKX0+XG4gICAgICAgICAgICB7Zm9ybWF0dGVyID8gZm9ybWF0dGVyKGNvbnRlbnQpIDogY29udGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0QXJlYTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFRvZ2dsZUJ1dHRvbiA9ICh7bmFtZSwgdGV4dCwgYWN0aW9ufSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT17bmFtZX0gY2xhc3NOYW1lPVwiYnRuLWNoZWNrXCIgaWQ9e25hbWV9IG9uQ2hhbmdlPXthY3Rpb259IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17bmFtZX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnlcIiBpZD17bmFtZSArIFwiTGFiZWxcIn0+e3RleHR9PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZUJ1dHRvbjsiLCJpbXBvcnQgUmVhY3QsIHtDaGlsZHJlbn0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IE5hdkNvbHVtbiA9ICh7dGl0bGUsIGNoaWxkcmVufSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydCBmbGV4LWNvbHVtblwiPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxoMz57dGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICB7Q2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBjaGlsZCA9PlxuICAgICAgICAgICAgICAgICAgICA8bGk+e2NoaWxkfTwvbGk+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZDb2x1bW47IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBUYWJOYXYgPSAoe3RhYnN9KSA9PiB7XG4gICAgY29uc3QgW3NlbGVjdGVkVGFiSWQsIHNldFNlbGVjdGVkVGFiSWRdID0gdXNlU3RhdGUodGFic1swXS5pZClcbiAgICBjb25zdCBzZWxlY3RlZFRhYiA9IHRhYnMuZmluZCh0YWIgPT4gdGFiLmlkID09PSBzZWxlY3RlZFRhYklkKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzXCI+XG4gICAgICAgICAgICAgICAge3RhYnMubWFwKHQgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBrZXk9e3QuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2BuYXYtbGluayAke3NlbGVjdGVkVGFiSWQ9PT10LmlkID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRUYWJJZCh0LmlkKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8ZGl2IGtleT17c2VsZWN0ZWRUYWJJZH0gY2xhc3NOYW1lPVwiZ3ktNVwiPlxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZFRhYi5jb250ZW50fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFiTmF2OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAnYm9vdHN0cmFwJ1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlL21haW4uY3NzJ1xuXG5jb25zdCBWaWV3ID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItZGFyayBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGlkPVwidGl0bGVcIiBocmVmPVwiL1wiPkdyYXlzb24ncyA8ZW0+dGhpbmdzPC9lbT48L2E+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS1icy10YXJnZXQ9XCIjbmF2bGlua3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZSBtZS1hdXRvXCIgaWQ9XCJuYXZsaW5rc1wiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBhbGlnbi1zZWxmLWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGFjdGl2ZVwiPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ3JzYW40NVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+R2l0aHViPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gYWN0aXZlXCI+PGEgaHJlZj1cImh0dHBzOi8veC5jb20vZ3JzYW40NVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+WC9Ud2l0dGVyPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gYWN0aXZlXCI+PGEgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL0BncnNhbjQ1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5Zb3V0dWJlPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDxoci8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGd5LTVcIj57Y2hpbGRyZW59PC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGZpeGVkLWJvdHRvbSBvcGFjaXR5LTc1XCI+XG4gICAgICAgICAgICAgICAgPHA+VGhpcyB3ZWJzaXRlIGFuZCBhbGwgcHJvamVjdHMsIHVubGVzcyBvdGhlcndpc2Ugc3RhdGVkLCBhcmUgbGljZW5zZWQgdW5kZXIgR05VLUdQTHYzPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWaWV3OyIsImltcG9ydCBEZXhpZSBmcm9tIFwiZGV4aWVcIjtcblxuZXhwb3J0IGNvbnN0IGNoZWNrbGlzdERCID0gbmV3IERleGllKCdjaGVja2xpc3RCdWlsZGVyJyk7XG5jaGVja2xpc3REQi52ZXJzaW9uKDEpLnN0b3Jlcyh7XG4gICAgc2VjdGlvbnM6IFwiJmlkLG5hbWUscGFyZW50U2VjdGlvbklkXCIsXG4gICAgaXRlbXM6IFwiJmlkLHBhcmVudFNlY3Rpb25JZFwiXG59KTtcblxuY2hlY2tsaXN0REIub24oXCJwb3B1bGF0ZVwiLCAoKSA9PiB7XG4gICAgbGV0IGluaXRpYWxTZWN0aW9uSWQgPSBjcnlwdG8ucmFuZG9tVVVJRCgpO1xuICAgIGNoZWNrbGlzdERCLnNlY3Rpb25zLmFkZCh7aWQ6IGluaXRpYWxTZWN0aW9uSWQsIG5hbWU6XCJOZXcgU2VjdGlvblwiLCBwYXJlbnRTZWN0aW9uSWQ6IG51bGwsIHNlY3Rpb25OdW1iZXI6IDF9KTtcbiAgICBjaGVja2xpc3REQi5pdGVtcy5hZGQoe2lkOiBjcnlwdG8ucmFuZG9tVVVJRCgpLCBwYXJlbnRTZWN0aW9uSWQ6IGluaXRpYWxTZWN0aW9uSWQsIGl0ZW1OdW1iZXI6IDEsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkFuIGV4YW1wbGUgaXRlbVwiLCBjb21wbGV0ZWQ6IGZhbHNlfSk7XG59KVxuXG5leHBvcnQgY29uc3QgYWRkRW1wdHlJdGVtID0gYXN5bmMgKHNlY3Rpb25JZCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG5ld0lkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcblxuICAgICAgICBhd2FpdCBjaGVja2xpc3REQi5pdGVtcy5hZGQoe1xuICAgICAgICAgICAgaWQ6IG5ld0lkLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQSBuZXcgYmxhbmsgSXRlbVwiLFxuICAgICAgICAgICAgcGFyZW50U2VjdGlvbklkOiBzZWN0aW9uSWRcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBhZGQgbmV3IGl0ZW06ICR7ZXJyfWApXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlSXRlbSA9IGFzeW5jIChpdGVtSWQsIHVwZGF0ZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGNoZWNrbGlzdERCLml0ZW1zLnVwZGF0ZShpdGVtSWQsIHVwZGF0ZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byB1cGRhdGUgaXRlbSAke2l0ZW1JZH06ICR7ZXJyfWApXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlSXRlbSA9IGFzeW5jIChpdGVtSWQpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBjaGVja2xpc3REQi5pdGVtcy5kZWxldGUoaXRlbUlkLCBudWxsKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIHJlbW92ZSBpdGVtICR7aXRlbUlkfTogJHtlcnJ9YClcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJztcblxuY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyb290RWxlbWVudCk7XG5cbmNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KHJvb3RFbGVtZW50KTtcbnJvb3QucmVuZGVyKDxBcHAgLz4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBWaWV3IGZyb20gXCIuLi9jb21wb25lbnRzL1ZpZXdcIjtcbmltcG9ydCBUYWJOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2L1RhYk5hdlwiO1xuaW1wb3J0IHt1c2VMaXZlUXVlcnl9IGZyb20gXCJkZXhpZS1yZWFjdC1ob29rc1wiO1xuaW1wb3J0IHthZGRFbXB0eUl0ZW0sIGNoZWNrbGlzdERCLCByZW1vdmVJdGVtLCB1cGRhdGVJdGVtfSBmcm9tIFwiLi4vZGF0YS9yZXBvc2l0b3J5XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm0vQnV0dG9uXCI7XG5pbXBvcnQgQ29sIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbFwiO1xuaW1wb3J0IENoZWNrYm94IGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm0vQ2hlY2tib3hcIjtcbmltcG9ydCBUZXh0QXJlYSBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtL1RleHRBcmVhXCI7XG5pbXBvcnQge0ZvbnRBd2Vzb21lSWNvbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHtmYU1pbnVzfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5cbmNvbnN0IFNlY3Rpb25WaWV3ID0gKHtzZWN0aW9uSWQsIHNlY3Rpb25OdW1iZXJ9KSA9PiB7XG4gICAgY29uc3QgaXRlbXMgPSB1c2VMaXZlUXVlcnkoYXN5bmMgKCkgPT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgY2hlY2tsaXN0REIuaXRlbXNcbiAgICAgICAgICAgIC53aGVyZSgncGFyZW50U2VjdGlvbklkJylcbiAgICAgICAgICAgIC5lcXVhbHMoc2VjdGlvbklkKVxuICAgICAgICAgICAgLnRvQXJyYXkoKVxuICAgIH0sIFtzZWN0aW9uSWRdKVxuICAgIGlmICghaXRlbXMpIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbD5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1kYXJrXCI+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJjb2wtMVwiPlN0ZXA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+RGVzY3JpcHRpb248L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwiY29sLTEgdGV4dC1jZW50ZXJcIj5Db21wbGV0ZWQ8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e1wibWFyZ2luUmlnaHRcIjogXCIwLjVlbVwifX0+e2Ake3NlY3Rpb25OdW1iZXJ9LiR7aWR4ICsgMX1gfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBuYW1lPXtgcmVtb3ZlSXRlbS0ke2l0ZW0uaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e18gPT4gcmVtb3ZlSXRlbShpdGVtLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXs8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTWludXN9Lz59Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48VGV4dEFyZWEgY2hpbGRyZW49e2l0ZW0uZGVzY3JpcHRpb259IG9uQ2hhbmdlPXt2YWwgPT4gdXBkYXRlSXRlbShpdGVtLmlkLCB7ZGVzY3JpcHRpb246IHZhbH0pfS8+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBuYW1lPXtgc2V0Q29tcGxldGVkLSR7aXRlbS5pZH1gfSBpbml0aWFsVmFsdWU9e2l0ZW0uY29tcGxldGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17dmFsID0+IHVwZGF0ZUl0ZW0oaXRlbS5pZCwge2NvbXBsZXRlZDogdmFsfSl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gbmFtZT17YGFkZEl0ZW0tJHtzZWN0aW9uSWR9YH0gdGV4dD1cIkFkZCBJdGVtXCIgc3R5bGU9e3t3aWR0aDogJzM1JSd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17KCkgPT4gYWRkRW1wdHlJdGVtKHNlY3Rpb25JZCl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBuYW1lPXtgYWRkU3Vic2VjdGlvbi0ke3NlY3Rpb25JZH1gfSB0ZXh0PVwiQWRkIFN1YnNlY3Rpb25cIiBzdHlsZT17e3dpZHRoOiAnMzUlJ319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXsoKSA9PiBhbGVydChcIndvcmsgaW4gcHJvZ3Jlc3NcIil9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvQ29sPlxuICAgIClcbn1cblxuY29uc3QgQ2hlY2tsaXN0QnVpbGRlciA9ICgpID0+IHtcbiAgICBjb25zdCBzZWN0aW9uTGlzdCA9IHVzZUxpdmVRdWVyeSgoKSA9PiBjaGVja2xpc3REQi5zZWN0aW9ucy50b0FycmF5KCkpO1xuICAgIGlmICghc2VjdGlvbkxpc3QpIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXc+XG4gICAgICAgICAgICA8ZGl2PkkgbWFkZSB0aGlzIHV0aWxpdHkgdG8gbWFrZSBjcmVhdGluZyBuaWNlIGxvb2tpbmcgcm9ja2V0cnkgY2hlY2tsaXN0cyBlYXNpZXIuLi4gdGhpbmsgb2YgaXQgYXMgYSByZWFsbHkgZmFuY3kgdG8tZG8gbGlzdDwvZGl2PlxuICAgICAgICAgICAgPFRhYk5hdiB0YWJzPXtcbiAgICAgICAgICAgICAgICBzZWN0aW9uTGlzdC5tYXAoKHMpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBzLmlkLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiA8U2VjdGlvblZpZXcgc2VjdGlvbklkPXtzLmlkfSBzZWN0aW9uTnVtYmVyPXtzLnNlY3Rpb25OdW1iZXJ9Lz5cbiAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIH0vPlxuICAgICAgICA8L1ZpZXc+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrbGlzdEJ1aWxkZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBWaWV3IGZyb20gXCIuLi9jb21wb25lbnRzL1ZpZXdcIjtcblxuY29uc3QgR09PU0UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXc+XG4gICAgICAgICAgICA8aDE+R3JheXNvbidzIE9kZCBPcGVyYXRpbmcgU3lzdGVtIEVuZGVhdm91cjwvaDE+XG4gICAgICAgICAgICA8aDQ+YWthIEdPT1NFPC9oND5cbiAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICA8aDY+TW9yZSBvbiB0aGlzIHNvb24uLi48L2g2PlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9naXRodWIuY29tL2dyc2FuNDUvR09PU0VcIj5SZXBvIExpbms8L2E+XG4gICAgICAgIDwvVmlldz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR09PU0U7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBWaWV3IGZyb20gXCIuLi9jb21wb25lbnRzL1ZpZXdcIlxuaW1wb3J0IE5hdkNvbHVtbiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXYvTmF2Q29sdW1uXCI7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgIDxWaWV3PlxuICAgICAgICAgICAgIDxOYXZDb2x1bW4gdGl0bGU9XCJQcm9qZWN0c1wiPlxuICAgICAgICAgICAgICAgICA8TGluayB0bz1cImdvb3NlXCI+R09PU0UgKEdyYXlzb24ncyBPZGQgT3BlcmF0aW5nIFN5c3RlbSBFbmRlYXZvdXIpPC9MaW5rPlxuICAgICAgICAgICAgIDwvTmF2Q29sdW1uPlxuICAgICAgICAgICAgIDxOYXZDb2x1bW4gdGl0bGU9XCJVdGlsaXRpZXMgJiBGdW4gVGhpbmdzXCI+XG4gICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwib2dfbmFtZV9nZW5cIj5cIk9HXCIgbmFtZSBnZW5lcmF0b3I8L0xpbms+XG4gICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiY2hlY2tsaXN0X2J1aWxkZXJcIj5Sb2NrZXRyeSBDaGVja2xpc3QgQnVpbGRlciAoV0lQKTwvTGluaz5cbiAgICAgICAgICAgICA8L05hdkNvbHVtbj5cbiAgICAgICAgIDwvVmlldz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IE5vTWF0Y2ggPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5Ob3QgRm91bmQ8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTm9NYXRjaDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL2NvbXBvbmVudHMvVmlld1wiO1xuaW1wb3J0IENvbCBmcm9tIFwiLi4vY29tcG9uZW50cy9Db2xcIjtcbmltcG9ydCBUb2dnbGVCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybS9Ub2dnbGVCdXR0b25cIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybS9CdXR0b25cIjtcblxuY2xhc3MgT0dOYW1lR2VuIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvdXRwdXROYW1lOiBcIlwiLFxuICAgICAgICAgICAgaW5wdXROYW1lOiBcIlwiLFxuICAgICAgICAgICAgYWRkUHJlZml4OiBmYWxzZSxcbiAgICAgICAgICAgIGFkZFN1ZmZpeDogZmFsc2UsXG4gICAgICAgICAgICByZXBsYWNlVm93ZWxzOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucHJlZml4ZXMgPSBbXCJSZVwiLCBcIkRpc1wiLCBcIlVuXCIsIFwiRGVcIl07XG4gICAgICAgIHRoaXMuc3VmZml4ZXMgPSBbXCJpY2F0ZWRcIiwgXCJpZmllZFwiLCBcIml0eVwiLCBcIm5lc3NcIiwgXCJpZnlcIl07XG4gICAgfVxuXG4gICAgdXBkYXRlSW5wdXROYW1lID0gKGZpZWxkQ29udGVudCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpbnB1dE5hbWU6IGZpZWxkQ29udGVudCA9PT0gdW5kZWZpbmVkID8gJycgOiBmaWVsZENvbnRlbnR9LCB0aGlzLmdlbmVyYXRlTmFtZSlcbiAgICB9XG5cbiAgICBnZW5lcmF0ZU5hbWUgPSAoKSA9PiB7XG4gICAgICAgIGxldCBnZW5lcmF0ZWROYW1lID0gdGhpcy5zdGF0ZS5pbnB1dE5hbWU7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucmVwbGFjZVZvd2Vscykge1xuICAgICAgICAgICAgbGV0IHZvd2VsID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSA/ICd4JyA6ICdxJztcbiAgICAgICAgICAgIGdlbmVyYXRlZE5hbWUgPSBnZW5lcmF0ZWROYW1lLnJlcGxhY2VBbGwoL1thZWlvdV0oPyFbYWVpb3VdKSs/L2csIHZvd2VsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFkZFByZWZpeCkge1xuICAgICAgICAgICAgbGV0IHByZWZpeCA9IHRoaXMucHJlZml4ZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5wcmVmaXhlcy5sZW5ndGgpXTtcbiAgICAgICAgICAgIGdlbmVyYXRlZE5hbWUgPSBwcmVmaXggKyBnZW5lcmF0ZWROYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWRkU3VmZml4KSB7XG4gICAgICAgICAgICBsZXQgc3VmZml4ID0gdGhpcy5zdWZmaXhlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnN1ZmZpeGVzLmxlbmd0aCldO1xuICAgICAgICAgICAgZ2VuZXJhdGVkTmFtZSA9IGdlbmVyYXRlZE5hbWUgKyBzdWZmaXg7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtvdXRwdXROYW1lOiBnZW5lcmF0ZWROYW1lfSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxWaWV3PlxuICAgICAgICAgICAgICAgIDxDb2wgd2lkdGg9XCI0XCIgY2VudGVyZWQ9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5cIk9HXCIgTmFtZSBHZW5lcmF0b3I8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJvZ25hbWVcIj48aDM+TmFtZSB0byBcIk9nXCItaWZ5PC9oMz48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwib2duYW1lXCIgaWQ9XCJvZ25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGJnLWRhcmsgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnVwZGF0ZUlucHV0TmFtZShlLnRhcmdldC52YWx1ZSl9Lz5cblxuICAgICAgICAgICAgICAgICAgICA8aDM+XCJPZ1wiLWlmaWVyczo8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cC12ZXJ0aWNhbFwiIHJvbGU9XCJncm91cFwiIHN0eWxlPXt7d2lkdGg6ICcxMDAlJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvZ2dsZUJ1dHRvbiBuYW1lPVwiYWRkUHJlZml4XCIgdGV4dD1cIkFkZCBhIHByZWZpeD9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e2UgPT4gdGhpcy5zZXRTdGF0ZSh7YWRkUHJlZml4OiBlLnRhcmdldC5jaGVja2VkfSwgdGhpcy5nZW5lcmF0ZU5hbWUpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9nZ2xlQnV0dG9uIG5hbWU9XCJhZGRTdWZmaXhcIiB0ZXh0PVwiQWRkIGEgc3VmZml4P1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17ZSA9PiB0aGlzLnNldFN0YXRlKHthZGRTdWZmaXg6IGUudGFyZ2V0LmNoZWNrZWR9LCB0aGlzLmdlbmVyYXRlTmFtZSl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb2dnbGVCdXR0b24gbmFtZT1cInJlcGxhY2VWb3dlbHNcIiB0ZXh0PVwiUmVwbGFjZSB2b3dlbHMgd2l0aCAneCcgb3IgJ3EnP1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17ZSA9PiB0aGlzLnNldFN0YXRlKHtyZXBsYWNlVm93ZWxzOiBlLnRhcmdldC5jaGVja2VkfSwgdGhpcy5nZW5lcmF0ZU5hbWUpfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDxDb2wgY2VudGVyZWQ9e3RydWV9PlxuICAgICAgICAgICAgICAgICAgICA8aDEgaWQ9XCJnZW5lcmF0ZWROYW1lXCIgc3R5bGU9e3tmb250V2VpZ2h0OiAxMDAsIHRleHRBbGlnbjogJ2NlbnRlcicsIHZpc2liaWxpdHk6IHRoaXMuc3RhdGUuaW5wdXROYW1lID8gJ3Zpc2libGUnIDogJ2hpZGRlbid9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm91dHB1dE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gbmFtZT1cImdlbmVyYXRlTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIlJlZ2VuZXJhdGUgTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXtfID0+IHRoaXMuZ2VuZXJhdGVOYW1lKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzUwJScsIHZpc2liaWxpdHk6IHRoaXMuc3RhdGUuaW5wdXROYW1lID8gJ3Zpc2libGUnIDogJ2hpZGRlbid9fS8+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPR05hbWVHZW47IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKlxyXG4gQWJvdmUgZm9udCBpcyBSb2JvdG8gTGlnaHQgKDMwMClcclxuICovXHJcblxyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzFhMWExYVxyXG59XHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IFwiLSBcIjtcclxufVxyXG5cclxuKiB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjojZmFmYWZhXHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTs7RUFFRTs7QUFFRjtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakM7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuLypcXHJcXG4gQWJvdmUgZm9udCBpcyBSb2JvdG8gTGlnaHQgKDMwMClcXHJcXG4gKi9cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMWExYTFhXFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBcXFwiLSBcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBjb2xvcjojZmFmYWZhXFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlJvdXRlIiwiSGFzaFJvdXRlciIsIlJvdXRlciIsIlJvdXRlcyIsIkhvbWUiLCJPR05hbWVHZW4iLCJHT09TRSIsIkNoZWNrbGlzdEJ1aWxkZXIiLCJOb01hdGNoIiwianN4IiwiX2pzeCIsImpzeHMiLCJfanN4cyIsIkFwcCIsImNoaWxkcmVuIiwiZXhhY3QiLCJwYXRoIiwiZWxlbWVudCIsInN0YXR1cyIsIkNvbCIsIl9yZWYiLCJ3aWR0aCIsImNlbnRlcmVkIiwiY2xhc3NOYW1lcyIsImNvbmNhdCIsInVuZGVmaW5lZCIsImNsYXNzTmFtZSIsIkJ1dHRvbiIsIm5hbWUiLCJ0ZXh0IiwiYWN0aW9uIiwic3R5bGUiLCJvbkNsaWNrIiwiaWQiLCJ1c2VTdGF0ZSIsIkZvbnRBd2Vzb21lSWNvbiIsImZhQ2hlY2siLCJmYVhtYXJrIiwiQ2hlY2tib3giLCJpbml0aWFsVmFsdWUiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsImRvVXBkYXRlIiwibmV3VmFsdWUiLCJ0eXBlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiaHRtbEZvciIsImZpeGVkV2lkdGgiLCJpY29uIiwiVGV4dEFyZWEiLCJmb3JtYXR0ZXIiLCJjb250ZW50Iiwic2V0Q29udGVudCIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiZWRpdGluZyIsInNldEVkaXRpbmciLCJ2YWx1ZSIsIm9uQmx1ciIsImRlZmF1bHRWYWx1ZSIsImF1dG9Gb2N1cyIsIlRvZ2dsZUJ1dHRvbiIsIkNoaWxkcmVuIiwiTmF2Q29sdW1uIiwidGl0bGUiLCJtYXAiLCJjaGlsZCIsIlRhYk5hdiIsInRhYnMiLCJzZWxlY3RlZFRhYklkIiwic2V0U2VsZWN0ZWRUYWJJZCIsInNlbGVjdGVkVGFiIiwiZmluZCIsInRhYiIsInQiLCJWaWV3IiwiaHJlZiIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImtleSIsImluZm8iLCJlcnJvciIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXJyIiwiRGV4aWUiLCJjaGVja2xpc3REQiIsInZlcnNpb24iLCJzdG9yZXMiLCJzZWN0aW9ucyIsIml0ZW1zIiwib24iLCJpbml0aWFsU2VjdGlvbklkIiwiY3J5cHRvIiwicmFuZG9tVVVJRCIsImFkZCIsInBhcmVudFNlY3Rpb25JZCIsInNlY3Rpb25OdW1iZXIiLCJpdGVtTnVtYmVyIiwiZGVzY3JpcHRpb24iLCJjb21wbGV0ZWQiLCJhZGRFbXB0eUl0ZW0iLCJfY2FsbGVlIiwic2VjdGlvbklkIiwibmV3SWQiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwidDAiLCJjb25zb2xlIiwiX3giLCJ1cGRhdGVJdGVtIiwiX3JlZjIiLCJfY2FsbGVlMiIsIml0ZW1JZCIsInVwZGF0ZSIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsIl94MiIsIl94MyIsInJlbW92ZUl0ZW0iLCJfcmVmMyIsIl9jYWxsZWUzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiX3g0IiwiUmVhY3RET00iLCJyb290RWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInJvb3QiLCJjcmVhdGVSb290IiwicmVuZGVyIiwidXNlTGl2ZVF1ZXJ5IiwiZmFNaW51cyIsIlNlY3Rpb25WaWV3Iiwid2hlcmUiLCJlcXVhbHMiLCJ0b0FycmF5Iiwic2NvcGUiLCJpdGVtIiwiaWR4IiwiXyIsInZhbCIsImNvbFNwYW4iLCJhbGVydCIsInNlY3Rpb25MaXN0IiwiTGluayIsInRvIiwiX1JlYWN0JENvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwiX2RlZmluZVByb3BlcnR5IiwiZmllbGRDb250ZW50Iiwic2V0U3RhdGUiLCJpbnB1dE5hbWUiLCJnZW5lcmF0ZU5hbWUiLCJnZW5lcmF0ZWROYW1lIiwic3RhdGUiLCJyZXBsYWNlVm93ZWxzIiwidm93ZWwiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJyZXBsYWNlQWxsIiwiYWRkUHJlZml4IiwicHJlZml4IiwicHJlZml4ZXMiLCJmbG9vciIsImFkZFN1ZmZpeCIsInN1ZmZpeCIsInN1ZmZpeGVzIiwib3V0cHV0TmFtZSIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsIl90aGlzMiIsInVwZGF0ZUlucHV0TmFtZSIsInJvbGUiLCJmb250V2VpZ2h0IiwidGV4dEFsaWduIiwidmlzaWJpbGl0eSIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=