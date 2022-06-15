import { Room, RoomError } from "interfaces/room";

export type AddRoomSuccessFunction = (room: Room) => void
export type AddRoomFailedFunction = (error: RoomError) => void

export type GetRoomSuccessFunction = (room: Room) => void
export type GetRoomFailedFunction = (error: RoomError) => void