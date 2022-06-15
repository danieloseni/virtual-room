"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authValidationErrorHandler = (error) => {
    var _a;
    let errors = {};
    if ((error === null || error === void 0 ? void 0 : error.code) === 11000) {
        const keys = Object.keys(error === null || error === void 0 ? void 0 : error.keyPattern);
        (_a = keys === null || keys === void 0 ? void 0 : keys.forEach) === null || _a === void 0 ? void 0 : _a.call(keys, key => {
            errors[key] = `${key} already exists`;
        });
    }
    else {
        const values = Object.values((error === null || error === void 0 ? void 0 : error.errors) || {});
        values === null || values === void 0 ? void 0 : values.forEach((value) => {
            const { path, message } = value;
            errors[path] = message;
        });
    }
    return errors;
};
exports.default = authValidationErrorHandler;
