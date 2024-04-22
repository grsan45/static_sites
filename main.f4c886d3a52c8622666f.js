"use strict";
(self["webpackChunkgrass_static_sites"] = self["webpackChunkgrass_static_sites"] || []).push([["main"],{

/***/ 144:
/*!********************************!*\
  !*** ./src/components/App.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ 976);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ 767);
/* harmony import */ var _views_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/Home */ 716);
/* harmony import */ var _views_OGNameGen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/OGNameGen */ 370);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ 848);





var App = function App() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Routes, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
          exact: true,
          path: "/",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_views_Home__WEBPACK_IMPORTED_MODULE_1__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
          exact: true,
          path: "og_name_gen",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_views_OGNameGen__WEBPACK_IMPORTED_MODULE_2__["default"], {})
        })]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ 954:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ 338);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ 144);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ 848);




var rootElement = document.createElement("div");
document.body.appendChild(rootElement);
var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(rootElement);
root.render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_App__WEBPACK_IMPORTED_MODULE_2__["default"], {}));

/***/ }),

/***/ 716:
/*!****************************!*\
  !*** ./src/views/Home.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ 976);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 848);



var Home = function Home() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
      children: "Hello World!"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
      to: "/og_name_gen",
      children: "OG Name Gen"
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 848);


var OGNameGen = function OGNameGen() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
      children: "Hello other world!"
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OGNameGen);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(954)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mNGM4ODZkM2E1MmM4NjIyNjY2Zi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUM2QztBQUV2QztBQUNVO0FBQUE7QUFFMUMsSUFBTVcsR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUEsRUFBUztFQUNkLG9CQUNJSCxzREFBQSxDQUFDTCwyREFBTTtJQUFBUyxRQUFBLGVBQ0hKLHNEQUFBO01BQUFJLFFBQUEsZUFDSUYsdURBQUEsQ0FBQ04sb0RBQU07UUFBQVEsUUFBQSxnQkFDSEosc0RBQUEsQ0FBQ1AsbURBQUs7VUFBQ1ksS0FBSztVQUFDQyxJQUFJLEVBQUMsR0FBRztVQUFDQyxPQUFPLGVBQUVQLHNEQUFBLENBQUNILG1EQUFJLElBQUU7UUFBRSxDQUFDLENBQUMsZUFDMUNHLHNEQUFBLENBQUNQLG1EQUFLO1VBQUNZLEtBQUs7VUFBQ0MsSUFBSSxFQUFDLGFBQWE7VUFBQ0MsT0FBTyxlQUFFUCxzREFBQSxDQUFDRix3REFBUyxJQUFFO1FBQUUsQ0FBQyxDQUFDO01BQUEsQ0FDckQ7SUFBQyxDQUNSO0VBQUMsQ0FDRixDQUFDO0FBRWpCLENBQUM7QUFFRCxpRUFBZUssR0FBRzs7Ozs7Ozs7Ozs7Ozs7OztBQ25CUTtBQUNjO0FBQ0w7QUFBQTtBQUVuQyxJQUFNTSxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztBQUNqREQsUUFBUSxDQUFDRSxJQUFJLENBQUNDLFdBQVcsQ0FBQ0osV0FBVyxDQUFDO0FBRXRDLElBQU1LLElBQUksR0FBR04sd0RBQW1CLENBQUNDLFdBQVcsQ0FBQztBQUM3Q0ssSUFBSSxDQUFDRSxNQUFNLGVBQUNoQixzREFBQSxDQUFDRyx1REFBRyxJQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUk07QUFDWTtBQUFBO0FBRXRDLElBQU1OLElBQUksR0FBRyxTQUFQQSxJQUFJQSxDQUFBLEVBQVM7RUFDZixvQkFDSUssdURBQUE7SUFBQUUsUUFBQSxnQkFDSUosc0RBQUE7TUFBQUksUUFBQSxFQUFJO0lBQVksQ0FBSSxDQUFDLGVBQ3JCSixzREFBQSxDQUFDaUIsa0RBQUk7TUFBQ0MsRUFBRSxFQUFFLGNBQWU7TUFBQWQsUUFBQSxFQUFDO0lBQVcsQ0FBTSxDQUFDO0VBQUEsQ0FDM0MsQ0FBQztBQUVkLENBQUM7QUFFRCxpRUFBZVAsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaTztBQUFBO0FBRTFCLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFBLEVBQVM7RUFDcEIsb0JBQ0lFLHNEQUFBO0lBQUFJLFFBQUEsZUFDSUosc0RBQUE7TUFBQUksUUFBQSxFQUFJO0lBQWtCLENBQUk7RUFBQyxDQUMxQixDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlTixTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3Jhc3Nfc3RhdGljX3NpdGVzLy4vc3JjL2NvbXBvbmVudHMvQXBwLmpzeCIsIndlYnBhY2s6Ly9ncmFzc19zdGF0aWNfc2l0ZXMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3Jhc3Nfc3RhdGljX3NpdGVzLy4vc3JjL3ZpZXdzL0hvbWUuanN4Iiwid2VicGFjazovL2dyYXNzX3N0YXRpY19zaXRlcy8uL3NyYy92aWV3cy9PR05hbWVHZW4uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Um91dGUsIEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZXN9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCBIb21lIGZyb20gXCIuLi92aWV3cy9Ib21lXCJcbmltcG9ydCBPR05hbWVHZW4gZnJvbSBcIi4uL3ZpZXdzL09HTmFtZUdlblwiXG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Um91dGVyPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZSAvPn0vPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIm9nX25hbWVfZ2VuXCIgZWxlbWVudD17PE9HTmFtZUdlbiAvPn0vPlxuICAgICAgICAgICAgICAgIDwvUm91dGVzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUm91dGVyPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XG5cbmNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocm9vdEVsZW1lbnQpO1xuXG5jb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChyb290RWxlbWVudCk7XG5yb290LnJlbmRlcig8QXBwIC8+KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5IZWxsbyBXb3JsZCE8L2gxPlxuICAgICAgICAgICAgPExpbmsgdG89e1wiL29nX25hbWVfZ2VuXCJ9Pk9HIE5hbWUgR2VuPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBPR05hbWVHZW4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5IZWxsbyBvdGhlciB3b3JsZCE8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT0dOYW1lR2VuOyJdLCJuYW1lcyI6WyJSZWFjdCIsIlJvdXRlIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlciIsIlJvdXRlcyIsIkhvbWUiLCJPR05hbWVHZW4iLCJqc3giLCJfanN4IiwianN4cyIsIl9qc3hzIiwiQXBwIiwiY2hpbGRyZW4iLCJleGFjdCIsInBhdGgiLCJlbGVtZW50IiwiUmVhY3RET00iLCJyb290RWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInJvb3QiLCJjcmVhdGVSb290IiwicmVuZGVyIiwiTGluayIsInRvIl0sInNvdXJjZVJvb3QiOiIifQ==