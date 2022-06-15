export interface AppError{
    /**
     * The error code.
     * `timeout` - indicates that the network request timed out for some reason
     * `validation_error` - indicates that there were validation errors of some sort
     * `no_internet` - indicates that the user is probably not connnect to a working internet connection
     * `server_error` - indicates an error from the server
     * `not_found` - indicates that whatever resource was being requested is not available
     * `unauthorized` - indicates that the request is being made without appropriate authorization
     * `in_app_error` - indicates that the application had caught some exception
     */
    error_code: 'timeout' | 'validation_error' | 'no_internet' | 'server_error' | 'not_found' | 'unauthorized' | 'in_app_error',
    message?: string,
    validation_errors?: {[x:string]: any}
}