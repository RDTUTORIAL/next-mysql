"use strict";
(() => {
var exports = {};
exports.id = 224;
exports.ids = [224];
exports.modules = {

/***/ 2368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ query)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'mysql2/promise'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

async function query({ query , values =[]  }) {
    const dbconnection = await Object(function webpackMissingModule() { var e = new Error("Cannot find module 'mysql2/promise'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
        host: "localhost",
        database: "products",
        // port: 8889,
        user: "root",
        password: "password",
        socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
    });
    try {
        const [results] = await dbconnection.execute(query, values);
        dbconnection.end();
        return results;
    } catch (error) {
        throw Error(error.message);
        return {
            error
        };
    }
}


/***/ }),

/***/ 4354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2368);

async function handler(req, res) {
    try {
        const querySql = "SELECT productid, productname, productimage FROM products";
        const valueParams = [];
        const data = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .query */ .I)({
            query: querySql,
            values: [
                valueParams
            ]
        });
        res.status(200).json({
            products: data
        });
    } catch (error) {
    // unhide to check error
    // res.status(500).json({ error: error.message });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4354));
module.exports = __webpack_exports__;

})();