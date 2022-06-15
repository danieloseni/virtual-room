export interface InAppError{
    message: "unauthorized" | "validation_error" | 'not_found' | 'server_error_generated', 
    content?: any,
    validation_errors?: {[x:string]: any},
    status_code?: number
}