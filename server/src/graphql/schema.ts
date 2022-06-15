import { GraphQLSchema } from "graphql";
import RootQuery from "./rootQuery";
import RootMutation from "./rootMutation";

export default new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
})