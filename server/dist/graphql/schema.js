"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const rootQuery_1 = __importDefault(require("./rootQuery"));
const rootMutation_1 = __importDefault(require("./rootMutation"));
exports.default = new graphql_1.GraphQLSchema({
    query: rootQuery_1.default,
    mutation: rootMutation_1.default
});
