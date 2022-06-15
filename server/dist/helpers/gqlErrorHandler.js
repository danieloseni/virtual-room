"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(error) {
    try {
        const json = JSON.parse(error);
        return json;
    }
    catch (error) {
        return {
            message: "server_error_generated",
            content: error
        };
    }
}
exports.default = default_1;
