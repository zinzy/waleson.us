"use strict";
exports.id = "component---src-pages-zinzy-js";
exports.ids = ["component---src-pages-zinzy-js"];
exports.modules = {

/***/ "./src/pages/zinzy.js":
/*!****************************!*\
  !*** ./src/pages/zinzy.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // data

const links = [{
  text: "Website",
  url: "https://www.zinzy.website/"
}, {
  text: "LinkedIn",
  url: "https://www.linkedin.com/in/zinzy/"
}]; // markup

const ZinzyPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "zinzy.waleson.us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "/"
  }, "\u2190 Waleson.us")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Zinzy Waleson"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi iaculis lacus neque, ut congue nulla dictum vitae. Sed tempus est vel lobortis vestibulum. Nullam eu quam posuere, aliquam velit ut, iaculis nisl. Nulla facilisi. Vivamus fermentum neque sit amet lacus posuere feugiat. Quisque sed tincidunt enim."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "list-unstyled mt-5"
  }, links.map(link => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    key: link.url
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: `${link.url}`
  }, link.text))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ZinzyPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-zinzy-js.js.map