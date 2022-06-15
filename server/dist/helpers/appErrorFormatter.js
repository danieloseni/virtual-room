"use strict";
//this function basically stringifies the json errors. Because that is what the error handler helper understands
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(error, path) {
    return JSON.stringify(Object.assign(Object.assign({}, error), { path }));
}
exports.default = default_1;
