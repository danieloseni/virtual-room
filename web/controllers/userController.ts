import AxiosClient from "adapters/AxiosClient";
import { AxiosResponse } from "axios";
import { LoginCredentials, RegistrationCredentials, UserError } from "interfaces/user";
import { LoginFailure, LoginSuccess, RegisterFailure, RegisterSuccess } from "types/user";
import { signin, signup } from "urls";

export const parseErrors = (error: any) => {
    let customError: UserError;

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

export const login = (credentials:LoginCredentials, success: LoginSuccess, failed: LoginFailure) => {
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
    
        new AxiosClient(`${signin}`, onSuccess, onError, timeout).postWithoutConversion(credentials)
    } catch (error) {
        failed({
            error_code:"in_app_error"
        })
    }

}

export const register = (credentials:RegistrationCredentials, success: RegisterSuccess, failed: RegisterFailure) => {
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
    
        new AxiosClient(`${signup}`, onSuccess, onError, timeout).postWithoutConversion(credentials)
    } catch (error) {
        failed({
            error_code:"in_app_error"
        })
    }

}
