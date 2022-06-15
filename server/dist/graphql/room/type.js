"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomType = void 0;
const graphql_1 = require("graphql");
exports.RoomType = new graphql_1.GraphQLObjectType({
    name: "Room",
    fields: () => ({
        title: { type: graphql_1.GraphQLString },
        date_created: { type: graphql_1.GraphQLString },
        creator: { type: graphql_1.GraphQLString },
        id: { type: graphql_1.GraphQLString }
    })
});
