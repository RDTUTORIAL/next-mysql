"use strict";
(() => {
var exports = {};
exports.id = 322;
exports.ids = [322];
exports.modules = {

/***/ 9605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'mysql2/promise'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

async function handler(req, res) {
    const dbconnection = await Object(function webpackMissingModule() { var e = new Error("Cannot find module 'mysql2/promise'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
        host: "localhost",
        database: "products",
        // port: 8889,
        user: "root",
        password: "password",
        socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
    });
    try {
        const query = "SELECT productid, productname, productimage FROM products";
        const values = [];
        const [data] = await dbconnection.execute(query, values);
        dbconnection.end();
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
var __webpack_exports__ = (__webpack_exec__(9605));
module.exports = __webpack_exports__;

})();