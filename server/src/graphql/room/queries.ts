import { GraphQLList, GraphQLString } from 'graphql';
import { RoomType } from './type';
import { getRoom, getRooms } from './resolvers';
import protectGQQueryOrMutation from '../../helpers/protectGQQueryOrMutation';

const queries = {
    room: {
        type: RoomType,
        args: {
            id: {type: GraphQLString}
        },
        resolve: protectGQQueryOrMutation(getRoom) 
    },
    rooms: {
        type: new GraphQLList(RoomType),
        
        resolve: protectGQQueryOrMutation(getRooms) 
    }
}

export default queries;