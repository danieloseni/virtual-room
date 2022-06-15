import { AppError } from "./error";

export interface User{
    firstname: string,
    lastname: string,
    email: string,
    id: string,
    token?:string
}

export interface LoginCredentials{
    email: string,
    password: string
}

export interface RegistrationCredentials{
    email: string,
    password: string,
    firstname: string,
    lastname: string
}

export interface UserError extends AppError{}