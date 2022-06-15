import { GraphQLFieldResolver } from "graphql";
import Room from '../../models/room';

export const getRoom:GraphQLFieldResolver<{}, {}, {id: string}> = (parent, args) => {
    const {id} = args;
    return Room.findOne({_id:id})
}
export const getRooms:GraphQLFieldResolver<{}, {}> = (parent, args, context) => {
    
    return Room.find({})
}

export const addRoom:GraphQLFieldResolver<{}, {}, {title: string}> = async (parent, args) => {
    const {title} = args;
    let room = await new Room({
        title
    }).save();

    return room;
}