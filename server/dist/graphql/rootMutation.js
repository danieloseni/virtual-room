"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const mutations_1 = __importDefault(require("./room/mutations"));
const RootMutation = new graphql_1.GraphQLObjectType({
    name: "Mutation",
    fields: Object.assign({}, mutations_1.default)
});
exports.default = RootMutation;
