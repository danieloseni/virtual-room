import AxiosClient from "adapters/AxiosClient";
import { AxiosResponse } from "axios";
import { RoomError } from "interfaces/room";
import { title } from "process";
import { AddRoomFailedFunction, AddRoomSuccessFunction, GetRoomFailedFunction, GetRoomSuccessFunction } from "types/room";
import { rooms } from "urls";

export const parseErrors = (error: any) => {
    let customError: RoomError;

    if (error?.response) {
        const response = error.response as AxiosResponse;

        if (response.status === 400) {
            customError = {
                error_code: 'validation_error',
                message: 'there were validation errors',
                validation_errors: response.data
            }
        } else if (response.status === 401) {
            customError = {
                error_code: 'unauthorized',
                message: 'Unauthorized'
            }

        } else if (response.status === 404) {
            customError = {
                error_code: 'not_found',
                message: 'Unauthorized'
            }
        }
        else {
            customError = {
                error_code: 'server_error',
                message: 'an error occured on the server'
            }
        }
    } else {
        customError = {
            error_code: 'in_app_error',
            message: "an error occured within the app"
        }
    }


    return customError
}

export const addRoom = (title: string, success:AddRoomSuccessFunction, failed:AddRoomFailedFunction) => {
    try {
        const onSuccess = (response:AxiosResponse) => {
            success(response.data)
        }
    
        const onError = (error: any) => {
            failed(parseErrors(error))
        }
    
        const timeout = () => {
            failed({
                error_code: "timeout"
            })
        }
    
        new AxiosClient(rooms, onSuccess, onError, timeout, true).postWithoutConversion({title})
    } catch (error) {
        failed({
            error_code:"in_app_error"
        })
    }
}

export const getRoom = (roomId: string, success:GetRoomSuccessFunction, failed:GetRoomFailedFunction) => {
    try {
        const onSuccess = (response:AxiosResponse) => {
            success(response.data)
        }
    
        const onError = (error: any) => {
            failed(parseErrors(error))
        }
    
        const timeout = () => {
            failed({
                error_code: "timeout"
            })
        }
    
        new AxiosClient(`${rooms}/${roomId}`, onSuccess, onError, timeout, true).get()
    } catch (error) {
        failed({
            error_code:"in_app_error"
        })
    }
}