"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/auth/utils.ts":
/*!*******************************!*\
  !*** ./src/app/auth/utils.ts ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthActions: function() { return /* binding */ AuthActions; }\n/* harmony export */ });\n/* harmony import */ var wretch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wretch */ \"(app-pages-browser)/./node_modules/wretch/dist/index.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n\n\n// Base API setup for making HTTP requests\nconst api = (0,wretch__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"http://localhost:8000\").accept(\"application/json\");\n/**\r\n * Stores a token in cookies.\r\n * @param {string} token - The token to be stored.\r\n * @param {\"access\" | \"refresh\"} type - The type of the token (access or refresh).\r\n */ const storeToken = (token, type)=>{\n    js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(type + \"Token\", token);\n};\n/**\r\n * Retrieves a token from cookies.\r\n * @param {\"access\" | \"refresh\"} type - The type of the token to retrieve (access or refresh).\r\n * @returns {string | undefined} The token, if found.\r\n */ const getToken = (type)=>{\n    return js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(type + \"Token\");\n};\n/**\r\n * Removes both access and refresh tokens from cookies.\r\n */ const removeTokens = ()=>{\n    js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].remove(\"accessToken\");\n    js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].remove(\"refreshToken\");\n};\nconst register = (email, username, password)=>{\n    return api.post({\n        email,\n        username,\n        password\n    }, \"/auth/users/\");\n};\nconst login = (email, password)=>{\n    return api.post({\n        username: email,\n        password\n    }, \"/auth/jwt/create\");\n};\nconst logout = ()=>{\n    const refreshToken = getToken(\"refresh\");\n    return api.post({\n        refresh: refreshToken\n    }, \"/auth/logout/\");\n};\nconst handleJWTRefresh = ()=>{\n    const refreshToken = getToken(\"refresh\");\n    return api.post({\n        refresh: refreshToken\n    }, \"/auth/jwt/refresh\");\n};\nconst resetPassword = (email)=>{\n    return api.post({\n        email\n    }, \"/auth/users/reset_password/\");\n};\nconst resetPasswordConfirm = (new_password, re_new_password, token, uid)=>{\n    return api.post({\n        uid,\n        token,\n        new_password,\n        re_new_password\n    }, \"/auth/users/reset_password_confirm/\");\n};\nconst AuthActions = ()=>{\n    return {\n        login,\n        resetPasswordConfirm,\n        handleJWTRefresh,\n        register,\n        resetPassword,\n        storeToken,\n        getToken,\n        logout,\n        removeTokens\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXV0aC91dGlscy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEI7QUFDSTtBQUVoQywwQ0FBMEM7QUFDMUMsTUFBTUUsTUFBTUYsa0RBQU1BLENBQUMseUJBQXlCRyxNQUFNLENBQUM7QUFFbkQ7Ozs7Q0FJQyxHQUNELE1BQU1DLGFBQWEsQ0FBQ0MsT0FBZUM7SUFDakNMLGlEQUFPQSxDQUFDTSxHQUFHLENBQUNELE9BQU8sU0FBU0Q7QUFDOUI7QUFFQTs7OztDQUlDLEdBQ0QsTUFBTUcsV0FBbUIsQ0FBQ0Y7SUFDeEIsT0FBT0wsaURBQU9BLENBQUNRLEdBQUcsQ0FBQ0gsT0FBTztBQUM1QjtBQUVBOztDQUVDLEdBQ0QsTUFBTUksZUFBZTtJQUNuQlQsaURBQU9BLENBQUNVLE1BQU0sQ0FBQztJQUNmVixpREFBT0EsQ0FBQ1UsTUFBTSxDQUFDO0FBQ2pCO0FBRUEsTUFBTUMsV0FBVyxDQUFDQyxPQUFlQyxVQUFrQkM7SUFDakQsT0FBT2IsSUFBSWMsSUFBSSxDQUFDO1FBQUVIO1FBQU9DO1FBQVVDO0lBQVMsR0FBRztBQUNqRDtBQUVBLE1BQU1FLFFBQVEsQ0FBQ0osT0FBZUU7SUFDNUIsT0FBT2IsSUFBSWMsSUFBSSxDQUFDO1FBQUVGLFVBQVVEO1FBQU9FO0lBQVMsR0FBRztBQUNqRDtBQUVBLE1BQU1HLFNBQVM7SUFDYixNQUFNQyxlQUFlWCxTQUFTO0lBQzlCLE9BQU9OLElBQUljLElBQUksQ0FBQztRQUFFSSxTQUFTRDtJQUFhLEdBQUc7QUFDN0M7QUFFQSxNQUFNRSxtQkFBbUI7SUFDdkIsTUFBTUYsZUFBZVgsU0FBUztJQUM5QixPQUFPTixJQUFJYyxJQUFJLENBQUM7UUFBRUksU0FBU0Q7SUFBYSxHQUFHO0FBQzdDO0FBRUEsTUFBTUcsZ0JBQWdCLENBQUNUO0lBQ3JCLE9BQU9YLElBQUljLElBQUksQ0FBQztRQUFFSDtJQUFNLEdBQUc7QUFDN0I7QUFFQSxNQUFNVSx1QkFBdUIsQ0FDM0JDLGNBQ0FDLGlCQUNBcEIsT0FDQXFCO0lBRUEsT0FBT3hCLElBQUljLElBQUksQ0FDYjtRQUFFVTtRQUFLckI7UUFBT21CO1FBQWNDO0lBQWdCLEdBQzVDO0FBRUo7QUFFTyxNQUFNRSxjQUFjO0lBQ3pCLE9BQU87UUFDTFY7UUFDQU07UUFDQUY7UUFDQVQ7UUFDQVU7UUFDQWxCO1FBQ0FJO1FBQ0FVO1FBQ0FSO0lBQ0Y7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYXV0aC91dGlscy50cz8yNjZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3cmV0Y2ggZnJvbSBcIndyZXRjaFwiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG4vLyBCYXNlIEFQSSBzZXR1cCBmb3IgbWFraW5nIEhUVFAgcmVxdWVzdHNcclxuY29uc3QgYXBpID0gd3JldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwXCIpLmFjY2VwdChcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcblxyXG4vKipcclxuICogU3RvcmVzIGEgdG9rZW4gaW4gY29va2llcy5cclxuICogQHBhcmFtIHtzdHJpbmd9IHRva2VuIC0gVGhlIHRva2VuIHRvIGJlIHN0b3JlZC5cclxuICogQHBhcmFtIHtcImFjY2Vzc1wiIHwgXCJyZWZyZXNoXCJ9IHR5cGUgLSBUaGUgdHlwZSBvZiB0aGUgdG9rZW4gKGFjY2VzcyBvciByZWZyZXNoKS5cclxuICovXHJcbmNvbnN0IHN0b3JlVG9rZW4gPSAodG9rZW46IHN0cmluZywgdHlwZTogXCJhY2Nlc3NcIiB8IFwicmVmcmVzaFwiKSA9PiB7XHJcbiAgQ29va2llcy5zZXQodHlwZSArIFwiVG9rZW5cIiwgdG9rZW4pO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJldHJpZXZlcyBhIHRva2VuIGZyb20gY29va2llcy5cclxuICogQHBhcmFtIHtcImFjY2Vzc1wiIHwgXCJyZWZyZXNoXCJ9IHR5cGUgLSBUaGUgdHlwZSBvZiB0aGUgdG9rZW4gdG8gcmV0cmlldmUgKGFjY2VzcyBvciByZWZyZXNoKS5cclxuICogQHJldHVybnMge3N0cmluZyB8IHVuZGVmaW5lZH0gVGhlIHRva2VuLCBpZiBmb3VuZC5cclxuICovXHJcbmNvbnN0IGdldFRva2VuID0gICAgICAgICAodHlwZTogc3RyaW5nKSA9PiB7XHJcbiAgcmV0dXJuIENvb2tpZXMuZ2V0KHR5cGUgKyBcIlRva2VuXCIpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMgYm90aCBhY2Nlc3MgYW5kIHJlZnJlc2ggdG9rZW5zIGZyb20gY29va2llcy5cclxuICovXHJcbmNvbnN0IHJlbW92ZVRva2VucyA9ICgpID0+IHtcclxuICBDb29raWVzLnJlbW92ZShcImFjY2Vzc1Rva2VuXCIpO1xyXG4gIENvb2tpZXMucmVtb3ZlKFwicmVmcmVzaFRva2VuXCIpO1xyXG59O1xyXG5cclxuY29uc3QgcmVnaXN0ZXIgPSAoZW1haWw6IHN0cmluZywgdXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xyXG4gIHJldHVybiBhcGkucG9zdCh7IGVtYWlsLCB1c2VybmFtZSwgcGFzc3dvcmQgfSwgXCIvYXV0aC91c2Vycy9cIik7XHJcbn07XHJcblxyXG5jb25zdCBsb2dpbiA9IChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XHJcbiAgcmV0dXJuIGFwaS5wb3N0KHsgdXNlcm5hbWU6IGVtYWlsLCBwYXNzd29yZCB9LCBcIi9hdXRoL2p3dC9jcmVhdGVcIik7XHJcbn07XHJcblxyXG5jb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgcmVmcmVzaFRva2VuID0gZ2V0VG9rZW4oXCJyZWZyZXNoXCIpO1xyXG4gIHJldHVybiBhcGkucG9zdCh7IHJlZnJlc2g6IHJlZnJlc2hUb2tlbiB9LCBcIi9hdXRoL2xvZ291dC9cIik7XHJcbn07XHJcblxyXG5jb25zdCBoYW5kbGVKV1RSZWZyZXNoID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJlZnJlc2hUb2tlbiA9IGdldFRva2VuKFwicmVmcmVzaFwiKTtcclxuICByZXR1cm4gYXBpLnBvc3QoeyByZWZyZXNoOiByZWZyZXNoVG9rZW4gfSwgXCIvYXV0aC9qd3QvcmVmcmVzaFwiKTtcclxufTtcclxuXHJcbmNvbnN0IHJlc2V0UGFzc3dvcmQgPSAoZW1haWw6IHN0cmluZykgPT4ge1xyXG4gIHJldHVybiBhcGkucG9zdCh7IGVtYWlsIH0sIFwiL2F1dGgvdXNlcnMvcmVzZXRfcGFzc3dvcmQvXCIpO1xyXG59O1xyXG5cclxuY29uc3QgcmVzZXRQYXNzd29yZENvbmZpcm0gPSAoXHJcbiAgbmV3X3Bhc3N3b3JkOiBzdHJpbmcsXHJcbiAgcmVfbmV3X3Bhc3N3b3JkOiBzdHJpbmcsXHJcbiAgdG9rZW46IHN0cmluZyxcclxuICB1aWQ6IHN0cmluZ1xyXG4pID0+IHtcclxuICByZXR1cm4gYXBpLnBvc3QoXHJcbiAgICB7IHVpZCwgdG9rZW4sIG5ld19wYXNzd29yZCwgcmVfbmV3X3Bhc3N3b3JkIH0sXHJcbiAgICBcIi9hdXRoL3VzZXJzL3Jlc2V0X3Bhc3N3b3JkX2NvbmZpcm0vXCJcclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhBY3Rpb25zID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBsb2dpbixcclxuICAgIHJlc2V0UGFzc3dvcmRDb25maXJtLFxyXG4gICAgaGFuZGxlSldUUmVmcmVzaCxcclxuICAgIHJlZ2lzdGVyLFxyXG4gICAgcmVzZXRQYXNzd29yZCxcclxuICAgIHN0b3JlVG9rZW4sXHJcbiAgICBnZXRUb2tlbixcclxuICAgIGxvZ291dCxcclxuICAgIHJlbW92ZVRva2VucyxcclxuICB9O1xyXG59OyJdLCJuYW1lcyI6WyJ3cmV0Y2giLCJDb29raWVzIiwiYXBpIiwiYWNjZXB0Iiwic3RvcmVUb2tlbiIsInRva2VuIiwidHlwZSIsInNldCIsImdldFRva2VuIiwiZ2V0IiwicmVtb3ZlVG9rZW5zIiwicmVtb3ZlIiwicmVnaXN0ZXIiLCJlbWFpbCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJwb3N0IiwibG9naW4iLCJsb2dvdXQiLCJyZWZyZXNoVG9rZW4iLCJyZWZyZXNoIiwiaGFuZGxlSldUUmVmcmVzaCIsInJlc2V0UGFzc3dvcmQiLCJyZXNldFBhc3N3b3JkQ29uZmlybSIsIm5ld19wYXNzd29yZCIsInJlX25ld19wYXNzd29yZCIsInVpZCIsIkF1dGhBY3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/auth/utils.ts\n"));

/***/ })

});