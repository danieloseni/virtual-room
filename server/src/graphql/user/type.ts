import { GraphQLObjectType, GraphQLString } from "graphql";

export const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        firstname: {type: GraphQLString},
        lastname: {type: GraphQLString},
        email: {type: GraphQLString},
        id: {type: GraphQLString},
        token: {type: GraphQLString}
    })
})