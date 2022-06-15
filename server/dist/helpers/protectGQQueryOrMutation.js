"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const appErrorFormatter_1 = __importDefault(require("./appErrorFormatter"));
//
function default_1(resolver) {
    return (parent, args, context, info) => {
        if (context === null || context === void 0 ? void 0 : context.user)
            return resolver(parent, args, context, info);
        const error = {
            message: "unauthorized",
            status_code: 401
        };
        throw new graphql_1.GraphQLError((0, appErrorFormatter_1.default)(error));
    };
}
exports.default = default_1;
