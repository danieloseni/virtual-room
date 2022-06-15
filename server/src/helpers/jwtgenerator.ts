export {}
const jwt = require('jsonwebtoken');
const maxAge = 7 * 24 * 60 * 60; //1 week

/**
 * 
 * @param details An object containing all the details that should be encoded into the jwt
 * @param age The lifespan of the token in seconds
 * @returns string
 */
export const jwtgenerator = (details: {[x:string]: any}, age?:number) =>{
    
	//After encoding,it returns the resulting jwt. The string you're seeing below is called the decode string. It is the key used in encrypting and decrypting the jwt.
    return jwt.sign(details, process.env.jwtKeyPhrase, {
        //Here, the maxage variable is used. As it can be seen, it is used to indicate when the token should expire, and that is, in a week
     expiresIn: age || maxAge
 })
} 

