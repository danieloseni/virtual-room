const authValidationErrorHandler = (error:{[x:string]: any}) => {
    let errors:typeof error = {}
    if(error?.code === 11000){
        const keys = Object.keys(error?.keyPattern)
        keys?.forEach?.(key => {
            errors[key] = `${key} already exists`
        })
    }else{
        const values = Object.values(error?.errors || {})
        values?.forEach((value:any) => {
            const {path, message} = value
           
            errors[path] = message
        })
    }


    return errors;
}

export default authValidationErrorHandler