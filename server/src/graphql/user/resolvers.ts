import { GraphQLFieldResolver } from "graphql";
import { jwtgenerator } from "../../helpers/jwtgenerator";
import User from '../../models/user';
import { LoginCredentials, RegistrationCredentials } from './ts/interfaces';

export const register:GraphQLFieldResolver<{},{},RegistrationCredentials> = async(parent, args) => {
    const {firstname, lastname, email, password} = args

    const user = await new User({
        firstname, lastname, email, password
    }).save()

    return {
        firstname,lastname,email,token: jwtgenerator({id: user.id})
    }
}

export const login:GraphQLFieldResolver<{},{},LoginCredentials> = async(parent, args) => {
    const {email, password} = args

    //@ts-ignore
    const user = await User.login(email, password);

    return {
        ...user,token: jwtgenerator({id: user.id})
    }
}

export const getUser:GraphQLFieldResolver<{}, {}> = async (parent, args, context) => {
    
}