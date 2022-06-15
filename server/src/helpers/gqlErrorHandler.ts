import { InAppError } from "../interfaces/error";

export default function (error:string):InAppError{
    try {
        const json = JSON.parse(error);
        return json
    } catch (error) {
        return {
            message: "server_error_generated",
            content: error
        }
    }
}