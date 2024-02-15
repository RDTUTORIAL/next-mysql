(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 1935:
/***/ (() => {

throw new Error("Module build failed (from ../../../AppData/Roaming/npm/node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js):\nError: resolve-url-loader: CSS error\n  PostCSS received undefined instead of CSS string\n  at new Input (C:\\Users\\ASUS\\AppData\\Roaming\\npm\\node_modules\\next\\node_modules\\postcss\\lib\\input.js:24:13)\n    at encodeError (C:\\Users\\ASUS\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\loaders\\resolve-url-loader\\index.js:50:16)\n    at onFailure (C:\\Users\\ASUS\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\loaders\\resolve-url-loader\\index.js:36:18)");

/***/ }),

/***/ 4481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1935);
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2__);



function Home() {
    const [dataResponse, setdataResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function getPageData() {
            const apiUrlEndpoint = `http://localhost:3000/api/getdata-lib`;
            const response = await fetch(apiUrlEndpoint);
            const res = await response.json();
            console.log(res.products);
            setdataResponse(res.products);
        }
        getPageData();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),
        children: dataResponse.map((product)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: product.productname
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().photo),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: `/images/${product.productimage}`,
                            alt: ""
                        })
                    })
                ]
            }, product.productid);
        })
    });
}


/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4481));
module.exports = __webpack_exports__;

})();