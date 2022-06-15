import { User, UserError } from "interfaces/user";

export type LoginSuccess = (user:User) => void;
export type LoginFailure = (error:UserError) => void
export type RegisterSuccess = (user:User) => void;
export type RegisterFailure = (error:UserError) => void