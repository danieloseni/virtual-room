"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const queries_1 = __importDefault(require("./room/queries"));
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQuery",
    fields: Object.assign({}, queries_1.default)
});
exports.default = RootQuery;
