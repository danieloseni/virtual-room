"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const type_1 = require("./type");
const resolvers_1 = require("./resolvers");
const protectGQQueryOrMutation_1 = __importDefault(require("../../helpers/protectGQQueryOrMutation"));
const queries = {
    room: {
        type: type_1.RoomType,
        args: {
            id: { type: graphql_1.GraphQLString }
        },
        resolve: (0, protectGQQueryOrMutation_1.default)(resolvers_1.getRoom)
    },
    rooms: {
        type: new graphql_1.GraphQLList(type_1.RoomType),
        resolve: (0, protectGQQueryOrMutation_1.default)(resolvers_1.getRooms)
    }
};
exports.default = queries;
