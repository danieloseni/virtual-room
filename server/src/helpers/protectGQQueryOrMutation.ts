import { GraphQLError, GraphQLFieldResolver } from "graphql";
import { InAppError } from "../interfaces/error";
import appErrorFormatter from "./appErrorFormatter";

//
export default function <TParent, TContext, Targs = any, TReturnValue = any>(resolver: GraphQLFieldResolver<TParent, TContext, Targs, TReturnValue>) {
    return (parent: any, args: any, context: any, info: any) => {
        if (context?.user) return resolver(parent, args, context, info)

        const error:InAppError = {
            message: "unauthorized",
            status_code: 401
        }

        throw new GraphQLError(appErrorFormatter(error))

    }
}