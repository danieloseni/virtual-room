"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const type_1 = require("./type");
const Query = {
    register: {
        type: type_1.UserType,
        args: {
            firstname: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            lastname: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            email: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            password: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        }
    }
};
exports.default = Query;
