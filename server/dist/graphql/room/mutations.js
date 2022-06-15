"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const type_1 = require("./type");
const resolvers_1 = require("./resolvers");
const mutations = {
    addRoom: {
        type: type_1.RoomType,
        args: {
            title: { type: graphql_1.GraphQLString }
        },
        resolve: resolvers_1.addRoom
    }
};
exports.default = mutations;
