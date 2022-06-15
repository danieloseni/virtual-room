import { AppError } from "./error";
export interface RoomCreator{
    firstname: string,
    lastname: string,
    email: string,
    id: string
}
export interface Room{
    title: string,
    date_created: string,
    creator: RoomCreator
}

export interface RoomError extends AppError{}