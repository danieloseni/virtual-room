import { GraphQLString } from "graphql";
import { RoomType } from "./type";
import { addRoom } from './resolvers';

const mutations = {
    addRoom: {
        type: RoomType,
        args: {
            title: {type: GraphQLString}
        },
        resolve: addRoom
    }
}

export default mutations;