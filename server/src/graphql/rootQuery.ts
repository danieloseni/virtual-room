import { GraphQLObjectType } from "graphql";
import roomQueries from './room/queries';

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        ...roomQueries
    }
})

export default RootQuery;