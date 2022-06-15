export {}
//imort the jwt library
const jwt = require('jsonwebtoken');


//this function get the token from the request header, and makes it available to the controller by appending the details to the request object
export default function(req:any, res:any, next:any, automaticallyRespond = true):void{
	
			//get the token from the authorization value in the header
			const token = req.headers?.authorization?.split?.(" ")[1];
			//ensure that the token is valid and decodable
			jwt.verify(token, process.env.jwtKeyPhrase, async (err:any, decodedToken:any) => {
            if(err){
                
            	//if there's an error, it means the token is invalid, therefore add null to the request object
               req.tokenDetails = null
               return automaticallyRespond ? res.status(401).json({message: "Unauthorized"}) : null
            }else{
            	//if no errors get the details encoded inside the token and append it to the request object
                req.tokenDetails = decodedToken
                //push the newly generated structured request object to the controller
                return automaticallyRespond ? next() : decodedToken;
            }

        })
	
	
}
export  function returnAuthToken(req:any, res:any, next:any,):Promise<{[x:string]:any} | null>{
	
			//get the token from the authorization value in the header
			const token = req.headers?.authorization?.split?.(" ")[1];
			//ensure that the token is valid and decodable
			return new Promise((resolve, reject) => {
                jwt.verify(token, process.env.jwtKeyPhrase, async (err:any, decodedToken:any) => {
                    if(err){
                        //if there's an error, it means the token is invalid, therefore, return null to the caller
                       resolve(null)
                    }else{
                        //if no errors get the details encoded inside the token and return it to the caller
                     
                        resolve(decodedToken)
                    }
        
            })
        })
	
	
}