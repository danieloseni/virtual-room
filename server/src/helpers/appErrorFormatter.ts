//this function basically stringifies the json errors. Because that is what the error handler helper understands

export default function(error:{[x:string]:any}, path?:string){
    return JSON.stringify({...error,path})
}