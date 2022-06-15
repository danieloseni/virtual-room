import { GraphQLNonNull, GraphQLString } from 'graphql';
import { UserType } from './type';
const Query = {
    register: {
        type: UserType,
        args: {
            firstname: {type: new GraphQLNonNull(GraphQLString)},
            lastname: {type: new GraphQLNonNull(GraphQLString)},
            email: {type: new GraphQLNonNull(GraphQLString)},
            password: {type: new GraphQLNonNull(GraphQLString)},
        }
    }
}

export default Query;