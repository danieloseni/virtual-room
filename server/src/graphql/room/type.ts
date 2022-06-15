import {GraphQLObjectType, GraphQLString} from 'graphql';

export const RoomType = new GraphQLObjectType({
    name: "Room",
    fields: () => ({
        title: {type: GraphQLString},
        date_created: {type: GraphQLString},
        creator: {type: GraphQLString},
        id: {type:GraphQLString}
    })
})