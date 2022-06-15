import { GraphQLObjectType } from "graphql";
import roomMutations from './room/mutations';

const RootMutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        ...roomMutations
    }
})

export default RootMutation;